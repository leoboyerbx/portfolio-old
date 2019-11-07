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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/qs */ \"./assets/js/modules/qs.js\");\n/* harmony import */ var _modules_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/parallax */ \"./assets/js/modules/parallax.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./assets/js/modules/menu.js\");\n\r\n\r\n\r\n// import preventScroll from './modules/preventScroll'\r\n\r\nObject(_modules_parallax__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_modules_qs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('#home'), 0.4)\r\nObject(_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_modules_qs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('#menu'), Object(_modules_qs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('#menu-button'))\r\n\r\n// preventScroll.disableScroll()\r\n\r\n// setTimeout(preventScroll.enableScroll, 3000)\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcz9kNzQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICQgfSBmcm9tICcuL21vZHVsZXMvcXMnXHJcbmltcG9ydCBwYXJhbGxheCBmcm9tICcuL21vZHVsZXMvcGFyYWxsYXgnXHJcbmltcG9ydCBtZW51IGZyb20gJy4vbW9kdWxlcy9tZW51J1xyXG4vLyBpbXBvcnQgcHJldmVudFNjcm9sbCBmcm9tICcuL21vZHVsZXMvcHJldmVudFNjcm9sbCdcclxuXHJcbnBhcmFsbGF4KCQoJyNob21lJyksIDAuNClcclxubWVudSgkKCcjbWVudScpLCAkKCcjbWVudS1idXR0b24nKSlcclxuXHJcbi8vIHByZXZlbnRTY3JvbGwuZGlzYWJsZVNjcm9sbCgpXHJcblxyXG4vLyBzZXRUaW1lb3V0KHByZXZlbnRTY3JvbGwuZW5hYmxlU2Nyb2xsLCAzMDAwKVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/app.js\n");

/***/ }),

/***/ "./assets/js/modules/menu.js":
/*!***********************************!*\
  !*** ./assets/js/modules/menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return menu; });\nlet open = false\r\n\r\nfunction menu (menu, button) {\r\n  button.addEventListener('click', () => {\r\n    menu.classList.toggle('open')\r\n    button.classList.toggle('menu-open')\r\n    if (open) {\r\n      button.classList.add('closed')\r\n      setTimeout(function () {\r\n        button.classList.remove('closed')\r\n      }, 500)\r\n    } else {\r\n      button.classList.remove('closed')\r\n    }\r\n    open = !open\r\n  })\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvbW9kdWxlcy9tZW51LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvbWVudS5qcz82NWUxIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBvcGVuID0gZmFsc2VcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUgKG1lbnUsIGJ1dHRvbikge1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJylcclxuICAgIGlmIChvcGVuKSB7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKVxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2VkJylcclxuICAgICAgfSwgNTAwKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlZCcpXHJcbiAgICB9XHJcbiAgICBvcGVuID0gIW9wZW5cclxuICB9KVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/modules/menu.js\n");

/***/ }),

/***/ "./assets/js/modules/parallax.js":
/*!***************************************!*\
  !*** ./assets/js/modules/parallax.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parallax; });\n// function distanceFromTop (element) {\r\n//   var yPosition = 0\r\n//   while (element) {\r\n//     yPosition += (element.offsetTop - element.scrollTop + element.clientTop)\r\n//     element = element.offsetParent\r\n//   }\r\n//   return yPosition\r\n// }\r\n\r\nfunction parallax (element, ratio = 0.5) {\r\n  function position () {\r\n    element.style.transform = `translate3d(0, -${window.pageYOffset * ratio}px, 0)`\r\n  }\r\n  window.addEventListener('scroll', position)\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvbW9kdWxlcy9wYXJhbGxheC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL3BhcmFsbGF4LmpzPzNlODIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZnVuY3Rpb24gZGlzdGFuY2VGcm9tVG9wIChlbGVtZW50KSB7XHJcbi8vICAgdmFyIHlQb3NpdGlvbiA9IDBcclxuLy8gICB3aGlsZSAoZWxlbWVudCkge1xyXG4vLyAgICAgeVBvc2l0aW9uICs9IChlbGVtZW50Lm9mZnNldFRvcCAtIGVsZW1lbnQuc2Nyb2xsVG9wICsgZWxlbWVudC5jbGllbnRUb3ApXHJcbi8vICAgICBlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnRcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIHlQb3NpdGlvblxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJhbGxheCAoZWxlbWVudCwgcmF0aW8gPSAwLjUpIHtcclxuICBmdW5jdGlvbiBwb3NpdGlvbiAoKSB7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAtJHt3aW5kb3cucGFnZVlPZmZzZXQgKiByYXRpb31weCwgMClgXHJcbiAgfVxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb3NpdGlvbilcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/modules/parallax.js\n");

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