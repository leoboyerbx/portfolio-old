// eslint-disable-next-line no-undef
class ProjectDetails extends HTMLDivElement {
  constructor () {
    super()
    window.setTimeout(() => {
      if (this.parentElement.scrollTop !== 0) this.classList.add('scrolled')
      const element = this
      this.parentElement.addEventListener('scroll', function (e) {
        if (this.scrollTop === 0) {
          element.classList.remove('scrolled')
        } else {
          element.classList.add('scrolled')
        }
      })
    })
  }
}

export default function () {
  window.customElements.define('project-details', ProjectDetails, {
    extends: 'div'
  })
}
