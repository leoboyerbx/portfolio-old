import _ from 'lodash/function'

export default class Louwp {
  constructor (element, reference, hoverables = []) {
    this.hoverClasses = []
    this.element = element
    this.reference = reference
    this.hoverables = hoverables
    this.hidden = this.element.firstElementChild
    this.hidden.innerHTML = this.reference.innerHTML
    this.updateDimensions()
    for (const hoverable of hoverables) {
      this.hoverClasses.push(hoverable.dataset.hover)
    }
    this.moveGlass = e => {
      this.updateDimensions()
      this.moveTo(e.layerX, e.layerY)
    }

    const handler = _.throttle(this.moveGlass, 100)
    element.addEventListener('mousemove', handler)
    element.parentNode.addEventListener('mousemove', handler)

    window.addEventListener('resize', () => { this.setHiddenSize() })
    window.addEventListener('load', () => { this.setHiddenSize() })
  }

  isHovering (element, x, y) {
    const rect = element.getBoundingClientRect()
    return (x > rect.left && x < rect.left + rect.width && y > rect.top && y < rect.top + rect.height)
  }

  applyHoverables (x, y) {
    this.resetHoverables()
    for (const hoverable of this.hoverables) {
      if (this.isHovering(hoverable, x, y)) {
        hoverable.classList.add('hover')
        setTimeout(function () { hoverable.classList.remove('hover') }, 800)
        this.applyHoverable(hoverable.dataset.hover)
      }
    }
  }

  setHiddenSize () {
    this.hidden.style.width = window.getComputedStyle(this.reference).getPropertyValue('width')
    this.hidden.style.height = window.getComputedStyle(this.reference).getPropertyValue('height')
  }

  updateDimensions () {
    this.width = window.getComputedStyle(this.element).getPropertyValue('width')
    this.height = window.getComputedStyle(this.element).getPropertyValue('height')
  }

  resetHoverables () {
    // this.element.style.width = '150px'
    // this.element.style.height = '150px'
    // this.hoverables.forEach(e => e.classList.remove('hover'))
  }

  applyHoverable (word) {
    const coords = this.getCoords()
    console.log(coords)
    switch (word) {
      case 'grow':
        this.element.style.width = '300px'
        this.element.style.height = '300px'
        // this.element.style.transform = `translate3d(${coords.x - }px, ${y}px, 0)`
        // this.hidden.style.transform = `translate3d(${-x}px, ${-y}px, 0)`
        break
      case 'focus':
        this.element.style.width = '30px'
        this.element.style.height = '30px'
        // this.element.style.transform = `translate3d(${coords.x + offset}px, ${coords.y + offset}px, 0)`
        // this.hidden.style.transform = `translate3d(${-(coords.x + offset)}px, ${-(coords.y + offset)}px, 0)`
        break
      default:
        break
    }
  }

  moveTo (cx, cy) {
    this.applyHoverables(cx, cy)
    const refRect = this.reference.getBoundingClientRect()
    let x = cx - (parseInt(this.width, 10) / 2)
    let y = cy - (parseInt(this.height, 10) / 2)
    x = x > refRect.width ? refRect.width : x
    x = x < 0 ? 0 : x
    y = y > refRect.height ? refRect.height : y
    y = y < 0 ? 0 : y
    this.moveRound(x, y)
  }

  moveRound (x, y) {
    this.x = x
    this.y = y
    this.element.style.transform = `translate3d(${x}px, ${y}px, 0)`
    this.hidden.style.transform = `translate3d(${-x}px, ${-y}px, 0)`
  }

  getCoords () {
    return {
      x: this.x,
      y: this.y
    }
  }
}
