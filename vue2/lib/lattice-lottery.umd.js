(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LatticeLottery"] = factory();
	else
		root["LatticeLottery"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "bf9f");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01bd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4c1b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_lottery_grid_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cc76");
/* harmony import */ var _vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_lottery_grid_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_lottery_grid_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "56a8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8c72");
/* harmony import */ var _vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5f9e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "83f5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "84dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_lotteryGo_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5f9e");
/* harmony import */ var _vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_lotteryGo_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_lotteryGo_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8c72":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ad6d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_lottery_list_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("01bd");
/* harmony import */ var _vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_lottery_list_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_lottery_list_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bf9f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "LotteryGrid", function() { return /* reexport */ lottery_grid; });
__webpack_require__.d(__webpack_exports__, "LotteryList", function() { return /* reexport */ lottery_list; });
__webpack_require__.d(__webpack_exports__, "SlotMachine", function() { return /* reexport */ SlotMachine_src; });

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.17@@vue/cli-service/lib/commands/build/setPublicPath.js
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

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"415e06cc-vue-loader-template"}!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!../packages/Lottery/src/lottery-grid.vue?vue&type=template&id=4de6629b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lottery__box--grid"},[_c('div',{staticClass:"lattice__lottery__box"},[_c('div',{staticClass:"lottery__row"},_vm._l((_vm.luckyList.slice(0, 3)),function(item,index){return _c('lottery-item',{key:index,attrs:{"isAct":index === _vm.listIndex,"image":item.image,"label":item.label}})}),1),_c('div',{staticClass:"lottery__row right"},[_vm._l((_vm.luckyList.slice(3, 4)),function(item,index){return _c('lottery-item',{key:index + 3,attrs:{"isAct":index + 3 === _vm.listIndex,"image":item.image,"label":item.label}})}),_c('lottery-go',{attrs:{"label":_vm.btnText},on:{"onClick":_vm.onsubmit}}),_vm._l((_vm.luckyList.slice(-1)),function(item,index){return _c('lottery-item',{key:index + 7,attrs:{"isAct":index + 7 === _vm.listIndex,"image":item.image,"label":item.label}})})],2),_c('div',{staticClass:"lottery__row right"},_vm._l((_vm.luckyList.slice(4, 7)),function(item,index){return _c('lottery-item',{key:index + 4,style:([{ marginBottom: 0 }]),attrs:{"isAct":index + 4 === _vm.listIndex,"image":item.image,"label":item.label}})}),1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ../packages/Lottery/src/lottery-grid.vue?vue&type=template&id=4de6629b&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"415e06cc-vue-loader-template"}!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!../packages/Lottery/src/lotteryItem.vue?vue&type=template&id=6c7fdf6f&
var lotteryItemvue_type_template_id_6c7fdf6f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    'prize__item',
    'lattice__lottery__item',
    _vm.isAct ? 'lattice__lottery__actItem' : '' ]},[(_vm.image)?_c('img',{staticClass:"prize__item__image",attrs:{"src":_vm.image,"alt":""}}):_vm._e(),(_vm.isAct)?_c('div',{staticClass:"prize__item__mask"}):_vm._e(),(_vm.label)?_c('span',[_vm._v(_vm._s(_vm.label))]):_vm._e()])}
var lotteryItemvue_type_template_id_6c7fdf6f_staticRenderFns = []


// CONCATENATED MODULE: ../packages/Lottery/src/lotteryItem.vue?vue&type=template&id=6c7fdf6f&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!../packages/Lottery/src/lotteryItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lotteryItemvue_type_script_lang_js_ = ({
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

// CONCATENATED MODULE: ../packages/Lottery/src/lotteryItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_lotteryItemvue_type_script_lang_js_ = (lotteryItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../packages/Lottery/src/lotteryItem.vue?vue&type=style&index=0&lang=less&
var lotteryItemvue_type_style_index_0_lang_less_ = __webpack_require__("faae");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.8@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ../packages/Lottery/src/lotteryItem.vue






/* normalize component */

var component = normalizeComponent(
  src_lotteryItemvue_type_script_lang_js_,
  lotteryItemvue_type_template_id_6c7fdf6f_render,
  lotteryItemvue_type_template_id_6c7fdf6f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lotteryItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"415e06cc-vue-loader-template"}!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!../packages/Lottery/src/lotteryGo.vue?vue&type=template&id=0acf8140&
var lotteryGovue_type_template_id_0acf8140_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lottery__button lattice__lottery__btn",on:{"click":_vm.onClick}},[(_vm.label)?_c('span',[_vm._v(_vm._s(_vm.label))]):_vm._e()])}
var lotteryGovue_type_template_id_0acf8140_staticRenderFns = []


// CONCATENATED MODULE: ../packages/Lottery/src/lotteryGo.vue?vue&type=template&id=0acf8140&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!../packages/Lottery/src/lotteryGo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lotteryGovue_type_script_lang_js_ = ({
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

// CONCATENATED MODULE: ../packages/Lottery/src/lotteryGo.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_lotteryGovue_type_script_lang_js_ = (lotteryGovue_type_script_lang_js_); 
// EXTERNAL MODULE: ../packages/Lottery/src/lotteryGo.vue?vue&type=style&index=0&lang=less&
var lotteryGovue_type_style_index_0_lang_less_ = __webpack_require__("84dd");

// CONCATENATED MODULE: ../packages/Lottery/src/lotteryGo.vue






/* normalize component */

var lotteryGo_component = normalizeComponent(
  src_lotteryGovue_type_script_lang_js_,
  lotteryGovue_type_template_id_0acf8140_render,
  lotteryGovue_type_template_id_0acf8140_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lotteryGo = (lotteryGo_component.exports);
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
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!../packages/Lottery/src/lottery-grid.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var lottery_gridvue_type_script_lang_js_ = ({
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

// CONCATENATED MODULE: ../packages/Lottery/src/lottery-grid.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_lottery_gridvue_type_script_lang_js_ = (lottery_gridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../packages/Lottery/src/lottery-grid.vue?vue&type=style&index=0&lang=less&
var lottery_gridvue_type_style_index_0_lang_less_ = __webpack_require__("4c1b");

// CONCATENATED MODULE: ../packages/Lottery/src/lottery-grid.vue






/* normalize component */

var lottery_grid_component = normalizeComponent(
  src_lottery_gridvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lottery_grid = (lottery_grid_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"415e06cc-vue-loader-template"}!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!../packages/Lottery/src/lottery-list.vue?vue&type=template&id=85f248fc&
var lottery_listvue_type_template_id_85f248fc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lottery__box--list"},[_c('div',{staticClass:"lottery__list lattice__lottery__box"},_vm._l((_vm.luckyList),function(item,index){return _c('lottery-item',{key:index,style:([{ marginBottom: index > 5 ? 0 : false }]),attrs:{"isAct":index === _vm.listIndex,"image":item.image,"label":item.label}})}),1),_c('div',{staticClass:"lottery__btn"},[_c('lottery-go',{staticClass:"list",attrs:{"label":_vm.btnText},on:{"onClick":_vm.onsubmit}})],1)])}
var lottery_listvue_type_template_id_85f248fc_staticRenderFns = []


// CONCATENATED MODULE: ../packages/Lottery/src/lottery-list.vue?vue&type=template&id=85f248fc&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!../packages/Lottery/src/lottery-list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var lottery_listvue_type_script_lang_js_ = ({
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

// CONCATENATED MODULE: ../packages/Lottery/src/lottery-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_lottery_listvue_type_script_lang_js_ = (lottery_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../packages/Lottery/src/lottery-list.vue?vue&type=style&index=0&lang=less&
var lottery_listvue_type_style_index_0_lang_less_ = __webpack_require__("ad6d");

// CONCATENATED MODULE: ../packages/Lottery/src/lottery-list.vue






/* normalize component */

var lottery_list_component = normalizeComponent(
  src_lottery_listvue_type_script_lang_js_,
  lottery_listvue_type_template_id_85f248fc_render,
  lottery_listvue_type_template_id_85f248fc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lottery_list = (lottery_list_component.exports);
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


// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"415e06cc-vue-loader-template"}!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!../packages/SlotMachine/src/index.vue?vue&type=template&id=0720cca5&
var srcvue_type_template_id_0720cca5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.list && _vm.list.length > 0)?_c('div',{staticClass:"slotMachine"},_vm._l((_vm.colCount),function(i){return _c('col-ele',{key:i,ref:"col",refInFor:true,attrs:{"moveTime":_vm.moveTime,"list":_vm.list,"concatCount":_vm.concatCount}})}),1):_vm._e()}
var srcvue_type_template_id_0720cca5_staticRenderFns = []


// CONCATENATED MODULE: ../packages/SlotMachine/src/index.vue?vue&type=template&id=0720cca5&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"415e06cc-vue-loader-template"}!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!../packages/SlotMachine/src/col.vue?vue&type=template&id=46e97782&
var colvue_type_template_id_46e97782_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slotMachine__col"},[_c('div',{ref:"slotMachine__ul",staticClass:"slotMachine__ul"},_vm._l((_vm.cList),function(item,index){return _c('div',{key:index,staticClass:"slotMachine__li"},[(item.image)?_c('img',{staticClass:"slotMachine__image",attrs:{"src":item.image,"alt":""}}):_vm._e(),(item.label)?_c('span',{staticClass:"slotMachine__label"},[_vm._v(_vm._s(item.label))]):_vm._e()])}),0),_c('div',{ref:"slotMachine__li",staticClass:"slotMachine__li hide"})])}
var colvue_type_template_id_46e97782_staticRenderFns = []


// CONCATENATED MODULE: ../packages/SlotMachine/src/col.vue?vue&type=template&id=46e97782&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!../packages/SlotMachine/src/col.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var colvue_type_script_lang_js_ = ({
  name: 'SlotMachineCol',
  props: {
    list: {
      type: Array,
      default() {
        return []
      },
    },
    // 定义奖品列表concat几次
    concatCount: {
      type: [String, Number],
      default: 3
    },
    moveTime: {
      type: [String, Number],
      default: 4,
    }
  },
  data() {
    return {
      isMoving: false,
      translateY: 0,
    }
  },
  computed: {
    cList() {
      const _list = this.list || [];
      let res = [];
      if (_list && _list.length > 0) {
        for (let i = 0; i < this.concatCount; i++) {
          res = res.concat(_list)
        }
      }
      return res;
    },
  },
  mounted() {
    const ulHeight = this.$refs.slotMachine__ul.clientHeight; // 总高度
    const liHeight = this.$refs.slotMachine__li.clientHeight; // 列表子模块高度
    this.$refs.slotMachine__ul.style = `transform: translateY(${-ulHeight + liHeight}px);`;
  },
  methods: {
    go(index) {

      if (this.isMoving) return;
      this.isMoving = true;

      const ulHeight = this.$refs.slotMachine__ul.clientHeight; // 总高度
      const liHeight = this.$refs.slotMachine__li.clientHeight; // 列表子模块高度
      const oneCaseHeight = ulHeight / this.concatCount; // 每一份列表的高度

      const translateY = -oneCaseHeight + ((this.list.length - index) * liHeight); // top 定位到 顶部到 index索引的高度

      const ulMoveStyle = [
        'transition-property: transform',
        `transition-duration: ${this.moveTime}s`,
        'transition-timing-function: ease-in-out',
        `transform: translateY(${translateY}px)`
      ]

      this.$refs.slotMachine__ul.style = ulMoveStyle.join(';');

      setTimeout(() => {
        this.isMoving = false;
        const translateY = -ulHeight + ((this.list.length - index) * liHeight); // top 定位到 底部到 index索引的高度
        this.$refs.slotMachine__ul.style = `transform: translateY(${translateY}px);`;
      }, this.moveTime * 1000)
    },
  }
});

// CONCATENATED MODULE: ../packages/SlotMachine/src/col.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_colvue_type_script_lang_js_ = (colvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../packages/SlotMachine/src/col.vue?vue&type=style&index=0&lang=less&
var colvue_type_style_index_0_lang_less_ = __webpack_require__("c0f7");

// CONCATENATED MODULE: ../packages/SlotMachine/src/col.vue






/* normalize component */

var col_component = normalizeComponent(
  src_colvue_type_script_lang_js_,
  colvue_type_template_id_46e97782_render,
  colvue_type_template_id_46e97782_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var col = (col_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!../packages/SlotMachine/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//


class errorData {
  constructor({code, data = null, msg}) {
    console.error(msg);
    this.code = code;
    this.data = data;
    this.msg = msg;
  }
}
/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'SlotMachine',
  components: {
    ColEle: col
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    // 动画时间 单位秒
    moveTime: {
      type: [String, Number],
      default: 4,
    },
    // 奖品列表复制次数
    concatCount: {
      type: [String, Number],
      default: 3,
    },
    // 滚筒列数
    colCount: {
      type: [String, Number],
      default: 3,
    }
  },
  data() {
    return {
      isMoving: false,
    }
  },
  methods: {
    go(val) {
      if (Object.prototype.toString.call(val) !== '[object Array]') {
        this.$emit('onerror', new errorData({
          code: 1000,
          msg: 'go函数的传参类型应为 Array',
        }));
        return;
      }
      if (val.length !== this.colCount) {
        this.$emit('onerror', new errorData({
          code: 1001,
          data: val,
          msg: `go函数的传参值长度（length：${val.length}） 不等于colCount值（colCount：${this.colCount}）`,
        }));
        return;
      }
      if (this.isMoving) {
        this.$emit('onerror', new errorData({
          code: 1002,
          msg: '重复调用go函数',
        }));
        return;
      };
      this.isMoving = true; 
      const cols = this.$refs.col;
      for (let i = 0; i < cols.length; i++) {
        setTimeout(() => {
          cols[i].go(val[i]);
          if (i === cols.length - 1) {
            setTimeout(() => {
              this.isMoving = false;
              this.$emit('onend', val);
            }, this.moveTime * 1000)
          }
        }, i * 500);
      }
    },
  }
});

// CONCATENATED MODULE: ../packages/SlotMachine/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var SlotMachine_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../packages/SlotMachine/src/index.vue?vue&type=style&index=0&lang=less&
var srcvue_type_style_index_0_lang_less_ = __webpack_require__("56a8");

// CONCATENATED MODULE: ../packages/SlotMachine/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  SlotMachine_srcvue_type_script_lang_js_,
  srcvue_type_template_id_0720cca5_render,
  srcvue_type_template_id_0720cca5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SlotMachine_src = (src_component.exports);
// CONCATENATED MODULE: ../packages/SlotMachine/index.js


// 为组件提供 install 安装方法，供按需引入
SlotMachine_src.install = function (Vue) {
  Vue.component(SlotMachine_src.name, SlotMachine_src)
}

/* harmony default export */ var SlotMachine = ({
  SlotMachine: SlotMachine_src,
});


// CONCATENATED MODULE: ../packages/index.js




// 组件列表
const components = [
  lottery_grid,
  lottery_list,
  SlotMachine_src,
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
  SlotMachine: SlotMachine_src,
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.17@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "c0f7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("83f5");
/* harmony import */ var _vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cc76":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f0f8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "faae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_lotteryItem_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f0f8");
/* harmony import */ var _vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_lotteryItem_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue2_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_vue2_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_vue2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_vue2_node_modules_less_loader_6_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_vue2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_vue2_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_lotteryItem_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ });
});