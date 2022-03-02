(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LatticeLottery"] = factory(require("vue"));
	else
		root["LatticeLottery"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "f2a0");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1902":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "22a7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3607":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue3_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue3_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_stylePostLoader_js_vue3_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue3_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_1_1_lotteryItem_vue_vue_type_style_index_0_id_6c7fdf6f_lang_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("22a7");
/* harmony import */ var _vue3_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue3_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_stylePostLoader_js_vue3_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue3_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_1_1_lotteryItem_vue_vue_type_style_index_0_id_6c7fdf6f_lang_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue3_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue3_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_stylePostLoader_js_vue3_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue3_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_1_1_lotteryItem_vue_vue_type_style_index_0_id_6c7fdf6f_lang_less__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "79e4":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8cb2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue3_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue3_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_stylePostLoader_js_vue3_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue3_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_1_1_lotteryGo_vue_vue_type_style_index_0_id_0acf8140_lang_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a8e5");
/* harmony import */ var _vue3_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue3_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_stylePostLoader_js_vue3_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue3_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_1_1_lotteryGo_vue_vue_type_style_index_0_id_0acf8140_lang_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue3_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue3_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_stylePostLoader_js_vue3_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue3_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_1_1_lotteryGo_vue_vue_type_style_index_0_id_0acf8140_lang_less__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a8e5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b3f2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "b91c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue3_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue3_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_stylePostLoader_js_vue3_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue3_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_1_1_lottery_list_vue_vue_type_style_index_0_id_85f248fc_lang_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e12d");
/* harmony import */ var _vue3_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue3_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_stylePostLoader_js_vue3_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue3_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_1_1_lottery_list_vue_vue_type_style_index_0_id_85f248fc_lang_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue3_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue3_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_stylePostLoader_js_vue3_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue3_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_1_1_lottery_list_vue_vue_type_style_index_0_id_85f248fc_lang_less__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cf50":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue3_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue3_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_stylePostLoader_js_vue3_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue3_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_1_1_lottery_grid_vue_vue_type_style_index_0_id_4de6629b_lang_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1902");
/* harmony import */ var _vue3_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue3_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_stylePostLoader_js_vue3_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue3_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_1_1_lottery_grid_vue_vue_type_style_index_0_id_4de6629b_lang_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue3_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue3_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_stylePostLoader_js_vue3_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue3_node_modules_less_loader_6_2_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue3_node_modules_vue_loader_16_8_3_vue_loader_dist_index_js_ref_1_1_lottery_grid_vue_vue_type_style_index_0_id_4de6629b_lang_less__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e12d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f2a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.15@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("79e4")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/_vue-loader@16.8.3@vue-loader/dist/templateLoader.js??ref--5!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@16.8.3@vue-loader/dist??ref--1-1!../packages/Lottery/src/lottery-grid.vue?vue&type=template&id=4de6629b


const _hoisted_1 = { class: "lottery__box--grid" }
const _hoisted_2 = { class: "lattice__lottery__box" }
const _hoisted_3 = { class: "lottery__row" }
const _hoisted_4 = { class: "lottery__row right" }
const _hoisted_5 = { class: "lottery__row right" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_lottery_item = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("lottery-item")
  const _component_lottery_go = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("lottery-go")

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_3, [
        (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.luckyList.slice(0, 3), (item, index) => {
          return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_lottery_item, {
            isAct: index === _ctx.listIndex,
            image: item.image,
            key: index,
            label: item.label
          }, null, 8, ["isAct", "image", "label"]))
        }), 128))
      ]),
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_4, [
        (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.luckyList.slice(3, 4), (item, index) => {
          return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_lottery_item, {
            isAct: index + 3 === _ctx.listIndex,
            image: item.image,
            key: index + 3,
            label: item.label
          }, null, 8, ["isAct", "image", "label"]))
        }), 128)),
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_lottery_go, {
          onOnClick: _ctx.onsubmit,
          label: _ctx.btnText
        }, null, 8, ["onOnClick", "label"]),
        (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.luckyList.slice(-1), (item, index) => {
          return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_lottery_item, {
            isAct: index + 7 === _ctx.listIndex,
            image: item.image,
            key: index + 7,
            label: item.label
          }, null, 8, ["isAct", "image", "label"]))
        }), 128))
      ]),
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_5, [
        (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.luckyList.slice(4, 7), (item, index) => {
          return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_lottery_item, {
            style: [{ marginBottom: 0 }],
            isAct: index + 4 === _ctx.listIndex,
            image: item.image,
            key: index + 4,
            label: item.label
          }, null, 8, ["isAct", "image", "label"]))
        }), 128))
      ])
    ])
  ]))
}
// CONCATENATED MODULE: ../packages/Lottery/src/lottery-grid.vue?vue&type=template&id=4de6629b

// CONCATENATED MODULE: ./node_modules/_vue-loader@16.8.3@vue-loader/dist/templateLoader.js??ref--5!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@16.8.3@vue-loader/dist??ref--1-1!../packages/Lottery/src/lotteryItem.vue?vue&type=template&id=6c7fdf6f


const lotteryItemvue_type_template_id_6c7fdf6f_hoisted_1 = ["src"]
const lotteryItemvue_type_template_id_6c7fdf6f_hoisted_2 = {
  key: 1,
  class: "prize__item__mask"
}
const lotteryItemvue_type_template_id_6c7fdf6f_hoisted_3 = { key: 2 }

function lotteryItemvue_type_template_id_6c7fdf6f_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([
      'prize__item',
      'lattice__lottery__item',
      $props.isAct ? 'lattice__lottery__actItem' : '',
    ])
  }, [
    ($props.image)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("img", {
          key: 0,
          class: "prize__item__image",
          src: $props.image,
          alt: ""
        }, null, 8, lotteryItemvue_type_template_id_6c7fdf6f_hoisted_1))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
    ($props.isAct)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", lotteryItemvue_type_template_id_6c7fdf6f_hoisted_2))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
    ($props.label)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", lotteryItemvue_type_template_id_6c7fdf6f_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 1))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
  ], 2))
}
// CONCATENATED MODULE: ../packages/Lottery/src/lotteryItem.vue?vue&type=template&id=6c7fdf6f

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@16.8.3@vue-loader/dist??ref--1-1!../packages/Lottery/src/lotteryItem.vue?vue&type=script&lang=js

/* harmony default export */ var lotteryItemvue_type_script_lang_js = ({
  props: {
    isAct: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    image: {
      type: String,
    },
  },
});

// CONCATENATED MODULE: ../packages/Lottery/src/lotteryItem.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ../packages/Lottery/src/lotteryItem.vue?vue&type=style&index=0&id=6c7fdf6f&lang=less
var lotteryItemvue_type_style_index_0_id_6c7fdf6f_lang_less = __webpack_require__("3607");

// EXTERNAL MODULE: ./node_modules/_vue-loader@16.8.3@vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__("b3f2");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ../packages/Lottery/src/lotteryItem.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(lotteryItemvue_type_script_lang_js, [['render',lotteryItemvue_type_template_id_6c7fdf6f_render]])

/* harmony default export */ var lotteryItem = (__exports__);
// CONCATENATED MODULE: ./node_modules/_vue-loader@16.8.3@vue-loader/dist/templateLoader.js??ref--5!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@16.8.3@vue-loader/dist??ref--1-1!../packages/Lottery/src/lotteryGo.vue?vue&type=template&id=0acf8140


const lotteryGovue_type_template_id_0acf8140_hoisted_1 = { key: 0 }

function lotteryGovue_type_template_id_0acf8140_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.onClick && $options.onClick(...args))),
    class: "lottery__button lattice__lottery__btn"
  }, [
    ($props.label)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", lotteryGovue_type_template_id_0acf8140_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.label), 1))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
  ]))
}
// CONCATENATED MODULE: ../packages/Lottery/src/lotteryGo.vue?vue&type=template&id=0acf8140

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@16.8.3@vue-loader/dist??ref--1-1!../packages/Lottery/src/lotteryGo.vue?vue&type=script&lang=js

/* harmony default export */ var lotteryGovue_type_script_lang_js = ({
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
});

// CONCATENATED MODULE: ../packages/Lottery/src/lotteryGo.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ../packages/Lottery/src/lotteryGo.vue?vue&type=style&index=0&id=0acf8140&lang=less
var lotteryGovue_type_style_index_0_id_0acf8140_lang_less = __webpack_require__("8cb2");

// CONCATENATED MODULE: ../packages/Lottery/src/lotteryGo.vue







const lotteryGo_exports_ = /*#__PURE__*/exportHelper_default()(lotteryGovue_type_script_lang_js, [['render',lotteryGovue_type_template_id_0acf8140_render]])

/* harmony default export */ var lotteryGo = (lotteryGo_exports_);
// CONCATENATED MODULE: ../packages/Lottery/mixins/publish.js
/* harmony default export */ var publish = ({
  data() {
    return {
      listIndex: null,
      luckyIndex: 0,

      baseSpeed: 300,
      speed: 20,

      hasCircleTimes: 0,
      hasMoveTimes: 0,

      isMoving: false,
    }
  },
  props: {
    //奖品列表
    list: {
      type: Array,
      required: true,
    },
    //转圈次数
    circleTimes: {
      type: Number,
      default: 3,
    },
    //跳动的动画，默认 慢-快-慢
    velocity: {
      type: [String],
      default: 'speed',
      validator: function (value) {
        return ['invariance', 'speed'].indexOf(value) !== -1
      }
    },
    btnText: {
      type: String,
      default: '抽奖',
    }
  },
  methods: {
    onsubmit() {
      this.$emit('onsubmit')
    },
    go(index) {
      console.log('go')

      if (this.isMoving) {
        console.error('您重复调用了go()函数')
        this.$emit('onerror', {
          index: index,
          message: '您重复调用了go()函数'
        })
        return
      }

      let luckyIndex;

      luckyIndex = Number(index)

      if (isNaN(luckyIndex)) {
        console.error('go()函数传入值应该为Number类型，请检查')
        this.$emit('onerror', {
          index: index,
          message: 'go()函数传入值应该为Number类型，请检查'
        })
        return
      }

      if (luckyIndex < 0 || luckyIndex >= this.luckyList.length) {
        console.error('go()函数传入值应该为在 [0-' + (this.luckyList.length - 1) + '] 区间内，请检查')
        this.$emit('onerror', {
          index: index,
          message: 'go()函数传入值应该为在 [0-' + (this.luckyList.length - 1) + '] 区间内，请检查'
        })
        return
      }

      this.luckyIndex = luckyIndex //中奖索引
      this.hasCircleTimes = 0 //初始化转圈圈数
      if (this.listIndex === null) this.listIndex = 0
      else this.listIndex += 1 //立即切换到下个位置
      this.$emit('onstart')
      this.start(this.baseSpeed) //开始动画
      this.isMoving = true
    },
    start(speed) {
      //转动计算时间
      if (this.velocity === 'speed') { //非匀速
        if (this.hasMoveTimes < 5) speed -= (this.speed + this.hasMoveTimes * 10)
        else if (this.hasMoveTimes > this.circleTimes * 8 - 7) speed += (this.speed + (this.circleTimes * 8 - this.hasMoveTimes) * 10)
      }
      setTimeout(() => {
        if (this.hasCircleTimes !== -1) { //如果没转完定义好的圈圈次数，继续转圈圈
          if (this.listIndex < this.luckyList.length - 1) {
            this.listIndex += 1
          } else {
            this.listIndex = 0
            this.hasCircleTimes++
          }
          if (this.hasCircleTimes >= this.circleTimes) { //是否转了circleTimes次
            this.hasCircleTimes = -1 //转圈圈结束
          }
          this.hasMoveTimes++ //记录跳动了多少次
          this.start(speed) //递归
        } else { //转圈次数已经达到
          if (this.listIndex < this.luckyIndex) { //如果当前cur位置没到中奖位置，继续跳
            this.listIndex += 1 //跳下一个
            this.hasMoveTimes++ //记录跳动次数
            this.start(speed) //递归
          } else { //cur位置到达中奖位置，停止
            if (this.luckyList[this.luckyIndex]) {
              console.log('恭喜您获得：' + this.luckyList[this.luckyIndex].label)
              this.$emit('onend', this.luckyList[this.luckyIndex])
            } else {
              this.$emit('onerror', {
                index: this.luckyIndex,
                message: 'go函数传入的索引值无法匹配奖品列表'
              })
              this.listIndex = 0
              console.error('错误捕获，luckyIndex：', this.luckyIndex)
            }
            this.hasMoveTimes = 0
            this.isMoving = false
          }
        }
      }, speed);
    },
  },
});
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@16.8.3@vue-loader/dist??ref--1-1!../packages/Lottery/src/lottery-grid.vue?vue&type=script&lang=js






/* harmony default export */ var lottery_gridvue_type_script_lang_js = ({
  name: "LotteryGrid",
  components: {
    lotteryItem: lotteryItem,
    lotteryGo: lotteryGo,
  },
  mixins: [publish],
  computed: {
    //补全列表，补全内容：谢谢参与
    luckyList() {
      let list = [];
      if (this.list && this.list.length) {
        list = JSON.parse(JSON.stringify(this.list));
        let len = list.length;
        if (len < 8) {
          for (let i = 0; i < 8 - len; i++) {
            list.push({
              label: "谢谢参与",
              id: i + len + 1,
              index: i + len,
            });
          }
        } else if (len > 8) {
          list.splice(8);
        }
      }
      return list;
    },
  },
});

// CONCATENATED MODULE: ../packages/Lottery/src/lottery-grid.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ../packages/Lottery/src/lottery-grid.vue?vue&type=style&index=0&id=4de6629b&lang=less
var lottery_gridvue_type_style_index_0_id_4de6629b_lang_less = __webpack_require__("cf50");

// CONCATENATED MODULE: ../packages/Lottery/src/lottery-grid.vue







const lottery_grid_exports_ = /*#__PURE__*/exportHelper_default()(lottery_gridvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var lottery_grid = (lottery_grid_exports_);
// CONCATENATED MODULE: ./node_modules/_vue-loader@16.8.3@vue-loader/dist/templateLoader.js??ref--5!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@16.8.3@vue-loader/dist??ref--1-1!../packages/Lottery/src/lottery-list.vue?vue&type=template&id=85f248fc


const lottery_listvue_type_template_id_85f248fc_hoisted_1 = { class: "lottery__box--list" }
const lottery_listvue_type_template_id_85f248fc_hoisted_2 = { class: "lottery__list lattice__lottery__box" }
const lottery_listvue_type_template_id_85f248fc_hoisted_3 = { class: "lottery__btn" }

function lottery_listvue_type_template_id_85f248fc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_lottery_item = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("lottery-item")
  const _component_lottery_go = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("lottery-go")

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", lottery_listvue_type_template_id_85f248fc_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", lottery_listvue_type_template_id_85f248fc_hoisted_2, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.luckyList, (item, index) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_lottery_item, {
          isAct: index === _ctx.listIndex,
          image: item.image,
          key: index,
          label: item.label,
          style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])([{ marginBottom: index > 5 ? 0 : false }])
        }, null, 8, ["isAct", "image", "label", "style"]))
      }), 128))
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", lottery_listvue_type_template_id_85f248fc_hoisted_3, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_lottery_go, {
        onOnClick: _ctx.onsubmit,
        label: _ctx.btnText,
        class: "list"
      }, null, 8, ["onOnClick", "label"])
    ])
  ]))
}
// CONCATENATED MODULE: ../packages/Lottery/src/lottery-list.vue?vue&type=template&id=85f248fc

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@16.8.3@vue-loader/dist??ref--1-1!../packages/Lottery/src/lottery-list.vue?vue&type=script&lang=js






/* harmony default export */ var lottery_listvue_type_script_lang_js = ({
  name: "LotteryList",
  components: {
    lotteryItem: lotteryItem,
    lotteryGo: lotteryGo,
  },
  mixins: [publish],
  computed: {
    luckyList() {
      let list = [];
      if (this.list && this.list.length) {
        list = JSON.parse(JSON.stringify(this.list));
      } else {
        console.error("入参 list 应该为数组");
      }
      return list;
    },
  },
});

// CONCATENATED MODULE: ../packages/Lottery/src/lottery-list.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ../packages/Lottery/src/lottery-list.vue?vue&type=style&index=0&id=85f248fc&lang=less
var lottery_listvue_type_style_index_0_id_85f248fc_lang_less = __webpack_require__("b91c");

// CONCATENATED MODULE: ../packages/Lottery/src/lottery-list.vue







const lottery_list_exports_ = /*#__PURE__*/exportHelper_default()(lottery_listvue_type_script_lang_js, [['render',lottery_listvue_type_template_id_85f248fc_render]])

/* harmony default export */ var lottery_list = (lottery_list_exports_);
// CONCATENATED MODULE: ../packages/Lottery/index.js



// 为组件提供 install 安装方法，供按需引入
lottery_grid.install = function (Vue) {
  Vue.component(lottery_grid.name, lottery_grid)
}
lottery_list.install = function (Vue) {
  Vue.component(lottery_list.name, lottery_list)
}

/* harmony default export */ var Lottery = ({
  LotteryGrid: lottery_grid,
  LotteryList: lottery_list
});


// CONCATENATED MODULE: ../packages/index.js


// 组件列表
const components = [
  lottery_grid,
  lottery_list,
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  LotteryGrid: lottery_grid,
  LotteryList: lottery_list,
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.15@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});