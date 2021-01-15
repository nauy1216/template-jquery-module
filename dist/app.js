/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/app.jsx":
/*!*************************!*\
  !*** ./example/app.jsx ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_HiComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/HiComponent.js */ "./lib/HiComponent.js");
/* harmony import */ var _lib_HiComponent_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_HiComponent_js__WEBPACK_IMPORTED_MODULE_1__);


var dom = _lib_HiComponent_js__WEBPACK_IMPORTED_MODULE_1___default.a.dom,
    Fragment = _lib_HiComponent_js__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment; // function Child(props) {
//     return (
//         <div class="child">
//             <h1 style="color: red">{props.title}</h1>
//             <form class="navbar-form" role="search">
//                 <div class="form-group">
//                     <input type="text" class="form-control" placeholder="Search"></input>
//                 </div>
//                 <button type="submit" class="btn btn-default">Submit</button>
//             </form>
//             <nav aria-label="Page navigation">
//             <ul class="pagination">
//                 <li>
//                 <a href="#" aria-label="Previous">
//                     <span aria-hidden="true">&laquo;</span>
//                 </a>
//                 </li>
//                 <li><a href="#">1</a></li>
//                 <li><a href="#">2</a></li>
//                 <li><a href="#">3</a></li>
//                 <li><a href="#">4</a></li>
//                 <li><a href="#">5</a></li>
//                 <li>
//                 <a href="#" aria-label="Next">
//                     <span aria-hidden="true">&raquo;</span>
//                 </a>
//                 </li>
//             </ul>
//             </nav>
//         </div>
//     )
// }

function handleClick(data) {
  console.log('click', data);
}

function Text(props) {
  return dom("div", {
    class: "Text",
    onClick: function onClick() {
      handleClick(props.index);
    }
  }, props.text);
}

function App() {
  var list = new Array(30).join('1').split('');
  var child = list.map(function (_, index) {
    return dom(Text, {
      index: index,
      text: "hello --> " + index
    });
  });
  return dom("div", {
    class: "App"
  }, child);
}

console.time('test');
var Context = new _lib_HiComponent_js__WEBPACK_IMPORTED_MODULE_1___default.a();
var app = App();
Context.render(app, '#app');

/***/ }),

/***/ "./example/main.js":
/*!*************************!*\
  !*** ./example/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.jsx */ "./example/app.jsx");


/***/ }),

/***/ "./lib/HiComponent.js":
/*!****************************!*\
  !*** ./lib/HiComponent.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./src/core/context.ts":
/*!*****************************!*\
  !*** ./src/core/context.ts ***!
  \*****************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var Context = /*#__PURE__*/function () {
  function Context() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Context);

    this.components = Object.create(null);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Context, [{
    key: "init",
    value: function init() {}
  }]);

  return Context;
}();

/***/ }),

/***/ "./src/core/dom/dom.ts":
/*!*****************************!*\
  !*** ./src/core/dom/dom.ts ***!
  \*****************************/
/*! exports provided: default, Fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return Fragment; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.assign.js */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_5__);






// 当前组件id
var cid = 0; // 注册事件队列

var queue = []; // 为加入dom树子组件

var childNodes = [];
var pending = false;

function flush() {
  if (pending) {
    return;
  }

  pending = true;
  setTimeout(function () {
    task();

    if (childNodes.length) {
      setTimeout(task, 0);
    } else {
      console.timeEnd('test');
      pending = false;
    }
  }, 0);
}

function task() {
  for (var i = 0; i < childNodes.length; i = i + 2) {
    try {
      var placeholder = document.querySelector("[".concat(childNodes[i], "]"));
      var child = childNodes[i + 1];

      if (placeholder && placeholder.parentNode) {
        placeholder.parentNode.replaceChild(child, placeholder);
        childNodes.splice(i, 2);
        i -= 2;
      }
    } catch (e) {
      console.log('error in task: ', e);
    }
  }
}

function appendChild(html, children) {
  // children &&  children.forEach(child => {
  //   if (child.nodeType == 1) {
  //     let placeholder = `componnet-placeholder-${childNodes.length}`
  //     html += `<div ${placeholder}></div>`
  //     childNodes.push(placeholder)
  //     childNodes.push(child)
  //     flush()
  //   } else {
  //     html += Array.isArray(child)? child.join(''): child
  //   }
  // })
  // return html
  children && children.forEach(function (child) {
    if (child.nodeType == 1) {
      var placeholder = "componnet-placeholder-".concat(childNodes.length);
      html += "<div ".concat(placeholder, "></div>");
      childNodes.push(placeholder);
      childNodes.push(child);
      flush();
    } else {
      if (Array.isArray(child)) {
        html = appendChild(html, child);
      } else {
        html += child;
      }
    }
  });
  return html;
}

function dom(tag, attrs) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  // console.error(tag, attrs, children)
  if (typeof tag === 'function') {
    var result = tag(Object.assign({}, attrs, {
      children: children
    })); // return result === 'FRAGMENT' ? children : result

    if (result === 'FRAGMENT') {
      return children;
    } else {
      return function () {
        var div = document.createElement('div');
        div.innerHTML = result;
        var current = null;

        while (queue.length > 0) {
          current = queue.pop();

          if (current) {
            current(div);
          }
        }

        current = null;
        return div.children[0];
      }();
    }
  }

  if (typeof tag === 'string') {
    var html = '';
    html += "<".concat(tag);
    attrs && Object.keys(attrs).forEach(function (key) {
      if (/^on/.test(key)) {
        var handleId = "date-handler-".concat(cid++);
        html += "  ".concat(handleId);

        (function (handleId, key, handler) {
          queue.push(function (parent) {
            var eventName = key.slice(2).toLowerCase();
            var dom = parent.querySelector("[".concat(handleId, "]"));

            if (dom) {
              dom.addEventListener(eventName, handler);
            }
          });
        })(handleId, key, attrs[key]);
      } else {
        html += " ".concat(key, "=\"").concat(attrs[key], "\"");
      }
    });
    html += '>';
    html = appendChild(html, children);
    html += "</".concat(tag, ">");
    return html;
  }

  throw new Error("does not handle ".concat(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(tag)));
}

/* harmony default export */ __webpack_exports__["default"] = (dom);
var Fragment = function Fragment() {
  return 'FRAGMENT';
};

/***/ }),

/***/ "./src/core/events.ts":
/*!****************************!*\
  !*** ./src/core/events.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventEmitter; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/core/util.ts");




var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EventEmitter);

    this._events = Object.create(null);
  }
  /**
   *
   * @param {string | Array<string>} event
   * @param {Function} fn
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EventEmitter, [{
    key: "on",
    value: function on(event, fn) {
      var vm = this;

      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
      }

      return vm;
    }
    /**
     *
     * @param {string} event
     * @param {Function} fn
     */

  }, {
    key: "once",
    value: function once(event, fn) {
      var vm = this;

      function on() {
        vm.off(event, on);
        fn.apply(vm, arguments);
      }

      on.fn = fn;
      vm.on(event, on);
      return vm;
    }
    /**
     *
     * @param {string | Array<string>} event
     * @param {Function} fn
     */

  }, {
    key: "off",
    value: function off(event, fn) {
      var vm = this; // all

      if (event == undefined) {
        vm._events = Object.create(null);
        return vm;
      } // array of events


      if (Array.isArray(event)) {
        for (var _i = 0, l = event.length; _i < l; _i++) {
          vm.off(event[_i], fn);
        }

        return vm;
      } // specific event


      var cbs = vm._events[event];

      if (!cbs) {
        return vm;
      }

      if (!fn) {
        vm._events[event] = null;
        return vm;
      } // specific handler


      var cb;
      var i = cbs.length;

      while (i--) {
        cb = cbs[i];

        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }

      return vm;
    }
    /**
     *
     * @param {string} event
     */

  }, {
    key: "emit",
    value: function emit(event) {
      var vm = this;
      var cbs = vm._events[event];

      if (cbs) {
        cbs = cbs.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["toArray"])(cbs) : cbs;
        var args = Object(_util__WEBPACK_IMPORTED_MODULE_2__["toArray"])(arguments, 1);
        var handler;

        for (var i = 0, l = cbs.length; i < l; i++) {
          try {
            handler = cbs[i];
            args ? handler.apply(null, args) : handler.call(null);
          } catch (e) {
            console.error("event handler for \"".concat(event, "\""));
            console.error(e);
          }
        }
      }

      return vm;
    }
  }]);

  return EventEmitter;
}();



/***/ }),

/***/ "./src/core/render.ts":
/*!****************************!*\
  !*** ./src/core/render.ts ***!
  \****************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/core/util.ts");
/**
 *
 */

function render(html, wrap) {
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["async"])(_render, this, html, wrap);
}

function _render(html, wrap) {
  var parent = document.querySelector(wrap);

  if (!parent) {
    throw new Error('wrap 不存在');
  }

  if (typeof html == 'string') {
    parent.innerHTML = html;
  } else {
    parent.innerHTML = '';
    parent.appendChild(html);
  }

  this.eventBus.emit('context:mounted', {
    parent: parent
  });
}

/***/ }),

/***/ "./src/core/util.ts":
/*!**************************!*\
  !*** ./src/core/util.ts ***!
  \**************************/
/*! exports provided: toArray, async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/**
 *
 * @param {any} list
 * @param {number} start
 */
function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
function async(cb, context) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  setTimeout(function () {
    cb.call.apply(cb, [context].concat(args));
  }, 0);
}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HiComponent; });
/* harmony import */ var _core_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/events */ "./src/core/events.ts");
/* harmony import */ var _core_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/render */ "./src/core/render.ts");
/* harmony import */ var _core_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/context */ "./src/core/context.ts");
/* harmony import */ var _core_dom_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/dom/dom */ "./src/core/dom/dom.ts");




function HiComponent() {
  console.log('constructor6666');
  this.context = new _core_context__WEBPACK_IMPORTED_MODULE_2__["Context"]();
  this.eventBus = new _core_events__WEBPACK_IMPORTED_MODULE_0__["default"]();

  this._init();

  return this;
}
var cid = 0;
var target = null;
HiComponent.prototype = {
  constructor: HiComponent,
  render: _core_render__WEBPACK_IMPORTED_MODULE_1__["render"],
  _init: function _init() {
    var _this = this;

    this.eventBus.on('context:mounted', function (data) {
      console.log('context:mounted', data); // this._flush()

      var component = Object.create(null);
      component.parent = data.parent;
      _this.context.components[cid++] = component;
    });
  },
  _flush: function _flush() {}
};
HiComponent.EventEmitter = _core_events__WEBPACK_IMPORTED_MODULE_0__["default"];
HiComponent.dom = _core_dom_dom__WEBPACK_IMPORTED_MODULE_3__["default"];
HiComponent.Fragment = _core_dom_dom__WEBPACK_IMPORTED_MODULE_3__["Fragment"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IaUNvbXBvbmVudC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZnVuY3Rpb24tdG8tc3RyaW5nLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9zcmMvY29yZS9jb250ZXh0LnRzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vc3JjL2NvcmUvZG9tL2RvbS50cyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL3NyYy9jb3JlL2V2ZW50cy50cyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL3NyYy9jb3JlL3JlbmRlci50cyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL3NyYy9jb3JlL3V0aWwudHMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQ29udGV4dCIsImNvbXBvbmVudHMiLCJPYmplY3QiLCJjcmVhdGUiLCJjaWQiLCJxdWV1ZSIsImNoaWxkTm9kZXMiLCJwZW5kaW5nIiwiZmx1c2giLCJzZXRUaW1lb3V0IiwidGFzayIsImxlbmd0aCIsImNvbnNvbGUiLCJ0aW1lRW5kIiwiaSIsInBsYWNlaG9sZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGQiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwic3BsaWNlIiwiZSIsImxvZyIsImFwcGVuZENoaWxkIiwiaHRtbCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsIm5vZGVUeXBlIiwicHVzaCIsIkFycmF5IiwiaXNBcnJheSIsImRvbSIsInRhZyIsImF0dHJzIiwicmVzdWx0IiwiYXNzaWduIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImN1cnJlbnQiLCJwb3AiLCJrZXlzIiwia2V5IiwidGVzdCIsImhhbmRsZUlkIiwiaGFuZGxlciIsInBhcmVudCIsImV2ZW50TmFtZSIsInNsaWNlIiwidG9Mb3dlckNhc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiRXJyb3IiLCJGcmFnbWVudCIsIkV2ZW50RW1pdHRlciIsIl9ldmVudHMiLCJldmVudCIsImZuIiwidm0iLCJsIiwib24iLCJvZmYiLCJhcHBseSIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImNicyIsImNiIiwidG9BcnJheSIsImFyZ3MiLCJjYWxsIiwiZXJyb3IiLCJyZW5kZXIiLCJ3cmFwIiwiYXN5bmMiLCJfcmVuZGVyIiwiZXZlbnRCdXMiLCJlbWl0IiwibGlzdCIsInN0YXJ0IiwicmV0IiwiY29udGV4dCIsIkhpQ29tcG9uZW50IiwiX2luaXQiLCJ0YXJnZXQiLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJjb21wb25lbnQiLCJfZmx1c2giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtR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REFBSixFQUFmO0FBQ0EsT0FBSzJFLFFBQUwsR0FBZ0IsSUFBSXJCLG9EQUFKLEVBQWhCOztBQUNBLE9BQUs0QixLQUFMOztBQUNBLFNBQU8sSUFBUDtBQUNIO0FBQ0QsSUFBSTlFLEdBQUcsR0FBRyxDQUFWO0FBQ0EsSUFBSStFLE1BQU0sR0FBRyxJQUFiO0FBQ0FGLFdBQVcsQ0FBQ0csU0FBWixHQUF3QjtBQUNwQkMsYUFBVyxFQUFFSixXQURPO0FBRXBCVixRQUFNLEVBQU5BLG1EQUZvQjtBQUdwQlcsT0FIb0IsbUJBR1o7QUFBQTs7QUFDSixTQUFLUCxRQUFMLENBQWNmLEVBQWQsQ0FBaUIsaUJBQWpCLEVBQW9DLFVBQUMwQixJQUFELEVBQVU7QUFDMUMxRSxhQUFPLENBQUNXLEdBQVIsQ0FBWSxpQkFBWixFQUErQitELElBQS9CLEVBRDBDLENBRTFDOztBQUNBLFVBQUlDLFNBQVMsR0FBR3JGLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQsQ0FBaEI7QUFDQW9GLGVBQVMsQ0FBQ3hDLE1BQVYsR0FBbUJ1QyxJQUFJLENBQUN2QyxNQUF4QjtBQUNBLFdBQUksQ0FBQ2lDLE9BQUwsQ0FBYS9FLFVBQWIsQ0FBd0JHLEdBQUcsRUFBM0IsSUFBaUNtRixTQUFqQztBQUNILEtBTkQ7QUFPSCxHQVhtQjtBQVlwQkMsUUFab0Isb0JBWVgsQ0FDUjtBQWJtQixDQUF4QjtBQWVBUCxXQUFXLENBQUMzQixZQUFaLEdBQTJCQSxvREFBM0I7QUFDQTJCLFdBQVcsQ0FBQ2pELEdBQVosR0FBa0JBLHFEQUFsQjtBQUNBaUQsV0FBVyxDQUFDNUIsUUFBWixHQUF1QkEsc0RBQXZCLEMiLCJmaWxlIjoiSGlDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIaUNvbXBvbmVudFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIaUNvbXBvbmVudFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjEyJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIHtcbiAgICAgIGtleSA9IGtleXNbaisrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgaXNFbnVtLmNhbGwoUywga2V5KSkgVFtrZXldID0gU1trZXldO1xuICAgIH1cbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4vX2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjAgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG4iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuIiwidmFyICRpdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIENTU1J1bGVMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogZmFsc2UsXG4gIENTU1ZhbHVlTGlzdDogZmFsc2UsXG4gIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NUmVjdExpc3Q6IGZhbHNlLFxuICBET01TdHJpbmdMaXN0OiBmYWxzZSxcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogZmFsc2UsXG4gIEZpbGVMaXN0OiBmYWxzZSxcbiAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxGb3JtRWxlbWVudDogZmFsc2UsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgTWVkaWFMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gIE5hbWVkTm9kZU1hcDogZmFsc2UsXG4gIE5vZGVMaXN0OiB0cnVlLFxuICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgUGx1Z2luOiBmYWxzZSxcbiAgUGx1Z2luQXJyYXk6IGZhbHNlLFxuICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgU1ZHTnVtYmVyTGlzdDogZmFsc2UsXG4gIFNWR1BhdGhTZWdMaXN0OiBmYWxzZSxcbiAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgU1ZHU3RyaW5nTGlzdDogZmFsc2UsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IGZhbHNlLFxuICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgU3R5bGVTaGVldExpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgVGV4dFRyYWNrTGlzdDogZmFsc2UsXG4gIFRvdWNoTGlzdDogZmFsc2Vcbn07XG5cbmZvciAodmFyIGNvbGxlY3Rpb25zID0gZ2V0S2V5cyhET01JdGVyYWJsZXMpLCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gY29sbGVjdGlvbnNbaV07XG4gIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIHZhciBrZXk7XG4gIGlmIChwcm90bykge1xuICAgIGlmICghcHJvdG9bSVRFUkFUT1JdKSBoaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmICghcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGlmIChleHBsaWNpdCkgZm9yIChrZXkgaW4gJGl0ZXJhdG9ycykgaWYgKCFwcm90b1trZXldKSByZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29udGV4dCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgIH1cclxufVxyXG4iLCIvLyDlvZPliY3nu4Tku7ZpZFxyXG5sZXQgY2lkID0gMDtcclxuLy8g5rOo5YaM5LqL5Lu26Zif5YiXXHJcbmxldCBxdWV1ZSA9IFtdO1xyXG4vLyDkuLrliqDlhaVkb23moJHlrZDnu4Tku7ZcclxubGV0IGNoaWxkTm9kZXMgPSBbXTtcclxubGV0IHBlbmRpbmcgPSBmYWxzZTtcclxuZnVuY3Rpb24gZmx1c2goKSB7XHJcbiAgICBpZiAocGVuZGluZykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBlbmRpbmcgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGFzaygpO1xyXG4gICAgICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRhc2ssIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS50aW1lRW5kKCd0ZXN0Jyk7XHJcbiAgICAgICAgICAgIHBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LCAwKTtcclxufVxyXG5mdW5jdGlvbiB0YXNrKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSA9IGkgKyAyKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgWyR7Y2hpbGROb2Rlc1tpXX1dYCk7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkTm9kZXNbaSArIDFdO1xyXG4gICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIgJiYgcGxhY2Vob2xkZXIucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2hpbGQsIHBsYWNlaG9sZGVyKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXMuc3BsaWNlKGksIDIpO1xyXG4gICAgICAgICAgICAgICAgaSAtPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiB0YXNrOiAnLCBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYXBwZW5kQ2hpbGQoaHRtbCwgY2hpbGRyZW4pIHtcclxuICAgIC8vIGNoaWxkcmVuICYmICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgIC8vICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEpIHtcclxuICAgIC8vICAgICBsZXQgcGxhY2Vob2xkZXIgPSBgY29tcG9ubmV0LXBsYWNlaG9sZGVyLSR7Y2hpbGROb2Rlcy5sZW5ndGh9YFxyXG4gICAgLy8gICAgIGh0bWwgKz0gYDxkaXYgJHtwbGFjZWhvbGRlcn0+PC9kaXY+YFxyXG4gICAgLy8gICAgIGNoaWxkTm9kZXMucHVzaChwbGFjZWhvbGRlcilcclxuICAgIC8vICAgICBjaGlsZE5vZGVzLnB1c2goY2hpbGQpXHJcbiAgICAvLyAgICAgZmx1c2goKVxyXG4gICAgLy8gICB9IGVsc2Uge1xyXG4gICAgLy8gICAgIGh0bWwgKz0gQXJyYXkuaXNBcnJheShjaGlsZCk/IGNoaWxkLmpvaW4oJycpOiBjaGlsZFxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KVxyXG4gICAgLy8gcmV0dXJuIGh0bWxcclxuICAgIGNoaWxkcmVuICYmIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBwbGFjZWhvbGRlciA9IGBjb21wb25uZXQtcGxhY2Vob2xkZXItJHtjaGlsZE5vZGVzLmxlbmd0aH1gO1xyXG4gICAgICAgICAgICBodG1sICs9IGA8ZGl2ICR7cGxhY2Vob2xkZXJ9PjwvZGl2PmA7XHJcbiAgICAgICAgICAgIGNoaWxkTm9kZXMucHVzaChwbGFjZWhvbGRlcik7XHJcbiAgICAgICAgICAgIGNoaWxkTm9kZXMucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIGZsdXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcclxuICAgICAgICAgICAgICAgIGh0bWwgPSBhcHBlbmRDaGlsZChodG1sLCBjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9IGNoaWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaHRtbDtcclxufVxyXG5mdW5jdGlvbiBkb20odGFnLCBhdHRycywgLi4uY2hpbGRyZW4pIHtcclxuICAgIC8vIGNvbnNvbGUuZXJyb3IodGFnLCBhdHRycywgY2hpbGRyZW4pXHJcbiAgICBpZiAodHlwZW9mIHRhZyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRhZyhPYmplY3QuYXNzaWduKHt9LCBhdHRycywgeyBjaGlsZHJlbiB9KSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHJlc3VsdCA9PT0gJ0ZSQUdNRU5UJyA/IGNoaWxkcmVuIDogcmVzdWx0XHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ0ZSQUdNRU5UJykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50KGRpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGl2LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICB9KSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdGFnID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGxldCBodG1sID0gJyc7XHJcbiAgICAgICAgaHRtbCArPSBgPCR7dGFnfWA7XHJcbiAgICAgICAgYXR0cnMgJiYgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYgKC9eb24vLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhbmRsZUlkID0gYGRhdGUtaGFuZGxlci0ke2NpZCsrfWA7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9IGAgICR7aGFuZGxlSWR9YDtcclxuICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoaGFuZGxlSWQsIGtleSwgaGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goKHBhcmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnROYW1lID0ga2V5LnNsaWNlKDIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkb20gPSBwYXJlbnQucXVlcnlTZWxlY3RvcihgWyR7aGFuZGxlSWR9XWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KShoYW5kbGVJZCwga2V5LCBhdHRyc1trZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gYCAke2tleX09XCIke2F0dHJzW2tleV19XCJgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaHRtbCArPSAnPic7XHJcbiAgICAgICAgaHRtbCA9IGFwcGVuZENoaWxkKGh0bWwsIGNoaWxkcmVuKTtcclxuICAgICAgICBodG1sICs9IGA8LyR7dGFnfT5gO1xyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBkb2VzIG5vdCBoYW5kbGUgJHt0eXBlb2YgdGFnfWApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGRvbTtcclxuZXhwb3J0IGNvbnN0IEZyYWdtZW50ID0gKCkgPT4gJ0ZSQUdNRU5UJztcclxuIiwiaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vdXRpbCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmcgfCBBcnJheTxzdHJpbmc+fSBldmVudFxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICAgICAqL1xyXG4gICAgb24oZXZlbnQsIGZuKSB7XHJcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdm0ub24oZXZlbnRbaV0sIGZuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgKHZtLl9ldmVudHNbZXZlbnRdIHx8ICh2bS5fZXZlbnRzW2V2ZW50XSA9IFtdKSkucHVzaChmbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2bTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICAgICAqL1xyXG4gICAgb25jZShldmVudCwgZm4pIHtcclxuICAgICAgICBjb25zdCB2bSA9IHRoaXM7XHJcbiAgICAgICAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICAgICAgICAgIHZtLm9mZihldmVudCwgb24pO1xyXG4gICAgICAgICAgICBmbi5hcHBseSh2bSwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb24uZm4gPSBmbjtcclxuICAgICAgICB2bS5vbihldmVudCwgb24pO1xyXG4gICAgICAgIHJldHVybiB2bTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgQXJyYXk8c3RyaW5nPn0gZXZlbnRcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAgICAgKi9cclxuICAgIG9mZihldmVudCwgZm4pIHtcclxuICAgICAgICBjb25zdCB2bSA9IHRoaXM7XHJcbiAgICAgICAgLy8gYWxsXHJcbiAgICAgICAgaWYgKGV2ZW50ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhcnJheSBvZiBldmVudHNcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZtLm9mZihldmVudFtpXSwgZm4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICAgICAgICBjb25zdCBjYnMgPSB2bS5fZXZlbnRzW2V2ZW50XTtcclxuICAgICAgICBpZiAoIWNicykge1xyXG4gICAgICAgICAgICByZXR1cm4gdm07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZm4pIHtcclxuICAgICAgICAgICAgdm0uX2V2ZW50c1tldmVudF0gPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gdm07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcclxuICAgICAgICBsZXQgY2I7XHJcbiAgICAgICAgbGV0IGkgPSBjYnMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICAgICAgY2IgPSBjYnNbaV07XHJcbiAgICAgICAgICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XHJcbiAgICAgICAgICAgICAgICBjYnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZtO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XHJcbiAgICAgKi9cclxuICAgIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCB2bSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xyXG4gICAgICAgIGlmIChjYnMpIHtcclxuICAgICAgICAgICAgY2JzID0gY2JzLmxlbmd0aCA+IDEgPyB0b0FycmF5KGNicykgOiBjYnM7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlciA9IGNic1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzID8gaGFuZGxlci5hcHBseShudWxsLCBhcmdzKSA6IGhhbmRsZXIuY2FsbChudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgZXZlbnQgaGFuZGxlciBmb3IgXCIke2V2ZW50fVwiYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdm07XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gJy4vdXRpbCc7XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoaHRtbCwgd3JhcCkge1xyXG4gICAgYXN5bmMoX3JlbmRlciwgdGhpcywgaHRtbCwgd3JhcCk7XHJcbn1cclxuZnVuY3Rpb24gX3JlbmRlcihodG1sLCB3cmFwKSB7XHJcbiAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih3cmFwKTtcclxuICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd3cmFwIOS4jeWtmOWcqCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBodG1sID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcGFyZW50LmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGh0bWwpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ldmVudEJ1cy5lbWl0KCdjb250ZXh0Om1vdW50ZWQnLCB7XHJcbiAgICAgICAgcGFyZW50XHJcbiAgICB9KTtcclxufVxyXG4iLCIvKipcclxuICpcclxuICogQHBhcmFtIHthbnl9IGxpc3RcclxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheShsaXN0LCBzdGFydCkge1xyXG4gICAgc3RhcnQgPSBzdGFydCB8fCAwO1xyXG4gICAgbGV0IGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0O1xyXG4gICAgY29uc3QgcmV0ID0gbmV3IEFycmF5KGkpO1xyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFzeW5jKGNiLCBjb250ZXh0LCAuLi5hcmdzKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjYi5jYWxsKGNvbnRleHQsIC4uLmFyZ3MpO1xyXG4gICAgfSwgMCk7XHJcbn1cclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2NvcmUvZXZlbnRzJztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi9jb3JlL3JlbmRlcic7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuL2NvcmUvY29udGV4dCc7XHJcbmltcG9ydCBkb20sIHsgRnJhZ21lbnQgfSBmcm9tICcuL2NvcmUvZG9tL2RvbSc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpQ29tcG9uZW50KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdG9yNjY2NicpO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gbmV3IENvbnRleHQoKTtcclxuICAgIHRoaXMuZXZlbnRCdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICB0aGlzLl9pbml0KCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxufVxyXG5sZXQgY2lkID0gMDtcclxubGV0IHRhcmdldCA9IG51bGw7XHJcbkhpQ29tcG9uZW50LnByb3RvdHlwZSA9IHtcclxuICAgIGNvbnN0cnVjdG9yOiBIaUNvbXBvbmVudCxcclxuICAgIHJlbmRlcixcclxuICAgIF9pbml0KCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRCdXMub24oJ2NvbnRleHQ6bW91bnRlZCcsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb250ZXh0Om1vdW50ZWQnLCBkYXRhKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5fZmx1c2goKVxyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgICAgICAgY29tcG9uZW50LnBhcmVudCA9IGRhdGEucGFyZW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY29tcG9uZW50c1tjaWQrK10gPSBjb21wb25lbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgX2ZsdXNoKCkge1xyXG4gICAgfVxyXG59O1xyXG5IaUNvbXBvbmVudC5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XHJcbkhpQ29tcG9uZW50LmRvbSA9IGRvbTtcclxuSGlDb21wb25lbnQuRnJhZ21lbnQgPSBGcmFnbWVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanN4Iiwid2VicGFjazovLy8uL2V4YW1wbGUvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvSGlDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZHZhbmNlLXN0cmluZy1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19maXgtcmUtd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Z1bmN0aW9uLXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQuanMiXSwibmFtZXMiOlsiZG9tIiwiSGlDb21wb25lbnQiLCJGcmFnbWVudCIsImhhbmRsZUNsaWNrIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJUZXh0IiwicHJvcHMiLCJpbmRleCIsInRleHQiLCJBcHAiLCJsaXN0IiwiQXJyYXkiLCJqb2luIiwic3BsaXQiLCJjaGlsZCIsIm1hcCIsIl8iLCJ0aW1lIiwiQ29udGV4dCIsImFwcCIsInJlbmRlciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7O0FBR0QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsWUFBWTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7OztBQUdkLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLHFEQUFxRCxPQUFPLEVBQUU7QUFDOUQ7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7OztBQUdELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRSxpQ0FBaUM7QUFDckc7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQSxxRUFBcUU7QUFDckUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsY0FBYztBQUNkLGlCQUFpQjtBQUNqQjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMENBQTBDLDBHQUEwRzs7O0FBR3BKLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9ELHdCQUF3QjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpR0FBaUcsZ0JBQWdCLEVBQUU7QUFDbkg7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrR0FBa0csaUJBQWlCLEVBQUU7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQSxZQUFZOztBQUVaLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxrQkFBa0I7QUFDdEUseUJBQXlCLFlBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsNEZBQTRGLGFBQWE7QUFDekc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsS0FBSyxHQUFHOztBQUVSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlHQUFpRyxxQkFBcUIsRUFBRTtBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLGFBQWEsU0FBUztBQUN0Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxTQUFTO0FBQ3hCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1QkFBdUI7QUFDdEMsZUFBZSxTQUFTO0FBQ3hCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBLDBDQUEwQyxRQUFRO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOzs7QUFHUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7OztBQUlELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnR0FBZ0csZUFBZSxFQUFFO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpR0FBaUcsZ0JBQWdCLEVBQUU7QUFDbkgsK0ZBQStGLGNBQWMsRUFBRTtBQUMvRztBQUNBO0FBQ0EsV0FBVyxJQUFJO0FBQ2YsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RixhQUFhO0FBQ3JHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUdBQWlHLG9CQUFvQixFQUFFO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87O0FBRVAsVUFBVTtBQUNWLENBQUM7QUFDRCwyQ0FBMkMsY0FBYyx1bjhFOzs7Ozs7Ozs7OztBQzE1RHpEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSGE7QUFDYixTQUFTLG1CQUFPLENBQUMsa0VBQWM7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBLGVBQWUsbUJBQU8sQ0FBQyxrRUFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxVQUFVLG1CQUFPLENBQUMsc0RBQVE7QUFDMUIsVUFBVSxtQkFBTyxDQUFDLHNEQUFRO0FBQzFCO0FBQ0EsMkJBQTJCLGtCQUFrQixFQUFFOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsWUFBWTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLDZCQUE2QjtBQUM3Qix1Q0FBdUM7Ozs7Ozs7Ozs7OztBQ0R2QztBQUNBLGdCQUFnQixtQkFBTyxDQUFDLG9FQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsMERBQVU7QUFDcEMsaUNBQWlDLFFBQVEsbUJBQW1CLFVBQVUsRUFBRSxFQUFFO0FBQzFFLENBQUM7Ozs7Ozs7Ozs7OztBQ0hELGVBQWUsbUJBQU8sQ0FBQyxrRUFBYztBQUNyQyxlQUFlLG1CQUFPLENBQUMsNERBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkEsYUFBYSxtQkFBTyxDQUFDLDREQUFXO0FBQ2hDLFdBQVcsbUJBQU8sQ0FBQyx3REFBUztBQUM1QixXQUFXLG1CQUFPLENBQUMsd0RBQVM7QUFDNUIsZUFBZSxtQkFBTyxDQUFDLGdFQUFhO0FBQ3BDLFVBQVUsbUJBQU8sQ0FBQyxzREFBUTtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0YsdUJBQXVCO0FBQ3pHLGlFQUFpRTtBQUNqRSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYztBQUNkLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQjs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLG1CQUFPLENBQUMsNEVBQW1CO0FBQzNCLGVBQWUsbUJBQU8sQ0FBQyxnRUFBYTtBQUNwQyxXQUFXLG1CQUFPLENBQUMsd0RBQVM7QUFDNUIsWUFBWSxtQkFBTyxDQUFDLDBEQUFVO0FBQzlCLGNBQWMsbUJBQU8sQ0FBQyw4REFBWTtBQUNsQyxVQUFVLG1CQUFPLENBQUMsc0RBQVE7QUFDMUIsaUJBQWlCLG1CQUFPLENBQUMsc0VBQWdCOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUE0QztBQUNyRTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixVQUFVO0FBQ3ZDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUIsYUFBYTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxXQUFXO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQ0FBcUM7QUFDckU7QUFDQTtBQUNBLDJCQUEyQixnQ0FBZ0M7QUFDM0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0ZhO0FBQ2I7QUFDQSxlQUFlLG1CQUFPLENBQUMsa0VBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBLGlCQUFpQixtQkFBTyxDQUFDLDREQUFXOzs7Ozs7Ozs7Ozs7QUNBcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qzs7Ozs7Ozs7Ozs7O0FDTHpDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBLFNBQVMsbUJBQU8sQ0FBQyxrRUFBYztBQUMvQixpQkFBaUIsbUJBQU8sQ0FBQywwRUFBa0I7QUFDM0MsaUJBQWlCLG1CQUFPLENBQUMsc0VBQWdCO0FBQ3pDO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEEsa0JBQWtCLG1CQUFPLENBQUMsc0VBQWdCLE1BQU0sbUJBQU8sQ0FBQywwREFBVTtBQUNsRSwrQkFBK0IsbUJBQU8sQ0FBQyxvRUFBZSxnQkFBZ0IsbUJBQW1CLFVBQVUsRUFBRSxFQUFFO0FBQ3ZHLENBQUM7Ozs7Ozs7Ozs7OztBQ0ZEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQSxlQUFlLG1CQUFPLENBQUMsa0VBQWM7QUFDckMsVUFBVSxtQkFBTyxDQUFDLHNEQUFRO0FBQzFCLFlBQVksbUJBQU8sQ0FBQyxzREFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7Ozs7Ozs7OztBQ0FBLGVBQWUsbUJBQU8sQ0FBQyxrRUFBYztBQUNyQyxxQkFBcUIsbUJBQU8sQ0FBQyw0RUFBbUI7QUFDaEQsa0JBQWtCLG1CQUFPLENBQUMsd0VBQWlCO0FBQzNDOztBQUVBLFlBQVksbUJBQU8sQ0FBQyxzRUFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsWUFBWTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQSxhQUFhLG1CQUFPLENBQUMsNERBQVc7QUFDaEMsV0FBVyxtQkFBTyxDQUFDLHdEQUFTO0FBQzVCLFVBQVUsbUJBQU8sQ0FBQyxzREFBUTtBQUMxQixVQUFVLG1CQUFPLENBQUMsc0RBQVE7QUFDMUIsZ0JBQWdCLG1CQUFPLENBQUMsb0ZBQXVCO0FBQy9DO0FBQ0E7O0FBRUEsbUJBQU8sQ0FBQyx3REFBUztBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlCWTs7QUFFYixjQUFjLG1CQUFPLENBQUMsOERBQVk7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQmE7O0FBRWIsa0JBQWtCLG1CQUFPLENBQUMsMERBQVU7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN6REEsV0FBVyxtQkFBTyxDQUFDLHdEQUFTO0FBQzVCLGFBQWEsbUJBQU8sQ0FBQyw0REFBVztBQUNoQztBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQSxxRUFBcUU7QUFDckUsQ0FBQztBQUNEO0FBQ0EsUUFBUSxtQkFBTyxDQUFDLDhEQUFZO0FBQzVCO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDWEQ7QUFDQSxlQUFlLG1CQUFPLENBQUMsa0VBQWM7QUFDckMsZ0JBQWdCLG1CQUFPLENBQUMsb0VBQWU7QUFDdkMsY0FBYyxtQkFBTyxDQUFDLHNEQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBLGdCQUFnQixtQkFBTyxDQUFDLG9FQUFlO0FBQ3ZDLGNBQWMsbUJBQU8sQ0FBQyw4REFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsb0VBQWU7QUFDdkM7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQSxlQUFlLG1CQUFPLENBQUMsa0VBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLFlBQVksbUJBQU8sQ0FBQyw0REFBVztBQUMvQixVQUFVLG1CQUFPLENBQUMsc0RBQVE7QUFDMUIsYUFBYSxtQkFBTyxDQUFDLDREQUFXO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDVmE7QUFDYixpQkFBaUIsbUJBQU8sQ0FBQyxzRUFBZ0I7QUFDekMsbUJBQU8sQ0FBQyw0REFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUlk7O0FBRWIsZUFBZSxtQkFBTyxDQUFDLGtFQUFjO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQyxrRUFBYztBQUNyQyx5QkFBeUIsbUJBQU8sQ0FBQyxzRkFBd0I7QUFDekQseUJBQXlCLG1CQUFPLENBQUMsd0ZBQXlCO0FBQzFELGVBQWUsbUJBQU8sQ0FBQyxrRUFBYztBQUNyQyxxQkFBcUIsbUJBQU8sQ0FBQyx3RkFBeUI7QUFDdEQsaUJBQWlCLG1CQUFPLENBQUMsc0VBQWdCO0FBQ3pDLFlBQVksbUJBQU8sQ0FBQywwREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMseUJBQXlCLEVBQUU7O0FBRWhFO0FBQ0EsbUJBQU8sQ0FBQyxvRUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9leGFtcGxlL21haW4uanNcIik7XG4iLCJpbXBvcnQgSGlDb21wb25lbnQgZnJvbSAnLi4vbGliL0hpQ29tcG9uZW50LmpzJ1xyXG5jb25zdCB7ZG9tLCBGcmFnbWVudH0gPSBIaUNvbXBvbmVudFxyXG5cclxuLy8gZnVuY3Rpb24gQ2hpbGQocHJvcHMpIHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkXCI+XHJcbi8vICAgICAgICAgICAgIDxoMSBzdHlsZT1cImNvbG9yOiByZWRcIj57cHJvcHMudGl0bGV9PC9oMT5cclxuLy8gICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJuYXZiYXItZm9ybVwiIHJvbGU9XCJzZWFyY2hcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiPjwvaW5wdXQ+XHJcbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+U3VibWl0PC9idXR0b24+XHJcbi8vICAgICAgICAgICAgIDwvZm9ybT5cclxuLy8gICAgICAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiUGFnZSBuYXZpZ2F0aW9uXCI+XHJcbi8vICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb25cIj5cclxuLy8gICAgICAgICAgICAgICAgIDxsaT5cclxuLy8gICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JmxhcXVvOzwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgIDwvYT5cclxuLy8gICAgICAgICAgICAgICAgIDwvbGk+XHJcbi8vICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj4xPC9hPjwvbGk+XHJcbi8vICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj4yPC9hPjwvbGk+XHJcbi8vICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj4zPC9hPjwvbGk+XHJcbi8vICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj40PC9hPjwvbGk+XHJcbi8vICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj41PC9hPjwvbGk+XHJcbi8vICAgICAgICAgICAgICAgICA8bGk+XHJcbi8vICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGFyaWEtbGFiZWw9XCJOZXh0XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnJhcXVvOzwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgIDwvYT5cclxuLy8gICAgICAgICAgICAgICAgIDwvbGk+XHJcbi8vICAgICAgICAgICAgIDwvdWw+XHJcbi8vICAgICAgICAgICAgIDwvbmF2PlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDbGljayhkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2snLCBkYXRhKVxyXG59XHJcbmZ1bmN0aW9uIFRleHQocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIlRleHRcIiBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlQ2xpY2socHJvcHMuaW5kZXgpfX0+e3Byb3BzLnRleHR9PC9kaXY+XHJcbiAgICApXHJcbn1cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgbGV0IGxpc3QgPSBuZXcgQXJyYXkoMzApLmpvaW4oJzEnKS5zcGxpdCgnJylcclxuICAgIGxldCBjaGlsZCA9IGxpc3QubWFwKChfLCBpbmRleCkgPT4gKDxUZXh0IGluZGV4PXtpbmRleH0gdGV4dD17XCJoZWxsbyAtLT4gXCIgKyBpbmRleH0+PC9UZXh0PikpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJBcHBcIj5cclxuICAgICAgICAgICAge2NoaWxkfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59ICBcclxuXHJcbmNvbnNvbGUudGltZSgndGVzdCcpXHJcbmxldCBDb250ZXh0ID0gbmV3IEhpQ29tcG9uZW50KClcclxuXHJcbmxldCBhcHAgPSBBcHAoKVxyXG5Db250ZXh0LnJlbmRlcihhcHAsICcjYXBwJylcclxuIiwiaW1wb3J0ICcuL2FwcC5qc3gnIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSGlDb21wb25lbnRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSGlDb21wb25lbnRcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL193a3MgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qc1wiKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9faGlkZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qc1wiKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19pcy1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX3RvLWlvYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanNcIik7XG52YXIgdG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL190by1sZW5ndGggKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qc1wiKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL190by1hYnNvbHV0ZS1pbmRleCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19jb2YgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qc1wiKTtcbnZhciBUQUcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL193a3MgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qc1wiKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi4xMicgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fYS1mdW5jdGlvbiAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIV9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX2ZhaWxzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qc1wiKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX2lzLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzXCIpO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcIikuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcIik7XG52YXIgY29yZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX2NvcmUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcIik7XG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX2hpZGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanNcIik7XG52YXIgcmVkZWZpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19yZWRlZmluZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanNcIik7XG52YXIgY3R4ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fY3R4ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanNcIik7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZnVuY3Rpb24tdG8tc3RyaW5nLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZnVuY3Rpb24tdG8tc3RyaW5nLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fc2hhcmVkICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanNcIikoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBkUCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX29iamVjdC1kcCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXCIpO1xudmFyIGNyZWF0ZURlc2MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19wcm9wZXJ0eS1kZXNjICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19kZXNjcmlwdG9ycyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcIikgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcIikuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gIV9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX2Rlc2NyaXB0b3JzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1wiKSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fZmFpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXCIpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19kb20tY3JlYXRlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzXCIpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19jb2YgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qc1wiKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fb2JqZWN0LWNyZWF0ZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1wiKTtcbnZhciBkZXNjcmlwdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fcHJvcGVydHktZGVzYyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1wiKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX3NldC10by1zdHJpbmctdGFnICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1wiKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxuX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9faGlkZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qc1wiKShJdGVyYXRvclByb3RvdHlwZSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fd2tzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanNcIikoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBMSUJSQVJZID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fbGlicmFyeSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qc1wiKTtcbnZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fZXhwb3J0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanNcIik7XG52YXIgcmVkZWZpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19yZWRlZmluZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanNcIik7XG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX2hpZGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanNcIik7XG52YXIgSXRlcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9faXRlcmF0b3JzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanNcIik7XG52YXIgJGl0ZXJDcmVhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19pdGVyLWNyZWF0ZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcIik7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19zZXQtdG8tc3RyaW5nLXRhZyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcIik7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19vYmplY3QtZ3BvICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXCIpO1xudmFyIElURVJBVE9SID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fd2tzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanNcIikoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBERVNDUklQVE9SUyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX2Rlc2NyaXB0b3JzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1wiKTtcbnZhciBnZXRLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fb2JqZWN0LWtleXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzXCIpO1xudmFyIGdPUFMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19vYmplY3QtZ29wcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcIik7XG52YXIgcElFID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fb2JqZWN0LXBpZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1wiKTtcbnZhciB0b09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX3RvLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXCIpO1xudmFyIElPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19pb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzXCIpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fZmFpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXCIpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSB7XG4gICAgICBrZXkgPSBrZXlzW2orK107XG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IGlzRW51bS5jYWxsKFMsIGtleSkpIFRba2V5XSA9IFNba2V5XTtcbiAgICB9XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19hbi1vYmplY3QgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qc1wiKTtcbnZhciBkUHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19vYmplY3QtZHBzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzXCIpO1xudmFyIGVudW1CdWdLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fZW51bS1idWcta2V5cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1wiKTtcbnZhciBJRV9QUk9UTyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX3NoYXJlZC1rZXkgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanNcIikoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fZG9tLWNyZWF0ZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1wiKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9faHRtbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qc1wiKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fYW4tb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanNcIik7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19pZTgtZG9tLWRlZmluZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcIik7XG52YXIgdG9QcmltaXRpdmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL190by1wcmltaXRpdmUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1wiKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fZGVzY3JpcHRvcnMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXCIpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBkUCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX29iamVjdC1kcCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXCIpO1xudmFyIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fYW4tb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanNcIik7XG52YXIgZ2V0S2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX29iamVjdC1rZXlzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19kZXNjcmlwdG9ycyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcIikgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX2hhcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXCIpO1xudmFyIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fdG8tb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanNcIik7XG52YXIgSUVfUFJPVE8gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19zaGFyZWQta2V5ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzXCIpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9faGFzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanNcIik7XG52YXIgdG9JT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fdG8taW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qc1wiKTtcbnZhciBhcnJheUluZGV4T2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19hcnJheS1pbmNsdWRlcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcIikoZmFsc2UpO1xudmFyIElFX1BST1RPID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fc2hhcmVkLWtleSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1wiKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX29iamVjdC1rZXlzLWludGVybmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1wiKTtcbnZhciBlbnVtQnVnS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX2VudW0tYnVnLWtleXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5leHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1zYXAuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX2V4cG9ydCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzXCIpO1xudmFyIGNvcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19jb3JlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzXCIpO1xudmFyIGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fZmFpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcIik7XG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX2hpZGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanNcIik7XG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9faGFzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanNcIik7XG52YXIgU1JDID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fdWlkICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanNcIikoJ3NyYycpO1xudmFyICR0b1N0cmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX2Z1bmN0aW9uLXRvLXN0cmluZyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZnVuY3Rpb24tdG8tc3RyaW5nLmpzXCIpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19jb3JlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzXCIpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZGVmID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fb2JqZWN0LWRwICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanNcIikuZjtcbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19oYXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qc1wiKTtcbnZhciBUQUcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL193a3MgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qc1wiKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHNoYXJlZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX3NoYXJlZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzXCIpKCdrZXlzJyk7XG52YXIgdWlkID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fdWlkICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNvcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19jb3JlICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzXCIpO1xudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX2dsb2JhbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzXCIpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19saWJyYXJ5ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzXCIpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjAgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciB0b0ludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL190by1pbnRlZ2VyICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzXCIpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19pb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzXCIpO1xudmFyIGRlZmluZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19kZWZpbmVkICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL190by1pbnRlZ2VyICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzXCIpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19kZWZpbmVkICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9faXMtb2JqZWN0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanNcIik7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgc3RvcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19zaGFyZWQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qc1wiKSgnd2tzJyk7XG52YXIgdWlkID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fdWlkICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanNcIik7XG52YXIgU3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcIikuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGFkZFRvVW5zY29wYWJsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19hZGQtdG8tdW5zY29wYWJsZXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1wiKTtcbnZhciBzdGVwID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9faXRlci1zdGVwICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanNcIik7XG52YXIgSXRlcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9faXRlcmF0b3JzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanNcIik7XG52YXIgdG9JT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fdG8taW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qc1wiKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19pdGVyLWRlZmluZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcIikoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fZXhwb3J0ICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanNcIik7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX29iamVjdC1hc3NpZ24gKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcIikgfSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX3RvLW9iamVjdCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXCIpO1xudmFyICRrZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fb2JqZWN0LWtleXMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzXCIpO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19vYmplY3Qtc2FwICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXCIpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fY2xhc3NvZiAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qc1wiKTtcbnZhciB0ZXN0ID0ge307XG50ZXN0W19fd2VicGFja19yZXF1aXJlX18oLyohIC4vX3drcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzXCIpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmICh0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKSB7XG4gIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX3JlZGVmaW5lICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1wiKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciAkaXRlcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9lczYuYXJyYXkuaXRlcmF0b3IgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXCIpO1xudmFyIGdldEtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19vYmplY3Qta2V5cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcIik7XG52YXIgcmVkZWZpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL19yZWRlZmluZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanNcIik7XG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fZ2xvYmFsICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcIik7XG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vX2hpZGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanNcIik7XG52YXIgSXRlcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9faXRlcmF0b3JzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanNcIik7XG52YXIgd2tzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9fd2tzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanNcIik7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jb3JlL2NvbnRleHQudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NvcmUvY29udGV4dC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogQ29udGV4dCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJDb250ZXh0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gQ29udGV4dDsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2JhYmVsX3J1bnRpbWVfaGVscGVyc19jbGFzc0NhbGxDaGVja19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2JhYmVsX3J1bnRpbWVfaGVscGVyc19jbGFzc0NhbGxDaGVja19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9iYWJlbF9ydW50aW1lX2hlbHBlcnNfY2xhc3NDYWxsQ2hlY2tfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2JhYmVsX3J1bnRpbWVfaGVscGVyc19jcmVhdGVDbGFzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2JhYmVsX3J1bnRpbWVfaGVscGVyc19jcmVhdGVDbGFzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9iYWJlbF9ydW50aW1lX2hlbHBlcnNfY3JlYXRlQ2xhc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XG5cblxudmFyIENvbnRleHQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb250ZXh0KCkge1xuICAgIF9iYWJlbF9ydW50aW1lX2hlbHBlcnNfY2xhc3NDYWxsQ2hlY2tfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0KCkodGhpcywgQ29udGV4dCk7XG5cbiAgICB0aGlzLmNvbXBvbmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9XG5cbiAgX2JhYmVsX3J1bnRpbWVfaGVscGVyc19jcmVhdGVDbGFzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQoKShDb250ZXh0LCBbe1xuICAgIGtleTogXCJpbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7fVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbnRleHQ7XG59KCk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2NvcmUvZG9tL2RvbS50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY29yZS9kb20vZG9tLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0LCBGcmFnbWVudCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJGcmFnbWVudFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIEZyYWdtZW50OyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfYmFiZWxfcnVudGltZV9oZWxwZXJzX3R5cGVvZl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YgKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfYmFiZWxfcnVudGltZV9oZWxwZXJzX3R5cGVvZl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9iYWJlbF9ydW50aW1lX2hlbHBlcnNfdHlwZW9mX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc193ZWJfZG9tX2l0ZXJhYmxlX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc193ZWJfZG9tX2l0ZXJhYmxlX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY29yZV9qc19tb2R1bGVzX3dlYl9kb21faXRlcmFibGVfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzNl9hcnJheV9pdGVyYXRvcl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzNl9hcnJheV9pdGVyYXRvcl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc19lczZfYXJyYXlfaXRlcmF0b3JfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzNl9vYmplY3RfdG9fc3RyaW5nX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzNl9vYmplY3RfdG9fc3RyaW5nX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY29yZV9qc19tb2R1bGVzX2VzNl9vYmplY3RfdG9fc3RyaW5nX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczZfb2JqZWN0X2tleXNfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczZfb2JqZWN0X2tleXNfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb3JlX2pzX21vZHVsZXNfZXM2X29iamVjdF9rZXlzX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczZfb2JqZWN0X2Fzc2lnbl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzICovIFwiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczZfb2JqZWN0X2Fzc2lnbl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc19lczZfb2JqZWN0X2Fzc2lnbl9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fKTtcblxuXG5cblxuXG5cbi8vIOW9k+WJjee7hOS7tmlkXG52YXIgY2lkID0gMDsgLy8g5rOo5YaM5LqL5Lu26Zif5YiXXG5cbnZhciBxdWV1ZSA9IFtdOyAvLyDkuLrliqDlhaVkb23moJHlrZDnu4Tku7ZcblxudmFyIGNoaWxkTm9kZXMgPSBbXTtcbnZhciBwZW5kaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICBpZiAocGVuZGluZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHBlbmRpbmcgPSB0cnVlO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0YXNrKCk7XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHNldFRpbWVvdXQodGFzaywgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUudGltZUVuZCgndGVzdCcpO1xuICAgICAgcGVuZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfSwgMCk7XG59XG5cbmZ1bmN0aW9uIHRhc2soKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkgPSBpICsgMikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW1wiLmNvbmNhdChjaGlsZE5vZGVzW2ldLCBcIl1cIikpO1xuICAgICAgdmFyIGNoaWxkID0gY2hpbGROb2Rlc1tpICsgMV07XG5cbiAgICAgIGlmIChwbGFjZWhvbGRlciAmJiBwbGFjZWhvbGRlci5wYXJlbnROb2RlKSB7XG4gICAgICAgIHBsYWNlaG9sZGVyLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNoaWxkLCBwbGFjZWhvbGRlcik7XG4gICAgICAgIGNoaWxkTm9kZXMuc3BsaWNlKGksIDIpO1xuICAgICAgICBpIC09IDI7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluIHRhc2s6ICcsIGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmRDaGlsZChodG1sLCBjaGlsZHJlbikge1xuICAvLyBjaGlsZHJlbiAmJiAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gIC8vICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEpIHtcbiAgLy8gICAgIGxldCBwbGFjZWhvbGRlciA9IGBjb21wb25uZXQtcGxhY2Vob2xkZXItJHtjaGlsZE5vZGVzLmxlbmd0aH1gXG4gIC8vICAgICBodG1sICs9IGA8ZGl2ICR7cGxhY2Vob2xkZXJ9PjwvZGl2PmBcbiAgLy8gICAgIGNoaWxkTm9kZXMucHVzaChwbGFjZWhvbGRlcilcbiAgLy8gICAgIGNoaWxkTm9kZXMucHVzaChjaGlsZClcbiAgLy8gICAgIGZsdXNoKClcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgaHRtbCArPSBBcnJheS5pc0FycmF5KGNoaWxkKT8gY2hpbGQuam9pbignJyk6IGNoaWxkXG4gIC8vICAgfVxuICAvLyB9KVxuICAvLyByZXR1cm4gaHRtbFxuICBjaGlsZHJlbiAmJiBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxKSB7XG4gICAgICB2YXIgcGxhY2Vob2xkZXIgPSBcImNvbXBvbm5ldC1wbGFjZWhvbGRlci1cIi5jb25jYXQoY2hpbGROb2Rlcy5sZW5ndGgpO1xuICAgICAgaHRtbCArPSBcIjxkaXYgXCIuY29uY2F0KHBsYWNlaG9sZGVyLCBcIj48L2Rpdj5cIik7XG4gICAgICBjaGlsZE5vZGVzLnB1c2gocGxhY2Vob2xkZXIpO1xuICAgICAgY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgIGZsdXNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICBodG1sID0gYXBwZW5kQ2hpbGQoaHRtbCwgY2hpbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHRtbCArPSBjaGlsZDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaHRtbDtcbn1cblxuZnVuY3Rpb24gZG9tKHRhZywgYXR0cnMpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNoaWxkcmVuID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBjaGlsZHJlbltfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICAvLyBjb25zb2xlLmVycm9yKHRhZywgYXR0cnMsIGNoaWxkcmVuKVxuICBpZiAodHlwZW9mIHRhZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSB0YWcoT2JqZWN0LmFzc2lnbih7fSwgYXR0cnMsIHtcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH0pKTsgLy8gcmV0dXJuIHJlc3VsdCA9PT0gJ0ZSQUdNRU5UJyA/IGNoaWxkcmVuIDogcmVzdWx0XG5cbiAgICBpZiAocmVzdWx0ID09PSAnRlJBR01FTlQnKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IHJlc3VsdDtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBudWxsO1xuXG4gICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXG4gICAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGN1cnJlbnQoZGl2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGRpdi5jaGlsZHJlblswXTtcbiAgICAgIH0oKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHRhZyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgaHRtbCA9ICcnO1xuICAgIGh0bWwgKz0gXCI8XCIuY29uY2F0KHRhZyk7XG4gICAgYXR0cnMgJiYgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKC9eb24vLnRlc3Qoa2V5KSkge1xuICAgICAgICB2YXIgaGFuZGxlSWQgPSBcImRhdGUtaGFuZGxlci1cIi5jb25jYXQoY2lkKyspO1xuICAgICAgICBodG1sICs9IFwiICBcIi5jb25jYXQoaGFuZGxlSWQpO1xuXG4gICAgICAgIChmdW5jdGlvbiAoaGFuZGxlSWQsIGtleSwgaGFuZGxlcikge1xuICAgICAgICAgIHF1ZXVlLnB1c2goZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGtleS5zbGljZSgyKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdmFyIGRvbSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiW1wiLmNvbmNhdChoYW5kbGVJZCwgXCJdXCIpKTtcblxuICAgICAgICAgICAgaWYgKGRvbSkge1xuICAgICAgICAgICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KShoYW5kbGVJZCwga2V5LCBhdHRyc1trZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGh0bWwgKz0gXCIgXCIuY29uY2F0KGtleSwgXCI9XFxcIlwiKS5jb25jYXQoYXR0cnNba2V5XSwgXCJcXFwiXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGh0bWwgKz0gJz4nO1xuICAgIGh0bWwgPSBhcHBlbmRDaGlsZChodG1sLCBjaGlsZHJlbik7XG4gICAgaHRtbCArPSBcIjwvXCIuY29uY2F0KHRhZywgXCI+XCIpO1xuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiZG9lcyBub3QgaGFuZGxlIFwiLmNvbmNhdChfYmFiZWxfcnVudGltZV9oZWxwZXJzX3R5cGVvZl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQoKSh0YWcpKSk7XG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoZG9tKTtcbnZhciBGcmFnbWVudCA9IGZ1bmN0aW9uIEZyYWdtZW50KCkge1xuICByZXR1cm4gJ0ZSQUdNRU5UJztcbn07XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2NvcmUvZXZlbnRzLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NvcmUvZXZlbnRzLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIEV2ZW50RW1pdHRlcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2JhYmVsX3J1bnRpbWVfaGVscGVyc19jbGFzc0NhbGxDaGVja19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2JhYmVsX3J1bnRpbWVfaGVscGVyc19jbGFzc0NhbGxDaGVja19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9iYWJlbF9ydW50aW1lX2hlbHBlcnNfY2xhc3NDYWxsQ2hlY2tfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2JhYmVsX3J1bnRpbWVfaGVscGVyc19jcmVhdGVDbGFzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2JhYmVsX3J1bnRpbWVfaGVscGVyc19jcmVhdGVDbGFzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9iYWJlbF9ydW50aW1lX2hlbHBlcnNfY3JlYXRlQ2xhc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3V0aWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdXRpbCAqLyBcIi4vc3JjL2NvcmUvdXRpbC50c1wiKTtcblxuXG5cblxudmFyIEV2ZW50RW1pdHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgICBfYmFiZWxfcnVudGltZV9oZWxwZXJzX2NsYXNzQ2FsbENoZWNrX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCgpKHRoaXMsIEV2ZW50RW1pdHRlcik7XG5cbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9XG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBBcnJheTxzdHJpbmc+fSBldmVudFxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAgICovXG5cblxuICBfYmFiZWxfcnVudGltZV9oZWxwZXJzX2NyZWF0ZUNsYXNzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCgpKEV2ZW50RW1pdHRlciwgW3tcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGZuKSB7XG4gICAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICB2bS5vbihldmVudFtpXSwgZm4pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAodm0uX2V2ZW50c1tldmVudF0gfHwgKHZtLl9ldmVudHNbZXZlbnRdID0gW10pKS5wdXNoKGZuKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZtO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25jZShldmVudCwgZm4pIHtcbiAgICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAgIGZ1bmN0aW9uIG9uKCkge1xuICAgICAgICB2bS5vZmYoZXZlbnQsIG9uKTtcbiAgICAgICAgZm4uYXBwbHkodm0sIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIG9uLmZuID0gZm47XG4gICAgICB2bS5vbihldmVudCwgb24pO1xuICAgICAgcmV0dXJuIHZtO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8IEFycmF5PHN0cmluZz59IGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvZmZcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2ZW50LCBmbikge1xuICAgICAgdmFyIHZtID0gdGhpczsgLy8gYWxsXG5cbiAgICAgIGlmIChldmVudCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHJldHVybiB2bTtcbiAgICAgIH0gLy8gYXJyYXkgb2YgZXZlbnRzXG5cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgX2kgPCBsOyBfaSsrKSB7XG4gICAgICAgICAgdm0ub2ZmKGV2ZW50W19pXSwgZm4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZtO1xuICAgICAgfSAvLyBzcGVjaWZpYyBldmVudFxuXG5cbiAgICAgIHZhciBjYnMgPSB2bS5fZXZlbnRzW2V2ZW50XTtcblxuICAgICAgaWYgKCFjYnMpIHtcbiAgICAgICAgcmV0dXJuIHZtO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZuKSB7XG4gICAgICAgIHZtLl9ldmVudHNbZXZlbnRdID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHZtO1xuICAgICAgfSAvLyBzcGVjaWZpYyBoYW5kbGVyXG5cblxuICAgICAgdmFyIGNiO1xuICAgICAgdmFyIGkgPSBjYnMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNiID0gY2JzW2ldO1xuXG4gICAgICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICAgICAgY2JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdm07XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJlbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XG5cbiAgICAgIGlmIChjYnMpIHtcbiAgICAgICAgY2JzID0gY2JzLmxlbmd0aCA+IDEgPyBPYmplY3QoX3V0aWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcInRvQXJyYXlcIl0pKGNicykgOiBjYnM7XG4gICAgICAgIHZhciBhcmdzID0gT2JqZWN0KF91dGlsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJ0b0FycmF5XCJdKShhcmd1bWVudHMsIDEpO1xuICAgICAgICB2YXIgaGFuZGxlcjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaGFuZGxlciA9IGNic1tpXTtcbiAgICAgICAgICAgIGFyZ3MgPyBoYW5kbGVyLmFwcGx5KG51bGwsIGFyZ3MpIDogaGFuZGxlci5jYWxsKG51bGwpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJldmVudCBoYW5kbGVyIGZvciBcXFwiXCIuY29uY2F0KGV2ZW50LCBcIlxcXCJcIikpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZtO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFdmVudEVtaXR0ZXI7XG59KCk7XG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jb3JlL3JlbmRlci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jb3JlL3JlbmRlci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiByZW5kZXIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwicmVuZGVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVuZGVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfdXRpbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi91dGlsICovIFwiLi9zcmMvY29yZS91dGlsLnRzXCIpO1xuLyoqXHJcbiAqXHJcbiAqL1xuXG5mdW5jdGlvbiByZW5kZXIoaHRtbCwgd3JhcCkge1xuICBPYmplY3QoX3V0aWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImFzeW5jXCJdKShfcmVuZGVyLCB0aGlzLCBodG1sLCB3cmFwKTtcbn1cblxuZnVuY3Rpb24gX3JlbmRlcihodG1sLCB3cmFwKSB7XG4gIHZhciBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHdyYXApO1xuXG4gIGlmICghcGFyZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd3cmFwIOS4jeWtmOWcqCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBodG1sID09ICdzdHJpbmcnKSB7XG4gICAgcGFyZW50LmlubmVySFRNTCA9IGh0bWw7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChodG1sKTtcbiAgfVxuXG4gIHRoaXMuZXZlbnRCdXMuZW1pdCgnY29udGV4dDptb3VudGVkJywge1xuICAgIHBhcmVudDogcGFyZW50XG4gIH0pO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9jb3JlL3V0aWwudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NvcmUvdXRpbC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogdG9BcnJheSwgYXN5bmMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwidG9BcnJheVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHRvQXJyYXk7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImFzeW5jXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXN5bmM7IH0pO1xuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7YW55fSBsaXN0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFxyXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkobGlzdCwgc3RhcnQpIHtcbiAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICB2YXIgaSA9IGxpc3QubGVuZ3RoIC0gc3RhcnQ7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoaSk7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5mdW5jdGlvbiBhc3luYyhjYiwgY29udGV4dCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBjYi5jYWxsLmFwcGx5KGNiLCBbY29udGV4dF0uY29uY2F0KGFyZ3MpKTtcbiAgfSwgMCk7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIEhpQ29tcG9uZW50OyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY29yZV9ldmVudHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY29yZS9ldmVudHMgKi8gXCIuL3NyYy9jb3JlL2V2ZW50cy50c1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY29yZV9yZW5kZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY29yZS9yZW5kZXIgKi8gXCIuL3NyYy9jb3JlL3JlbmRlci50c1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY29yZV9jb250ZXh0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NvcmUvY29udGV4dCAqLyBcIi4vc3JjL2NvcmUvY29udGV4dC50c1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY29yZV9kb21fZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NvcmUvZG9tL2RvbSAqLyBcIi4vc3JjL2NvcmUvZG9tL2RvbS50c1wiKTtcblxuXG5cblxuZnVuY3Rpb24gSGlDb21wb25lbnQoKSB7XG4gIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcjY2NjYnKTtcbiAgdGhpcy5jb250ZXh0ID0gbmV3IF9jb3JlX2NvbnRleHRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcIkNvbnRleHRcIl0oKTtcbiAgdGhpcy5ldmVudEJ1cyA9IG5ldyBfY29yZV9ldmVudHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0oKTtcblxuICB0aGlzLl9pbml0KCk7XG5cbiAgcmV0dXJuIHRoaXM7XG59XG52YXIgY2lkID0gMDtcbnZhciB0YXJnZXQgPSBudWxsO1xuSGlDb21wb25lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGlDb21wb25lbnQsXG4gIHJlbmRlcjogX2NvcmVfcmVuZGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJyZW5kZXJcIl0sXG4gIF9pbml0OiBmdW5jdGlvbiBfaW5pdCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5ldmVudEJ1cy5vbignY29udGV4dDptb3VudGVkJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjb250ZXh0Om1vdW50ZWQnLCBkYXRhKTsgLy8gdGhpcy5fZmx1c2goKVxuXG4gICAgICB2YXIgY29tcG9uZW50ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGNvbXBvbmVudC5wYXJlbnQgPSBkYXRhLnBhcmVudDtcbiAgICAgIF90aGlzLmNvbnRleHQuY29tcG9uZW50c1tjaWQrK10gPSBjb21wb25lbnQ7XG4gICAgfSk7XG4gIH0sXG4gIF9mbHVzaDogZnVuY3Rpb24gX2ZsdXNoKCkge31cbn07XG5IaUNvbXBvbmVudC5FdmVudEVtaXR0ZXIgPSBfY29yZV9ldmVudHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl07XG5IaUNvbXBvbmVudC5kb20gPSBfY29yZV9kb21fZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19bXCJkZWZhdWx0XCJdO1xuSGlDb21wb25lbnQuRnJhZ21lbnQgPSBfY29yZV9kb21fZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19bXCJGcmFnbWVudFwiXTtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OUlhVU52YlhCdmJtVnVkQzkzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0ozWldKd1lXTnJPaTh2U0dsRGIyMXdiMjVsYm5RdmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZTR2xEYjIxd2IyNWxiblF2TGk5dWIyUmxYMjF2WkhWc1pYTXZRR0poWW1Wc0wzSjFiblJwYldVdmFHVnNjR1Z5Y3k5amJHRnpjME5oYkd4RGFHVmpheTVxY3lJc0luZGxZbkJoWTJzNkx5OUlhVU52YlhCdmJtVnVkQzh1TDI1dlpHVmZiVzlrZFd4bGN5OUFZbUZpWld3dmNuVnVkR2x0WlM5b1pXeHdaWEp6TDJOeVpXRjBaVU5zWVhOekxtcHpJaXdpZDJWaWNHRmphem92TDBocFEyOXRjRzl1Wlc1MEx5NHZibTlrWlY5dGIyUjFiR1Z6TDBCaVlXSmxiQzl5ZFc1MGFXMWxMMmhsYkhCbGNuTXZkSGx3Wlc5bUxtcHpJaXdpZDJWaWNHRmphem92TDBocFEyOXRjRzl1Wlc1MEx5NHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12Ylc5a2RXeGxjeTlmWVMxbWRXNWpkR2x2Ymk1cWN5SXNJbmRsWW5CaFkyczZMeTlJYVVOdmJYQnZibVZ1ZEM4dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMjF2WkhWc1pYTXZYMkZrWkMxMGJ5MTFibk5qYjNCaFlteGxjeTVxY3lJc0luZGxZbkJoWTJzNkx5OUlhVU52YlhCdmJtVnVkQzh1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyMXZaSFZzWlhNdlgyRnVMVzlpYW1WamRDNXFjeUlzSW5kbFluQmhZMnM2THk5SWFVTnZiWEJ2Ym1WdWRDOHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDIxdlpIVnNaWE12WDJGeWNtRjVMV2x1WTJ4MVpHVnpMbXB6SWl3aWQyVmljR0ZqYXpvdkwwaHBRMjl0Y0c5dVpXNTBMeTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJXOWtkV3hsY3k5ZlkyeGhjM052Wmk1cWN5SXNJbmRsWW5CaFkyczZMeTlJYVVOdmJYQnZibVZ1ZEM4dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMjF2WkhWc1pYTXZYMk52Wmk1cWN5SXNJbmRsWW5CaFkyczZMeTlJYVVOdmJYQnZibVZ1ZEM4dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMjF2WkhWc1pYTXZYMk52Y21VdWFuTWlMQ0ozWldKd1lXTnJPaTh2U0dsRGIyMXdiMjVsYm5RdkxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTl0YjJSMWJHVnpMMTlqZEhndWFuTWlMQ0ozWldKd1lXTnJPaTh2U0dsRGIyMXdiMjVsYm5RdkxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTl0YjJSMWJHVnpMMTlrWldacGJtVmtMbXB6SWl3aWQyVmljR0ZqYXpvdkwwaHBRMjl0Y0c5dVpXNTBMeTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJXOWtkV3hsY3k5ZlpHVnpZM0pwY0hSdmNuTXVhbk1pTENKM1pXSndZV05yT2k4dlNHbERiMjF3YjI1bGJuUXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5dGIyUjFiR1Z6TDE5a2IyMHRZM0psWVhSbExtcHpJaXdpZDJWaWNHRmphem92TDBocFEyOXRjRzl1Wlc1MEx5NHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12Ylc5a2RXeGxjeTlmWlc1MWJTMWlkV2N0YTJWNWN5NXFjeUlzSW5kbFluQmhZMnM2THk5SWFVTnZiWEJ2Ym1WdWRDOHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDIxdlpIVnNaWE12WDJWNGNHOXlkQzVxY3lJc0luZGxZbkJoWTJzNkx5OUlhVU52YlhCdmJtVnVkQzh1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyMXZaSFZzWlhNdlgyWmhhV3h6TG1weklpd2lkMlZpY0dGamF6b3ZMMGhwUTI5dGNHOXVaVzUwTHk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiVzlrZFd4bGN5OWZablZ1WTNScGIyNHRkRzh0YzNSeWFXNW5MbXB6SWl3aWQyVmljR0ZqYXpvdkwwaHBRMjl0Y0c5dVpXNTBMeTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJXOWtkV3hsY3k5ZloyeHZZbUZzTG1weklpd2lkMlZpY0dGamF6b3ZMMGhwUTI5dGNHOXVaVzUwTHk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiVzlrZFd4bGN5OWZhR0Z6TG1weklpd2lkMlZpY0dGamF6b3ZMMGhwUTI5dGNHOXVaVzUwTHk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiVzlrZFd4bGN5OWZhR2xrWlM1cWN5SXNJbmRsWW5CaFkyczZMeTlJYVVOdmJYQnZibVZ1ZEM4dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMjF2WkhWc1pYTXZYMmgwYld3dWFuTWlMQ0ozWldKd1lXTnJPaTh2U0dsRGIyMXdiMjVsYm5RdkxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTl0YjJSMWJHVnpMMTlwWlRndFpHOXRMV1JsWm1sdVpTNXFjeUlzSW5kbFluQmhZMnM2THk5SWFVTnZiWEJ2Ym1WdWRDOHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDIxdlpIVnNaWE12WDJsdlltcGxZM1F1YW5NaUxDSjNaV0p3WVdOck9pOHZTR2xEYjIxd2IyNWxiblF2TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXRiMlIxYkdWekwxOXBjeTF2WW1wbFkzUXVhbk1pTENKM1pXSndZV05yT2k4dlNHbERiMjF3YjI1bGJuUXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5dGIyUjFiR1Z6TDE5cGRHVnlMV055WldGMFpTNXFjeUlzSW5kbFluQmhZMnM2THk5SWFVTnZiWEJ2Ym1WdWRDOHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDIxdlpIVnNaWE12WDJsMFpYSXRaR1ZtYVc1bExtcHpJaXdpZDJWaWNHRmphem92TDBocFEyOXRjRzl1Wlc1MEx5NHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12Ylc5a2RXeGxjeTlmYVhSbGNpMXpkR1Z3TG1weklpd2lkMlZpY0dGamF6b3ZMMGhwUTI5dGNHOXVaVzUwTHk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiVzlrZFd4bGN5OWZhWFJsY21GMGIzSnpMbXB6SWl3aWQyVmljR0ZqYXpvdkwwaHBRMjl0Y0c5dVpXNTBMeTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJXOWtkV3hsY3k5ZmJHbGljbUZ5ZVM1cWN5SXNJbmRsWW5CaFkyczZMeTlJYVVOdmJYQnZibVZ1ZEM4dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMjF2WkhWc1pYTXZYMjlpYW1WamRDMWhjM05wWjI0dWFuTWlMQ0ozWldKd1lXTnJPaTh2U0dsRGIyMXdiMjVsYm5RdkxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTl0YjJSMWJHVnpMMTl2WW1wbFkzUXRZM0psWVhSbExtcHpJaXdpZDJWaWNHRmphem92TDBocFEyOXRjRzl1Wlc1MEx5NHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12Ylc5a2RXeGxjeTlmYjJKcVpXTjBMV1J3TG1weklpd2lkMlZpY0dGamF6b3ZMMGhwUTI5dGNHOXVaVzUwTHk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiVzlrZFd4bGN5OWZiMkpxWldOMExXUndjeTVxY3lJc0luZGxZbkJoWTJzNkx5OUlhVU52YlhCdmJtVnVkQzh1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyMXZaSFZzWlhNdlgyOWlhbVZqZEMxbmIzQnpMbXB6SWl3aWQyVmljR0ZqYXpvdkwwaHBRMjl0Y0c5dVpXNTBMeTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJXOWtkV3hsY3k5ZmIySnFaV04wTFdkd2J5NXFjeUlzSW5kbFluQmhZMnM2THk5SWFVTnZiWEJ2Ym1WdWRDOHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDIxdlpIVnNaWE12WDI5aWFtVmpkQzFyWlhsekxXbHVkR1Z5Ym1Gc0xtcHpJaXdpZDJWaWNHRmphem92TDBocFEyOXRjRzl1Wlc1MEx5NHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12Ylc5a2RXeGxjeTlmYjJKcVpXTjBMV3RsZVhNdWFuTWlMQ0ozWldKd1lXTnJPaTh2U0dsRGIyMXdiMjVsYm5RdkxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTl0YjJSMWJHVnpMMTl2WW1wbFkzUXRjR2xsTG1weklpd2lkMlZpY0dGamF6b3ZMMGhwUTI5dGNHOXVaVzUwTHk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiVzlrZFd4bGN5OWZiMkpxWldOMExYTmhjQzVxY3lJc0luZGxZbkJoWTJzNkx5OUlhVU52YlhCdmJtVnVkQzh1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyMXZaSFZzWlhNdlgzQnliM0JsY25SNUxXUmxjMk11YW5NaUxDSjNaV0p3WVdOck9pOHZTR2xEYjIxd2IyNWxiblF2TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXRiMlIxYkdWekwxOXlaV1JsWm1sdVpTNXFjeUlzSW5kbFluQmhZMnM2THk5SWFVTnZiWEJ2Ym1WdWRDOHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDIxdlpIVnNaWE12WDNObGRDMTBieTF6ZEhKcGJtY3RkR0ZuTG1weklpd2lkMlZpY0dGamF6b3ZMMGhwUTI5dGNHOXVaVzUwTHk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiVzlrZFd4bGN5OWZjMmhoY21Wa0xXdGxlUzVxY3lJc0luZGxZbkJoWTJzNkx5OUlhVU52YlhCdmJtVnVkQzh1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyMXZaSFZzWlhNdlgzTm9ZWEpsWkM1cWN5SXNJbmRsWW5CaFkyczZMeTlJYVVOdmJYQnZibVZ1ZEM4dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMjF2WkhWc1pYTXZYM1J2TFdGaWMyOXNkWFJsTFdsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkwwaHBRMjl0Y0c5dVpXNTBMeTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJXOWtkV3hsY3k5ZmRHOHRhVzUwWldkbGNpNXFjeUlzSW5kbFluQmhZMnM2THk5SWFVTnZiWEJ2Ym1WdWRDOHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDIxdlpIVnNaWE12WDNSdkxXbHZZbXBsWTNRdWFuTWlMQ0ozWldKd1lXTnJPaTh2U0dsRGIyMXdiMjVsYm5RdkxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTl0YjJSMWJHVnpMMTkwYnkxc1pXNW5kR2d1YW5NaUxDSjNaV0p3WVdOck9pOHZTR2xEYjIxd2IyNWxiblF2TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXRiMlIxYkdWekwxOTBieTF2WW1wbFkzUXVhbk1pTENKM1pXSndZV05yT2k4dlNHbERiMjF3YjI1bGJuUXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5dGIyUjFiR1Z6TDE5MGJ5MXdjbWx0YVhScGRtVXVhbk1pTENKM1pXSndZV05yT2k4dlNHbERiMjF3YjI1bGJuUXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5dGIyUjFiR1Z6TDE5MWFXUXVhbk1pTENKM1pXSndZV05yT2k4dlNHbERiMjF3YjI1bGJuUXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5dGIyUjFiR1Z6TDE5M2EzTXVhbk1pTENKM1pXSndZV05yT2k4dlNHbERiMjF3YjI1bGJuUXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5dGIyUjFiR1Z6TDJWek5pNWhjbkpoZVM1cGRHVnlZWFJ2Y2k1cWN5SXNJbmRsWW5CaFkyczZMeTlJYVVOdmJYQnZibVZ1ZEM4dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMjF2WkhWc1pYTXZaWE0yTG05aWFtVmpkQzVoYzNOcFoyNHVhbk1pTENKM1pXSndZV05yT2k4dlNHbERiMjF3YjI1bGJuUXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5dGIyUjFiR1Z6TDJWek5pNXZZbXBsWTNRdWEyVjVjeTVxY3lJc0luZGxZbkJoWTJzNkx5OUlhVU52YlhCdmJtVnVkQzh1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyMXZaSFZzWlhNdlpYTTJMbTlpYW1WamRDNTBieTF6ZEhKcGJtY3Vhbk1pTENKM1pXSndZV05yT2k4dlNHbERiMjF3YjI1bGJuUXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5dGIyUjFiR1Z6TDNkbFlpNWtiMjB1YVhSbGNtRmliR1V1YW5NaUxDSjNaV0p3WVdOck9pOHZTR2xEYjIxd2IyNWxiblF2TGk5emNtTXZZMjl5WlM5amIyNTBaWGgwTG5Seklpd2lkMlZpY0dGamF6b3ZMMGhwUTI5dGNHOXVaVzUwTHk0dmMzSmpMMk52Y21VdlpHOXRMMlJ2YlM1MGN5SXNJbmRsWW5CaFkyczZMeTlJYVVOdmJYQnZibVZ1ZEM4dUwzTnlZeTlqYjNKbEwyVjJaVzUwY3k1MGN5SXNJbmRsWW5CaFkyczZMeTlJYVVOdmJYQnZibVZ1ZEM4dUwzTnlZeTlqYjNKbEwzSmxibVJsY2k1MGN5SXNJbmRsWW5CaFkyczZMeTlJYVVOdmJYQnZibVZ1ZEM4dUwzTnlZeTlqYjNKbEwzVjBhV3d1ZEhNaUxDSjNaV0p3WVdOck9pOHZTR2xEYjIxd2IyNWxiblF2TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHNpUTI5dWRHVjRkQ0lzSW1OdmJYQnZibVZ1ZEhNaUxDSlBZbXBsWTNRaUxDSmpjbVZoZEdVaUxDSmphV1FpTENKeGRXVjFaU0lzSW1Ob2FXeGtUbTlrWlhNaUxDSndaVzVrYVc1bklpd2labXgxYzJnaUxDSnpaWFJVYVcxbGIzVjBJaXdpZEdGemF5SXNJbXhsYm1kMGFDSXNJbU52Ym5OdmJHVWlMQ0owYVcxbFJXNWtJaXdpYVNJc0luQnNZV05sYUc5c1pHVnlJaXdpWkc5amRXMWxiblFpTENKeGRXVnllVk5sYkdWamRHOXlJaXdpWTJocGJHUWlMQ0p3WVhKbGJuUk9iMlJsSWl3aWNtVndiR0ZqWlVOb2FXeGtJaXdpYzNCc2FXTmxJaXdpWlNJc0lteHZaeUlzSW1Gd2NHVnVaRU5vYVd4a0lpd2lhSFJ0YkNJc0ltTm9hV3hrY21WdUlpd2labTl5UldGamFDSXNJbTV2WkdWVWVYQmxJaXdpY0hWemFDSXNJa0Z5Y21GNUlpd2lhWE5CY25KaGVTSXNJbVJ2YlNJc0luUmhaeUlzSW1GMGRISnpJaXdpY21WemRXeDBJaXdpWVhOemFXZHVJaXdpWkdsMklpd2lZM0psWVhSbFJXeGxiV1Z1ZENJc0ltbHVibVZ5U0ZSTlRDSXNJbU4xY25KbGJuUWlMQ0p3YjNBaUxDSnJaWGx6SWl3aWEyVjVJaXdpZEdWemRDSXNJbWhoYm1Sc1pVbGtJaXdpYUdGdVpHeGxjaUlzSW5CaGNtVnVkQ0lzSW1WMlpXNTBUbUZ0WlNJc0luTnNhV05sSWl3aWRHOU1iM2RsY2tOaGMyVWlMQ0poWkdSRmRtVnVkRXhwYzNSbGJtVnlJaXdpUlhKeWIzSWlMQ0pHY21GbmJXVnVkQ0lzSWtWMlpXNTBSVzFwZEhSbGNpSXNJbDlsZG1WdWRITWlMQ0psZG1WdWRDSXNJbVp1SWl3aWRtMGlMQ0pzSWl3aWIyNGlMQ0p2Wm1ZaUxDSmhjSEJzZVNJc0ltRnlaM1Z0Wlc1MGN5SXNJblZ1WkdWbWFXNWxaQ0lzSW1OaWN5SXNJbU5pSWl3aWRHOUJjbkpoZVNJc0ltRnlaM01pTENKallXeHNJaXdpWlhKeWIzSWlMQ0p5Wlc1a1pYSWlMQ0ozY21Gd0lpd2lZWE41Ym1NaUxDSmZjbVZ1WkdWeUlpd2laWFpsYm5SQ2RYTWlMQ0psYldsMElpd2liR2x6ZENJc0luTjBZWEowSWl3aWNtVjBJaXdpWTI5dWRHVjRkQ0lzSWtocFEyOXRjRzl1Wlc1MElpd2lYMmx1YVhRaUxDSjBZWEpuWlhRaUxDSndjbTkwYjNSNWNHVWlMQ0pqYjI1emRISjFZM1J2Y2lJc0ltUmhkR0VpTENKamIyMXdiMjVsYm5RaUxDSmZabXgxYzJnaVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDeFBPMUZEVmtFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3T3p0UlFVZEJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3d3UTBGQk1FTXNaME5CUVdkRE8xRkJRekZGTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEVzZDBSQlFYZEVMR3RDUVVGclFqdFJRVU14UlR0UlFVTkJMR2xFUVVGcFJDeGpRVUZqTzFGQlF5OUVPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFTeDVRMEZCZVVNc2FVTkJRV2xETzFGQlF6RkZMR2RJUVVGblNDeHRRa0ZCYlVJc1JVRkJSVHRSUVVOeVNUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxESkNRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdFJRVU4yUkN4cFEwRkJhVU1zWlVGQlpUdFJRVU5vUkR0UlFVTkJPMUZCUTBFN08xRkJSVUU3VVVGRFFTeHpSRUZCYzBRc0swUkJRU3RFT3p0UlFVVnlTRHRSUVVOQk96czdVVUZIUVR0UlFVTkJPenM3T3pzN096czdPenM3UVVOc1JrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHBRenM3T3pzN096czdPenM3UVVOT1FUdEJRVU5CTEdsQ1FVRnBRaXhyUWtGQmEwSTdRVUZEYmtNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN3NFFqczdPenM3T3pzN096czdRVU5vUWtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQkxIbENPenM3T3pzN096czdPenRCUTJoQ1FUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN08wRkRTRUU3UVVGRFFTeHJRa0ZCYTBJc2JVSkJRVThzUTBGQlF5eHpSRUZCVVR0QlFVTnNRenRCUVVOQkxEQkRRVUV3UXl4dFFrRkJUeXhEUVVGRExIZEVRVUZUTERaQ1FVRTJRanRCUVVONFJqdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenRCUTA1QkxHVkJRV1VzYlVKQlFVOHNRMEZCUXl4clJVRkJZenRCUVVOeVF6dEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN08wRkRTa0U3UVVGRFFUdEJRVU5CTEdkQ1FVRm5RaXh0UWtGQlR5eERRVUZETEc5RlFVRmxPMEZCUTNaRExHVkJRV1VzYlVKQlFVOHNRMEZCUXl4clJVRkJZenRCUVVOeVF5eHpRa0ZCYzBJc2JVSkJRVThzUTBGQlF5eHJSa0ZCYzBJN1FVRkRjRVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxMRmxCUVZrc1pVRkJaVHRCUVVOb1F6dEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPenM3T3pzN096czdPenM3UVVOMFFrRTdRVUZEUVN4VlFVRlZMRzFDUVVGUExFTkJRVU1zYzBSQlFWRTdRVUZETVVJc1ZVRkJWU3h0UWtGQlR5eERRVUZETEhORVFVRlJPMEZCUXpGQ08wRkJRMEVzTWtKQlFUSkNMR3RDUVVGclFpeEZRVUZGT3p0QlFVVXZRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVY3NXVUZCV1R0QlFVTm1PenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdRVU4wUWtFc2FVSkJRV2xDT3p0QlFVVnFRanRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3p0QlEwcEJMRFpDUVVFMlFqdEJRVU0zUWl4MVEwRkJkVU03T3pzN096czdPenM3T3p0QlEwUjJRenRCUVVOQkxHZENRVUZuUWl4dFFrRkJUeXhEUVVGRExHOUZRVUZsTzBGQlEzWkRPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN08wRkRia0pCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096dEJRMHBCTzBGQlEwRXNhMEpCUVd0Q0xHMUNRVUZQTEVOQlFVTXNNRVJCUVZVN1FVRkRjRU1zYVVOQlFXbERMRkZCUVZFc2JVSkJRVzFDTEZWQlFWVXNSVUZCUlN4RlFVRkZPMEZCUXpGRkxFTkJRVU03T3pzN096czdPenM3T3p0QlEwaEVMR1ZCUVdVc2JVSkJRVThzUTBGQlF5eHJSVUZCWXp0QlFVTnlReXhsUVVGbExHMUNRVUZQTEVOQlFVTXNORVJCUVZjN1FVRkRiRU03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN08wRkRUa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenRCUTBoQkxHRkJRV0VzYlVKQlFVOHNRMEZCUXl3MFJFRkJWenRCUVVOb1F5eFhRVUZYTEcxQ1FVRlBMRU5CUVVNc2QwUkJRVk03UVVGRE5VSXNWMEZCVnl4dFFrRkJUeXhEUVVGRExIZEVRVUZUTzBGQlF6VkNMR1ZCUVdVc2JVSkJRVThzUTBGQlF5eG5SVUZCWVR0QlFVTndReXhWUVVGVkxHMUNRVUZQTEVOQlFVTXNjMFJCUVZFN1FVRkRNVUk3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYTBaQlFXdEdMSFZDUVVGMVFqdEJRVU42Unl4cFJVRkJhVVU3UVVGRGFrVXNLMFJCUVN0RU8wRkJReTlFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdOQlFXTTdRVUZEWkN4alFVRmpPMEZCUTJRc1kwRkJZenRCUVVOa0xHTkJRV003UVVGRFpDeGxRVUZsTzBGQlEyWXNaVUZCWlR0QlFVTm1MR1ZCUVdVN1FVRkRaaXhuUWtGQlowSTdRVUZEYUVJN096czdPenM3T3pzN096dEJRekZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN1FVTk9RU3hwUWtGQmFVSXNiVUpCUVU4c1EwRkJReXcwUkVGQlZ6czdPenM3T3pzN096czdPMEZEUVhCRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4NVEwRkJlVU03T3pzN096czdPenM3T3p0QlEweDZReXgxUWtGQmRVSTdRVUZEZGtJN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdRVU5JUVN4VFFVRlRMRzFDUVVGUExFTkJRVU1zYTBWQlFXTTdRVUZETDBJc2FVSkJRV2xDTEcxQ1FVRlBMRU5CUVVNc01FVkJRV3RDTzBGQlF6TkRMR2xDUVVGcFFpeHRRa0ZCVHl4RFFVRkRMSE5GUVVGblFqdEJRVU42UXp0QlFVTkJMRU5CUVVNN1FVRkRSRHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3p0QlExQkJMR1ZCUVdVc2JVSkJRVThzUTBGQlF5dzBSRUZCVnp0QlFVTnNRenM3T3pzN096czdPenM3TzBGRFJFRXNhMEpCUVd0Q0xHMUNRVUZQTEVOQlFVTXNjMFZCUVdkQ0xFMUJRVTBzYlVKQlFVOHNRMEZCUXl3d1JFRkJWVHRCUVVOc1JTd3JRa0ZCSzBJc2JVSkJRVThzUTBGQlF5eHZSVUZCWlN4blFrRkJaMElzYlVKQlFXMUNMRlZCUVZVc1JVRkJSU3hGUVVGRk8wRkJRM1pITEVOQlFVTTdPenM3T3pzN096czdPenRCUTBaRU8wRkJRMEVzVlVGQlZTeHRRa0ZCVHl4RFFVRkRMSE5FUVVGUk8wRkJRekZDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVOTVFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenM3UVVOR1lUdEJRVU5pTEdGQlFXRXNiVUpCUVU4c1EwRkJReXd3UlVGQmEwSTdRVUZEZGtNc2FVSkJRV2xDTEcxQ1FVRlBMRU5CUVVNc01FVkJRV3RDTzBGQlF6TkRMSEZDUVVGeFFpeHRRa0ZCVHl4RFFVRkRMR3RHUVVGelFqdEJRVU51UkRzN1FVRkZRVHRCUVVOQkxHMUNRVUZQTEVOQlFVTXNkMFJCUVZNc2NVSkJRWEZDTEcxQ1FVRlBMRU5CUVVNc2MwUkJRVkVzTkVKQlFUUkNMR0ZCUVdFc1JVRkJSVHM3UVVGRmFrYzdRVUZEUVN4eFJFRkJjVVFzTkVKQlFUUkNPMEZCUTJwR08wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTmFZVHRCUVVOaUxHTkJRV01zYlVKQlFVOHNRMEZCUXl3NFJFRkJXVHRCUVVOc1F5eGpRVUZqTEcxQ1FVRlBMRU5CUVVNc05FUkJRVmM3UVVGRGFrTXNaVUZCWlN4dFFrRkJUeXhEUVVGRExHZEZRVUZoTzBGQlEzQkRMRmRCUVZjc2JVSkJRVThzUTBGQlF5eDNSRUZCVXp0QlFVTTFRaXhuUWtGQlowSXNiVUpCUVU4c1EwRkJReXhyUlVGQll6dEJRVU4wUXl4clFrRkJhMElzYlVKQlFVOHNRMEZCUXl4elJVRkJaMEk3UVVGRE1VTXNjVUpCUVhGQ0xHMUNRVUZQTEVOQlFVTXNhMFpCUVhOQ08wRkJRMjVFTEhGQ1FVRnhRaXh0UWtGQlR5eERRVUZETEc5RlFVRmxPMEZCUXpWRExHVkJRV1VzYlVKQlFVOHNRMEZCUXl4elJFRkJVVHRCUVVNdlFpdzRRMEZCT0VNN1FVRkRPVU03UVVGRFFUdEJRVU5CT3p0QlFVVkJMRGhDUVVFNFFpeGhRVUZoT3p0QlFVVXpRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNlVU5CUVhsRExHOURRVUZ2UXp0QlFVTTNSU3cyUTBGQk5rTXNiME5CUVc5RE8wRkJRMnBHTEV0QlFVc3NORUpCUVRSQ0xHOURRVUZ2UXp0QlFVTnlSVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWjBKQlFXZENMRzFDUVVGdFFqdEJRVU51UXp0QlFVTkJPMEZCUTBFc2EwTkJRV3RETERKQ1FVRXlRanRCUVVNM1JEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenRCUTNCRlFUdEJRVU5CTEZWQlFWVTdRVUZEVmpzN096czdPenM3T3pzN08wRkRSa0U3T3pzN096czdPenM3T3p0QlEwRkJPenM3T3pzN096czdPenM3TzBGRFFXRTdRVUZEWWp0QlFVTkJMR3RDUVVGclFpeHRRa0ZCVHl4RFFVRkRMSE5GUVVGblFqdEJRVU14UXl4alFVRmpMRzFDUVVGUExFTkJRVU1zYzBWQlFXZENPMEZCUTNSRExGZEJRVmNzYlVKQlFVOHNRMEZCUXl4elJVRkJaMEk3UVVGRGJrTXNWVUZCVlN4dFFrRkJUeXhEUVVGRExHOUZRVUZsTzBGQlEycERMR1ZCUVdVc2JVSkJRVThzUTBGQlF5eHJSVUZCWXp0QlFVTnlReXhqUVVGakxHMUNRVUZQTEVOQlFVTXNPRVJCUVZrN1FVRkRiRU03TzBGQlJVRTdRVUZEUVN3MlFrRkJOa0lzYlVKQlFVOHNRMEZCUXl3d1JFRkJWVHRCUVVNdlF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h2UTBGQmIwTXNWVUZCVlN4RlFVRkZPMEZCUTJoRUxHMUNRVUZ0UWl4elEwRkJjME03UVVGRGVrUXNRMEZCUXl4eFEwRkJjVU03UVVGRGRFTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTEVOQlFVTTdPenM3T3pzN096czdPenRCUTNKRFJEdEJRVU5CTEdWQlFXVXNiVUpCUVU4c1EwRkJReXhyUlVGQll6dEJRVU55UXl4VlFVRlZMRzFDUVVGUExFTkJRVU1zYjBWQlFXVTdRVUZEYWtNc2EwSkJRV3RDTEcxQ1FVRlBMRU5CUVVNc01FVkJRV3RDTzBGQlF6VkRMR1ZCUVdVc2JVSkJRVThzUTBGQlF5eHZSVUZCWlR0QlFVTjBReXg1UWtGQmVVSTdRVUZEZWtJN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaVUZCWlN4dFFrRkJUeXhEUVVGRExHOUZRVUZsTzBGQlEzUkRPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGTEcxQ1FVRlBMRU5CUVVNc2QwUkJRVk03UVVGRGJrSXNOa0pCUVRaQ08wRkJRemRDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHM3T3pzN096czdPenM3TzBGRGVFTkJMR1ZCUVdVc2JVSkJRVThzUTBGQlF5eHJSVUZCWXp0QlFVTnlReXh4UWtGQmNVSXNiVUpCUVU4c1EwRkJReXcwUlVGQmJVSTdRVUZEYUVRc2EwSkJRV3RDTEcxQ1FVRlBMRU5CUVVNc2QwVkJRV2xDTzBGQlF6TkRPenRCUVVWQkxGbEJRVmtzYlVKQlFVOHNRMEZCUXl4elJVRkJaMEk3UVVGRGNFTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWNzV1VGQldUdEJRVU5tTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVObVFTeFRRVUZUTEcxQ1FVRlBMRU5CUVVNc2EwVkJRV003UVVGREwwSXNaVUZCWlN4dFFrRkJUeXhEUVVGRExHdEZRVUZqTzBGQlEzSkRMR05CUVdNc2JVSkJRVThzUTBGQlF5eHpSVUZCWjBJN08wRkJSWFJETEdsQ1FVRnBRaXh0UWtGQlR5eERRVUZETEhORlFVRm5RanRCUVVONlF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdRVU5hUVRzN096czdPenM3T3pzN08wRkRRVUU3UVVGRFFTeFZRVUZWTEcxQ1FVRlBMRU5CUVVNc2MwUkJRVkU3UVVGRE1VSXNaVUZCWlN4dFFrRkJUeXhEUVVGRExHdEZRVUZqTzBGQlEzSkRMR1ZCUVdVc2JVSkJRVThzUTBGQlF5eHZSVUZCWlR0QlFVTjBRenM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU96czdPenM3T3pzN096czdRVU5hUVN4VlFVRlZMRzFDUVVGUExFTkJRVU1zYzBSQlFWRTdRVUZETVVJc1owSkJRV2RDTEcxQ1FVRlBMRU5CUVVNc2IwVkJRV1U3UVVGRGRrTXNiVUpCUVcxQ0xHMUNRVUZQTEVOQlFVTXNORVZCUVcxQ08wRkJRemxETEdWQlFXVXNiVUpCUVU4c1EwRkJReXh2UlVGQlpUczdRVUZGZEVNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdRVU5vUWtFN1FVRkRRU3haUVVGWkxHMUNRVUZQTEVOQlFVTXNkMFpCUVhsQ08wRkJRemRETEd0Q1FVRnJRaXh0UWtGQlR5eERRVUZETERCRlFVRnJRanM3UVVGRk5VTTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVOT1FTeGpRVUZqT3pzN096czdPenM3T3pzN1FVTkJaRHRCUVVOQkxHTkJRV01zYlVKQlFVOHNRMEZCUXl3MFJFRkJWenRCUVVOcVF5eFhRVUZYTEcxQ1FVRlBMRU5CUVVNc2QwUkJRVk03UVVGRE5VSXNXVUZCV1N4dFFrRkJUeXhEUVVGRExEQkVRVUZWTzBGQlF6bENPMEZCUTBFc05rSkJRVFpDTzBGQlF6ZENPMEZCUTBFN1FVRkRRU3h4UkVGQmNVUXNUMEZCVHl4RlFVRkZPMEZCUXpsRU96czdPenM3T3pzN096czdRVU5VUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN1FVTlFRU3hoUVVGaExHMUNRVUZQTEVOQlFVTXNORVJCUVZjN1FVRkRhRU1zVjBGQlZ5eHRRa0ZCVHl4RFFVRkRMSGRFUVVGVE8wRkJRelZDTEZWQlFWVXNiVUpCUVU4c1EwRkJReXh6UkVGQlVUdEJRVU14UWl4VlFVRlZMRzFDUVVGUExFTkJRVU1zYzBSQlFWRTdRVUZETVVJc1owSkJRV2RDTEcxQ1FVRlBMRU5CUVVNc2IwWkJRWFZDTzBGQlF5OURPMEZCUTBFN08wRkJSVUVzYlVKQlFVOHNRMEZCUXl4M1JFRkJVenRCUVVOcVFqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenRCUVVORU8wRkJRMEVzUTBGQlF6czdPenM3T3pzN096czdPMEZET1VKRUxGVkJRVlVzYlVKQlFVOHNRMEZCUXl4clJVRkJZenRCUVVOb1F5eFZRVUZWTEcxQ1FVRlBMRU5CUVVNc2MwUkJRVkU3UVVGRE1VSXNWVUZCVlN4dFFrRkJUeXhEUVVGRExITkVRVUZST3p0QlFVVXhRanRCUVVOQkxHOUZRVUZ2UlN4cFEwRkJhVU03UVVGRGNrYzdPenM3T3pzN096czdPenRCUTA1QkxHRkJRV0VzYlVKQlFVOHNRMEZCUXl3MFJFRkJWenRCUVVOb1F5eFZRVUZWTEcxQ1FVRlBMRU5CUVVNc2MwUkJRVkU3UVVGRE1VSTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVOS1FTeFhRVUZYTEcxQ1FVRlBMRU5CUVVNc2QwUkJRVk03UVVGRE5VSXNZVUZCWVN4dFFrRkJUeXhEUVVGRExEUkVRVUZYTzBGQlEyaERPMEZCUTBFc2EwUkJRV3RFT3p0QlFVVnNSRHRCUVVOQkxIRkZRVUZ4UlR0QlFVTnlSU3hEUVVGRE8wRkJRMFE3UVVGRFFTeFJRVUZSTEcxQ1FVRlBMRU5CUVVNc09FUkJRVms3UVVGRE5VSTdRVUZEUVN4RFFVRkRPenM3T3pzN096czdPenM3UVVOWVJDeG5Ra0ZCWjBJc2JVSkJRVThzUTBGQlF5eHZSVUZCWlR0QlFVTjJRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenRCUTA1Qk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN08wRkRURUU3UVVGRFFTeGpRVUZqTEcxQ1FVRlBMRU5CUVVNc09FUkJRVms3UVVGRGJFTXNZMEZCWXl4dFFrRkJUeXhEUVVGRExEaEVRVUZaTzBGQlEyeERPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3TzBGRFRFRTdRVUZEUVN4blFrRkJaMElzYlVKQlFVOHNRMEZCUXl4dlJVRkJaVHRCUVVOMlF6dEJRVU5CTzBGQlEwRXNNa1JCUVRKRU8wRkJRek5FT3pzN096czdPenM3T3pzN1FVTk1RVHRCUVVOQkxHTkJRV01zYlVKQlFVOHNRMEZCUXl3NFJFRkJXVHRCUVVOc1F6dEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenRCUTBwQk8wRkJRMEVzWlVGQlpTeHRRa0ZCVHl4RFFVRkRMR3RGUVVGak8wRkJRM0pETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN1FVTllRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN1FVTktRU3haUVVGWkxHMUNRVUZQTEVOQlFVTXNORVJCUVZjN1FVRkRMMElzVlVGQlZTeHRRa0ZCVHl4RFFVRkRMSE5FUVVGUk8wRkJRekZDTEdGQlFXRXNiVUpCUVU4c1EwRkJReXcwUkVGQlZ6dEJRVU5vUXpzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN096czdPenM3T3pzN096dEJRMVpoTzBGQlEySXNkVUpCUVhWQ0xHMUNRVUZQTEVOQlFVTXNiMFpCUVhWQ08wRkJRM1JFTEZkQlFWY3NiVUpCUVU4c1EwRkJReXhyUlVGQll6dEJRVU5xUXl4blFrRkJaMElzYlVKQlFVOHNRMEZCUXl4clJVRkJZenRCUVVOMFF5eG5Ra0ZCWjBJc2JVSkJRVThzUTBGQlF5eHZSVUZCWlRzN1FVRkZka003UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzYlVKQlFVOHNRMEZCUXl4elJVRkJaMEk3UVVGRGVrTXNaME5CUVdkRE8wRkJRMmhETEdOQlFXTTdRVUZEWkN4cFFrRkJhVUk3UVVGRGFrSTdRVUZEUVN4RFFVRkRPMEZCUTBRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE96dEJRVVZFTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdRVU5xUTBFN1FVRkRRU3hqUVVGakxHMUNRVUZQTEVOQlFVTXNORVJCUVZjN08wRkJSV3BETERCRFFVRXdReXhUUVVGVExHMUNRVUZQTEVOQlFVTXNNRVZCUVd0Q0xFZEJRVWM3T3pzN096czdPenM3T3p0QlEwaG9SanRCUVVOQkxHVkJRV1VzYlVKQlFVOHNRMEZCUXl4clJVRkJZenRCUVVOeVF5eFpRVUZaTEcxQ1FVRlBMRU5CUVVNc2MwVkJRV2RDT3p0QlFVVndReXh0UWtGQlR5eERRVUZETEc5RlFVRmxPMEZCUTNaQ08wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdPenM3T3pzN096czdPenM3UVVOU1dUdEJRVU5pTzBGQlEwRXNZMEZCWXl4dFFrRkJUeXhEUVVGRExEaEVRVUZaTzBGQlEyeERPMEZCUTBFc1MwRkJTeXh0UWtGQlR5eERRVUZETEhORVFVRlJPMEZCUTNKQ08wRkJRMEVzUlVGQlJTeHRRa0ZCVHl4RFFVRkRMR2RGUVVGaE8wRkJRM1pDTzBGQlEwRXNSMEZCUnp0QlFVTklPenM3T3pzN096czdPenM3UVVOVVFTeHBRa0ZCYVVJc2JVSkJRVThzUTBGQlF5eHJSa0ZCYzBJN1FVRkRMME1zWTBGQll5eHRRa0ZCVHl4RFFVRkRMSE5GUVVGblFqdEJRVU4wUXl4bFFVRmxMRzFDUVVGUExFTkJRVU1zWjBWQlFXRTdRVUZEY0VNc1lVRkJZU3h0UWtGQlR5eERRVUZETERSRVFVRlhPMEZCUTJoRExGZEJRVmNzYlVKQlFVOHNRMEZCUXl4M1JFRkJVenRCUVVNMVFpeG5Ra0ZCWjBJc2JVSkJRVThzUTBGQlF5eHJSVUZCWXp0QlFVTjBReXhWUVVGVkxHMUNRVUZQTEVOQlFVTXNjMFJCUVZFN1FVRkRNVUk3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4dlJFRkJiMFFzZDBKQlFYZENPMEZCUXpWRk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEZWtSUExFbEJRVTFCTEU5QlFXSTdRVUZEU1N4eFFrRkJZenRCUVVGQk96dEJRVU5XTEZOQlFVdERMRlZCUVV3c1IwRkJhMEpETEUxQlFVMHNRMEZCUTBNc1RVRkJVQ3hEUVVGakxFbEJRV1FzUTBGQmJFSTdRVUZEU0RzN1FVRklURHRCUVVGQk8wRkJRVUVzTWtKQlNWY3NRMEZEVGp0QlFVeE1PenRCUVVGQk8wRkJRVUVzU1RzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVU5CUVR0QlFVTkJMRWxCUVVsRExFZEJRVWNzUjBGQlJ5eERRVUZXTEVNc1EwRkRRVHM3UVVGRFFTeEpRVUZKUXl4TFFVRkxMRWRCUVVjc1JVRkJXaXhETEVOQlEwRTdPMEZCUTBFc1NVRkJTVU1zVlVGQlZTeEhRVUZITEVWQlFXcENPMEZCUTBFc1NVRkJTVU1zVDBGQlR5eEhRVUZITEV0QlFXUTdPMEZCUTBFc1UwRkJVME1zUzBGQlZDeEhRVUZwUWp0QlFVTmlMRTFCUVVsRUxFOUJRVW9zUlVGQllUdEJRVU5VTzBGQlEwZzdPMEZCUTBSQkxGTkJRVThzUjBGQlJ5eEpRVUZXTzBGQlEwRkZMRmxCUVZVc1EwRkJReXhaUVVGTk8wRkJRMkpETEZGQlFVazdPMEZCUTBvc1VVRkJTVW9zVlVGQlZTeERRVUZEU3l4TlFVRm1MRVZCUVhWQ08wRkJRMjVDUml4blFrRkJWU3hEUVVGRFF5eEpRVUZFTEVWQlFVOHNRMEZCVUN4RFFVRldPMEZCUTBnc1MwRkdSQ3hOUVVkTE8wRkJRMFJGTEdGQlFVOHNRMEZCUTBNc1QwRkJVaXhEUVVGblFpeE5RVUZvUWp0QlFVTkJUaXhoUVVGUExFZEJRVWNzUzBGQlZqdEJRVU5JTzBGQlEwb3NSMEZVVXl4RlFWTlFMRU5CVkU4c1EwRkJWanRCUVZWSU96dEJRVU5FTEZOQlFWTkhMRWxCUVZRc1IwRkJaMEk3UVVGRFdpeFBRVUZMTEVsQlFVbEpMRU5CUVVNc1IwRkJSeXhEUVVGaUxFVkJRV2RDUVN4RFFVRkRMRWRCUVVkU0xGVkJRVlVzUTBGQlEwc3NUVUZCTDBJc1JVRkJkVU5ITEVOQlFVTXNSMEZCUjBFc1EwRkJReXhIUVVGSExFTkJRUzlETEVWQlFXdEVPMEZCUXpsRExGRkJRVWs3UVVGRFFTeFZRVUZKUXl4WFFVRlhMRWRCUVVkRExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4WlFVRXlRbGdzVlVGQlZTeERRVUZEVVN4RFFVRkVMRU5CUVhKRExFOUJRV3hDTzBGQlEwRXNWVUZCU1Vrc1MwRkJTeXhIUVVGSFdpeFZRVUZWTEVOQlFVTlJMRU5CUVVNc1IwRkJSeXhEUVVGTUxFTkJRWFJDT3p0QlFVTkJMRlZCUVVsRExGZEJRVmNzU1VGQlNVRXNWMEZCVnl4RFFVRkRTU3hWUVVFdlFpeEZRVUV5UXp0QlFVTjJRMG9zYlVKQlFWY3NRMEZCUTBrc1ZVRkJXaXhEUVVGMVFrTXNXVUZCZGtJc1EwRkJiME5HTEV0QlFYQkRMRVZCUVRKRFNDeFhRVUV6UXp0QlFVTkJWQ3hyUWtGQlZTeERRVUZEWlN4TlFVRllMRU5CUVd0Q1VDeERRVUZzUWl4RlFVRnhRaXhEUVVGeVFqdEJRVU5CUVN4VFFVRkRMRWxCUVVrc1EwRkJURHRCUVVOSU8wRkJRMG9zUzBGU1JDeERRVk5CTEU5QlFVOVJMRU5CUVZBc1JVRkJWVHRCUVVOT1ZpeGhRVUZQTEVOQlFVTlhMRWRCUVZJc1EwRkJXU3hwUWtGQldpeEZRVUVyUWtRc1EwRkJMMEk3UVVGRFNEdEJRVU5LTzBGQlEwbzdPMEZCUTBRc1UwRkJVMFVzVjBGQlZDeERRVUZ4UWtNc1NVRkJja0lzUlVGQk1rSkRMRkZCUVROQ0xFVkJRWEZETzBGQlEycERPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQlFTeFZRVUZSTEVsQlFVbEJMRkZCUVZFc1EwRkJRME1zVDBGQlZDeERRVUZwUWl4VlFVRkJWQ3hMUVVGTExFVkJRVWs3UVVGRGJFTXNVVUZCU1VFc1MwRkJTeXhEUVVGRFZTeFJRVUZPTEVsQlFXdENMRU5CUVhSQ0xFVkJRWGxDTzBGQlEzSkNMRlZCUVVsaUxGZEJRVmNzYlVOQlFUUkNWQ3hWUVVGVkxFTkJRVU5MTEUxQlFYWkRMRU5CUVdZN1FVRkRRV01zVlVGQlNTeHRRa0ZCV1ZZc1YwRkJXaXhaUVVGS08wRkJRMEZVTEdkQ1FVRlZMRU5CUVVOMVFpeEpRVUZZTEVOQlFXZENaQ3hYUVVGb1FqdEJRVU5CVkN4blFrRkJWU3hEUVVGRGRVSXNTVUZCV0N4RFFVRm5RbGdzUzBGQmFFSTdRVUZEUVZZc1YwRkJTenRCUVVOU0xFdEJUa1FzVFVGUFN6dEJRVU5FTEZWQlFVbHpRaXhMUVVGTExFTkJRVU5ETEU5QlFVNHNRMEZCWTJJc1MwRkJaQ3hEUVVGS0xFVkJRVEJDTzBGQlEzUkNUeXhaUVVGSkxFZEJRVWRFTEZkQlFWY3NRMEZCUTBNc1NVRkJSQ3hGUVVGUFVDeExRVUZRTEVOQlFXeENPMEZCUTBnc1QwRkdSQ3hOUVVkTE8wRkJRMFJQTEZsQlFVa3NTVUZCU1ZBc1MwRkJVanRCUVVOSU8wRkJRMG83UVVGRFNpeEhRV2hDVnl4RFFVRmFPMEZCYVVKQkxGTkJRVTlQTEVsQlFWQTdRVUZEU0RzN1FVRkRSQ3hUUVVGVFR5eEhRVUZVTEVOQlFXRkRMRWRCUVdJc1JVRkJhMEpETEV0QlFXeENMRVZCUVhORE8wRkJRVUVzYjBOQlFWWlNMRkZCUVZVN1FVRkJWa0VzV1VGQlZUdEJRVUZCT3p0QlFVTnNRenRCUVVOQkxFMUJRVWtzVDBGQlQwOHNSMEZCVUN4TFFVRmxMRlZCUVc1Q0xFVkJRU3RDTzBGQlF6TkNMRkZCUVUxRkxFMUJRVTBzUjBGQlIwWXNSMEZCUnl4RFFVRkRMMElzVFVGQlRTeERRVUZEYTBNc1RVRkJVQ3hEUVVGakxFVkJRV1FzUlVGQmEwSkdMRXRCUVd4Q0xFVkJRWGxDTzBGQlFVVlNMR05CUVZFc1JVRkJVa0U3UVVGQlJpeExRVUY2UWl4RFFVRkVMRU5CUVd4Q0xFTkJSREpDTEVOQlJUTkNPenRCUVVOQkxGRkJRVWxUTEUxQlFVMHNTMEZCU3l4VlFVRm1MRVZCUVRKQ08wRkJRM1pDTEdGQlFVOVVMRkZCUVZBN1FVRkRTQ3hMUVVaRUxFMUJSMHM3UVVGRFJDeGhRVUZSTEZsQlFWazdRVUZEYUVJc1dVRkJTVmNzUjBGQlJ5eEhRVUZIY2tJc1VVRkJVU3hEUVVGRGMwSXNZVUZCVkN4RFFVRjFRaXhMUVVGMlFpeERRVUZXTzBGQlEwRkVMRmRCUVVjc1EwRkJRMFVzVTBGQlNpeEhRVUZuUWtvc1RVRkJhRUk3UVVGRFFTeFpRVUZKU3l4UFFVRlBMRWRCUVVjc1NVRkJaRHM3UVVGRFFTeGxRVUZQYmtNc1MwRkJTeXhEUVVGRFRTeE5RVUZPTEVkQlFXVXNRMEZCZEVJc1JVRkJlVUk3UVVGRGNrSTJRaXhwUWtGQlR5eEhRVUZIYmtNc1MwRkJTeXhEUVVGRGIwTXNSMEZCVGl4RlFVRldPenRCUVVOQkxHTkJRVWxFTEU5QlFVb3NSVUZCWVR0QlFVTlVRU3h0UWtGQlR5eERRVUZEU0N4SFFVRkVMRU5CUVZBN1FVRkRTRHRCUVVOS096dEJRVU5FUnl4bFFVRlBMRWRCUVVjc1NVRkJWanRCUVVOQkxHVkJRVTlJTEVkQlFVY3NRMEZCUTFnc1VVRkJTaXhEUVVGaExFTkJRV0lzUTBGQlVEdEJRVU5JTEU5QldrMHNSVUZCVUR0QlFXRklPMEZCUTBvN08wRkJRMFFzVFVGQlNTeFBRVUZQVHl4SFFVRlFMRXRCUVdVc1VVRkJia0lzUlVGQk5rSTdRVUZEZWtJc1VVRkJTVklzU1VGQlNTeEhRVUZITEVWQlFWZzdRVUZEUVVFc1VVRkJTU3hsUVVGUlVTeEhRVUZTTEVOQlFVbzdRVUZEUVVNc1UwRkJTeXhKUVVGSmFFTXNUVUZCVFN4RFFVRkRkME1zU1VGQlVDeERRVUZaVWl4TFFVRmFMRVZCUVcxQ1VDeFBRVUZ1UWl4RFFVRXlRaXhWUVVGQlowSXNSMEZCUnl4RlFVRkpPMEZCUTNaRExGVkJRVWtzVFVGQlRVTXNTVUZCVGl4RFFVRlhSQ3hIUVVGWUxFTkJRVW9zUlVGQmNVSTdRVUZEYWtJc1dVRkJTVVVzVVVGQlVTd3dRa0ZCYlVKNlF5eEhRVUZITEVWQlFYUkNMRU5CUVZvN1FVRkRRWEZDTEZsQlFVa3NaMEpCUVZOdlFpeFJRVUZVTEVOQlFVbzdPMEZCUTBFc1UwRkJReXhWUVVGVlFTeFJRVUZXTEVWQlFXOUNSaXhIUVVGd1FpeEZRVUY1UWtjc1QwRkJla0lzUlVGQmEwTTdRVUZETDBKNlF5eGxRVUZMTEVOQlFVTjNRaXhKUVVGT0xFTkJRVmNzVlVGQlEydENMRTFCUVVRc1JVRkJXVHRCUVVOdVFpeG5Ra0ZCU1VNc1UwRkJVeXhIUVVGSFRDeEhRVUZITEVOQlFVTk5MRXRCUVVvc1EwRkJWU3hEUVVGV0xFVkJRV0ZETEZkQlFXSXNSVUZCYUVJN1FVRkRRU3huUWtGQlNXeENMRWRCUVVjc1IwRkJSMlVzVFVGQlRTeERRVUZET1VJc1lVRkJVQ3haUVVGNVFqUkNMRkZCUVhwQ0xFOUJRVlk3TzBGQlEwRXNaMEpCUVVsaUxFZEJRVW9zUlVGQlV6dEJRVU5NUVN4cFFrRkJSeXhEUVVGRGJVSXNaMEpCUVVvc1EwRkJjVUpJTEZOQlFYSkNMRVZCUVdkRFJpeFBRVUZvUXp0QlFVTklPMEZCUTBvc1YwRk9SRHRCUVU5SUxGTkJVa1FzUlVGUlIwUXNVVUZTU0N4RlFWRmhSaXhIUVZKaUxFVkJVV3RDVkN4TFFVRkxMRU5CUVVOVExFZEJRVVFzUTBGU2RrSTdRVUZUU0N4UFFWcEVMRTFCWVVzN1FVRkRSR3hDTEZsQlFVa3NaVUZCVVd0Q0xFZEJRVklzWjBKQlFXZENWQ3hMUVVGTExFTkJRVU5UTEVkQlFVUXNRMEZCY2tJc1QwRkJTanRCUVVOSU8wRkJRMG9zUzBGcVFsRXNRMEZCVkR0QlFXdENRV3hDTEZGQlFVa3NTVUZCU1N4SFFVRlNPMEZCUTBGQkxGRkJRVWtzUjBGQlIwUXNWMEZCVnl4RFFVRkRReXhKUVVGRUxFVkJRVTlETEZGQlFWQXNRMEZCYkVJN1FVRkRRVVFzVVVGQlNTeG5Ra0ZCVTFFc1IwRkJWQ3hOUVVGS08wRkJRMEVzVjBGQlQxSXNTVUZCVUR0QlFVTklPenRCUVVORUxGRkJRVTBzU1VGQlNUSkNMRXRCUVVvc1owZEJRVzlEYmtJc1IwRkJjRU1zUjBGQlRqdEJRVU5JT3p0QlFVTmpSQ3hyUlVGQlpqdEJRVU5QTEVsQlFVMXhRaXhSUVVGUkxFZEJRVWNzVTBGQldFRXNVVUZCVnp0QlFVRkJMRk5CUVUwc1ZVRkJUanRCUVVGQkxFTkJRV3BDTEVNN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRelZJVURzN1NVRkRjVUpETEZrN1FVRkRha0lzTUVKQlFXTTdRVUZCUVRzN1FVRkRWaXhUUVVGTFF5eFBRVUZNTEVkQlFXVnlSQ3hOUVVGTkxFTkJRVU5ETEUxQlFWQXNRMEZCWXl4SlFVRmtMRU5CUVdZN1FVRkRTRHRCUVVORU8wRkJRMG83UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3TzNWQ1FVTlBjVVFzU3l4RlFVRlBReXhGTEVWQlFVazdRVUZEVml4VlFVRk5ReXhGUVVGRkxFZEJRVWNzU1VGQldEczdRVUZEUVN4VlFVRkpOVUlzUzBGQlN5eERRVUZEUXl4UFFVRk9MRU5CUVdONVFpeExRVUZrTEVOQlFVb3NSVUZCTUVJN1FVRkRkRUlzWVVGQlN5eEpRVUZKTVVNc1EwRkJReXhIUVVGSExFTkJRVklzUlVGQlZ6WkRMRU5CUVVNc1IwRkJSMGdzUzBGQlN5eERRVUZETjBNc1RVRkJNVUlzUlVGQmEwTkhMRU5CUVVNc1IwRkJSelpETEVOQlFYUkRMRVZCUVhsRE4wTXNRMEZCUXl4RlFVRXhReXhGUVVFNFF6dEJRVU14UXpSRExGbEJRVVVzUTBGQlEwVXNSVUZCU0N4RFFVRk5TaXhMUVVGTExFTkJRVU14UXl4RFFVRkVMRU5CUVZnc1JVRkJaMEl5UXl4RlFVRm9RanRCUVVOSU8wRkJRMG9zVDBGS1JDeE5RVXRMTzBGQlEwUXNVMEZCUTBNc1JVRkJSU3hEUVVGRFNDeFBRVUZJTEVOQlFWZERMRXRCUVZnc1RVRkJjMEpGTEVWQlFVVXNRMEZCUTBnc1QwRkJTQ3hEUVVGWFF5eExRVUZZTEVsQlFXOUNMRVZCUVRGRExFTkJRVVFzUlVGQlowUXpRaXhKUVVGb1JDeERRVUZ4UkRSQ0xFVkJRWEpFTzBGQlEwZzdPMEZCUTBRc1lVRkJUME1zUlVGQlVEdEJRVU5JTzBGQlEwUTdRVUZEU2p0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3p0NVFrRkRVMFlzU3l4RlFVRlBReXhGTEVWQlFVazdRVUZEV2l4VlFVRk5ReXhGUVVGRkxFZEJRVWNzU1VGQldEczdRVUZEUVN4bFFVRlRSU3hGUVVGVUxFZEJRV003UVVGRFZrWXNWVUZCUlN4RFFVRkRSeXhIUVVGSUxFTkJRVTlNTEV0QlFWQXNSVUZCWTBrc1JVRkJaRHRCUVVOQlNDeFZRVUZGTEVOQlFVTkxMRXRCUVVnc1EwRkJVMG9zUlVGQlZDeEZRVUZoU3l4VFFVRmlPMEZCUTBnN08wRkJRMFJJTEZGQlFVVXNRMEZCUTBnc1JVRkJTQ3hIUVVGUlFTeEZRVUZTTzBGQlEwRkRMRkZCUVVVc1EwRkJRMFVzUlVGQlNDeERRVUZOU2l4TFFVRk9MRVZCUVdGSkxFVkJRV0k3UVVGRFFTeGhRVUZQUml4RlFVRlFPMEZCUTBnN1FVRkRSRHRCUVVOS08wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN08zZENRVU5SUml4TExFVkJRVTlETEVVc1JVRkJTVHRCUVVOWUxGVkJRVTFETEVWQlFVVXNSMEZCUnl4SlFVRllMRU5CUkZjc1EwRkZXRHM3UVVGRFFTeFZRVUZKUml4TFFVRkxMRWxCUVVsUkxGTkJRV0lzUlVGQmQwSTdRVUZEY0VKT0xGVkJRVVVzUTBGQlEwZ3NUMEZCU0N4SFFVRmhja1FzVFVGQlRTeERRVUZEUXl4TlFVRlFMRU5CUVdNc1NVRkJaQ3hEUVVGaU8wRkJRMEVzWlVGQlQzVkVMRVZCUVZBN1FVRkRTQ3hQUVU1VkxFTkJUMWc3T3p0QlFVTkJMRlZCUVVrMVFpeExRVUZMTEVOQlFVTkRMRTlCUVU0c1EwRkJZM2xDTEV0QlFXUXNRMEZCU2l4RlFVRXdRanRCUVVOMFFpeGhRVUZMTEVsQlFVa3hReXhGUVVGRExFZEJRVWNzUTBGQlVpeEZRVUZYTmtNc1EwRkJReXhIUVVGSFNDeExRVUZMTEVOQlFVTTNReXhOUVVFeFFpeEZRVUZyUTBjc1JVRkJReXhIUVVGSE5rTXNRMEZCZEVNc1JVRkJlVU0zUXl4RlFVRkRMRVZCUVRGRExFVkJRVGhETzBGQlF6RkRORU1zV1VGQlJTeERRVUZEUnl4SFFVRklMRU5CUVU5TUxFdEJRVXNzUTBGQlF6RkRMRVZCUVVRc1EwRkJXaXhGUVVGcFFqSkRMRVZCUVdwQ08wRkJRMGc3TzBGQlEwUXNaVUZCVDBNc1JVRkJVRHRCUVVOSUxFOUJZbFVzUTBGaldEczdPMEZCUTBFc1ZVRkJUVThzUjBGQlJ5eEhRVUZIVUN4RlFVRkZMRU5CUVVOSUxFOUJRVWdzUTBGQlYwTXNTMEZCV0N4RFFVRmFPenRCUVVOQkxGVkJRVWtzUTBGQlExTXNSMEZCVEN4RlFVRlZPMEZCUTA0c1pVRkJUMUFzUlVGQlVEdEJRVU5JT3p0QlFVTkVMRlZCUVVrc1EwRkJRMFFzUlVGQlRDeEZRVUZUTzBGQlEweERMRlZCUVVVc1EwRkJRMGdzVDBGQlNDeERRVUZYUXl4TFFVRllMRWxCUVc5Q0xFbEJRWEJDTzBGQlEwRXNaVUZCVDBVc1JVRkJVRHRCUVVOSUxFOUJkRUpWTEVOQmRVSllPenM3UVVGRFFTeFZRVUZKVVN4RlFVRktPMEZCUTBFc1ZVRkJTWEJFTEVOQlFVTXNSMEZCUjIxRUxFZEJRVWNzUTBGQlEzUkVMRTFCUVZvN08wRkJRMEVzWVVGQlQwY3NRMEZCUXl4RlFVRlNMRVZCUVZrN1FVRkRVbTlFTEZWQlFVVXNSMEZCUjBRc1IwRkJSeXhEUVVGRGJrUXNRMEZCUkN4RFFVRlNPenRCUVVOQkxGbEJRVWx2UkN4RlFVRkZMRXRCUVV0VUxFVkJRVkFzU1VGQllWTXNSVUZCUlN4RFFVRkRWQ3hGUVVGSUxFdEJRVlZCTEVWQlFUTkNMRVZCUVN0Q08wRkJRek5DVVN4aFFVRkhMRU5CUVVNMVF5eE5RVUZLTEVOQlFWZFFMRU5CUVZnc1JVRkJZeXhEUVVGa08wRkJRMEU3UVVGRFNEdEJRVU5LT3p0QlFVTkVMR0ZCUVU4MFF5eEZRVUZRTzBGQlEwZzdRVUZEUkR0QlFVTktPMEZCUTBFN1FVRkRRVHM3T3p0NVFrRkRVMFlzU3l4RlFVRm5RanRCUVVOcVFpeFZRVUZOUlN4RlFVRkZMRWRCUVVjc1NVRkJXRHRCUVVOQkxGVkJRVWxQTEVkQlFVY3NSMEZCUjFBc1JVRkJSU3hEUVVGRFNDeFBRVUZJTEVOQlFWZERMRXRCUVZnc1EwRkJWanM3UVVGRFFTeFZRVUZKVXl4SFFVRktMRVZCUVZNN1FVRkRURUVzVjBGQlJ5eEhRVUZIUVN4SFFVRkhMRU5CUVVOMFJDeE5RVUZLTEVkQlFXRXNRMEZCWWl4SFFVRnBRbmRFTEhGRVFVRlBMRU5CUVVOR0xFZEJRVVFzUTBGQmVFSXNSMEZCWjBOQkxFZEJRWFJETzBGQlEwRXNXVUZCVFVjc1NVRkJTU3hIUVVGSFJDeHhSRUZCVHl4RFFVRkRTaXhUUVVGRUxFVkJRVmtzUTBGQldpeERRVUZ3UWp0QlFVTkJMRmxCUVVscVFpeFBRVUZLT3p0QlFVTkJMR0ZCUVVzc1NVRkJTV2hETEVOQlFVTXNSMEZCUnl4RFFVRlNMRVZCUVZjMlF5eERRVUZETEVkQlFVZE5MRWRCUVVjc1EwRkJRM1JFTEUxQlFYaENMRVZCUVdkRFJ5eERRVUZETEVkQlFVYzJReXhEUVVGd1F5eEZRVUYxUXpkRExFTkJRVU1zUlVGQmVFTXNSVUZCTkVNN1FVRkRlRU1zWTBGQlNUdEJRVU5CWjBNc2JVSkJRVThzUjBGQlIyMUNMRWRCUVVjc1EwRkJRMjVFTEVOQlFVUXNRMEZCWWp0QlFVTkJjMFFzWjBKQlFVa3NSMEZCUjNSQ0xFOUJRVThzUTBGQlEyZENMRXRCUVZJc1EwRkJZeXhKUVVGa0xFVkJRVzlDVFN4SlFVRndRaXhEUVVGSUxFZEJRU3RDZEVJc1QwRkJUeXhEUVVGRGRVSXNTVUZCVWl4RFFVRmhMRWxCUVdJc1EwRkJia003UVVGRFNDeFhRVWhFTEVOQlNVRXNUMEZCVHk5RExFTkJRVkFzUlVGQlZUdEJRVU5PVml4dFFrRkJUeXhEUVVGRE1FUXNTMEZCVWl3clFrRkJiME5rTEV0QlFYQkRPMEZCUTBFMVF5eHRRa0ZCVHl4RFFVRkRNRVFzUzBGQlVpeERRVUZqYUVRc1EwRkJaRHRCUVVOSU8wRkJRMG83UVVGRFNqczdRVUZEUkN4aFFVRlBiME1zUlVGQlVEdEJRVU5JT3pzN096czdPenM3T3pzN096czdPenM3UVVOd1IwdzdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFR5eFRRVUZUWVN4TlFVRlVMRU5CUVdkQ09VTXNTVUZCYUVJc1JVRkJjMElyUXl4SlFVRjBRaXhGUVVFMFFqdEJRVU12UWtNc2NVUkJRVXNzUTBGQlEwTXNUMEZCUkN4RlFVRlZMRWxCUVZZc1JVRkJaMEpxUkN4SlFVRm9RaXhGUVVGelFpdERMRWxCUVhSQ0xFTkJRVXc3UVVGRFNEczdRVUZEUkN4VFFVRlRSU3hQUVVGVUxFTkJRV2xDYWtRc1NVRkJha0lzUlVGQmRVSXJReXhKUVVGMlFpeEZRVUUyUWp0QlFVTjZRaXhOUVVGSmVrSXNUVUZCVFN4SFFVRkhMMElzVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2RVUXNTVUZCZGtJc1EwRkJZanM3UVVGRFFTeE5RVUZKTEVOQlFVTjZRaXhOUVVGTUxFVkJRV0U3UVVGRFZDeFZRVUZOTEVsQlFVbExMRXRCUVVvc1EwRkJWU3hWUVVGV0xFTkJRVTQ3UVVGRFNEczdRVUZEUkN4TlFVRkpMRTlCUVU4elFpeEpRVUZRTEVsQlFXVXNVVUZCYmtJc1JVRkJOa0k3UVVGRGVrSnpRaXhWUVVGTkxFTkJRVU5TTEZOQlFWQXNSMEZCYlVKa0xFbEJRVzVDTzBGQlEwZ3NSMEZHUkN4TlFVZExPMEZCUTBSelFpeFZRVUZOTEVOQlFVTlNMRk5CUVZBc1IwRkJiVUlzUlVGQmJrSTdRVUZEUVZFc1ZVRkJUU3hEUVVGRGRrSXNWMEZCVUN4RFFVRnRRa01zU1VGQmJrSTdRVUZEU0RzN1FVRkRSQ3hQUVVGTGEwUXNVVUZCVEN4RFFVRmpReXhKUVVGa0xFTkJRVzFDTEdsQ1FVRnVRaXhGUVVGelF6dEJRVU5zUXpkQ0xGVkJRVTBzUlVGQlRrRTdRVUZFYTBNc1IwRkJkRU03UVVGSFNDeERPenM3T3pzN096czdPenM3UVVOMFFrUTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5QTEZOQlFWTnZRaXhQUVVGVUxFTkJRV2xDVlN4SlFVRnFRaXhGUVVGMVFrTXNTMEZCZGtJc1JVRkJPRUk3UVVGRGFrTkJMRTlCUVVzc1IwRkJSMEVzUzBGQlN5eEpRVUZKTEVOQlFXcENPMEZCUTBFc1RVRkJTV2hGTEVOQlFVTXNSMEZCUnl0RUxFbEJRVWtzUTBGQlEyeEZMRTFCUVV3c1IwRkJZMjFGTEV0QlFYUkNPMEZCUTBFc1RVRkJUVU1zUjBGQlJ5eEhRVUZITEVsQlFVbHFSQ3hMUVVGS0xFTkJRVlZvUWl4RFFVRldMRU5CUVZvN08wRkJRMEVzVTBGQlQwRXNRMEZCUXl4RlFVRlNMRVZCUVZrN1FVRkRVbWxGTEU5QlFVY3NRMEZCUTJwRkxFTkJRVVFzUTBGQlNDeEhRVUZUSzBRc1NVRkJTU3hEUVVGREwwUXNRMEZCUXl4SFFVRkhaMFVzUzBGQlRDeERRVUZpTzBGQlEwZzdPMEZCUTBRc1UwRkJUME1zUjBGQlVEdEJRVU5JTzBGQlEwMHNVMEZCVTA0c1MwRkJWQ3hEUVVGbFVDeEZRVUZtTEVWQlFXMUNZeXhQUVVGdVFpeEZRVUZ4UXp0QlFVRkJMRzlEUVVGT1dpeEpRVUZOTzBGQlFVNUJMRkZCUVUwN1FVRkJRVHM3UVVGRGVFTXpSQ3haUVVGVkxFTkJRVU1zV1VGQlRUdEJRVU5pZVVRc1RVRkJSU3hEUVVGRFJ5eEpRVUZJTEU5QlFVRklMRVZCUVVVc1IwRkJUV01zVDBGQlRpeFRRVUZyUWxvc1NVRkJiRUlzUlVGQlJqdEJRVU5JTEVkQlJsTXNSVUZGVUN4RFFVWlBMRU5CUVZZN1FVRkhTQ3hET3pzN096czdPenM3T3pzN1FVTnNRa1E3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFpTeFRRVUZUWVN4WFFVRlVMRWRCUVhWQ08wRkJRMnhEY2tVc1UwRkJUeXhEUVVGRFZ5eEhRVUZTTEVOQlFWa3NhVUpCUVZvN1FVRkRRU3hQUVVGTGVVUXNUMEZCVEN4SFFVRmxMRWxCUVVsb1JpeHhSRUZCU2l4RlFVRm1PMEZCUTBFc1QwRkJTekpGTEZGQlFVd3NSMEZCWjBJc1NVRkJTWEpDTEc5RVFVRktMRVZCUVdoQ096dEJRVU5CTEU5QlFVczBRaXhMUVVGTU96dEJRVU5CTEZOQlFVOHNTVUZCVUR0QlFVTklPMEZCUTBRc1NVRkJTVGxGTEVkQlFVY3NSMEZCUnl4RFFVRldPMEZCUTBFc1NVRkJTU3RGTEUxQlFVMHNSMEZCUnl4SlFVRmlPMEZCUTBGR0xGZEJRVmNzUTBGQlEwY3NVMEZCV2l4SFFVRjNRanRCUVVOd1FrTXNZVUZCVnl4RlFVRkZTaXhYUVVSUE8wRkJSWEJDVml4UlFVRk5MRVZCUVU1QkxHMUVRVVp2UWp0QlFVZHdRbGNzVDBGSWIwSXNiVUpCUjFvN1FVRkJRVHM3UVVGRFNpeFRRVUZMVUN4UlFVRk1MRU5CUVdObUxFVkJRV1FzUTBGQmFVSXNhVUpCUVdwQ0xFVkJRVzlETEZWQlFVTXdRaXhKUVVGRUxFVkJRVlU3UVVGRE1VTXhSU3hoUVVGUExFTkJRVU5YTEVkQlFWSXNRMEZCV1N4cFFrRkJXaXhGUVVFclFpdEVMRWxCUVM5Q0xFVkJSREJETEVOQlJURkRPenRCUVVOQkxGVkJRVWxETEZOQlFWTXNSMEZCUjNKR0xFMUJRVTBzUTBGQlEwTXNUVUZCVUN4RFFVRmpMRWxCUVdRc1EwRkJhRUk3UVVGRFFXOUdMR1ZCUVZNc1EwRkJRM2hETEUxQlFWWXNSMEZCYlVKMVF5eEpRVUZKTEVOQlFVTjJReXhOUVVGNFFqdEJRVU5CTEZkQlFVa3NRMEZCUTJsRExFOUJRVXdzUTBGQllTOUZMRlZCUVdJc1EwRkJkMEpITEVkQlFVY3NSVUZCTTBJc1NVRkJhVU50Uml4VFFVRnFRenRCUVVOSUxFdEJUa1E3UVVGUFNDeEhRVmh0UWp0QlFWbHdRa01zVVVGYWIwSXNiMEpCV1Znc1EwRkRVanRCUVdKdFFpeERRVUY0UWp0QlFXVkJVQ3hYUVVGWExFTkJRVU16UWl4WlFVRmFMRWRCUVRKQ1FTeHZSRUZCTTBJN1FVRkRRVEpDTEZkQlFWY3NRMEZCUTJwRUxFZEJRVm9zUjBGQmEwSkJMSEZFUVVGc1FqdEJRVU5CYVVRc1YwRkJWeXhEUVVGRE5VSXNVVUZCV2l4SFFVRjFRa0VzYzBSQlFYWkNMRU1pTENKbWFXeGxJam9pU0dsRGIyMXdiMjVsYm5RdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0tWeHVYSFJjZEdSbFptbHVaU2hiWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHVjRjRzl5ZEhOYlhDSklhVU52YlhCdmJtVnVkRndpWFNBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpWeHVYSFJjZEhKdmIzUmJYQ0pJYVVOdmJYQnZibVZ1ZEZ3aVhTQTlJR1poWTNSdmNua29LVHRjYm4wcEtIZHBibVJ2ZHl3Z1puVnVZM1JwYjI0b0tTQjdYRzV5WlhSMWNtNGdJaXdpSUZ4MEx5OGdWR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwZG1GeUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNZ1BTQjdmVHRjYmx4dUlGeDBMeThnVkdobElISmxjWFZwY21VZ1puVnVZM1JwYjI1Y2JpQmNkR1oxYm1OMGFXOXVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvYlc5a2RXeGxTV1FwSUh0Y2JseHVJRngwWEhRdkx5QkRhR1ZqYXlCcFppQnRiMlIxYkdVZ2FYTWdhVzRnWTJGamFHVmNiaUJjZEZ4MGFXWW9hVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHBJSHRjYmlCY2RGeDBYSFJ5WlhSMWNtNGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVaWGh3YjNKMGN6dGNiaUJjZEZ4MGZWeHVJRngwWEhRdkx5QkRjbVZoZEdVZ1lTQnVaWGNnYlc5a2RXeGxJQ2hoYm1RZ2NIVjBJR2wwSUdsdWRHOGdkR2hsSUdOaFkyaGxLVnh1SUZ4MFhIUjJZWElnYlc5a2RXeGxJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBnUFNCN1hHNGdYSFJjZEZ4MGFUb2diVzlrZFd4bFNXUXNYRzRnWEhSY2RGeDBiRG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBaWGh3YjNKMGN6b2dlMzFjYmlCY2RGeDBmVHRjYmx4dUlGeDBYSFF2THlCRmVHVmpkWFJsSUhSb1pTQnRiMlIxYkdVZ1puVnVZM1JwYjI1Y2JpQmNkRngwYlc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1WTJGc2JDaHRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNWNiaUJjZEZ4MEx5OGdSbXhoWnlCMGFHVWdiVzlrZFd4bElHRnpJR3h2WVdSbFpGeHVJRngwWEhSdGIyUjFiR1V1YkNBOUlIUnlkV1U3WEc1Y2JpQmNkRngwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUlGeDBmVnh1WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsY3lCdlltcGxZM1FnS0Y5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4cFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQnRiMlIxYkdWek8xeHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUdkbGRIUmxjaUJtZFc1amRHbHZiaUJtYjNJZ2FHRnliVzl1ZVNCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6TENCdVlXMWxMQ0JuWlhSMFpYSXBJSHRjYmlCY2RGeDBhV1lvSVY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aGxlSEJ2Y25SekxDQnVZVzFsS1NrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0J1WVcxbExDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJR2RsZERvZ1oyVjBkR1Z5SUgwcE8xeHVJRngwWEhSOVhHNGdYSFI5TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWDE5bGMwMXZaSFZzWlNCdmJpQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5JZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SektTQjdYRzRnWEhSY2RHbG1LSFI1Y0dWdlppQlRlVzFpYjJ3Z0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5a2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjc0lIc2dkbUZzZFdVNklDZE5iMlIxYkdVbklIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0FuWDE5bGMwMXZaSFZzWlNjc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCamNtVmhkR1VnWVNCbVlXdGxJRzVoYldWemNHRmpaU0J2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBeE9pQjJZV3gxWlNCcGN5QmhJRzF2WkhWc1pTQnBaQ3dnY21WeGRXbHlaU0JwZEZ4dUlGeDBMeThnYlc5a1pTQW1JREk2SUcxbGNtZGxJR0ZzYkNCd2NtOXdaWEowYVdWeklHOW1JSFpoYkhWbElHbHVkRzhnZEdobElHNXpYRzRnWEhRdkx5QnRiMlJsSUNZZ05Eb2djbVYwZFhKdUlIWmhiSFZsSUhkb1pXNGdZV3h5WldGa2VTQnVjeUJ2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBNGZERTZJR0psYUdGMlpTQnNhV3RsSUhKbGNYVnBjbVZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVkQ0E5SUdaMWJtTjBhVzl1S0haaGJIVmxMQ0J0YjJSbEtTQjdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXhLU0IyWVd4MVpTQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvZG1Gc2RXVXBPMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdPQ2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhScFppZ29iVzlrWlNBbUlEUXBJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RtRnNkV1VnSmlZZ2RtRnNkV1V1WDE5bGMwMXZaSFZzWlNrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUjJZWElnYm5NZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0c1MWJHd3BPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklvYm5NcE8xeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29ibk1zSUNka1pXWmhkV3gwSnl3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQjJZV3gxWlRvZ2RtRnNkV1VnZlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeUlDWW1JSFI1Y0dWdlppQjJZV3gxWlNBaFBTQW5jM1J5YVc1bkp5a2dabTl5S0haaGNpQnJaWGtnYVc0Z2RtRnNkV1VwSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaHVjeXdnYTJWNUxDQm1kVzVqZEdsdmJpaHJaWGtwSUhzZ2NtVjBkWEp1SUhaaGJIVmxXMnRsZVYwN0lIMHVZbWx1WkNodWRXeHNMQ0JyWlhrcEtUdGNiaUJjZEZ4MGNtVjBkWEp1SUc1ek8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1WEc0Z1hIUXZMeUJNYjJGa0lHVnVkSEo1SUcxdlpIVnNaU0JoYm1RZ2NtVjBkWEp1SUdWNGNHOXlkSE5jYmlCY2RISmxkSFZ5YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjeUE5SUZ3aUxpOXpjbU12YVc1a1pYZ3VkSE5jSWlrN1hHNGlMQ0ptZFc1amRHbHZiaUJmWTJ4aGMzTkRZV3hzUTJobFkyc29hVzV6ZEdGdVkyVXNJRU52Ym5OMGNuVmpkRzl5S1NCN1hHNGdJR2xtSUNnaEtHbHVjM1JoYm1ObElHbHVjM1JoYm1ObGIyWWdRMjl1YzNSeWRXTjBiM0lwS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loY0lrTmhibTV2ZENCallXeHNJR0VnWTJ4aGMzTWdZWE1nWVNCbWRXNWpkR2x2Ymx3aUtUdGNiaUFnZlZ4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjlqYkdGemMwTmhiR3hEYUdWamF6c2lMQ0ptZFc1amRHbHZiaUJmWkdWbWFXNWxVSEp2Y0dWeWRHbGxjeWgwWVhKblpYUXNJSEJ5YjNCektTQjdYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2NISnZjSE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNCMllYSWdaR1Z6WTNKcGNIUnZjaUE5SUhCeWIzQnpXMmxkTzF4dUlDQWdJR1JsYzJOeWFYQjBiM0l1Wlc1MWJXVnlZV0pzWlNBOUlHUmxjMk55YVhCMGIzSXVaVzUxYldWeVlXSnNaU0I4ZkNCbVlXeHpaVHRjYmlBZ0lDQmtaWE5qY21sd2RHOXlMbU52Ym1acFozVnlZV0pzWlNBOUlIUnlkV1U3WEc0Z0lDQWdhV1lnS0Z3aWRtRnNkV1ZjSWlCcGJpQmtaWE5qY21sd2RHOXlLU0JrWlhOamNtbHdkRzl5TG5keWFYUmhZbXhsSUQwZ2RISjFaVHRjYmlBZ0lDQlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvZEdGeVoyVjBMQ0JrWlhOamNtbHdkRzl5TG10bGVTd2daR1Z6WTNKcGNIUnZjaWs3WEc0Z0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1gyTnlaV0YwWlVOc1lYTnpLRU52Ym5OMGNuVmpkRzl5TENCd2NtOTBiMUJ5YjNCekxDQnpkR0YwYVdOUWNtOXdjeWtnZTF4dUlDQnBaaUFvY0hKdmRHOVFjbTl3Y3lrZ1gyUmxabWx1WlZCeWIzQmxjblJwWlhNb1EyOXVjM1J5ZFdOMGIzSXVjSEp2ZEc5MGVYQmxMQ0J3Y205MGIxQnliM0J6S1R0Y2JpQWdhV1lnS0hOMFlYUnBZMUJ5YjNCektTQmZaR1ZtYVc1bFVISnZjR1Z5ZEdsbGN5aERiMjV6ZEhKMVkzUnZjaXdnYzNSaGRHbGpVSEp2Y0hNcE8xeHVJQ0J5WlhSMWNtNGdRMjl1YzNSeWRXTjBiM0k3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdYMk55WldGMFpVTnNZWE56T3lJc0ltWjFibU4wYVc5dUlGOTBlWEJsYjJZb2IySnFLU0I3WEc0Z0lGd2lRR0poWW1Wc0wyaGxiSEJsY25NZ0xTQjBlWEJsYjJaY0lqdGNibHh1SUNCcFppQW9kSGx3Wlc5bUlGTjViV0p2YkNBOVBUMGdYQ0ptZFc1amRHbHZibHdpSUNZbUlIUjVjR1Z2WmlCVGVXMWliMnd1YVhSbGNtRjBiM0lnUFQwOUlGd2ljM2x0WW05c1hDSXBJSHRjYmlBZ0lDQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlGOTBlWEJsYjJZZ1BTQm1kVzVqZEdsdmJpQmZkSGx3Wlc5bUtHOWlhaWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFI1Y0dWdlppQnZZbW83WEc0Z0lDQWdmVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjkwZVhCbGIyWWdQU0JtZFc1amRHbHZiaUJmZEhsd1pXOW1LRzlpYWlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUc5aWFpQW1KaUIwZVhCbGIyWWdVM2x0WW05c0lEMDlQU0JjSW1aMWJtTjBhVzl1WENJZ0ppWWdiMkpxTG1OdmJuTjBjblZqZEc5eUlEMDlQU0JUZVcxaWIyd2dKaVlnYjJKcUlDRTlQU0JUZVcxaWIyd3VjSEp2ZEc5MGVYQmxJRDhnWENKemVXMWliMnhjSWlBNklIUjVjR1Z2WmlCdlltbzdYRzRnSUNBZ2ZUdGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQmZkSGx3Wlc5bUtHOWlhaWs3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdYM1I1Y0dWdlpqc2lMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJQ2hwZENrZ2UxeHVJQ0JwWmlBb2RIbHdaVzltSUdsMElDRTlJQ2RtZFc1amRHbHZiaWNwSUhSb2NtOTNJRlI1Y0dWRmNuSnZjaWhwZENBcklDY2dhWE1nYm05MElHRWdablZ1WTNScGIyNGhKeWs3WEc0Z0lISmxkSFZ5YmlCcGREdGNibjA3WEc0aUxDSXZMeUF5TWk0eExqTXVNekVnUVhKeVlYa3VjSEp2ZEc5MGVYQmxXMEJBZFc1elkyOXdZV0pzWlhOZFhHNTJZWElnVlU1VFEwOVFRVUpNUlZNZ1BTQnlaWEYxYVhKbEtDY3VMMTkzYTNNbktTZ25kVzV6WTI5d1lXSnNaWE1uS1R0Y2JuWmhjaUJCY25KaGVWQnliM1J2SUQwZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsTzF4dWFXWWdLRUZ5Y21GNVVISnZkRzliVlU1VFEwOVFRVUpNUlZOZElEMDlJSFZ1WkdWbWFXNWxaQ2tnY21WeGRXbHlaU2duTGk5ZmFHbGtaU2NwS0VGeWNtRjVVSEp2ZEc4c0lGVk9VME5QVUVGQ1RFVlRMQ0I3ZlNrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlDaHJaWGtwSUh0Y2JpQWdRWEp5WVhsUWNtOTBiMXRWVGxORFQxQkJRa3hGVTExYmEyVjVYU0E5SUhSeWRXVTdYRzU5TzF4dUlpd2lkbUZ5SUdselQySnFaV04wSUQwZ2NtVnhkV2x5WlNnbkxpOWZhWE10YjJKcVpXTjBKeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUNocGRDa2dlMXh1SUNCcFppQW9JV2x6VDJKcVpXTjBLR2wwS1NrZ2RHaHliM2NnVkhsd1pVVnljbTl5S0dsMElDc2dKeUJwY3lCdWIzUWdZVzRnYjJKcVpXTjBJU2NwTzF4dUlDQnlaWFIxY200Z2FYUTdYRzU5TzF4dUlpd2lMeThnWm1Gc2MyVWdMVDRnUVhKeVlYa2phVzVrWlhoUFpseHVMeThnZEhKMVpTQWdMVDRnUVhKeVlYa2phVzVqYkhWa1pYTmNiblpoY2lCMGIwbFBZbXBsWTNRZ1BTQnlaWEYxYVhKbEtDY3VMMTkwYnkxcGIySnFaV04wSnlrN1hHNTJZWElnZEc5TVpXNW5kR2dnUFNCeVpYRjFhWEpsS0NjdUwxOTBieTFzWlc1bmRHZ25LVHRjYm5aaGNpQjBiMEZpYzI5c2RYUmxTVzVrWlhnZ1BTQnlaWEYxYVhKbEtDY3VMMTkwYnkxaFluTnZiSFYwWlMxcGJtUmxlQ2NwTzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlBb1NWTmZTVTVEVEZWRVJWTXBJSHRjYmlBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNna2RHaHBjeXdnWld3c0lHWnliMjFKYm1SbGVDa2dlMXh1SUNBZ0lIWmhjaUJQSUQwZ2RHOUpUMkpxWldOMEtDUjBhR2x6S1R0Y2JpQWdJQ0IyWVhJZ2JHVnVaM1JvSUQwZ2RHOU1aVzVuZEdnb1R5NXNaVzVuZEdncE8xeHVJQ0FnSUhaaGNpQnBibVJsZUNBOUlIUnZRV0p6YjJ4MWRHVkpibVJsZUNobWNtOXRTVzVrWlhnc0lHeGxibWQwYUNrN1hHNGdJQ0FnZG1GeUlIWmhiSFZsTzF4dUlDQWdJQzh2SUVGeWNtRjVJMmx1WTJ4MVpHVnpJSFZ6WlhNZ1UyRnRaVlpoYkhWbFdtVnlieUJsY1hWaGJHbDBlU0JoYkdkdmNtbDBhRzFjYmlBZ0lDQXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXVaWGgwTFd4cGJtVWdibTh0YzJWc1ppMWpiMjF3WVhKbFhHNGdJQ0FnYVdZZ0tFbFRYMGxPUTB4VlJFVlRJQ1ltSUdWc0lDRTlJR1ZzS1NCM2FHbHNaU0FvYkdWdVozUm9JRDRnYVc1a1pYZ3BJSHRjYmlBZ0lDQWdJSFpoYkhWbElEMGdUMXRwYm1SbGVDc3JYVHRjYmlBZ0lDQWdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMVzVsZUhRdGJHbHVaU0J1YnkxelpXeG1MV052YlhCaGNtVmNiaUFnSUNBZ0lHbG1JQ2gyWVd4MVpTQWhQU0IyWVd4MVpTa2djbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdMeThnUVhKeVlYa2phVzVrWlhoUFppQnBaMjV2Y21WeklHaHZiR1Z6TENCQmNuSmhlU05wYm1Oc2RXUmxjeUF0SUc1dmRGeHVJQ0FnSUgwZ1pXeHpaU0JtYjNJZ0tEdHNaVzVuZEdnZ1BpQnBibVJsZURzZ2FXNWtaWGdyS3lrZ2FXWWdLRWxUWDBsT1EweFZSRVZUSUh4OElHbHVaR1Y0SUdsdUlFOHBJSHRjYmlBZ0lDQWdJR2xtSUNoUFcybHVaR1Y0WFNBOVBUMGdaV3dwSUhKbGRIVnliaUJKVTE5SlRrTk1WVVJGVXlCOGZDQnBibVJsZUNCOGZDQXdPMXh1SUNBZ0lIMGdjbVYwZFhKdUlDRkpVMTlKVGtOTVZVUkZVeUFtSmlBdE1UdGNiaUFnZlR0Y2JuMDdYRzRpTENJdkx5Qm5aWFIwYVc1bklIUmhaeUJtY205dElERTVMakV1TXk0MklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWRHOVRkSEpwYm1jb0tWeHVkbUZ5SUdOdlppQTlJSEpsY1hWcGNtVW9KeTR2WDJOdlppY3BPMXh1ZG1GeUlGUkJSeUE5SUhKbGNYVnBjbVVvSnk0dlgzZHJjeWNwS0NkMGIxTjBjbWx1WjFSaFp5Y3BPMXh1THk4Z1JWTXpJSGR5YjI1bklHaGxjbVZjYm5aaGNpQkJVa2NnUFNCamIyWW9ablZ1WTNScGIyNGdLQ2tnZXlCeVpYUjFjbTRnWVhKbmRXMWxiblJ6T3lCOUtDa3BJRDA5SUNkQmNtZDFiV1Z1ZEhNbk8xeHVYRzR2THlCbVlXeHNZbUZqYXlCbWIzSWdTVVV4TVNCVFkzSnBjSFFnUVdOalpYTnpJRVJsYm1sbFpDQmxjbkp2Y2x4dWRtRnlJSFJ5ZVVkbGRDQTlJR1oxYm1OMGFXOXVJQ2hwZEN3Z2EyVjVLU0I3WEc0Z0lIUnllU0I3WEc0Z0lDQWdjbVYwZFhKdUlHbDBXMnRsZVYwN1hHNGdJSDBnWTJGMFkyZ2dLR1VwSUhzZ0x5b2daVzF3ZEhrZ0tpOGdmVnh1ZlR0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQW9hWFFwSUh0Y2JpQWdkbUZ5SUU4c0lGUXNJRUk3WEc0Z0lISmxkSFZ5YmlCcGRDQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z0oxVnVaR1ZtYVc1bFpDY2dPaUJwZENBOVBUMGdiblZzYkNBL0lDZE9kV3hzSjF4dUlDQWdJQzh2SUVCQWRHOVRkSEpwYm1kVVlXY2dZMkZ6WlZ4dUlDQWdJRG9nZEhsd1pXOW1JQ2hVSUQwZ2RISjVSMlYwS0U4Z1BTQlBZbXBsWTNRb2FYUXBMQ0JVUVVjcEtTQTlQU0FuYzNSeWFXNW5KeUEvSUZSY2JpQWdJQ0F2THlCaWRXbHNkR2x1VkdGbklHTmhjMlZjYmlBZ0lDQTZJRUZTUnlBL0lHTnZaaWhQS1Z4dUlDQWdJQzh2SUVWVE15QmhjbWQxYldWdWRITWdabUZzYkdKaFkydGNiaUFnSUNBNklDaENJRDBnWTI5bUtFOHBLU0E5UFNBblQySnFaV04wSnlBbUppQjBlWEJsYjJZZ1R5NWpZV3hzWldVZ1BUMGdKMloxYm1OMGFXOXVKeUEvSUNkQmNtZDFiV1Z1ZEhNbklEb2dRanRjYm4wN1hHNGlMQ0oyWVhJZ2RHOVRkSEpwYm1jZ1BTQjdmUzUwYjFOMGNtbHVaenRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlBb2FYUXBJSHRjYmlBZ2NtVjBkWEp1SUhSdlUzUnlhVzVuTG1OaGJHd29hWFFwTG5Oc2FXTmxLRGdzSUMweEtUdGNibjA3WEc0aUxDSjJZWElnWTI5eVpTQTlJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdleUIyWlhKemFXOXVPaUFuTWk0MkxqRXlKeUI5TzF4dWFXWWdLSFI1Y0dWdlppQmZYMlVnUFQwZ0oyNTFiV0psY2ljcElGOWZaU0E5SUdOdmNtVTdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMV3hwYm1VZ2JtOHRkVzVrWldaY2JpSXNJaTh2SUc5d2RHbHZibUZzSUM4Z2MybHRjR3hsSUdOdmJuUmxlSFFnWW1sdVpHbHVaMXh1ZG1GeUlHRkdkVzVqZEdsdmJpQTlJSEpsY1hWcGNtVW9KeTR2WDJFdFpuVnVZM1JwYjI0bktUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdLR1p1TENCMGFHRjBMQ0JzWlc1bmRHZ3BJSHRjYmlBZ1lVWjFibU4wYVc5dUtHWnVLVHRjYmlBZ2FXWWdLSFJvWVhRZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnY21WMGRYSnVJR1p1TzF4dUlDQnpkMmwwWTJnZ0tHeGxibWQwYUNrZ2UxeHVJQ0FnSUdOaGMyVWdNVG9nY21WMGRYSnVJR1oxYm1OMGFXOXVJQ2hoS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWm00dVkyRnNiQ2gwYUdGMExDQmhLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lHTmhjMlVnTWpvZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNoaExDQmlLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabTR1WTJGc2JDaDBhR0YwTENCaExDQmlLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lHTmhjMlVnTXpvZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNoaExDQmlMQ0JqS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWm00dVkyRnNiQ2gwYUdGMExDQmhMQ0JpTENCaktUdGNiaUFnSUNCOU8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb0x5b2dMaTR1WVhKbmN5QXFMeWtnZTF4dUlDQWdJSEpsZEhWeWJpQm1iaTVoY0hCc2VTaDBhR0YwTENCaGNtZDFiV1Z1ZEhNcE8xeHVJQ0I5TzF4dWZUdGNiaUlzSWk4dklEY3VNaTR4SUZKbGNYVnBjbVZQWW1wbFkzUkRiMlZ5WTJsaWJHVW9ZWEpuZFcxbGJuUXBYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJQ2hwZENrZ2UxeHVJQ0JwWmlBb2FYUWdQVDBnZFc1a1pXWnBibVZrS1NCMGFISnZkeUJVZVhCbFJYSnliM0lvWENKRFlXNG5kQ0JqWVd4c0lHMWxkR2h2WkNCdmJpQWdYQ0lnS3lCcGRDazdYRzRnSUhKbGRIVnliaUJwZER0Y2JuMDdYRzRpTENJdkx5QlVhR0Z1YXlkeklFbEZPQ0JtYjNJZ2FHbHpJR1oxYm01NUlHUmxabWx1WlZCeWIzQmxjblI1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUNGeVpYRjFhWEpsS0NjdUwxOW1ZV2xzY3ljcEtHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2NtVjBkWEp1SUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaDdmU3dnSjJFbkxDQjdJR2RsZERvZ1puVnVZM1JwYjI0Z0tDa2dleUJ5WlhSMWNtNGdOenNnZlNCOUtTNWhJQ0U5SURjN1hHNTlLVHRjYmlJc0luWmhjaUJwYzA5aWFtVmpkQ0E5SUhKbGNYVnBjbVVvSnk0dlgybHpMVzlpYW1WamRDY3BPMXh1ZG1GeUlHUnZZM1Z0Wlc1MElEMGdjbVZ4ZFdseVpTZ25MaTlmWjJ4dlltRnNKeWt1Wkc5amRXMWxiblE3WEc0dkx5QjBlWEJsYjJZZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ0JwY3lBbmIySnFaV04wSnlCcGJpQnZiR1FnU1VWY2JuWmhjaUJwY3lBOUlHbHpUMkpxWldOMEtHUnZZM1Z0Wlc1MEtTQW1KaUJwYzA5aWFtVmpkQ2hrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdLR2wwS1NCN1hHNGdJSEpsZEhWeWJpQnBjeUEvSUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9hWFFwSURvZ2UzMDdYRzU5TzF4dUlpd2lMeThnU1VVZ09DMGdaRzl1SjNRZ1pXNTFiU0JpZFdjZ2EyVjVjMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0FvWEc0Z0lDZGpiMjV6ZEhKMVkzUnZjaXhvWVhOUGQyNVFjbTl3WlhKMGVTeHBjMUJ5YjNSdmRIbHdaVTltTEhCeWIzQmxjblI1U1hORmJuVnRaWEpoWW14bExIUnZURzlqWVd4bFUzUnlhVzVuTEhSdlUzUnlhVzVuTEhaaGJIVmxUMlluWEc0cExuTndiR2wwS0Njc0p5azdYRzRpTENKMllYSWdaMnh2WW1Gc0lEMGdjbVZ4ZFdseVpTZ25MaTlmWjJ4dlltRnNKeWs3WEc1MllYSWdZMjl5WlNBOUlISmxjWFZwY21Vb0p5NHZYMk52Y21VbktUdGNiblpoY2lCb2FXUmxJRDBnY21WeGRXbHlaU2duTGk5ZmFHbGtaU2NwTzF4dWRtRnlJSEpsWkdWbWFXNWxJRDBnY21WeGRXbHlaU2duTGk5ZmNtVmtaV1pwYm1VbktUdGNiblpoY2lCamRIZ2dQU0J5WlhGMWFYSmxLQ2N1TDE5amRIZ25LVHRjYm5aaGNpQlFVazlVVDFSWlVFVWdQU0FuY0hKdmRHOTBlWEJsSnp0Y2JseHVkbUZ5SUNSbGVIQnZjblFnUFNCbWRXNWpkR2x2YmlBb2RIbHdaU3dnYm1GdFpTd2djMjkxY21ObEtTQjdYRzRnSUhaaGNpQkpVMTlHVDFKRFJVUWdQU0IwZVhCbElDWWdKR1Y0Y0c5eWRDNUdPMXh1SUNCMllYSWdTVk5mUjB4UFFrRk1JRDBnZEhsd1pTQW1JQ1JsZUhCdmNuUXVSenRjYmlBZ2RtRnlJRWxUWDFOVVFWUkpReUE5SUhSNWNHVWdKaUFrWlhod2IzSjBMbE03WEc0Z0lIWmhjaUJKVTE5UVVrOVVUeUE5SUhSNWNHVWdKaUFrWlhod2IzSjBMbEE3WEc0Z0lIWmhjaUJKVTE5Q1NVNUVJRDBnZEhsd1pTQW1JQ1JsZUhCdmNuUXVRanRjYmlBZ2RtRnlJSFJoY21kbGRDQTlJRWxUWDBkTVQwSkJUQ0EvSUdkc2IySmhiQ0E2SUVsVFgxTlVRVlJKUXlBL0lHZHNiMkpoYkZ0dVlXMWxYU0I4ZkNBb1oyeHZZbUZzVzI1aGJXVmRJRDBnZTMwcElEb2dLR2RzYjJKaGJGdHVZVzFsWFNCOGZDQjdmU2xiVUZKUFZFOVVXVkJGWFR0Y2JpQWdkbUZ5SUdWNGNHOXlkSE1nUFNCSlUxOUhURTlDUVV3Z1B5QmpiM0psSURvZ1kyOXlaVnR1WVcxbFhTQjhmQ0FvWTI5eVpWdHVZVzFsWFNBOUlIdDlLVHRjYmlBZ2RtRnlJR1Y0Y0ZCeWIzUnZJRDBnWlhod2IzSjBjMXRRVWs5VVQxUlpVRVZkSUh4OElDaGxlSEJ2Y25SelcxQlNUMVJQVkZsUVJWMGdQU0I3ZlNrN1hHNGdJSFpoY2lCclpYa3NJRzkzYml3Z2IzVjBMQ0JsZUhBN1hHNGdJR2xtSUNoSlUxOUhURTlDUVV3cElITnZkWEpqWlNBOUlHNWhiV1U3WEc0Z0lHWnZjaUFvYTJWNUlHbHVJSE52ZFhKalpTa2dlMXh1SUNBZ0lDOHZJR052Ym5SaGFXNXpJR2x1SUc1aGRHbDJaVnh1SUNBZ0lHOTNiaUE5SUNGSlUxOUdUMUpEUlVRZ0ppWWdkR0Z5WjJWMElDWW1JSFJoY21kbGRGdHJaWGxkSUNFOVBTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ0x5OGdaWGh3YjNKMElHNWhkR2wyWlNCdmNpQndZWE56WldSY2JpQWdJQ0J2ZFhRZ1BTQW9iM2R1SUQ4Z2RHRnlaMlYwSURvZ2MyOTFjbU5sS1Z0clpYbGRPMXh1SUNBZ0lDOHZJR0pwYm1RZ2RHbHRaWEp6SUhSdklHZHNiMkpoYkNCbWIzSWdZMkZzYkNCbWNtOXRJR1Y0Y0c5eWRDQmpiMjUwWlhoMFhHNGdJQ0FnWlhod0lEMGdTVk5mUWtsT1JDQW1KaUJ2ZDI0Z1B5QmpkSGdvYjNWMExDQm5iRzlpWVd3cElEb2dTVk5mVUZKUFZFOGdKaVlnZEhsd1pXOW1JRzkxZENBOVBTQW5ablZ1WTNScGIyNG5JRDhnWTNSNEtFWjFibU4wYVc5dUxtTmhiR3dzSUc5MWRDa2dPaUJ2ZFhRN1hHNGdJQ0FnTHk4Z1pYaDBaVzVrSUdkc2IySmhiRnh1SUNBZ0lHbG1JQ2gwWVhKblpYUXBJSEpsWkdWbWFXNWxLSFJoY21kbGRDd2dhMlY1TENCdmRYUXNJSFI1Y0dVZ0ppQWtaWGh3YjNKMExsVXBPMXh1SUNBZ0lDOHZJR1Y0Y0c5eWRGeHVJQ0FnSUdsbUlDaGxlSEJ2Y25SelcydGxlVjBnSVQwZ2IzVjBLU0JvYVdSbEtHVjRjRzl5ZEhNc0lHdGxlU3dnWlhod0tUdGNiaUFnSUNCcFppQW9TVk5mVUZKUFZFOGdKaVlnWlhod1VISnZkRzliYTJWNVhTQWhQU0J2ZFhRcElHVjRjRkJ5YjNSdlcydGxlVjBnUFNCdmRYUTdYRzRnSUgxY2JuMDdYRzVuYkc5aVlXd3VZMjl5WlNBOUlHTnZjbVU3WEc0dkx5QjBlWEJsSUdKcGRHMWhjRnh1SkdWNGNHOXlkQzVHSUQwZ01Uc2dJQ0F2THlCbWIzSmpaV1JjYmlSbGVIQnZjblF1UnlBOUlESTdJQ0FnTHk4Z1oyeHZZbUZzWEc0a1pYaHdiM0owTGxNZ1BTQTBPeUFnSUM4dklITjBZWFJwWTF4dUpHVjRjRzl5ZEM1UUlEMGdPRHNnSUNBdkx5QndjbTkwYjF4dUpHVjRjRzl5ZEM1Q0lEMGdNVFk3SUNBdkx5QmlhVzVrWEc0a1pYaHdiM0owTGxjZ1BTQXpNanNnSUM4dklIZHlZWEJjYmlSbGVIQnZjblF1VlNBOUlEWTBPeUFnTHk4Z2MyRm1aVnh1SkdWNGNHOXlkQzVTSUQwZ01USTRPeUF2THlCeVpXRnNJSEJ5YjNSdklHMWxkR2h2WkNCbWIzSWdZR3hwWW5KaGNubGdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJQ1JsZUhCdmNuUTdYRzRpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUNobGVHVmpLU0I3WEc0Z0lIUnllU0I3WEc0Z0lDQWdjbVYwZFhKdUlDRWhaWGhsWXlncE8xeHVJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNGdJSDFjYm4wN1hHNGlMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSEpsY1hWcGNtVW9KeTR2WDNOb1lYSmxaQ2NwS0NkdVlYUnBkbVV0Wm5WdVkzUnBiMjR0ZEc4dGMzUnlhVzVuSnl3Z1JuVnVZM1JwYjI0dWRHOVRkSEpwYm1jcE8xeHVJaXdpTHk4Z2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwzcHNiMmx5YjJOckwyTnZjbVV0YW5NdmFYTnpkV1Z6THpnMkkybHpjM1ZsWTI5dGJXVnVkQzB4TVRVM05Ua3dNamhjYm5aaGNpQm5iRzlpWVd3Z1BTQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnZDJsdVpHOTNMazFoZEdnZ1BUMGdUV0YwYUZ4dUlDQS9JSGRwYm1SdmR5QTZJSFI1Y0dWdlppQnpaV3htSUNFOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhObGJHWXVUV0YwYUNBOVBTQk5ZWFJvSUQ4Z2MyVnNabHh1SUNBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VZ2JtOHRibVYzTFdaMWJtTmNiaUFnT2lCR2RXNWpkR2x2YmlnbmNtVjBkWEp1SUhSb2FYTW5LU2dwTzF4dWFXWWdLSFI1Y0dWdlppQmZYMmNnUFQwZ0oyNTFiV0psY2ljcElGOWZaeUE5SUdkc2IySmhiRHNnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0YkdsdVpTQnVieTExYm1SbFpseHVJaXdpZG1GeUlHaGhjMDkzYmxCeWIzQmxjblI1SUQwZ2UzMHVhR0Z6VDNkdVVISnZjR1Z5ZEhrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlDaHBkQ3dnYTJWNUtTQjdYRzRnSUhKbGRIVnliaUJvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0dsMExDQnJaWGtwTzF4dWZUdGNiaUlzSW5aaGNpQmtVQ0E5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxa2NDY3BPMXh1ZG1GeUlHTnlaV0YwWlVSbGMyTWdQU0J5WlhGMWFYSmxLQ2N1TDE5d2NtOXdaWEowZVMxa1pYTmpKeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhKbGNYVnBjbVVvSnk0dlgyUmxjMk55YVhCMGIzSnpKeWtnUHlCbWRXNWpkR2x2YmlBb2IySnFaV04wTENCclpYa3NJSFpoYkhWbEtTQjdYRzRnSUhKbGRIVnliaUJrVUM1bUtHOWlhbVZqZEN3Z2EyVjVMQ0JqY21WaGRHVkVaWE5qS0RFc0lIWmhiSFZsS1NrN1hHNTlJRG9nWm5WdVkzUnBiMjRnS0c5aWFtVmpkQ3dnYTJWNUxDQjJZV3gxWlNrZ2UxeHVJQ0J2WW1wbFkzUmJhMlY1WFNBOUlIWmhiSFZsTzF4dUlDQnlaWFIxY200Z2IySnFaV04wTzF4dWZUdGNiaUlzSW5aaGNpQmtiMk4xYldWdWRDQTlJSEpsY1hWcGNtVW9KeTR2WDJkc2IySmhiQ2NwTG1SdlkzVnRaVzUwTzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCa2IyTjFiV1Z1ZENBbUppQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RN1hHNGlMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJQ0Z5WlhGMWFYSmxLQ2N1TDE5a1pYTmpjbWx3ZEc5eWN5Y3BJQ1ltSUNGeVpYRjFhWEpsS0NjdUwxOW1ZV2xzY3ljcEtHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2NtVjBkWEp1SUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHlaWEYxYVhKbEtDY3VMMTlrYjIwdFkzSmxZWFJsSnlrb0oyUnBkaWNwTENBbllTY3NJSHNnWjJWME9pQm1kVzVqZEdsdmJpQW9LU0I3SUhKbGRIVnliaUEzT3lCOUlIMHBMbUVnSVQwZ056dGNibjBwTzF4dUlpd2lMeThnWm1Gc2JHSmhZMnNnWm05eUlHNXZiaTFoY25KaGVTMXNhV3RsSUVWVE15QmhibVFnYm05dUxXVnVkVzFsY21GaWJHVWdiMnhrSUZZNElITjBjbWx1WjNOY2JuWmhjaUJqYjJZZ1BTQnlaWEYxYVhKbEtDY3VMMTlqYjJZbktUdGNiaTh2SUdWemJHbHVkQzFrYVhOaFlteGxMVzVsZUhRdGJHbHVaU0J1Ynkxd2NtOTBiM1I1Y0dVdFluVnBiSFJwYm5OY2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1QySnFaV04wS0NkNkp5a3VjSEp2Y0dWeWRIbEpjMFZ1ZFcxbGNtRmliR1VvTUNrZ1B5QlBZbXBsWTNRZ09pQm1kVzVqZEdsdmJpQW9hWFFwSUh0Y2JpQWdjbVYwZFhKdUlHTnZaaWhwZENrZ1BUMGdKMU4wY21sdVp5Y2dQeUJwZEM1emNHeHBkQ2duSnlrZ09pQlBZbXBsWTNRb2FYUXBPMXh1ZlR0Y2JpSXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdLR2wwS1NCN1hHNGdJSEpsZEhWeWJpQjBlWEJsYjJZZ2FYUWdQVDA5SUNkdlltcGxZM1FuSUQ4Z2FYUWdJVDA5SUc1MWJHd2dPaUIwZVhCbGIyWWdhWFFnUFQwOUlDZG1kVzVqZEdsdmJpYzdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dWRtRnlJR055WldGMFpTQTlJSEpsY1hWcGNtVW9KeTR2WDI5aWFtVmpkQzFqY21WaGRHVW5LVHRjYm5aaGNpQmtaWE5qY21sd2RHOXlJRDBnY21WeGRXbHlaU2duTGk5ZmNISnZjR1Z5ZEhrdFpHVnpZeWNwTzF4dWRtRnlJSE5sZEZSdlUzUnlhVzVuVkdGbklEMGdjbVZ4ZFdseVpTZ25MaTlmYzJWMExYUnZMWE4wY21sdVp5MTBZV2NuS1R0Y2JuWmhjaUJKZEdWeVlYUnZjbEJ5YjNSdmRIbHdaU0E5SUh0OU8xeHVYRzR2THlBeU5TNHhMakl1TVM0eElDVkpkR1Z5WVhSdmNsQnliM1J2ZEhsd1pTVmJRRUJwZEdWeVlYUnZjbDBvS1Z4dWNtVnhkV2x5WlNnbkxpOWZhR2xrWlNjcEtFbDBaWEpoZEc5eVVISnZkRzkwZVhCbExDQnlaWEYxYVhKbEtDY3VMMTkzYTNNbktTZ25hWFJsY21GMGIzSW5LU3dnWm5WdVkzUnBiMjRnS0NrZ2V5QnlaWFIxY200Z2RHaHBjenNnZlNrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdLRU52Ym5OMGNuVmpkRzl5TENCT1FVMUZMQ0J1WlhoMEtTQjdYRzRnSUVOdmJuTjBjblZqZEc5eUxuQnliM1J2ZEhsd1pTQTlJR055WldGMFpTaEpkR1Z5WVhSdmNsQnliM1J2ZEhsd1pTd2dleUJ1WlhoME9pQmtaWE5qY21sd2RHOXlLREVzSUc1bGVIUXBJSDBwTzF4dUlDQnpaWFJVYjFOMGNtbHVaMVJoWnloRGIyNXpkSEoxWTNSdmNpd2dUa0ZOUlNBcklDY2dTWFJsY21GMGIzSW5LVHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNTJZWElnVEVsQ1VrRlNXU0E5SUhKbGNYVnBjbVVvSnk0dlgyeHBZbkpoY25rbktUdGNiblpoY2lBa1pYaHdiM0owSUQwZ2NtVnhkV2x5WlNnbkxpOWZaWGh3YjNKMEp5azdYRzUyWVhJZ2NtVmtaV1pwYm1VZ1BTQnlaWEYxYVhKbEtDY3VMMTl5WldSbFptbHVaU2NwTzF4dWRtRnlJR2hwWkdVZ1BTQnlaWEYxYVhKbEtDY3VMMTlvYVdSbEp5azdYRzUyWVhJZ1NYUmxjbUYwYjNKeklEMGdjbVZ4ZFdseVpTZ25MaTlmYVhSbGNtRjBiM0p6SnlrN1hHNTJZWElnSkdsMFpYSkRjbVZoZEdVZ1BTQnlaWEYxYVhKbEtDY3VMMTlwZEdWeUxXTnlaV0YwWlNjcE8xeHVkbUZ5SUhObGRGUnZVM1J5YVc1blZHRm5JRDBnY21WeGRXbHlaU2duTGk5ZmMyVjBMWFJ2TFhOMGNtbHVaeTEwWVdjbktUdGNiblpoY2lCblpYUlFjbTkwYjNSNWNHVlBaaUE5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxbmNHOG5LVHRjYm5aaGNpQkpWRVZTUVZSUFVpQTlJSEpsY1hWcGNtVW9KeTR2WDNkcmN5Y3BLQ2RwZEdWeVlYUnZjaWNwTzF4dWRtRnlJRUpWUjBkWklEMGdJU2hiWFM1clpYbHpJQ1ltSUNkdVpYaDBKeUJwYmlCYlhTNXJaWGx6S0NrcE95QXZMeUJUWVdaaGNta2dhR0Z6SUdKMVoyZDVJR2wwWlhKaGRHOXljeUIzTDI4Z1lHNWxlSFJnWEc1MllYSWdSa1pmU1ZSRlVrRlVUMUlnUFNBblFFQnBkR1Z5WVhSdmNpYzdYRzUyWVhJZ1MwVlpVeUE5SUNkclpYbHpKenRjYm5aaGNpQldRVXhWUlZNZ1BTQW5kbUZzZFdWekp6dGNibHh1ZG1GeUlISmxkSFZ5YmxSb2FYTWdQU0JtZFc1amRHbHZiaUFvS1NCN0lISmxkSFZ5YmlCMGFHbHpPeUI5TzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlDaENZWE5sTENCT1FVMUZMQ0JEYjI1emRISjFZM1J2Y2l3Z2JtVjRkQ3dnUkVWR1FWVk1WQ3dnU1ZOZlUwVlVMQ0JHVDFKRFJVUXBJSHRjYmlBZ0pHbDBaWEpEY21WaGRHVW9RMjl1YzNSeWRXTjBiM0lzSUU1QlRVVXNJRzVsZUhRcE8xeHVJQ0IyWVhJZ1oyVjBUV1YwYUc5a0lEMGdablZ1WTNScGIyNGdLR3RwYm1RcElIdGNiaUFnSUNCcFppQW9JVUpWUjBkWklDWW1JR3RwYm1RZ2FXNGdjSEp2ZEc4cElISmxkSFZ5YmlCd2NtOTBiMXRyYVc1a1hUdGNiaUFnSUNCemQybDBZMmdnS0d0cGJtUXBJSHRjYmlBZ0lDQWdJR05oYzJVZ1MwVlpVem9nY21WMGRYSnVJR1oxYm1OMGFXOXVJR3RsZVhNb0tTQjdJSEpsZEhWeWJpQnVaWGNnUTI5dWMzUnlkV04wYjNJb2RHaHBjeXdnYTJsdVpDazdJSDA3WEc0Z0lDQWdJQ0JqWVhObElGWkJURlZGVXpvZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUhaaGJIVmxjeWdwSUhzZ2NtVjBkWEp1SUc1bGR5QkRiMjV6ZEhKMVkzUnZjaWgwYUdsekxDQnJhVzVrS1RzZ2ZUdGNiaUFnSUNCOUlISmxkSFZ5YmlCbWRXNWpkR2x2YmlCbGJuUnlhV1Z6S0NrZ2V5QnlaWFIxY200Z2JtVjNJRU52Ym5OMGNuVmpkRzl5S0hSb2FYTXNJR3RwYm1RcE95QjlPMXh1SUNCOU8xeHVJQ0IyWVhJZ1ZFRkhJRDBnVGtGTlJTQXJJQ2NnU1hSbGNtRjBiM0luTzF4dUlDQjJZWElnUkVWR1gxWkJURlZGVXlBOUlFUkZSa0ZWVEZRZ1BUMGdWa0ZNVlVWVE8xeHVJQ0IyWVhJZ1ZrRk1WVVZUWDBKVlJ5QTlJR1poYkhObE8xeHVJQ0IyWVhJZ2NISnZkRzhnUFNCQ1lYTmxMbkJ5YjNSdmRIbHdaVHRjYmlBZ2RtRnlJQ1J1WVhScGRtVWdQU0J3Y205MGIxdEpWRVZTUVZSUFVsMGdmSHdnY0hKdmRHOWJSa1pmU1ZSRlVrRlVUMUpkSUh4OElFUkZSa0ZWVEZRZ0ppWWdjSEp2ZEc5YlJFVkdRVlZNVkYwN1hHNGdJSFpoY2lBa1pHVm1ZWFZzZENBOUlDUnVZWFJwZG1VZ2ZId2daMlYwVFdWMGFHOWtLRVJGUmtGVlRGUXBPMXh1SUNCMllYSWdKR1Z1ZEhKcFpYTWdQU0JFUlVaQlZVeFVJRDhnSVVSRlJsOVdRVXhWUlZNZ1B5QWtaR1ZtWVhWc2RDQTZJR2RsZEUxbGRHaHZaQ2duWlc1MGNtbGxjeWNwSURvZ2RXNWtaV1pwYm1Wa08xeHVJQ0IyWVhJZ0pHRnVlVTVoZEdsMlpTQTlJRTVCVFVVZ1BUMGdKMEZ5Y21GNUp5QS9JSEJ5YjNSdkxtVnVkSEpwWlhNZ2ZId2dKRzVoZEdsMlpTQTZJQ1J1WVhScGRtVTdYRzRnSUhaaGNpQnRaWFJvYjJSekxDQnJaWGtzSUVsMFpYSmhkRzl5VUhKdmRHOTBlWEJsTzF4dUlDQXZMeUJHYVhnZ2JtRjBhWFpsWEc0Z0lHbG1JQ2drWVc1NVRtRjBhWFpsS1NCN1hHNGdJQ0FnU1hSbGNtRjBiM0pRY205MGIzUjVjR1VnUFNCblpYUlFjbTkwYjNSNWNHVlBaaWdrWVc1NVRtRjBhWFpsTG1OaGJHd29ibVYzSUVKaGMyVW9LU2twTzF4dUlDQWdJR2xtSUNoSmRHVnlZWFJ2Y2xCeWIzUnZkSGx3WlNBaFBUMGdUMkpxWldOMExuQnliM1J2ZEhsd1pTQW1KaUJKZEdWeVlYUnZjbEJ5YjNSdmRIbHdaUzV1WlhoMEtTQjdYRzRnSUNBZ0lDQXZMeUJUWlhRZ1FFQjBiMU4wY21sdVoxUmhaeUIwYnlCdVlYUnBkbVVnYVhSbGNtRjBiM0p6WEc0Z0lDQWdJQ0J6WlhSVWIxTjBjbWx1WjFSaFp5aEpkR1Z5WVhSdmNsQnliM1J2ZEhsd1pTd2dWRUZITENCMGNuVmxLVHRjYmlBZ0lDQWdJQzh2SUdacGVDQm1iM0lnYzI5dFpTQnZiR1FnWlc1bmFXNWxjMXh1SUNBZ0lDQWdhV1lnS0NGTVNVSlNRVkpaSUNZbUlIUjVjR1Z2WmlCSmRHVnlZWFJ2Y2xCeWIzUnZkSGx3WlZ0SlZFVlNRVlJQVWwwZ0lUMGdKMloxYm1OMGFXOXVKeWtnYUdsa1pTaEpkR1Z5WVhSdmNsQnliM1J2ZEhsd1pTd2dTVlJGVWtGVVQxSXNJSEpsZEhWeWJsUm9hWE1wTzF4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0F2THlCbWFYZ2dRWEp5WVhramUzWmhiSFZsY3l3Z1FFQnBkR1Z5WVhSdmNuMHVibUZ0WlNCcGJpQldPQ0F2SUVaR1hHNGdJR2xtSUNoRVJVWmZWa0ZNVlVWVElDWW1JQ1J1WVhScGRtVWdKaVlnSkc1aGRHbDJaUzV1WVcxbElDRTlQU0JXUVV4VlJWTXBJSHRjYmlBZ0lDQldRVXhWUlZOZlFsVkhJRDBnZEhKMVpUdGNiaUFnSUNBa1pHVm1ZWFZzZENBOUlHWjFibU4wYVc5dUlIWmhiSFZsY3lncElIc2djbVYwZFhKdUlDUnVZWFJwZG1VdVkyRnNiQ2gwYUdsektUc2dmVHRjYmlBZ2ZWeHVJQ0F2THlCRVpXWnBibVVnYVhSbGNtRjBiM0pjYmlBZ2FXWWdLQ2doVEVsQ1VrRlNXU0I4ZkNCR1QxSkRSVVFwSUNZbUlDaENWVWRIV1NCOGZDQldRVXhWUlZOZlFsVkhJSHg4SUNGd2NtOTBiMXRKVkVWU1FWUlBVbDBwS1NCN1hHNGdJQ0FnYUdsa1pTaHdjbTkwYnl3Z1NWUkZVa0ZVVDFJc0lDUmtaV1poZFd4MEtUdGNiaUFnZlZ4dUlDQXZMeUJRYkhWbklHWnZjaUJzYVdKeVlYSjVYRzRnSUVsMFpYSmhkRzl5YzF0T1FVMUZYU0E5SUNSa1pXWmhkV3gwTzF4dUlDQkpkR1Z5WVhSdmNuTmJWRUZIWFNBOUlISmxkSFZ5YmxSb2FYTTdYRzRnSUdsbUlDaEVSVVpCVlV4VUtTQjdYRzRnSUNBZ2JXVjBhRzlrY3lBOUlIdGNiaUFnSUNBZ0lIWmhiSFZsY3pvZ1JFVkdYMVpCVEZWRlV5QS9JQ1JrWldaaGRXeDBJRG9nWjJWMFRXVjBhRzlrS0ZaQlRGVkZVeWtzWEc0Z0lDQWdJQ0JyWlhsek9pQkpVMTlUUlZRZ1B5QWtaR1ZtWVhWc2RDQTZJR2RsZEUxbGRHaHZaQ2hMUlZsVEtTeGNiaUFnSUNBZ0lHVnVkSEpwWlhNNklDUmxiblJ5YVdWelhHNGdJQ0FnZlR0Y2JpQWdJQ0JwWmlBb1JrOVNRMFZFS1NCbWIzSWdLR3RsZVNCcGJpQnRaWFJvYjJSektTQjdYRzRnSUNBZ0lDQnBaaUFvSVNoclpYa2dhVzRnY0hKdmRHOHBLU0J5WldSbFptbHVaU2h3Y205MGJ5d2dhMlY1TENCdFpYUm9iMlJ6VzJ0bGVWMHBPMXh1SUNBZ0lIMGdaV3h6WlNBa1pYaHdiM0owS0NSbGVIQnZjblF1VUNBcklDUmxlSEJ2Y25RdVJpQXFJQ2hDVlVkSFdTQjhmQ0JXUVV4VlJWTmZRbFZIS1N3Z1RrRk5SU3dnYldWMGFHOWtjeWs3WEc0Z0lIMWNiaUFnY21WMGRYSnVJRzFsZEdodlpITTdYRzU5TzF4dUlpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQW9aRzl1WlN3Z2RtRnNkV1VwSUh0Y2JpQWdjbVYwZFhKdUlIc2dkbUZzZFdVNklIWmhiSFZsTENCa2IyNWxPaUFoSVdSdmJtVWdmVHRjYm4wN1hHNGlMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHQ5TzF4dUlpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV3h6WlR0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JpOHZJREU1TGpFdU1pNHhJRTlpYW1WamRDNWhjM05wWjI0b2RHRnlaMlYwTENCemIzVnlZMlVzSUM0dUxpbGNiblpoY2lCRVJWTkRVa2xRVkU5U1V5QTlJSEpsY1hWcGNtVW9KeTR2WDJSbGMyTnlhWEIwYjNKekp5azdYRzUyWVhJZ1oyVjBTMlY1Y3lBOUlISmxjWFZwY21Vb0p5NHZYMjlpYW1WamRDMXJaWGx6SnlrN1hHNTJZWElnWjA5UVV5QTlJSEpsY1hWcGNtVW9KeTR2WDI5aWFtVmpkQzFuYjNCekp5azdYRzUyWVhJZ2NFbEZJRDBnY21WeGRXbHlaU2duTGk5ZmIySnFaV04wTFhCcFpTY3BPMXh1ZG1GeUlIUnZUMkpxWldOMElEMGdjbVZ4ZFdseVpTZ25MaTlmZEc4dGIySnFaV04wSnlrN1hHNTJZWElnU1U5aWFtVmpkQ0E5SUhKbGNYVnBjbVVvSnk0dlgybHZZbXBsWTNRbktUdGNiblpoY2lBa1lYTnphV2R1SUQwZ1QySnFaV04wTG1GemMybG5ianRjYmx4dUx5OGdjMmh2ZFd4a0lIZHZjbXNnZDJsMGFDQnplVzFpYjJ4eklHRnVaQ0J6YUc5MWJHUWdhR0YyWlNCa1pYUmxjbTFwYm1semRHbGpJSEJ5YjNCbGNuUjVJRzl5WkdWeUlDaFdPQ0JpZFdjcFhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlDRWtZWE56YVdkdUlIeDhJSEpsY1hWcGNtVW9KeTR2WDJaaGFXeHpKeWtvWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0IyWVhJZ1FTQTlJSHQ5TzF4dUlDQjJZWElnUWlBOUlIdDlPMXh1SUNBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VZ2JtOHRkVzVrWldaY2JpQWdkbUZ5SUZNZ1BTQlRlVzFpYjJ3b0tUdGNiaUFnZG1GeUlFc2dQU0FuWVdKalpHVm1aMmhwYW10c2JXNXZjSEZ5YzNRbk8xeHVJQ0JCVzFOZElEMGdOenRjYmlBZ1N5NXpjR3hwZENnbkp5a3VabTl5UldGamFDaG1kVzVqZEdsdmJpQW9heWtnZXlCQ1cydGRJRDBnYXpzZ2ZTazdYRzRnSUhKbGRIVnliaUFrWVhOemFXZHVLSHQ5TENCQktWdFRYU0FoUFNBM0lIeDhJRTlpYW1WamRDNXJaWGx6S0NSaGMzTnBaMjRvZTMwc0lFSXBLUzVxYjJsdUtDY25LU0FoUFNCTE8xeHVmU2tnUHlCbWRXNWpkR2x2YmlCaGMzTnBaMjRvZEdGeVoyVjBMQ0J6YjNWeVkyVXBJSHNnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0YkdsdVpTQnVieTExYm5WelpXUXRkbUZ5YzF4dUlDQjJZWElnVkNBOUlIUnZUMkpxWldOMEtIUmhjbWRsZENrN1hHNGdJSFpoY2lCaFRHVnVJRDBnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHRjYmlBZ2RtRnlJR2x1WkdWNElEMGdNVHRjYmlBZ2RtRnlJR2RsZEZONWJXSnZiSE1nUFNCblQxQlRMbVk3WEc0Z0lIWmhjaUJwYzBWdWRXMGdQU0J3U1VVdVpqdGNiaUFnZDJocGJHVWdLR0ZNWlc0Z1BpQnBibVJsZUNrZ2UxeHVJQ0FnSUhaaGNpQlRJRDBnU1U5aWFtVmpkQ2hoY21kMWJXVnVkSE5iYVc1a1pYZ3JLMTBwTzF4dUlDQWdJSFpoY2lCclpYbHpJRDBnWjJWMFUzbHRZbTlzY3lBL0lHZGxkRXRsZVhNb1V5a3VZMjl1WTJGMEtHZGxkRk41YldKdmJITW9VeWtwSURvZ1oyVjBTMlY1Y3loVEtUdGNiaUFnSUNCMllYSWdiR1Z1WjNSb0lEMGdhMlY1Y3k1c1pXNW5kR2c3WEc0Z0lDQWdkbUZ5SUdvZ1BTQXdPMXh1SUNBZ0lIWmhjaUJyWlhrN1hHNGdJQ0FnZDJocGJHVWdLR3hsYm1kMGFDQStJR29wSUh0Y2JpQWdJQ0FnSUd0bGVTQTlJR3RsZVhOYmFpc3JYVHRjYmlBZ0lDQWdJR2xtSUNnaFJFVlRRMUpKVUZSUFVsTWdmSHdnYVhORmJuVnRMbU5oYkd3b1V5d2dhMlY1S1NrZ1ZGdHJaWGxkSUQwZ1UxdHJaWGxkTzF4dUlDQWdJSDFjYmlBZ2ZTQnlaWFIxY200Z1ZEdGNibjBnT2lBa1lYTnphV2R1TzF4dUlpd2lMeThnTVRrdU1TNHlMaklnTHlBeE5TNHlMak11TlNCUFltcGxZM1F1WTNKbFlYUmxLRThnV3l3Z1VISnZjR1Z5ZEdsbGMxMHBYRzUyWVhJZ1lXNVBZbXBsWTNRZ1BTQnlaWEYxYVhKbEtDY3VMMTloYmkxdlltcGxZM1FuS1R0Y2JuWmhjaUJrVUhNZ1BTQnlaWEYxYVhKbEtDY3VMMTl2WW1wbFkzUXRaSEJ6SnlrN1hHNTJZWElnWlc1MWJVSjFaMHRsZVhNZ1BTQnlaWEYxYVhKbEtDY3VMMTlsYm5WdExXSjFaeTFyWlhsekp5azdYRzUyWVhJZ1NVVmZVRkpQVkU4Z1BTQnlaWEYxYVhKbEtDY3VMMTl6YUdGeVpXUXRhMlY1Snlrb0owbEZYMUJTVDFSUEp5azdYRzUyWVhJZ1JXMXdkSGtnUFNCbWRXNWpkR2x2YmlBb0tTQjdJQzhxSUdWdGNIUjVJQ292SUgwN1hHNTJZWElnVUZKUFZFOVVXVkJGSUQwZ0ozQnliM1J2ZEhsd1pTYzdYRzVjYmk4dklFTnlaV0YwWlNCdlltcGxZM1FnZDJsMGFDQm1ZV3RsSUdCdWRXeHNZQ0J3Y205MGIzUjVjR1U2SUhWelpTQnBabkpoYldVZ1QySnFaV04wSUhkcGRHZ2dZMnhsWVhKbFpDQndjbTkwYjNSNWNHVmNiblpoY2lCamNtVmhkR1ZFYVdOMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQXZMeUJVYUhKaGMyZ3NJSGRoYzNSbElHRnVaQ0J6YjJSdmJYazZJRWxGSUVkRElHSjFaMXh1SUNCMllYSWdhV1p5WVcxbElEMGdjbVZ4ZFdseVpTZ25MaTlmWkc5dExXTnlaV0YwWlNjcEtDZHBabkpoYldVbktUdGNiaUFnZG1GeUlHa2dQU0JsYm5WdFFuVm5TMlY1Y3k1c1pXNW5kR2c3WEc0Z0lIWmhjaUJzZENBOUlDYzhKenRjYmlBZ2RtRnlJR2QwSUQwZ0p6NG5PMXh1SUNCMllYSWdhV1p5WVcxbFJHOWpkVzFsYm5RN1hHNGdJR2xtY21GdFpTNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oyNXZibVVuTzF4dUlDQnlaWEYxYVhKbEtDY3VMMTlvZEcxc0p5a3VZWEJ3Wlc1a1EyaHBiR1FvYVdaeVlXMWxLVHRjYmlBZ2FXWnlZVzFsTG5OeVl5QTlJQ2RxWVhaaGMyTnlhWEIwT2ljN0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXeHBibVVnYm04dGMyTnlhWEIwTFhWeWJGeHVJQ0F2THlCamNtVmhkR1ZFYVdOMElEMGdhV1p5WVcxbExtTnZiblJsYm5SWGFXNWtiM2N1VDJKcVpXTjBPMXh1SUNBdkx5Qm9kRzFzTG5KbGJXOTJaVU5vYVd4a0tHbG1jbUZ0WlNrN1hHNGdJR2xtY21GdFpVUnZZM1Z0Wlc1MElEMGdhV1p5WVcxbExtTnZiblJsYm5SWGFXNWtiM2N1Wkc5amRXMWxiblE3WEc0Z0lHbG1jbUZ0WlVSdlkzVnRaVzUwTG05d1pXNG9LVHRjYmlBZ2FXWnlZVzFsUkc5amRXMWxiblF1ZDNKcGRHVW9iSFFnS3lBbmMyTnlhWEIwSnlBcklHZDBJQ3NnSjJSdlkzVnRaVzUwTGtZOVQySnFaV04wSnlBcklHeDBJQ3NnSnk5elkzSnBjSFFuSUNzZ1ozUXBPMXh1SUNCcFpuSmhiV1ZFYjJOMWJXVnVkQzVqYkc5elpTZ3BPMXh1SUNCamNtVmhkR1ZFYVdOMElEMGdhV1p5WVcxbFJHOWpkVzFsYm5RdVJqdGNiaUFnZDJocGJHVWdLR2t0TFNrZ1pHVnNaWFJsSUdOeVpXRjBaVVJwWTNSYlVGSlBWRTlVV1ZCRlhWdGxiblZ0UW5WblMyVjVjMXRwWFYwN1hHNGdJSEpsZEhWeWJpQmpjbVZoZEdWRWFXTjBLQ2s3WEc1OU8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRTlpYW1WamRDNWpjbVZoZEdVZ2ZId2dablZ1WTNScGIyNGdZM0psWVhSbEtFOHNJRkJ5YjNCbGNuUnBaWE1wSUh0Y2JpQWdkbUZ5SUhKbGMzVnNkRHRjYmlBZ2FXWWdLRThnSVQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0JGYlhCMGVWdFFVazlVVDFSWlVFVmRJRDBnWVc1UFltcGxZM1FvVHlrN1hHNGdJQ0FnY21WemRXeDBJRDBnYm1WM0lFVnRjSFI1S0NrN1hHNGdJQ0FnUlcxd2RIbGJVRkpQVkU5VVdWQkZYU0E5SUc1MWJHdzdYRzRnSUNBZ0x5OGdZV1JrSUZ3aVgxOXdjbTkwYjE5ZlhDSWdabTl5SUU5aWFtVmpkQzVuWlhSUWNtOTBiM1I1Y0dWUFppQndiMng1Wm1sc2JGeHVJQ0FnSUhKbGMzVnNkRnRKUlY5UVVrOVVUMTBnUFNCUE8xeHVJQ0I5SUdWc2MyVWdjbVZ6ZFd4MElEMGdZM0psWVhSbFJHbGpkQ2dwTzF4dUlDQnlaWFIxY200Z1VISnZjR1Z5ZEdsbGN5QTlQVDBnZFc1a1pXWnBibVZrSUQ4Z2NtVnpkV3gwSURvZ1pGQnpLSEpsYzNWc2RDd2dVSEp2Y0dWeWRHbGxjeWs3WEc1OU8xeHVJaXdpZG1GeUlHRnVUMkpxWldOMElEMGdjbVZ4ZFdseVpTZ25MaTlmWVc0dGIySnFaV04wSnlrN1hHNTJZWElnU1VVNFgwUlBUVjlFUlVaSlRrVWdQU0J5WlhGMWFYSmxLQ2N1TDE5cFpUZ3RaRzl0TFdSbFptbHVaU2NwTzF4dWRtRnlJSFJ2VUhKcGJXbDBhWFpsSUQwZ2NtVnhkV2x5WlNnbkxpOWZkRzh0Y0hKcGJXbDBhWFpsSnlrN1hHNTJZWElnWkZBZ1BTQlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGs3WEc1Y2JtVjRjRzl5ZEhNdVppQTlJSEpsY1hWcGNtVW9KeTR2WDJSbGMyTnlhWEIwYjNKekp5a2dQeUJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrZ09pQm1kVzVqZEdsdmJpQmtaV1pwYm1WUWNtOXdaWEowZVNoUExDQlFMQ0JCZEhSeWFXSjFkR1Z6S1NCN1hHNGdJR0Z1VDJKcVpXTjBLRThwTzF4dUlDQlFJRDBnZEc5UWNtbHRhWFJwZG1Vb1VDd2dkSEoxWlNrN1hHNGdJR0Z1VDJKcVpXTjBLRUYwZEhKcFluVjBaWE1wTzF4dUlDQnBaaUFvU1VVNFgwUlBUVjlFUlVaSlRrVXBJSFJ5ZVNCN1hHNGdJQ0FnY21WMGRYSnVJR1JRS0U4c0lGQXNJRUYwZEhKcFluVjBaWE1wTzF4dUlDQjlJR05oZEdOb0lDaGxLU0I3SUM4cUlHVnRjSFI1SUNvdklIMWNiaUFnYVdZZ0tDZG5aWFFuSUdsdUlFRjBkSEpwWW5WMFpYTWdmSHdnSjNObGRDY2dhVzRnUVhSMGNtbGlkWFJsY3lrZ2RHaHliM2NnVkhsd1pVVnljbTl5S0NkQlkyTmxjM052Y25NZ2JtOTBJSE4xY0hCdmNuUmxaQ0VuS1R0Y2JpQWdhV1lnS0NkMllXeDFaU2NnYVc0Z1FYUjBjbWxpZFhSbGN5a2dUMXRRWFNBOUlFRjBkSEpwWW5WMFpYTXVkbUZzZFdVN1hHNGdJSEpsZEhWeWJpQlBPMXh1ZlR0Y2JpSXNJblpoY2lCa1VDQTlJSEpsY1hWcGNtVW9KeTR2WDI5aWFtVmpkQzFrY0NjcE8xeHVkbUZ5SUdGdVQySnFaV04wSUQwZ2NtVnhkV2x5WlNnbkxpOWZZVzR0YjJKcVpXTjBKeWs3WEc1MllYSWdaMlYwUzJWNWN5QTlJSEpsY1hWcGNtVW9KeTR2WDI5aWFtVmpkQzFyWlhsekp5azdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnY21WeGRXbHlaU2duTGk5ZlpHVnpZM0pwY0hSdmNuTW5LU0EvSUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGFXVnpJRG9nWm5WdVkzUnBiMjRnWkdWbWFXNWxVSEp2Y0dWeWRHbGxjeWhQTENCUWNtOXdaWEowYVdWektTQjdYRzRnSUdGdVQySnFaV04wS0U4cE8xeHVJQ0IyWVhJZ2EyVjVjeUE5SUdkbGRFdGxlWE1vVUhKdmNHVnlkR2xsY3lrN1hHNGdJSFpoY2lCc1pXNW5kR2dnUFNCclpYbHpMbXhsYm1kMGFEdGNiaUFnZG1GeUlHa2dQU0F3TzF4dUlDQjJZWElnVUR0Y2JpQWdkMmhwYkdVZ0tHeGxibWQwYUNBK0lHa3BJR1JRTG1Zb1R5d2dVQ0E5SUd0bGVYTmJhU3NyWFN3Z1VISnZjR1Z5ZEdsbGMxdFFYU2s3WEc0Z0lISmxkSFZ5YmlCUE8xeHVmVHRjYmlJc0ltVjRjRzl5ZEhNdVppQTlJRTlpYW1WamRDNW5aWFJQZDI1UWNtOXdaWEowZVZONWJXSnZiSE03WEc0aUxDSXZMeUF4T1M0eExqSXVPU0F2SURFMUxqSXVNeTR5SUU5aWFtVmpkQzVuWlhSUWNtOTBiM1I1Y0dWUFppaFBLVnh1ZG1GeUlHaGhjeUE5SUhKbGNYVnBjbVVvSnk0dlgyaGhjeWNwTzF4dWRtRnlJSFJ2VDJKcVpXTjBJRDBnY21WeGRXbHlaU2duTGk5ZmRHOHRiMkpxWldOMEp5azdYRzUyWVhJZ1NVVmZVRkpQVkU4Z1BTQnlaWEYxYVhKbEtDY3VMMTl6YUdGeVpXUXRhMlY1Snlrb0owbEZYMUJTVDFSUEp5azdYRzUyWVhJZ1QySnFaV04wVUhKdmRHOGdQU0JQWW1wbFkzUXVjSEp2ZEc5MGVYQmxPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUU5aWFtVmpkQzVuWlhSUWNtOTBiM1I1Y0dWUFppQjhmQ0JtZFc1amRHbHZiaUFvVHlrZ2UxeHVJQ0JQSUQwZ2RHOVBZbXBsWTNRb1R5azdYRzRnSUdsbUlDaG9ZWE1vVHl3Z1NVVmZVRkpQVkU4cEtTQnlaWFIxY200Z1QxdEpSVjlRVWs5VVQxMDdYRzRnSUdsbUlDaDBlWEJsYjJZZ1R5NWpiMjV6ZEhKMVkzUnZjaUE5UFNBblpuVnVZM1JwYjI0bklDWW1JRThnYVc1emRHRnVZMlZ2WmlCUExtTnZibk4wY25WamRHOXlLU0I3WEc0Z0lDQWdjbVYwZFhKdUlFOHVZMjl1YzNSeWRXTjBiM0l1Y0hKdmRHOTBlWEJsTzF4dUlDQjlJSEpsZEhWeWJpQlBJR2x1YzNSaGJtTmxiMllnVDJKcVpXTjBJRDhnVDJKcVpXTjBVSEp2ZEc4Z09pQnVkV3hzTzF4dWZUdGNiaUlzSW5aaGNpQm9ZWE1nUFNCeVpYRjFhWEpsS0NjdUwxOW9ZWE1uS1R0Y2JuWmhjaUIwYjBsUFltcGxZM1FnUFNCeVpYRjFhWEpsS0NjdUwxOTBieTFwYjJKcVpXTjBKeWs3WEc1MllYSWdZWEp5WVhsSmJtUmxlRTltSUQwZ2NtVnhkV2x5WlNnbkxpOWZZWEp5WVhrdGFXNWpiSFZrWlhNbktTaG1ZV3h6WlNrN1hHNTJZWElnU1VWZlVGSlBWRThnUFNCeVpYRjFhWEpsS0NjdUwxOXphR0Z5WldRdGEyVjVKeWtvSjBsRlgxQlNUMVJQSnlrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdLRzlpYW1WamRDd2dibUZ0WlhNcElIdGNiaUFnZG1GeUlFOGdQU0IwYjBsUFltcGxZM1FvYjJKcVpXTjBLVHRjYmlBZ2RtRnlJR2tnUFNBd08xeHVJQ0IyWVhJZ2NtVnpkV3gwSUQwZ1cxMDdYRzRnSUhaaGNpQnJaWGs3WEc0Z0lHWnZjaUFvYTJWNUlHbHVJRThwSUdsbUlDaHJaWGtnSVQwZ1NVVmZVRkpQVkU4cElHaGhjeWhQTENCclpYa3BJQ1ltSUhKbGMzVnNkQzV3ZFhOb0tHdGxlU2s3WEc0Z0lDOHZJRVJ2YmlkMElHVnVkVzBnWW5WbklDWWdhR2xrWkdWdUlHdGxlWE5jYmlBZ2QyaHBiR1VnS0c1aGJXVnpMbXhsYm1kMGFDQStJR2twSUdsbUlDaG9ZWE1vVHl3Z2EyVjVJRDBnYm1GdFpYTmJhU3NyWFNrcElIdGNiaUFnSUNCK1lYSnlZWGxKYm1SbGVFOW1LSEpsYzNWc2RDd2dhMlY1S1NCOGZDQnlaWE4xYkhRdWNIVnphQ2hyWlhrcE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCeVpYTjFiSFE3WEc1OU8xeHVJaXdpTHk4Z01Ua3VNUzR5TGpFMElDOGdNVFV1TWk0ekxqRTBJRTlpYW1WamRDNXJaWGx6S0U4cFhHNTJZWElnSkd0bGVYTWdQU0J5WlhGMWFYSmxLQ2N1TDE5dlltcGxZM1F0YTJWNWN5MXBiblJsY201aGJDY3BPMXh1ZG1GeUlHVnVkVzFDZFdkTFpYbHpJRDBnY21WeGRXbHlaU2duTGk5ZlpXNTFiUzFpZFdjdGEyVjVjeWNwTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFOWlhbVZqZEM1clpYbHpJSHg4SUdaMWJtTjBhVzl1SUd0bGVYTW9UeWtnZTF4dUlDQnlaWFIxY200Z0pHdGxlWE1vVHl3Z1pXNTFiVUoxWjB0bGVYTXBPMXh1ZlR0Y2JpSXNJbVY0Y0c5eWRITXVaaUE5SUh0OUxuQnliM0JsY25SNVNYTkZiblZ0WlhKaFlteGxPMXh1SWl3aUx5OGdiVzl6ZENCUFltcGxZM1FnYldWMGFHOWtjeUJpZVNCRlV6WWdjMmh2ZFd4a0lHRmpZMlZ3ZENCd2NtbHRhWFJwZG1WelhHNTJZWElnSkdWNGNHOXlkQ0E5SUhKbGNYVnBjbVVvSnk0dlgyVjRjRzl5ZENjcE8xeHVkbUZ5SUdOdmNtVWdQU0J5WlhGMWFYSmxLQ2N1TDE5amIzSmxKeWs3WEc1MllYSWdabUZwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMMTltWVdsc2N5Y3BPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUFvUzBWWkxDQmxlR1ZqS1NCN1hHNGdJSFpoY2lCbWJpQTlJQ2hqYjNKbExrOWlhbVZqZENCOGZDQjdmU2xiUzBWWlhTQjhmQ0JQWW1wbFkzUmJTMFZaWFR0Y2JpQWdkbUZ5SUdWNGNDQTlJSHQ5TzF4dUlDQmxlSEJiUzBWWlhTQTlJR1Y0WldNb1ptNHBPMXh1SUNBa1pYaHdiM0owS0NSbGVIQnZjblF1VXlBcklDUmxlSEJ2Y25RdVJpQXFJR1poYVd4ektHWjFibU4wYVc5dUlDZ3BJSHNnWm00b01TazdJSDBwTENBblQySnFaV04wSnl3Z1pYaHdLVHRjYm4wN1hHNGlMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJQ2hpYVhSdFlYQXNJSFpoYkhWbEtTQjdYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdaVzUxYldWeVlXSnNaVG9nSVNoaWFYUnRZWEFnSmlBeEtTeGNiaUFnSUNCamIyNW1hV2QxY21GaWJHVTZJQ0VvWW1sMGJXRndJQ1lnTWlrc1hHNGdJQ0FnZDNKcGRHRmliR1U2SUNFb1ltbDBiV0Z3SUNZZ05Da3NYRzRnSUNBZ2RtRnNkV1U2SUhaaGJIVmxYRzRnSUgwN1hHNTlPMXh1SWl3aWRtRnlJR2RzYjJKaGJDQTlJSEpsY1hWcGNtVW9KeTR2WDJkc2IySmhiQ2NwTzF4dWRtRnlJR2hwWkdVZ1BTQnlaWEYxYVhKbEtDY3VMMTlvYVdSbEp5azdYRzUyWVhJZ2FHRnpJRDBnY21WeGRXbHlaU2duTGk5ZmFHRnpKeWs3WEc1MllYSWdVMUpESUQwZ2NtVnhkV2x5WlNnbkxpOWZkV2xrSnlrb0ozTnlZeWNwTzF4dWRtRnlJQ1IwYjFOMGNtbHVaeUE5SUhKbGNYVnBjbVVvSnk0dlgyWjFibU4wYVc5dUxYUnZMWE4wY21sdVp5Y3BPMXh1ZG1GeUlGUlBYMU5VVWtsT1J5QTlJQ2QwYjFOMGNtbHVaeWM3WEc1MllYSWdWRkJNSUQwZ0tDY25JQ3NnSkhSdlUzUnlhVzVuS1M1emNHeHBkQ2hVVDE5VFZGSkpUa2NwTzF4dVhHNXlaWEYxYVhKbEtDY3VMMTlqYjNKbEp5a3VhVzV6Y0dWamRGTnZkWEpqWlNBOUlHWjFibU4wYVc5dUlDaHBkQ2tnZTF4dUlDQnlaWFIxY200Z0pIUnZVM1J5YVc1bkxtTmhiR3dvYVhRcE8xeHVmVHRjYmx4dUtHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z0tFOHNJR3RsZVN3Z2RtRnNMQ0J6WVdabEtTQjdYRzRnSUhaaGNpQnBjMFoxYm1OMGFXOXVJRDBnZEhsd1pXOW1JSFpoYkNBOVBTQW5ablZ1WTNScGIyNG5PMXh1SUNCcFppQW9hWE5HZFc1amRHbHZiaWtnYUdGektIWmhiQ3dnSjI1aGJXVW5LU0I4ZkNCb2FXUmxLSFpoYkN3Z0oyNWhiV1VuTENCclpYa3BPMXh1SUNCcFppQW9UMXRyWlhsZElEMDlQU0IyWVd3cElISmxkSFZ5Ymp0Y2JpQWdhV1lnS0dselJuVnVZM1JwYjI0cElHaGhjeWgyWVd3c0lGTlNReWtnZkh3Z2FHbGtaU2gyWVd3c0lGTlNReXdnVDF0clpYbGRJRDhnSnljZ0t5QlBXMnRsZVYwZ09pQlVVRXd1YW05cGJpaFRkSEpwYm1jb2EyVjVLU2twTzF4dUlDQnBaaUFvVHlBOVBUMGdaMnh2WW1Gc0tTQjdYRzRnSUNBZ1QxdHJaWGxkSUQwZ2RtRnNPMXh1SUNCOUlHVnNjMlVnYVdZZ0tDRnpZV1psS1NCN1hHNGdJQ0FnWkdWc1pYUmxJRTliYTJWNVhUdGNiaUFnSUNCb2FXUmxLRThzSUd0bGVTd2dkbUZzS1R0Y2JpQWdmU0JsYkhObElHbG1JQ2hQVzJ0bGVWMHBJSHRjYmlBZ0lDQlBXMnRsZVYwZ1BTQjJZV3c3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnYUdsa1pTaFBMQ0JyWlhrc0lIWmhiQ2s3WEc0Z0lIMWNiaTh2SUdGa1pDQm1ZV3RsSUVaMWJtTjBhVzl1STNSdlUzUnlhVzVuSUdadmNpQmpiM0p5WldOMElIZHZjbXNnZDNKaGNIQmxaQ0J0WlhSb2IyUnpJQzhnWTI5dWMzUnlkV04wYjNKeklIZHBkR2dnYldWMGFHOWtjeUJzYVd0bElFeHZSR0Z6YUNCcGMwNWhkR2wyWlZ4dWZTa29SblZ1WTNScGIyNHVjSEp2ZEc5MGVYQmxMQ0JVVDE5VFZGSkpUa2NzSUdaMWJtTjBhVzl1SUhSdlUzUnlhVzVuS0NrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlIUm9hWE1nUFQwZ0oyWjFibU4wYVc5dUp5QW1KaUIwYUdselcxTlNRMTBnZkh3Z0pIUnZVM1J5YVc1bkxtTmhiR3dvZEdocGN5azdYRzU5S1R0Y2JpSXNJblpoY2lCa1pXWWdQU0J5WlhGMWFYSmxLQ2N1TDE5dlltcGxZM1F0WkhBbktTNW1PMXh1ZG1GeUlHaGhjeUE5SUhKbGNYVnBjbVVvSnk0dlgyaGhjeWNwTzF4dWRtRnlJRlJCUnlBOUlISmxjWFZwY21Vb0p5NHZYM2RyY3ljcEtDZDBiMU4wY21sdVoxUmhaeWNwTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlDaHBkQ3dnZEdGbkxDQnpkR0YwS1NCN1hHNGdJR2xtSUNocGRDQW1KaUFoYUdGektHbDBJRDBnYzNSaGRDQS9JR2wwSURvZ2FYUXVjSEp2ZEc5MGVYQmxMQ0JVUVVjcEtTQmtaV1lvYVhRc0lGUkJSeXdnZXlCamIyNW1hV2QxY21GaWJHVTZJSFJ5ZFdVc0lIWmhiSFZsT2lCMFlXY2dmU2s3WEc1OU8xeHVJaXdpZG1GeUlITm9ZWEpsWkNBOUlISmxjWFZwY21Vb0p5NHZYM05vWVhKbFpDY3BLQ2RyWlhsekp5azdYRzUyWVhJZ2RXbGtJRDBnY21WeGRXbHlaU2duTGk5ZmRXbGtKeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUNoclpYa3BJSHRjYmlBZ2NtVjBkWEp1SUhOb1lYSmxaRnRyWlhsZElIeDhJQ2h6YUdGeVpXUmJhMlY1WFNBOUlIVnBaQ2hyWlhrcEtUdGNibjA3WEc0aUxDSjJZWElnWTI5eVpTQTlJSEpsY1hWcGNtVW9KeTR2WDJOdmNtVW5LVHRjYm5aaGNpQm5iRzlpWVd3Z1BTQnlaWEYxYVhKbEtDY3VMMTluYkc5aVlXd25LVHRjYm5aaGNpQlRTRUZTUlVRZ1BTQW5YMTlqYjNKbExXcHpYM05vWVhKbFpGOWZKenRjYm5aaGNpQnpkRzl5WlNBOUlHZHNiMkpoYkZ0VFNFRlNSVVJkSUh4OElDaG5iRzlpWVd4YlUwaEJVa1ZFWFNBOUlIdDlLVHRjYmx4dUtHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z0tHdGxlU3dnZG1Gc2RXVXBJSHRjYmlBZ2NtVjBkWEp1SUhOMGIzSmxXMnRsZVYwZ2ZId2dLSE4wYjNKbFcydGxlVjBnUFNCMllXeDFaU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdkbUZzZFdVZ09pQjdmU2s3WEc1OUtTZ25kbVZ5YzJsdmJuTW5MQ0JiWFNrdWNIVnphQ2g3WEc0Z0lIWmxjbk5wYjI0NklHTnZjbVV1ZG1WeWMybHZiaXhjYmlBZ2JXOWtaVG9nY21WeGRXbHlaU2duTGk5ZmJHbGljbUZ5ZVNjcElEOGdKM0IxY21VbklEb2dKMmRzYjJKaGJDY3NYRzRnSUdOdmNIbHlhV2RvZERvZ0o4S3BJREl3TWpBZ1JHVnVhWE1nVUhWemFHdGhjbVYySUNoNmJHOXBjbTlqYXk1eWRTa25YRzU5S1R0Y2JpSXNJblpoY2lCMGIwbHVkR1ZuWlhJZ1BTQnlaWEYxYVhKbEtDY3VMMTkwYnkxcGJuUmxaMlZ5SnlrN1hHNTJZWElnYldGNElEMGdUV0YwYUM1dFlYZzdYRzUyWVhJZ2JXbHVJRDBnVFdGMGFDNXRhVzQ3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUNocGJtUmxlQ3dnYkdWdVozUm9LU0I3WEc0Z0lHbHVaR1Y0SUQwZ2RHOUpiblJsWjJWeUtHbHVaR1Y0S1R0Y2JpQWdjbVYwZFhKdUlHbHVaR1Y0SUR3Z01DQS9JRzFoZUNocGJtUmxlQ0FySUd4bGJtZDBhQ3dnTUNrZ09pQnRhVzRvYVc1a1pYZ3NJR3hsYm1kMGFDazdYRzU5TzF4dUlpd2lMeThnTnk0eExqUWdWRzlKYm5SbFoyVnlYRzUyWVhJZ1kyVnBiQ0E5SUUxaGRHZ3VZMlZwYkR0Y2JuWmhjaUJtYkc5dmNpQTlJRTFoZEdndVpteHZiM0k3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUNocGRDa2dlMXh1SUNCeVpYUjFjbTRnYVhOT1lVNG9hWFFnUFNBcmFYUXBJRDhnTUNBNklDaHBkQ0ErSURBZ1B5Qm1iRzl2Y2lBNklHTmxhV3dwS0dsMEtUdGNibjA3WEc0aUxDSXZMeUIwYnlCcGJtUmxlR1ZrSUc5aWFtVmpkQ3dnZEc5UFltcGxZM1FnZDJsMGFDQm1ZV3hzWW1GamF5Qm1iM0lnYm05dUxXRnljbUY1TFd4cGEyVWdSVk16SUhOMGNtbHVaM05jYm5aaGNpQkpUMkpxWldOMElEMGdjbVZ4ZFdseVpTZ25MaTlmYVc5aWFtVmpkQ2NwTzF4dWRtRnlJR1JsWm1sdVpXUWdQU0J5WlhGMWFYSmxLQ2N1TDE5a1pXWnBibVZrSnlrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlDaHBkQ2tnZTF4dUlDQnlaWFIxY200Z1NVOWlhbVZqZENoa1pXWnBibVZrS0dsMEtTazdYRzU5TzF4dUlpd2lMeThnTnk0eExqRTFJRlJ2VEdWdVozUm9YRzUyWVhJZ2RHOUpiblJsWjJWeUlEMGdjbVZ4ZFdseVpTZ25MaTlmZEc4dGFXNTBaV2RsY2ljcE8xeHVkbUZ5SUcxcGJpQTlJRTFoZEdndWJXbHVPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUFvYVhRcElIdGNiaUFnY21WMGRYSnVJR2wwSUQ0Z01DQS9JRzFwYmloMGIwbHVkR1ZuWlhJb2FYUXBMQ0F3ZURGbVptWm1abVptWm1abVptWm1LU0E2SURBN0lDOHZJSEJ2ZHlneUxDQTFNeWtnTFNBeElEMDlJRGt3TURjeE9Ua3lOVFEzTkRBNU9URmNibjA3WEc0aUxDSXZMeUEzTGpFdU1UTWdWRzlQWW1wbFkzUW9ZWEpuZFcxbGJuUXBYRzUyWVhJZ1pHVm1hVzVsWkNBOUlISmxjWFZwY21Vb0p5NHZYMlJsWm1sdVpXUW5LVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnS0dsMEtTQjdYRzRnSUhKbGRIVnliaUJQWW1wbFkzUW9aR1ZtYVc1bFpDaHBkQ2twTzF4dWZUdGNiaUlzSWk4dklEY3VNUzR4SUZSdlVISnBiV2wwYVhabEtHbHVjSFYwSUZzc0lGQnlaV1psY25KbFpGUjVjR1ZkS1Z4dWRtRnlJR2x6VDJKcVpXTjBJRDBnY21WeGRXbHlaU2duTGk5ZmFYTXRiMkpxWldOMEp5azdYRzR2THlCcGJuTjBaV0ZrSUc5bUlIUm9aU0JGVXpZZ2MzQmxZeUIyWlhKemFXOXVMQ0IzWlNCa2FXUnVKM1FnYVcxd2JHVnRaVzUwSUVCQWRHOVFjbWx0YVhScGRtVWdZMkZ6WlZ4dUx5OGdZVzVrSUhSb1pTQnpaV052Ym1RZ1lYSm5kVzFsYm5RZ0xTQm1iR0ZuSUMwZ2NISmxabVZ5Y21Wa0lIUjVjR1VnYVhNZ1lTQnpkSEpwYm1kY2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z0tHbDBMQ0JUS1NCN1hHNGdJR2xtSUNnaGFYTlBZbXBsWTNRb2FYUXBLU0J5WlhSMWNtNGdhWFE3WEc0Z0lIWmhjaUJtYml3Z2RtRnNPMXh1SUNCcFppQW9VeUFtSmlCMGVYQmxiMllnS0dadUlEMGdhWFF1ZEc5VGRISnBibWNwSUQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnSVdselQySnFaV04wS0haaGJDQTlJR1p1TG1OaGJHd29hWFFwS1NrZ2NtVjBkWEp1SUhaaGJEdGNiaUFnYVdZZ0tIUjVjR1Z2WmlBb1ptNGdQU0JwZEM1MllXeDFaVTltS1NBOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUNGcGMwOWlhbVZqZENoMllXd2dQU0JtYmk1allXeHNLR2wwS1NrcElISmxkSFZ5YmlCMllXdzdYRzRnSUdsbUlDZ2hVeUFtSmlCMGVYQmxiMllnS0dadUlEMGdhWFF1ZEc5VGRISnBibWNwSUQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnSVdselQySnFaV04wS0haaGJDQTlJR1p1TG1OaGJHd29hWFFwS1NrZ2NtVjBkWEp1SUhaaGJEdGNiaUFnZEdoeWIzY2dWSGx3WlVWeWNtOXlLRndpUTJGdUozUWdZMjl1ZG1WeWRDQnZZbXBsWTNRZ2RHOGdjSEpwYldsMGFYWmxJSFpoYkhWbFhDSXBPMXh1ZlR0Y2JpSXNJblpoY2lCcFpDQTlJREE3WEc1MllYSWdjSGdnUFNCTllYUm9MbkpoYm1SdmJTZ3BPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUFvYTJWNUtTQjdYRzRnSUhKbGRIVnliaUFuVTNsdFltOXNLQ2N1WTI5dVkyRjBLR3RsZVNBOVBUMGdkVzVrWldacGJtVmtJRDhnSnljZ09pQnJaWGtzSUNjcFh5Y3NJQ2dySzJsa0lDc2djSGdwTG5SdlUzUnlhVzVuS0RNMktTazdYRzU5TzF4dUlpd2lkbUZ5SUhOMGIzSmxJRDBnY21WeGRXbHlaU2duTGk5ZmMyaGhjbVZrSnlrb0ozZHJjeWNwTzF4dWRtRnlJSFZwWkNBOUlISmxjWFZwY21Vb0p5NHZYM1ZwWkNjcE8xeHVkbUZ5SUZONWJXSnZiQ0E5SUhKbGNYVnBjbVVvSnk0dlgyZHNiMkpoYkNjcExsTjViV0p2YkR0Y2JuWmhjaUJWVTBWZlUxbE5RazlNSUQwZ2RIbHdaVzltSUZONWJXSnZiQ0E5UFNBblpuVnVZM1JwYjI0bk8xeHVYRzUyWVhJZ0pHVjRjRzl5ZEhNZ1BTQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlDaHVZVzFsS1NCN1hHNGdJSEpsZEhWeWJpQnpkRzl5WlZ0dVlXMWxYU0I4ZkNBb2MzUnZjbVZiYm1GdFpWMGdQVnh1SUNBZ0lGVlRSVjlUV1UxQ1Qwd2dKaVlnVTNsdFltOXNXMjVoYldWZElIeDhJQ2hWVTBWZlUxbE5RazlNSUQ4Z1UzbHRZbTlzSURvZ2RXbGtLU2duVTNsdFltOXNMaWNnS3lCdVlXMWxLU2s3WEc1OU8xeHVYRzRrWlhod2IzSjBjeTV6ZEc5eVpTQTlJSE4wYjNKbE8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVkbUZ5SUdGa1pGUnZWVzV6WTI5d1lXSnNaWE1nUFNCeVpYRjFhWEpsS0NjdUwxOWhaR1F0ZEc4dGRXNXpZMjl3WVdKc1pYTW5LVHRjYm5aaGNpQnpkR1Z3SUQwZ2NtVnhkV2x5WlNnbkxpOWZhWFJsY2kxemRHVndKeWs3WEc1MllYSWdTWFJsY21GMGIzSnpJRDBnY21WeGRXbHlaU2duTGk5ZmFYUmxjbUYwYjNKekp5azdYRzUyWVhJZ2RHOUpUMkpxWldOMElEMGdjbVZ4ZFdseVpTZ25MaTlmZEc4dGFXOWlhbVZqZENjcE8xeHVYRzR2THlBeU1pNHhMak11TkNCQmNuSmhlUzV3Y205MGIzUjVjR1V1Wlc1MGNtbGxjeWdwWEc0dkx5QXlNaTR4TGpNdU1UTWdRWEp5WVhrdWNISnZkRzkwZVhCbExtdGxlWE1vS1Z4dUx5OGdNakl1TVM0ekxqSTVJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNTJZV3gxWlhNb0tWeHVMeThnTWpJdU1TNHpMak13SUVGeWNtRjVMbkJ5YjNSdmRIbHdaVnRBUUdsMFpYSmhkRzl5WFNncFhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlISmxjWFZwY21Vb0p5NHZYMmwwWlhJdFpHVm1hVzVsSnlrb1FYSnlZWGtzSUNkQmNuSmhlU2NzSUdaMWJtTjBhVzl1SUNocGRHVnlZWFJsWkN3Z2EybHVaQ2tnZTF4dUlDQjBhR2x6TGw5MElEMGdkRzlKVDJKcVpXTjBLR2wwWlhKaGRHVmtLVHNnTHk4Z2RHRnlaMlYwWEc0Z0lIUm9hWE11WDJrZ1BTQXdPeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCdVpYaDBJR2x1WkdWNFhHNGdJSFJvYVhNdVgyc2dQU0JyYVc1a095QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QnJhVzVrWEc0dkx5QXlNaTR4TGpVdU1pNHhJQ1ZCY25KaGVVbDBaWEpoZEc5eVVISnZkRzkwZVhCbEpTNXVaWGgwS0NsY2JuMHNJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdkbUZ5SUU4Z1BTQjBhR2x6TGw5ME8xeHVJQ0IyWVhJZ2EybHVaQ0E5SUhSb2FYTXVYMnM3WEc0Z0lIWmhjaUJwYm1SbGVDQTlJSFJvYVhNdVgya3JLenRjYmlBZ2FXWWdLQ0ZQSUh4OElHbHVaR1Y0SUQ0OUlFOHViR1Z1WjNSb0tTQjdYRzRnSUNBZ2RHaHBjeTVmZENBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNCeVpYUjFjbTRnYzNSbGNDZ3hLVHRjYmlBZ2ZWeHVJQ0JwWmlBb2EybHVaQ0E5UFNBbmEyVjVjeWNwSUhKbGRIVnliaUJ6ZEdWd0tEQXNJR2x1WkdWNEtUdGNiaUFnYVdZZ0tHdHBibVFnUFQwZ0ozWmhiSFZsY3ljcElISmxkSFZ5YmlCemRHVndLREFzSUU5YmFXNWtaWGhkS1R0Y2JpQWdjbVYwZFhKdUlITjBaWEFvTUN3Z1cybHVaR1Y0TENCUFcybHVaR1Y0WFYwcE8xeHVmU3dnSjNaaGJIVmxjeWNwTzF4dVhHNHZMeUJoY21kMWJXVnVkSE5NYVhOMFcwQkFhWFJsY21GMGIzSmRJR2x6SUNWQmNuSmhlVkJ5YjNSdlgzWmhiSFZsY3lVZ0tEa3VOQzQwTGpZc0lEa3VOQzQwTGpjcFhHNUpkR1Z5WVhSdmNuTXVRWEpuZFcxbGJuUnpJRDBnU1hSbGNtRjBiM0p6TGtGeWNtRjVPMXh1WEc1aFpHUlViMVZ1YzJOdmNHRmliR1Z6S0NkclpYbHpKeWs3WEc1aFpHUlViMVZ1YzJOdmNHRmliR1Z6S0NkMllXeDFaWE1uS1R0Y2JtRmtaRlJ2Vlc1elkyOXdZV0pzWlhNb0oyVnVkSEpwWlhNbktUdGNiaUlzSWk4dklERTVMakV1TXk0eElFOWlhbVZqZEM1aGMzTnBaMjRvZEdGeVoyVjBMQ0J6YjNWeVkyVXBYRzUyWVhJZ0pHVjRjRzl5ZENBOUlISmxjWFZwY21Vb0p5NHZYMlY0Y0c5eWRDY3BPMXh1WEc0a1pYaHdiM0owS0NSbGVIQnZjblF1VXlBcklDUmxlSEJ2Y25RdVJpd2dKMDlpYW1WamRDY3NJSHNnWVhOemFXZHVPaUJ5WlhGMWFYSmxLQ2N1TDE5dlltcGxZM1F0WVhOemFXZHVKeWtnZlNrN1hHNGlMQ0l2THlBeE9TNHhMakl1TVRRZ1QySnFaV04wTG10bGVYTW9UeWxjYm5aaGNpQjBiMDlpYW1WamRDQTlJSEpsY1hWcGNtVW9KeTR2WDNSdkxXOWlhbVZqZENjcE8xeHVkbUZ5SUNSclpYbHpJRDBnY21WeGRXbHlaU2duTGk5ZmIySnFaV04wTFd0bGVYTW5LVHRjYmx4dWNtVnhkV2x5WlNnbkxpOWZiMkpxWldOMExYTmhjQ2NwS0NkclpYbHpKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdhMlY1Y3locGRDa2dlMXh1SUNBZ0lISmxkSFZ5YmlBa2EyVjVjeWgwYjA5aWFtVmpkQ2hwZENrcE8xeHVJQ0I5TzF4dWZTazdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzR2THlBeE9TNHhMak11TmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuS0NsY2JuWmhjaUJqYkdGemMyOW1JRDBnY21WeGRXbHlaU2duTGk5ZlkyeGhjM052WmljcE8xeHVkbUZ5SUhSbGMzUWdQU0I3ZlR0Y2JuUmxjM1JiY21WeGRXbHlaU2duTGk5ZmQydHpKeWtvSjNSdlUzUnlhVzVuVkdGbkp5bGRJRDBnSjNvbk8xeHVhV1lnS0hSbGMzUWdLeUFuSnlBaFBTQW5XMjlpYW1WamRDQjZYU2NwSUh0Y2JpQWdjbVZ4ZFdseVpTZ25MaTlmY21Wa1pXWnBibVVuS1NoUFltcGxZM1F1Y0hKdmRHOTBlWEJsTENBbmRHOVRkSEpwYm1jbkxDQm1kVzVqZEdsdmJpQjBiMU4wY21sdVp5Z3BJSHRjYmlBZ0lDQnlaWFIxY200Z0oxdHZZbXBsWTNRZ0p5QXJJR05zWVhOemIyWW9kR2hwY3lrZ0t5QW5YU2M3WEc0Z0lIMHNJSFJ5ZFdVcE8xeHVmVnh1SWl3aWRtRnlJQ1JwZEdWeVlYUnZjbk1nUFNCeVpYRjFhWEpsS0NjdUwyVnpOaTVoY25KaGVTNXBkR1Z5WVhSdmNpY3BPMXh1ZG1GeUlHZGxkRXRsZVhNZ1BTQnlaWEYxYVhKbEtDY3VMMTl2WW1wbFkzUXRhMlY1Y3ljcE8xeHVkbUZ5SUhKbFpHVm1hVzVsSUQwZ2NtVnhkV2x5WlNnbkxpOWZjbVZrWldacGJtVW5LVHRjYm5aaGNpQm5iRzlpWVd3Z1BTQnlaWEYxYVhKbEtDY3VMMTluYkc5aVlXd25LVHRjYm5aaGNpQm9hV1JsSUQwZ2NtVnhkV2x5WlNnbkxpOWZhR2xrWlNjcE8xeHVkbUZ5SUVsMFpYSmhkRzl5Y3lBOUlISmxjWFZwY21Vb0p5NHZYMmwwWlhKaGRHOXljeWNwTzF4dWRtRnlJSGRyY3lBOUlISmxjWFZwY21Vb0p5NHZYM2RyY3ljcE8xeHVkbUZ5SUVsVVJWSkJWRTlTSUQwZ2QydHpLQ2RwZEdWeVlYUnZjaWNwTzF4dWRtRnlJRlJQWDFOVVVrbE9SMTlVUVVjZ1BTQjNhM01vSjNSdlUzUnlhVzVuVkdGbkp5azdYRzUyWVhJZ1FYSnlZWGxXWVd4MVpYTWdQU0JKZEdWeVlYUnZjbk11UVhKeVlYazdYRzVjYm5aaGNpQkVUMDFKZEdWeVlXSnNaWE1nUFNCN1hHNGdJRU5UVTFKMWJHVk1hWE4wT2lCMGNuVmxMQ0F2THlCVVQwUlBPaUJPYjNRZ2MzQmxZeUJqYjIxd2JHbGhiblFzSUhOb2IzVnNaQ0JpWlNCbVlXeHpaUzVjYmlBZ1ExTlRVM1I1YkdWRVpXTnNZWEpoZEdsdmJqb2dabUZzYzJVc1hHNGdJRU5UVTFaaGJIVmxUR2x6ZERvZ1ptRnNjMlVzWEc0Z0lFTnNhV1Z1ZEZKbFkzUk1hWE4wT2lCbVlXeHpaU3hjYmlBZ1JFOU5VbVZqZEV4cGMzUTZJR1poYkhObExGeHVJQ0JFVDAxVGRISnBibWRNYVhOME9pQm1ZV3h6WlN4Y2JpQWdSRTlOVkc5clpXNU1hWE4wT2lCMGNuVmxMRnh1SUNCRVlYUmhWSEpoYm5ObVpYSkpkR1Z0VEdsemREb2dabUZzYzJVc1hHNGdJRVpwYkdWTWFYTjBPaUJtWVd4elpTeGNiaUFnU0ZSTlRFRnNiRU52Ykd4bFkzUnBiMjQ2SUdaaGJITmxMRnh1SUNCSVZFMU1RMjlzYkdWamRHbHZiam9nWm1Gc2MyVXNYRzRnSUVoVVRVeEdiM0p0Uld4bGJXVnVkRG9nWm1Gc2MyVXNYRzRnSUVoVVRVeFRaV3hsWTNSRmJHVnRaVzUwT2lCbVlXeHpaU3hjYmlBZ1RXVmthV0ZNYVhOME9pQjBjblZsTENBdkx5QlVUMFJQT2lCT2IzUWdjM0JsWXlCamIyMXdiR2xoYm5Rc0lITm9iM1ZzWkNCaVpTQm1ZV3h6WlM1Y2JpQWdUV2x0WlZSNWNHVkJjbkpoZVRvZ1ptRnNjMlVzWEc0Z0lFNWhiV1ZrVG05a1pVMWhjRG9nWm1Gc2MyVXNYRzRnSUU1dlpHVk1hWE4wT2lCMGNuVmxMRnh1SUNCUVlXbHVkRkpsY1hWbGMzUk1hWE4wT2lCbVlXeHpaU3hjYmlBZ1VHeDFaMmx1T2lCbVlXeHpaU3hjYmlBZ1VHeDFaMmx1UVhKeVlYazZJR1poYkhObExGeHVJQ0JUVmtkTVpXNW5kR2hNYVhOME9pQm1ZV3h6WlN4Y2JpQWdVMVpIVG5WdFltVnlUR2x6ZERvZ1ptRnNjMlVzWEc0Z0lGTldSMUJoZEdoVFpXZE1hWE4wT2lCbVlXeHpaU3hjYmlBZ1UxWkhVRzlwYm5STWFYTjBPaUJtWVd4elpTeGNiaUFnVTFaSFUzUnlhVzVuVEdsemREb2dabUZzYzJVc1hHNGdJRk5XUjFSeVlXNXpabTl5YlV4cGMzUTZJR1poYkhObExGeHVJQ0JUYjNWeVkyVkNkV1ptWlhKTWFYTjBPaUJtWVd4elpTeGNiaUFnVTNSNWJHVlRhR1ZsZEV4cGMzUTZJSFJ5ZFdVc0lDOHZJRlJQUkU4NklFNXZkQ0J6Y0dWaklHTnZiWEJzYVdGdWRDd2djMmh2ZFd4a0lHSmxJR1poYkhObExseHVJQ0JVWlhoMFZISmhZMnREZFdWTWFYTjBPaUJtWVd4elpTeGNiaUFnVkdWNGRGUnlZV05yVEdsemREb2dabUZzYzJVc1hHNGdJRlJ2ZFdOb1RHbHpkRG9nWm1Gc2MyVmNibjA3WEc1Y2JtWnZjaUFvZG1GeUlHTnZiR3hsWTNScGIyNXpJRDBnWjJWMFMyVjVjeWhFVDAxSmRHVnlZV0pzWlhNcExDQnBJRDBnTURzZ2FTQThJR052Ykd4bFkzUnBiMjV6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUhaaGNpQk9RVTFGSUQwZ1kyOXNiR1ZqZEdsdmJuTmJhVjA3WEc0Z0lIWmhjaUJsZUhCc2FXTnBkQ0E5SUVSUFRVbDBaWEpoWW14bGMxdE9RVTFGWFR0Y2JpQWdkbUZ5SUVOdmJHeGxZM1JwYjI0Z1BTQm5iRzlpWVd4YlRrRk5SVjA3WEc0Z0lIWmhjaUJ3Y205MGJ5QTlJRU52Ykd4bFkzUnBiMjRnSmlZZ1EyOXNiR1ZqZEdsdmJpNXdjbTkwYjNSNWNHVTdYRzRnSUhaaGNpQnJaWGs3WEc0Z0lHbG1JQ2h3Y205MGJ5a2dlMXh1SUNBZ0lHbG1JQ2doY0hKdmRHOWJTVlJGVWtGVVQxSmRLU0JvYVdSbEtIQnliM1J2TENCSlZFVlNRVlJQVWl3Z1FYSnlZWGxXWVd4MVpYTXBPMXh1SUNBZ0lHbG1JQ2doY0hKdmRHOWJWRTlmVTFSU1NVNUhYMVJCUjEwcElHaHBaR1VvY0hKdmRHOHNJRlJQWDFOVVVrbE9SMTlVUVVjc0lFNUJUVVVwTzF4dUlDQWdJRWwwWlhKaGRHOXljMXRPUVUxRlhTQTlJRUZ5Y21GNVZtRnNkV1Z6TzF4dUlDQWdJR2xtSUNobGVIQnNhV05wZENrZ1ptOXlJQ2hyWlhrZ2FXNGdKR2wwWlhKaGRHOXljeWtnYVdZZ0tDRndjbTkwYjF0clpYbGRLU0J5WldSbFptbHVaU2h3Y205MGJ5d2dhMlY1TENBa2FYUmxjbUYwYjNKelcydGxlVjBzSUhSeWRXVXBPMXh1SUNCOVhHNTlYRzRpTENKbGVIQnZjblFnWTJ4aGMzTWdRMjl1ZEdWNGRDQjdYSEpjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWdwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG1OdmJYQnZibVZ1ZEhNZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0c1MWJHd3BPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdhVzVwZENncElIdGNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNGlMQ0l2THlEbHZaUGxpWTNudTRUa3U3WnBaRnh5WEc1c1pYUWdZMmxrSUQwZ01EdGNjbHh1THk4ZzVyT281WWFNNUxxTDVMdTI2WmlmNVlpWFhISmNibXhsZENCeGRXVjFaU0E5SUZ0ZE8xeHlYRzR2THlEa3VMcmxpcURsaGFWa2IyM21vSkhsclpEbnU0VGt1N1pjY2x4dWJHVjBJR05vYVd4a1RtOWtaWE1nUFNCYlhUdGNjbHh1YkdWMElIQmxibVJwYm1jZ1BTQm1ZV3h6WlR0Y2NseHVablZ1WTNScGIyNGdabXgxYzJnb0tTQjdYSEpjYmlBZ0lDQnBaaUFvY0dWdVpHbHVaeWtnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUhCbGJtUnBibWNnUFNCMGNuVmxPMXh5WEc0Z0lDQWdjMlYwVkdsdFpXOTFkQ2dvS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnZEdGemF5Z3BPMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDaGphR2xzWkU1dlpHVnpMbXhsYm1kMGFDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpaWFJVYVcxbGIzVjBLSFJoYzJzc0lEQXBPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQmxiSE5sSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMyOXNaUzUwYVcxbFJXNWtLQ2QwWlhOMEp5azdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIQmxibVJwYm1jZ1BTQm1ZV3h6WlR0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlMQ0F3S1R0Y2NseHVmVnh5WEc1bWRXNWpkR2x2YmlCMFlYTnJLQ2tnZTF4eVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCamFHbHNaRTV2WkdWekxteGxibWQwYURzZ2FTQTlJR2tnS3lBeUtTQjdYSEpjYmlBZ0lDQWdJQ0FnZEhKNUlIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSEJzWVdObGFHOXNaR1Z5SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWhnV3lSN1kyaHBiR1JPYjJSbGMxdHBYWDFkWUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQmphR2xzWkNBOUlHTm9hV3hrVG05a1pYTmJhU0FySURGZE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jR3hoWTJWb2IyeGtaWElnSmlZZ2NHeGhZMlZvYjJ4a1pYSXVjR0Z5Wlc1MFRtOWtaU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NHeGhZMlZvYjJ4a1pYSXVjR0Z5Wlc1MFRtOWtaUzV5WlhCc1lXTmxRMmhwYkdRb1kyaHBiR1FzSUhCc1lXTmxhRzlzWkdWeUtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vYVd4a1RtOWtaWE11YzNCc2FXTmxLR2tzSURJcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhU0F0UFNBeU8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUdOaGRHTm9JQ2hsS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTnZiR1V1Ykc5bktDZGxjbkp2Y2lCcGJpQjBZWE5yT2lBbkxDQmxLVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibjFjY2x4dVpuVnVZM1JwYjI0Z1lYQndaVzVrUTJocGJHUW9hSFJ0YkN3Z1kyaHBiR1J5Wlc0cElIdGNjbHh1SUNBZ0lDOHZJR05vYVd4a2NtVnVJQ1ltSUNCamFHbHNaSEpsYmk1bWIzSkZZV05vS0dOb2FXeGtJRDArSUh0Y2NseHVJQ0FnSUM4dklDQWdhV1lnS0dOb2FXeGtMbTV2WkdWVWVYQmxJRDA5SURFcElIdGNjbHh1SUNBZ0lDOHZJQ0FnSUNCc1pYUWdjR3hoWTJWb2IyeGtaWElnUFNCZ1kyOXRjRzl1Ym1WMExYQnNZV05sYUc5c1pHVnlMU1I3WTJocGJHUk9iMlJsY3k1c1pXNW5kR2g5WUZ4eVhHNGdJQ0FnTHk4Z0lDQWdJR2gwYld3Z0t6MGdZRHhrYVhZZ0pIdHdiR0ZqWldodmJHUmxjbjArUEM5a2FYWStZRnh5WEc0Z0lDQWdMeThnSUNBZ0lHTm9hV3hrVG05a1pYTXVjSFZ6YUNod2JHRmpaV2h2YkdSbGNpbGNjbHh1SUNBZ0lDOHZJQ0FnSUNCamFHbHNaRTV2WkdWekxuQjFjMmdvWTJocGJHUXBYSEpjYmlBZ0lDQXZMeUFnSUNBZ1pteDFjMmdvS1Z4eVhHNGdJQ0FnTHk4Z0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0x5OGdJQ0FnSUdoMGJXd2dLejBnUVhKeVlYa3VhWE5CY25KaGVTaGphR2xzWkNrL0lHTm9hV3hrTG1wdmFXNG9KeWNwT2lCamFHbHNaRnh5WEc0Z0lDQWdMeThnSUNCOVhISmNiaUFnSUNBdkx5QjlLVnh5WEc0Z0lDQWdMeThnY21WMGRYSnVJR2gwYld4Y2NseHVJQ0FnSUdOb2FXeGtjbVZ1SUNZbUlHTm9hV3hrY21WdUxtWnZja1ZoWTJnb1kyaHBiR1FnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJR2xtSUNoamFHbHNaQzV1YjJSbFZIbHdaU0E5UFNBeEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J3YkdGalpXaHZiR1JsY2lBOUlHQmpiMjF3YjI1dVpYUXRjR3hoWTJWb2IyeGtaWEl0Skh0amFHbHNaRTV2WkdWekxteGxibWQwYUgxZ08xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCb2RHMXNJQ3M5SUdBOFpHbDJJQ1I3Y0d4aFkyVm9iMnhrWlhKOVBqd3ZaR2wyUG1BN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOb2FXeGtUbTlrWlhNdWNIVnphQ2h3YkdGalpXaHZiR1JsY2lrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOb2FXeGtUbTlrWlhNdWNIVnphQ2hqYUdsc1pDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnNkWE5vS0NrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvUVhKeVlYa3VhWE5CY25KaGVTaGphR2xzWkNrcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2gwYld3Z1BTQmhjSEJsYm1SRGFHbHNaQ2hvZEcxc0xDQmphR2xzWkNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JvZEcxc0lDczlJR05vYVd4a08xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmU2s3WEhKY2JpQWdJQ0J5WlhSMWNtNGdhSFJ0YkR0Y2NseHVmVnh5WEc1bWRXNWpkR2x2YmlCa2IyMG9kR0ZuTENCaGRIUnljeXdnTGk0dVkyaHBiR1J5Wlc0cElIdGNjbHh1SUNBZ0lDOHZJR052Ym5OdmJHVXVaWEp5YjNJb2RHRm5MQ0JoZEhSeWN5d2dZMmhwYkdSeVpXNHBYSEpjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JSFJoWnlBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4eVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUhKbGMzVnNkQ0E5SUhSaFp5aFBZbXBsWTNRdVlYTnphV2R1S0h0OUxDQmhkSFJ5Y3l3Z2V5QmphR2xzWkhKbGJpQjlLU2s3WEhKY2JpQWdJQ0FnSUNBZ0x5OGdjbVYwZFhKdUlISmxjM1ZzZENBOVBUMGdKMFpTUVVkTlJVNVVKeUEvSUdOb2FXeGtjbVZ1SURvZ2NtVnpkV3gwWEhKY2JpQWdJQ0FnSUNBZ2FXWWdLSEpsYzNWc2RDQTlQVDBnSjBaU1FVZE5SVTVVSnlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWTJocGJHUnlaVzQ3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnS0daMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCa2FYWWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZGthWFluS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUnBkaTVwYm01bGNraFVUVXdnUFNCeVpYTjFiSFE3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdZM1Z5Y21WdWRDQTlJRzUxYkd3N1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjNhR2xzWlNBb2NYVmxkV1V1YkdWdVozUm9JRDRnTUNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblFnUFNCeGRXVjFaUzV3YjNBb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZM1Z5Y21WdWRDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBLR1JwZGlrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRDQTlJRzUxYkd3N1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1pHbDJMbU5vYVd4a2NtVnVXekJkTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1NncE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dUlDQWdJR2xtSUNoMGVYQmxiMllnZEdGbklEMDlQU0FuYzNSeWFXNW5KeWtnZTF4eVhHNGdJQ0FnSUNBZ0lHeGxkQ0JvZEcxc0lEMGdKeWM3WEhKY2JpQWdJQ0FnSUNBZ2FIUnRiQ0FyUFNCZ1BDUjdkR0ZuZldBN1hISmNiaUFnSUNBZ0lDQWdZWFIwY25NZ0ppWWdUMkpxWldOMExtdGxlWE1vWVhSMGNuTXBMbVp2Y2tWaFkyZ29hMlY1SUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQzllYjI0dkxuUmxjM1FvYTJWNUtTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHaGhibVJzWlVsa0lEMGdZR1JoZEdVdGFHRnVaR3hsY2kwa2UyTnBaQ3NyZldBN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9kRzFzSUNzOUlHQWdJQ1I3YUdGdVpHeGxTV1I5WUR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDaG1kVzVqZEdsdmJpQW9hR0Z1Wkd4bFNXUXNJR3RsZVN3Z2FHRnVaR3hsY2lrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhGMVpYVmxMbkIxYzJnb0tIQmhjbVZ1ZENrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ1pYWmxiblJPWVcxbElEMGdhMlY1TG5Oc2FXTmxLRElwTG5SdlRHOTNaWEpEWVhObEtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCa2IyMGdQU0J3WVhKbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2loZ1d5UjdhR0Z1Wkd4bFNXUjlYV0FwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9aRzl0S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrYjIwdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lobGRtVnVkRTVoYldVc0lHaGhibVJzWlhJcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5S1Nob1lXNWtiR1ZKWkN3Z2EyVjVMQ0JoZEhSeWMxdHJaWGxkS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2gwYld3Z0t6MGdZQ0FrZTJ0bGVYMDlYQ0lrZTJGMGRISnpXMnRsZVYxOVhDSmdPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lDQWdhSFJ0YkNBclBTQW5QaWM3WEhKY2JpQWdJQ0FnSUNBZ2FIUnRiQ0E5SUdGd2NHVnVaRU5vYVd4a0tHaDBiV3dzSUdOb2FXeGtjbVZ1S1R0Y2NseHVJQ0FnSUNBZ0lDQm9kRzFzSUNzOUlHQThMeVI3ZEdGbmZUNWdPMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJvZEcxc08xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dCa2IyVnpJRzV2ZENCb1lXNWtiR1VnSkh0MGVYQmxiMllnZEdGbmZXQXBPMXh5WEc1OVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElHUnZiVHRjY2x4dVpYaHdiM0owSUdOdmJuTjBJRVp5WVdkdFpXNTBJRDBnS0NrZ1BUNGdKMFpTUVVkTlJVNVVKenRjY2x4dUlpd2lhVzF3YjNKMElIc2dkRzlCY25KaGVTQjlJR1p5YjIwZ0p5NHZkWFJwYkNjN1hISmNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVWMlpXNTBSVzFwZEhSbGNpQjdYSEpjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWdwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TGw5bGRtVnVkSE1nUFNCUFltcGxZM1F1WTNKbFlYUmxLRzUxYkd3cE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLbHh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHR6ZEhKcGJtY2dmQ0JCY25KaGVUeHpkSEpwYm1jK2ZTQmxkbVZ1ZEZ4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym4wZ1ptNWNjbHh1SUNBZ0lDQXFMMXh5WEc0Z0lDQWdiMjRvWlhabGJuUXNJR1p1S1NCN1hISmNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RtMGdQU0IwYUdsek8xeHlYRzRnSUNBZ0lDQWdJR2xtSUNoQmNuSmhlUzVwYzBGeWNtRjVLR1YyWlc1MEtTa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTUN3Z2JDQTlJR1YyWlc1MExteGxibWQwYURzZ2FTQThJR3c3SUdrckt5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG0wdWIyNG9aWFpsYm5SYmFWMHNJR1p1S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0tIWnRMbDlsZG1WdWRITmJaWFpsYm5SZElIeDhJQ2gyYlM1ZlpYWmxiblJ6VzJWMlpXNTBYU0E5SUZ0ZEtTa3VjSFZ6YUNobWJpazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMmJUdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3YzNSeWFXNW5mU0JsZG1WdWRGeHlYRzRnSUNBZ0lDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdabTVjY2x4dUlDQWdJQ0FxTDF4eVhHNGdJQ0FnYjI1alpTaGxkbVZ1ZEN3Z1ptNHBJSHRjY2x4dUlDQWdJQ0FnSUNCamIyNXpkQ0IyYlNBOUlIUm9hWE03WEhKY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z2IyNG9LU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFp0TG05bVppaGxkbVZ1ZEN3Z2IyNHBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iaTVoY0hCc2VTaDJiU3dnWVhKbmRXMWxiblJ6S1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnYjI0dVptNGdQU0JtYmp0Y2NseHVJQ0FnSUNBZ0lDQjJiUzV2YmlobGRtVnVkQ3dnYjI0cE8xeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjJiVHRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNwY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCN2MzUnlhVzVuSUh3Z1FYSnlZWGs4YzNSeWFXNW5QbjBnWlhabGJuUmNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR1p1WEhKY2JpQWdJQ0FnS2k5Y2NseHVJQ0FnSUc5bVppaGxkbVZ1ZEN3Z1ptNHBJSHRjY2x4dUlDQWdJQ0FnSUNCamIyNXpkQ0IyYlNBOUlIUm9hWE03WEhKY2JpQWdJQ0FnSUNBZ0x5OGdZV3hzWEhKY2JpQWdJQ0FnSUNBZ2FXWWdLR1YyWlc1MElEMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyYlM1ZlpYWmxiblJ6SUQwZ1QySnFaV04wTG1OeVpXRjBaU2h1ZFd4c0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhadE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBdkx5QmhjbkpoZVNCdlppQmxkbVZ1ZEhOY2NseHVJQ0FnSUNBZ0lDQnBaaUFvUVhKeVlYa3VhWE5CY25KaGVTaGxkbVZ1ZENrcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREFzSUd3Z1BTQmxkbVZ1ZEM1c1pXNW5kR2c3SUdrZ1BDQnNPeUJwS3lzcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFp0TG05bVppaGxkbVZ1ZEZ0cFhTd2dabTRwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjJiVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdMeThnYzNCbFkybG1hV01nWlhabGJuUmNjbHh1SUNBZ0lDQWdJQ0JqYjI1emRDQmpZbk1nUFNCMmJTNWZaWFpsYm5SelcyVjJaVzUwWFR0Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSVdOaWN5a2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RtMDdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2doWm00cElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtMHVYMlYyWlc1MGMxdGxkbVZ1ZEYwZ1BTQnVkV3hzTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkbTA3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJQzh2SUhOd1pXTnBabWxqSUdoaGJtUnNaWEpjY2x4dUlDQWdJQ0FnSUNCc1pYUWdZMkk3WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJR2tnUFNCalluTXViR1Z1WjNSb08xeHlYRzRnSUNBZ0lDQWdJSGRvYVd4bElDaHBMUzBwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJJZ1BTQmpZbk5iYVYwN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGpZaUE5UFQwZ1ptNGdmSHdnWTJJdVptNGdQVDA5SUdadUtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWW5NdWMzQnNhV05sS0drc0lERXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhadE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLbHh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHR6ZEhKcGJtZDlJR1YyWlc1MFhISmNiaUFnSUNBZ0tpOWNjbHh1SUNBZ0lHVnRhWFFvWlhabGJuUXNJQzR1TG1GeVozTXBJSHRjY2x4dUlDQWdJQ0FnSUNCamIyNXpkQ0IyYlNBOUlIUm9hWE03WEhKY2JpQWdJQ0FnSUNBZ2JHVjBJR05pY3lBOUlIWnRMbDlsZG1WdWRITmJaWFpsYm5SZE8xeHlYRzRnSUNBZ0lDQWdJR2xtSUNoalluTXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMkp6SUQwZ1kySnpMbXhsYm1kMGFDQStJREVnUHlCMGIwRnljbUY1S0dOaWN5a2dPaUJqWW5NN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0Z5WjNNZ1BTQjBiMEZ5Y21GNUtHRnlaM1Z0Wlc1MGN5d2dNU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCb1lXNWtiR1Z5TzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Dd2diQ0E5SUdOaWN5NXNaVzVuZEdnN0lHa2dQQ0JzT3lCcEt5c3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSeWVTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHRnVaR3hsY2lBOUlHTmljMXRwWFR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoY21keklEOGdhR0Z1Wkd4bGNpNWhjSEJzZVNodWRXeHNMQ0JoY21kektTQTZJR2hoYm1Sc1pYSXVZMkZzYkNodWRXeHNLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTmhkR05vSUNobEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWhnWlhabGJuUWdhR0Z1Wkd4bGNpQm1iM0lnWENJa2UyVjJaVzUwZlZ3aVlDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWhsS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZG0wN1hISmNiaUFnSUNCOVhISmNibjFjY2x4dUlpd2lMeW9xWEhKY2JpQXFYSEpjYmlBcUwxeHlYRzVwYlhCdmNuUWdleUJoYzNsdVl5QjlJR1p5YjIwZ0p5NHZkWFJwYkNjN1hISmNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnlaVzVrWlhJb2FIUnRiQ3dnZDNKaGNDa2dlMXh5WEc0Z0lDQWdZWE41Ym1Nb1gzSmxibVJsY2l3Z2RHaHBjeXdnYUhSdGJDd2dkM0poY0NrN1hISmNibjFjY2x4dVpuVnVZM1JwYjI0Z1gzSmxibVJsY2lob2RHMXNMQ0IzY21Gd0tTQjdYSEpjYmlBZ0lDQnNaWFFnY0dGeVpXNTBJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaDNjbUZ3S1R0Y2NseHVJQ0FnSUdsbUlDZ2hjR0Z5Wlc1MEtTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2QzY21Gd0lPUzRqZVd0bU9XY3FDY3BPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJvZEcxc0lEMDlJQ2R6ZEhKcGJtY25LU0I3WEhKY2JpQWdJQ0FnSUNBZ2NHRnlaVzUwTG1sdWJtVnlTRlJOVENBOUlHaDBiV3c3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0J3WVhKbGJuUXVhVzV1WlhKSVZFMU1JRDBnSnljN1hISmNiaUFnSUNBZ0lDQWdjR0Z5Wlc1MExtRndjR1Z1WkVOb2FXeGtLR2gwYld3cE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2RHaHBjeTVsZG1WdWRFSjFjeTVsYldsMEtDZGpiMjUwWlhoME9tMXZkVzUwWldRbkxDQjdYSEpjYmlBZ0lDQWdJQ0FnY0dGeVpXNTBYSEpjYmlBZ0lDQjlLVHRjY2x4dWZWeHlYRzRpTENJdktpcGNjbHh1SUNwY2NseHVJQ29nUUhCaGNtRnRJSHRoYm5sOUlHeHBjM1JjY2x4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlITjBZWEowWEhKY2JpQXFMMXh5WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnZEc5QmNuSmhlU2hzYVhOMExDQnpkR0Z5ZENrZ2UxeHlYRzRnSUNBZ2MzUmhjblFnUFNCemRHRnlkQ0I4ZkNBd08xeHlYRzRnSUNBZ2JHVjBJR2tnUFNCc2FYTjBMbXhsYm1kMGFDQXRJSE4wWVhKME8xeHlYRzRnSUNBZ1kyOXVjM1FnY21WMElEMGdibVYzSUVGeWNtRjVLR2twTzF4eVhHNGdJQ0FnZDJocGJHVWdLR2t0TFNrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEZ0cFhTQTlJR3hwYzNSYmFTQXJJSE4wWVhKMFhUdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lISmxkSFZ5YmlCeVpYUTdYSEpjYm4xY2NseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHRnplVzVqS0dOaUxDQmpiMjUwWlhoMExDQXVMaTVoY21kektTQjdYSEpjYmlBZ0lDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0JqWWk1allXeHNLR052Ym5SbGVIUXNJQzR1TG1GeVozTXBPMXh5WEc0Z0lDQWdmU3dnTUNrN1hISmNibjFjY2x4dUlpd2lhVzF3YjNKMElFVjJaVzUwUlcxcGRIUmxjaUJtY205dElDY3VMMk52Y21VdlpYWmxiblJ6Snp0Y2NseHVhVzF3YjNKMElIc2djbVZ1WkdWeUlIMGdabkp2YlNBbkxpOWpiM0psTDNKbGJtUmxjaWM3WEhKY2JtbHRjRzl5ZENCN0lFTnZiblJsZUhRZ2ZTQm1jbTl0SUNjdUwyTnZjbVV2WTI5dWRHVjRkQ2M3WEhKY2JtbHRjRzl5ZENCa2IyMHNJSHNnUm5KaFoyMWxiblFnZlNCbWNtOXRJQ2N1TDJOdmNtVXZaRzl0TDJSdmJTYzdYSEpjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJRWhwUTI5dGNHOXVaVzUwS0NrZ2UxeHlYRzRnSUNBZ1kyOXVjMjlzWlM1c2IyY29KMk52Ym5OMGNuVmpkRzl5TmpZMk5pY3BPMXh5WEc0Z0lDQWdkR2hwY3k1amIyNTBaWGgwSUQwZ2JtVjNJRU52Ym5SbGVIUW9LVHRjY2x4dUlDQWdJSFJvYVhNdVpYWmxiblJDZFhNZ1BTQnVaWGNnUlhabGJuUkZiV2wwZEdWeUtDazdYSEpjYmlBZ0lDQjBhR2x6TGw5cGJtbDBLQ2s3WEhKY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2NseHVmVnh5WEc1c1pYUWdZMmxrSUQwZ01EdGNjbHh1YkdWMElIUmhjbWRsZENBOUlHNTFiR3c3WEhKY2JraHBRMjl0Y0c5dVpXNTBMbkJ5YjNSdmRIbHdaU0E5SUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eU9pQklhVU52YlhCdmJtVnVkQ3hjY2x4dUlDQWdJSEpsYm1SbGNpeGNjbHh1SUNBZ0lGOXBibWwwS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVpYWmxiblJDZFhNdWIyNG9KMk52Ym5SbGVIUTZiVzkxYm5SbFpDY3NJQ2hrWVhSaEtTQTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OdmJHVXViRzluS0NkamIyNTBaWGgwT20xdmRXNTBaV1FuTENCa1lYUmhLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnZEdocGN5NWZabXgxYzJnb0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdZMjl0Y0c5dVpXNTBJRDBnVDJKcVpXTjBMbU55WldGMFpTaHVkV3hzS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dGNHOXVaVzUwTG5CaGNtVnVkQ0E5SUdSaGRHRXVjR0Z5Wlc1ME8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbU52Ym5SbGVIUXVZMjl0Y0c5dVpXNTBjMXRqYVdRcksxMGdQU0JqYjIxd2IyNWxiblE3WEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlMRnh5WEc0Z0lDQWdYMlpzZFhOb0tDa2dlMXh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVJYVVOdmJYQnZibVZ1ZEM1RmRtVnVkRVZ0YVhSMFpYSWdQU0JGZG1WdWRFVnRhWFIwWlhJN1hISmNia2hwUTI5dGNHOXVaVzUwTG1SdmJTQTlJR1J2YlR0Y2NseHVTR2xEYjIxd2IyNWxiblF1Um5KaFoyMWxiblFnUFNCR2NtRm5iV1Z1ZER0Y2NseHVJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbiAvLyBgQWR2YW5jZVN0cmluZ0luZGV4YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGluZGV4ICsgKHVuaWNvZGUgPyBhdChTLCBpbmRleCkubGVuZ3RoIDogMSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi4xMicgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG5cbnZhciBTUEVDSUVTID0gd2tzKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoID09PSAyICYmIHJlc3VsdFswXSA9PT0gJ2EnICYmIHJlc3VsdFsxXSA9PT0gJ2InO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgdmFyIFNZTUJPTCA9IHdrcyhLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgPyAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICB9XG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KSA6IHVuZGVmaW5lZDtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIVJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTKSB8fFxuICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgKSB7XG4gICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgIHZhciBmbnMgPSBleGVjKFxuICAgICAgZGVmaW5lZCxcbiAgICAgIFNZTUJPTCxcbiAgICAgICcnW0tFWV0sXG4gICAgICBmdW5jdGlvbiBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgaWYgKHJlZ2V4cC5leGVjID09PSByZWdleHBFeGVjKSB7XG4gICAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgICAgfVxuICAgICk7XG4gICAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICAgIHZhciByeGZuID0gZm5zWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gNy4yLjggSXNSZWdFeHAoYXJndW1lbnQpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBNQVRDSCA9IHJlcXVpcmUoJy4vX3drcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4vX2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgYnVpbHRpbkV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG5cbiAvLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICB9XG4gIHJldHVybiBidWlsdGluRXhlYy5jYWxsKFIsIFMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvLFxuICAgICAgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTFbTEFTVF9JTkRFWF0gIT09IDAgfHwgcmUyW0xBU1RfSU5ERVhdICE9PSAwO1xufSkoKTtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQ7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgcmUuc291cmNlICsgJyQoPyFcXFxccyknLCByZWdleHBGbGFncy5jYWxsKHJlKSk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlW0xBU1RfSU5ERVhdO1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwocmUsIHN0cik7XG5cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZVtMQVNUX0lOREVYXSA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAyMCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnJlcXVpcmUoJy4vX2V4cG9ydCcpKHtcbiAgdGFyZ2V0OiAnUmVnRXhwJyxcbiAgcHJvdG86IHRydWUsXG4gIGZvcmNlZDogcmVnZXhwRXhlYyAhPT0gLy4vLmV4ZWNcbn0sIHtcbiAgZXhlYzogcmVnZXhwRXhlY1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4vX2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjYWxsUmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRtaW4gPSBNYXRoLm1pbjtcbnZhciAkcHVzaCA9IFtdLnB1c2g7XG52YXIgJFNQTElUID0gJ3NwbGl0JztcbnZhciBMRU5HVEggPSAnbGVuZ3RoJztcbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG52YXIgTUFYX1VJTlQzMiA9IDB4ZmZmZmZmZmY7XG5cbi8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgneCcsICd5JykgLT4gL3gveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG52YXIgU1VQUE9SVFNfWSA9ICFmYWlscyhmdW5jdGlvbiAoKSB7IFJlZ0V4cChNQVhfVUlOVDMyLCAneScpOyB9KTtcblxuLy8gQEBzcGxpdCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBTUExJVCwgJHNwbGl0LCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgdmFyIGludGVybmFsU3BsaXQ7XG4gIGlmIChcbiAgICAnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuICAgICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fFxuICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcbiAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cbiAgKSB7XG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKSByZXR1cm4gW107XG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSByZXR1cm4gJHNwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgc3BsaXRMaW1pdCA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgIHZhciBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xuICAgICAgd2hpbGUgKG1hdGNoID0gcmVnZXhwRXhlYy5jYWxsKHNlcGFyYXRvckNvcHksIHN0cmluZykpIHtcbiAgICAgICAgbGFzdEluZGV4ID0gc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXTtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICBpZiAobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkgJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBpZiAob3V0cHV0W0xFTkdUSF0gPj0gc3BsaXRMaW1pdCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0gPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdKys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmICgnMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogJHNwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gJHNwbGl0O1xuICB9XG5cbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zcGxpdGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxuICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBzcGxpdHRlciA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgICAgcmV0dXJuIHNwbGl0dGVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBzcGxpdHRlci5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpXG4gICAgICAgIDogaW50ZXJuYWxTcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XG4gICAgLy9cbiAgICAvLyBOT1RFOiBUaGlzIGNhbm5vdCBiZSBwcm9wZXJseSBwb2x5ZmlsbGVkIGluIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0XG4gICAgLy8gdGhlICd5JyBmbGFnLlxuICAgIGZ1bmN0aW9uIChyZWdleHAsIGxpbWl0KSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKGludGVybmFsU3BsaXQsIHJlZ2V4cCwgdGhpcywgbGltaXQsIGludGVybmFsU3BsaXQgIT09ICRzcGxpdCk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuXG4gICAgICB2YXIgdW5pY29kZU1hdGNoaW5nID0gcngudW5pY29kZTtcbiAgICAgIHZhciBmbGFncyA9IChyeC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4LnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKFNVUFBPUlRTX1kgPyAneScgOiAnZycpO1xuXG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoU1VQUE9SVFNfWSA/IHJ4IDogJ14oPzonICsgcnguc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTKSA9PT0gbnVsbCA/IFtTXSA6IFtdO1xuICAgICAgdmFyIHAgPSAwO1xuICAgICAgdmFyIHEgPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHdoaWxlIChxIDwgUy5sZW5ndGgpIHtcbiAgICAgICAgc3BsaXR0ZXIubGFzdEluZGV4ID0gU1VQUE9SVFNfWSA/IHEgOiAwO1xuICAgICAgICB2YXIgeiA9IGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTVVBQT1JUU19ZID8gUyA6IFMuc2xpY2UocSkpO1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHogPT09IG51bGwgfHxcbiAgICAgICAgICAoZSA9ICRtaW4odG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFNVUFBPUlRTX1kgPyAwIDogcSkpLCBTLmxlbmd0aCkpID09PSBwXG4gICAgICAgICkge1xuICAgICAgICAgIHEgPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBBLnB1c2goUy5zbGljZShwLCBxKSk7XG4gICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHoubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBBLnB1c2goeltpXSk7XG4gICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHEgPSBwID0gZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQS5wdXNoKFMuc2xpY2UocCkpO1xuICAgICAgcmV0dXJuIEE7XG4gICAgfVxuICBdO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9