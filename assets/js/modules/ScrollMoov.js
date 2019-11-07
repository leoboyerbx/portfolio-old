import CssDimension from 'parse-css-dimension'

function documentHeight () {
  const body = document.body
  const html = document.documentElement

  return Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight)
}

export default class ScrollMoov {
  constructor (element, from = {}, to = {}, options = {}) {
    this.element = element
    this.parent = options.parent ? options.parent : window

    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    this.startPoint = Math.max(options.startPoint ? options.startPoint : this.getPosition().y - viewportHeight, 0)

    if (options.considerEndScroll === false) {
      this.endPoint = options.endPoint ? options.endPoint : this.getPosition().y + this.element.offsetHeight
    } else {
      this.endPoint = Math.min(options.endPoint ? options.endPoint : this.getPosition().y + this.element.offsetHeight, documentHeight() - viewportHeight)
    }

    this.parent.addEventListener('scroll', () => { this.updateProgression() })

    this.animatedProperties = []
    this.initAnimatedProperties(from, to)
  }

  updateProgression () {
    const progress = this.getProgress()
    this.applyTransform(progress)
  }

  initBidimensionnalProperty (from, to, CssName) {
    const propToInit = {
      CssName,
      dimensions: [],
      toCssString: function (dimensions) {
        return `${this.CssName}(${dimensions[0].toString()}, ${dimensions[1].toString()})`
      }
    }
    for (let i = 0; i < 2; i++) {
      propToInit.dimensions.push({
        from: CssDimension(from[CssName][i]),
        to: CssDimension(to[CssName][i])
      })
    }
    this.animatedProperties.push(propToInit)
  }

  initAnimatedProperties (from, to) {
    if (from.translate && to.translate) {
      this.initBidimensionnalProperty(from, to, 'translate')
    } else {
      if (from.translateX && to.translateX) {
        this.initBidimensionnalProperty({
          translate: [from.translateX, 0]
        }, {
          translate: [to.translateX, 0]
        }, 'translate')
      }
      if (from.translateY && to.translateY) {
        this.initBidimensionnalProperty({
          translate: [from.translateY, 0]
        }, {
          translate: [to.translateY, 0]
        }, 'translate')
      }
    }

    this.applyTransform(this.getProgress())
  }

  calcValue (from, to, progress) {
    return (to - from) * progress + from
  }

  calcDimensionValue (from, to, progress) {
    const output = Object.assign(Object.create(Object.getPrototypeOf(from)), from)
    const delta = to.value - from.value
    output.value += delta * progress
    return output
  }

  applyTransform (progress) {
    let trf = ''
    for (const property of this.animatedProperties) {
      const currentDimensions = []
      for (const dimension of property.dimensions) {
        currentDimensions.push(this.calcDimensionValue(dimension.from, dimension.to, progress))
      }
      trf = trf + property.toCssString(currentDimensions)
    }
    console.log(trf)
    this.element.style.transform = trf
  }

  getProgress () {
    const relativeScroll = window.scrollY - this.startPoint
    const deltaScroll = this.endPoint - this.startPoint
    let progress = (relativeScroll / deltaScroll)
    if (progress < 0) progress = 0
    if (progress > 1) progress = 1
    return progress
  }

  getPosition (element = this.element) {
    let xPosition = 0
    let yPosition = 0

    while (element) {
      xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft)
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop)
      element = element.offsetParent
    }

    return { x: xPosition, y: yPosition }
  }
}
