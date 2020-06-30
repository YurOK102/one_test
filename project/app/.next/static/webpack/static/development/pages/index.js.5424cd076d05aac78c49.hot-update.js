webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./src/components/InfoText.js":
/*!************************************!*\
  !*** ./src/components/InfoText.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\web\\works\\react\\project\\app\\src\\components\\InfoText.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function InfoText() {
  _s();

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      close = _useState2[0],
      setClose = _useState2[1];

  return __jsx("div", {
    className: "description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("button", {
    className: "description-btn",
    onClick: function onClick() {
      return setClose(!close);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/arrow.svg",
    className: "arrow-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F"), __jsx("div", {
    className: "description-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "\"Casual\" - \u044D\u0442\u043E \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439 \u0438 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C, \u043F\u0440\u0438\u0447\u0435\u043C \u043E\u043D \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u043E\u0434\u0435\u0436\u0434\u0435, \u043D\u043E \u0438 \u0432 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0435. ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 44
    }
  }), " \u041D\u0430 \u0440\u0430\u0431\u043E\u0447\u0435\u043C \u043C\u0435\u0441\u0442\u0435 \u044D\u0442\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430, \u0443\u0434\u043E\u0431\u043D\u0430\u044F \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C, \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0442\u043A\u0430\u043D\u0438, \u0430 \u0434\u043E\u043C\u0430, \u0432 \u0432\u0430\u0448\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435 - \u044D\u0442\u043E, \u0432 \u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C, \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u0438 \u0443\u044E\u0442 \u0438 \u043C\u043D\u043E\u0433\u043E \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430. ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 57
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), "\u041F\u0440\u043E\u0441\u0442\u044B\u043C \u0440\u0435\u0448\u0435\u043D\u0438\u0435\u043C \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u043F\u0440\u0438\u0445\u043E\u0436\u0435\u0439 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043A\u0440\u044E\u0447\u043A\u043E\u0432, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043D\u0430 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u043E\u0439 \u043F\u043B\u0438\u0442\u0435 \u0438\u043B\u0438 \u043D\u0430\u0442\u044F\u043D\u0443\u0442\u0430 \u0441\u0435\u0442\u043A\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043C\u043E\u0436\u043D\u043E \u0432\u0435\u0448\u0430\u0442\u044C \u0432\u0441\u0435, \u0447\u0442\u043E \u0443\u0433\u043E\u0434\u043D\u043E: \u043E\u0431\u0443\u0432\u044C \u0437\u0430 \u043A\u0430\u0431\u043B\u0443\u043A\u0438, \u0441\u0443\u043C\u043A\u0438, \u0437\u043E\u043D\u0442\u044B, \u043F\u0430\u043A\u0435\u0442\u044B, \u043E\u0434\u0435\u0436\u0434\u0443. \u041F\u0440\u0438\u0447\u0435\u043C, \u0434\u0430\u0436\u0435 \u0434\u0435\u0442\u0438 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E \u0441\u043F\u0440\u0430\u0432\u044F\u0442\u0441\u044F \u0441 \u044D\u0442\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u0441\u0430\u043C\u0438, \u0435\u0441\u043B\u0438 \u043A\u0440\u044E\u0447\u043A\u0438 \u0438\u043B\u0438 \u0441\u0435\u0442\u043A\u0443 \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0434\u043E \u0441\u0430\u043C\u043E\u0433\u043E \u043F\u043E\u043B\u0430. ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 46
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), "\u041A\u0443\u0445\u043D\u044F \u0432 \u0441\u0442\u0438\u043B\u0435 \"Casual\" - \u044D\u0442\u043E, \u043A\u043E\u043D\u0435\u0447\u043D\u043E, \u0434\u0435\u0440\u0435\u0432\u043E. \u0425\u043E\u0442\u044F \u043F\u043E\u0434\u043E\u0439\u0434\u0435\u0442 \u0438 \u043F\u043B\u0430\u0441\u0442\u0438\u043A, \u0435\u0441\u043B\u0438 \u0432\u044B \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440 \u043A\u043B\u0435\u0442\u0447\u0430\u0442\u044B\u043C\u0438, \u043F\u043E\u043B\u043E\u0441\u0430\u0442\u044B\u043C\u0438, \u0432 \u0433\u043E\u0440\u043E\u0448\u0435\u043A \u0438\u043B\u0438 \u0446\u0432\u0435\u0442\u043E\u0447\u0435\u043A \u0448\u0442\u043E\u0440\u0430\u043C\u0438 \u0438 \u0441\u043A\u0430\u0442\u0435\u0440\u044C\u044E. \u041C\u043E\u0436\u043D\u043E \u0443\u043A\u0440\u0430\u0441\u0438\u0442\u044C \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0440\u0430\u0437\u0443\u043C\u0435\u043D\u0438\u044E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E\u043C \u0440\u0430\u0437\u043D\u043E\u0446\u0432\u0435\u0442\u043D\u044B\u0445 \u0434\u0435\u0442\u0430\u043B\u0435\u0439: \u043A\u0440\u0443\u0436\u0435\u0447\u0435\u043A, \u0431\u0430\u043D\u043E\u0447\u0435\u043A, \u043F\u043B\u043E\u0448\u0435\u043A. \u0422\u043E\u043B\u044C\u043A\u043E \u043D\u0435 \u043F\u0435\u0440\u0435\u0443\u0441\u0435\u0440\u0434\u0441\u0442\u0432\u0443\u0439\u0442\u0435, \u0432\u0435\u0434\u044C \"casual\", \u043F\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043E \u0441\u0432\u043E\u0431\u043E\u0434\u0430, \u043F\u0440\u043E\u0441\u0442\u043E\u0440, \u0430 \u043D\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043F\u043B\u043E\u0442\u043D\u043E \u0437\u0430\u0431\u0438\u0442\u043E\u0435 \u0432\u0435\u0449\u0430\u043C\u0438."));
}

_s(InfoText, "8K9kHcAlt/CnrG79Hjdpz33AQjY=");

_c = InfoText;
/* harmony default export */ __webpack_exports__["default"] = (InfoText);

var _c;

$RefreshReg$(_c, "InfoText");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm9UZXh0LmpzIl0sIm5hbWVzIjpbIkluZm9UZXh0IiwidXNlU3RhdGUiLCJjbG9zZSIsInNldENsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThDO0FBQ1k7QUFDWTtBQUN0QjtBQUNqQztBQUNmLFNBQVMsK0RBQWMsU0FBUyxxRUFBb0IsWUFBWSwyRUFBMEIsWUFBWSxnRUFBZTtBQUNySCxDOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBa0Q7QUFDbkM7QUFDZjtBQUNBLG9DQUFvQyxpRUFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLGlFQUFnQjtBQUN0RyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUVRQyxRQUFRLENBQUMsS0FBRCxDQUZoQjtBQUFBO0FBQUEsTUFFWEMsS0FGVztBQUFBLE1BRUpDLFFBRkk7O0FBS2xCLFNBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQW9DLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFFBQVEsQ0FBQyxDQUFDRCxLQUFGLENBQWQ7QUFBQSxLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsYUFBUyxFQUFDLFlBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERiwyREFERixFQUtFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaWZBRXFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGckMsc2hDQUtrRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTGxELEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLDJqREFXdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVh2QyxFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixreURBTEYsQ0FERjtBQTRCRDs7R0FqQ1FGLFE7O0tBQUFBLFE7QUFtQ01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy41NDI0Y2QwNzZkMDVhYWM3OGM0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEluZm9UZXh0KCkge1xyXG5cclxuICBjb25zdCBbY2xvc2UsIHNldENsb3NlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1idG5cIiBvbkNsaWNrPXsoKSA9PiBzZXRDbG9zZSghY2xvc2UpfT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYXJyb3cuc3ZnXCIgY2xhc3NOYW1lPVwiYXJyb3ctaWNvblwiIC8+XHJcbiAgICAgICAg0JLQtdGA0L3Rg9GC0YzRgdGPXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLXRleHRcIj5cclxuICAgICAgICBcIkNhc3VhbFwiIC0g0Y3RgtC+INGB0LLQvtCx0L7QtNC90YvQuSDQuCDQtNC40L3QsNC80LjRh9C90YvQuSDRgdGC0LjQu9GMLCDQv9GA0LjRh9C10Lwg0L7QvSDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8g0L3QtVxyXG4gICAgICAgINGC0L7Qu9GM0LrQviDQsiDQvtC00LXQttC00LUsINC90L4g0Lgg0LIg0LjQvdGC0LXRgNGM0LXRgNC1LiA8YnIgLz4g0J3QsCDRgNCw0LHQvtGH0LXQvCDQvNC10YHRgtC1INGN0YLQvlxyXG4gICAgICAgINC/0YDQsNCy0LjQu9GM0L3QvtC1INGA0LDRgdC/0YDQtdC00LXQu9C10L3QuNC1INC/0YDQvtGB0YLRgNCw0L3RgdGC0LLQsCwg0YPQtNC+0LHQvdCw0Y8g0LTQtdGA0LXQstGP0L3QvdCw0Y8g0LzQtdCx0LXQu9GMLFxyXG4gICAgICAgINC90LDRgtGD0YDQsNC70YzQvdGL0LUg0YLQutCw0L3QuCwg0LAg0LTQvtC80LAsINCyINCy0LDRiNC10Lkg0LrQstCw0YDRgtC40YDQtSAtINGN0YLQviwg0LIg0L/QtdGA0LLRg9GOINC+0YfQtdGA0LXQtNGMLFxyXG4gICAgICAgINGD0LTQvtCx0YHRgtCy0L4g0Lgg0YPRjtGCINC4INC80L3QvtCz0L4g0YHQstC+0LHQvtC00L3QvtCz0L4g0L/RgNC+0YHRgtGA0LDQvdGB0YLQstCwLiA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICDQn9GA0L7RgdGC0YvQvCDRgNC10YjQtdC90LjQtdC8INC00LvRjyDQstCw0YjQtdC5INC/0YDQuNGF0L7QttC10Lkg0LzQvtC20LXRgiDQsdGL0YLRjCDRgdC40YHRgtC10LzQsCDQutGA0Y7Rh9C60L7QsixcclxuICAgICAgICDRg9GB0YLQsNC90L7QstC70LXQvdC90YvRhSDQvdCwINC00LXRgNC10LLRj9C90L3QvtC5INC/0LvQuNGC0LUg0LjQu9C4INC90LDRgtGP0L3Rg9GC0LAg0YHQtdGC0LrQsCwg0L3QsCDQutC+0YLQvtGA0YPRjiDQvNC+0LbQvdC+XHJcbiAgICAgICAg0LLQtdGI0LDRgtGMINCy0YHQtSwg0YfRgtC+INGD0LPQvtC00L3Qvjog0L7QsdGD0LLRjCDQt9CwINC60LDQsdC70YPQutC4LCDRgdGD0LzQutC4LCDQt9C+0L3RgtGLLCDQv9Cw0LrQtdGC0YssINC+0LTQtdC20LTRgy5cclxuICAgICAgICDQn9GA0LjRh9C10LwsINC00LDQttC1INC00LXRgtC4INGB0L/QvtC60L7QudC90L4g0YHQv9GA0LDQstGP0YLRgdGPINGBINGN0YLQvtC5INC30LDQtNCw0YfQtdC5INGB0LDQvNC4LCDQtdGB0LvQuCDQutGA0Y7Rh9C60LhcclxuICAgICAgICDQuNC70Lgg0YHQtdGC0LrRgyDRgNCw0LfQvNC10YHRgtC40YLRjCDQtNC+INGB0LDQvNC+0LPQviDQv9C+0LvQsC4gPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAg0JrRg9GF0L3RjyDQsiDRgdGC0LjQu9C1IFwiQ2FzdWFsXCIgLSDRjdGC0L4sINC60L7QvdC10YfQvdC+LCDQtNC10YDQtdCy0L4uINCl0L7RgtGPINC/0L7QtNC+0LnQtNC10YIg0Lgg0L/Qu9Cw0YHRgtC40LosXHJcbiAgICAgICAg0LXRgdC70Lgg0LLRiyDQtNC+0L/QvtC70L3QuNGC0LUg0LjQvdGC0LXRgNGM0LXRgCDQutC70LXRgtGH0LDRgtGL0LzQuCwg0L/QvtC70L7RgdCw0YLRi9C80LgsINCyINCz0L7RgNC+0YjQtdC6INC40LvQuFxyXG4gICAgICAgINGG0LLQtdGC0L7Rh9C10Log0YjRgtC+0YDQsNC80Lgg0Lgg0YHQutCw0YLQtdGA0YzRji4g0JzQvtC20L3QviDRg9C60YDQsNGB0LjRgtGMINC/0L4g0LLQsNGI0LXQvNGDINGA0LDQt9GD0LzQtdC90LjRjlxyXG4gICAgICAgINC80L3QvtC20LXRgdGC0LLQvtC8INGA0LDQt9C90L7RhtCy0LXRgtC90YvRhSDQtNC10YLQsNC70LXQuTog0LrRgNGD0LbQtdGH0LXQuiwg0LHQsNC90L7Rh9C10LosINC/0LvQvtGI0LXQui4g0KLQvtC70YzQutC+INC90LVcclxuICAgICAgICDQv9C10YDQtdGD0YHQtdGA0LTRgdGC0LLRg9C50YLQtSwg0LLQtdC00YwgXCJjYXN1YWxcIiwg0L/RgNC10LbQtNC1INCy0YHQtdCz0L4g0YHQstC+0LHQvtC00LAsINC/0YDQvtGB0YLQvtGALCDQsCDQvdC1XHJcbiAgICAgICAg0L/QvtC80LXRidC10L3QuNC1INC/0LvQvtGC0L3QviDQt9Cw0LHQuNGC0L7QtSDQstC10YnQsNC80LguXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mb1RleHQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=