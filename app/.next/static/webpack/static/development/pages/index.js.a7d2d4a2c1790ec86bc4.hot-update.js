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
        }, "\u0422\u0435\u043F\u043B\u044B\u0439"), __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 23
          }
        }, __jsx("img", {
          src: "/images/Checkmark.svg",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TbGlkZXJEZXRhaWxQcm9kdWN0L1NsaWRlckRldGFpbFByb2R1Y3QuanMiXSwibmFtZXMiOlsiU2xpZGVyRGV0YWlsUHJvZHVjdCIsInByb3BzIiwic3RhdGUiLCJuYXYxIiwibmF2MiIsInNldFN0YXRlIiwic2xpZGVyMSIsInNsaWRlcjIiLCJzbGlkZXIiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJkb3RzIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJrZXkiLCJ2ZXJ0aWNhbCIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVxQkEsbUI7Ozs7O0FBQ25CLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFVBQUksRUFBRSxJQURLO0FBRVhDLFVBQUksRUFBRTtBQUZLLEtBQWI7QUFGaUI7QUFNbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYztBQUNaRixZQUFJLEVBQUUsS0FBS0csT0FEQztBQUVaRixZQUFJLEVBQUUsS0FBS0c7QUFGQyxPQUFkO0FBSUQ7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGtEQUFEO0FBQ0UsZ0JBQVEsRUFBRSxLQUFLTCxLQUFMLENBQVdFLElBRHZCO0FBRUUsV0FBRyxFQUFFLGFBQUNJLE1BQUQ7QUFBQSxpQkFBYSxNQUFJLENBQUNGLE9BQUwsR0FBZUUsTUFBNUI7QUFBQSxTQUZQO0FBR0UsY0FBTSxFQUFFLEtBSFY7QUFJRSxnQkFBUSxFQUFFLElBSlo7QUFLRSxhQUFLLEVBQUUsR0FMVDtBQU1FLG9CQUFZLEVBQUUsQ0FOaEI7QUFPRSxzQkFBYyxFQUFFLENBUGxCO0FBUUUsWUFBSSxFQUFFLElBUlI7QUFTRSxrQkFBVSxFQUFFLENBQ1Y7QUFDRUMsb0JBQVUsRUFBRSxHQURkO0FBRUVDLGtCQUFRLEVBQUU7QUFDUkMsZ0JBQUksRUFBRTtBQURFO0FBRlosU0FEVSxDQVRkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FrQkcsS0FBS1YsS0FBTCxDQUFXVyxJQUFYLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUNsQyxlQUNFO0FBQUssYUFBRyxFQUFFQSxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLG1CQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBSyxhQUFHLEVBQUVELElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBREYsQ0FERjtBQU9ELE9BUkEsQ0FsQkgsQ0FERixDQURGLEVBZ0NFO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxrREFBRDtBQUNFLGdCQUFRLEVBQUUsS0FBS1osS0FBTCxDQUFXQyxJQUR2QjtBQUVFLFdBQUcsRUFBRSxhQUFDSyxNQUFEO0FBQUEsaUJBQWEsTUFBSSxDQUFDRCxPQUFMLEdBQWVDLE1BQTVCO0FBQUEsU0FGUDtBQUdFLGNBQU0sRUFBRSxLQUhWO0FBSUUsZ0JBQVEsRUFBRSxJQUpaO0FBS0UsYUFBSyxFQUFFLEdBTFQ7QUFNRSxvQkFBWSxFQUFFLENBTmhCO0FBT0Usc0JBQWMsRUFBRSxDQVBsQjtBQVFFLHFCQUFhLEVBQUUsSUFSakI7QUFTRSxZQUFJLEVBQUUsS0FUUjtBQVVFLGtCQUFVLEVBQUUsQ0FDVjtBQUNFQyxvQkFBVSxFQUFFLElBRGQ7QUFFRUMsa0JBQVEsRUFBRTtBQUNSTSxvQkFBUSxFQUFFLEtBREY7QUFFUkMsa0JBQU0sRUFBRSxJQUZBO0FBR1JDLHdCQUFZLEVBQUU7QUFITjtBQUZaLFNBRFUsQ0FWZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBcUJHLEtBQUtqQixLQUFMLENBQVdXLElBQVgsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ2xDLGVBQ0U7QUFBSyxhQUFHLEVBQUVBLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLGFBQUcsRUFBRUQsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsRUFFRTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUssYUFBRyxFQUFDLHVCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixDQUhGLENBREYsQ0FERjtBQVdELE9BWkEsQ0FyQkgsQ0FERixDQWhDRixDQURGLENBREY7QUEwRUQ7Ozs7RUEzRjhDSyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hN2QyZDRhMmMxNzkwZWM4NmJjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckRldGFpbFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYXYxOiBudWxsLFxyXG4gICAgICBuYXYyOiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG5hdjE6IHRoaXMuc2xpZGVyMSxcclxuICAgICAgbmF2MjogdGhpcy5zbGlkZXIyLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC10d28tc2xpZGVyc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItZGV0YWlsX3Byb2R1Y3RcIj5cclxuICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgIGFzTmF2Rm9yPXt0aGlzLnN0YXRlLm5hdjJ9XHJcbiAgICAgICAgICAgICAgcmVmPXsoc2xpZGVyKSA9PiAodGhpcy5zbGlkZXIxID0gc2xpZGVyKX1cclxuICAgICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGluZmluaXRlPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHNwZWVkPXs1MDB9XHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93PXsxfVxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgICAgIGZhZGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgcmVzcG9uc2l2ZT17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEubWFwKChpdGVtLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgYXNOYXZGb3I9e3RoaXMuc3RhdGUubmF2MX1cclxuICAgICAgICAgICAgICByZWY9eyhzbGlkZXIpID0+ICh0aGlzLnNsaWRlcjIgPSBzbGlkZXIpfVxyXG4gICAgICAgICAgICAgIGFycm93cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgaW5maW5pdGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgc3BlZWQ9ezUwMH1cclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezN9XHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw9ezF9XHJcbiAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdD17dHJ1ZX1cclxuICAgICAgICAgICAgICBkb3RzPXtmYWxzZX1cclxuICAgICAgICAgICAgICByZXNwb25zaXZlPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXHJcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLm1hcCgoaXRlbSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLW1pbmlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItdGV4dFwiPtCi0LXQv9C70YvQuTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0NoZWNrbWFyay5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9