/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/qs */ \"./assets/js/modules/qs.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./assets/js/modules/menu.js\");\n\r\n\r\n// import preventScroll from './modules/preventScroll'\r\n\r\n// parallax($('#home'), 0.4)\r\nObject(_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_modules_qs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('#menu'), Object(_modules_qs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('#menu-button'))\r\n\r\n// preventScroll.disableScroll()\r\n\r\n// setTimeout(preventScroll.enableScroll, 3000)\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcz9kNzQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICQgfSBmcm9tICcuL21vZHVsZXMvcXMnXHJcbmltcG9ydCBtZW51IGZyb20gJy4vbW9kdWxlcy9tZW51J1xyXG4vLyBpbXBvcnQgcHJldmVudFNjcm9sbCBmcm9tICcuL21vZHVsZXMvcHJldmVudFNjcm9sbCdcclxuXHJcbi8vIHBhcmFsbGF4KCQoJyNob21lJyksIDAuNClcclxubWVudSgkKCcjbWVudScpLCAkKCcjbWVudS1idXR0b24nKSlcclxuXHJcbi8vIHByZXZlbnRTY3JvbGwuZGlzYWJsZVNjcm9sbCgpXHJcblxyXG4vLyBzZXRUaW1lb3V0KHByZXZlbnRTY3JvbGwuZW5hYmxlU2Nyb2xsLCAzMDAwKVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/js/app.js\n");

/***/ }),

/***/ "./assets/js/modules/menu.js":
/*!***********************************!*\
  !*** ./assets/js/modules/menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return menu; });\n/* harmony import */ var _preventScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preventScroll */ \"./assets/js/modules/preventScroll.js\");\n\r\nlet open = false\r\n\r\nfunction menu (menu, button) {\r\n  button.addEventListener('click', () => {\r\n    menu.classList.toggle('open')\r\n    button.classList.toggle('menu-open')\r\n    if (open) {\r\n      button.classList.add('closed')\r\n      _preventScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"].enableScroll()\r\n      setTimeout(function () {\r\n        button.classList.remove('closed')\r\n      }, 500)\r\n    } else {\r\n      button.classList.remove('closed')\r\n      _preventScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"].disableScroll()\r\n    }\r\n    open = !open\r\n  })\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvbW9kdWxlcy9tZW51LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvbWVudS5qcz82NWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmV2ZW50U2Nyb2xsIGZyb20gJy4vcHJldmVudFNjcm9sbCdcclxubGV0IG9wZW4gPSBmYWxzZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSAobWVudSwgYnV0dG9uKSB7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJylcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LW9wZW4nKVxyXG4gICAgaWYgKG9wZW4pIHtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpXHJcbiAgICAgIHByZXZlbnRTY3JvbGwuZW5hYmxlU2Nyb2xsKClcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlZCcpXHJcbiAgICAgIH0sIDUwMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZWQnKVxyXG4gICAgICBwcmV2ZW50U2Nyb2xsLmRpc2FibGVTY3JvbGwoKVxyXG4gICAgfVxyXG4gICAgb3BlbiA9ICFvcGVuXHJcbiAgfSlcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/modules/menu.js\n");

/***/ }),

/***/ "./assets/js/modules/preventScroll.js":
/*!********************************************!*\
  !*** ./assets/js/modules/preventScroll.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// left: 37, up: 38, right: 39, down: 40,\r\n// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36\r\n// let scrollable = true\r\nvar keys = { 37: 1, 38: 1, 39: 1, 40: 1 }\r\n\r\nfunction preventDefault (e) {\r\n  if (e.preventDefault) {\r\n    e.preventDefault()\r\n  }\r\n  e.returnValue = false\r\n}\r\n\r\nfunction preventDefaultForScrollKeys (e) {\r\n  if (keys[e.keyCode]) {\r\n    preventDefault(e)\r\n    return false\r\n  }\r\n}\r\n\r\nfunction disableScroll () {\r\n  if (window.addEventListener) {\r\n    window.addEventListener('DOMMouseScroll', preventDefault, false)\r\n  }\r\n  document.addEventListener('wheel', preventDefault, { passive: false }) // Disable scrolling in Chrome\r\n  window.onwheel = preventDefault // modern standard\r\n  window.onmousewheel = document.onmousewheel = preventDefault // older browsers, IE\r\n  window.ontouchmove = preventDefault // mobile\r\n  document.onkeydown = preventDefaultForScrollKeys\r\n}\r\n\r\nfunction enableScroll () {\r\n  if (window.removeEventListener) {\r\n    window.removeEventListener('DOMMouseScroll', preventDefault, false)\r\n  }\r\n  document.removeEventListener('wheel', preventDefault, { passive: false }) // Enable scrolling in Chrome\r\n  window.onmousewheel = document.onmousewheel = null\r\n  window.onwheel = null\r\n  window.ontouchmove = null\r\n  document.onkeydown = null\r\n}\r\n// function toggleScroll () {\r\n//   return scrollable ? disableScroll : enableScroll\r\n// }\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  enableScroll,\r\n  disableScroll\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvbW9kdWxlcy9wcmV2ZW50U2Nyb2xsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvcHJldmVudFNjcm9sbC5qcz82YjNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxlZnQ6IDM3LCB1cDogMzgsIHJpZ2h0OiAzOSwgZG93bjogNDAsXHJcbi8vIHNwYWNlYmFyOiAzMiwgcGFnZXVwOiAzMywgcGFnZWRvd246IDM0LCBlbmQ6IDM1LCBob21lOiAzNlxyXG4vLyBsZXQgc2Nyb2xsYWJsZSA9IHRydWVcclxudmFyIGtleXMgPSB7IDM3OiAxLCAzODogMSwgMzk6IDEsIDQwOiAxIH1cclxuXHJcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0IChlKSB7XHJcbiAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gIH1cclxuICBlLnJldHVyblZhbHVlID0gZmFsc2VcclxufVxyXG5cclxuZnVuY3Rpb24gcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzIChlKSB7XHJcbiAgaWYgKGtleXNbZS5rZXlDb2RlXSkge1xyXG4gICAgcHJldmVudERlZmF1bHQoZSlcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzYWJsZVNjcm9sbCAoKSB7XHJcbiAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpXHJcbiAgfVxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgcHJldmVudERlZmF1bHQsIHsgcGFzc2l2ZTogZmFsc2UgfSkgLy8gRGlzYWJsZSBzY3JvbGxpbmcgaW4gQ2hyb21lXHJcbiAgd2luZG93Lm9ud2hlZWwgPSBwcmV2ZW50RGVmYXVsdCAvLyBtb2Rlcm4gc3RhbmRhcmRcclxuICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gcHJldmVudERlZmF1bHQgLy8gb2xkZXIgYnJvd3NlcnMsIElFXHJcbiAgd2luZG93Lm9udG91Y2htb3ZlID0gcHJldmVudERlZmF1bHQgLy8gbW9iaWxlXHJcbiAgZG9jdW1lbnQub25rZXlkb3duID0gcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZVNjcm9sbCAoKSB7XHJcbiAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpXHJcbiAgfVxyXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgcHJldmVudERlZmF1bHQsIHsgcGFzc2l2ZTogZmFsc2UgfSkgLy8gRW5hYmxlIHNjcm9sbGluZyBpbiBDaHJvbWVcclxuICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gbnVsbFxyXG4gIHdpbmRvdy5vbndoZWVsID0gbnVsbFxyXG4gIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGxcclxuICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsXHJcbn1cclxuLy8gZnVuY3Rpb24gdG9nZ2xlU2Nyb2xsICgpIHtcclxuLy8gICByZXR1cm4gc2Nyb2xsYWJsZSA/IGRpc2FibGVTY3JvbGwgOiBlbmFibGVTY3JvbGxcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGVuYWJsZVNjcm9sbCxcclxuICBkaXNhYmxlU2Nyb2xsXHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/modules/preventScroll.js\n");

/***/ }),

/***/ "./assets/js/modules/qs.js":
/*!*********************************!*\
  !*** ./assets/js/modules/qs.js ***!
  \*********************************/
/*! exports provided: $, $$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$$\", function() { return $$; });\nconst $ = document.querySelector.bind(document)\r\nconst $$ = document.querySelectorAll.bind(document)\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvbW9kdWxlcy9xcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL3FzLmpzPzhiNTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0ICQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpXHJcbmV4cG9ydCBjb25zdCAkJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudClcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/js/modules/qs.js\n");

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvc2Nzcy9hcHAuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzP2MyMWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/scss/app.scss\n");

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./assets/scss/app.scss ./assets/js/app.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./assets/scss/app.scss */"./assets/scss/app.scss");
module.exports = __webpack_require__(/*! ./assets/js/app.js */"./assets/js/app.js");


/***/ })

/******/ });