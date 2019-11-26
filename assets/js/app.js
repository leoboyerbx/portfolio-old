import { $ } from './modules/qs'
import menu from './modules/menu'
import ScrollMoov from './modules/ScrollMoov'
import Louwp from './modules/louwp'

// parallax($('#home'), 0.4)
menu($('#menu'), $('#menu-button'), $('#page-content'))

const who = new ScrollMoov($('#mybio #line-1'),
  {
    translateX: '50px'
  },
  {
    translateX: '0px'
  }, { considerEndScroll: true, parent: $('#page-content') })
const amI = new ScrollMoov($('#mybio #line-2'),
  {
    translateX: '-25px'
  }, {
    translateX: '25px'
  }, { considerEndScroll: true, parent: $('#page-content') })

const j = new Louwp($('#mybio-text-louwp'), $('.mybio-text'))

const what = new ScrollMoov($('#my-portfolio .line-1'),
  {
    translateX: '-20px'
  }, {
    translateX: '0px'
  }, {
    parent: $('#page-content')
  })
const iCanDo = new ScrollMoov($('#my-portfolio .line-2'),
  {
    translateX: '10px'
  }, {
    translateX: '-10px'
  }, {
    parent: $('#page-content')
  })

console.log(who, amI, j, what, iCanDo)
// preventScroll.disableScroll()

// setTimeout(preventScroll.enableScroll, 30
