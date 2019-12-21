import ExtNodeList from './ExtNodeList'

export const $ = document.querySelector.bind(document)
export const $$ = function (selector) {
  return new ExtNodeList(selector)
}
