/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./src/settings.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function Edit(props) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const {
    children
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blockProps, {});
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }), children);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variations */ "./src/variations.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * Internal dependencies
 */





/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_6__.name, {
  variations: _variations__WEBPACK_IMPORTED_MODULE_5__["default"],
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    ...blockProps,
    noValidate: true,
    "data-currency": attributes.currency,
    "data-yearSummary": attributes.yearSummary,
    "data-showTable": attributes.showTable,
    "data-type": attributes.type,
    "data-wp-interactive": "mortgage",
    "data-wp-watch": "callbacks.fields",
    "data-wp-context": "{ \"result\": false, \"showTable\": false }",
    ...innerBlocksProps
  });
}

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);






function Settings(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    innerBlocks,
    hasTable,
    tables
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getBlocks,
      getBlocksByName
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    return {
      innerBlocks: getBlocks(clientId),
      hasTable: getBlocksByName('mortgage/table').length,
      tables: getBlocksByName('mortgage/table')
    };
  }, [clientId]);
  const {
    insertBlocks,
    removeBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  const addTable = () => {
    const table = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.createBlock)('mortgage/table', {});
    insertBlocks(table, innerBlocks.length, clientId);
  };
  const removeTable = () => {
    console.log(tables);
    removeBlocks(tables);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Form', 'mortgage'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Currency symbol', 'mortgage'),
    value: attributes.currency,
    onChange: val => setAttributes({
      currency: val
    })
  }), 'loan' === attributes.type && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show table', 'mortgage'),
    checked: hasTable,
    onChange: () => {
      if (!hasTable) {
        addTable();
      } else {
        removeTable();
      }
    }
  })));
}

/***/ }),

/***/ "./src/variations.js":
/*!***************************!*\
  !*** ./src/variations.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const variations = [{
  name: 'loan',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mortgage calculator', 'mortgage'),
  icon: 'calculator',
  innerBlocks: [['mortgage/input', {
    name: 'amount',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Amount', 'mortgage'),
    value: 10000,
    min: 0
  }], ['mortgage/input', {
    name: 'rate',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rate', 'mortgage'),
    value: 4,
    min: 0,
    step: 0.01
  }], ['mortgage/input', {
    name: 'term',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Term', 'mortgage'),
    value: 10
  }], ['mortgage/select', {
    name: 'frequency',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Frequency', 'mortgage'),
    values: [{
      value: 52,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Weekly', 'mortgage'),
      hidden: true
    }, {
      value: 26,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fortnightly', 'mortgage'),
      hidden: true
    }, {
      value: 12,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Monthly', 'mortgage'),
      hidden: false
    }, {
      value: 6,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bi-Monthly', 'mortgage'),
      hidden: false
    }, {
      value: 4,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Quarterly', 'mortgage'),
      hidden: false
    }, {
      value: 2,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Half-yearly', 'mortgage'),
      hidden: false
    }, {
      value: 1,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Yearly', 'mortgage'),
      hidden: true
    }]
  }], ['mortgage/button', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Calculate', 'mortgage')
  }], ['mortgage/result', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Installment:', 'mortgage')
  }]],
  attributes: {
    type: 'loan'
  },
  scope: ['block', 'inserter'],
  isDefault: true
}, {
  name: 'two-column-loan',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mortgage calculator (2 cols)', 'mortgage'),
  icon: 'calculator',
  innerBlocks: [['core/columns', {}, [['core/column', {}], ['core/column', {}, [['mortgage/input', {
    name: 'amount',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Amount', 'mortgage'),
    value: 10000,
    min: 0
  }], ['mortgage/input', {
    name: 'rate',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rate', 'mortgage'),
    value: 4,
    min: 0,
    step: 0.01
  }], ['mortgage/input', {
    name: 'term',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Term', 'mortgage'),
    value: 10
  }], ['mortgage/select', {
    name: 'frequency',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Frequency', 'mortgage'),
    values: [{
      value: 52,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Weekly', 'mortgage')
    }, {
      value: 26,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fortnightly', 'mortgage')
    }, {
      value: 12,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Monthly', 'mortgage')
    }, {
      value: 6,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bi-Monthly', 'mortgage')
    }, {
      value: 4,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Quarterly', 'mortgage')
    }, {
      value: 2,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Half-yearly', 'mortgage')
    }, {
      value: 1,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Yearly', 'mortgage')
    }]
  }], ['mortgage/button', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Calculate', 'mortgage')
  }]]]]], ['mortgage/result', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Installment:', 'mortgage')
  }]],
  attributes: {
    type: 'loan'
  },
  scope: ['block'],
  isDefault: true
}, {
  name: 'rates',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rates Comparator', 'mortgage'),
  icon: 'calculator',
  innerBlocks: [['mortgage/input', {
    name: 'amount',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Amount', 'mortgage'),
    value: 10000,
    min: 0
  }], ['mortgage/input', {
    name: 'rate',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rate', 'mortgage'),
    value: 4,
    min: 0,
    step: 0.01
  }], ['mortgage/input', {
    name: 'term',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Term', 'mortgage'),
    value: 10
  }], ['mortgage/select', {
    name: 'increment',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Increment', 'mortgage'),
    values: [{
      value: 0.125,
      label: '1/8%'
    }, {
      value: 0.25,
      label: '1/4%'
    }, {
      value: 0.375,
      label: '3/8%'
    }, {
      value: 0.5,
      label: '1/2%'
    }, {
      value: 0.625,
      label: '5/8%'
    }, {
      value: 0.875,
      label: '7/8%'
    }, {
      value: 1,
      label: '1%'
    }]
  }], ['mortgage/button', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Calculate', 'mortgage')
  }], ['mortgage/table', {
    lock: {
      move: false,
      remove: true
    }
  }]],
  attributes: {
    type: 'rates'
  },
  scope: ['block', 'inserter'],
  isDefault: true
}, {
  name: 'duration',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Duration Comparator', 'mortgage'),
  icon: 'calculator',
  innerBlocks: [['mortgage/input', {
    name: 'amount',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Amount', 'mortgage'),
    value: 10000,
    min: 0
  }], ['mortgage/input', {
    name: 'rate',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rate', 'mortgage'),
    value: 4,
    min: 0,
    step: 0.01
  }], ['mortgage/button', {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Calculate', 'mortgage')
  }], ['mortgage/table', {
    lock: {
      move: false,
      remove: true
    }
  }]],
  attributes: {
    type: 'duration'
  },
  scope: ['block', 'inserter'],
  isDefault: true
}];

/**
 * Add `isActive` function to all `embed` variations, if not defined.
 * `isActive` function is used to find a variation match from a created
 *  Block by providing its attributes.
 */
variations.forEach(variation => {
  variation.isActive = (blockAttributes, variationAttributes) => blockAttributes.type === variationAttributes.type;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variations);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"mortgage/form","version":"0.1.0","title":"Mortgage form","category":"widgets","icon":"media-interactive","description":"An interactive block with the Interactivity API","providesContext":{"mortgage/currency":"currency","mortgage/type":"type"},"supports":{"interactivity":true},"attributes":{"currency":{"type":"string","default":"$"},"showTable":{"type":"boolean","default":false},"yearSummary":{"type":"boolean","default":false},"type":{"type":"string","enum":["loan","rates","duration"]}},"styles":[{"name":"regular","label":"Default","isDefault":true},{"name":"bolded","label":"Bolded label"},{"name":"modern","label":"Modern"}],"textdomain":"mortgage","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScriptModule":"file:./view.js"}');

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
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunky"] = globalThis["webpackChunky"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map