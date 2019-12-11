import ColNodeList from '@/modules/ColNodeList'
import { $$ } from './qs'

export default function animateCols (delay = 100) {
  let leftCol = $$('.project:nth-child(2n + 1)')
  if (leftCol.length > 0) {
    leftCol = new ColNodeList(leftCol)
    const rightCol = new ColNodeList('.project:nth-child(2n)')

    leftCol.translateY(3 * leftCol.firstElHeight())
    rightCol.translateY(-rightCol.totalHeight() - rightCol.firstElHeight())
    window.setTimeout(function () {
      leftCol.addClass('transition')
      rightCol.addClass('transition')
      leftCol.translateY(0)
      rightCol.translateY(0)
    }, delay)

  }
}
