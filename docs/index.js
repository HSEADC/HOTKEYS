/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 557:
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function onEntry(entry) {
  entry.forEach(function (change) {
    if (change.isIntersecting) {
      change.target.classList.add('_Show');
    } else {
      change.target.classList.remove('_Show');
    }
  });
}

var options = {
  threshold: [0.5]
};
var observer = new IntersectionObserver(onEntry, options);
var elements = document.querySelectorAll('.A_TextUnique');

var _iterator = _createForOfIteratorHelper(elements),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var elm = _step.value;
    observer.observe(elm);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ }),

/***/ 197:
/***/ (() => {

var shortcuts = ['ctrl+f', 'cmd+c', 'ctrl+v', 'cmd+a', 'cmd+z', 'cmd+s', 'cmd+d'];
var textElement = document.querySelector('.M_ShortcutValue');

function changeText(idx) {
  if (textElement) {
    textElement.innerText = shortcuts[idx];
    var nextIdx = idx + 1 === shortcuts.length ? 0 : idx + 1;
    setTimeout(function () {
      return changeText(nextIdx);
    }, 500);
  }
}

changeText(0);

/***/ }),

/***/ 549:
/***/ (() => {

var isMac = navigator.userAgent.toLowerCase().includes('macintosh');
var macEl = document.getElementById('S_Mac');
var winEl = document.getElementById('S_Win');
var macBtn = document.querySelector('#mac');
var winBtn = document.querySelector('#win');
var winVector = document.querySelector('.Q_WindowsVector');
var macVector = document.querySelector('.Q_MacosVector');

if (isMac && macEl) {
  macEl.style.display = 'block';
  macBtn.classList.add('_Active');
  macVector.style.fill = 'black';
} else if (winEl) {
  winEl.style.display = 'block';
  winBtn.classList.add('_Active');
  winVector.style.fill = 'black';
}

winBtn.addEventListener('click', function () {
  winEl.style.display = 'block';
  macEl.style.display = 'none';
  winBtn.classList.add('_Active');
  winVector.style.fill = 'black';
  macBtn.classList.remove('_Active');
  macVector.style.fill = 'white';
});
macBtn.addEventListener('click', function () {
  macEl.style.display = 'block';
  winEl.style.display = 'none';
  macBtn.classList.add('_Active');
  macVector.style.fill = 'black';
  winBtn.classList.remove('_Active');
  winVector.style.fill = 'white';
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _javascript_shortcut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197);
/* harmony import */ var _javascript_shortcut_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_javascript_shortcut_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _javascript_on_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(557);
/* harmony import */ var _javascript_on_scroll_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_javascript_on_scroll_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _javascript_system_switch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(549);
/* harmony import */ var _javascript_system_switch_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_javascript_system_switch_js__WEBPACK_IMPORTED_MODULE_2__);
 // modal window
// import './javascript/modal.js';
// shortcut change animation

 // landing text apperance

 // shortcut page sistem check and load content

 // import './javascript/training.js';
})();

/******/ })()
;