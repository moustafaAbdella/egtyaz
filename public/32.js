(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/Directive.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/Directive.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directive_permission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/directive/permission */ "./resources/js/directive/permission/index.js");
/* harmony import */ var _directive_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/directive/role */ "./resources/js/directive/role/index.js");
/* harmony import */ var _utils_permission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/permission */ "./resources/js/utils/permission.js");
/* harmony import */ var _utils_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/role */ "./resources/js/utils/role.js");
/* harmony import */ var _components_SwitchRoles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SwitchRoles */ "./resources/js/views/permission/components/SwitchRoles.vue");
 // Permission directive (v-permission)
 // Permission directive (v-role)
 // Permission checking
 // Permission checking

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DirectivePermission',
  components: {
    SwitchRoles: _components_SwitchRoles__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  directives: {
    permission: _directive_permission__WEBPACK_IMPORTED_MODULE_0__["default"],
    role: _directive_role__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      key: 1 // In order to re-initialize the command each time switching permissions
    };
  },
  methods: {
    checkPermission: _utils_permission__WEBPACK_IMPORTED_MODULE_2__["default"],
    checkRole: _utils_role__WEBPACK_IMPORTED_MODULE_3__["default"],
    handleRolesChange: function handleRolesChange() {
      this.key++;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/Directive.vue?vue&type=template&id=22b939ee&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/Directive.vue?vue&type=template&id=22b939ee&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "app-container"
  }, [_c("div", {
    staticClass: "description"
  }, [_vm._v("Laravue provides two directives "), _c("el-tag", {
    staticClass: "permission-tag",
    attrs: {
      size: "small"
    }
  }, [_vm._v("v-role")]), _vm._v(" and "), _c("el-tag", {
    staticClass: "permission-tag",
    attrs: {
      size: "small"
    }
  }, [_vm._v("v-permission")]), _vm._v(". Please see the belw example here for details")], 1), _vm._v(" "), _c("switch-roles", {
    on: {
      change: _vm.handleRolesChange
    }
  }), _vm._v(" "), _c("div", {
    key: _vm.key,
    staticStyle: {
      "margin-top": "30px"
    }
  }, [_c("div", [_c("span", {
    directives: [{
      name: "role",
      rawName: "v-role",
      value: ["admin"],
      expression: "['admin']"
    }],
    staticClass: "permission-alert"
  }, [_vm._v("\n        Only\n        "), _c("el-tag", {
    staticClass: "permission-tag",
    attrs: {
      size: "small"
    }
  }, [_vm._v("admin")]), _vm._v(" can see this\n      ")], 1), _vm._v(" "), _c("el-tag", {
    directives: [{
      name: "role",
      rawName: "v-role",
      value: ["admin"],
      expression: "['admin']"
    }],
    staticClass: "permission-sourceCode",
    attrs: {
      type: "info"
    }
  }, [_vm._v("v-role=\"['admin']\"")])], 1), _vm._v(" "), _c("div", [_c("span", {
    directives: [{
      name: "role",
      rawName: "v-role",
      value: ["manager"],
      expression: "['manager']"
    }],
    staticClass: "permission-alert"
  }, [_vm._v("\n        Only\n        "), _c("el-tag", {
    staticClass: "permission-tag",
    attrs: {
      size: "small"
    }
  }, [_vm._v("manager")]), _vm._v(" can see this\n      ")], 1), _vm._v(" "), _c("el-tag", {
    directives: [{
      name: "role",
      rawName: "v-role",
      value: ["manager"],
      expression: "['manager']"
    }],
    staticClass: "permission-sourceCode",
    attrs: {
      type: "info"
    }
  }, [_vm._v("v-role=\"['manager']\"")])], 1), _vm._v(" "), _c("div", [_c("span", {
    directives: [{
      name: "role",
      rawName: "v-role",
      value: ["editor"],
      expression: "['editor']"
    }],
    staticClass: "permission-alert"
  }, [_vm._v("\n        Only\n        "), _c("el-tag", {
    staticClass: "permission-tag",
    attrs: {
      size: "small"
    }
  }, [_vm._v("editor")]), _vm._v(" can see this\n      ")], 1), _vm._v(" "), _c("el-tag", {
    directives: [{
      name: "role",
      rawName: "v-role",
      value: ["editor"],
      expression: "['editor']"
    }],
    staticClass: "permission-sourceCode",
    attrs: {
      type: "info"
    }
  }, [_vm._v("v-role=\"['editor']\"")])], 1), _vm._v(" "), _c("div", [_c("span", {
    directives: [{
      name: "role",
      rawName: "v-role",
      value: ["user"],
      expression: "['user']"
    }],
    staticClass: "permission-alert"
  }, [_vm._v("\n        Only\n        "), _c("el-tag", {
    staticClass: "permission-tag",
    attrs: {
      size: "small"
    }
  }, [_vm._v("user")]), _vm._v(" can see this\n      ")], 1), _vm._v(" "), _c("el-tag", {
    directives: [{
      name: "role",
      rawName: "v-role",
      value: ["user"],
      expression: "['user']"
    }],
    staticClass: "permission-sourceCode",
    attrs: {
      type: "info"
    }
  }, [_vm._v("v-role=\"['user']\"")])], 1), _vm._v(" "), _c("div", [_c("span", {
    directives: [{
      name: "role",
      rawName: "v-role",
      value: ["visitor"],
      expression: "['visitor']"
    }],
    staticClass: "permission-alert"
  }, [_vm._v("\n        Only\n        "), _c("el-tag", {
    staticClass: "permission-tag",
    attrs: {
      size: "small"
    }
  }, [_vm._v("visitor")]), _vm._v(" can see this\n      ")], 1), _vm._v(" "), _c("el-tag", {
    directives: [{
      name: "role",
      rawName: "v-role",
      value: ["visitor"],
      expression: "['visitor']"
    }],
    staticClass: "permission-sourceCode",
    attrs: {
      type: "info"
    }
  }, [_vm._v("v-role=\"['visitor']\"")])], 1), _vm._v(" "), _c("div", [_c("span", {
    directives: [{
      name: "role",
      rawName: "v-role",
      value: ["admin", "editor"],
      expression: "['admin','editor']"
    }],
    staticClass: "permission-alert"
  }, [_vm._v("\n        Both\n        "), _c("el-tag", {
    staticClass: "permission-tag",
    attrs: {
      size: "small"
    }
  }, [_vm._v("admin")]), _vm._v(" and\n        "), _c("el-tag", {
    staticClass: "permission-tag",
    attrs: {
      size: "small"
    }
  }, [_vm._v("editor")]), _vm._v(" can see this\n      ")], 1), _vm._v(" "), _c("el-tag", {
    directives: [{
      name: "role",
      rawName: "v-role",
      value: ["admin", "editor"],
      expression: "['admin','editor']"
    }],
    staticClass: "permission-sourceCode",
    attrs: {
      type: "info"
    }
  }, [_vm._v("v-role=\"['admin','editor']\"")])], 1), _vm._v(" "), _c("div", [_c("span", {
    directives: [{
      name: "permission",
      rawName: "v-permission",
      value: ["manage user"],
      expression: "['manage user']"
    }],
    staticClass: "permission-alert"
  }, [_vm._v("\n        You can see this if you have "), _c("el-tag", {
    staticClass: "permission-tag",
    attrs: {
      size: "small"
    }
  }, [_vm._v("manage user")]), _vm._v(" permission\n      ")], 1), _vm._v(" "), _c("el-tag", {
    directives: [{
      name: "permission",
      rawName: "v-permission",
      value: ["manage user"],
      expression: "['manage user']"
    }],
    staticClass: "permission-sourceCode",
    attrs: {
      type: "info"
    }
  }, [_vm._v("v-permission=\"['manage user']\"")])], 1)]), _vm._v(" "), _c("div", {
    key: "checkPermission" + _vm.key,
    staticStyle: {
      "margin-top": "60px"
    }
  }, [_c("code", [_vm._v("\n      " + _vm._s(_vm.$t("permission.tips")) + "\n      "), _c("br"), _vm._v(" e.g.\n    ")]), _vm._v(" "), _c("el-tabs", {
    staticStyle: {
      width: "550px"
    },
    attrs: {
      type: "border-card"
    }
  }, [_vm.checkRole(["admin"]) ? _c("el-tab-pane", {
    attrs: {
      label: "Admin"
    }
  }, [_vm._v("\n        Admin can see this\n        "), _c("el-tag", {
    staticClass: "permission-sourceCode",
    attrs: {
      type: "info"
    }
  }, [_vm._v("v-if=\"checkRole(['admin'])\"")])], 1) : _vm._e(), _vm._v(" "), _vm.checkRole(["manager"]) ? _c("el-tab-pane", {
    attrs: {
      label: "Manager"
    }
  }, [_vm._v("\n        Manager can see this\n        "), _c("el-tag", {
    staticClass: "permission-sourceCode",
    attrs: {
      type: "info"
    }
  }, [_vm._v("v-if=\"checkRole(['manager'])\"")])], 1) : _vm._e(), _vm._v(" "), _vm.checkRole(["editor"]) ? _c("el-tab-pane", {
    attrs: {
      label: "Editor"
    }
  }, [_vm._v("\n        Editor can see this\n        "), _c("el-tag", {
    staticClass: "permission-sourceCode",
    attrs: {
      type: "info"
    }
  }, [_vm._v("v-if=\"checkRole(['editor'])\"")])], 1) : _vm._e(), _vm._v(" "), _vm.checkRole(["user"]) ? _c("el-tab-pane", {
    attrs: {
      label: "User"
    }
  }, [_vm._v("\n        User can see this\n        "), _c("el-tag", {
    staticClass: "permission-sourceCode",
    attrs: {
      type: "info"
    }
  }, [_vm._v("v-if=\"checkRole(['user'])\"")])], 1) : _vm._e(), _vm._v(" "), _vm.checkRole(["visitor"]) ? _c("el-tab-pane", {
    attrs: {
      label: "Visitor"
    }
  }, [_vm._v("\n        Visitor can see this\n        "), _c("el-tag", {
    staticClass: "permission-sourceCode",
    attrs: {
      type: "info"
    }
  }, [_vm._v("v-if=\"checkRole(['visitor'])\"")])], 1) : _vm._e(), _vm._v(" "), _vm.checkRole(["admin", "editor"]) ? _c("el-tab-pane", {
    attrs: {
      label: "Admin-OR-Editor"
    }
  }, [_vm._v("\n        Both admin or editor can see this\n        "), _c("el-tag", {
    staticClass: "permission-sourceCode",
    attrs: {
      type: "info"
    }
  }, [_vm._v("v-if=\"checkRole(['admin','editor'])\"")])], 1) : _vm._e()], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/Directive.vue?vue&type=style&index=0&id=22b939ee&rel=stylesheet%2Fscss&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/Directive.vue?vue&type=style&index=0&id=22b939ee&rel=stylesheet%2Fscss&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\n\r\n  <div class=\"app-container\">\r\n               ^\r\n      Expected selector.\n  ╷\n2 │ .app-container {\n  │                 ^\n  ╵\n  stdin 2:17  root stylesheet\r\n      in C:\\xampp30\\htdocs\\Main_Egtyaz-main\\Main_Egtyaz-main\\resources\\js\\views\\permission\\Directive.vue (line 2, column 17)");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/Directive.vue?vue&type=style&index=0&id=22b939ee&rel=stylesheet%2Fscss&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/Directive.vue?vue&type=style&index=0&id=22b939ee&rel=stylesheet%2Fscss&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Directive.vue?vue&type=style&index=0&id=22b939ee&rel=stylesheet%2Fscss&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/Directive.vue?vue&type=style&index=0&id=22b939ee&rel=stylesheet%2Fscss&lang=scss&scoped=true");

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

/***/ "./resources/js/directive/role/index.js":
/*!**********************************************!*\
  !*** ./resources/js/directive/role/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role */ "./resources/js/directive/role/role.js");

var install = function install(Vue) {
  Vue.directive('role', _role__WEBPACK_IMPORTED_MODULE_0__["default"]);
};
if (window.Vue) {
  window['role'] = _role__WEBPACK_IMPORTED_MODULE_0__["default"];
  Vue.use(install); // eslint-disable-line
}
_role__WEBPACK_IMPORTED_MODULE_0__["default"].install = install;
/* harmony default export */ __webpack_exports__["default"] = (_role__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/directive/role/role.js":
/*!*********************************************!*\
  !*** ./resources/js/directive/role/role.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/store/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  inserted: function inserted(el, binding, vnode) {
    var value = binding.value;
    var roles = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters && _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters.roles;
    if (value && value instanceof Array && value.length > 0) {
      var requiredRoles = value;
      var hasRole = roles.some(function (role) {
        return requiredRoles.includes(role);
      });
      if (!hasRole) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error("Roles are required! Example: v-role=\"['admin','editor']\"");
    }
  }
});

/***/ }),

/***/ "./resources/js/utils/permission.js":
/*!******************************************!*\
  !*** ./resources/js/utils/permission.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkPermission; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/store/index.js");


/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/Directive.vue
 */
function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    var permissions = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters && _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters.permissions;
    var requiredPermissions = value;
    var hasPermission = permissions.some(function (permission) {
      return requiredPermissions.includes(permission);
    });
    return hasPermission;
  } else {
    console.error("Need permissions! Like v-permission=\"['manage permission','edit article']\"");
    return false;
  }
}

/***/ }),

/***/ "./resources/js/utils/role.js":
/*!************************************!*\
  !*** ./resources/js/utils/role.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkRole; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/store/index.js");


/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/Directive.vue
 */
function checkRole(value) {
  if (value && value instanceof Array && value.length > 0) {
    var roles = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters && _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters.roles;
    var requiredRoles = value;
    var hasRole = roles.some(function (role) {
      return requiredRoles.includes(role);
    });
    return hasRole;
  } else {
    console.error("Need roles! Like v-role=\"['admin','editor']\"");
    return false;
  }
}

/***/ }),

/***/ "./resources/js/views/permission/Directive.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/permission/Directive.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_vue_vue_type_template_id_22b939ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Directive.vue?vue&type=template&id=22b939ee&scoped=true */ "./resources/js/views/permission/Directive.vue?vue&type=template&id=22b939ee&scoped=true");
/* harmony import */ var _Directive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Directive.vue?vue&type=script&lang=js */ "./resources/js/views/permission/Directive.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Directive_vue_vue_type_style_index_0_id_22b939ee_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Directive.vue?vue&type=style&index=0&id=22b939ee&rel=stylesheet%2Fscss&lang=scss&scoped=true */ "./resources/js/views/permission/Directive.vue?vue&type=style&index=0&id=22b939ee&rel=stylesheet%2Fscss&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Directive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Directive_vue_vue_type_template_id_22b939ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Directive_vue_vue_type_template_id_22b939ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "22b939ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/permission/Directive.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/permission/Directive.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/permission/Directive.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Directive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Directive.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/Directive.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Directive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/permission/Directive.vue?vue&type=style&index=0&id=22b939ee&rel=stylesheet%2Fscss&lang=scss&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/views/permission/Directive.vue?vue&type=style&index=0&id=22b939ee&rel=stylesheet%2Fscss&lang=scss&scoped=true ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Directive_vue_vue_type_style_index_0_id_22b939ee_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Directive.vue?vue&type=style&index=0&id=22b939ee&rel=stylesheet%2Fscss&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/Directive.vue?vue&type=style&index=0&id=22b939ee&rel=stylesheet%2Fscss&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Directive_vue_vue_type_style_index_0_id_22b939ee_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Directive_vue_vue_type_style_index_0_id_22b939ee_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Directive_vue_vue_type_style_index_0_id_22b939ee_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Directive_vue_vue_type_style_index_0_id_22b939ee_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/permission/Directive.vue?vue&type=template&id=22b939ee&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/permission/Directive.vue?vue&type=template&id=22b939ee&scoped=true ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Directive_vue_vue_type_template_id_22b939ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Directive.vue?vue&type=template&id=22b939ee&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/Directive.vue?vue&type=template&id=22b939ee&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Directive_vue_vue_type_template_id_22b939ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Directive_vue_vue_type_template_id_22b939ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);