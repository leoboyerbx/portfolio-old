export default function (parent, icon) {
  import('../../icons/'+ icon + '.svg').then (image => {

  })
  `<div class="portfolio-category">
                        <div class="icon">
                            <div class="glyph">
                                <img src="assets/icons/web_programming.svg" alt="">
                            </div>
                        </div>
                        <div class="text">
                            Web
                        </div>
                    </div>`
}
