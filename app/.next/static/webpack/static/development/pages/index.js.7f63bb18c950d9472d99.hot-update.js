webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/SliderDetailProduct/SliderDetailProduct.js":
/*!*******************************************************************!*\
  !*** ./src/components/SliderDetailProduct/SliderDetailProduct.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderDetailProduct; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "D:\\web\\works\\react\\project\\app\\src\\components\\SliderDetailProduct\\SliderDetailProduct.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var SliderDetailProduct = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SliderDetailProduct, _React$Component);

  var _super = _createSuper(SliderDetailProduct);

  function SliderDetailProduct(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SliderDetailProduct);

    _this = _super.call(this, props);
    _this.state = {
      nav1: null,
      nav2: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SliderDetailProduct, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "slider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "wrap-two-sliders",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "slider-detail_product",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }
      }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_6___default.a, {
        asNavFor: this.state.nav2,
        ref: function ref(slider) {
          return _this2.slider1 = slider;
        },
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        responsive: [{
          breakpoint: 767,
          settings: {
            dots: true
          }
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }
      }, this.props.data.map(function (item, key) {
        return __jsx("div", {
          key: key,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 19
          }
        }, __jsx("div", {
          className: "slide",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }
        }, __jsx("img", {
          src: item,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 23
          }
        })));
      }))), __jsx("div", {
        className: "slider-mimi_detail_product",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }
      }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_6___default.a, {
        asNavFor: this.state.nav1,
        ref: function ref(slider) {
          return _this2.slider2 = slider;
        },
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        dots: false,
        responsive: [{
          breakpoint: 1279,
          settings: {
            vertical: false,
            arrows: true,
            slidesToShow: 3
          }
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }
      }, this.props.data.map(function (item, key) {
        return __jsx("div", {
          key: key,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 19
          }
        }, __jsx("div", {
          className: "slide-mini",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 21
          }
        }, __jsx("img", {
          src: item,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 23
          }
        }), __jsx("div", {
          className: "slider-text",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 23
          }
        }, item), __jsx("div", {
          className: "slider-checkmark-wrap",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 23
          }
        }, __jsx("div", {
          className: "slider-checkmark",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }
        }))));
      })))));
    }
  }]);

  return SliderDetailProduct;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TbGlkZXJEZXRhaWxQcm9kdWN0L1NsaWRlckRldGFpbFByb2R1Y3QuanMiXSwibmFtZXMiOlsiU2xpZGVyRGV0YWlsUHJvZHVjdCIsInByb3BzIiwic3RhdGUiLCJuYXYxIiwibmF2MiIsInNldFN0YXRlIiwic2xpZGVyMSIsInNsaWRlcjIiLCJzbGlkZXIiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJkb3RzIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJrZXkiLCJ2ZXJ0aWNhbCIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVxQkEsbUI7Ozs7O0FBQ25CLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFVBQUksRUFBRSxJQURLO0FBRVhDLFVBQUksRUFBRTtBQUZLLEtBQWI7QUFGaUI7QUFNbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYztBQUNaRixZQUFJLEVBQUUsS0FBS0csT0FEQztBQUVaRixZQUFJLEVBQUUsS0FBS0c7QUFGQyxPQUFkO0FBSUQ7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGtEQUFEO0FBQ0UsZ0JBQVEsRUFBRSxLQUFLTCxLQUFMLENBQVdFLElBRHZCO0FBRUUsV0FBRyxFQUFFLGFBQUNJLE1BQUQ7QUFBQSxpQkFBYSxNQUFJLENBQUNGLE9BQUwsR0FBZUUsTUFBNUI7QUFBQSxTQUZQO0FBR0UsY0FBTSxFQUFFLEtBSFY7QUFJRSxnQkFBUSxFQUFFLElBSlo7QUFLRSxhQUFLLEVBQUUsR0FMVDtBQU1FLG9CQUFZLEVBQUUsQ0FOaEI7QUFPRSxzQkFBYyxFQUFFLENBUGxCO0FBUUUsWUFBSSxFQUFFLElBUlI7QUFTRSxrQkFBVSxFQUFFLENBQ1Y7QUFDRUMsb0JBQVUsRUFBRSxHQURkO0FBRUVDLGtCQUFRLEVBQUU7QUFDUkMsZ0JBQUksRUFBRTtBQURFO0FBRlosU0FEVSxDQVRkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FrQkcsS0FBS1YsS0FBTCxDQUFXVyxJQUFYLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUNsQyxlQUNFO0FBQUssYUFBRyxFQUFFQSxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLG1CQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSyxhQUFHLEVBQUVELElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBREYsQ0FERjtBQU9ELE9BUkEsQ0FsQkgsQ0FERixDQURGLEVBZ0NFO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxrREFBRDtBQUNFLGdCQUFRLEVBQUUsS0FBS1osS0FBTCxDQUFXQyxJQUR2QjtBQUVFLFdBQUcsRUFBRSxhQUFDSyxNQUFEO0FBQUEsaUJBQWEsTUFBSSxDQUFDRCxPQUFMLEdBQWVDLE1BQTVCO0FBQUEsU0FGUDtBQUdFLGNBQU0sRUFBRSxLQUhWO0FBSUUsZ0JBQVEsRUFBRSxJQUpaO0FBS0UsYUFBSyxFQUFFLEdBTFQ7QUFNRSxvQkFBWSxFQUFFLENBTmhCO0FBT0Usc0JBQWMsRUFBRSxDQVBsQjtBQVFFLHFCQUFhLEVBQUUsSUFSakI7QUFTRSxZQUFJLEVBQUUsS0FUUjtBQVVFLGtCQUFVLEVBQUUsQ0FDVjtBQUNFQyxvQkFBVSxFQUFFLElBRGQ7QUFFRUMsa0JBQVEsRUFBRTtBQUNSTSxvQkFBUSxFQUFFLEtBREY7QUFFUkMsa0JBQU0sRUFBRSxJQUZBO0FBR1JDLHdCQUFZLEVBQUU7QUFITjtBQUZaLFNBRFUsQ0FWZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBcUJHLEtBQUtqQixLQUFMLENBQVdXLElBQVgsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ2xDLGVBQ0U7QUFBSyxhQUFHLEVBQUVBLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLGFBQUcsRUFBRUQsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsRUFFRTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQThCQSxJQUE5QixDQUZGLEVBR0U7QUFBSyxtQkFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLG1CQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBSEYsQ0FERixDQURGO0FBV0QsT0FaQSxDQXJCSCxDQURGLENBaENGLENBREYsQ0FERjtBQTBFRDs7OztFQTNGOENLLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjdmNjNiYjE4Yzk1MGQ5NDcyZDk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyRGV0YWlsUHJvZHVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hdjE6IG51bGwsXHJcbiAgICAgIG5hdjI6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbmF2MTogdGhpcy5zbGlkZXIxLFxyXG4gICAgICBuYXYyOiB0aGlzLnNsaWRlcjIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLXR3by1zbGlkZXJzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1kZXRhaWxfcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgYXNOYXZGb3I9e3RoaXMuc3RhdGUubmF2Mn1cclxuICAgICAgICAgICAgICByZWY9eyhzbGlkZXIpID0+ICh0aGlzLnNsaWRlcjEgPSBzbGlkZXIpfVxyXG4gICAgICAgICAgICAgIGFycm93cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgaW5maW5pdGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgc3BlZWQ9ezUwMH1cclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICAgICAgZmFkZT17dHJ1ZX1cclxuICAgICAgICAgICAgICByZXNwb25zaXZlPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0YS5tYXAoKGl0ZW0sIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1taW1pX2RldGFpbF9wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICBhc05hdkZvcj17dGhpcy5zdGF0ZS5uYXYxfVxyXG4gICAgICAgICAgICAgIHJlZj17KHNsaWRlcikgPT4gKHRoaXMuc2xpZGVyMiA9IHNsaWRlcil9XHJcbiAgICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX1cclxuICAgICAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICBzcGVlZD17NTAwfVxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdz17M31cclxuICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbD17MX1cclxuICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0PXt0cnVlfVxyXG4gICAgICAgICAgICAgIGRvdHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIHJlc3BvbnNpdmU9e1tcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcclxuICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEubWFwKChpdGVtLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtbWluaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci10ZXh0XCI+e2l0ZW19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1jaGVja21hcmstd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1jaGVja21hcmtcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==