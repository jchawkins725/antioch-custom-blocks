/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/themecolors.js":
/*!*******************************!*\
  !*** ./assets/themecolors.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "theme": function() { return /* binding */ theme; }
/* harmony export */ });
const theme = [{
  name: "Primary Gray",
  slug: "primary-gray",
  color: "#072B31"
}, {
  name: "Primary Green",
  slug: "primary-green",
  color: "#50A684"
}, {
  name: "Secondary Orange",
  slug: "secondary-orange",
  color: "#F68D2E"
}, {
  name: "Secondary Purple",
  slug: "secondary-purple",
  color: "#963CBD"
}, {
  name: "Secondary Gray",
  slug: "secondary-gray",
  color: "#A3AAAD"
}, {
  name: "Secondary Pink",
  slug: "secondary-pink",
  color: "#C3366F"
}, {
  name: "Secondary Blue",
  slug: "secondary-blue",
  color: "#71C5E8"
}, {
  name: "Secondary Yellow",
  slug: "secondary-yellow",
  color: "#B7DB57"
}, {
  name: "Off White",
  slug: "off-white",
  color: "#E7EDEE"
}, {
  name: "White",
  slug: "white",
  color: "#FFFFFF"
}];

/***/ }),

/***/ "./src/thread-container/edit.js":
/*!**************************************!*\
  !*** ./src/thread-container/edit.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _threads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./threads */ "./src/thread-container/threads.js");
/* harmony import */ var _assets_themecolors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/themecolors */ "./assets/themecolors.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/thread-container/editor.scss");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();

  const chooseThread = value => {
    setAttributes({
      thread: {
        name: value,
        initial: _threads__WEBPACK_IMPORTED_MODULE_4__.threads.find(e => e.name === value).initial,
        final: _threads__WEBPACK_IMPORTED_MODULE_4__.threads.find(e => e.name === value).final,
        aspectRatio: _threads__WEBPACK_IMPORTED_MODULE_4__.threads.find(e => e.name === value).aspectRatio,
        viewBox: _threads__WEBPACK_IMPORTED_MODULE_4__.threads.find(e => e.name === value).viewBox,
        vector: _threads__WEBPACK_IMPORTED_MODULE_4__.threads.find(e => e.name === value).vector
      }
    });
  };

  const strokeSizes = [{
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Super Thin"),
    slug: "thin",
    size: 8
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Very Thin"),
    slug: "thin",
    size: 10
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Thin"),
    slug: "thin",
    size: 12
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Normal"),
    slug: "normal",
    size: 17
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Thick"),
    slug: "thick",
    size: 24
  }];
  const fallbackStrokeSize = 17;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Choose your thread")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    selected: attributes.thread.name,
    help: "Thread animations will only appear on production not while editing",
    options: [{
      label: "Background Curve",
      value: "background-curve"
    }, {
      label: "Extra Curvy Background",
      value: "background-curve-extra"
    }, {
      label: "Drawn Thread One",
      value: "drawn-thread-one"
    }, {
      label: "Drawn Thread Two",
      value: "drawn-thread-two"
    }, {
      label: "Drawn Thread Three",
      value: "drawn-thread-three"
    }],
    onChange: chooseThread
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Thread Color")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "*For background curve, choose the color of the preceding block", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "For drawn thread, pick whatever color you want"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: attributes.color,
    colors: _assets_themecolors__WEBPACK_IMPORTED_MODULE_5__.theme,
    onChange: color => setAttributes({
      color
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Thread Stroke")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "*Thread Stroke has no effect on background curve"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
    value: attributes.stroke,
    fontSizes: strokeSizes,
    fallbackFontSize: fallbackStrokeSize,
    onChange: stroke => setAttributes({
      stroke
    }),
    withSlider: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: attributes.thread.viewBox,
    class: attributes.thread.name,
    width: "100%",
    height: "100%",
    preserveAspectRatio: attributes.thread.aspectRatio
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "vector-effect": attributes.thread.vector,
    d: attributes.thread.initial,
    "data-path-to": attributes.thread.final,
    style: {
      stroke: attributes.thread.name.includes("drawn-thread") ? attributes.color : "none",
      fill: attributes.thread.name.includes("drawn-thread") ? "transparent" : attributes.color,
      strokeWidth: `${attributes.stroke}px`
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: [["core/group", {
      layout: {
        inherit: true
      }
    }, [['core/paragraph']]]]
  }));
}

/***/ }),

/***/ "./src/thread-container/index.js":
/*!***************************************!*\
  !*** ./src/thread-container/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/thread-container/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/thread-container/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/thread-container/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/thread-container/block.json");


/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  icon: {
    foreground: "#50a684",
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M64 176h320v-32H64V176zM24 48H64v64h320v-64h40C437.3 48 448 37.25 448 24C448 10.74 437.3 0 424 0H24C10.75 0 0 10.74 0 24C0 37.25 10.75 48 24 48zM112 48h224v32h-224V48zM384 272H64v32h320V272zM432 208H64v32h368C440.8 240 448 232.8 448 224C448 215.2 440.8 208 432 208zM424 464H384v-64H64v64H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h400c13.25 0 24-10.75 24-24C448 474.7 437.3 464 424 464zM336 464h-224v-32h224V464zM64 368h320v-32H64V368z"
    }))
  },

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/thread-container/save.js":
/*!**************************************!*\
  !*** ./src/thread-container/save.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save(_ref) {
  let {
    attributes
  } = _ref;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: attributes.thread.viewBox,
    class: attributes.thread.name,
    width: "100%",
    height: "100%",
    preserveAspectRatio: attributes.thread.aspectRatio
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "vector-effect": attributes.thread.vector,
    d: attributes.thread.initial,
    "data-path-to": attributes.thread.final,
    style: {
      stroke: attributes.thread.name.includes("drawn-thread") ? attributes.color : "none",
      fill: attributes.thread.name.includes("drawn-thread") ? "transparent" : attributes.color,
      strokeWidth: `${attributes.stroke}px`
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/thread-container/threads.js":
/*!*****************************************!*\
  !*** ./src/thread-container/threads.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "threads": function() { return /* binding */ threads; }
/* harmony export */ });
const threads = [{
  name: "background-curve",
  initial: "M 0 0 C 30 0 47 0 100 0 L 0 0 Z",
  final: "M 0 0 C 30 0 47 12 100 0 L 0 0 Z",
  aspectRatio: "none",
  viewBox: "0 0 100 10",
  vector: "non-scaling-stroke"
}, {
  name: "background-curve-extra",
  initial: "M 0 0 C 23 0 35 0 50 0 C 65 0 74 0 100 0 L 0 0 Z",
  final: "M 0 0 C 17 21.6 35.2 1.2 50 1.4 C 65.2 1.5 83 21.6 100 0 L 0 0 Z",
  aspectRatio: "none",
  viewBox: "0 0 100 10",
  vector: "non-scaling-stroke"
}, {
  name: "drawn-thread-one",
  initial: "M0,218c257.3,16.9,396.1,53.8,476,86c16.9,6.8,67.2,27.9,138.7,47.3c102.1,27.7,183,34.5,202.7,36c0,0,180.1,13.8,450.7-81.3c10.5-3.7,36-13,54.7-37.3c5.3-7,28.9-37.7,18.7-73.3c-9.4-32.7-42-50.9-69.3-54.7c-33.1-4.6-71.6,10.2-88,42.7c-1.2,2.3-16.9,34.7-1.3,65.3c11,21.7,32.2,31.5,52,38.7c83.5,30,168.6,20.7,174.7,20c88.9-10.5,156.5-36.1,218.7-60c39.2-15.1,101.9-41.4,166.7-60c16.1-4.6,49.9-13.8,94.7-16c16.5-0.8,30.3-0.5,40,0",
  final: "",
  aspectRatio: "xMidYMid",
  viewBox: "0 120 1920 300",
  vector: "none"
}, {
  name: "drawn-thread-two",
  initial: "M-9.31,165.97c19.49,5.12,47.96,14.4,79.03,32.01,64.29,36.44,65.74,66.61,105.17,78,58.07,16.77,81.06-41.12,159.52-38.45,71.74,2.44,70.41,51.45,136.07,52.45,74.83,1.14,99.91-62.13,204.32-66.73,15.64-.69,33.97-1.98,57.22,3.92,54.12,13.72,77.32,53.49,171.04,59.48,134.48,8.6,163.1-71.33,274.31-44.63,82.33,19.76,90.21,69.22,165.8,68.63,71.87-.56,87.27-45.43,157.78-39.96,72.93,5.66,82,55.65,139.61,50.84,63.14-5.27,75.04-67.22,147.41-86.88,51.35-13.95,101.05,2.12,135.99,18.67",
  final: "",
  aspectRatio: "xMidYMid",
  viewBox: "0 120 1920 300",
  vector: "none"
}, {
  name: "drawn-thread-three",
  initial: "M0,291.32c81.43,21.49,141.93,14.84,181.86,4.99,110.22-27.19,141.77-97.98,234.13-88.99,39.95,3.89,59.53,19.62,116,17.33,47.94-1.94,77.19-15.04,97.18-20.46,130.49-35.4,225.15,158.8,359.75,145.35,115.07-11.5,117.82-160.61,229.73-168.89,107.65-7.96,131.48,128.04,318.67,172,29.28,6.88,152.62,35.84,212-28,3.33-3.58,29.97-33.64,27.67-74.67-2.36-42.16-34.73-85.69-71.73-89.19-12.42-1.17-31.26,1.6-39.27,14.19-11.59,18.21,3.73,50.26,25.08,64.89,21.78,14.93,47.54,10.25,63.92,7.11,32.65-6.26,46.3-20.25,81-39,19.08-10.31,47.06-23.42,84.02-34",
  final: "",
  aspectRatio: "xMidYMid",
  viewBox: "0 120 1920 300",
  vector: "none"
}];

/***/ }),

/***/ "./src/thread-container/editor.scss":
/*!******************************************!*\
  !*** ./src/thread-container/editor.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/thread-container/style.scss":
/*!*****************************************!*\
  !*** ./src/thread-container/style.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/thread-container/block.json":
/*!*****************************************!*\
  !*** ./src/thread-container/block.json ***!
  \*****************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"antioch-custom-blocks/thread-container","version":"1.0.0","title":"AU Thread Container","category":"custom-antioch-category","attributes":{"align":{"type":"string","default":"full"},"thread":{"type":"object","default":{"name":"background-curve","initial":"M 0 0 C 30 0 47 0 100 0 L 0 0 Z","final":"M 0 0 C 30 0 47 12 100 0 L 0 0 Z","aspectRatio":"none","viewBox":"0 0 100 10","vector":"non-scaling-stroke"}},"color":{"type":"string","default":"#50A686"},"stroke":{"type":"number","default":17}},"supports":{"color":{"background":true},"align":["full"]},"description":"Antioch Custom Thread Container","textdomain":"antioch-custom-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","script":"file:./script.js"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"thread-container/index": 0,
/******/ 			"thread-container/style-index": 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkantioch_custom_blocks"] = self["webpackChunkantioch_custom_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["thread-container/style-index"], function() { return __webpack_require__("./src/thread-container/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map