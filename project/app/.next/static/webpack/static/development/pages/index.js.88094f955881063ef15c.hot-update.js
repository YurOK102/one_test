webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/SortMenu.js":
/*!************************************!*\
  !*** ./src/components/SortMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\web\\works\\react\\project\\app\\src\\components\\SortMenu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function sortMenu() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      visibleMenu = _useState[0],
      setVisibleMenu = _useState[1];

  var dataMenu = [{
    name: "Обучающее видео",
    id: 1
  }, {
    name: "Оформление заказа",
    id: 2
  }, {
    name: "Оплата",
    id: 3
  }, {
    name: "Доставка",
    id: 4
  }, {
    name: "Гарантия",
    id: 5
  }, {
    name: "Возраст",
    id: 6
  }, {
    name: "Контакты",
    id: 7
  }, {
    name: "Партнерам",
    id: 8
  }];

  var toggleMenu = function toggleMenu() {
    setVisibleMenu(!visibleMenu);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "shopping-cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/shopping-cart.svg",
    className: "icon-cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  })), __jsx("span", {
    className: "btn-menu",
    onClick: toggleMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/hamburger-menu.svg",
    className: "icon-hamburger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "/images/close.svg",
    className: "icon-close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }))), visibleMenu && __jsx("div", {
    className: "header-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, dataMenu.map(function (item) {
    return __jsx("li", {
      className: "menu-items",
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }, item.name);
  }))));
}

_s(sortMenu, "5NKgyP0U+/e22e7tgIu+QYWmejg=");

/* harmony default export */ __webpack_exports__["default"] = (sortMenu);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb3J0TWVudS5qcyJdLCJuYW1lcyI6WyJzb3J0TWVudSIsInVzZVN0YXRlIiwidmlzaWJsZU1lbnUiLCJzZXRWaXNpYmxlTWVudSIsImRhdGFNZW51IiwibmFtZSIsImlkIiwidG9nZ2xlTWVudSIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNtQkMsc0RBQVEsQ0FBQyxLQUFELENBRDNCO0FBQUEsTUFDWkMsV0FEWTtBQUFBLE1BQ0NDLGNBREQ7O0FBRW5CLE1BQU1DLFFBQVEsR0FBRyxDQUNoQjtBQUFFQyxRQUFJLEVBQUUsaUJBQVI7QUFBMkJDLE1BQUUsRUFBRTtBQUEvQixHQURnQixFQUVoQjtBQUFFRCxRQUFJLEVBQUUsbUJBQVI7QUFBNkJDLE1BQUUsRUFBRTtBQUFqQyxHQUZnQixFQUdoQjtBQUFFRCxRQUFJLEVBQUUsUUFBUjtBQUFrQkMsTUFBRSxFQUFFO0FBQXRCLEdBSGdCLEVBSWhCO0FBQUVELFFBQUksRUFBRSxVQUFSO0FBQW9CQyxNQUFFLEVBQUU7QUFBeEIsR0FKZ0IsRUFLaEI7QUFBRUQsUUFBSSxFQUFFLFVBQVI7QUFBb0JDLE1BQUUsRUFBRTtBQUF4QixHQUxnQixFQU1oQjtBQUFFRCxRQUFJLEVBQUUsU0FBUjtBQUFtQkMsTUFBRSxFQUFFO0FBQXZCLEdBTmdCLEVBT2hCO0FBQUVELFFBQUksRUFBRSxVQUFSO0FBQW9CQyxNQUFFLEVBQUU7QUFBeEIsR0FQZ0IsRUFRaEI7QUFBRUQsUUFBSSxFQUFFLFdBQVI7QUFBcUJDLE1BQUUsRUFBRTtBQUF6QixHQVJnQixDQUFqQjs7QUFZQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3RCSixrQkFBYyxDQUFDLENBQUNELFdBQUYsQ0FBZDtBQUNGLEdBRkQ7O0FBSUEsU0FDRyxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLDJCQUFUO0FBQXFDLGFBQVMsRUFBQyxXQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQTJCLFdBQU8sRUFBRUssVUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLDRCQUFUO0FBQXNDLGFBQVMsRUFBQyxnQkFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsYUFBUyxFQUFDLFlBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUpGLENBREYsRUFXR0wsV0FBVyxJQUNWO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxRQUFRLENBQUNJLEdBQVQsQ0FBYSxVQUFDQyxJQUFEO0FBQUEsV0FDWjtBQUFJLGVBQVMsRUFBQyxZQUFkO0FBQTJCLFNBQUcsRUFBRUEsSUFBSSxDQUFDSCxFQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dHLElBQUksQ0FBQ0osSUFEUixDQURZO0FBQUEsR0FBYixDQURILENBREYsQ0FaSixDQURIO0FBeUJBOztHQTNDUUwsUTs7QUE2Q01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44ODA5NGY5NTU4ODEwNjNlZjE1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBzb3J0TWVudSgpIHtcclxuXHRjb25zdCBbdmlzaWJsZU1lbnUsIHNldFZpc2libGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBkYXRhTWVudSA9IFtcclxuXHRcdHsgbmFtZTogXCLQntCx0YPRh9Cw0Y7RidC10LUg0LLQuNC00LXQvlwiLCBpZDogMSB9LFxyXG5cdFx0eyBuYW1lOiBcItCe0YTQvtGA0LzQu9C10L3QuNC1INC30LDQutCw0LfQsFwiLCBpZDogMiB9LFxyXG5cdFx0eyBuYW1lOiBcItCe0L/Qu9Cw0YLQsFwiLCBpZDogMyB9LFxyXG5cdFx0eyBuYW1lOiBcItCU0L7RgdGC0LDQstC60LBcIiwgaWQ6IDQgfSxcclxuXHRcdHsgbmFtZTogXCLQk9Cw0YDQsNC90YLQuNGPXCIsIGlkOiA1IH0sXHJcblx0XHR7IG5hbWU6IFwi0JLQvtC30YDQsNGB0YJcIiwgaWQ6IDYgfSxcclxuXHRcdHsgbmFtZTogXCLQmtC+0L3RgtCw0LrRgtGLXCIsIGlkOiA3IH0sXHJcblx0XHR7IG5hbWU6IFwi0J/QsNGA0YLQvdC10YDQsNC8XCIsIGlkOiA4IH1cclxuXHRdO1xyXG4gIFxyXG5cclxuXHRjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZU1lbnUoIXZpc2libGVNZW51KSAgICBcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaG9wcGluZy1jYXJ0XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2hvcHBpbmctY2FydC5zdmdcIiBjbGFzc05hbWU9XCJpY29uLWNhcnRcIiAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tbWVudVwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2hhbWJ1cmdlci1tZW51LnN2Z1wiIGNsYXNzTmFtZT1cImljb24taGFtYnVyZ2VyXCIgLz5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jbG9zZS5zdmdcIiBjbGFzc05hbWU9XCJpY29uLWNsb3NlXCIgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Zpc2libGVNZW51ICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1tZW51XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICB7ZGF0YU1lbnUubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbXNcIiBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzb3J0TWVudVxyXG4iXSwic291cmNlUm9vdCI6IiJ9