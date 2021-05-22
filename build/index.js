(window["webpackJsonp_mortgage"] = window["webpackJsonp_mortgage"] || []).push([["style-index"],{

/***/ "./src/mortgage/style.scss":
/*!*********************************!*\
  !*** ./src/mortgage/style.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_mortgage"] = window["webpackJsonp_mortgage"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/duration/block.json":
/*!*********************************!*\
  !*** ./src/duration/block.json ***!
  \*********************************/
/*! exports provided: apiVersion, name, title, category, icon, description, textdomain, supports, attributes, style, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"mortgage/duration\",\"title\":\"Mortgage duration\",\"category\":\"widgets\",\"icon\":\"calculator\",\"description\":\"A block to generate a very simple and easy to use mortgage calculator form.\",\"textdomain\":\"mortgage\",\"supports\":{\"html\":false,\"className\":false},\"attributes\":{\"label\":{\"type\":\"object\",\"default\":{\"amount\":\"Amount\",\"rate\":\"Rate\",\"term\":\"Term\",\"frequency\":\"Payment frequency\"}},\"defaults\":{\"type\":\"object\",\"default\":{\"amount\":10000,\"rate\":4,\"term\":10,\"frequency\":12}},\"placeholder\":{\"type\":\"object\",\"default\":{\"amount\":10000,\"rate\":4,\"term\":10,\"frequency\":12}},\"help\":{\"type\":\"object\",\"default\":{\"amount\":\"\",\"rate\":\"\",\"term\":\"\",\"frequency\":\"\"}},\"button\":{\"type\":\"string\",\"default\":\"Calculate\"},\"currency\":{\"type\":\"string\",\"default\":\"$\"},\"yearSummary\":{\"type\":\"boolean\",\"default\":false},\"asRow\":{\"type\":\"boolean\",\"default\":false},\"boldedLabel\":{\"type\":\"boolean\",\"default\":true}},\"style\":\"file:../../build/style-index.css\"}");

/***/ }),

/***/ "./src/duration/edit.js":
/*!******************************!*\
  !*** ./src/duration/edit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var allowedFormats = ['core/bold', 'core/italic', 'core/link'];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      className = _ref.className;
  var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])();
  blockProps.className = classnames__WEBPACK_IMPORTED_MODULE_5___default()(blockProps.className, {
    'as-row': attributes.asRow,
    'bolded-label': attributes.boldedLabel,
    'wp-block-mortgage-form': true
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Form Options', 'mortgage'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Button text', 'mortgage'),
    value: attributes.button,
    onChange: function onChange(val) {
      return setAttributes({
        button: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Currency symbol', 'mortgage'),
    value: attributes.currency,
    onChange: function onChange(val) {
      return setAttributes({
        currency: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Display label on side', 'mortgage'),
    checked: attributes.asRow,
    onChange: function onChange(val) {
      return setAttributes({
        asRow: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bolded label', 'mortgage'),
    checked: attributes.boldedLabel,
    onChange: function onChange(val) {
      return setAttributes({
        boldedLabel: val
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Labels', 'mortgage'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Amount Label', 'mortgage'),
    value: attributes.label.amount,
    onChange: function onChange(val) {
      return setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          amount: val
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rate Label', 'mortgage'),
    value: attributes.label.rate,
    onChange: function onChange(val) {
      return setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          rate: val
        })
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Default Values', 'mortgage'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalNumberControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Amount Default Value', 'mortgage'),
    value: attributes.defaults.amount,
    onChange: function onChange(val) {
      return setAttributes({
        defaults: _objectSpread(_objectSpread({}, attributes.defaults), {}, {
          amount: val
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalNumberControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rate Default Value', 'mortgage'),
    value: attributes.defaults.rate,
    onChange: function onChange(val) {
      return setAttributes({
        defaults: _objectSpread(_objectSpread({}, attributes.defaults), {}, {
          rate: val
        })
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Placeholder Options', 'mortgage'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Amount Placeholder', 'mortgage'),
    value: attributes.placeholder.amount,
    onChange: function onChange(val) {
      return setAttributes({
        placeholder: _objectSpread(_objectSpread({}, attributes.placeholder), {}, {
          amount: val
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rate Placeholder', 'mortgage'),
    value: attributes.placeholder.rate,
    onChange: function onChange(val) {
      return setAttributes({
        placeholder: _objectSpread(_objectSpread({}, attributes.placeholder), {}, {
          rate: val
        })
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "label",
    value: attributes.label.amount,
    onChange: function onChange(val) {
      setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          amount: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter label...', 'mortgage'),
    allowedFormats: [],
    keepPlaceholderOnFocus: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "",
    readOnly: true,
    placeholder: attributes.placeholder.amount,
    disabled: true,
    value: attributes.defaults.amount
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "small",
    value: attributes.help.amount,
    onChange: function onChange(val) {
      setAttributes({
        help: _objectSpread(_objectSpread({}, attributes.help), {}, {
          amount: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter help message...', 'mortgage'),
    allowedFormats: allowedFormats,
    keepPlaceholderOnFocus: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "label",
    value: attributes.label.rate,
    onChange: function onChange(val) {
      setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          rate: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rate', 'mortgage'),
    allowedFormats: [],
    keepPlaceholderOnFocus: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "",
    readOnly: true,
    placeholder: attributes.placeholder.rate,
    disabled: true,
    value: attributes.defaults.rate
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "small",
    value: attributes.help.rate,
    onChange: function onChange(val) {
      setAttributes({
        help: _objectSpread(_objectSpread({}, attributes.help), {}, {
          rate: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter help message...', 'mortgage'),
    allowedFormats: allowedFormats,
    keepPlaceholderOnFocus: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", null, attributes.button)));
}

/***/ }),

/***/ "./src/duration/index.js":
/*!*******************************!*\
  !*** ./src/duration/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/duration/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/duration/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/duration/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/duration/block.json", 1);
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Internal dependencies
 */




var name = _block_json__WEBPACK_IMPORTED_MODULE_4__.name,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_4__.attributes;
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(name, {
  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `text`, `media`, `design`, `widgets`, and `embed`.
   */
  category: 'widgets',
  attributes: attributes,

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/duration/save.js":
/*!******************************!*\
  !*** ./src/duration/save.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);



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
  var attributes = _ref.attributes,
      className = _ref.className;
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"].save();
  blockProps.className = classnames__WEBPACK_IMPORTED_MODULE_4___default()(blockProps.className, {
    'wp-block-mortgage-form': true,
    'as-row': attributes.asRow,
    'bolded-label': attributes.boldedLabel
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("form", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
    noValidate: true,
    "data-currency": attributes.currency,
    "data-yearSummary": attributes.yearSummary
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "label",
    value: attributes.label.amount
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "amount",
    min: "0",
    required: true,
    value: attributes.defaults.amount,
    placeholder: attributes.placeholder.amount
  }), attributes.help.amount && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "small",
    value: attributes.help.amount
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "label",
    value: attributes.label.rate
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "rate",
    min: "0",
    step: "0.01",
    required: true,
    value: attributes.defaults.rate,
    placeholder: attributes.placeholder.rate
  }), attributes.help.rate && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "small",
    value: attributes.help.rate
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    className: 'mortgage-btn'
  }, attributes.button)));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mortgage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mortgage */ "./src/mortgage/index.js");
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ "./src/duration/index.js");
/* harmony import */ var _rates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rates */ "./src/rates/index.js");




/***/ }),

/***/ "./src/mortgage/block.json":
/*!*********************************!*\
  !*** ./src/mortgage/block.json ***!
  \*********************************/
/*! exports provided: apiVersion, name, title, category, icon, description, textdomain, supports, attributes, editorScript, style, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"mortgage/form\",\"title\":\"Mortgage\",\"category\":\"widgets\",\"icon\":\"calculator\",\"description\":\"A block to generate a very simple and easy to use mortgage calculator form.\",\"textdomain\":\"mortgage\",\"supports\":{\"html\":false,\"className\":true},\"attributes\":{\"label\":{\"type\":\"object\",\"default\":{\"amount\":\"Amount\",\"rate\":\"Rate\",\"term\":\"Term\",\"frequency\":\"Payment frequency\"}},\"defaults\":{\"type\":\"object\",\"default\":{\"amount\":10000,\"rate\":4,\"term\":10,\"frequency\":12}},\"placeholder\":{\"type\":\"object\",\"default\":{\"amount\":10000,\"rate\":4,\"term\":10,\"frequency\":12}},\"help\":{\"type\":\"object\",\"default\":{\"amount\":\"\",\"rate\":\"\",\"term\":\"\",\"frequency\":\"\"}},\"button\":{\"type\":\"string\",\"default\":\"Calculate\"},\"currency\":{\"type\":\"string\",\"default\":\"$\"},\"showTable\":{\"type\":\"boolean\",\"default\":false},\"yearSummary\":{\"type\":\"boolean\",\"default\":false},\"asRow\":{\"type\":\"boolean\",\"default\":false},\"boldedLabel\":{\"type\":\"boolean\",\"default\":true}},\"editorScript\":\"file:../../build/index.js\",\"style\":\"file:../../build/style-index.css\"}");

/***/ }),

/***/ "./src/mortgage/edit.js":
/*!******************************!*\
  !*** ./src/mortgage/edit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var allowedFormats = ['core/bold', 'core/italic', 'core/link'];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      className = _ref.className;
  var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])();
  blockProps.className = classnames__WEBPACK_IMPORTED_MODULE_5___default()(blockProps.className, {
    'as-row': attributes.asRow,
    'bolded-label': attributes.boldedLabel
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Form Options', 'mortgage'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Button text', 'mortgage'),
    value: attributes.button,
    onChange: function onChange(val) {
      return setAttributes({
        button: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Currency symbol', 'mortgage'),
    value: attributes.currency,
    onChange: function onChange(val) {
      return setAttributes({
        currency: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Show table', 'mortgage'),
    checked: attributes.showTable,
    onChange: function onChange(val) {
      return setAttributes({
        showTable: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Show year summary', 'mortgage'),
    checked: attributes.yearSummary,
    onChange: function onChange(val) {
      return setAttributes({
        yearSummary: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Display label on side', 'mortgage'),
    checked: attributes.asRow,
    onChange: function onChange(val) {
      return setAttributes({
        asRow: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bolded label', 'mortgage'),
    checked: attributes.boldedLabel,
    onChange: function onChange(val) {
      return setAttributes({
        boldedLabel: val
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Labels', 'mortgage'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Amount Label', 'mortgage'),
    value: attributes.label.amount,
    onChange: function onChange(val) {
      return setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          amount: val
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rate Label', 'mortgage'),
    value: attributes.label.rate,
    onChange: function onChange(val) {
      return setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          rate: val
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Term Label', 'mortgage'),
    value: attributes.label.term,
    onChange: function onChange(val) {
      return setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          term: val
        })
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Default Values', 'mortgage'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalNumberControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Amount Default Value', 'mortgage'),
    value: attributes.defaults.amount,
    onChange: function onChange(val) {
      return setAttributes({
        defaults: _objectSpread(_objectSpread({}, attributes.defaults), {}, {
          amount: val
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalNumberControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rate Default Value', 'mortgage'),
    value: attributes.defaults.rate,
    onChange: function onChange(val) {
      return setAttributes({
        defaults: _objectSpread(_objectSpread({}, attributes.defaults), {}, {
          rate: val
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalNumberControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Term Default Value', 'mortgage'),
    value: attributes.defaults.term,
    onChange: function onChange(val) {
      return setAttributes({
        defaults: _objectSpread(_objectSpread({}, attributes.defaults), {}, {
          term: val
        })
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Placeholder Options', 'mortgage'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Amount Placeholder', 'mortgage'),
    value: attributes.placeholder.amount,
    onChange: function onChange(val) {
      return setAttributes({
        placeholder: _objectSpread(_objectSpread({}, attributes.placeholder), {}, {
          amount: val
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rate Placeholder', 'mortgage'),
    value: attributes.placeholder.rate,
    onChange: function onChange(val) {
      return setAttributes({
        placeholder: _objectSpread(_objectSpread({}, attributes.placeholder), {}, {
          rate: val
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Term Placeholder', 'mortgage'),
    value: attributes.placeholder.term,
    onChange: function onChange(val) {
      return setAttributes({
        placeholder: _objectSpread(_objectSpread({}, attributes.placeholder), {}, {
          term: val
        })
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "label",
    value: attributes.label.amount,
    onChange: function onChange(val) {
      setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          amount: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter label...', 'mortgage'),
    allowedFormats: [],
    keepPlaceholderOnFocus: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "",
    readOnly: true,
    placeholder: attributes.placeholder.amount,
    disabled: true,
    value: attributes.defaults.amount
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "small",
    value: attributes.help.amount,
    onChange: function onChange(val) {
      setAttributes({
        help: _objectSpread(_objectSpread({}, attributes.help), {}, {
          amount: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter help message...', 'mortgage'),
    allowedFormats: allowedFormats,
    keepPlaceholderOnFocus: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "label",
    value: attributes.label.rate,
    onChange: function onChange(val) {
      setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          rate: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rate', 'mortgage'),
    allowedFormats: [],
    keepPlaceholderOnFocus: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "",
    readOnly: true,
    placeholder: attributes.placeholder.rate,
    disabled: true,
    value: attributes.defaults.rate
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "small",
    value: attributes.help.rate,
    onChange: function onChange(val) {
      setAttributes({
        help: _objectSpread(_objectSpread({}, attributes.help), {}, {
          rate: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter help message...', 'mortgage'),
    allowedFormats: allowedFormats,
    keepPlaceholderOnFocus: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "label",
    value: attributes.label.term,
    onChange: function onChange(val) {
      setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          term: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Term', 'mortgage'),
    allowedFormats: [],
    keepPlaceholderOnFocus: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "",
    readOnly: true,
    placeholder: attributes.placeholder.term,
    disabled: true,
    value: attributes.defaults.term
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "small",
    value: attributes.help.term,
    onChange: function onChange(val) {
      setAttributes({
        help: _objectSpread(_objectSpread({}, attributes.help), {}, {
          term: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter help message...', 'mortgage'),
    allowedFormats: allowedFormats,
    keepPlaceholderOnFocus: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "label",
    value: attributes.label.frequency,
    onChange: function onChange(val) {
      setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          frequency: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter label...', 'mortgage'),
    allowedFormats: [],
    keepPlaceholderOnFocus: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("select", {
    name: "frequency",
    disabled: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "12"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Monthly', 'mortgage'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "small",
    value: attributes.help.frequency,
    onChange: function onChange(val) {
      setAttributes({
        help: _objectSpread(_objectSpread({}, attributes.help), {}, {
          frequency: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter help message...', 'mortgage'),
    allowedFormats: allowedFormats,
    keepPlaceholderOnFocus: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", null, attributes.button)));
}

/***/ }),

/***/ "./src/mortgage/index.js":
/*!*******************************!*\
  !*** ./src/mortgage/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/mortgage/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/mortgage/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/mortgage/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/mortgage/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/mortgage/block.json", 1);
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
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




var name = _block_json__WEBPACK_IMPORTED_MODULE_5__.name,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_5__.attributes;
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(name, {
  /**
   * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
   */
  apiVersion: 2,

  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mortgage', 'mortgage'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('A block to generate a very simple and easy to use mortgage calculator form.', 'mortgage'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `text`, `media`, `design`, `widgets`, and `embed`.
   */
  category: 'widgets',
  attributes: attributes,

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

/***/ "./src/mortgage/save.js":
/*!******************************!*\
  !*** ./src/mortgage/save.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);



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
  var attributes = _ref.attributes,
      className = _ref.className;
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"].save();
  blockProps.className = classnames__WEBPACK_IMPORTED_MODULE_4___default()(blockProps.className, {
    'as-row': attributes.asRow,
    'bolded-label': attributes.boldedLabel
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("form", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
    noValidate: true,
    "data-currency": attributes.currency,
    "data-yearSummary": attributes.yearSummary,
    "data-showTable": attributes.showTable
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "label",
    value: attributes.label.amount
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "amount",
    min: "0",
    required: true,
    value: attributes.defaults.amount,
    placeholder: attributes.placeholder.amount
  }), attributes.help.amount && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "small",
    value: attributes.help.amount
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "label",
    value: attributes.label.rate
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "rate",
    min: "0",
    step: "0.01",
    required: true,
    value: attributes.defaults.rate,
    placeholder: attributes.placeholder.rate
  }), attributes.help.rate && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "small",
    value: attributes.help.rate
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "label",
    value: attributes.label.term
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "term",
    min: "0",
    required: true,
    value: attributes.defaults.term,
    placeholder: attributes.placeholder.term
  }), attributes.help.term && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "small",
    value: attributes.help.term
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "label",
    value: attributes.label.frequency
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("select", {
    name: "frequency"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "12"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Monthly', 'mortgage')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "6"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bi-Monthly', 'mortgage')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "4"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quarterly', 'mortgage')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "2"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Semi-annually', 'mortgage'))), attributes.help.frequency && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "small",
    value: attributes.help.frequency
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    className: 'mortgage-btn'
  }, attributes.button)));
}

/***/ }),

/***/ "./src/rates/block.json":
/*!******************************!*\
  !*** ./src/rates/block.json ***!
  \******************************/
/*! exports provided: apiVersion, name, title, category, icon, description, textdomain, supports, attributes, style, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"mortgage/rates\",\"title\":\"Mortgage rates comparison\",\"category\":\"widgets\",\"icon\":\"calculator\",\"description\":\"A block to generate a very simple and easy to use mortgage calculator form.\",\"textdomain\":\"mortgage\",\"supports\":{\"html\":false,\"className\":false},\"attributes\":{\"label\":{\"type\":\"object\",\"default\":{\"amount\":\"Amount\",\"rate\":\"Rate\",\"term\":\"Term\",\"increment\":\"Increment\"}},\"defaults\":{\"type\":\"object\",\"default\":{\"amount\":10000,\"rate\":4,\"term\":10,\"increment\":1}},\"placeholder\":{\"type\":\"object\",\"default\":{\"amount\":10000,\"rate\":4,\"term\":10}},\"help\":{\"type\":\"object\",\"default\":{\"amount\":\"\",\"rate\":\"\",\"term\":\"\",\"increment\":\"\"}},\"button\":{\"type\":\"string\",\"default\":\"Calculate\"},\"currency\":{\"type\":\"string\",\"default\":\"$\"},\"yearSummary\":{\"type\":\"boolean\",\"default\":false},\"asRow\":{\"type\":\"boolean\",\"default\":false},\"boldedLabel\":{\"type\":\"boolean\",\"default\":true}},\"style\":\"file:../../build/style-index.css\"}");

/***/ }),

/***/ "./src/rates/edit.js":
/*!***************************!*\
  !*** ./src/rates/edit.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var allowedFormats = ['core/bold', 'core/italic', 'core/link'];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      className = _ref.className;
  var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])();
  blockProps.className = classnames__WEBPACK_IMPORTED_MODULE_5___default()(blockProps.className, {
    'as-row': attributes.asRow,
    'bolded-label': attributes.boldedLabel,
    'wp-block-mortgage-form': true
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Form Options', 'mortgage'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Button text', 'mortgage'),
    value: attributes.button,
    onChange: function onChange(val) {
      return setAttributes({
        button: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Currency symbol', 'mortgage'),
    value: attributes.currency,
    onChange: function onChange(val) {
      return setAttributes({
        currency: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Display label on side', 'mortgage'),
    checked: attributes.asRow,
    onChange: function onChange(val) {
      return setAttributes({
        asRow: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bolded label', 'mortgage'),
    checked: attributes.boldedLabel,
    onChange: function onChange(val) {
      return setAttributes({
        boldedLabel: val
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Labels', 'mortgage'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Amount Label', 'mortgage'),
    value: attributes.label.amount,
    onChange: function onChange(val) {
      return setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          amount: val
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rate Label', 'mortgage'),
    value: attributes.label.rate,
    onChange: function onChange(val) {
      return setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          rate: val
        })
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Default Values', 'mortgage'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalNumberControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Amount Default Value', 'mortgage'),
    value: attributes.defaults.amount,
    onChange: function onChange(val) {
      return setAttributes({
        defaults: _objectSpread(_objectSpread({}, attributes.defaults), {}, {
          amount: val
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalNumberControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rate Default Value', 'mortgage'),
    value: attributes.defaults.rate,
    onChange: function onChange(val) {
      return setAttributes({
        defaults: _objectSpread(_objectSpread({}, attributes.defaults), {}, {
          rate: val
        })
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Placeholder Options', 'mortgage'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Amount Placeholder', 'mortgage'),
    value: attributes.placeholder.amount,
    onChange: function onChange(val) {
      return setAttributes({
        placeholder: _objectSpread(_objectSpread({}, attributes.placeholder), {}, {
          amount: val
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rate Placeholder', 'mortgage'),
    value: attributes.placeholder.rate,
    onChange: function onChange(val) {
      return setAttributes({
        placeholder: _objectSpread(_objectSpread({}, attributes.placeholder), {}, {
          rate: val
        })
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "label",
    value: attributes.label.amount,
    onChange: function onChange(val) {
      setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          amount: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter label...', 'mortgage'),
    allowedFormats: [],
    keepPlaceholderOnFocus: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "",
    readOnly: true,
    placeholder: attributes.placeholder.amount,
    disabled: true,
    value: attributes.defaults.amount
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "small",
    value: attributes.help.amount,
    onChange: function onChange(val) {
      setAttributes({
        help: _objectSpread(_objectSpread({}, attributes.help), {}, {
          amount: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter help message...', 'mortgage'),
    allowedFormats: allowedFormats,
    keepPlaceholderOnFocus: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "label",
    value: attributes.label.term,
    onChange: function onChange(val) {
      setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          term: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Term', 'mortgage'),
    allowedFormats: [],
    keepPlaceholderOnFocus: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "",
    readOnly: true,
    placeholder: attributes.placeholder.term,
    disabled: true,
    value: attributes.defaults.term
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "small",
    value: attributes.help.term,
    onChange: function onChange(val) {
      setAttributes({
        help: _objectSpread(_objectSpread({}, attributes.help), {}, {
          term: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter help message...', 'mortgage'),
    allowedFormats: allowedFormats,
    keepPlaceholderOnFocus: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "label",
    value: attributes.label.rate,
    onChange: function onChange(val) {
      setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          rate: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rate', 'mortgage'),
    allowedFormats: [],
    keepPlaceholderOnFocus: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "",
    readOnly: true,
    placeholder: attributes.placeholder.rate,
    disabled: true,
    value: attributes.defaults.rate
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "small",
    value: attributes.help.rate,
    onChange: function onChange(val) {
      setAttributes({
        help: _objectSpread(_objectSpread({}, attributes.help), {}, {
          rate: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter help message...', 'mortgage'),
    allowedFormats: allowedFormats,
    keepPlaceholderOnFocus: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "label",
    value: attributes.label.increment,
    onChange: function onChange(val) {
      setAttributes({
        label: _objectSpread(_objectSpread({}, attributes.label), {}, {
          increment: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Increment', 'mortgage'),
    allowedFormats: [],
    keepPlaceholderOnFocus: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("select", {
    disabled: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", null, "Select rate")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "small",
    value: attributes.help.increment,
    onChange: function onChange(val) {
      setAttributes({
        help: _objectSpread(_objectSpread({}, attributes.help), {}, {
          increment: val
        })
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter help message...', 'mortgage'),
    allowedFormats: allowedFormats,
    keepPlaceholderOnFocus: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", null, attributes.button)));
}

/***/ }),

/***/ "./src/rates/index.js":
/*!****************************!*\
  !*** ./src/rates/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/rates/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/rates/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/rates/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/rates/block.json", 1);
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Internal dependencies
 */




var name = _block_json__WEBPACK_IMPORTED_MODULE_4__.name,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_4__.attributes;
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(name, {
  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `text`, `media`, `design`, `widgets`, and `embed`.
   */
  category: 'widgets',
  attributes: attributes,

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/rates/save.js":
/*!***************************!*\
  !*** ./src/rates/save.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);



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
  var attributes = _ref.attributes,
      className = _ref.className;
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"].save();
  blockProps.className = classnames__WEBPACK_IMPORTED_MODULE_4___default()(blockProps.className, {
    'as-row': attributes.asRow,
    'bolded-label': attributes.boldedLabel,
    'wp-block-mortgage-form': true
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("form", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
    noValidate: true,
    "data-currency": attributes.currency,
    "data-yearSummary": attributes.yearSummary
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "label",
    value: attributes.label.amount
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "amount",
    min: "0",
    required: true,
    value: attributes.defaults.amount,
    placeholder: attributes.placeholder.amount
  }), attributes.help.amount && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "small",
    value: attributes.help.amount
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "label",
    value: attributes.label.term
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "term",
    min: "0",
    step: "1",
    required: true,
    value: attributes.defaults.term,
    placeholder: attributes.placeholder.term
  }), attributes.help.term && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "small",
    value: attributes.help.term
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "label",
    value: attributes.label.rate
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "number",
    name: "rate",
    min: "0",
    step: "0.01",
    required: true,
    value: attributes.defaults.rate,
    placeholder: attributes.placeholder.rate
  }), attributes.help.rate && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "small",
    value: attributes.help.rate
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
    tagName: "label",
    value: attributes.label.increment
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("select", {
    name: "increment"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "0.125"
  }, "1/8%"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "0.250"
  }, "1/4%"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "0.375"
  }, "3/8%"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "0.5"
  }, "1/2%"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "0.625"
  }, "5/8%"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "0.875"
  }, "7/8%"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("option", {
    value: "1"
  }, "1%"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    className: 'mortgage-btn'
  }, attributes.button)));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map