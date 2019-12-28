import { $ } from '@/modules/qs'

export default function arrowScroll () {
  const arrow = $('#arrow-scroll')
  arrow.addEventListener('click', function (e) {
    e.preventDefault()
    $('#my-portfolio').scrollIntoView({ behavior: 'smooth', block: 'center' })
  })

  $('#page-content').addEventListener('scroll', () => {
    if (window.scrollY) {
      arrow.classList.add('scrolled')
    } else {
      arrow.classList.remove('scrolled')
    }
  })
}
