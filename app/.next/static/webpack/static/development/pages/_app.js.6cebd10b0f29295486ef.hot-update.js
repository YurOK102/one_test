webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./public/styles.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./public/styles.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".header {\r\n  max-width: 1280px;\r\n\twidth: 100%;\r\n\theight: 70px;\r\n\tmargin: 0 auto;\r\n\tpadding: 0 0 0 40px;\r\n\tbackground:#1a1a1a;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tposition: relative;\r\n}\r\n.btn-menu {\r\n\tposition: absolute;\r\n\ttop: 18px;\r\n\tright: 40px;\r\n\tbackground: rgb(199, 52, 52);\r\n\theight: 30px;\r\n\twidth: 30px;\r\n\tcursor: pointer;\r\n\tz-index: 3;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.icon-close {\r\n\t/* display: none; */\r\n\twidth: 20px;\r\n\theight: 20px;\r\n}\r\n.icon-hamburger {\r\n\tdisplay: none;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n.menu {\r\n\twidth: 400px;\r\n\theight: 100%;\r\n\tmargin-top: 70px;\r\n\tbackground:#1a1a1a;\r\n\tz-index: 20;\r\n}\r\n.menu-items {\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n\tpadding: 26px 0;\r\n\tborder-bottom: 1px solid #272727;\r\n\tcursor: pointer;\r\n\tbackground:#1a1a1a;\r\n\tz-index: 200;\r\n\tfont-size: 17px;\r\n}\r\n\r\n.footer {\r\n\tmax-width: 1280px;\r\n\twidth: 100%;\r\n\theight: 70px;\r\n\tmargin: 0 auto;\r\n\tbackground: #f8f8f8;\r\n}\r\n.footer-menu {\r\n\tmax-width: 1212px;\r\n\twidth: 100%;\r\n\tmargin: 0 auto;\r\n\tbackground: #f8f8f8;\r\n}\r\n.choice {\r\n\theight: 70px;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tvertical-align: center;\r\n}\r\n.choice-items {\r\n\twidth: 150px;\r\n\theight: 70px;\r\n\tpadding: 0 30px;\r\n\tmargin: 0 auto;\r\n\tcolor: #000;\r\n\tdisplay: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\ttext-align: center;\r\n\tborder-left: 1px solid #e9e9e9;\r\n\tborder-top: 1px solid #e9e9e9;\r\n\tborder-bottom: 4px solid #13aded;\r\n\tcursor: pointer;\r\n}\r\n.choice-items:last-child {\r\n\tborder-right: 1px solid #e9e9e9;\r\n}\r\n.choice-items:hover {\r\n\tbackground: #13aded;\r\n}\r\n\r\n.info {\r\n\tmax-width: 1280px;\r\n\twidth: 100%;\t\r\n\theight: 490px;\r\n\tmargin: 0 auto;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\t/* position: relative; */\r\n}\r\n\r\n.infoblock {\r\n\t/* display: none; */\r\n\tmax-width: 640px;\r\n\twidth: 100%;\r\n\tbackground: #f8f8f8;\r\n\tborder-right: 1px solid #e9e9e9;\r\n\tborder-left: 1px solid #e9e9e9;\r\n}\r\n.specifications {\r\n\tpadding: 15px 50px 10px;\r\n}\r\n.specifications-items {\r\n\tmax-width: 420px;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin-bottom: 15px;\r\n}\r\n.name {\r\n\tmax-width: 110px;\r\n\twidth: 100%;\r\n\tmargin-right: 110px;\r\n\tfont-weight: 500;\r\n\tfont-size: 14px;\r\n}\r\n.name-plus {\r\n\tmargin-top: -15px;\r\n}\r\n.number {\r\n\tfont-weight: bold;\r\n}\r\n.numder-official {\r\n\tbackground: #f0f0f0;\r\n\tpadding: 10px;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 0px 3px 4px rgba(0,0,0,0.1);\r\n}\r\n.number-plus {\r\n\tmargin-top: 15px;\r\n}\r\n\r\n.info-color {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\theight: 60px;\r\n}\r\n.info-btn {\r\n\tmax-width: 60px;\r\n\twidth: 100%;\r\n\tbackground: #00abf0;\r\n\tcolor: #fdfefe;\r\n\tfont-size: 38px;\r\n\tborder: none;\r\n\toutline: none;\r\n}\r\n.info-text {\r\n\twidth: 100%;\r\n\tbackground: #00b5ff;\r\n\tcolor: #d6effe;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\ttext-align: center;\r\n}\r\n\r\n.description {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tmax-width: 1280px;\r\n\tmargin: 0 auto;\r\n\tpadding: 40px 35px 0;\r\n\tbackground: #fcfcfc;\r\n}\r\n.description-btn {\r\n\toutline: none;\r\n\tborder: none;\r\n\tbackground: inherit;\r\n\tcolor: #d1d1d1;\r\n\tfont-size: 15px;\r\n\tcursor: pointer;\r\n}\r\n.description-text {\r\n\tmax-width: 885px;\r\n\twidth: 100%;\r\n\tmargin-top: 30px;\r\n\tcolor: #535353;\r\n\tline-height: 19px;\r\n}\r\n\r\n.arrow-icon {\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttransform: rotate(180deg);\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.slider {\r\n\tmax-width: 660px;\r\n\twidth: 100%;\r\n\tbackground: #f8f8f8;\r\n\tpadding: 40px;\r\n\t/* position: relative; */\r\n}", "",{"version":3,"sources":["D:/web/works/react/project/app/public/styles.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;CAClB,WAAW;CACX,YAAY;CACZ,cAAc;CACd,mBAAmB;CACnB,kBAAkB;CAClB,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,kBAAkB;AACnB;AACA;CACC,kBAAkB;CAClB,SAAS;CACT,WAAW;CACX,4BAA4B;CAC5B,YAAY;CACZ,WAAW;CACX,eAAe;CACf,UAAU;CACV,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;AACA;CACC,mBAAmB;CACnB,WAAW;CACX,YAAY;AACb;AACA;CACC,aAAa;CACb,WAAW;CACX,YAAY;AACb;AACA;CACC,YAAY;CACZ,YAAY;CACZ,gBAAgB;CAChB,kBAAkB;CAClB,WAAW;AACZ;AACA;CACC,WAAW;CACX,kBAAkB;CAClB,eAAe;CACf,gCAAgC;CAChC,eAAe;CACf,kBAAkB;CAClB,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,iBAAiB;CACjB,WAAW;CACX,YAAY;CACZ,cAAc;CACd,mBAAmB;AACpB;AACA;CACC,iBAAiB;CACjB,WAAW;CACX,cAAc;CACd,mBAAmB;AACpB;AACA;CACC,YAAY;CACZ,aAAa;CACb,8BAA8B;CAC9B,sBAAsB;AACvB;AACA;CACC,YAAY;CACZ,YAAY;CACZ,eAAe;CACf,cAAc;CACd,WAAW;CACX,aAAa;EACZ,mBAAmB;EACnB,uBAAuB;CACxB,kBAAkB;CAClB,8BAA8B;CAC9B,6BAA6B;CAC7B,gCAAgC;CAChC,eAAe;AAChB;AACA;CACC,+BAA+B;AAChC;AACA;CACC,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;CACjB,WAAW;CACX,aAAa;CACb,cAAc;CACd,aAAa;CACb,8BAA8B;CAC9B,wBAAwB;AACzB;;AAEA;CACC,mBAAmB;CACnB,gBAAgB;CAChB,WAAW;CACX,mBAAmB;CACnB,+BAA+B;CAC/B,8BAA8B;AAC/B;AACA;CACC,uBAAuB;AACxB;AACA;CACC,gBAAgB;CAChB,WAAW;CACX,aAAa;CACb,mBAAmB;CACnB,mBAAmB;AACpB;AACA;CACC,gBAAgB;CAChB,WAAW;CACX,mBAAmB;CACnB,gBAAgB;CAChB,eAAe;AAChB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,mBAAmB;CACnB,aAAa;CACb,mBAAmB;CACnB,uCAAuC;AACxC;AACA;CACC,gBAAgB;AACjB;;AAEA;CACC,WAAW;CACX,aAAa;CACb,YAAY;AACb;AACA;CACC,eAAe;CACf,WAAW;CACX,mBAAmB;CACnB,cAAc;CACd,eAAe;CACf,YAAY;CACZ,aAAa;AACd;AACA;CACC,WAAW;CACX,mBAAmB;CACnB,cAAc;CACd,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,kBAAkB;CAClB,MAAM;CACN,OAAO;CACP,iBAAiB;CACjB,cAAc;CACd,oBAAoB;CACpB,mBAAmB;AACpB;AACA;CACC,aAAa;CACb,YAAY;CACZ,mBAAmB;CACnB,cAAc;CACd,eAAe;CACf,eAAe;AAChB;AACA;CACC,gBAAgB;CAChB,WAAW;CACX,gBAAgB;CAChB,cAAc;CACd,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,yBAAyB;CACzB,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;CAChB,WAAW;CACX,mBAAmB;CACnB,aAAa;CACb,wBAAwB;AACzB","file":"styles.css","sourcesContent":[".header {\r\n  max-width: 1280px;\r\n\twidth: 100%;\r\n\theight: 70px;\r\n\tmargin: 0 auto;\r\n\tpadding: 0 0 0 40px;\r\n\tbackground:#1a1a1a;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tposition: relative;\r\n}\r\n.btn-menu {\r\n\tposition: absolute;\r\n\ttop: 18px;\r\n\tright: 40px;\r\n\tbackground: rgb(199, 52, 52);\r\n\theight: 30px;\r\n\twidth: 30px;\r\n\tcursor: pointer;\r\n\tz-index: 3;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.icon-close {\r\n\t/* display: none; */\r\n\twidth: 20px;\r\n\theight: 20px;\r\n}\r\n.icon-hamburger {\r\n\tdisplay: none;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n.menu {\r\n\twidth: 400px;\r\n\theight: 100%;\r\n\tmargin-top: 70px;\r\n\tbackground:#1a1a1a;\r\n\tz-index: 20;\r\n}\r\n.menu-items {\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n\tpadding: 26px 0;\r\n\tborder-bottom: 1px solid #272727;\r\n\tcursor: pointer;\r\n\tbackground:#1a1a1a;\r\n\tz-index: 200;\r\n\tfont-size: 17px;\r\n}\r\n\r\n.footer {\r\n\tmax-width: 1280px;\r\n\twidth: 100%;\r\n\theight: 70px;\r\n\tmargin: 0 auto;\r\n\tbackground: #f8f8f8;\r\n}\r\n.footer-menu {\r\n\tmax-width: 1212px;\r\n\twidth: 100%;\r\n\tmargin: 0 auto;\r\n\tbackground: #f8f8f8;\r\n}\r\n.choice {\r\n\theight: 70px;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tvertical-align: center;\r\n}\r\n.choice-items {\r\n\twidth: 150px;\r\n\theight: 70px;\r\n\tpadding: 0 30px;\r\n\tmargin: 0 auto;\r\n\tcolor: #000;\r\n\tdisplay: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\ttext-align: center;\r\n\tborder-left: 1px solid #e9e9e9;\r\n\tborder-top: 1px solid #e9e9e9;\r\n\tborder-bottom: 4px solid #13aded;\r\n\tcursor: pointer;\r\n}\r\n.choice-items:last-child {\r\n\tborder-right: 1px solid #e9e9e9;\r\n}\r\n.choice-items:hover {\r\n\tbackground: #13aded;\r\n}\r\n\r\n.info {\r\n\tmax-width: 1280px;\r\n\twidth: 100%;\t\r\n\theight: 490px;\r\n\tmargin: 0 auto;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\t/* position: relative; */\r\n}\r\n\r\n.infoblock {\r\n\t/* display: none; */\r\n\tmax-width: 640px;\r\n\twidth: 100%;\r\n\tbackground: #f8f8f8;\r\n\tborder-right: 1px solid #e9e9e9;\r\n\tborder-left: 1px solid #e9e9e9;\r\n}\r\n.specifications {\r\n\tpadding: 15px 50px 10px;\r\n}\r\n.specifications-items {\r\n\tmax-width: 420px;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin-bottom: 15px;\r\n}\r\n.name {\r\n\tmax-width: 110px;\r\n\twidth: 100%;\r\n\tmargin-right: 110px;\r\n\tfont-weight: 500;\r\n\tfont-size: 14px;\r\n}\r\n.name-plus {\r\n\tmargin-top: -15px;\r\n}\r\n.number {\r\n\tfont-weight: bold;\r\n}\r\n.numder-official {\r\n\tbackground: #f0f0f0;\r\n\tpadding: 10px;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 0px 3px 4px rgba(0,0,0,0.1);\r\n}\r\n.number-plus {\r\n\tmargin-top: 15px;\r\n}\r\n\r\n.info-color {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\theight: 60px;\r\n}\r\n.info-btn {\r\n\tmax-width: 60px;\r\n\twidth: 100%;\r\n\tbackground: #00abf0;\r\n\tcolor: #fdfefe;\r\n\tfont-size: 38px;\r\n\tborder: none;\r\n\toutline: none;\r\n}\r\n.info-text {\r\n\twidth: 100%;\r\n\tbackground: #00b5ff;\r\n\tcolor: #d6effe;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\ttext-align: center;\r\n}\r\n\r\n.description {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tmax-width: 1280px;\r\n\tmargin: 0 auto;\r\n\tpadding: 40px 35px 0;\r\n\tbackground: #fcfcfc;\r\n}\r\n.description-btn {\r\n\toutline: none;\r\n\tborder: none;\r\n\tbackground: inherit;\r\n\tcolor: #d1d1d1;\r\n\tfont-size: 15px;\r\n\tcursor: pointer;\r\n}\r\n.description-text {\r\n\tmax-width: 885px;\r\n\twidth: 100%;\r\n\tmargin-top: 30px;\r\n\tcolor: #535353;\r\n\tline-height: 19px;\r\n}\r\n\r\n.arrow-icon {\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\ttransform: rotate(180deg);\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.slider {\r\n\tmax-width: 660px;\r\n\twidth: 100%;\r\n\tbackground: #f8f8f8;\r\n\tpadding: 40px;\r\n\t/* position: relative; */\r\n}"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3R5bGVzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFlBQVksd0JBQXdCLGtCQUFrQixtQkFBbUIscUJBQXFCLDBCQUEwQix5QkFBeUIsb0JBQW9CLHFDQUFxQywwQkFBMEIseUJBQXlCLEtBQUssZUFBZSx5QkFBeUIsZ0JBQWdCLGtCQUFrQixtQ0FBbUMsbUJBQW1CLGtCQUFrQixzQkFBc0IsaUJBQWlCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssaUJBQWlCLHVCQUF1QixxQkFBcUIsbUJBQW1CLEtBQUsscUJBQXFCLG9CQUFvQixrQkFBa0IsbUJBQW1CLEtBQUssV0FBVyxtQkFBbUIsbUJBQW1CLHVCQUF1Qix5QkFBeUIsa0JBQWtCLEtBQUssaUJBQWlCLGtCQUFrQix5QkFBeUIsc0JBQXNCLHVDQUF1QyxzQkFBc0IseUJBQXlCLG1CQUFtQixzQkFBc0IsS0FBSyxpQkFBaUIsd0JBQXdCLGtCQUFrQixtQkFBbUIscUJBQXFCLDBCQUEwQixLQUFLLGtCQUFrQix3QkFBd0Isa0JBQWtCLHFCQUFxQiwwQkFBMEIsS0FBSyxhQUFhLG1CQUFtQixvQkFBb0IscUNBQXFDLDZCQUE2QixLQUFLLG1CQUFtQixtQkFBbUIsbUJBQW1CLHNCQUFzQixxQkFBcUIsa0JBQWtCLG9CQUFvQiwwQkFBMEIsOEJBQThCLHlCQUF5QixxQ0FBcUMsb0NBQW9DLHVDQUF1QyxzQkFBc0IsS0FBSyw4QkFBOEIsc0NBQXNDLEtBQUsseUJBQXlCLDBCQUEwQixLQUFLLGVBQWUsd0JBQXdCLGtCQUFrQixzQkFBc0IscUJBQXFCLG9CQUFvQixxQ0FBcUMsNEJBQTRCLFFBQVEsb0JBQW9CLHVCQUF1QiwwQkFBMEIsa0JBQWtCLDBCQUEwQixzQ0FBc0MscUNBQXFDLEtBQUsscUJBQXFCLDhCQUE4QixLQUFLLDJCQUEy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QkFBeUIsYUFBYSxjQUFjLHdCQUF3QixxQkFBcUIsMkJBQTJCLDBCQUEwQixLQUFLLHNCQUFzQixvQkFBb0IsbUJBQW1CLDBCQUEwQixxQkFBcUIsc0JBQXNCLHNCQUFzQixLQUFLLHVCQUF1Qix1QkFBdUIsa0JBQWtCLHVCQUF1QixxQkFBcUIsd0JBQXdCLEtBQUsscUJBQXFCLGtCQUFrQixtQkFBbUIsZ0NBQWdDLHlCQUF5QixLQUFLLGlCQUFpQix1QkFBdUIsa0JBQWtCLDBCQUEwQixvQkFBb0IsNEJBQTRCLFFBQVEsR0FBRztBQUM1L1Q7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy42Y2ViZDEwYjBmMjkyOTU0ODZlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlYWRlciB7XFxyXFxuICBtYXgtd2lkdGg6IDEyODBweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDcwcHg7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0cGFkZGluZzogMCAwIDAgNDBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiMxYTFhMWE7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5idG4tbWVudSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMThweDtcXHJcXG5cXHRyaWdodDogNDBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMTk5LCA1MiwgNTIpO1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0ei1pbmRleDogMztcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5pY29uLWNsb3NlIHtcXHJcXG5cXHQvKiBkaXNwbGF5OiBub25lOyAqL1xcclxcblxcdHdpZHRoOiAyMHB4O1xcclxcblxcdGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuLmljb24taGFtYnVyZ2VyIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuLm1lbnUge1xcclxcblxcdHdpZHRoOiA0MDBweDtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0bWFyZ2luLXRvcDogNzBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiMxYTFhMWE7XFxyXFxuXFx0ei1pbmRleDogMjA7XFxyXFxufVxcclxcbi5tZW51LWl0ZW1zIHtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMjZweCAwO1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjcyNzI3O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kOiMxYTFhMWE7XFxyXFxuXFx0ei1pbmRleDogMjAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMjgwcHg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiA3MHB4O1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxyXFxufVxcclxcbi5mb290ZXItbWVudSB7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMjEycHg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0YmFja2dyb3VuZDogI2Y4ZjhmODtcXHJcXG59XFxyXFxuLmNob2ljZSB7XFxyXFxuXFx0aGVpZ2h0OiA3MHB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jaG9pY2UtaXRlbXMge1xcclxcblxcdHdpZHRoOiAxNTBweDtcXHJcXG5cXHRoZWlnaHQ6IDcwcHg7XFxyXFxuXFx0cGFkZGluZzogMCAzMHB4O1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdGNvbG9yOiAjMDAwO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U5ZTllOTtcXHJcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZTllOTtcXHJcXG5cXHRib3JkZXItYm90dG9tOiA0cHggc29saWQgIzEzYWRlZDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jaG9pY2UtaXRlbXM6bGFzdC1jaGlsZCB7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U5ZTllOTtcXHJcXG59XFxyXFxuLmNob2ljZS1pdGVtczpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZDogIzEzYWRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8ge1xcclxcblxcdG1heC13aWR0aDogMTI4MHB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcdFxcclxcblxcdGhlaWdodDogNDkwcHg7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0LyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb2Jsb2NrIHtcXHJcXG5cXHQvKiBkaXNwbGF5OiBub25lOyAqL1xcclxcblxcdG1heC13aWR0aDogNjQwcHg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0YmFja2dyb3VuZDogI2Y4ZjhmODtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTllOWU5O1xcclxcblxcdGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U5ZTllOTtcXHJcXG59XFxyXFxuLnNwZWNpZmljYXRpb25zIHtcXHJcXG5cXHRwYWRkaW5nOiAxNXB4IDUwcHggMTBweDtcXHJcXG59XFxyXFxuLnNwZWNpZmljYXRpb25zLWl0ZW1zIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDQyMHB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG4ubmFtZSB7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMTBweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDExMHB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG4ubmFtZS1wbHVzIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAtMTVweDtcXHJcXG59XFxyXFxuLm51bWJlciB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5udW1kZXItb2ZmaWNpYWwge1xcclxcblxcdGJhY2tncm91bmQ6ICNmMGYwZjA7XFxyXFxuXFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdGJveC1zaGFkb3c6IDBweCAzcHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG59XFxyXFxuLm51bWJlci1wbHVzIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1jb2xvciB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRoZWlnaHQ6IDYwcHg7XFxyXFxufVxcclxcbi5pbmZvLWJ0biB7XFxyXFxuXFx0bWF4LXdpZHRoOiA2MHB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJhY2tncm91bmQ6ICMwMGFiZjA7XFxyXFxuXFx0Y29sb3I6ICNmZGZlZmU7XFxyXFxuXFx0Zm9udC1zaXplOiAzOHB4O1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4uaW5mby10ZXh0IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjMDBiNWZmO1xcclxcblxcdGNvbG9yOiAjZDZlZmZlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMjgwcHg7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0cGFkZGluZzogNDBweCAzNXB4IDA7XFxyXFxuXFx0YmFja2dyb3VuZDogI2ZjZmNmYztcXHJcXG59XFxyXFxuLmRlc2NyaXB0aW9uLWJ0biB7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZDogaW5oZXJpdDtcXHJcXG5cXHRjb2xvcjogI2QxZDFkMTtcXHJcXG5cXHRmb250LXNpemU6IDE1cHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZGVzY3JpcHRpb24tdGV4dCB7XFxyXFxuXFx0bWF4LXdpZHRoOiA4ODVweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAzMHB4O1xcclxcblxcdGNvbG9yOiAjNTM1MzUzO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJyb3ctaWNvbiB7XFxyXFxuXFx0d2lkdGg6IDEwcHg7XFxyXFxuXFx0aGVpZ2h0OiAxMHB4O1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDY2MHB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxyXFxuXFx0cGFkZGluZzogNDBweDtcXHJcXG5cXHQvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkQ6L3dlYi93b3Jrcy9yZWFjdC9wcm9qZWN0L2FwcC9wdWJsaWMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJB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VztDQUNYLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCXCIsXCJmaWxlXCI6XCJzdHlsZXMuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiA3MHB4O1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdHBhZGRpbmc6IDAgMCAwIDQwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDojMWExYTFhO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uYnRuLW1lbnUge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDE4cHg7XFxyXFxuXFx0cmlnaHQ6IDQwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogcmdiKDE5OSwgNTIsIDUyKTtcXHJcXG5cXHRoZWlnaHQ6IDMwcHg7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdHotaW5kZXg6IDM7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaWNvbi1jbG9zZSB7XFxyXFxuXFx0LyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG5cXHR3aWR0aDogMjBweDtcXHJcXG5cXHRoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5pY29uLWhhbWJ1cmdlciB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcbi5tZW51IHtcXHJcXG5cXHR3aWR0aDogNDAwcHg7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG1hcmdpbi10b3A6IDcwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDojMWExYTFhO1xcclxcblxcdHotaW5kZXg6IDIwO1xcclxcbn1cXHJcXG4ubWVudS1pdGVtcyB7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDI2cHggMDtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI3MjcyNztcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZDojMWExYTFhO1xcclxcblxcdHotaW5kZXg6IDIwMDtcXHJcXG5cXHRmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcblxcdG1heC13aWR0aDogMTI4MHB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogNzBweDtcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZjhmOGY4O1xcclxcbn1cXHJcXG4uZm9vdGVyLW1lbnUge1xcclxcblxcdG1heC13aWR0aDogMTIxMnB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxyXFxufVxcclxcbi5jaG9pY2Uge1xcclxcblxcdGhlaWdodDogNzBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uY2hvaWNlLWl0ZW1zIHtcXHJcXG5cXHR3aWR0aDogMTUwcHg7XFxyXFxuXFx0aGVpZ2h0OiA3MHB4O1xcclxcblxcdHBhZGRpbmc6IDAgMzBweDtcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRjb2xvcjogIzAwMDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOWU5ZTk7XFxyXFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWU5ZTk7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMxM2FkZWQ7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uY2hvaWNlLWl0ZW1zOmxhc3QtY2hpbGQge1xcclxcblxcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOWU5ZTk7XFxyXFxufVxcclxcbi5jaG9pY2UtaXRlbXM6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQ6ICMxM2FkZWQ7XFxyXFxufVxcclxcblxcclxcbi5pbmZvIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDEyODBweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHRcXHJcXG5cXHRoZWlnaHQ6IDQ5MHB4O1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmluZm9ibG9jayB7XFxyXFxuXFx0LyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG5cXHRtYXgtd2lkdGg6IDY0MHB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U5ZTllOTtcXHJcXG5cXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOWU5ZTk7XFxyXFxufVxcclxcbi5zcGVjaWZpY2F0aW9ucyB7XFxyXFxuXFx0cGFkZGluZzogMTVweCA1MHB4IDEwcHg7XFxyXFxufVxcclxcbi5zcGVjaWZpY2F0aW9ucy1pdGVtcyB7XFxyXFxuXFx0bWF4LXdpZHRoOiA0MjBweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuLm5hbWUge1xcclxcblxcdG1heC13aWR0aDogMTEwcHg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxMTBweDtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuLm5hbWUtcGx1cyB7XFxyXFxuXFx0bWFyZ2luLXRvcDogLTE1cHg7XFxyXFxufVxcclxcbi5udW1iZXIge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ubnVtZGVyLW9mZmljaWFsIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcclxcblxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHRib3gtc2hhZG93OiAwcHggM3B4IDRweCByZ2JhKDAsMCwwLDAuMSk7XFxyXFxufVxcclxcbi5udW1iZXItcGx1cyB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tY29sb3Ige1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0aGVpZ2h0OiA2MHB4O1xcclxcbn1cXHJcXG4uaW5mby1idG4ge1xcclxcblxcdG1heC13aWR0aDogNjBweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjMDBhYmYwO1xcclxcblxcdGNvbG9yOiAjZmRmZWZlO1xcclxcblxcdGZvbnQtc2l6ZTogMzhweDtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuLmluZm8tdGV4dCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0YmFja2dyb3VuZDogIzAwYjVmZjtcXHJcXG5cXHRjb2xvcjogI2Q2ZWZmZTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdG1heC13aWR0aDogMTI4MHB4O1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdHBhZGRpbmc6IDQwcHggMzVweCAwO1xcclxcblxcdGJhY2tncm91bmQ6ICNmY2ZjZmM7XFxyXFxufVxcclxcbi5kZXNjcmlwdGlvbi1idG4ge1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJhY2tncm91bmQ6IGluaGVyaXQ7XFxyXFxuXFx0Y29sb3I6ICNkMWQxZDE7XFxyXFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmRlc2NyaXB0aW9uLXRleHQge1xcclxcblxcdG1heC13aWR0aDogODg1cHg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luLXRvcDogMzBweDtcXHJcXG5cXHRjb2xvcjogIzUzNTM1MztcXHJcXG5cXHRsaW5lLWhlaWdodDogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFycm93LWljb24ge1xcclxcblxcdHdpZHRoOiAxMHB4O1xcclxcblxcdGhlaWdodDogMTBweDtcXHJcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcblxcdG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB7XFxyXFxuXFx0bWF4LXdpZHRoOiA2NjBweDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZjhmOGY4O1xcclxcblxcdHBhZGRpbmc6IDQwcHg7XFxyXFxuXFx0LyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcclxcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9