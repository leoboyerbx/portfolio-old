export default function extPage (element) {
  const cache = element.querySelector('.cache')
  const cursorFollow = document.querySelector('#cursor-follower')
  const center = [document.documentElement.clientHeight / 2, document.documentElement.clientWidth / 2]
  function openPage (x, y) {
    console.log(x, y)
    element.classList.add('open')
    // cursorFollow.classList.add('ext-page')
    cache.style.left = x + 'px'
    cache.style.top = y + 'px'
    setTimeout(() => {
      document.querySelector('#page-content').classList.add('ext-page')
    }, 900)
  }
  function closePage () {
    document.querySelector('#page-content').style.display = 'block'
    element.classList.remove('open')
  }

  return {
    openPage,
    closePage
  }
}
