import { $, $$ } from './qs'

export default function innerLinks (selector, menu) {
  const links = $$(selector)
  links.addEventListener('click', function (ev) {
    const target = this.dataset.target
    if (target.startsWith('#')) {
      $(target).scrollIntoView({
        behavior: this.dataset.smooth ? 'smooth' : 'auto'
      })
      menu.close()
    }
  })
}
