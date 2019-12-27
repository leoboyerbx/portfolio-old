import _throttle from 'lodash.throttle'

// import { $$ } from './qs'
let isGrabbed = false
let gElement
export function unGrab () {
  isGrabbed = false
  gElement.querySelector('.round-cursor').style.width = null
  gElement.querySelector('.round-cursor').style.height = null
  gElement.querySelector('.round-cursor').style.transform = null
}

export default function auto (element, throttle = true) {
  gElement = element
  let started = false
  function start () {
    if (!started) {
      cursorFollower(element, throttle)
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

function allowMove () {
  return !isGrabbed
  // if (isGrabbed) {
  //   return false
  // }
  // return true
}

function cursorFollower (element, throttle = true) {
  function cursorEventListeners (link, className, grab = false) {
    link.addEventListener('mouseover', () => {
      if (className && !element.classList.contains('loading')) {
        // element.className =  ? 'loading' : ''
        element.classList.add(...(className).split(' '))
      }
      if (grab) link.grab()
    })
    link.addEventListener('mouseleave', () => {
      if (className) element.classList.remove(...(className).split(' '))
      if (grab) link.unGrab()
    })
  }
  // eslint-disable-next-line no-undef
  class CursorLink extends HTMLAnchorElement {
    constructor () {
      super()
      const className = this.getAttribute('cursor-class')
      cursorEventListeners(this, className, this.getAttribute('cursor-grab') !== null)
    }

    grab () {
      isGrabbed = true
      const rect = this.getBoundingClientRect()
      let x = rect.left
      let y = rect.top
      let width = rect.width
      let height = rect.height
      const padding = this.getAttribute('cursor-grab-padding')
      if (padding) {
        x = x - parseInt(padding)
        y = y - parseInt(padding)
        width = width + 2 * parseInt(padding)
        height = height + 2 * parseInt(padding)
      }

      element.style.transform = `translate3d(${x}px, ${y}px,0)`
      element.querySelector('.round-cursor').style.width = width + 'px'
      element.querySelector('.round-cursor').style.height = height + 'px'
      element.querySelector('.round-cursor').style.transform = 'scale(1)'
    }

    unGrab () {
      unGrab()
    }
  }
  // eslint-disable-next-line no-undef
  class CursorHide extends HTMLDivElement {
    constructor () {
      super()
      cursorEventListeners(this, 'hidden')
    }
  }
  // eslint-disable-next-line no-undef
  class CursorScrollable extends HTMLDivElement {
    constructor () {
      super()
      this.initialScroll = this.scrollTop

      function handler () {
        if (isGrabbed) {
          const delta = this.scrollTop - this.initialScroll
          this.initialScroll = this.scrollTop
          translate(0, -delta)
        }
      }
      // const throttled = _throttle(handler, 50)
      this.addEventListener('scroll', handler)
    }
  }
  window.customElements.define('cursor-link', CursorLink, {
    extends: 'a'
  })
  window.customElements.define('cursor-hide', CursorHide, {
    extends: 'div'
  })
  window.customElements.define('cursor-scrollable', CursorScrollable, {
    extends: 'div'
  })
  element.style.position = 'absolute'
  element.style.top = '0'
  element.style.left = '0'
  element.style.pointerEvents = 'none'

  function handler (ev) {
    if (allowMove()) {
      moveTo(ev.pageX, ev.pageY)
    }
  }
  if (throttle) {
    const throttled = _throttle(handler, 50)
    document.addEventListener('mousemove', throttled)
  } else {
    document.addEventListener('mousemove', handler)
  }

  const moveTo = (cx, cy) => {
    const rect = element.getBoundingClientRect()
    const x = cx - (rect.width / 2)
    const y = cy - (rect.height / 2)
    element.style.transform = `translate3d(${x}px, ${y}px,0)`
  }

  const translate = function (dx, dy) {
    element.style.transition = 'none'
    const rect = element.getBoundingClientRect()
    const x = rect.x + dx
    const y = rect.y + dy
    element.style.transform = `translate3d(${x}px, ${y}px,0)`
    element.style.transition = null
  }
}
