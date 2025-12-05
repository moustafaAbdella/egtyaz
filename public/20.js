(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ErrorPage/401.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ErrorPage/401.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_401_images_401_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/401_images/401.gif */ "./resources/js/assets/401_images/401.gif");
/* harmony import */ var _assets_401_images_401_gif__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_401_images_401_gif__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Page401',
  data: function data() {
    return {
      errGif: _assets_401_images_401_gif__WEBPACK_IMPORTED_MODULE_0___default.a + '?' + +new Date(),
      ewizardClap: 'https://i.redd.it/7jvcbsfjz1h11.gif',
      dialogVisible: false
    };
  },
  methods: {
    back: function back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({
          path: '/dashboard'
        });
      } else {
        this.$router.go(-1);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ErrorPage/401.vue?vue&type=template&id=d5d34264&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ErrorPage/401.vue?vue&type=template&id=d5d34264&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "errPage-container"
  }, [_c("el-button", {
    staticClass: "pan-back-btn",
    attrs: {
      icon: "arrow-left"
    },
    on: {
      click: _vm.back
    }
  }, [_vm._v(_vm._s(_vm.$t("common.back")))]), _vm._v(" "), _c("el-row", [_c("el-col", {
    attrs: {
      span: 12
    }
  }, [_c("h1", {
    staticClass: "text-jumbo text-ginormous"
  }, [_vm._v("Oops!")]), _vm._v(" "), _c("h2", [_vm._v("You don't have permission to go to this page")]), _vm._v(" "), _c("h6", [_vm._v("If you are dissatisfied, please contact admistrator.")]), _vm._v(" "), _c("ul", {
    staticClass: "list-unstyled"
  }, [_c("li", [_vm._v("Or you can go:")]), _vm._v(" "), _c("li", {
    staticClass: "link-type"
  }, [_c("router-link", {
    attrs: {
      to: "/dashboard"
    }
  }, [_vm._v(_vm._s(_vm.$t("route.dashboard")))])], 1), _vm._v(" "), _c("li", {
    staticClass: "link-type"
  }, [_c("a", {
    attrs: {
      href: "https://www.google.com/"
    }
  }, [_vm._v("just looking around")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.dialogVisible = true;
      }
    }
  }, [_vm._v("show a picture")])])])]), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 12
    }
  }, [_c("img", {
    attrs: {
      src: _vm.errGif,
      width: "313",
      height: "428",
      alt: "Girl has dropped her ice cream."
    }
  })])], 1), _vm._v(" "), _c("el-dialog", {
    attrs: {
      visible: _vm.dialogVisible,
      title: "Casual look"
    },
    on: {
      "update:visible": function updateVisible($event) {
        _vm.dialogVisible = $event;
      }
    }
  }, [_c("img", {
    staticClass: "pan-img",
    attrs: {
      src: _vm.ewizardClap
    }
  })])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ErrorPage/401.vue?vue&type=style&index=0&id=d5d34264&rel=stylesheet%2Fscss&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ErrorPage/401.vue?vue&type=style&index=0&id=d5d34264&rel=stylesheet%2Fscss&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".errPage-container[data-v-d5d34264] {\n  width: 800px;\n  max-width: 100%;\n  margin: 100px auto;\n}\n.errPage-container .pan-back-btn[data-v-d5d34264] {\n  background: #008489;\n  color: #fff;\n  border: none !important;\n}\n.errPage-container .pan-gif[data-v-d5d34264] {\n  margin: 0 auto;\n  display: block;\n}\n.errPage-container .pan-img[data-v-d5d34264] {\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n}\n.errPage-container .text-jumbo[data-v-d5d34264] {\n  font-size: 60px;\n  font-weight: 700;\n  color: #484848;\n}\n.errPage-container .list-unstyled[data-v-d5d34264] {\n  font-size: 14px;\n}\n.errPage-container .list-unstyled li[data-v-d5d34264] {\n  padding-bottom: 5px;\n}\n.errPage-container .list-unstyled a[data-v-d5d34264] {\n  color: #008489;\n  text-decoration: none;\n}\n.errPage-container .list-unstyled a[data-v-d5d34264]:hover {\n  text-decoration: underline;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ErrorPage/401.vue?vue&type=style&index=0&id=d5d34264&rel=stylesheet%2Fscss&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ErrorPage/401.vue?vue&type=style&index=0&id=d5d34264&rel=stylesheet%2Fscss&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./401.vue?vue&type=style&index=0&id=d5d34264&rel=stylesheet%2Fscss&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ErrorPage/401.vue?vue&type=style&index=0&id=d5d34264&rel=stylesheet%2Fscss&lang=scss&scoped=true");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/assets/401_images/401.gif":
/*!************************************************!*\
  !*** ./resources/js/assets/401_images/401.gif ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/401.gif?089007e721e1f22809c0313b670a36f1";

/***/ }),

/***/ "./resources/js/views/ErrorPage/401.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/ErrorPage/401.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _401_vue_vue_type_template_id_d5d34264_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./401.vue?vue&type=template&id=d5d34264&scoped=true */ "./resources/js/views/ErrorPage/401.vue?vue&type=template&id=d5d34264&scoped=true");
/* harmony import */ var _401_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./401.vue?vue&type=script&lang=js */ "./resources/js/views/ErrorPage/401.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _401_vue_vue_type_style_index_0_id_d5d34264_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./401.vue?vue&type=style&index=0&id=d5d34264&rel=stylesheet%2Fscss&lang=scss&scoped=true */ "./resources/js/views/ErrorPage/401.vue?vue&type=style&index=0&id=d5d34264&rel=stylesheet%2Fscss&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _401_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _401_vue_vue_type_template_id_d5d34264_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _401_vue_vue_type_template_id_d5d34264_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d5d34264",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ErrorPage/401.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ErrorPage/401.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/views/ErrorPage/401.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_401_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./401.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ErrorPage/401.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_401_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ErrorPage/401.vue?vue&type=style&index=0&id=d5d34264&rel=stylesheet%2Fscss&lang=scss&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/views/ErrorPage/401.vue?vue&type=style&index=0&id=d5d34264&rel=stylesheet%2Fscss&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_401_vue_vue_type_style_index_0_id_d5d34264_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./401.vue?vue&type=style&index=0&id=d5d34264&rel=stylesheet%2Fscss&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ErrorPage/401.vue?vue&type=style&index=0&id=d5d34264&rel=stylesheet%2Fscss&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_401_vue_vue_type_style_index_0_id_d5d34264_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_401_vue_vue_type_style_index_0_id_d5d34264_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_401_vue_vue_type_style_index_0_id_d5d34264_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_401_vue_vue_type_style_index_0_id_d5d34264_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/ErrorPage/401.vue?vue&type=template&id=d5d34264&scoped=true":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/ErrorPage/401.vue?vue&type=template&id=d5d34264&scoped=true ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_401_vue_vue_type_template_id_d5d34264_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./401.vue?vue&type=template&id=d5d34264&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ErrorPage/401.vue?vue&type=template&id=d5d34264&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_401_vue_vue_type_template_id_d5d34264_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_401_vue_vue_type_template_id_d5d34264_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);