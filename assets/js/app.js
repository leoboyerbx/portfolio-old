import { $, $$ } from './modules/qs'
import menu from './modules/menu'
import ScrollMoov from './modules/ScrollMoov'
import Louwp from './modules/louwp'
import letterByLetterAnim from './modules/letterByLetterAnim'
import cursorFollower from './modules/cursorFollower'
import extPage from './modules/extPage'

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

letterByLetterAnim()

console.log(who, amI, j, what, iCanDo)
// preventScroll.disableScroll()
const followerHovers = [
  {
    selector: '.link-1',
    className: 'hover1'
  },
  {
    selector: '.link-light',
    className: 'hover2'
  },
  {
    selector: '.cursor-hidden',
    className: 'hidden'
  }
]
// cursorFollower($('#cursor-pointer'), followerHovers, false)
cursorFollower($('#cursor-follower'), followerHovers, true)
// setTimeout(preventScroll.enableScroll, 30

const extpage = extPage($('#ext-page'))
$$('.category').forEach(el => {
  el.addEventListener('click', e => {
    console.log(e)
    extpage.openPage(e.clientX, e.clientY)
  })
})
