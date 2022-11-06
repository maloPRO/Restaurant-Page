/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(14), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(15), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(16), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poor+Story&family=Roboto+Serif:opsz,wght@8..144,300&family=Rubik+Dirt&family=Silkscreen:wght@700&family=Ubuntu&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poor+Story&family=Poppins&family=Roboto+Serif:opsz,wght@8..144,300&family=Rubik+Dirt&family=Silkscreen:wght@700&family=Ubuntu&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100%;\n  background:linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n}\n#content {\n  width: 65%;\n  background:#fffada;\n  background-size: cover;\n  display: grid;\n  grid-template: 1fr 0.3fr 6fr 1fr / 1fr 1fr 4fr 1fr 1fr;\n}\n#title {\n  grid-area: 1/1/2/6;\n  color: #333;\n  font-family: 'Poor Story', cursive;\n  font-size: 2rem;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-style: italic;\n  padding: 10px;\n}\n#title img {\n  width: 30px;\n  height: 30px;\n}\n#title img:hover {\n  transform: rotate(10deg);\n}\n#nav {\n  grid-area: 2/3/3/4;\n  color: #222;\n  display: grid;\n  grid-template: 1fr / repeat(6, 1fr);\n  font-size: 1rem;\n  font-weight: 900;\n}\n.navItem {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  font-family: 'Poppins', sans-serif;\n  font-size: 1rem;\n  height: 100%;\n  border-radius: 5px 5px 0 0;\n\n}\n.navItem:hover {\n  cursor: pointer;\n  background-color: #222;\n  color: #fffada;\n}\n#section {\n  width: 100%;\n  height: 100%;\n  grid-area: 3/2/3/5;\n  border-radius: 3px;\n\n}\n#homeTab {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template: repeat(5, 1fr) / 1fr;\n  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n#slogan {\n  color: #fff;\n  font-family: 'Poor Story', cursive;\n  font-size: 3rem;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#workingHours {\n  display: grid;\n  grid-template: .5fr .8fr / 1fr 1fr;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0,0,0,0.8);\n}\n#hoursTitle {\n  grid-area: 1/1/2/3;\n  display: flex;\n  justify-content: center;\n  color: #fffada;\n  font-family: 'Poppins', sans-serif;\n  font-size: 1.3rem;\n  font-weight: 800;\n}\n.week-days {\n  color: #fffada;\n  display: grid;\n  justify-content: center;\n  font-family: 'Poppins', sans-serif;\n}\n.days, .time {\n  display: flex;\n  justify-content: center;\n  font-size: 1rem;\n  padding: 5px;\n}\n.days {\n  font-weight: 900;\n}\n#weekdays {\n  border-right: 5px solid #fffada;\n}\n.time {\n  font-family: 'Courier New', Courier, monospace;\n}\n#orderSection {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#orderButton , #reserve{\n  background-color: #fffada;\n  color: #222;\n  width: 8rem;\n  height: 2.5rem;\n  font-size: 1rem;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n  border: none;\n  border-radius: 5px;\n  margin: 5px;\n}\n#orderButton:hover, #reserve:hover {\n  background-color: rgb(47, 124, 53);\n  color: #fffada;\n  cursor: pointer;\n}\n#adress {\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  display: grid;\n  justify-content: center;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 600;\n}\n#specialsTab {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template: .5fr 6fr / 1fr;\n  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n}\n#specialsContainer {\n  display: grid;\n  grid-template: repeat(2, 1fr) / repeat(2, 1fr);\n  gap: 5px;\n}\n.specialsNum {\n  color: #fffada;\n  display: grid;\n  padding: 5px;\n  background-color: rgba(0,0,0,0.5);\n\n}\n.specialsNum p {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.specialsNum p:first-child {\n  font-size: 1.6rem;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 900;\n}\n.specialsNum p:nth-child(2) {\n  font-size: 1.1rem;\n  font-family: 'Poppins', sans-serif;\n}\n.specialsNum p:nth-child(3) {\n  font-family: 'Courier New', Courier, monospace;\n  font-size: 1rem;\n}\n\n#lunchTab {\n  width: 100%;\n  height: 100%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  display: grid;\n  grid-template: .5fr 6fr / 1fr;\n}\n#dinnerTab {\n  width: 100%;\n  height: 100%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: cover;\n  display: grid;\n  grid-template: .5fr 6fr / 1fr;\n}\n#drinksTab {\n  width: 100%;\n  height: 100%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: cover;\n  display: grid;\n  grid-template: .5fr 6fr / 1fr;\n}\n#tabSectionHeader{\n  color: #fffada;\n  padding: 10px;\n  grid-area: 1/1/2/2;\n  background: rgba(0,0,0,0.5);\n  margin-bottom: 3px;\n}\n#tabSectionHeader h3, #tabSectionHeader p {\n  display: flex;\n  justify-content: center;\n  font-family: 'Poppins', sans-serif;\n}\n#lunchContent, #dinnerContent {\n  display: grid;\n  grid-template: repeat(3, 1fr) / repeat(3, 1fr);\n  gap: 3px;\n}\n.items {\n  background-color: rgba(0,0,0,0.5);\n}\n.items:hover {\n  transform: scale(0.99);\n}\n.itemTitle {\n  color: #fffada;\n  display: flex;\n  justify-content: center;\n  padding: 5px 5px 0 5px;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 600;\n}\n.itemContent {\n  color: #fff;\n  padding:0 10px 0 10px;\n  font-family: 'Poppins', sans-serif;\n  font-size: .85rem;\n\n}\n#drinksContent {\n  display: grid;\n  grid-template: repeat(2, 1fr) / repeat(2, 1fr);\n  gap: 3px;\n}\n.listItem {\n  color: #fff;\n  font-family: 'Poppins', sans-serif;\n  font-size: .85rem;\n  text-align: center;\n  padding: 3px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2be25b30d6fc89ba410f.jpg";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73711800f7efd31efeb3.jpg";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d58c8cb6d1fbd1464871.jpg";

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fe1dc4438fe7c13d170.jpg";

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4edd4f44db03fc4fb885.jpg";

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "dinner": () => (/* binding */ dinner),
/* harmony export */   "drinks": () => (/* binding */ drinks),
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "lunch": () => (/* binding */ lunch),
/* harmony export */   "section": () => (/* binding */ section),
/* harmony export */   "specials": () => (/* binding */ specials)
/* harmony export */ });
/* harmony import */ var _clear_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _images_chef_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);


const content = document.getElementById('content');

const title = document.createElement('div');
title.setAttribute('id', 'title');
title.textContent = "URBANDINE";

const myIcon = new Image();
myIcon.src = _images_chef_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
title.appendChild(myIcon);
content.appendChild(title);

const nav = document.createElement('div');
nav.setAttribute('id', 'nav');
content.appendChild(nav);

const home = document.createElement('div');
const specials = document.createElement('div');
const lunch = document.createElement('div');
const dinner = document.createElement('div');
const drinks = document.createElement('div');

home.setAttribute('class','navItem');
specials.setAttribute('class', 'navItem');
lunch.setAttribute('class', 'navItem');
dinner.setAttribute('class', 'navItem');
drinks.setAttribute('class', 'navItem');

home.textContent = 'Home'
specials.textContent = 'Specials';
lunch.textContent = 'Lunch';
dinner.textContent = 'Dinner';
drinks.textContent = 'Drinks';

nav.appendChild(home);
nav.appendChild(specials);
nav.appendChild(lunch);
nav.appendChild(dinner);
nav.appendChild(drinks);

const section = document.createElement('div');
section.setAttribute('id', 'section');
content.appendChild(section);

//welcome
const homeTab = document.createElement('div');
homeTab.setAttribute('id', 'homeTab');
section.appendChild(homeTab);

const slogan = document.createElement('p');
slogan.textContent = 'Eat Drink Enjoy';
slogan.setAttribute('id', 'slogan');
homeTab.appendChild(slogan);

//opening hours
const workingHours = document.createElement('div');
workingHours.setAttribute('id', 'workingHours');
homeTab.appendChild(workingHours);

const hoursTitle = document.createElement('div');
hoursTitle.setAttribute('id', 'hoursTitle');
hoursTitle.textContent = 'Opening hours';
workingHours.appendChild(hoursTitle);
 
//weekdays
const weekdays = document.createElement('div');
weekdays.setAttribute('id', 'weekdays');
weekdays.setAttribute('class', 'week-days');

const days = document.createElement('p');
days.setAttribute('class', 'days');
days.textContent = "Weekdays";
weekdays.appendChild(days);

const time = document.createElement('p');
time.setAttribute('class', 'time');
time.textContent = '11 A.M - 10 P.M';
weekdays.appendChild(time);

workingHours.appendChild(weekdays);

//weekends
const weekends = document.createElement('div');
weekends.setAttribute('id', 'weekends');
weekends.setAttribute('class', 'week-days');

const days1 = document.createElement('p');
days1.setAttribute('class', 'days');
days1.textContent = "Weekends";
weekends.appendChild(days1);

const time1 = document.createElement('p');
time1.setAttribute('class', 'time');
time1.textContent = '9 A.M - 11 P.M';
weekends.appendChild(time1);

workingHours.appendChild(weekends);

//Order online

const orderSection = document.createElement('div');
orderSection.setAttribute('id', 'orderSection');
homeTab.appendChild(orderSection);

const orderButton = document.createElement('button');
orderButton.setAttribute('id', 'orderButton');
orderButton.textContent = 'Order Online';
orderSection.appendChild(orderButton);

const reserve = document.createElement('button');
reserve.setAttribute('id', 'reserve');
reserve.textContent = 'Reserve Table';
orderSection.appendChild(reserve);

//Adress
const adress = document.createElement('div');
adress.setAttribute('id', 'adress');
adress.textContent = '4348 TYCHO STATION, TA 90029 — (323) 664-3663';
homeTab.appendChild(adress);

home.style = 'background-color: #222; color: #fffada;';

home.addEventListener('click', () => {
  (0,_clear_section__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(section);
  section.appendChild(homeTab);

  home.style = 'background-color: #222; color: #fffada;';
  specials.style = 'background-color: #fffada; color: #222;'
  lunch.style = 'background-color: #fffada; color: #222;';
  dinner.style = 'background-color: #fffada; color: #222;';
  drinks.style = 'background-color: #fffada; color: #222;';
  
});










/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes)
/* harmony export */ });
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
};

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06fd21fc4c1c7f286d8c.svg";

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "specialsMenu": () => (/* binding */ specialsMenu)
/* harmony export */ });
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _clear_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);




const specialsMenu = function () {
  _home_page__WEBPACK_IMPORTED_MODULE_0__.specials.addEventListener('click', () => {
    (0,_clear_section__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(_home_page__WEBPACK_IMPORTED_MODULE_0__.section);

    _home_page__WEBPACK_IMPORTED_MODULE_0__.home.style = 'background-color: #fffada; color: #222;';
    _home_page__WEBPACK_IMPORTED_MODULE_0__.specials.style = 'background-color: #222; color: #fffada;'
    _home_page__WEBPACK_IMPORTED_MODULE_0__.lunch.style = 'background-color: #fffada; color: #222;';
    _home_page__WEBPACK_IMPORTED_MODULE_0__.dinner.style = 'background-color: #fffada; color: #222;';
    _home_page__WEBPACK_IMPORTED_MODULE_0__.drinks.style = 'background-color: #fffada; color: #222;';
    

    const specialsTab = document.createElement('div');
    specialsTab.setAttribute('id', 'specialsTab')
    _home_page__WEBPACK_IMPORTED_MODULE_0__.section.appendChild(specialsTab);

    //Specials header
    const tabSectionHeader = document.createElement('div');
    tabSectionHeader.setAttribute('id', 'tabSectionHeader');
    specialsTab.appendChild(tabSectionHeader);

    const title = document.createElement('h3');
    title.textContent = "TODAY'S SPECICALS";
    tabSectionHeader.appendChild(title);

    const tabHours = document.createElement('p');
    tabHours.textContent = 'All Day Every Day';
    tabSectionHeader.appendChild(tabHours);

    //specials content container
    const specialsContainer = document.createElement('div');
    specialsContainer.setAttribute('id', 'specialsContainer');
    specialsTab.appendChild(specialsContainer);
    
    //First special of the day
    const specialsOne = document.createElement('div');
    specialsOne.setAttribute('class', 'specialsNum');
    specialsOne.setAttribute('id', 'specialsOne');
    specialsContainer.appendChild(specialsOne);

    const specialsOneContent1 = document.createElement('p');
    specialsOneContent1.textContent = 'Burger of the day';
    specialsOne.appendChild(specialsOneContent1);

    const specialsOneContent2 = document.createElement('p');
    specialsOneContent2.textContent = 'Say cheese burger';
    specialsOne.appendChild(specialsOneContent2);

    const specialsOnePrice = document.createElement('p');
    specialsOnePrice.textContent = '$ 4.95';
    specialsOne.appendChild(specialsOnePrice);

   //Second special of the day
    const specialsTwo = document.createElement('div');
    specialsTwo.setAttribute('class', 'specialsNum');
    specialsTwo.setAttribute('id', 'specialsTwo');
    specialsContainer.appendChild(specialsTwo);

    const specialsTwoContent1 = document.createElement('p');
    specialsTwoContent1.textContent = 'Soup of the Day';
    specialsTwo.appendChild(specialsTwoContent1);

    const specialsTwoContent2 = document.createElement('p');
    specialsTwoContent2.textContent = 'Black Bean(with creame fraiche and cilantro)';
    specialsTwo.appendChild(specialsTwoContent2);

    const specialsTwoPrice = document.createElement('p');
    specialsTwoPrice.textContent = '$ 3.99';
    specialsTwo.appendChild(specialsTwoPrice);

    //Third special
    const specialsThree = document.createElement('div');
    specialsThree.setAttribute('class', 'specialsNum');
    specialsThree.setAttribute('id', 'specialsThree');
    specialsContainer.appendChild(specialsThree);

    const specialsThreeContent1 = document.createElement('p');
    specialsThreeContent1.textContent = 'Drink of the Day';
    specialsThree.appendChild(specialsThreeContent1);

    const specialsThreeContent2 = document.createElement('p');
    specialsThreeContent2.textContent = 'Holy vodka';
    specialsThree.appendChild(specialsThreeContent2);

    const specialsThreePrice = document.createElement('p');
    specialsThreePrice.textContent = '$ 1.99';
    specialsThree.appendChild(specialsThreePrice);



  })
}

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dinnerMenu": () => (/* binding */ dinnerMenu)
/* harmony export */ });
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _clear_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);




const dinnerMenu = function () {
  _home_page__WEBPACK_IMPORTED_MODULE_0__.dinner.addEventListener('click', () => {

    (0,_clear_section__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(_home_page__WEBPACK_IMPORTED_MODULE_0__.section);

    _home_page__WEBPACK_IMPORTED_MODULE_0__.home.style = 'background-color: #fffada; color: #222;';
    _home_page__WEBPACK_IMPORTED_MODULE_0__.specials.style = 'background-color: #fffada; color: #222;'
    _home_page__WEBPACK_IMPORTED_MODULE_0__.lunch.style = 'background-color: #fffada; color: #222;';
    _home_page__WEBPACK_IMPORTED_MODULE_0__.dinner.style = 'background-color: #222; color: #fffada;';
    _home_page__WEBPACK_IMPORTED_MODULE_0__.drinks.style = 'background-color: #fffada; color: #222;';

    const dinnerTab = document.createElement('div');
    dinnerTab.setAttribute('id', 'dinnerTab');
    _home_page__WEBPACK_IMPORTED_MODULE_0__.section.appendChild(dinnerTab);

    //dinner section header
    const tabSectionHeader = document.createElement('div');
    tabSectionHeader.setAttribute('id', 'tabSectionHeader');
    dinnerTab.appendChild(tabSectionHeader);

    const title = document.createElement('h3');
    title.textContent = 'DINNER';
    tabSectionHeader.appendChild(title);

    const tabHours = document.createElement('p');
    tabHours.textContent = 'SERVED FROM 4 PM TO 11 PM';
    tabSectionHeader.appendChild(tabHours);

    const dinnerContent = document.createElement('div');
    dinnerContent.setAttribute('id', 'dinnerContent');
    dinnerTab.appendChild(dinnerContent);

    //Menu item one
    const item1 = document.createElement('div');
    item1.setAttribute('class', 'items');
    dinnerContent.appendChild(item1);

    const itemTitle1 = document.createElement('div');
    itemTitle1.setAttribute('class', 'itemTitle');
    itemTitle1.textContent = "Grilled Pork Chops";
    item1.appendChild(itemTitle1);

    const itemContent1 = document.createElement('p');
    itemContent1.setAttribute('class', 'itemContent');
    itemContent1.textContent = 'With goat cheese potato latkes & green bean casserole Topped with roasted apple sauce';
    item1.appendChild(itemContent1);

    //Menu item 2
    const item2 = document.createElement('div');
    item2.setAttribute('class', 'items');
    dinnerContent.appendChild(item2);

    const itemTitle2 = document.createElement('div');
    itemTitle2.setAttribute('class', 'itemTitle');
    itemTitle2.textContent = "Pan Seared Chicken";
    item2.appendChild(itemTitle2);

    const itemContent2 = document.createElement('p');
    itemContent2.setAttribute('class', 'itemContent');
    itemContent2.textContent = "Free range chicken w/lemon, garlic & rosemary sauce Served with succotash & garlic mashed potatoes";
    item2.appendChild(itemContent2);

    //Menu item 3
    const item3 = document.createElement('div');
    item3.setAttribute('class', 'items');
    dinnerContent.appendChild(item3);

    const itemTitle3 = document.createElement('div');
    itemTitle3.setAttribute('class', 'itemTitle');
    itemTitle3.textContent = "Steak Frites";
    item3.appendChild(itemTitle3);

    const itemContent3 = document.createElement('p');
    itemContent3.setAttribute('class', 'itemContent');
    itemContent3.textContent = "8 oz flank steak marinated in jalapeño and cilantro Served w/french fries & blue lake green beans";
    item3.appendChild(itemContent3);

    //Menu item 4
    const item4 = document.createElement('div');
    item4.setAttribute('class', 'items');
    dinnerContent.appendChild(item4);

    const itemTitle4 = document.createElement('div');
    itemTitle4.setAttribute('class', 'itemTitle');
    itemTitle4.textContent = "Roasted Chicken Soup";
    item4.appendChild(itemTitle4);

    const itemContent4 = document.createElement('p');
    itemContent4.setAttribute('class', 'itemContent');
    itemContent4.textContent = 'w/ noodles, free range chicken, fresh garlic & crisp vegetables';
    item4.appendChild(itemContent4);

    //Menu item 5
    const item5 = document.createElement('div');
    item5.setAttribute('class', 'items');
    dinnerContent.appendChild(item5);

    const itemTitle5 = document.createElement('div');
    itemTitle5.setAttribute('class', 'itemTitle');
    itemTitle5.textContent = "Grilled Cheeseburger";
    item5.appendChild(itemTitle5);

    const itemContent5 = document.createElement('p');
    itemContent5.setAttribute('class', 'itemContent');
    itemContent5.textContent = "Freshly ground prime beef w/sharp cheddar, sautéed onion, lettuce, tomato & Dijon-mayo on a brioche bun";
    item5.appendChild(itemContent5);

    //Menu item 6
    const item6 = document.createElement('div');
    item6.setAttribute('class', 'items');
    dinnerContent.appendChild(item6);

    const itemTitle6 = document.createElement('div');
    itemTitle6.setAttribute('class', 'itemTitle');
    itemTitle6.textContent = "Kale Salad";
    item6.appendChild(itemTitle6);

    const itemContent6 = document.createElement('p');
    itemContent6.setAttribute('class', 'itemContent');
    itemContent6.textContent = "Chopped Kale tossed with roasted pecans, dried cherries, siced radishes, goat cheese & champagne vinaigrette";
    item6.appendChild(itemContent6);

    //Menu item 7
    const item7 = document.createElement('div');
    item7.setAttribute('class', 'items');
    dinnerContent.appendChild(item7);

    const itemTitle7 = document.createElement('div');
    itemTitle7.setAttribute('class', 'itemTitle');
    itemTitle7.textContent = "Grilled Steak Sandwich";
    item7.appendChild(itemTitle7);

    const itemContent7 = document.createElement('p');
    itemContent7.setAttribute('class', 'itemContent');
    itemContent7.textContent = "Grilled Flank Steak w/ chimichuri, tomato, iceberg lettuce & a touch of mayo on a La Brea Bakery baguette";
    item7.appendChild(itemContent7);

    //Menu item 8
    const item8 = document.createElement('div');
    item8.setAttribute('class', 'items');
    dinnerContent.appendChild(item8);

    const itemTitle8 = document.createElement('div');
    itemTitle8.setAttribute('class', 'itemTitle');
    itemTitle8.textContent = "Meatloaf Sandwich";
    item8.appendChild(itemTitle8);

    const itemContent8 = document.createElement('p');
    itemContent8.setAttribute('class', 'itemContent');
    itemContent8.textContent = "w/ chipotle ketchup, mayo, jack cheese & roasted tomatoes served on sliced sourdough";
    item8.appendChild(itemContent8);

    //Menu item 9
    const item9 = document.createElement('div');
    item9.setAttribute('class', 'items');
    dinnerContent.appendChild(item9);

    const itemTitle9 = document.createElement('div');
    itemTitle9.setAttribute('class', 'itemTitle');
    itemTitle9.textContent = "Belgian Beef Stew";
    item9.appendChild(itemTitle9);

    const itemContent9 = document.createElement('p');
    itemContent9.setAttribute('class', 'itemContent');
    itemContent9.textContent = "Braised tri-tip with dark beer and caramelized onion Served w/ garlic mashed potatoes & sautéed spinach";
    item9.appendChild(itemContent9);

  })
}

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drinksMenu": () => (/* binding */ drinksMenu)
/* harmony export */ });
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _clear_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);




const drinksMenu = function () {
  _home_page__WEBPACK_IMPORTED_MODULE_0__.drinks.addEventListener('click', () => {

    (0,_clear_section__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(_home_page__WEBPACK_IMPORTED_MODULE_0__.section);

    _home_page__WEBPACK_IMPORTED_MODULE_0__.home.style = 'background-color: #fffada; color: #222;';
    _home_page__WEBPACK_IMPORTED_MODULE_0__.specials.style = 'background-color: #fffada; color: #222;'
    _home_page__WEBPACK_IMPORTED_MODULE_0__.lunch.style = 'background-color: #fffada; color: #222;';
    _home_page__WEBPACK_IMPORTED_MODULE_0__.dinner.style = 'background-color: #fffada; color: #222;';
    _home_page__WEBPACK_IMPORTED_MODULE_0__.drinks.style = 'background-color: #222; color: #fffada;';

    const drinksTab = document.createElement('div');
    drinksTab.setAttribute('id', 'drinksTab');
    _home_page__WEBPACK_IMPORTED_MODULE_0__.section.appendChild(drinksTab);

    //lunch section header
    const tabSectionHeader = document.createElement('div');
    tabSectionHeader.setAttribute('id', 'tabSectionHeader');
    drinksTab.appendChild(tabSectionHeader);

    const title = document.createElement('h3');
    title.textContent = 'DRINKS';
    tabSectionHeader.appendChild(title);

    const tabHours = document.createElement('p');
    tabHours.textContent = 'SERVED FROM 4 PM';
    tabSectionHeader.appendChild(tabHours);

    const drinksContent = document.createElement('div');
    drinksContent.setAttribute('id', 'drinksContent');
    drinksTab.appendChild(drinksContent);

    //Menu item one
    const item1 = document.createElement('div');
    item1.setAttribute('class', 'items');
    drinksContent.appendChild(item1);

    const itemTitle1 = document.createElement('div');
    itemTitle1.setAttribute('class', 'itemTitle');
    itemTitle1.textContent = "White Wines";
    item1.appendChild(itemTitle1);

    const listOneItem1 = document.createElement('p');
    listOneItem1.setAttribute('class', 'listItem');
    listOneItem1.textContent = 'Cabernet';
    item1.appendChild(listOneItem1);

    const listOneItem2 = document.createElement('p');
    listOneItem2.setAttribute('class', 'listItem');
    listOneItem2.textContent = 'Pinot Grigio';
    item1.appendChild(listOneItem2);

    const listOneItem3 = document.createElement('p');
    listOneItem3.setAttribute('class', 'listItem');
    listOneItem3.textContent = 'Vinho Verde';
    item1.appendChild(listOneItem3);

    //Menu item 2
    const item2 = document.createElement('div');
    item2.setAttribute('class', 'items');
    drinksContent.appendChild(item2);

    const itemTitle2 = document.createElement('div');
    itemTitle2.setAttribute('class', 'itemTitle');
    itemTitle2.textContent = "Red Wines";
    item2.appendChild(itemTitle2);

    const listTwoItem1 = document.createElement('p');
    listTwoItem1.setAttribute('class', 'listItem');
    listTwoItem1.textContent = 'Cabernet Sauvignon';
    item2.appendChild(listTwoItem1);

    const listTwoItem2 = document.createElement('p');
    listTwoItem2.setAttribute('class', 'listItem');
    listTwoItem2.textContent = 'Carménère Blend';
    item2.appendChild(listTwoItem2);

    const listTwoItem3 = document.createElement('p');
    listTwoItem3.setAttribute('class', 'listItem');
    listTwoItem3.textContent = 'Pinot Noir';
    item2.appendChild(listTwoItem3);

    const listTwoItem4 = document.createElement('p');
    listTwoItem4.setAttribute('class', 'listItem');
    listTwoItem4.textContent = 'Malbec';
    item2.appendChild(listTwoItem4);

    

    //Menu item 3
    const item3 = document.createElement('div');
    item3.setAttribute('class', 'items');
    drinksContent.appendChild(item3);

    const itemTitle3 = document.createElement('div');
    itemTitle3.setAttribute('class', 'itemTitle');
    itemTitle3.textContent = "Bottled Beers";
    item3.appendChild(itemTitle3);

    const listThreeItem1 = document.createElement('p');
    listThreeItem1.setAttribute('class', 'listItem');
    listThreeItem1.textContent = "Guineess Extra Stout";
    item3.appendChild(listThreeItem1);

    const listThreeItem2 = document.createElement('p');
    listThreeItem2.setAttribute('class', 'listItem');
    listThreeItem2.textContent = "Ventura Light";
    item3.appendChild(listThreeItem2);
    
    const listThreeItem3 = document.createElement('p');
    listThreeItem3.setAttribute('class', 'listItem');
    listThreeItem3.textContent = "Tusker Lager";
    item3.appendChild(listThreeItem3);

    const listThreeItem4 = document.createElement('p');
    listThreeItem4.setAttribute('class', 'listItem');
    listThreeItem4.textContent = "Amstel";
    item3.appendChild(listThreeItem4);

    //Menu item 4
    const item4 = document.createElement('div');
    item4.setAttribute('class', 'items');
    drinksContent.appendChild(item4);

    const itemTitle4 = document.createElement('div');
    itemTitle4.setAttribute('class', 'itemTitle');
    itemTitle4.textContent = "Scotch & whiskey";
    item4.appendChild(itemTitle4);

    const listFourItem1 = document.createElement('p');
    listFourItem1.setAttribute('class', 'listItem');
    listFourItem1.textContent = 'Johnnie Walker High Rye Blended Scotch Whisky';
    item4.appendChild(listFourItem1);

    const listFourItem2 = document.createElement('p');
    listFourItem2.setAttribute('class', 'listItem');
    listFourItem2.textContent = 'Glenfiddich 12-Year-Old Single Malt'
    item4.appendChild(listFourItem2);


    const listFourItem3 = document.createElement('p');
    listFourItem3.setAttribute('class', 'listItem');
    listFourItem3.textContent = 'Compass Box Artist Blend Scotch Whisky';
    item4.appendChild(listFourItem3);


    const listFourItem4 = document.createElement('p');
    listFourItem4.setAttribute('class', 'listItem');
    listFourItem4.textContent = 'Deanston Virgin Oak Single Malt Whisky';
    item4.appendChild(listFourItem4);



  })
}

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lunchMenu": () => (/* binding */ lunchMenu)
/* harmony export */ });
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _clear_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);




const lunchMenu = function () {
  _home_page__WEBPACK_IMPORTED_MODULE_0__.lunch.addEventListener('click', () => {

    (0,_clear_section__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)(_home_page__WEBPACK_IMPORTED_MODULE_0__.section);

    _home_page__WEBPACK_IMPORTED_MODULE_0__.home.style = 'background-color: #fffada; color: #222;';
    _home_page__WEBPACK_IMPORTED_MODULE_0__.specials.style = 'background-color: #fffada; color: #222;'
    _home_page__WEBPACK_IMPORTED_MODULE_0__.lunch.style = 'background-color: #111; color: #fffada;';
    _home_page__WEBPACK_IMPORTED_MODULE_0__.dinner.style = 'background-color: #fffada; color: #222;';
    _home_page__WEBPACK_IMPORTED_MODULE_0__.drinks.style = 'background-color: #fffada; color: #222;';

    const lunchTab = document.createElement('div');
    lunchTab.setAttribute('id', 'lunchTab');
    _home_page__WEBPACK_IMPORTED_MODULE_0__.section.appendChild(lunchTab);

    //lunch section header
    const tabSectionHeader = document.createElement('div');
    tabSectionHeader.setAttribute('id', 'tabSectionHeader');
    lunchTab.appendChild(tabSectionHeader);

    const title = document.createElement('h3');
    title.textContent = 'LUNCH';
    tabSectionHeader.appendChild(title);

    const tabHours = document.createElement('p');
    tabHours.textContent = 'SERVED FROM 11 AM TO 4 PM';
    tabSectionHeader.appendChild(tabHours);

    const lunchContent = document.createElement('div');
    lunchContent.setAttribute('id', 'lunchContent');
    lunchTab.appendChild(lunchContent);

    //Menu item one
    const item1 = document.createElement('div');
    item1.setAttribute('class', 'items');
    lunchContent.appendChild(item1);

    const itemTitle1 = document.createElement('div');
    itemTitle1.setAttribute('class', 'itemTitle');
    itemTitle1.textContent = "Mac 'n' Cheese";
    item1.appendChild(itemTitle1);

    const itemContent1 = document.createElement('p');
    itemContent1.setAttribute('class', 'itemContent');
    itemContent1.textContent = 'w/extra sharp cheddar & garlicky cream sauce';
    item1.appendChild(itemContent1);

    //Menu item 2
    const item2 = document.createElement('div');
    item2.setAttribute('class', 'items');
    lunchContent.appendChild(item2);

    const itemTitle2 = document.createElement('div');
    itemTitle2.setAttribute('class', 'itemTitle');
    itemTitle2.textContent = "Bruschetta";
    item2.appendChild(itemTitle2);

    const itemContent2 = document.createElement('p');
    itemContent2.setAttribute('class', 'itemContent');
    itemContent2.textContent = 'our classic w/cherry tomatoes, buffalo mozzarella & basil on a toasted baguette, topped with kalamata olives';
    item2.appendChild(itemContent2);

    //Menu item 3
    const item3 = document.createElement('div');
    item3.setAttribute('class', 'items');
    lunchContent.appendChild(item3);

    const itemTitle3 = document.createElement('div');
    itemTitle3.setAttribute('class', 'itemTitle');
    itemTitle3.textContent = "Java Calamari";
    item3.appendChild(itemTitle3);

    const itemContent3 = document.createElement('p');
    itemContent3.setAttribute('class', 'itemContent');
    itemContent3.textContent = "fried calamari tossed w/malt vinegar, cracked red pepper & herbs, served with the Kitchen tartar sauce";
    item3.appendChild(itemContent3);

    //Menu item 4
    const item4 = document.createElement('div');
    item4.setAttribute('class', 'items');
    lunchContent.appendChild(item4);

    const itemTitle4 = document.createElement('div');
    itemTitle4.setAttribute('class', 'itemTitle');
    itemTitle4.textContent = "Roasted Chicken Soup";
    item4.appendChild(itemTitle4);

    const itemContent4 = document.createElement('p');
    itemContent4.setAttribute('class', 'itemContent');
    itemContent4.textContent = 'w/ noodles, free range chicken, fresh garlic & crisp vegetables';
    item4.appendChild(itemContent4);

    //Menu item 5
    const item5 = document.createElement('div');
    item5.setAttribute('class', 'items');
    lunchContent.appendChild(item5);

    const itemTitle5 = document.createElement('div');
    itemTitle5.setAttribute('class', 'itemTitle');
    itemTitle5.textContent = "Grilled Cheeseburger";
    item5.appendChild(itemTitle5);

    const itemContent5 = document.createElement('p');
    itemContent5.setAttribute('class', 'itemContent');
    itemContent5.textContent = "Freshly ground prime beef w/sharp cheddar, sautéed onion, lettuce, tomato & Dijon-mayo on a brioche bun";
    item5.appendChild(itemContent5);

    //Menu item 6
    const item6 = document.createElement('div');
    item6.setAttribute('class', 'items');
    lunchContent.appendChild(item6);

    const itemTitle6 = document.createElement('div');
    itemTitle6.setAttribute('class', 'itemTitle');
    itemTitle6.textContent = "Kale Salad";
    item6.appendChild(itemTitle6);

    const itemContent6 = document.createElement('p');
    itemContent6.setAttribute('class', 'itemContent');
    itemContent6.textContent = "Chopped Kale tossed with roasted pecans, dried cherries, siced radishes, goat cheese & champagne vinaigrette";
    item6.appendChild(itemContent6);

    //Menu item 7
    const item7 = document.createElement('div');
    item7.setAttribute('class', 'items');
    lunchContent.appendChild(item7);

    const itemTitle7 = document.createElement('div');
    itemTitle7.setAttribute('class', 'itemTitle');
    itemTitle7.textContent = "Grilled Steak Sandwich";
    item7.appendChild(itemTitle7);

    const itemContent7 = document.createElement('p');
    itemContent7.setAttribute('class', 'itemContent');
    itemContent7.textContent = "Grilled Flank Steak w/ chimichuri, tomato, iceberg lettuce & a touch of mayo on a La Brea Bakery baguette";
    item7.appendChild(itemContent7);

    //Menu item 8
    const item8 = document.createElement('div');
    item8.setAttribute('class', 'items');
    lunchContent.appendChild(item8);

    const itemTitle8 = document.createElement('div');
    itemTitle8.setAttribute('class', 'itemTitle');
    itemTitle8.textContent = "Meatloaf Sandwich";
    item8.appendChild(itemTitle8);

    const itemContent8 = document.createElement('p');
    itemContent8.setAttribute('class', 'itemContent');
    itemContent8.textContent = "w/ chipotle ketchup, mayo, jack cheese & roasted tomatoes served on sliced sourdough";
    item8.appendChild(itemContent8);

    //Menu item 9
    const item9 = document.createElement('div');
    item9.setAttribute('class', 'items');
    lunchContent.appendChild(item9);

    const itemTitle9 = document.createElement('div');
    itemTitle9.setAttribute('class', 'itemTitle');
    itemTitle9.textContent = "Fish & Chips";
    item9.appendChild(itemTitle9);

    const itemContent9 = document.createElement('p');
    itemContent9.setAttribute('class', 'itemContent');
    itemContent9.textContent = "Beer battered Icelandic cod w/sesame coleslaw & our savory tartar sauce";
    item9.appendChild(itemContent9);

  })
}

/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _specials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _dinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _drinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _lunch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);








(0,_specials__WEBPACK_IMPORTED_MODULE_2__.specialsMenu)()
;(0,_lunch__WEBPACK_IMPORTED_MODULE_5__.lunchMenu)()
;(0,_dinner__WEBPACK_IMPORTED_MODULE_3__.dinnerMenu)()
;(0,_drinks__WEBPACK_IMPORTED_MODULE_4__.drinksMenu)()


})();

/******/ })()
;