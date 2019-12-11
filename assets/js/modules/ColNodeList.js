import ExtNodeList from '@/modules/ExtNodeList'

function outerHeight (el) {
  let height = el.offsetHeight
  const style = window.getComputedStyle(el)

  height += parseInt(style.marginTop) + parseInt(style.marginBottom)
  return height
}

export default class ColNodeList extends ExtNodeList {
  translateY (val) {
    this.css('transform', `translate3d(0, ${val}px, 0)`)
  }

  firstElHeight () {
    return outerHeight(this.item(0))
  }

  lastElHeight () {
    return outerHeight(this.item(this.length - 1))
  }

  totalHeight () {
    let result = 0
    this.forEach(row => {
      result += outerHeight(row)
    })
    return result
  }
}
