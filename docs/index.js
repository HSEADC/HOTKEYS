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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./node_modules/js-cookie/dist/js.cookie.mjs
/*! js-cookie v3.0.1 | MIT */
/* eslint-disable no-var */
function js_cookie_assign (target) {
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

    attributes = js_cookie_assign({}, defaultAttributes, attributes);

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
          js_cookie_assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, js_cookie_assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(js_cookie_assign({}, this.converter, converter), this.attributes)
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

/* harmony default export */ const js_cookie = (api);

;// CONCATENATED MODULE: ./src/javascript/modal.js

var modal = document.getElementById('modal');
var modalButton = document.getElementById('modalButton');

if (modal !== null && modal !== void 0 && modal.style && modalButton) {
  if (!js_cookie.get('modal')) {
    js_cookie.set('modal', true);
    setTimeout(function () {
      modal.style.display = 'flex';
    }, 1000);
  }

  modalButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });
  modal.addEventListener('click', function () {
    modal.style.display = 'none';
  });
}
// EXTERNAL MODULE: ./src/javascript/shortcut.js
var shortcut = __webpack_require__(197);
// EXTERNAL MODULE: ./src/javascript/on-scroll.js
var on_scroll = __webpack_require__(557);
;// CONCATENATED MODULE: ./src/javascript/system-switch.js

document.addEventListener('DOMContentLoaded', function () {
  var isMac = navigator.userAgent.toLowerCase().includes('macintosh');
  var macEl = document.getElementById('S_Mac');
  var winEl = document.getElementById('S_Win');
  var macBtn = document.querySelector('#mac');
  var winBtn = document.querySelector('#win');

  if (isMac) {
    js_cookie.set('os', 'macos');
  } else {
    js_cookie.set('os', 'windows');
  }

  var osCookie = js_cookie.get('os');

  if (osCookie === 'macos') {} else {}

  if (osCookie === 'macos') {
    if (macEl) macEl.style.display = 'block';

    if (macBtn) {
      macBtn.classList.add('_Active');
    }
  } else {
    if (winEl) winEl.style.display = 'block';

    if (winBtn) {
      winBtn.classList.add('_Active');
    }
  }

  winBtn === null || winBtn === void 0 ? void 0 : winBtn.addEventListener('click', function () {
    if (macEl && winEl) {
      winEl.style.display = 'block';
      macEl.style.display = 'none';
    }

    winBtn.classList.toggle('_Active');
    macBtn.classList.toggle('_Active');
  });
  macBtn === null || macBtn === void 0 ? void 0 : macBtn.addEventListener('click', function () {
    if (macEl && winEl) {
      macEl.style.display = 'block';
      winEl.style.display = 'none';
    }

    macBtn.classList.toggle('_Active');
    winBtn.classList.toggle('_Active');
  });
});
;// CONCATENATED MODULE: ./src/javascript/training.js

var value = document.getElementById('shortcut-value');
var description = document.getElementById('shortcut-description');
var counter = document.getElementById('shortcut-counter');
var isMac = navigator.userAgent.toLowerCase().includes('macintosh');

if (isMac) {
  js_cookie.set('os', 'macos');
} else {
  js_cookie.set('os', 'windows');
}

var osCookie = js_cookie.get('os');
var isMacOS = osCookie === 'macos';
var shortcuts = isMacOS ? {
  'Cmd+F': 'Поиск по странице',
  'Cmd+A': 'Выделение всего текста',
  'Cmd+C': 'Копирование текста',
  'Cmd+V': 'Вставка текста',
  'Cmd+S': 'Сохранить изменения в окне',
  'Cmd+Shift+A': 'Что-то оно делает'
} : {
  'Ctrl+F': 'Поиск по странице',
  'Ctrl+A': 'Выделение всего текста',
  'Ctrl+C': 'Копирование текста',
  'Ctrl+V': 'Вставка текста',
  'Ctrl+S': 'Сохранить изменения в окне',
  'Ctrl+Shift+A': 'Что-то оно делает'
};
var shortcutKeys = Object.keys(shortcuts);
var shortcutIndex = 0;
var correctCount = 0;
value.innerHTML = shortcutKeys[shortcutIndex];
counter.innerHTML = "\u0423\u0440\u043E\u0432\u0435\u043D\u044C: ".concat(correctCount);
document.addEventListener('keydown', function (event) {
  event.preventDefault();

  if (event.key === 'Escape') {
    value.innerHTML = 'Все!';
    description.innerHTML = '';
    value.style.color = '#cbfb45';
  }

  var shortcutKey = shortcutKeys[shortcutIndex];
  var shortcutParts = shortcutKey.split('+');
  var isCorrectKey = isMac ? event.metaKey : event.ctrlKey;

  if (isCorrectKey && event.shiftKey && event.key.toUpperCase() === shortcutParts[2]) {
    showShortcutInfo(shortcuts[shortcutKey], ++shortcutIndex);
    correctCount++;
  } else if (isCorrectKey && !event.shiftKey && event.key.toUpperCase() === shortcutParts[1]) {
    showShortcutInfo(shortcuts[shortcutKey], ++shortcutIndex);
    correctCount++;
  }

  counter.innerHTML = "\u0423\u0440\u043E\u0432\u0435\u043D\u044C: ".concat(correctCount);
});

function showShortcutInfo(shortcutInfo, shortcutIndex) {
  value.style.color = '#cbfb45';
  description.innerHTML = shortcutInfo;
  setTimeout(function () {
    if (shortcutIndex < shortcutKeys.length) {
      value.innerHTML = shortcutKeys[shortcutIndex];
      description.innerHTML = '';
      value.style.color = 'white';
    } else {
      value.innerHTML = 'Все!';
      description.innerHTML = '';
      value.style.color = '#cbfb45';
      var restart = document.getElementById('reset-button');
      restart.style.display = 'block';
      counter.style.display = 'none';

      restart.onclick = function () {
        window.location.reload();
      };
    }
  }, 2000);
}
;// CONCATENATED MODULE: ./src/index.js
 //* modal window

 //* shortcut change animation

 //* landing text apperance

 //* shortcut page sistem check and load content

 //* training page fuctionality


})();

/******/ })()
;