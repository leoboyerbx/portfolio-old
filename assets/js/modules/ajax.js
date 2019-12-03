/* global fetch history */
import { $, $$ } from './qs'
import fetchProgress from 'fetch-progress'

let extPage
let progress = 0
const cursorFollower = $('#cursor-follower')

function cursorLoading () {
  cursorFollower.classList.add('loading')
}
function cursorEndLoading () {
  setTimeout(() => {
    cursorFollower.classList.remove('loading')
    setTimeout(() => { setProgress(0) }, 200)
  }, 1000)
}

function setProgress (val) {
  progress = val
  const circle = cursorFollower.querySelector('circle')
  circle.style.strokeDashoffset = (1 - val) * 94 + 36
}
function increaseProgress (delta) {
  setProgress(progress + delta)
}

async function loadPage (page) {
  setProgress(0)
  return fetch(page, {
    headers: {
      'x-requested-with': 'xmlhttprequest'
    }
  }).then(
    fetchProgress({
      onProgress (progress) {
        setProgress((progress.percentage / 3) / 100)
      }
    })
  ).then(res => { return res.text() })
}
// async function loadPage (page) {
//   const response = await fetch(page, {
//     headers: {
//       'x-requested-with': 'xmlhttprequest'
//     }
//   })
//   const text = await response.text()
//   return text
// }


function openPage (page, x, y) {
  cursorLoading()
  loadPage(page).then(content => {
    extPage.setHTML(content)
    const images = extPage.extContent.querySelectorAll('img')
    if (images.length === 0) {
      // setProgress(1)
    } else {
      images.forEach(image => {
        if (image.complete) {
          increaseProgress(0.5 / images.length)
        } else {
          image.addEventListener('load', () => {
            increaseProgress((2 / 3) / images.length)
            if (progress === 1) {
              extPage.showContent()
              cursorEndLoading()
            }
          })
        }
      })
    }
    if (progress === 1) {
      extPage.showContent()
      cursorEndLoading()
    }
  }).catch(console.error)
  extPage.showPage(x, y)
  history.pushState({ key: 'value' }, 'titre', page)
}

export default function ajax (extP) {
  extPage = extP
  $$('.i-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      openPage(link.href, e.clientX, e.clientY)
    })
  })
  window.addEventListener('popstate', ev => {
    console.log(ev)
    if (ev.state === null) {
      extPage.hidePage()
    } else {
      openPage(document.location.pathname, document.documentElement.clientHeight / 2, document.documentElement.clientWidth / 2)
    }
  })
}
