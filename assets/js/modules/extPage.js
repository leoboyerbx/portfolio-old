import { $ } from './qs'
let isAnimating = false
let waitingShow = false

export default function extPage (element) {
  const cache = element.querySelector('.cache')
  // const cursorFollow = document.querySelector('#cursor-follower')
  function showPage (x, y) {
    console.log(x, y)
    element.classList.add('open')
    isAnimating = true
    setTimeout(afterAnimation, 600)
    // cursorFollow.classList.add('ext-page')
    cache.style.left = x + 'px'
    cache.style.top = y + 'px'
    setTimeout(() => {
      $('#page-content').classList.add('ext-page')
    }, 900)
  }
  function centerCircle () {
    cache.style.top = (document.documentElement.clientHeight / 2) + 'px'
    cache.style.left = (document.documentElement.clientWidth / 2) + 'px'
  }
  function hidePage () {
    centerCircle()
    $('#page-content').style.display = 'block'
    element.classList.remove('open')
    hideContent()
  }
  function setHTML (html) {
    $('#ext-content').innerHTML = html
  }
  function showContent () {
    if (isAnimating) {
      waitingShow = true
    } else {
      $('#ext-content').classList.remove('hidden')
    }
  }
  function afterAnimation () {
    if (waitingShow) {
      $('#ext-content').classList.remove('hidden')
      waitingShow = false
    }
  }

  function hideContent () {
    $('#ext-content').classList.add('hidden')
  }

  return {
    showPage,
    hidePage,
    setHTML,
    showContent,
    hideContent
  }
}
