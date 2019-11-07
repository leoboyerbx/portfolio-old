import preventScroll from './preventScroll'
let open = false

export default function menu (menu, button) {
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
      preventScroll.disableScroll()
    }
    open = !open
  })
}
