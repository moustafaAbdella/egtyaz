(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/languages/lang.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/languages/lang.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/settings */ "./resources/js/settings.js");
/* harmony import */ var _directive_permission_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/directive/permission/index.js */ "./resources/js/directive/permission/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);



var TokenKey = 'Admin-Token';
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {},
      itemsLoaded: false,
      lang: 'ar',
      items: [],
      filter: '',
      matchSearch: []
    };
  },
  methods: {
    matchy: function matchy(filter) {
      if (filter.length < 2) {
        return false;
      }
      var keys = [];
      //var pat = new RegExp( filter , "g" );
      var pat = "'" + filter + "'";
      Object.keys(this.items).forEach(function (key, val) {
        if (pat.match(key)) {
          console.log(key);
          // this.matchSearch.push(key) ;
        }
      });
    },
    loadData: function loadData() {
      var _this = this;
      fetch(_settings__WEBPACK_IMPORTED_MODULE_0__["default"].apiUrl + 'admin/lang/' + this.lang, {
        "method": "get",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TokenKey)
        }
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this.items = res;
        _this.itemsLoaded = true;
      });
    },
    saveData: function saveData() {
      var o = this;
      this.$confirm('This will Update ' + this.lang + ' Translation. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(function () {
        fetch(_settings__WEBPACK_IMPORTED_MODULE_0__["default"].apiUrl + 'admin/lang/' + o.lang, {
          "method": "post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TokenKey)
          },
          body: JSON.stringify(o.items)
        }).then(function (res) {
          return res.json();
        }).then(function (res) {
          if (res.res == 0 || res.res === false) {
            o.$message({
              type: 'error',
              message: 'Unable to Write Translation'
            });
          } else {
            o.$message({
              type: 'success',
              message: 'Translations Changed Succefully'
            });
          }
        });
      });
    }
  },
  mounted: function mounted() {
    this.lang = this.$route.meta.type;
    this.loadData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/languages/lang.vue?vue&type=template&id=aedbbe66":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/languages/lang.vue?vue&type=template&id=aedbbe66 ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "app-container",
    attrs: {
      id: "LangManager"
    }
  }, [_c("el-container", [_c("el-header", [_c("h3", [_vm._v(" Search Translations   >>>   "), _c("el-input", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: 1 == 0,
      expression: "1==0"
    }],
    on: {
      change: _vm.matchy
    },
    model: {
      value: _vm.filter,
      callback: function callback($$v) {
        _vm.filter = $$v;
      },
      expression: "filter"
    }
  })], 1), _vm._v(" "), _c("hr")]), _vm._v(" "), _c("el-main", {
    attrs: {
      height: ""
    }
  }, [_c("el-row", [_c("el-col", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.itemsLoaded,
      expression: "itemsLoaded"
    }],
    attrs: {
      span: 24
    }
  }, [_vm.itemsLoaded ? _c("el-form", {
    ref: "form",
    attrs: {
      model: _vm.form,
      "label-width": "250px"
    }
  }, _vm._l(_vm.items, function (value, key) {
    return _c("div", {
      key: key
    }, [_c("el-form-item", {
      attrs: {
        label: key
      }
    }, [_c("el-input", {
      model: {
        value: _vm.items[key],
        callback: function callback($$v) {
          _vm.$set(_vm.items, key, $$v);
        },
        expression: "items[key]"
      }
    })], 1)], 1);
  }), 0) : _vm._e()], 1)], 1), _vm._v(" "), _c("el-row", [_c("el-col", {
    attrs: {
      span: 24
    }
  }, [_c("el-button", {
    attrs: {
      type: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.saveData();
      }
    }
  }, [_vm._v("Save Translations")])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/directive/permission/index.js":
/*!****************************************************!*\
  !*** ./resources/js/directive/permission/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _permission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permission */ "./resources/js/directive/permission/permission.js");

var install = function install(Vue) {
  Vue.directive('permission', _permission__WEBPACK_IMPORTED_MODULE_0__["default"]);
};
if (window.Vue) {
  window['permission'] = _permission__WEBPACK_IMPORTED_MODULE_0__["default"];
  Vue.use(install); // eslint-disable-line
}
_permission__WEBPACK_IMPORTED_MODULE_0__["default"].install = install;
/* harmony default export */ __webpack_exports__["default"] = (_permission__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/directive/permission/permission.js":
/*!*********************************************************!*\
  !*** ./resources/js/directive/permission/permission.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/store/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  inserted: function inserted(el, binding, vnode) {
    var value = binding.value;
    var permissions = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters && _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters.permissions;
    if (value && value instanceof Array && value.length > 0) {
      var requiredPermissions = value;
      var hasPermission = permissions.some(function (permission) {
        return requiredPermissions.includes(permission);
      });
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error("Permissions are required! Example: v-permission=\"['manage user','manage permission']\"");
    }
  }
});

/***/ }),

/***/ "./resources/js/views/ezuru/languages/lang.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/ezuru/languages/lang.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang_vue_vue_type_template_id_aedbbe66__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang.vue?vue&type=template&id=aedbbe66 */ "./resources/js/views/ezuru/languages/lang.vue?vue&type=template&id=aedbbe66");
/* harmony import */ var _lang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang.vue?vue&type=script&lang=js */ "./resources/js/views/ezuru/languages/lang.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _lang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _lang_vue_vue_type_template_id_aedbbe66__WEBPACK_IMPORTED_MODULE_0__["render"],
  _lang_vue_vue_type_template_id_aedbbe66__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ezuru/languages/lang.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ezuru/languages/lang.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/ezuru/languages/lang.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./lang.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/languages/lang.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ezuru/languages/lang.vue?vue&type=template&id=aedbbe66":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/ezuru/languages/lang.vue?vue&type=template&id=aedbbe66 ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_lang_vue_vue_type_template_id_aedbbe66__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./lang.vue?vue&type=template&id=aedbbe66 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/languages/lang.vue?vue&type=template&id=aedbbe66");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_lang_vue_vue_type_template_id_aedbbe66__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_lang_vue_vue_type_template_id_aedbbe66__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);