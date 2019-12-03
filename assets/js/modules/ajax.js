/* global fetch history */
import { $, $$ } from './qs'

let extPage
const cursorFollower = $('#cursor-follower')

function cursorLoading () {
  cursorFollower.classList.add('loading')
}
function cursorEndLoading () {
  cursorFollower.classList.remove('loading')
}

function setProgess (progress) {
  const circle = cursorFollower.querySelector('circle')
  circle.style.strokeDashoffset = (1 - progress) * 94 + 36
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

async function loadPage (page) {
  const response = await fetch(page, {
    headers: {
      'x-requested-with': 'xmlhttprequest'
    }
  })
  const reader = await response.body.getReader()
  // Step 2: get total length
  const contentLength = +response.headers.get('Content-Length')

  // Step 3: read the data
  let receivedLength = 0 // received that many bytes at the moment
  const chunks = [] // array of received binary chunks (comprises the body)
  while (true) {
    const { done, value } = await reader.read()

    if (done) {
      break
    }

    chunks.push(value)
    receivedLength += value.length

    console.log(`Received ${receivedLength} of ${contentLength}`)
  }

  // Step 4: concatenate chunks into single Uint8Array
  const chunksAll = new Uint8Array(receivedLength) // (4.1)
  let position = 0
  for (const chunk of chunks) {
    chunksAll.set(chunk, position) // (4.2)
    position += chunk.length
  }

  // Step 5: decode into a string
  const result = new TextDecoder('utf-8').decode(chunksAll)

  // We're done!
  console.log(result)
}

function openPage (page, x, y) {
  cursorLoading()
  loadPage(page).then(content => {
    extPage.setHTML(content)
    extPage.showContent()
    // cursorEndLoading()
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
