import { $ } from './qs'

export default function extPage (element) {
  const cache = element.querySelector('.cache')
  // const cursorFollow = document.querySelector('#cursor-follower')
  function showPage (x, y) {
    console.log(x, y)
    element.classList.add('open')
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
    $('#page-content').classList.remove('ext-page')
    element.classList.remove('open')
    hideContent()
  }
  function setHTML (html) {
    $('#ext-content').innerHTML = html
  }
  function showContent () {
    $('#ext-content').classList.remove('hidden')
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
    extContent: $('#ext-content')
  }
}
