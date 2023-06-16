/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 955:
/***/ (() => {

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

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (api)));


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
/* unused harmony export systemSwitch */
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
    Cookies.set('os', 'macos');
  } else {
    Cookies.set('os', 'windows');
  }

  var osCookie = Cookies.get('os');

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
})();

/******/ })()
;