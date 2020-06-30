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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb3J0TWVudS5qcyJdLCJuYW1lcyI6WyJzb3J0TWVudSIsInVzZVN0YXRlIiwidmlzaWJsZU1lbnUiLCJzZXRWaXNpYmxlTWVudSIsImRhdGFNZW51IiwibmFtZSIsImlkIiwidG9nZ2xlTWVudSIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNtQkMsc0RBQVEsQ0FBQyxLQUFELENBRDNCO0FBQUEsTUFDWkMsV0FEWTtBQUFBLE1BQ0NDLGNBREQ7O0FBRW5CLE1BQU1DLFFBQVEsR0FBRyxDQUNoQjtBQUFFQyxRQUFJLEVBQUUsaUJBQVI7QUFBMkJDLE1BQUUsRUFBRTtBQUEvQixHQURnQixFQUVoQjtBQUFFRCxRQUFJLEVBQUUsbUJBQVI7QUFBNkJDLE1BQUUsRUFBRTtBQUFqQyxHQUZnQixFQUdoQjtBQUFFRCxRQUFJLEVBQUUsUUFBUjtBQUFrQkMsTUFBRSxFQUFFO0FBQXRCLEdBSGdCLEVBSWhCO0FBQUVELFFBQUksRUFBRSxVQUFSO0FBQW9CQyxNQUFFLEVBQUU7QUFBeEIsR0FKZ0IsRUFLaEI7QUFBRUQsUUFBSSxFQUFFLFVBQVI7QUFBb0JDLE1BQUUsRUFBRTtBQUF4QixHQUxnQixFQU1oQjtBQUFFRCxRQUFJLEVBQUUsU0FBUjtBQUFtQkMsTUFBRSxFQUFFO0FBQXZCLEdBTmdCLEVBT2hCO0FBQUVELFFBQUksRUFBRSxVQUFSO0FBQW9CQyxNQUFFLEVBQUU7QUFBeEIsR0FQZ0IsRUFRaEI7QUFBRUQsUUFBSSxFQUFFLFdBQVI7QUFBcUJDLE1BQUUsRUFBRTtBQUF6QixHQVJnQixDQUFqQjs7QUFZQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3RCSixrQkFBYyxDQUFDLENBQUNELFdBQUYsQ0FBZDtBQUNGLEdBRkQ7O0FBSUEsU0FDRyxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLDJCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBTSxhQUFTLEVBQUMsVUFBaEI7QUFBMkIsV0FBTyxFQUFFSyxVQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsNEJBQVQ7QUFBc0MsYUFBUyxFQUFDLGdCQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixhQUFTLEVBQUMsWUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBSkYsQ0FERixFQVdHTCxXQUFXLElBQ1Y7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLElBQUQ7QUFBQSxXQUNaO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBMkIsU0FBRyxFQUFFQSxJQUFJLENBQUNILEVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0csSUFBSSxDQUFDSixJQURSLENBRFk7QUFBQSxHQUFiLENBREgsQ0FERixDQVpKLENBREg7QUF5QkE7O0dBM0NRTCxROztBQTZDTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmQ2MzJlMTYwODZiOWVjMTc2NGFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIHNvcnRNZW51KCkge1xyXG5cdGNvbnN0IFt2aXNpYmxlTWVudSwgc2V0VmlzaWJsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IGRhdGFNZW51ID0gW1xyXG5cdFx0eyBuYW1lOiBcItCe0LHRg9GH0LDRjtGJ0LXQtSDQstC40LTQtdC+XCIsIGlkOiAxIH0sXHJcblx0XHR7IG5hbWU6IFwi0J7RhNC+0YDQvNC70LXQvdC40LUg0LfQsNC60LDQt9CwXCIsIGlkOiAyIH0sXHJcblx0XHR7IG5hbWU6IFwi0J7Qv9C70LDRgtCwXCIsIGlkOiAzIH0sXHJcblx0XHR7IG5hbWU6IFwi0JTQvtGB0YLQsNCy0LrQsFwiLCBpZDogNCB9LFxyXG5cdFx0eyBuYW1lOiBcItCT0LDRgNCw0L3RgtC40Y9cIiwgaWQ6IDUgfSxcclxuXHRcdHsgbmFtZTogXCLQktC+0LfRgNCw0YHRglwiLCBpZDogNiB9LFxyXG5cdFx0eyBuYW1lOiBcItCa0L7QvdGC0LDQutGC0YtcIiwgaWQ6IDcgfSxcclxuXHRcdHsgbmFtZTogXCLQn9Cw0YDRgtC90LXRgNCw0LxcIiwgaWQ6IDggfVxyXG5cdF07XHJcbiAgXHJcblxyXG5cdGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlTWVudSghdmlzaWJsZU1lbnUpICAgIFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNob3BwaW5nLWNhcnRcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zaG9wcGluZy1jYXJ0LnN2Z1wiIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0bi1tZW51XCIgb25DbGljaz17dG9nZ2xlTWVudX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaGFtYnVyZ2VyLW1lbnUuc3ZnXCIgY2xhc3NOYW1lPVwiaWNvbi1oYW1idXJnZXJcIiAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2Nsb3NlLnN2Z1wiIGNsYXNzTmFtZT1cImljb24tY2xvc2VcIiAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7dmlzaWJsZU1lbnUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW1lbnVcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgIHtkYXRhTWVudS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtc1wiIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNvcnRNZW51XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=