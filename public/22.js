(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/role */ "./resources/js/api/role.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var roleResource = new _api_role__WEBPACK_IMPORTED_MODULE_0__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      avaiableRoles: [],
      loading: false,
      list: []
    };
  },
  created: function created() {
    this.getRoles();
  },
  computed: {
    roles: function roles() {
      return this.$store.getters.roles;
    },
    switchRoles: {
      get: function get() {
        return this.roles[0];
      },
      set: function set(val) {
        var _this = this;
        var found = this.list.find(function (role) {
          return role.name === val;
        });
        this.$store.dispatch('user/changeRoles', found).then(function () {
          _this.$emit('change');
        });
      }
    }
  },
  methods: {
    getRoles: function getRoles() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$roleResource$l, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this2.loading = true;
              _context.n = 1;
              return roleResource.list({});
            case 1:
              _yield$roleResource$l = _context.v;
              data = _yield$roleResource$l.data;
              _this2.list = data;
              _this2.list.forEach(function (role, index) {
                role['index'] = index + 1;
                role['description'] = _this2.$t('roles.description.' + role.name);
              });
              _this2.loading = false;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/components/SwitchRoles.vue?vue&type=template&id=11aa21a1":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/permission/components/SwitchRoles.vue?vue&type=template&id=11aa21a1 ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticStyle: {
      "margin-bottom": "15px"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.$t("permission.roles")) + ": " + _vm._s(_vm.roles) + "\n  ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      "margin-bottom": "15px"
    }
  }, [_vm._v(_vm._s(_vm.$t("permission.switchRoles")) + ": ")]), _vm._v(" "), _c("div", [_c("el-radio-group", {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.loading,
      expression: "loading"
    }],
    model: {
      value: _vm.switchRoles,
      callback: function callback($$v) {
        _vm.switchRoles = $$v;
      },
      expression: "switchRoles"
    }
  }, [_c("el-radio-button", {
    attrs: {
      label: "admin"
    }
  }), _vm._v(" "), _c("el-radio-button", {
    attrs: {
      label: "manager"
    }
  }), _vm._v(" "), _c("el-radio-button", {
    attrs: {
      label: "editor"
    }
  }), _vm._v(" "), _c("el-radio-button", {
    attrs: {
      label: "user"
    }
  }), _vm._v(" "), _c("el-radio-button", {
    attrs: {
      label: "visitor"
    }
  })], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/api/resource.js":
/*!**************************************!*\
  !*** ./resources/js/api/resource.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resource; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/js/utils/request.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * Simple RESTful resource class
 */
var Resource = /*#__PURE__*/function () {
  function Resource(uri) {
    _classCallCheck(this, Resource);
    this.uri = uri;
  }
  return _createClass(Resource, [{
    key: "list",
    value: function list(query) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri,
        method: 'get',
        params: query
      });
    }
  }, {
    key: "get",
    value: function get(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/' + id,
        method: 'get'
      });
    }
  }, {
    key: "store",
    value: function store(resource) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri,
        method: 'post',
        data: resource
      });
    }
  }, {
    key: "update",
    value: function update(id, resource) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/' + id,
        method: 'put',
        data: resource
      });
    }
  }, {
    key: "destroy",
    value: function destroy(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/' + id,
        method: 'delete'
      });
    }
  }, {
    key: "active",
    value: function active(url, status, id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/active/' + id,
        method: 'post',
        data: {
          "status": status
        }
      });
    }
  }, {
    key: "select",
    value: function select(query) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/select',
        method: 'get',
        params: query
      });
    }
  }, {
    key: "selectByType",
    value: function selectByType(type) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/select/' + type,
        method: 'get'
      });
    }
  }]);
}();


/***/ }),

/***/ "./resources/js/api/role.js":
/*!**********************************!*\
  !*** ./resources/js/api/role.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoleResource; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/js/utils/request.js");
/* harmony import */ var _api_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/resource */ "./resources/js/api/resource.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var RoleResource = /*#__PURE__*/function (_Resource) {
  function RoleResource() {
    _classCallCheck(this, RoleResource);
    return _callSuper(this, RoleResource, ['roles']);
  }
  _inherits(RoleResource, _Resource);
  return _createClass(RoleResource, [{
    key: "permissions",
    value: function permissions(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/' + id + '/permissions',
        method: 'get'
      });
    }

    // DELETE /roles/{id}
  }, {
    key: "destroy",
    value: function destroy(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/' + id,
        method: 'delete'
      });
    }
  }]);
}(_api_resource__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./resources/js/views/permission/components/SwitchRoles.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/permission/components/SwitchRoles.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitchRoles_vue_vue_type_template_id_11aa21a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchRoles.vue?vue&type=template&id=11aa21a1 */ "./resources/js/views/permission/components/SwitchRoles.vue?vue&type=template&id=11aa21a1");
/* harmony import */ var _SwitchRoles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchRoles.vue?vue&type=script&lang=js */ "./resources/js/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SwitchRoles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchRoles_vue_vue_type_template_id_11aa21a1__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwitchRoles_vue_vue_type_template_id_11aa21a1__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/permission/components/SwitchRoles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchRoles.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/permission/components/SwitchRoles.vue?vue&type=template&id=11aa21a1":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/permission/components/SwitchRoles.vue?vue&type=template&id=11aa21a1 ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoles_vue_vue_type_template_id_11aa21a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchRoles.vue?vue&type=template&id=11aa21a1 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/permission/components/SwitchRoles.vue?vue&type=template&id=11aa21a1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoles_vue_vue_type_template_id_11aa21a1__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoles_vue_vue_type_template_id_11aa21a1__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);