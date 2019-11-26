import preventScroll from './preventScroll'
let open = false

export default function menu (menu, button, mainScroll = window) {
  button.addEventListener('click', () => {
    menu.classList.toggle('open')
    button.classList.toggle('menu-open')
    if (open) {
      button.classList.add('closed')
      preventScroll.enableScroll()
      setTimeout(function () {
        button.classList.remove('closed')
      }, 500)
    } else {
      button.classList.remove('closed')
      // preventScroll.disableScroll()
    }
    open = !open
  })
  mainScroll.addEventListener('scroll', () => {
    const scrollref = mainScroll === window ? window.scrollY : mainScroll.scrollTop
    if (scrollref === 0) {
      button.classList.remove('scrolled')
    } else {
      button.classList.add('scrolled')
    }
  })
}
