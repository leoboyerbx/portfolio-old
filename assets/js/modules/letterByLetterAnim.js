import ScrollMoov from '@/modules/ScrollMoov'
import { $ } from '@/modules/qs'

export default function () {
  // function randomTranslateContact (horizontal, fact = 100) {
  //   if (horizontal) {
  //     return (Math.random() * 2 - 1) * fact
  //   } else {
  //     return (Math.random()) * fact
  //   }
  // }
  // for (let i = 1; i <= 7; i++) {
  //   const animLetter = new ScrollMoov($(`#contact-title .lt${i}`), {
  //     translate: [randomTranslateContact(true) + 'px', randomTranslateContact() + 'px']
  //   }, {
  //     translate: ['0', '0']
  //   }, {
  //     parent: $('#page-content')
  //   })
  //   console.log(animLetter)
  // }
  const letters = [
    {
      selector: '.ltc',
      translate: ['-100px', '-20px']
    },
    {
      selector: '.lto',
      translate: ['-60px', '60px']
    },
    {
      selector: '.ltn',
      translate: ['-10px', '80px']
    },
    {
      selector: '.ltt',
      translate: ['0', '-20px']
    },
    {
      selector: '.lta',
      translate: ['20px', '40px']
    },
    {
      selector: '.ltc2',
      translate: ['40px', '-30px']
    },
    {
      selector: '.ltt2',
      translate: ['100px', '30px']
    }
  ]
  for (const letter of letters) {
    // eslint-disable-next-line no-unused-vars
    const scrollObject = new ScrollMoov($(letter.selector), {
      translate: letter.translate
    }, {
      translate: ['0', '0']
    }, {
      parent: $('#page-content')
    })
  }
}
