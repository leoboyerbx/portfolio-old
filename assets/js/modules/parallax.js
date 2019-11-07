// function distanceFromTop (element) {
//   var yPosition = 0
//   while (element) {
//     yPosition += (element.offsetTop - element.scrollTop + element.clientTop)
//     element = element.offsetParent
//   }
//   return yPosition
// }

export default function parallax (element, ratio = 0.5) {
  function position () {
    element.style.transform = `translate3d(0, -${window.pageYOffset * ratio}px, 0)`
  }
  window.addEventListener('scroll', position)
}
