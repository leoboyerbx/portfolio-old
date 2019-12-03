import _ from 'lodash/function'
import { $$ } from '@/modules/qs'

export default function cursorFollower (element, hovers = [], throttle = true) {
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

    for (const hover of hovers) {
      handleHovers(cx, cy, hover.selector, hover.className)
    }
  }
  function handleHovers (cx, cy, selector, className) {
    let hover = false
    $$(selector).forEach(link => {
      const rect = link.getBoundingClientRect()
      if (cx > rect.x && cx < rect.x + rect.width && cy > rect.y && cy < rect.y + rect.height) {
        element.classList.add(...(className).split(' '))
        hover = true
      }
    })
    if (!hover) element.classList.remove(...(className).split(' '))
  }
}