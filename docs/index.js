/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ onScroll)
/* harmony export */ });
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

function onScroll() {
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
}

/***/ }),

/***/ 549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ systemSwitch)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(955);

function systemSwitch() {
  var isMac = navigator.userAgent.toLowerCase().includes('macintosh'); //*? shortcut pages

  var macEl = document.getElementById('S_Mac');
  var winEl = document.getElementById('S_Win');
  var macBtn = document.querySelector('#mac');
  var winBtn = document.querySelector('#win'); //*? selection pages

  var macShortcut = document.querySelectorAll('.Q_ShortcutWindows');
  var winShortcut = document.querySelectorAll('.Q_ShortcutMacos');

  if (isMac) {
    js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"].set */ .Z.set('os', 'macos');
  } else {
    js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"].set */ .Z.set('os', 'windows');
  }

  var osCookie = js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get('os');

  var setActiveButton = function setActiveButton(activeBtn, inactiveBtn) {
    activeBtn.classList.add('_Active');
    inactiveBtn.classList.remove('_Active');
  };

  var showElement = function showElement(elementToShow, elementToHide) {
    if (elementToShow && elementToHide) {
      elementToShow.style.display = 'block';
      elementToHide.style.display = 'none';
    }
  };

  if (osCookie === 'macos') {
    showElement(macEl, winEl);
    setActiveButton(macBtn, winBtn);

    if (winShortcut.length > 0 && macShortcut.length > 0) {
      winShortcut.forEach(function (el) {
        return el.style.display = 'block';
      });
      macShortcut.forEach(function (el) {
        return el.style.display = 'none';
      });
    }
  } else {
    showElement(winEl, macEl);
    setActiveButton(winBtn, macBtn);

    if (winShortcut.length > 0 && macShortcut.length > 0) {
      winShortcut.forEach(function (el) {
        return el.style.display = 'none';
      });
      macShortcut.forEach(function (el) {
        return el.style.display = 'block';
      });
    }
  }

  winBtn === null || winBtn === void 0 ? void 0 : winBtn.addEventListener('click', function () {
    showElement(winEl, macEl);
    setActiveButton(winBtn, macBtn);

    if (winShortcut.length > 0 && macShortcut.length > 0) {
      winShortcut.forEach(function (el) {
        return el.style.display = 'none';
      });
      macShortcut.forEach(function (el) {
        return el.style.display = 'block';
      });
    }
  });
  macBtn === null || macBtn === void 0 ? void 0 : macBtn.addEventListener('click', function () {
    showElement(macEl, winEl);
    setActiveButton(macBtn, winBtn);

    if (winShortcut.length > 0 && macShortcut.length > 0) {
      winShortcut.forEach(function (el) {
        return el.style.display = 'block';
      });
      macShortcut.forEach(function (el) {
        return el.style.display = 'none';
      });
    }
  });
}

/***/ }),

/***/ 955:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! js-cookie v3.0.1 | MIT */
/* eslint-disable no-var */
function assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target
}
/* eslint-enable no-var */

/* eslint-disable no-var */
var defaultConverter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
};
/* eslint-enable no-var */

/* eslint-disable no-var */

function init (converter, defaultAttributes) {
  function set (key, value, attributes) {
    if (typeof document === 'undefined') {
      return
    }

    attributes = assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    key = encodeURIComponent(key)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape);

    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName;

      if (attributes[attributeName] === true) {
        continue
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }

    return (document.cookie =
      key + '=' + converter.write(value, key) + stringifiedAttributes)
  }

  function get (key) {
    if (typeof document === 'undefined' || (arguments.length && !key)) {
      return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');

      try {
        var foundKey = decodeURIComponent(parts[0]);
        jar[foundKey] = converter.read(value, foundKey);

        if (key === foundKey) {
          break
        }
      } catch (e) {}
    }

    return key ? jar[key] : jar
  }

  return Object.create(
    {
      set: set,
      get: get,
      remove: function (key, attributes) {
        set(
          key,
          '',
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(assign({}, this.converter, converter), this.attributes)
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  )
}

var api = init(defaultConverter, { path: '/' });
/* eslint-enable no-var */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/js-cookie/dist/js.cookie.mjs
var js_cookie = __webpack_require__(955);
;// CONCATENATED MODULE: ./src/javascript/modal.js

function modal() {
  var modal = document.getElementById('modal');
  var modalButton = document.getElementById('modalButton');

  if (modal !== null && modal !== void 0 && modal.style && modalButton) {
    var closeModal = function closeModal() {
      modal.style.display = 'none';
    };

    if (!js_cookie/* default.get */.Z.get('modal')) {
      js_cookie/* default.set */.Z.set('modal', true);
      setTimeout(function () {
        modal.style.display = 'flex';
      }, 1500);
    }

    modalButton.addEventListener('click', closeModal);
    modal.addEventListener('click', closeModal);
  }
}
// EXTERNAL MODULE: ./src/javascript/on-scroll.js
var on_scroll = __webpack_require__(557);
// EXTERNAL MODULE: ./src/javascript/system-switch.js
var system_switch = __webpack_require__(549);
;// CONCATENATED MODULE: ./src/index.js




window.addEventListener('DOMContentLoaded', function () {
  modal();
  (0,system_switch/* systemSwitch */.v)(); //   if (window.location.pathname === '/styleguide.html') {

  (0,on_scroll/* onScroll */.g)(); //   }
});
})();

/******/ })()
;