import { $ } from '@/modules/qs'

export default function arrowScroll () {
  const arrow = $('#arrow-scroll')
  arrow.addEventListener('click', function (e) {
    e.preventDefault()
    $('#my-portfolio').scrollIntoView({ behavior: 'smooth' })
  })
  const container = $('#page-content')
  container.addEventListener('scroll', () => {
    if (container.scrollTop) {
      arrow.classList.add('hidden')
    } else {
      arrow.classList.remove('hidden')
    }
  })
}
