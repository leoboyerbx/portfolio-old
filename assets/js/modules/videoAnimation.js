// eslint-disable-next-line no-undef
const template = document.createElement('template')

template.innerHTML = `
    <style>
    [data-icon]:before {
  font-family: "portfolio" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class^="icon-"]:before,
[class*=" icon-"]:before {
  font-family: "portfolio" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-cw:before {
  content: "\\6a";
}
.icon-1hx:before {
  font-size: 150% !important;
}

.icon-2x:before {
  font-size: 200% !important;
}

      .container {
        width: 100%;
        position: relative;
      }
      video {
        width: 100%;
      }
      .restart-button {
        position:absolute;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        right: 0;
        top: 0;
        background-color: #fce14b;
        display:flex;
        align-items: center;
        justify-content:center;
        cursor:pointer;
        transition: all .5s;
        transform: rotate(-50deg);
        opacity: 0;
      }
      .restart-button.visible {
      opacity: 1;
      animation: appear .3s ease-out;
        transition: all .5s;
      }
      .restart-button:hover {
        background-color: #323739;
        transform: rotate(50deg);
      }
      .restart-button:hover .icon-cw {
        color: #fff;
      }
      .icon-cw {
        position:absolute;
        width: 100%;
        height: 100%;
        display:flex;
        align-items: center;
        justify-content:center;
        font-size: 1.4em;
        transition: all .5s;
        transform: translate(1.5px, -.5px);
      }
      @keyframes appear {
      from {
        transform: rotate(-250deg);
      }
      }
    </style>
    <div class="container">
      <video muted autoplay>
      </video>
    <a is="cursor-link" style="cursor: pointer" cursor-class="hover1 soften" class="restart-button"><i class="icon-cw"></i></a>
    </div>
  `

// eslint-disable-next-line no-undef
class VideoAnimation extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.restartButton = this.shadowRoot.querySelector('a')
    this.videoElement = this.shadowRoot.querySelector('video')
    this.videoElement.src = this.getAttribute('src')

    this.ended = this.ended.bind(this)
    this.play = this.play.bind(this)

    this.videoElement.addEventListener('ended', this.ended)
    this.restartButton.addEventListener('click', this.play)
  }

  ended () {
    this.restartButton.classList.add('visible')
  }

  play () {
    this.videoElement.play()
    this.restartButton.classList.remove('visible')
  }
}

const videoAnimation = () => {
  window.customElements.define('video-animation', VideoAnimation)
}

export default videoAnimation
