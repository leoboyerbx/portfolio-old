(() => {
  // eslint-disable-next-line no-undef
  if (window.customElements) {
    try {
      // feature detect browsers that "forgot" 🙄 to implement built-in extends
      // eslint-disable-next-line no-undef
      customElements.define('built-in', document.createElement('p').constructor, { extends: 'p' })
    } catch (_) {
      // only WebKit or Safari
      console.warn('CustomelementsPolyfill used')
      document.write('<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>')
    }
  } else {
    // only legacy browsers
    console.warn('CustomelementsPolyfill used')
    document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>')
  }
})()
