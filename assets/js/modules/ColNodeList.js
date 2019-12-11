import ExtNodeList from '@/modules/ExtNodeList'

export default class ColNodeList extends ExtNodeList {
  translateY(val) {
    this.css('transform', `translate3d(0, ${val}, 0)`)
  }
}
