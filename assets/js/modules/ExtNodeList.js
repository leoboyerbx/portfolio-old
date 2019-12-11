import { $$ } from './qs'
import css from './css'

export default class ExtNodeList {
  constructor (source) {
    if (typeof source === 'string') {
      this.nodeList = $$(source)
    } else {
      this.nodeList = source
    }
    this.length = this.nodeList.length
    this.forEach = this.nodeList.forEach.bind(this.nodeList)
    this.entries = this.nodeList.entries.bind(this.nodeList)
    this.item = this.nodeList.item.bind(this.nodeList)
    this.keys = this.nodeList.keys.bind(this.nodeList)
    this.values = this.nodeList.values.bind(this.nodeList)

  }

  get () {
    return this.nodeList
  }

  addClass (...args) {
    this.forEach(node => {
      node.classList.add(...args)
    })
  }

  removeClass (...args) {
    this.forEach(node => {
      node.classList.remove(...args)
    })
  }

  replaceClass (...args) {
    this.forEach(node => {
      node.classList.replace(...args)
    })
  }

  toggleClass (...args) {
    this.forEach(node => {
      node.classList.toggle(...args)
    })
  }

  forEachClass (...args) {
    this.forEach(node => {
      node.classList.forEach(...args)
    })
  }

  css (...args) {
    this.forEach(node => {
      css(node, ...args)
    })
  }
}
