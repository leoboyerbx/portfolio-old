/* global fetch history */
import { $, $$ } from './qs'
import animateCols from '@/modules/animateCols'
// import fetchProgress from 'fetch-progress'

let extPage
// let progress = 0
let cursorFollower

function cursorLoading () {
  cursorFollower.classList.add('loading')
}
function cursorEndLoading () {
  setTimeout(() => {
    setTimeout(() => { cursorFollower.classList.remove('loading') }, 200)
  }, 2000)
}

// function setProgress (val) {
//   progress = val
//   const circle = cursorFollower.querySelector('circle')
//   circle.style.strokeDashoffset = (1 - val) * 94 + 36
// }
// function increaseProgress (delta) {
//   setProgress(progress + delta)
// }

// async function loadPage (page) {
//   setProgress(0)
//   return fetch(page, {
//     headers: {
//       'x-requested-with': 'xmlhttprequest'
//     }
//   }).then(
//     fetchProgress({
//       onProgress (progress) {
//         setProgress((progress.percentage / 3) / 100)
//       }
//     })
//   ).then(res => { return res.text() })
// }
async function loadPage (page) {
  const response = await fetch(page, {
    headers: {
      'x-requested-with': 'xmlhttprequest'
    }
  })
  const text = await response.text()
  return text
}

function openPage (page, x, y, pushState = true, state = { key: 'value' }) {
  function load () {
    cursorLoading()
    loadPage(page).then(content => {
      extPage.setHTML(content)
      const newLinks = extPage.extContent.querySelectorAll('.i-link')
      if (newLinks) setUpLinks($$(newLinks))
      animateCols(900)
      extPage.showContent()
      cursorEndLoading()
    }).catch(console.error)
  }

  if (extPage.isOpen()) {
    extPage.hideContent()
    setTimeout(load, 300)
  } else {
    extPage.showPage(x, y)
    load()
  }

  if (pushState) {
    history.pushState(state, 'titre', page)
  }
}

function setUpLinks (links) {
  links.addEventListener('click', function (e) {
    e.preventDefault()
    if (this.pathname === '/') {
      extPage.hidePage()
      history.pushState(null, null, '/')
    } else {
      openPage(this.href, e.clientX, e.clientY)
    }
  })
}

export default function ajax (extP) {
  cursorFollower = $('#cursor-follower')
  extPage = extP
  setUpLinks($$('.i-link'))
  window.addEventListener('popstate', ev => {
    if (ev.state === null) {
      extPage.hidePage()
    } else {
      openPage(document.location.pathname, document.documentElement.clientHeight / 2, document.documentElement.clientWidth / 2, false)
    }
  })
}
