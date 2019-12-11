import _ from 'lodash/function'
import { $$ } from '@/modules/qs'

export default function auto (element, hovers = [], throttle = true) {
  let started = false
  function start () {
    if (!started) {
      cursorFollower(element, hovers, throttle)
      started = true
      window.cursor = true
      window.removeEventListener('mousemove', start, false)
    }
  }
  window.addEventListener('touchstart', function () {
    started = true
    element.style.display = 'none'
    window.cursor = false
  })
  window.addEventListener('mousemove', start, false)

  return {
    classList: element.classList
  }
}
function cursorFollower (element, hovers = [], throttle = true) {

  // eslint-disable-next-line no-undef
  class CursorLink extends HTMLElement {
    constructor () {
      super()
      this.className = this.getAttribute('class-names')
      this.addEventListener('mouseover', () => {
        element.classList.add(...(this.className).split(' '))
      })
      this.addEventListener('mouseleave', () => {
        element.classList.remove(...(this.className).split(' '))
      })
    }
  }

  for (const hover of hovers) {
    handleHovers(hover.selector, hover.className)
  }
  window.customElements.define('cursor-link', CursorLink)
  element.style.position = 'absolute'
  element.style.top = '0'
  element.style.left = '0'
  element.style.pointerEvents = 'none'

  function handler (ev) {
    if (!element.classList.contains('static')) {
      moveTo(ev.pageX, ev.pageY)
    }
  }
  if (throttle) {
    const throttled = _.throttle(handler, 50)
    document.addEventListener('mousemove', throttled)
    document.addEventListener('scroll', throttled)
  } else {
    document.addEventListener('mousemove', handler)
    document.addEventListener('scroll', handler)
  }

  const moveTo = (cx, cy) => {
    const rect = element.getBoundingClientRect()
    const x = cx - (rect.width / 2)
    const y = cy - (rect.height / 2)
    element.style.transform = `translate3d(${x}px, ${y}px,0)`
  }

  function handleHovers (selector, className) {
    $$(selector).forEach(link => {
      link.addEventListener('mouseover', () => {
        element.classList.add(...(className).split(' '))
      })
      link.addEventListener('mouseleave', () => {
        element.classList.remove(...(className).split(' '))
      })
    })
  }
}
