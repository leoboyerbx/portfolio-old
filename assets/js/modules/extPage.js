import { $ } from './qs'
let isAnimating = false
let externalPageOpened = $('#ext-page').classList.contains('open')
export default function extPage (element) {
  const cache = element.querySelector('.cache')
  // const cursorFollow = document.querySelector('#cursor-follower')
  function showPage (x, y) {
    element.classList.add('open')
    externalPageOpened = true
    // $('#menu-button').classList.add('scrolled')
    isAnimating = true
    cache.style.left = x + 'px'
    cache.style.top = y + 'px'
    setTimeout(() => {
      $('#page-content').classList.add('ext-page')
      isAnimating = false
    }, 900)
  }
  function centerCircle () {
    cache.style.top = (document.documentElement.clientHeight / 2) + 'px'
    cache.style.left = (document.documentElement.clientWidth / 2) + 'px'
  }
  function hidePage () {
    externalPageOpened = false
    centerCircle()
    $('#page-content').classList.remove('ext-page')
    element.classList.remove('open')
    hideContent()
  }
  function setHTML (html) {
    $('#ext-content').innerHTML = html
  }
  function showContent () {
    function action () {
      $('#ext-content').classList.remove('hidden')
    }
    if (!isAnimating) {
      action()
    } else {
      setTimeout(action, 700)
    }
  }

  function isOpen () {
    return externalPageOpened
  }

  function hideContent () {
    $('#ext-content').classList.add('hidden')
  }

  return {
    showPage,
    hidePage,
    setHTML,
    showContent,
    hideContent,
    extContent: $('#ext-content'),
    isOpen
  }
}
