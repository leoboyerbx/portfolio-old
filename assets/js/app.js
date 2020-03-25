import { $ } from './modules/qs'
import menu from './modules/menu'
import ScrollMoov from './modules/ScrollMoov'
import Louwp from './modules/louwp'
import letterByLetterAnim from './modules/letterByLetterAnim'
import cursorFollower from './modules/cursorFollower'
import extPage from './modules/extPage'
import ajax from './modules/ajax'
import animateCols from './modules/animateCols'
import lightbox from './modules/lightbox'
import innerLinks from '@/modules/innerLinks'
import arrowScroll from '@/modules/arrowScroll'
import videoAnimation from '@/modules/videoAnimation'
import './modules/customElementsPolyfill'

window.addEventListener('DOMContentLoaded', function () {
  // Selection of elements
  const pageContent = $('#page-content')

  // parallax($('#home'), 0.4)
  const menuObj = menu($('#menu'), $('#menu-button'), pageContent)

  // eslint-disable-next-line no-unused-vars
  const j = new Louwp($('#mybio-text-louwp'), $('.mybio-text'))

  // eslint-disable-next-line no-unused-vars
  const who = new ScrollMoov($('#mybio #line-1'),
    {
      translateX: '50px'
    },
    {
      translateX: '0px'
    }, { considerEndScroll: true, parent: pageContent })
  // eslint-disable-next-line no-unused-vars
  const amI = new ScrollMoov($('#mybio #line-2'),
    {
      translateX: '-25px'
    }, {
      translateX: '25px'
    }, { considerEndScroll: true, parent: pageContent })
  //
  //
  // eslint-disable-next-line no-unused-vars
  const what = new ScrollMoov($('#my-portfolio .line-1'),
    {
      translateX: '-40px'
    }, {
      translateX: '10px'
    }, {
      parent: pageContent
    })
  // eslint-disable-next-line no-unused-vars
  const iCanDo = new ScrollMoov($('#my-portfolio .line-2'),
    {
      translateX: '30px'
    }, {
      translateX: '-20px'
    }, {
      parent: pageContent
    })

  letterByLetterAnim()

  cursorFollower($('#cursor-follower'), true)

  const extPageEl = extPage($('#ext-page'))
  ajax(extPageEl)
  animateCols(400)

  lightbox()
  videoAnimation()

  innerLinks('a[data-target]', menuObj)
  arrowScroll()
  document.addEventListener('WebComponentsReady', e => {
    console.log(e)
  })
  window.loading.end()
})
