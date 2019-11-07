import { $ } from './modules/qs'
import menu from './modules/menu'
import ScrollMoov from './modules/ScrollMoov'

// parallax($('#home'), 0.4)
menu($('#menu'), $('#menu-button'))

const test = new ScrollMoov($('#mywork'), {
  translate: ['20%', '20%']
}, {
  translate: ['-50%', '-20%']
}, {
  considerEndScroll: false
})
console.log(test)
// preventScroll.disableScroll()

// setTimeout(preventScroll.enableScroll, 3000)
