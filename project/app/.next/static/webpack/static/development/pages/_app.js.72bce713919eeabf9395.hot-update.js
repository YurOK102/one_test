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
exports.push([module.i, "/* Arrows */\r\n\r\n.slider-detail_product .slick-prev:focus,\r\n.slider-detail_product .slick-next:focus {\r\n  color: transparent;\r\n  outline: none;\r\n  /* background: transparent; */\r\n}\r\n.slider-detail_product .slick-prev:hover:before,\r\n.slider-detail_product .slick-prev:focus:before,\r\n.slider-detail_product .slick-next:hover:before,\r\n.slider-detail_product .slick-next:focus:before {\r\n  opacity: 1;\r\n}\r\n.slider-detail_product .slick-prev.slick-disabled:before,\r\n.slider-detail_product .slick-next.slick-disabled:before {\r\n  opacity: 0.25;\r\n}\r\n\r\n.slider-detail_product .slick-prev:before,\r\n.slider-detail_product .slick-next:before {\r\n  font-family: \"slick\";\r\n  font-size: 20px;\r\n  line-height: 1;\r\n  opacity: 0.75;\r\n  color: white;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n/* стилизация слайдов */\r\n.wrap-two-sliders {\r\n  max-width: 580px;\r\n  width: 100%;\r\n  position: relative;\r\n  position: absolute;\r\n}\r\n.slider-detail_product {\r\n  max-width: 580px;\r\n  width: 100%;\r\n  order: 2;\r\n  border-radius: 5px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.slider-detail_product .slide {\r\n  width: 100%;\r\n}\r\n/* убирает обводку */\r\n.slider-detail_product .slide > div > div {\r\n  outline: none;\r\n}\r\n\r\n.slider-detail_product .slide img {\r\n  width: 100%;\r\n  display: block;\r\n  height: 430px;\r\n  margin: 0 auto;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  border-radius: 15px;\r\n}\r\n\r\n/* Dots */\r\n.slider-detail_product .slick-dotted.slick-slider {\r\n  margin-bottom: 30px;\r\n}\r\n.slider-detail_product .slick-dots {\r\n  position: absolute;\r\n  bottom: 25px;\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-align: center;\r\n}\r\n.slider-detail_product .slick-dots li {\r\n  position: relative;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 0 5px;\r\n  padding: 0;\r\n  cursor: pointer;\r\n}\r\n.slider-detail_product .slick-dots li button {\r\n  font-size: 0;\r\n  line-height: 0;\r\n  display: block;\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 50px;\r\n  padding: 4px;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  border: 0;\r\n  outline: none;\r\n  background-color: #afb0b0;\r\n}\r\n.slider-detail_product .slick-dots .slick-active button {\r\n  background-color: #fa6600;\r\n}\r\n.slider-detail_product .slick-dots li button:hover,\r\n.slider-detail_product .slick-dots li button:focus {\r\n}\r\n\r\n\r\n\r\n/* мини-слайдер */\r\n.slider-mimi_detail_product {\r\n  max-width: 460px;\r\n  width: 100%;\r\n  height: 120px;\r\n  position: absolute;\r\n  align-items: center;\r\n  top: 315px;\r\n  right: -580px;\r\n}\r\n/* убирает обводку */\r\n.slider-mimi_detail_product .slick-slide > div > div {\r\n  outline: none;\r\n}\r\n\r\n.slider-mimi_detail_product .slide-mini {\r\n  max-width: 135px;\r\n  width: 100%;\r\n  height: 105px;\r\n  position: relative;\r\n}\r\n.slider-mimi_detail_product .slick-current > div > div > .slide-mini {\r\n}\r\n\r\n.slider-mimi_detail_product .slide-mini img {\r\n  max-width: 150px;\r\n  width: 100%;\r\n  height: 100px;\r\n  display: block;\r\n  margin: 0 auto;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n}\r\n\r\n.slider-text {\r\n  max-width: 135px;\r\n  width: 100%;\r\n  height: 25px;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 15px;\r\n  color: #fff;\r\n  background: #3a3938d8;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.slider-mimi_detail_product .slick-prev,\r\n.slider-mimi_detail_product .slick-next {\r\n  font-size: 0;\r\n  line-height: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  padding: 0;\r\n  transform: translate(0, -50%);\r\n  cursor: pointer;\r\n  color: transparent;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n  z-index: 2;\r\n}\r\n.slider-mimi_detail_product .slick-prev {\r\n  left: 7px;\r\n  top: -50px;\r\n  width: 50px;\r\n  height: 50px;\r\n  /* display: inline-flex; */\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  transform: rotate(90deg);\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 50% 50%;\r\n}\r\n.slider-mimi_detail_product .slick-next {\r\n  right: 5px;\r\n  bottom: -40px;\r\n  top: inherit;\r\n  width: 50px;\r\n  height: 50px;\r\n  /* display: inline-flex; */\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  transform: rotate(90deg);\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 50% 50%;\r\n}\r\n\r\n", "",{"version":3,"sources":["D:/web/works/react/project/app/src/components/SliderDetailProduct/SliderDetailProduct.css"],"names":[],"mappings":"AAAA,WAAW;;AAEX;;EAEE,kBAAkB;EAClB,aAAa;EACb,6BAA6B;AAC/B;AACA;;;;EAIE,UAAU;AACZ;AACA;;EAEE,aAAa;AACf;;AAEA;;EAEE,oBAAoB;EACpB,eAAe;EACf,cAAc;EACd,aAAa;EACb,YAAY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA,uBAAuB;AACvB;EACE,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,QAAQ;EACR,kBAAkB;EAClB,kBAAkB;EAClB,MAAM;EACN,OAAO;AACT;AACA;EACE,WAAW;AACb;AACA,oBAAoB;AACpB;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,cAAc;EACd,sBAAmB;KAAnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA,SAAS;AACT;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,WAAW;EACX,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,UAAU;EACV,eAAe;AACjB;AACA;EACE,YAAY;EACZ,cAAc;EACd,cAAc;EACd,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;;AAEA;;;;AAIA,iBAAiB;AACjB;EACE,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;EACV,aAAa;AACf;AACA,oBAAoB;AACpB;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,kBAAkB;AACpB;AACA;AACA;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,cAAc;EACd,cAAc;EACd,sBAAmB;KAAnB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,WAAW;EACX,qBAAqB;EACrB,kBAAkB;EAClB,SAAS;EACT,OAAO;AACT;;AAEA;;EAEE,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,QAAQ;EACR,cAAc;EACd,WAAW;EACX,YAAY;EACZ,UAAU;EAGV,6BAA6B;EAC7B,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;AACA;EACE,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,wBAAwB;EACxB,qEAAiE;AACnE;AACA;EACE,UAAU;EACV,aAAa;EACb,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,wBAAwB;EACxB,qEAAiE;AACnE","file":"SliderDetailProduct.css","sourcesContent":["/* Arrows */\r\n\r\n.slider-detail_product .slick-prev:focus,\r\n.slider-detail_product .slick-next:focus {\r\n  color: transparent;\r\n  outline: none;\r\n  /* background: transparent; */\r\n}\r\n.slider-detail_product .slick-prev:hover:before,\r\n.slider-detail_product .slick-prev:focus:before,\r\n.slider-detail_product .slick-next:hover:before,\r\n.slider-detail_product .slick-next:focus:before {\r\n  opacity: 1;\r\n}\r\n.slider-detail_product .slick-prev.slick-disabled:before,\r\n.slider-detail_product .slick-next.slick-disabled:before {\r\n  opacity: 0.25;\r\n}\r\n\r\n.slider-detail_product .slick-prev:before,\r\n.slider-detail_product .slick-next:before {\r\n  font-family: \"slick\";\r\n  font-size: 20px;\r\n  line-height: 1;\r\n  opacity: 0.75;\r\n  color: white;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n/* стилизация слайдов */\r\n.wrap-two-sliders {\r\n  max-width: 580px;\r\n  width: 100%;\r\n  position: relative;\r\n  position: absolute;\r\n}\r\n.slider-detail_product {\r\n  max-width: 580px;\r\n  width: 100%;\r\n  order: 2;\r\n  border-radius: 5px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.slider-detail_product .slide {\r\n  width: 100%;\r\n}\r\n/* убирает обводку */\r\n.slider-detail_product .slide > div > div {\r\n  outline: none;\r\n}\r\n\r\n.slider-detail_product .slide img {\r\n  width: 100%;\r\n  display: block;\r\n  height: 430px;\r\n  margin: 0 auto;\r\n  object-fit: contain;\r\n  border-radius: 15px;\r\n}\r\n\r\n/* Dots */\r\n.slider-detail_product .slick-dotted.slick-slider {\r\n  margin-bottom: 30px;\r\n}\r\n.slider-detail_product .slick-dots {\r\n  position: absolute;\r\n  bottom: 25px;\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-align: center;\r\n}\r\n.slider-detail_product .slick-dots li {\r\n  position: relative;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 0 5px;\r\n  padding: 0;\r\n  cursor: pointer;\r\n}\r\n.slider-detail_product .slick-dots li button {\r\n  font-size: 0;\r\n  line-height: 0;\r\n  display: block;\r\n  width: 8px;\r\n  height: 8px;\r\n  border-radius: 50px;\r\n  padding: 4px;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  border: 0;\r\n  outline: none;\r\n  background-color: #afb0b0;\r\n}\r\n.slider-detail_product .slick-dots .slick-active button {\r\n  background-color: #fa6600;\r\n}\r\n.slider-detail_product .slick-dots li button:hover,\r\n.slider-detail_product .slick-dots li button:focus {\r\n}\r\n\r\n\r\n\r\n/* мини-слайдер */\r\n.slider-mimi_detail_product {\r\n  max-width: 460px;\r\n  width: 100%;\r\n  height: 120px;\r\n  position: absolute;\r\n  align-items: center;\r\n  top: 315px;\r\n  right: -580px;\r\n}\r\n/* убирает обводку */\r\n.slider-mimi_detail_product .slick-slide > div > div {\r\n  outline: none;\r\n}\r\n\r\n.slider-mimi_detail_product .slide-mini {\r\n  max-width: 135px;\r\n  width: 100%;\r\n  height: 105px;\r\n  position: relative;\r\n}\r\n.slider-mimi_detail_product .slick-current > div > div > .slide-mini {\r\n}\r\n\r\n.slider-mimi_detail_product .slide-mini img {\r\n  max-width: 150px;\r\n  width: 100%;\r\n  height: 100px;\r\n  display: block;\r\n  margin: 0 auto;\r\n  object-fit: contain;\r\n}\r\n\r\n.slider-text {\r\n  max-width: 135px;\r\n  width: 100%;\r\n  height: 25px;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 15px;\r\n  color: #fff;\r\n  background: #3a3938d8;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.slider-mimi_detail_product .slick-prev,\r\n.slider-mimi_detail_product .slick-next {\r\n  font-size: 0;\r\n  line-height: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  padding: 0;\r\n  -webkit-transform: translate(0, -50%);\r\n  -ms-transform: translate(0, -50%);\r\n  transform: translate(0, -50%);\r\n  cursor: pointer;\r\n  color: transparent;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n  z-index: 2;\r\n}\r\n.slider-mimi_detail_product .slick-prev {\r\n  left: 7px;\r\n  top: -50px;\r\n  width: 50px;\r\n  height: 50px;\r\n  /* display: inline-flex; */\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  transform: rotate(90deg);\r\n  background: url(\"svg-icon-arrow-prev-gray.svg\") no-repeat 50% 50%;\r\n}\r\n.slider-mimi_detail_product .slick-next {\r\n  right: 5px;\r\n  bottom: -40px;\r\n  top: inherit;\r\n  width: 50px;\r\n  height: 50px;\r\n  /* display: inline-flex; */\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  transform: rotate(90deg);\r\n  background: url(\"svg-icon-arrow-next-gray.svg\") no-repeat 50% 50%;\r\n}\r\n\r\n"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TbGlkZXJEZXRhaWxQcm9kdWN0L1NsaWRlckRldGFpbFByb2R1Y3QuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHLHNDQUFzQyxtQkFBTyxDQUFDLGlIQUF5RDtBQUN2RyxvQ0FBb0MsbUJBQU8sQ0FBQyx5R0FBZ0M7QUFDNUUsb0NBQW9DLG1CQUFPLENBQUMseUdBQWdDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLDhHQUE4Ryx5QkFBeUIsb0JBQW9CLGlDQUFpQyxRQUFRLGlOQUFpTixpQkFBaUIsS0FBSywySEFBMkgsb0JBQW9CLEtBQUssaUdBQWlHLDZCQUE2QixzQkFBc0IscUJBQXFCLG9CQUFvQixtQkFBbUIsMENBQTBDLHlDQUF5QyxLQUFLLHVEQUF1RCx1QkFBdUIsa0JBQWtCLHlCQUF5Qix5QkFBeUIsS0FBSyw0QkFBNEIsdUJBQXVCLGtCQUFrQixlQUFlLHlCQUF5Qix5QkFBeUIsYUFBYSxjQUFjLEtBQUssbUNBQW1DLGtCQUFrQixLQUFLLHdFQUF3RSxvQkFBb0IsS0FBSywyQ0FBMkMsa0JBQWtCLHFCQUFxQixvQkFBb0IscUJBQXFCLDZCQUE2Qiw2QkFBNkIsMEJBQTBCLEtBQUsseUVBQXlFLDBCQUEwQixLQUFLLHdDQUF3Qyx5QkFBeUIsbUJBQW1CLHFCQUFxQixrQkFBa0IsaUJBQWlCLGdCQUFnQix1QkFBdUIseUJBQXlCLEtBQUssMkNBQTJDLHlCQUF5QiwyQkFBMkIsOEJBQThCLDBCQUEwQixrQkFBa0IsbUJBQW1CLG9CQUFvQixpQkFBaUIsc0JBQXNCLEtBQUssa0RBQWtELG1CQUFtQixxQkFBcUIscUJBQXFCLGlCQUFpQixrQkFBa0IsMEJBQTBCLG1CQUFtQixzQkFBc0IseUJBQXlCLGdCQUFnQixvQkFBb0IsZ0NBQWdDLEtBQUssNkRBQTZELGdDQUFnQyxLQUFLLCtH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OEIsaUNBQWlDLDBCQUEwQix5QkFBeUIsc0JBQXNCLCtCQUErQiwwRUFBMEUsS0FBSyxXQUFXO0FBQ2puWDtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjcyYmNlNzEzOTE5ZWVhYmY5Mzk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vc3ZnLWljb24tYXJyb3ctcHJldi1ncmF5LnN2Z1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuL3N2Zy1pY29uLWFycm93LW5leHQtZ3JheS5zdmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIEFycm93cyAqL1xcclxcblxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXY6Zm9jdXMsXFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stbmV4dDpmb2N1cyB7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgLyogYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICovXFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXY6aG92ZXI6YmVmb3JlLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXY6Zm9jdXM6YmVmb3JlLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQ6aG92ZXI6YmVmb3JlLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQ6Zm9jdXM6YmVmb3JlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXYuc2xpY2stZGlzYWJsZWQ6YmVmb3JlLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQuc2xpY2stZGlzYWJsZWQ6YmVmb3JlIHtcXHJcXG4gIG9wYWNpdHk6IDAuMjU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXY6YmVmb3JlLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQ6YmVmb3JlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwic2xpY2tcXFwiO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBvcGFjaXR5OiAwLjc1O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiDRgdGC0LjQu9C40LfQsNGG0LjRjyDRgdC70LDQudC00L7QsiAqL1xcclxcbi53cmFwLXR3by1zbGlkZXJzIHtcXHJcXG4gIG1heC13aWR0aDogNTgwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCB7XFxyXFxuICBtYXgtd2lkdGg6IDU4MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvcmRlcjogMjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWRlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4vKiDRg9Cx0LjRgNCw0LXRgiDQvtCx0LLQvtC00LrRgyAqL1xcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWRlID4gZGl2ID4gZGl2IHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWRlIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgaGVpZ2h0OiA0MzBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG4gICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEb3RzICovXFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stZG90dGVkLnNsaWNrLXNsaWRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGljay1kb3RzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMjVweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stZG90cyBsaSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgbWFyZ2luOiAwIDVweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLWRvdHMgbGkgYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogOHB4O1xcclxcbiAgaGVpZ2h0OiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmIwYjA7XFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLWRvdHMgLnNsaWNrLWFjdGl2ZSBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjYwMDtcXHJcXG59XFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stZG90cyBsaSBidXR0b246aG92ZXIsXFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stZG90cyBsaSBidXR0b246Zm9jdXMge1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiDQvNC40L3QuC3RgdC70LDQudC00LXRgCAqL1xcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCB7XFxyXFxuICBtYXgtd2lkdGg6IDQ2MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRvcDogMzE1cHg7XFxyXFxuICByaWdodDogLTU4MHB4O1xcclxcbn1cXHJcXG4vKiDRg9Cx0LjRgNCw0LXRgiDQvtCx0LLQvtC00LrRgyAqL1xcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCAuc2xpY2stc2xpZGUgPiBkaXYgPiBkaXYge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1taW1pX2RldGFpbF9wcm9kdWN0IC5zbGlkZS1taW5pIHtcXHJcXG4gIG1heC13aWR0aDogMTM1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTA1cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCAuc2xpY2stY3VycmVudCA+IGRpdiA+IGRpdiA+IC5zbGlkZS1taW5pIHtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1taW1pX2RldGFpbF9wcm9kdWN0IC5zbGlkZS1taW5pIGltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuICAgICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLXRleHQge1xcclxcbiAgbWF4LXdpZHRoOiAxMzVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZDogIzNhMzkzOGQ4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1taW1pX2RldGFpbF9wcm9kdWN0IC5zbGljay1wcmV2LFxcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCAuc2xpY2stbmV4dCB7XFxyXFxuICBmb250LXNpemU6IDA7XFxyXFxuICBsaW5lLWhlaWdodDogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCAuc2xpY2stcHJldiB7XFxyXFxuICBsZWZ0OiA3cHg7XFxyXFxuICB0b3A6IC01MHB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAvKiBkaXNwbGF5OiBpbmxpbmUtZmxleDsgKi9cXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IDUwJSA1MCU7XFxyXFxufVxcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCAuc2xpY2stbmV4dCB7XFxyXFxuICByaWdodDogNXB4O1xcclxcbiAgYm90dG9tOiAtNDBweDtcXHJcXG4gIHRvcDogaW5oZXJpdDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgLyogZGlzcGxheTogaW5saW5lLWZsZXg7ICovXFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCA1MCUgNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJEOi93ZWIvd29ya3MvcmVhY3QvcHJvamVjdC9hcHAvc3JjL2NvbXBvbmVudHMvU2xpZGVyRGV0YWlsUHJvZHVjdC9TbGlkZXJEZXRhaWxQcm9kdWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFXOztBQUVYOztFQUVFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9CO0FBQ0E7Ozs7RUFJRSxVQUFVO0FBQ1o7QUFDQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztBQUNUO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0VBQ2Qsc0JBQW1CO0tBQW5CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUEsU0FBUztBQUNUO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTs7QUFFQTs7OztBQUlBLGlCQUFpQjtBQUNqQjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGFBQWE7QUFDZjtBQUNBLG9CQUFvQjtBQUNwQjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsY0FBYztFQUNkLHNCQUFtQjtLQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFHViw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixxRUFBaUU7QUFDbkU7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIscUVBQWlFO0FBQ25FXCIsXCJmaWxlXCI6XCJTbGlkZXJEZXRhaWxQcm9kdWN0LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBBcnJvd3MgKi9cXHJcXG5cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGljay1wcmV2OmZvY3VzLFxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQ6Zm9jdXMge1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIC8qIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAqL1xcclxcbn1cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGljay1wcmV2OmhvdmVyOmJlZm9yZSxcXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGljay1wcmV2OmZvY3VzOmJlZm9yZSxcXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGljay1uZXh0OmhvdmVyOmJlZm9yZSxcXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGljay1uZXh0OmZvY3VzOmJlZm9yZSB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGljay1wcmV2LnNsaWNrLWRpc2FibGVkOmJlZm9yZSxcXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGljay1uZXh0LnNsaWNrLWRpc2FibGVkOmJlZm9yZSB7XFxyXFxuICBvcGFjaXR5OiAwLjI1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGljay1wcmV2OmJlZm9yZSxcXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGljay1uZXh0OmJlZm9yZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcInNsaWNrXFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgb3BhY2l0eTogMC43NTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuXFxyXFxuLyog0YHRgtC40LvQuNC30LDRhtC40Y8g0YHQu9Cw0LnQtNC+0LIgKi9cXHJcXG4ud3JhcC10d28tc2xpZGVycyB7XFxyXFxuICBtYXgtd2lkdGg6IDU4MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3Qge1xcclxcbiAgbWF4LXdpZHRoOiA1ODBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3JkZXI6IDI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGlkZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLyog0YPQsdC40YDQsNC10YIg0L7QsdCy0L7QtNC60YMgKi9cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGlkZSA+IGRpdiA+IGRpdiB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGlkZSBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGhlaWdodDogNDMwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEb3RzICovXFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stZG90dGVkLnNsaWNrLXNsaWRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG4uc2xpZGVyLWRldGFpbF9wcm9kdWN0IC5zbGljay1kb3RzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMjVweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stZG90cyBsaSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgbWFyZ2luOiAwIDVweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLWRvdHMgbGkgYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogOHB4O1xcclxcbiAgaGVpZ2h0OiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmIwYjA7XFxyXFxufVxcclxcbi5zbGlkZXItZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLWRvdHMgLnNsaWNrLWFjdGl2ZSBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjYwMDtcXHJcXG59XFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stZG90cyBsaSBidXR0b246aG92ZXIsXFxyXFxuLnNsaWRlci1kZXRhaWxfcHJvZHVjdCAuc2xpY2stZG90cyBsaSBidXR0b246Zm9jdXMge1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiDQvNC40L3QuC3RgdC70LDQudC00LXRgCAqL1xcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCB7XFxyXFxuICBtYXgtd2lkdGg6IDQ2MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRvcDogMzE1cHg7XFxyXFxuICByaWdodDogLTU4MHB4O1xcclxcbn1cXHJcXG4vKiDRg9Cx0LjRgNCw0LXRgiDQvtCx0LLQvtC00LrRgyAqL1xcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCAuc2xpY2stc2xpZGUgPiBkaXYgPiBkaXYge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1taW1pX2RldGFpbF9wcm9kdWN0IC5zbGlkZS1taW5pIHtcXHJcXG4gIG1heC13aWR0aDogMTM1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTA1cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCAuc2xpY2stY3VycmVudCA+IGRpdiA+IGRpdiA+IC5zbGlkZS1taW5pIHtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1taW1pX2RldGFpbF9wcm9kdWN0IC5zbGlkZS1taW5pIGltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItdGV4dCB7XFxyXFxuICBtYXgtd2lkdGg6IDEzNXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kOiAjM2EzOTM4ZDg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLW1pbWlfZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLXByZXYsXFxyXFxuLnNsaWRlci1taW1pX2RldGFpbF9wcm9kdWN0IC5zbGljay1uZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcbi5zbGlkZXItbWltaV9kZXRhaWxfcHJvZHVjdCAuc2xpY2stcHJldiB7XFxyXFxuICBsZWZ0OiA3cHg7XFxyXFxuICB0b3A6IC01MHB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAvKiBkaXNwbGF5OiBpbmxpbmUtZmxleDsgKi9cXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwic3ZnLWljb24tYXJyb3ctcHJldi1ncmF5LnN2Z1xcXCIpIG5vLXJlcGVhdCA1MCUgNTAlO1xcclxcbn1cXHJcXG4uc2xpZGVyLW1pbWlfZGV0YWlsX3Byb2R1Y3QgLnNsaWNrLW5leHQge1xcclxcbiAgcmlnaHQ6IDVweDtcXHJcXG4gIGJvdHRvbTogLTQwcHg7XFxyXFxuICB0b3A6IGluaGVyaXQ7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIC8qIGRpc3BsYXk6IGlubGluZS1mbGV4OyAqL1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJzdmctaWNvbi1hcnJvdy1uZXh0LWdyYXkuc3ZnXFxcIikgbm8tcmVwZWF0IDUwJSA1MCU7XFxyXFxufVxcclxcblxcclxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=