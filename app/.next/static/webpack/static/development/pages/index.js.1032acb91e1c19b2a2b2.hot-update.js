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
var _this = undefined,
    _jsxFileName = "D:\\web\\works\\react\\project\\app\\src\\components\\SortMenu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var sortMenu = function sortMenu() {
  _s();

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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "shopping-cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/shopping-cart.svg",
    className: "icon-cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  })), __jsx("span", {
    className: "btn-menu",
    onClick: toggleMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, visibleMenu && visibleMenu ? __jsx("img", {
    src: "/images/close.svg",
    className: "icon-close",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }) : __jsx("img", {
    src: "/images/hamburger-menu.svg",
    className: "icon-hamburger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }))), visibleMenu && __jsx("div", {
    className: "header-menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, dataMenu.map(function (item) {
    return __jsx("li", {
      className: "menu-items",
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    }, item.name);
  }))));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb3J0TWVudS5qcyJdLCJuYW1lcyI6WyJzb3J0TWVudSIsInVzZVN0YXRlIiwidmlzaWJsZU1lbnUiLCJzZXRWaXNpYmxlTWVudSIsImRhdGFNZW51IiwibmFtZSIsImlkIiwidG9nZ2xlTWVudSIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsS0FBRCxDQUR4QjtBQUFBLE1BQ2ZDLFdBRGU7QUFBQSxNQUNGQyxjQURFOztBQUV0QixNQUFNQyxRQUFRLEdBQUcsQ0FDaEI7QUFBRUMsUUFBSSxFQUFFLGlCQUFSO0FBQTJCQyxNQUFFLEVBQUU7QUFBL0IsR0FEZ0IsRUFFaEI7QUFBRUQsUUFBSSxFQUFFLG1CQUFSO0FBQTZCQyxNQUFFLEVBQUU7QUFBakMsR0FGZ0IsRUFHaEI7QUFBRUQsUUFBSSxFQUFFLFFBQVI7QUFBa0JDLE1BQUUsRUFBRTtBQUF0QixHQUhnQixFQUloQjtBQUFFRCxRQUFJLEVBQUUsVUFBUjtBQUFvQkMsTUFBRSxFQUFFO0FBQXhCLEdBSmdCLEVBS2hCO0FBQUVELFFBQUksRUFBRSxVQUFSO0FBQW9CQyxNQUFFLEVBQUU7QUFBeEIsR0FMZ0IsRUFNaEI7QUFBRUQsUUFBSSxFQUFFLFNBQVI7QUFBbUJDLE1BQUUsRUFBRTtBQUF2QixHQU5nQixFQU9oQjtBQUFFRCxRQUFJLEVBQUUsVUFBUjtBQUFvQkMsTUFBRSxFQUFFO0FBQXhCLEdBUGdCLEVBUWhCO0FBQUVELFFBQUksRUFBRSxXQUFSO0FBQXFCQyxNQUFFLEVBQUU7QUFBekIsR0FSZ0IsQ0FBakI7O0FBWUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN0Qkosa0JBQWMsQ0FBQyxDQUFDRCxXQUFGLENBQWQ7QUFDRixHQUZEOztBQUlBLFNBQ0csbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQywyQkFBVDtBQUFxQyxhQUFTLEVBQUMsV0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUEyQixXQUFPLEVBQUVLLFVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsV0FBVyxJQUFJQSxXQUFmLEdBQ0M7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsYUFBUyxFQUFDLFlBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxHQUdDO0FBQUssT0FBRyxFQUFDLDRCQUFUO0FBQXNDLGFBQVMsRUFBQyxnQkFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBSkYsQ0FERixFQWNHQSxXQUFXLElBQ1Y7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLElBQUQ7QUFBQSxXQUNaO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBMkIsU0FBRyxFQUFFQSxJQUFJLENBQUNILEVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0csSUFBSSxDQUFDSixJQURSLENBRFk7QUFBQSxHQUFiLENBREgsQ0FERixDQWZKLENBREg7QUE0QkEsQ0E5Q0Q7O0dBQU1MLFE7O0FBZ0RTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMTAzMmFjYjkxZTFjMTliMmEyYjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3Qgc29ydE1lbnUgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3Zpc2libGVNZW51LCBzZXRWaXNpYmxlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgZGF0YU1lbnUgPSBbXHJcblx0XHR7IG5hbWU6IFwi0J7QsdGD0YfQsNGO0YnQtdC1INCy0LjQtNC10L5cIiwgaWQ6IDEgfSxcclxuXHRcdHsgbmFtZTogXCLQntGE0L7RgNC80LvQtdC90LjQtSDQt9Cw0LrQsNC30LBcIiwgaWQ6IDIgfSxcclxuXHRcdHsgbmFtZTogXCLQntC/0LvQsNGC0LBcIiwgaWQ6IDMgfSxcclxuXHRcdHsgbmFtZTogXCLQlNC+0YHRgtCw0LLQutCwXCIsIGlkOiA0IH0sXHJcblx0XHR7IG5hbWU6IFwi0JPQsNGA0LDQvdGC0LjRj1wiLCBpZDogNSB9LFxyXG5cdFx0eyBuYW1lOiBcItCS0L7Qt9GA0LDRgdGCXCIsIGlkOiA2IH0sXHJcblx0XHR7IG5hbWU6IFwi0JrQvtC90YLQsNC60YLRi1wiLCBpZDogNyB9LFxyXG5cdFx0eyBuYW1lOiBcItCf0LDRgNGC0L3QtdGA0LDQvFwiLCBpZDogOCB9XHJcblx0XTtcclxuICBcclxuXHJcblx0Y29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGVNZW51KCF2aXNpYmxlTWVudSkgICAgXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hvcHBpbmctY2FydFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Nob3BwaW5nLWNhcnQuc3ZnXCIgY2xhc3NOYW1lPVwiaWNvbi1jYXJ0XCIgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLW1lbnVcIiBvbkNsaWNrPXt0b2dnbGVNZW51fT5cclxuICAgICAgICAgIHt2aXNpYmxlTWVudSAmJiB2aXNpYmxlTWVudSA/IChcclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2Nsb3NlLnN2Z1wiIGNsYXNzTmFtZT1cImljb24tY2xvc2VcIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2hhbWJ1cmdlci1tZW51LnN2Z1wiIGNsYXNzTmFtZT1cImljb24taGFtYnVyZ2VyXCIgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHt2aXNpYmxlTWVudSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbWVudVwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAge2RhdGFNZW51Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW1zXCIga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc29ydE1lbnVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==