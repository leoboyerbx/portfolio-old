import ColNodeList from '@/modules/ColNodeList'
import { $$ } from './qs'

export default function animateCols (delay = 0) {
  console.log('animateCols')
  let leftCol = $$('.project:nth-child(2n + 1)')
  const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  if (leftCol.length > 0) {
    leftCol = new ColNodeList(leftCol)
    const rightCol = new ColNodeList('.project:nth-child(2n)')
    if (vw > 768) {
      leftCol.translateY(3 * leftCol.firstElHeight())
      rightCol.translateY(-rightCol.totalHeight() - rightCol.firstElHeight())
      window.setTimeout(function () {
        leftCol.css('visibility', 'visible')
        rightCol.css('visibility', 'visible')
        leftCol.addClass('transition')
        rightCol.addClass('transition')
        leftCol.translateY(0)
        rightCol.translateY(0)
      }, delay)
    } else {
      leftCol.css('visibility', 'visible')
      rightCol.css('visibility', 'visible')
    }
  }
}
