/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/EBGaramond-Italic-VariableFont_wght.ttf */ \"./src/assets/fonts/EBGaramond-Italic-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/EBGaramond-VariableFont_wght.ttf */ \"./src/assets/fonts/EBGaramond-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: \"Garamond Italics\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"truetype\");\n    font-weight: 500;\n}\n\n@font-face {\n    font-family: \"Garamond\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"truetype\");\n    font-weight: 500;\n}\n\n:root {\n    --background-green: #0e1f0b;\n    --font-white: #fbfdfb;\n    --gold: #9b773d;\n    --gold-light: #c2a779;\n    --font-stack: Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 16px;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    background-color: var(--background-green);\n    font-family: var(--font-stack), serif;\n    color: #fbfdfb;\n}\n\np {\n    margin: 0;\n    max-width: 60ch;\n    line-height: 2;\n}\n\nbutton {\n    appearance: none;\n    font-size: 1rem;\n    font-weight: 600;\n    letter-spacing: 4px;\n    color: var(--font-white);\n    background-color: inherit;\n    border: none;\n    cursor: pointer;\n}\n\nh1, h2, h3 {\n    font-family: \"Garamond\", var(--font-stack), serif;\n    margin: 0 0;\n    font-weight: 100;\n}\n\nh1 {\n    font-size: 8rem;\n}\n\nh2 {\n    font-size: 3rem;\n}\n\nh3{\n    font-size: 2rem;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 26px 38px;\n}\n\n.underline {\n    text-decoration: underline;\n}\n\n.grow {\n    flex-grow: 1;\n}\n\n.bold-font {\n    font-weight: bold;\n    letter-spacing: 4px;\n}\n\n.flex-header {\n    display: flex;\n    align-items: center;\n    gap: 4rem;\n    justify-content: space-between;\n}\n\n.flex-header > * {\n    letter-spacing: 4px;\n}\n\n.logo {\n    font-family: \"Garamond Italics\", var(--font-stack), serif;\n    font-size: 2rem;\n    font-weight: 400;\n}\n\n#content {\n    padding: 5.8rem 19rem;\n}\n\n#hero {\n    position: relative;\n    padding: 6rem 19rem;\n    height: 508px;\n}\n\n#hero-img-container {\n    width: 75%;\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: -2;\n}\n\n#hero-img-container img {\n    height: 700px;\n    width: 100%;\n    object-fit: cover;\n}\n\n.description {\n    opacity: 0.6;\n    font-size: 1.4rem;\n}\n\n.booking {\n    width: 100%;\n    display: grid;\n    grid-template-columns: auto repeat(4, 1fr);\n    align-items: center;\n    gap: 2rem;\n}\n\n.input-wrap {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    border: 1px solid #273824;\n    border-radius: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.input-wrap > * {\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    font-family: var(--font-stack), serif;\n    width: 100%;\n    padding: 1rem 1.5rem;\n    font-size: 1rem;\n    border: none;\n    color: var(--font-white);\n    background-color: var(--background-green);\n    box-sizing: border-box;\n    position: relative;\n}\n\n.input-wrap::after {\n    content: '⌄';\n    font-size: 1.2rem;\n    font-weight: bold;\n    position: absolute;\n    right: 1rem;\n    top: 50%;\n    transform: translateY(-50%);\n    pointer-events: none; /* Allow clicks to pass through */\n}\n\n.input-wrap > input[type=\"date\"]::-webkit-calendar-picker-indicator,\n.input-wrap > input[type=\"time\"]::-webkit-calendar-picker-indicator {\n    opacity: 0; /* Hide the default calendar/time icon */\n    position: absolute;\n    right: 1rem;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.gold-btn {\n    background-color: var(--gold);\n    height: 100%;\n    position: relative;\n}\n\n#menu-grid{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 3rem;\n}\n\n.menu-element{\n    width: 100%;\n    height: 500px;\n    display: grid;\n    grid-template-rows: 200px auto 150px auto;\n    border: 1px solid #273824;\n    padding: 1rem;\n    box-sizing: border-box;\n}\n\n.menu-element > img{\n    width: 100%;\n    height: auto;\n    align-self: end;\n    justify-self: center;\n}\n\n.menu-element > h3{\n    margin-top: 1rem;\n}\n\n.menu-element > .description{\n    line-height: 1.5;\n    margin: 1rem 0 1rem;\n}\n\n.price{\n    font-size: 1.5rem;\n    font-family: \"Garamond\", var(--font-stack), serif;\n    text-align: end;\n    margin-right: 2rem;\n}\n\n.menu-element > .small-img{\n    width: 250px;\n}\n\n.restaurant-container{\n    width: 100%;\n    height: 600px;\n    overflow: hidden;\n    position: relative;\n    margin: 2rem 0;\n}\n\n.restaurant{\n    width: 100%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.about-text{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.about-text > p{\n    max-width: 80ch;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ aboutPage)\n/* harmony export */ });\n/* harmony import */ var _assets_img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/img/restaurant.jpg */ \"./src/assets/img/restaurant.jpg\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\nconst content = document.querySelector('#content');\n\nfunction addDescription() {\n    const pContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDiv)('about-text')\n    const p1 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createP)('description', 'Benvenuti a \"La Dolce Vita\", il nostro angolo di Italia nel cuore della città. Qui, celebriamo l\\'autentica cucina italiana, utilizzando solo ingredienti freschi e di alta qualità per portare nei vostri piatti i sapori genuini della nostra terra.')\n    const p2 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createP)('description', 'Il nostro menu è un viaggio attraverso le diverse regioni d\\'Italia, offrendo piatti tradizionali come la pizza margherita, la lasagna al forno, il risotto alla milanese e molti altri. Ogni ricetta è preparata con passione e cura, rispettando le tradizioni culinarie che rendono unica la nostra cultura.')\n    const p3 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createP)('description', 'A \"La Dolce Vita\" non serviamo solo cibo, ma creiamo esperienze. Il nostro ambiente accogliente e il servizio attento vi faranno sentire come a casa, permettendovi di godere appieno dei piaceri della buona tavola italiana.')\n    const p4 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createP)('description', 'Vi invitiamo a scoprire la dolce vita con noi, dove ogni pasto è un\\'opera d\\'arte e ogni visita diventa un ricordo indimenticabile.')\n    const p5 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createP)('description', 'Grazie per aver scelto \"La Dolce Vita\". Siamo lieti di accogliervi e di condividere con voi il nostro amore per la cucina italiana.')\n\n    pContainer.appendChild(p1)\n    pContainer.appendChild(p2)\n    pContainer.appendChild(p3)\n    pContainer.appendChild(p4)\n    pContainer.appendChild(p5)\n    return pContainer;\n}\n\nfunction aboutPage() {\n    const imgContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDiv)('restaurant-container')\n    const image = document.createElement('img')\n    image.src = _assets_img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    image.alt = 'Restaurant picture'\n    image.classList.add('restaurant');\n    imgContainer.appendChild(image)\n\n    const h1 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createH1)('About us')\n    const pContainer = addDescription();\n\n    content.appendChild(h1)\n    content.appendChild(imgContainer)\n    content.appendChild(pContainer)\n}\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _hero_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero.jpg */ \"./src/hero.jpg\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _assets_svg_tick_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/svg/tick.svg */ \"./src/assets/svg/tick.svg\");\n\n\n\n\nconst style = document.createElement('style');\nstyle.innerHTML = `\n  .input-wrap::after {\n    content: '';\n    background-image: url('${_assets_svg_tick_svg__WEBPACK_IMPORTED_MODULE_2__}');\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 1.2rem;\n    height: 1.2rem;\n    position: absolute;\n    right: 1rem;\n    top: 50%;\n    transform: translateY(-50%);\n    pointer-events: none; /* Allow clicks to pass through */\n  }\n`;\ndocument.head.appendChild(style);\n\nfunction createHeroDiv() {\n    const heroDiv = document.createElement('div')\n    heroDiv.id = 'hero';\n    const textDiv = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDiv)('hero-text')\n    const ambient = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createP)('bold-font', 'AMBIENT')\n    const h1 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createH1)('Fine Dining')\n    const description = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createP)('description','Benvenuti a La Dolce Vita, dove la cucina italiana autentica incontra un\\'atmosfera elegante e accogliente. Godetevi piatti raffinati preparati con ingredienti freschi e di qualità.')\n\n    const imgContainer = document.createElement('div');\n    imgContainer.id = ('hero-img-container');\n    const img = document.createElement('img')\n    img.src = _hero_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    img.alt = \"Food picture\"\n\n    imgContainer.appendChild(img)\n    textDiv.appendChild(ambient);\n    textDiv.appendChild(h1);\n    textDiv.appendChild(description);\n    heroDiv.appendChild(textDiv);\n    heroDiv.appendChild(imgContainer)\n    return heroDiv;\n}\n\nfunction createSubmitBtn() {\n    const button = document.createElement('button');\n    button.type = 'submit';\n    button.className = 'gold-btn';\n    const span1 = document.createElement('span');\n    span1.style.color = '#c2a779';\n    span1.textContent = '◆ ';\n    button.appendChild(span1);\n    button.appendChild(document.createTextNode('SUBMIT'));\n    const span2 = document.createElement('span');\n    span2.style.color = '#c2a779';\n    span2.textContent = ' ◆';\n    button.appendChild(span2);\n    return button;\n}\n\nfunction createBooking() {\n    const form = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createForm)('booking')\n    const h2 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createH2)('Book a table')\n\n    const peopleInputWrap = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDiv)('input-wrap')\n    const peopleOpt = {\n        1: '1 Person',\n        2: '2 People',\n        3: '3 People',\n        4: '4 People',\n        5: '5 People',\n        6: '6 People'\n    }\n    const peopleInput = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createSelect)('people', 'people', peopleOpt);\n    peopleInputWrap.appendChild(peopleInput)\n\n    const dateInputWrap = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDiv)('input-wrap')\n    const dateInput = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDate)('date')\n    dateInputWrap.appendChild(dateInput)\n\n    const timeInputWrap = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDiv)('input-wrap')\n    const timeInput = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createTime)('time', 'time')\n    timeInputWrap.appendChild(timeInput)\n\n    const submitBtn = createSubmitBtn();\n\n    form.appendChild(h2)\n    form.appendChild(peopleInputWrap)\n    form.appendChild(dateInputWrap)\n    form.appendChild(timeInputWrap)\n    form.appendChild(submitBtn)\n    return form;\n}\n\nconst body = document.body;\nconst content = document.querySelector('#content');\n\nfunction homePage() {\n    const heroDiv = createHeroDiv();\n    body.insertBefore(heroDiv, content)\n    const booking = createBooking();\n    content.appendChild(booking)\n}\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\nconst content = document.querySelector('#content')\n\nconst homeBtn = document.querySelector('#home-btn')\nconst menuBtn = document.querySelector('#menu-btn')\nconst aboutBtn = document.querySelector('#about-btn')\n\nfunction clearPage() {\n    const hero = document.querySelector('#hero')\n    if (hero)\n        hero.remove();\n    while(content.firstChild)\n        content.removeChild(content.firstChild);\n}\n\nhomeBtn.addEventListener('click', () => {\n    clearPage();\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n});\n\nmenuBtn.addEventListener('click', () => {\n    clearPage();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\naboutBtn.addEventListener('click', () => {\n    clearPage();\n    (0,_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\n(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _assets_img_pizza_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/pizza.png */ \"./src/assets/img/pizza.png\");\n/* harmony import */ var _assets_img_spaghetti_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/spaghetti.png */ \"./src/assets/img/spaghetti.png\");\n/* harmony import */ var _assets_img_lasagna_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/lasagna.png */ \"./src/assets/img/lasagna.png\");\n/* harmony import */ var _assets_img_risotto_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/risotto.png */ \"./src/assets/img/risotto.png\");\n/* harmony import */ var _assets_img_osso_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img/osso.png */ \"./src/assets/img/osso.png\");\n/* harmony import */ var _assets_img_caprese_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/img/caprese.png */ \"./src/assets/img/caprese.png\");\n/* harmony import */ var _assets_img_panzanella_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/img/panzanella.png */ \"./src/assets/img/panzanella.png\");\n/* harmony import */ var _assets_img_tiramisu_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/img/tiramisu.png */ \"./src/assets/img/tiramisu.png\");\n\n\n\n\n\n\n\n\n\n\nconst content = document.querySelector('#content');\n\nfunction createMenuElement(image, imageAlt, name, desc, price) {\n    const div = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createDiv)('menu-element')\n    const img = document.createElement('img');\n    img.src = image;\n    img.alt = imageAlt;\n    const h3 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createH3)(name);\n    const description = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createP)('description', desc);\n    const priceElement = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createP)('price', price);\n    div.appendChild(img);\n    div.appendChild(h3)\n    div.appendChild(description)\n    div.appendChild(priceElement)\n    return div;\n}\n\nfunction addMenuElements(menuGrid) {\n    const panzettaDest = 'Un\\'insalata toscana con pane raffermo, pomodori, cipolle, cetrioli, basilico, olio d\\'oliva e aceto.'\n    const panzanetta = createMenuElement(_assets_img_panzanella_png__WEBPACK_IMPORTED_MODULE_7__, 'Panzanetta image', 'Panzanetta', panzettaDest, '15 $')\n    panzanetta.firstChild.classList.add('small-img')\n    menuGrid.appendChild(panzanetta);\n\n    const pizzaDesc = 'Una pizza classica con salsa di pomodoro, mozzarella e basilico fresco.'\n    const pizza = createMenuElement(_assets_img_pizza_png__WEBPACK_IMPORTED_MODULE_1__, 'Pizza image', 'Pizza Margherita', pizzaDesc, '13 $')\n    menuGrid.appendChild(pizza);\n\n    const lasagnaDesc = 'Strati di pasta, ragù di carne, besciamella e Parmigiano, cotti al forno.'\n    const lasagna = createMenuElement(_assets_img_lasagna_png__WEBPACK_IMPORTED_MODULE_3__, 'Lasagna image', 'Lasagna', lasagnaDesc, '19 $')\n    menuGrid.appendChild(lasagna);\n\n    const capreseDesc = 'Fette di pomodoro, mozzarella di bufala, basilico e olio d\\'oliva.'\n    const caprese = createMenuElement(_assets_img_caprese_png__WEBPACK_IMPORTED_MODULE_6__, 'Caprese image', 'Insalata Caprese', capreseDesc, '9 $')\n    menuGrid.appendChild(caprese);\n\n    const risottoDesc = 'Risotto cremoso con zafferano, brodo di carne, burro e Parmigiano.'\n    const risotto = createMenuElement(_assets_img_risotto_png__WEBPACK_IMPORTED_MODULE_4__, 'Risotto image', 'Risotto alla Milanese', risottoDesc, '26 $')\n    menuGrid.appendChild(risotto);\n\n    const ossoDesc = 'Stinco di vitello brasato con vino bianco, brodo e verdure.'\n    const osso = createMenuElement(_assets_img_osso_png__WEBPACK_IMPORTED_MODULE_5__, 'Osso image', 'Osso Buco', ossoDesc, '20 $')\n    menuGrid.appendChild(osso);\n\n    const spaghettiDesc = 'Spaghetti conditi con ragù di carne, pomodori e verdure.'\n    const spaghetti = createMenuElement(_assets_img_spaghetti_png__WEBPACK_IMPORTED_MODULE_2__, 'Spaghetti image', 'Spaghetti Bolognese', spaghettiDesc, '21 $')\n    menuGrid.appendChild(spaghetti);\n\n    const tiramisuDesc = 'Dessert con savoiardi imbevuti di caffè, crema al mascarpone e cacao.'\n    const tiramisu = createMenuElement(_assets_img_tiramisu_png__WEBPACK_IMPORTED_MODULE_8__, 'Tiramisu image', 'Tiramisu', tiramisuDesc, '8 $')\n    menuGrid.appendChild(tiramisu);\n}\n\nfunction menuPage() {\n    const h1 = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createH1)('Menu')\n    const menuGrid = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createDiv)()\n    menuGrid.id = 'menu-grid'\n    addMenuElements(menuGrid);\n\n    content.appendChild(h1);\n    content.appendChild(menuGrid);\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBtn: () => (/* binding */ createBtn),\n/* harmony export */   createDate: () => (/* binding */ createDate),\n/* harmony export */   createDiv: () => (/* binding */ createDiv),\n/* harmony export */   createForm: () => (/* binding */ createForm),\n/* harmony export */   createH1: () => (/* binding */ createH1),\n/* harmony export */   createH2: () => (/* binding */ createH2),\n/* harmony export */   createH3: () => (/* binding */ createH3),\n/* harmony export */   createP: () => (/* binding */ createP),\n/* harmony export */   createSelect: () => (/* binding */ createSelect),\n/* harmony export */   createTime: () => (/* binding */ createTime)\n/* harmony export */ });\nfunction createP(className, text){\n    const p = document.createElement('p');\n    p.classList.add(className)\n    p.textContent = text;\n    return p;\n}\n\nfunction createDiv(className){\n    const div = document.createElement('div');\n    if (className)\n        div.classList.add(className)\n    return div;\n}\n\nfunction createForm(className){\n    const form = document.createElement('form');\n    form.classList.add(className)\n    return form;\n}\n\nfunction createH1(text){\n    const h1 = document.createElement('h1');\n    h1.textContent = text;\n    return h1;\n}\n\nfunction createH2(text){\n    const h2 = document.createElement('h2');\n    h2.textContent = text;\n    return h2;\n}\n\nfunction createH3(text){\n    const h3 = document.createElement('h3');\n    h3.textContent = text;\n    return h3;\n}\n\nfunction createSelect(name, id, options){\n    const select = document.createElement('select');\n    select.name = name;\n    select.id = id;\n\n    for (let key in options) {\n            let option = document.createElement('option');\n            option.value = key;\n            option.textContent = options[key];\n            select.appendChild(option);\n    }\n\n    return select;\n}\n\nfunction createDate(name, id){\n    const input = document.createElement('input');\n    input.type = 'date';\n    input.name = name;\n    input.id = id;\n    return input;\n}\n\nfunction createTime(name, id){\n    const input = document.createElement('input');\n    input.type = 'time';\n    input.name = name;\n    input.id = id;\n    return input;\n}\n\nfunction createBtn(type, className, text){\n    const btn = document.createElement('button');\n    btn.type = type;\n    btn.classList.add(className);\n    btn.textContent = text;\n    return btn;\n}\n\n//# sourceURL=webpack://restaurant/./src/utils.js?");

/***/ }),

/***/ "./src/assets/fonts/EBGaramond-Italic-VariableFont_wght.ttf":
/*!******************************************************************!*\
  !*** ./src/assets/fonts/EBGaramond-Italic-VariableFont_wght.ttf ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"efbcfe325abb9f547328.ttf\";\n\n//# sourceURL=webpack://restaurant/./src/assets/fonts/EBGaramond-Italic-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/assets/fonts/EBGaramond-VariableFont_wght.ttf":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/EBGaramond-VariableFont_wght.ttf ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a3db34d9a4fb5564be54.ttf\";\n\n//# sourceURL=webpack://restaurant/./src/assets/fonts/EBGaramond-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/assets/img/caprese.png":
/*!************************************!*\
  !*** ./src/assets/img/caprese.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1243ba9a8222b5a66a4d.png\";\n\n//# sourceURL=webpack://restaurant/./src/assets/img/caprese.png?");

/***/ }),

/***/ "./src/assets/img/lasagna.png":
/*!************************************!*\
  !*** ./src/assets/img/lasagna.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d5c54d6100b072c791e.png\";\n\n//# sourceURL=webpack://restaurant/./src/assets/img/lasagna.png?");

/***/ }),

/***/ "./src/assets/img/osso.png":
/*!*********************************!*\
  !*** ./src/assets/img/osso.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b0759319b77faf1092d1.png\";\n\n//# sourceURL=webpack://restaurant/./src/assets/img/osso.png?");

/***/ }),

/***/ "./src/assets/img/panzanella.png":
/*!***************************************!*\
  !*** ./src/assets/img/panzanella.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0c3cfb5148af496ca4a8.png\";\n\n//# sourceURL=webpack://restaurant/./src/assets/img/panzanella.png?");

/***/ }),

/***/ "./src/assets/img/pizza.png":
/*!**********************************!*\
  !*** ./src/assets/img/pizza.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bdd888d1f9f097ce0b83.png\";\n\n//# sourceURL=webpack://restaurant/./src/assets/img/pizza.png?");

/***/ }),

/***/ "./src/assets/img/restaurant.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/restaurant.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"593d457b8b47814d303c.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/img/restaurant.jpg?");

/***/ }),

/***/ "./src/assets/img/risotto.png":
/*!************************************!*\
  !*** ./src/assets/img/risotto.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f6d2b8bdb245ac0af41.png\";\n\n//# sourceURL=webpack://restaurant/./src/assets/img/risotto.png?");

/***/ }),

/***/ "./src/assets/img/spaghetti.png":
/*!**************************************!*\
  !*** ./src/assets/img/spaghetti.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"df951ed3635e5ef054da.png\";\n\n//# sourceURL=webpack://restaurant/./src/assets/img/spaghetti.png?");

/***/ }),

/***/ "./src/assets/img/tiramisu.png":
/*!*************************************!*\
  !*** ./src/assets/img/tiramisu.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ea4d1054f7374c54d4a.png\";\n\n//# sourceURL=webpack://restaurant/./src/assets/img/tiramisu.png?");

/***/ }),

/***/ "./src/assets/svg/tick.svg":
/*!*********************************!*\
  !*** ./src/assets/svg/tick.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba4b3f743d15db301277.svg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/svg/tick.svg?");

/***/ }),

/***/ "./src/hero.jpg":
/*!**********************!*\
  !*** ./src/hero.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4fdaaa8fbdf5589bb4b5.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/hero.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;