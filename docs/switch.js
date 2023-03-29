/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

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

;// CONCATENATED MODULE: ./src/javascript/system-switch.js

document.addEventListener('DOMContentLoaded', function () {
  var isMac = navigator.userAgent.toLowerCase().includes('macintosh'); //*? shortcut pages

  var macEl = document.getElementById('S_Mac');
  var winEl = document.getElementById('S_Win');
  var macBtn = document.querySelector('#mac');
  var winBtn = document.querySelector('#win'); //*? selection pages

  var macShortcut = document.querySelectorAll('.Q_ShortcutWindows');
  var winShortcut = document.querySelectorAll('.Q_ShortcutMacos');

  if (isMac) {
    js_cookie.set('os', 'macos');
  } else {
    js_cookie.set('os', 'windows');
  }

  var osCookie = js_cookie.get('os');

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
});
/******/ })()
;