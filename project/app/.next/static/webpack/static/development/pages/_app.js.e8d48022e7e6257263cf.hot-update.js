webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/SliderDetailProduct/SliderDetailProduct.css":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/SliderDetailProduct/SliderDetailProduct.css ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./svg-icon-arrow-prev-gray.svg */ "./src/components/SliderDetailProduct/svg-icon-arrow-prev-gray.svg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./svg-icon-arrow-next-gray.svg */ "./src/components/SliderDetailProduct/svg-icon-arrow-next-gray.svg");
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "/* Arrows */\r\n\r\n.slider-detail_product .slick-prev:focus,\r\n.slider-detail_product .slick-next:focus {\r\n  color: transparent;\r\n  outline: none;\r\n  /* background: transparent; */\r\n}\r\n.slider-detail_product .slick-prev:hover:before,\r\n.slider-detail_product .slick-prev:focus:before,\r\n.slider-detail_product .slick-next:hover:before,\r\n.slider-detail_product .slick-next:focus:before {\r\n  opacity: 1;\r\n}\r\n.slider-detail_product .slick-prev.slick-disabled:before,\r\n.slider-detail_product .slick-next.slick-disabled:before {\r\n  opacity: 0.25;\r\n}\r\n\r\n.slider-detail_product .slick-prev:before,\r\n.slider-detail_product .slick-next:before {\r\n  font-family: \"slick\";\r\n  font-size: 20px;\r\n  line-height: 1;\r\n  opacity: 0.75;\r\n  color: white;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n/* стилизация слайдов */\r\n.wrap-two-sliders {\r\n  max-width: 580px;\r\n  width: 100%;\r\n  position: relative;\r\n  position: absolute; \r\n}\r\n.slider-detail_product {\r\n  max-width: 580px;\r\n  width: 100%;\r\n  height: 430px;\r\n  order: 2;\r\n  border-radius: 10px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;  \r\n  box-shadow: 0 3px 10px rgba(0,0,0,0.6);\r\n}\r\n.slider-detail_product .slide {\r\n  width: 100%;\r\n}\r\n/* убирает обводку */\r\n.slider-detail_product .slide > div > div {\r\n  outline: none;\r\n}\r\n\r\n.slider-detail_product .slide img {\r\n  width: 100%;\r\n  display: block;\r\n  height: 430px;\r\n  margin: 0 auto;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Dots */\r\n.slider-detail_product .slick-dotted.slick-slider {\r\n  margin-bottom: 30px;\r\n}\r\n.slider-detail_product .slick-dots {\r\n  position: absolute;\r\n  bottom: 25px;\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-align: center;\r\n}\r\n.slider-detail_product .slick-dots li {\r\n  position: relative;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 0 5px;\r\n  padding: 0;\r\n  cursor: pointer;\r\n}\r\n.slider-detail_product .slick-dots li button {\r\n  font-size: 0;\r\n  line-height: 0;\r\n  display: block;\r\n  width: 9px;\r\n  height: 9px;\r\n  border-radius: 3px;\r\n  padding: 4px;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  border: 1px solid #fffefe;\r\n  outline: none;\r\n  background-color: #afb0b0;\r\n  background: inherit;\r\n}\r\n.slider-detail_product .slick-dots .slick-active button {\r\n  background-color: #fffefe;\r\n}\r\n.slider-detail_product .slick-dots li button:hover,\r\n.slider-detail_product .slick-dots li button:focus {\r\n}\r\n\r\n\r\n\r\n/* мини-слайдер */\r\n.slider-mimi_detail_product {\r\n  max-width: 460px;\r\n  width: 100%;\r\n  height: 100px;\r\n  position: absolute;\r\n  align-items: center;\r\n  top: 315px;\r\n  right: -580px;\r\n  border-radius: 5px;\r\n}\r\n/* убирает обводку */\r\n.slider-mimi_detail_product .slick-slide > div > div {\r\n  outline: none;\r\n}\r\n\r\n.slider-mimi_detail_product .slide-mini {\r\n  max-width: 135px;\r\n  width: 100%;\r\n  height: 100px;\r\n  position: relative;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n}\r\n.slider-mimi_detail_product .slick-current > div > div > .slide-mini {\r\n  box-shadow: 0 3px 10px rgba(0,0,0,0.6);\r\n}\r\n\r\n.slider-mimi_detail_product .slide-mini img {\r\n  max-width: 150px;\r\n  height: 100px;\r\n  display: block;\r\n  margin: 0 auto;\r\n  border-radius: 5px;\r\n}\r\n\r\n.slider-text {\r\n  max-width: 135px;\r\n  width: 100%;\r\n  height: 25px;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 15px;\r\n  color: #fff;\r\n  background: #3a3938d8;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  border-radius: 0px 0px 5px 5px;\r\n}\r\n\r\n.slider-mimi_detail_product .slick-prev,\r\n.slider-mimi_detail_product .slick-next {\r\n  font-size: 0;\r\n  line-height: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  padding: 0;\r\n  transform: translate(0, -50%);\r\n  cursor: pointer;\r\n  color: transparent;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n  z-index: 2;\r\n}\r\n.slider-mimi_detail_product .slick-prev {\r\n  left: 7px;\r\n  top: -50px;\r\n  width: 50px;\r\n  height: 50px;\r\n  /* display: inline-flex; */\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  transform: rotate(90deg);\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 50% 50%;\r\n}\r\n.slider-mimi_detail_product .slick-next {\r\n  right: 5px;\r\n  bottom: -40px;\r\n  top: inherit;\r\n  width: 50px;\r\n  height: 50px;\r\n  /* display: inline-flex; */\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  transform: rotate(90deg);\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 50% 50%;\r\n}\r\n\r\n", "",{"version":3,"sources":["D:/web/works/react/project/app/src/components/SliderDetailProduct/SliderDetailProduct.css"],"names":[],"mappings":"AAAA,WAAW;;AAEX;;EAEE,kBAAkB;EAClB,aAAa;EACb,6BAA6B;AAC/B;AACA;;;;EAIE,UAAU;AACZ;AACA;;EAEE,aAAa;AACf;;AAEA;;EAEE,oBAAoB;EACpB,eAAe;EACf,cAAc;EACd,aAAa;EACb,YAAY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA,uBAAuB;AACvB;EACE,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,QAAQ;EACR,mBAAmB;EACnB,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,sCAAsC;AACxC;AACA;EACE,WAAW;AACb;AACA,oBAAoB;AACpB;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,cAAc;EACd,mBAAmB;AACrB;;AAEA,SAAS;AACT;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,WAAW;EACX,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,UAAU;EACV,eAAe;AACjB;AACA;EACE,YAAY;EACZ,cAAc;EACd,cAAc;EACd,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,yBAAyB;EACzB,aAAa;EACb,yBAAyB;EACzB,mBAAmB;AACrB;AACA;EACE,yBAAyB;AAC3B;AACA;;AAEA;;;;AAIA,iBAAiB;AACjB;EACE,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,kBAAkB;AACpB;AACA,oBAAoB;AACpB;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,cAAc;EACd,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,WAAW;EACX,qBAAqB;EACrB,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,8BAA8B;AAChC;;AAEA;;EAEE,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,QAAQ;EACR,cAAc;EACd,WAAW;EACX,YAAY;EACZ,UAAU;EAGV,6BAA6B;EAC7B,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;AACA;EACE,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,wBAAwB;EACxB,qEAAiE;AACnE;AACA;EACE,UAAU;EACV,aAAa;EACb,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,wBAAwB;EACxB,qEAAiE;AACnE","file":"SliderDetailProduct.css","sourcesContent":["/* Arrows */\r\n\r\n.slider-detail_product .slick-prev:focus,\r\n.slider-detail_product .slick-next:focus {\r\n  color: transparent;\r\n  outline: none;\r\n  /* background: transparent; */\r\n}\r\n.slider-detail_product .slick-prev:hover:before,\r\n.slider-detail_product .slick-prev:focus:before,\r\n.slider-detail_product .slick-next:hover:before,\r\n.slider-detail_product .slick-next:focus:before {\r\n  opacity: 1;\r\n}\r\n.slider-detail_product .slick-prev.slick-disabled:before,\r\n.slider-detail_product .slick-next.slick-disabled:before {\r\n  opacity: 0.25;\r\n}\r\n\r\n.slider-detail_product .slick-prev:before,\r\n.slider-detail_product .slick-next:before {\r\n  font-family: \"slick\";\r\n  font-size: 20px;\r\n  line-height: 1;\r\n  opacity: 0.75;\r\n  color: white;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n/* стилизация слайдов */\r\n.wrap-two-sliders {\r\n  max-width: 580px;\r\n  width: 100%;\r\n  position: relative;\r\n  position: absolute; \r\n}\r\n.slider-detail_product {\r\n  max-width: 580px;\r\n  width: 100%;\r\n  height: 430px;\r\n  order: 2;\r\n  border-radius: 10px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;  \r\n  box-shadow: 0 3px 10px rgba(0,0,0,0.6);\r\n}\r\n.slider-detail_product .slide {\r\n  width: 100%;\r\n}\r\n/* убирает обводку */\r\n.slider-detail_product .slide > div > div {\r\n  outline: none;\r\n}\r\n\r\n.slider-detail_product .slide img {\r\n  width: 100%;\r\n  display: block;\r\n  height: 430px;\r\n  margin: 0 auto;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Dots */\r\n.slider-detail_product .slick-dotted.slick-slider {\r\n  margin-bottom: 30px;\r\n}\r\n.slider-detail_product .slick-dots {\r\n  position: absolute;\r\n  bottom: 25px;\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-align: center;\r\n}\r\n.slider-detail_product .slick-dots li {\r\n  position: relative;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 0 5px;\r\n  padding: 0;\r\n  cursor: pointer;\r\n}\r\n.slider-detail_product .slick-dots li button {\r\n  font-size: 0;\r\n  line-height: 0;\r\n  display: block;\r\n  width: 9px;\r\n  height: 9px;\r\n  border-radius: 3px;\r\n  padding: 4px;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  border: 1px solid #fffefe;\r\n  outline: none;\r\n  background-color: #afb0b0;\r\n  background: inherit;\r\n}\r\n.slider-detail_product .slick-dots .slick-active button {\r\n  background-color: #fffefe;\r\n}\r\n.slider-detail_product .slick-dots li button:hover,\r\n.slider-detail_product .slick-dots li button:focus {\r\n}\r\n\r\n\r\n\r\n/* мини-слайдер */\r\n.slider-mimi_detail_product {\r\n  max-width: 460px;\r\n  width: 100%;\r\n  height: 100px;\r\n  position: absolute;\r\n  align-items: center;\r\n  top: 315px;\r\n  right: -580px;\r\n  border-radius: 5px;\r\n}\r\n/* убирает обводку */\r\n.slider-mimi_detail_product .slick-slide > div > div {\r\n  outline: none;\r\n}\r\n\r\n.slider-mimi_detail_product .slide-mini {\r\n  max-width: 135px;\r\n  width: 100%;\r\n  height: 100px;\r\n  position: relative;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n}\r\n.slider-mimi_detail_product .slick-current > div > div > .slide-mini {\r\n  box-shadow: 0 3px 10px rgba(0,0,0,0.6);\r\n}\r\n\r\n.slider-mimi_detail_product .slide-mini img {\r\n  max-width: 150px;\r\n  height: 100px;\r\n  display: block;\r\n  margin: 0 auto;\r\n  border-radius: 5px;\r\n}\r\n\r\n.slider-text {\r\n  max-width: 135px;\r\n  width: 100%;\r\n  height: 25px;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 15px;\r\n  color: #fff;\r\n  background: #3a3938d8;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  border-radius: 0px 0px 5px 5px;\r\n}\r\n\r\n.slider-mimi_detail_product .slick-prev,\r\n.slider-mimi_detail_product .slick-next {\r\n  font-size: 0;\r\n  line-height: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  padding: 0;\r\n  -webkit-transform: translate(0, -50%);\r\n  -ms-transform: translate(0, -50%);\r\n  transform: translate(0, -50%);\r\n  cursor: pointer;\r\n  color: transparent;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n  z-index: 2;\r\n}\r\n.slider-mimi_detail_product .slick-prev {\r\n  left: 7px;\r\n  top: -50px;\r\n  width: 50px;\r\n  height: 50px;\r\n  /* display: inline-flex; */\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  transform: rotate(90deg);\r\n  background: url(\"svg-icon-arrow-prev-gray.svg\") no-repeat 50% 50%;\r\n}\r\n.slider-mimi_detail_product .slick-next {\r\n  right: 5px;\r\n  bottom: -40px;\r\n  top: inherit;\r\n  width: 50px;\r\n  height: 50px;\r\n  /* display: inline-flex; */\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  transform: rotate(90deg);\r\n  background: url(\"svg-icon-arrow-next-gray.svg\") no-repeat 50% 50%;\r\n}\r\n\r\n"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TbGlkZXJEZXRhaWxQcm9kdWN0L1NsaWRlckRldGFpbFByb2R1Y3QuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHLHNDQUFzQyxtQkFBTyxDQUFDLGlIQUF5RDtBQUN2RyxvQ0FBb0MsbUJBQU8sQ0FBQyx5R0FBZ0M7QUFDNUUsb0NBQW9DLG1CQUFPLENBQUMseUdBQWdDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLDhHQUE4Ryx5QkFBeUIsb0JBQW9CLGlDQUFpQyxRQUFRLGlOQUFpTixpQkFBaUIsS0FBSywySEFBMkgsb0JBQW9CLEtBQUssaUdBQWlHLDZCQUE2QixzQkFBc0IscUJBQXFCLG9CQUFvQixtQkFBbUIsMENBQTBDLHlDQUF5QyxLQUFLLHVEQUF1RCx1QkFBdUIsa0JBQWtCLHlCQUF5Qix5QkFBeUIsTUFBTSw0QkFBNEIsdUJBQXVCLGtCQUFrQixvQkFBb0IsZUFBZSwwQkFBMEIseUJBQXlCLGFBQWEsY0FBYywrQ0FBK0MsS0FBSyxtQ0FBbUMsa0JBQWtCLEtBQUssd0VBQXdFLG9CQUFvQixLQUFLLDJDQUEyQyxrQkFBa0IscUJBQXFCLG9CQUFvQixxQkFBcUIsMEJBQTBCLEtBQUsseUVBQXlFLDBCQUEwQixLQUFLLHdDQUF3Qyx5QkFBeUIsbUJBQW1CLHFCQUFxQixrQkFBa0IsaUJBQWlCLGdCQUFnQix1QkFBdUIseUJBQXlCLEtBQUssMkNBQTJDLHlCQUF5QiwyQkFBMkIsOEJBQThCLDBCQUEwQixrQkFBa0IsbUJBQW1CLG9CQUFvQixpQkFBaUIsc0JBQXNCLEtBQUssa0RBQWtELG1CQUFtQixxQkFBcUIscUJBQXFCLGlCQUFpQixrQkFBa0IseUJBQXlCLG1CQUFtQixzQkFBc0IseUJBQXlCLGdDQUFnQyxvQkFBb0IsZ0NBQWdDLDBCQUEwQixLQUFLLDZEQUE2RCxnQ0FBZ0Ms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QWlDLDBCQUEwQix5QkFBeUIsc0JBQXNCLCtCQUErQiwwRUFBMEUsS0FBSyw2Q0FBNkMsaUJBQWlCLG9CQUFvQixtQkFBbUIsa0JBQWtCLG1CQUFtQiw4QkFBOEIsaUNBQWlDLDBCQUEwQix5QkFBeUIsc0JBQXNCLCtCQUErQiwwRUFBMEUsS0FBSyxXQUFXO0FBQ3JoWTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmU4ZDQ4MDIyZTdlNjI1NzI2M2NmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vc3ZnLWljb24tYXJyb3ctcHJldi1ncmF5LnN2Z1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuL3N2Zy1pY29uLWFycm93LW5leHQtZ3JheS5zdmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIEFycm93cyAqL1xcclxcblxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXY6Zm9jdXMsXFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stbmV4dDpmb2N1cyB7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgLyogYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICovXFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXY6aG92ZXI6YmVmb3JlLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXY6Zm9jdXM6YmVmb3JlLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQ6aG92ZXI6YmVmb3JlLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQ6Zm9jdXM6YmVmb3JlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXYuc2xpY2stZGlzYWJsZWQ6YmVmb3JlLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQuc2xpY2stZGlzYWJsZWQ6YmVmb3JlIHtcXHJcXG4gIG9wYWNpdHk6IDAuMjU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXY6YmVmb3JlLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQ6YmVmb3JlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwic2xpY2tcXFwiO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBvcGFjaXR5OiAwLjc1O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiDRgdGC0LjQu9C40LfQsNGG0LjRjyDRgdC70LDQudC00L7QsiAqL1xcclxcbi53cmFwLXR3by1zbGlkZXJzIHtcXHJcXG4gIG1heC13aWR0aDogNTgwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3Qge1xcclxcbiAgbWF4LXdpZHRoOiA1ODBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA0MzBweDtcXHJcXG4gIG9yZGVyOiAyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7ICBcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLDAsMCwwLjYpO1xcclxcbn1cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGlkZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLyog0YPQsdC40YDQsNC10YIg0L7QsdCy0L7QtNC60YMgKi9cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGlkZSA+IGRpdiA+IGRpdiB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGlkZSBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGhlaWdodDogNDMwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIERvdHMgKi9cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGljay1kb3R0ZWQuc2xpY2stc2xpZGVyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLWRvdHMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAyNXB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGljay1kb3RzIGxpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICBtYXJnaW46IDAgNXB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stZG90cyBsaSBidXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiA5cHg7XFxyXFxuICBoZWlnaHQ6IDlweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZlZmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmYjBiMDtcXHJcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLWRvdHMgLnNsaWNrLWFjdGl2ZSBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmZTtcXHJcXG59XFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stZG90cyBsaSBidXR0b246aG92ZXIsXFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stZG90cyBsaSBidXR0b246Zm9jdXMge1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiDQvNC40L3QuC3RgdC70LDQudC00LXRgCAqL1xcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCB7XFxyXFxuICBtYXgtd2lkdGg6IDQ2MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRvcDogMzE1cHg7XFxyXFxuICByaWdodDogLTU4MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4vKiDRg9Cx0LjRgNCw0LXRgiDQvtCx0LLQvtC00LrRgyAqL1xcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCAuc2xpY2stc2xpZGUgPiBkaXYgPiBkaXYge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1taW1pX2RldGFpbF9wcm9kdWN0IC5zbGlkZS1taW5pIHtcXHJcXG4gIG1heC13aWR0aDogMTM1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCAuc2xpY2stY3VycmVudCA+IGRpdiA+IGRpdiA+IC5zbGlkZS1taW5pIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLDAsMCwwLjYpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLW1pbWlfZGV0YWlsX3Byb2R1Y3QgLnNsaWRlLW1pbmkgaW1nIHtcXHJcXG4gIG1heC13aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci10ZXh0IHtcXHJcXG4gIG1heC13aWR0aDogMTM1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQ6ICMzYTM5MzhkODtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCAuc2xpY2stcHJldixcXHJcXG4uc2xpZGVyLW1pbWlfZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQge1xcclxcbiAgZm9udC1zaXplOiAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG4uc2xpZGVyLW1pbWlfZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXYge1xcclxcbiAgbGVmdDogN3B4O1xcclxcbiAgdG9wOiAtNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgLyogZGlzcGxheTogaW5saW5lLWZsZXg7ICovXFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCA1MCUgNTAlO1xcclxcbn1cXHJcXG4uc2xpZGVyLW1pbWlfZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQge1xcclxcbiAgcmlnaHQ6IDVweDtcXHJcXG4gIGJvdHRvbTogLTQwcHg7XFxyXFxuICB0b3A6IGluaGVyaXQ7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIC8qIGRpc3BsYXk6IGlubGluZS1mbGV4OyAqL1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgNTAlIDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiRDovd2ViL3dvcmtzL3JlYWN0L3Byb2plY3QvYXBwL3NyYy9jb21wb25lbnRzL1NsaWRlckRldGFpbFByb2R1Y3QvU2xpZGVyRGV0YWlsUHJvZHVjdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBVzs7QUFFWDs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjtBQUNBOzs7O0VBSUUsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsYUFBYTtBQUNmOztBQUVBOztFQUVFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBLFNBQVM7QUFDVDtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBOztBQUVBOzs7O0FBSUEsaUJBQWlCO0FBQ2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBLG9CQUFvQjtBQUNwQjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUdWLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHFFQUFpRTtBQUNuRTtBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixxRUFBaUU7QUFDbkVcIixcImZpbGVcIjpcIlNsaWRlckRldGFpbFByb2R1Y3QuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEFycm93cyAqL1xcclxcblxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXY6Zm9jdXMsXFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stbmV4dDpmb2N1cyB7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgLyogYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICovXFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXY6aG92ZXI6YmVmb3JlLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXY6Zm9jdXM6YmVmb3JlLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQ6aG92ZXI6YmVmb3JlLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQ6Zm9jdXM6YmVmb3JlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXYuc2xpY2stZGlzYWJsZWQ6YmVmb3JlLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQuc2xpY2stZGlzYWJsZWQ6YmVmb3JlIHtcXHJcXG4gIG9wYWNpdHk6IDAuMjU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXY6YmVmb3JlLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQ6YmVmb3JlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwic2xpY2tcXFwiO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBvcGFjaXR5OiAwLjc1O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiDRgdGC0LjQu9C40LfQsNGG0LjRjyDRgdC70LDQudC00L7QsiAqL1xcclxcbi53cmFwLXR3by1zbGlkZXJzIHtcXHJcXG4gIG1heC13aWR0aDogNTgwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3Qge1xcclxcbiAgbWF4LXdpZHRoOiA1ODBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA0MzBweDtcXHJcXG4gIG9yZGVyOiAyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7ICBcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLDAsMCwwLjYpO1xcclxcbn1cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGlkZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLyog0YPQsdC40YDQsNC10YIg0L7QsdCy0L7QtNC60YMgKi9cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGlkZSA+IGRpdiA+IGRpdiB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGlkZSBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGhlaWdodDogNDMwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIERvdHMgKi9cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGljay1kb3R0ZWQuc2xpY2stc2xpZGVyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLWRvdHMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAyNXB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGljay1kb3RzIGxpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICBtYXJnaW46IDAgNXB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stZG90cyBsaSBidXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiA5cHg7XFxyXFxuICBoZWlnaHQ6IDlweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZlZmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmYjBiMDtcXHJcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLWRvdHMgLnNsaWNrLWFjdGl2ZSBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmZTtcXHJcXG59XFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stZG90cyBsaSBidXR0b246aG92ZXIsXFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stZG90cyBsaSBidXR0b246Zm9jdXMge1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiDQvNC40L3QuC3RgdC70LDQudC00LXRgCAqL1xcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCB7XFxyXFxuICBtYXgtd2lkdGg6IDQ2MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRvcDogMzE1cHg7XFxyXFxuICByaWdodDogLTU4MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4vKiDRg9Cx0LjRgNCw0LXRgiDQvtCx0LLQvtC00LrRgyAqL1xcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCAuc2xpY2stc2xpZGUgPiBkaXYgPiBkaXYge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1taW1pX2RldGFpbF9wcm9kdWN0IC5zbGlkZS1taW5pIHtcXHJcXG4gIG1heC13aWR0aDogMTM1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCAuc2xpY2stY3VycmVudCA+IGRpdiA+IGRpdiA+IC5zbGlkZS1taW5pIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLDAsMCwwLjYpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLW1pbWlfZGV0YWlsX3Byb2R1Y3QgLnNsaWRlLW1pbmkgaW1nIHtcXHJcXG4gIG1heC13aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci10ZXh0IHtcXHJcXG4gIG1heC13aWR0aDogMTM1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQ6ICMzYTM5MzhkODtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCAuc2xpY2stcHJldixcXHJcXG4uc2xpZGVyLW1pbWlfZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQge1xcclxcbiAgZm9udC1zaXplOiAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuLnNsaWRlci1taW1pX2RldGFpbF9wcm9kdWN0IC5zbGljay1wcmV2IHtcXHJcXG4gIGxlZnQ6IDdweDtcXHJcXG4gIHRvcDogLTUwcHg7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIC8qIGRpc3BsYXk6IGlubGluZS1mbGV4OyAqL1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJzdmctaWNvbi1hcnJvdy1wcmV2LWdyYXkuc3ZnXFxcIikgbm8tcmVwZWF0IDUwJSA1MCU7XFxyXFxufVxcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCAuc2xpY2stbmV4dCB7XFxyXFxuICByaWdodDogNXB4O1xcclxcbiAgYm90dG9tOiAtNDBweDtcXHJcXG4gIHRvcDogaW5oZXJpdDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgLyogZGlzcGxheTogaW5saW5lLWZsZXg7ICovXFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcInN2Zy1pY29uLWFycm93LW5leHQtZ3JheS5zdmdcXFwiKSBuby1yZXBlYXQgNTAlIDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==