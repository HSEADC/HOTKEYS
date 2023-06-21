/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
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

;// CONCATENATED MODULE: ./src/javascript/snack_bar.js
function snackBar(textSnackbar, timeout) {
  var snackBar = document.getElementById('SNACKBAR');
  var snackBarElem = snackBar.querySelector('h1');
  snackBarElem.innerHTML = textSnackbar;
  snackBar.classList.remove('_Get');
  snackBar.classList.add('_Get');
  setTimeout(function () {
    return snackBar.classList.remove('_Get');
  }, timeout);
}
;// CONCATENATED MODULE: ./src/javascript/_animateKeyboard.js
function animateKeyboard(imgElement, image2, image3) {
  var imageElement = document.querySelector(imgElement);
  var image1 = imageElement.src;
  var images = [image1, image2, image3];
  var imageIndex = 0;

  function changeImage() {
    imageElement.src = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length;
  }

  setTimeout(function () {
    setInterval(changeImage, 1000);
  }, 1000);
}
;// CONCATENATED MODULE: ./src/images/index/index_win2.png
const index_win2_namespaceObject = __webpack_require__.p + "images/c74774ce72f4ed7a78e3.png";
;// CONCATENATED MODULE: ./src/images/index/index_win3.png
const index_win3_namespaceObject = __webpack_require__.p + "images/2975bb7828a3b553d655.png";
;// CONCATENATED MODULE: ./src/images/index/index_mac2.png
const index_mac2_namespaceObject = __webpack_require__.p + "images/04dd84bdf713d7dd1fe7.png";
;// CONCATENATED MODULE: ./src/images/index/index_mac3.png
const index_mac3_namespaceObject = __webpack_require__.p + "images/fd113cace76c76b18cda.png";
;// CONCATENATED MODULE: ./src/javascript/landing.js







window.addEventListener('DOMContentLoaded', function () {
  // system detection
  var macKeyboard = document.querySelector('#IMG_MAC');
  var winKeyboard = document.querySelector('#IMG_WIN');
  var system = js_cookie.get('os');

  var showElement = function showElement(elementToShow, elementToHide) {
    elementToShow.style.display = 'block';
    elementToHide.style.display = 'none';
  };

  if (system == 'macos') {
    showElement(macKeyboard, winKeyboard);
  } else {
    showElement(winKeyboard, macKeyboard);
  } // bookmark call


  var bookmarkBtn = document.querySelectorAll('.ADD_BOOKMARK');
  bookmarkBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      snackBar("\u0414\u043E\u0431\u0430\u0432\u044C \u0441\u0430\u0439\u0442 \u0432 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438, \u043D\u0430\u0436\u0430\u0432 <span class=\"A_SnackBarKey\">".concat(system === 'macos' ? 'CMD+D' : 'CTRL+D', "</span>"), 3000);
    });
  }); // keyboard animation

  if (system == 'macos') {
    animateKeyboard('#IMG_MAC', index_mac2_namespaceObject, index_mac3_namespaceObject);
  } else {
    animateKeyboard('#IMG_WIN', index_win2_namespaceObject, index_win3_namespaceObject);
  }
});
/******/ })()
;