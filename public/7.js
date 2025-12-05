(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/exams/components/Table.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/exams/components/Table.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/settings */ "./resources/js/settings.js");
/* harmony import */ var _api_ezuru_exams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/ezuru/exams */ "./resources/js/api/ezuru/exams.js");
/* harmony import */ var _directive_permission_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/directive/permission/index.js */ "./resources/js/directive/permission/index.js");
/* harmony import */ var _components_Tinymce_index_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Tinymce/index.vue */ "./resources/js/components/Tinymce/index.vue");


var Exams = new _api_ezuru_exams__WEBPACK_IMPORTED_MODULE_1__["default"]();


/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    permission: _directive_permission_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  components: {
    tinymce: _components_Tinymce_index_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      Status: _settings__WEBPACK_IMPORTED_MODULE_0__["default"].bookingStatus
    };
  },
  props: ['list', 'loading', 'reload', "type"],
  methods: {
    AddEditExam: function AddEditExam() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      if (id == '') {
        this.$router.push('/questions/exams/add?type=' + this.type);
      } else {
        this.$router.push('/questions/exams/edit/' + id);
      }
    },
    reloadAgain: function reloadAgain() {
      this.$emit('reloadAgain');
    },
    handleDelete: function handleDelete(id, name) {
      var _this = this;
      var o = this;
      this.$confirm('This will permanently delete Exam ' + id + '. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(function () {
        Exams.destroy(id).then(function (response) {
          _this.$message({
            type: 'success',
            message: 'Delete completed'
          });
          o.reloadAgain();
        })["catch"](function (error) {
          console.log(error);
        });
      })["catch"](function (e) {
        console.log(e);
        _this.$message({
          type: 'info',
          message: 'Delete canceled'
        });
      });
    }
  },
  computed: {},
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/exams/components/Table.vue?vue&type=template&id=b419d94a&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/exams/components/Table.vue?vue&type=template&id=b419d94a&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      id: "ExamsTable"
    }
  }, [_c("br"), _vm._v(" "), _c("el-button", {
    attrs: {
      type: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.AddEditExam();
      }
    }
  }, [_c("i", {
    staticClass: "el-icon-add"
  }), _vm._v(" Add New Exam \n                ")]), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _c("el-table", {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.loading,
      expression: "loading"
    }],
    staticStyle: {
      width: "100%"
    },
    attrs: {
      data: _vm.list,
      border: "",
      fit: "",
      "highlight-current-row": ""
    }
  }, [_c("el-table-column", {
    attrs: {
      align: "center",
      label: "ID",
      width: "50"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("router-link", {
          attrs: {
            to: "/questions/exams/show/" + scope.row.id
          }
        }, [_vm._v(" " + _vm._s(scope.row.id) + " ")])];
      }
    }])
  }), _vm._v(" "), _vm.type == "mock" || _vm.type == "challenge" ? _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Title",
      width: "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("span", {
          domProps: {
            innerHTML: _vm._s(scope.row.title)
          }
        })];
      }
    }], null, false, 3810752195)
  }) : _vm._e(), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Date"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("el-button-group", [_c("el-tooltip", {
          attrs: {
            content: "Created at " + scope.row.created_at
          }
        }, [_c("el-button", {
          attrs: {
            type: "warning",
            size: "mini",
            icon: "el-icon-date"
          }
        })], 1)], 1)];
      }
    }])
  }), _vm._v(" "), _vm.type == "free" ? _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Student"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [scope.row.user ? _c("router-link", {
          attrs: {
            to: "/users/user/edit/" + scope.row.user.id
          }
        }, [_c("span", [_vm._v(_vm._s(scope.row.user.name))])]) : _vm._e()];
      }
    }], null, false, 4146394912)
  }) : _vm._e(), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Level"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [scope.row.level && scope.row.level.hasOwnProperty("id") ? _c("div", [scope.row.level_id ? _c("span", [_vm._v(_vm._s(scope.row.level.name))]) : _vm._e()]) : _vm._e()];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Subjects"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [scope.row.subjects.length > 0 ? _c("div", _vm._l(scope.row.subjects, function (subject) {
          return _c("span", [subject.subject && subject.subject.hasOwnProperty("name") ? _c("span", [_vm._v("\n                                " + _vm._s(subject.subject.name) + " ,\n                                ")]) : _vm._e()]);
        }), 0) : _vm._e()];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Questions"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("span", [_vm._v(_vm._s(scope.row.questions_count))])];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Time"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [scope.row.available_time <= 60 ? _c("span", [_vm._v(_vm._s(scope.row.available_time) + " Seconds ")]) : _c("span", [_c("el-tooltip", {
          attrs: {
            placement: "top-start",
            content: scope.row.available_time + " Seconds"
          }
        }, [_c("span", [_vm._v(" About " + _vm._s((scope.row.available_time / 60).toFixed(0)) + " Minute")])])], 1)];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    directives: [{
      name: "permission",
      rawName: "v-permission",
      value: ["manage exam delete"],
      expression: "['manage exam delete']"
    }],
    attrs: {
      align: "center",
      label: "Delete"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("el-button-group", [_c("el-tooltip", {
          attrs: {
            content: "Delete",
            placement: "top"
          }
        }, [_c("el-button", {
          attrs: {
            size: "mini",
            type: "danger",
            icon: "el-icon-delete"
          },
          on: {
            click: function click($event) {
              return _vm.handleDelete(scope.row.id, scope.row.title);
            }
          }
        })], 1)], 1), _vm._v(" "), _c("el-button-group", [_c("el-tooltip", {
          attrs: {
            content: "View",
            placement: "top"
          }
        }, [_c("router-link", {
          attrs: {
            to: "/questions/exams/show/" + scope.row.id
          }
        }, [_c("el-button", {
          attrs: {
            size: "mini",
            type: "primary",
            icon: "el-icon-view"
          }
        })], 1)], 1)], 1), _vm._v(" "), _c("el-button-group", [_c("el-tooltip", {
          attrs: {
            content: "View",
            placement: "top"
          }
        }, [_c("router-link", {
          attrs: {
            to: "/questions/exams/edit/" + scope.row.id
          }
        }, [_c("el-button", {
          attrs: {
            size: "mini",
            type: "warning",
            icon: "el-icon-edit"
          }
        })], 1)], 1)], 1)];
      }
    }])
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/exams/components/Table.vue?vue&type=style&index=0&id=b419d94a&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/exams/components/Table.vue?vue&type=style&index=0&id=b419d94a&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\nspan.x[data-v-b419d94a] { \n        width: 100%;\n        position: relative;\n        margin-right:10px;\n}\nspan.x[data-v-b419d94a]:before { content: '';\n        position: absolute;\n        bottom: 50%;\n        border-bottom: 2px red solid;\n        width: 100%;\n        z-index:0;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/exams/components/Table.vue?vue&type=style&index=0&id=b419d94a&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/exams/components/Table.vue?vue&type=style&index=0&id=b419d94a&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=style&index=0&id=b419d94a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/exams/components/Table.vue?vue&type=style&index=0&id=b419d94a&scoped=true&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/api/ezuru/exams.js":
/*!*****************************************!*\
  !*** ./resources/js/api/ezuru/exams.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExamsResource; });
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


var ExamsResource = /*#__PURE__*/function (_Resource) {
  function ExamsResource() {
    _classCallCheck(this, ExamsResource);
    return _callSuper(this, ExamsResource, ['exams']);
  }
  _inherits(ExamsResource, _Resource);
  return _createClass(ExamsResource, [{
    key: "active",
    value: function active(url, status, id, message, charge, date) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/active/' + id,
        method: 'post',
        data: {
          "status": status,
          "message": message,
          "charge": charge,
          "date": date
        }
      });
    }
  }, {
    key: "get",
    value: function get(id) {
      var student = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/' + id + '?student=' + student,
        method: 'get'
      });
    }
  }, {
    key: "addEdit",
    value: function addEdit(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/' + id + '?is_add_edit=true',
        method: 'get'
      });
    }
  }]);
}(_api_resource__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./resources/js/api/ezuru/units.js":
/*!*****************************************!*\
  !*** ./resources/js/api/ezuru/units.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UnitResource; });
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


var UnitResource = /*#__PURE__*/function (_Resource) {
  function UnitResource() {
    _classCallCheck(this, UnitResource);
    return _callSuper(this, UnitResource, ['units']);
  }
  _inherits(UnitResource, _Resource);
  return _createClass(UnitResource, [{
    key: "feature",
    value: function feature(unit, status) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/feature/' + unit,
        method: 'post',
        data: {
          "status": status
        }
      });
    }
  }]);
}(_api_resource__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./resources/js/api/user.js":
/*!**********************************!*\
  !*** ./resources/js/api/user.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserResource; });
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


var UserResource = /*#__PURE__*/function (_Resource) {
  function UserResource() {
    _classCallCheck(this, UserResource);
    return _callSuper(this, UserResource, ['users']);
  }
  _inherits(UserResource, _Resource);
  return _createClass(UserResource, [{
    key: "permissions",
    value: function permissions(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/' + id + '/permissions',
        method: 'get'
      });
    }
  }, {
    key: "updatePermission",
    value: function updatePermission(id, permissions) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/' + id + '/permissions',
        method: 'put',
        data: permissions
      });
    }
  }, {
    key: "DoVerify",
    value: function DoVerify(userid, fi, status) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/verifiy/' + userid,
        method: 'post',
        data: {
          "field": fi,
          "status": status
        }
      });
    }
  }, {
    key: "updateArea",
    value: function updateArea(userid, area) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: '/' + this.uri + '/area/' + userid,
        method: 'post',
        data: {
          "area": area
        }
      });
    }
  }]);
}(_api_resource__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./resources/js/views/ezuru/exams/components/Table.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/ezuru/exams/components/Table.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table_vue_vue_type_template_id_b419d94a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=b419d94a&scoped=true */ "./resources/js/views/ezuru/exams/components/Table.vue?vue&type=template&id=b419d94a&scoped=true");
/* harmony import */ var _Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js */ "./resources/js/views/ezuru/exams/components/Table.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Table_vue_vue_type_style_index_0_id_b419d94a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table.vue?vue&type=style&index=0&id=b419d94a&scoped=true&lang=css */ "./resources/js/views/ezuru/exams/components/Table.vue?vue&type=style&index=0&id=b419d94a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Table_vue_vue_type_template_id_b419d94a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Table_vue_vue_type_template_id_b419d94a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b419d94a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ezuru/exams/components/Table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ezuru/exams/components/Table.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/ezuru/exams/components/Table.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/exams/components/Table.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ezuru/exams/components/Table.vue?vue&type=style&index=0&id=b419d94a&scoped=true&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/views/ezuru/exams/components/Table.vue?vue&type=style&index=0&id=b419d94a&scoped=true&lang=css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_b419d94a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=style&index=0&id=b419d94a&scoped=true&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/exams/components/Table.vue?vue&type=style&index=0&id=b419d94a&scoped=true&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_b419d94a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_b419d94a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_b419d94a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_b419d94a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/ezuru/exams/components/Table.vue?vue&type=template&id=b419d94a&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/ezuru/exams/components/Table.vue?vue&type=template&id=b419d94a&scoped=true ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_b419d94a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=template&id=b419d94a&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/exams/components/Table.vue?vue&type=template&id=b419d94a&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_b419d94a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_b419d94a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);