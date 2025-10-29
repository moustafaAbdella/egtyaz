(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/components/Search.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/log/components/Search.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/settings */ "./resources/js/settings.js");
/* harmony import */ var _api_ezuru_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/ezuru/units */ "./resources/js/api/ezuru/units.js");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/user */ "./resources/js/api/user.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



var Units = new _api_ezuru_units__WEBPACK_IMPORTED_MODULE_1__["default"]();
var Users = new _api_user__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  prop: ['search'],
  data: function data() {
    return {
      loading: false,
      query: {
        page: 1,
        limit: 20,
        user_id: '',
        models: ''
      },
      bookingStatus: _settings__WEBPACK_IMPORTED_MODULE_0__["default"].flagStatus,
      models_list: ["dashboard", "units", "users", "reviews", "payments", "messages", "flags", "log", "settings", "category aminites", "category area", "category badge", "category careers", "category category", "category city", "category contact", "category country", "category cpolicy", "category faq", "category fee", "category government", "category news", "category policy", "category rest", "category review_type", "category views", "about", "blog", "cancle", "careers", "checkin", "contact", "faq", "how_work", "news", "page", "partiners", "payment_methods", "slider", "team", "tourist_places", "trust", "why_ezuru"],
      type: [],
      users_list: []
    };
  },
  methods: {
    setSearch: function setSearch() {
      this.$parent.query = this.query;
    },
    getUsers: function getUsers() {
      var self = this;
      fetch(_settings__WEBPACK_IMPORTED_MODULE_0__["default"].apiUrl + 'admin/users/list').then(function (res) {
        return res.json();
      }).then(function (res) {
        self.users = res;
      });
    },
    DoSearch: function DoSearch() {
      this.$parent.gety();
    },
    CancelSearch: function CancelSearch() {
      var no = {
        "page": this.query.page,
        "limit": this.query.limit,
        "type": this.query.type
      };
      this.query = no;
    },
    capitalizeFirstLetter: function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    searchUnit: function searchUnit(query) {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var self;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!(query.length >= 3)) {
                _context.n = 2;
                break;
              }
              _this.loading = true;
              self = _this;
              _context.n = 1;
              return Units.select({
                's': query
              });
            case 1:
              _this.units_list = _context.v;
              _this.loading = false;
              _context.n = 3;
              break;
            case 2:
              _this.units_list = [];
            case 3:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    searchUser: function searchUser(query) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var self;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!(query.length >= 3)) {
                _context2.n = 2;
                break;
              }
              _this2.loading = true;
              self = _this2;
              _context2.n = 1;
              return Users.select({
                's': query
              });
            case 1:
              _this2.users_list = _context2.v;
              _this2.loading = false;
              _context2.n = 3;
              break;
            case 2:
              _this2.users_list = [];
            case 3:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    searchUser2: function searchUser2(query) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var self;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (!(query.length >= 3)) {
                _context3.n = 2;
                break;
              }
              _this3.loading = true;
              self = _this3;
              _context3.n = 1;
              return Users.select({
                's': query
              });
            case 1:
              _this3.users_list2 = _context3.v;
              _this3.loading = false;
              _context3.n = 3;
              break;
            case 2:
              _this3.users_list2 = [];
            case 3:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    }
  },
  mounted: function mounted() {
    this.query = this.$attrs.search;
  },
  watch: {
    query: {
      deep: true,
      handler: function handler() {
        this.setSearch();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/components/Table.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/log/components/Table.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/settings */ "./resources/js/settings.js");
/* harmony import */ var _api_ezuru_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/ezuru/log */ "./resources/js/api/ezuru/log.js");
/* harmony import */ var _directive_permission_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/directive/permission/index.js */ "./resources/js/directive/permission/index.js");


var log = new _api_ezuru_log__WEBPACK_IMPORTED_MODULE_1__["default"]();
var Vue = window.vue;

/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    permission: _directive_permission_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      Status: _settings__WEBPACK_IMPORTED_MODULE_0__["default"].flagStatus,
      sc: {},
      html: '',
      dialogVisible: false
    };
  },
  props: ['list', 'loading', 'reload', 'type'],
  methods: {
    reloadAgain: function reloadAgain() {
      this.$emit('reloadAgain');
    },
    handleView: function handleView(scope, name) {
      var sc = scope.row;
      this.sc = sc;
      this.dialogVisible = true;
    },
    handleClose: function handleClose() {
      this.dialogVisible = false;
    },
    handleDelete: function handleDelete(id, name) {
      var _this = this;
      var o = this;
      this.$confirm('This will permanently delete Payment ' + id + '. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(function () {
        log.destroy(id).then(function (response) {
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
    },
    handleActive: function handleActive(booking) {
      var _this2 = this;
      var o = this;
      this.$confirm('This will Update Unit Status. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(function () {
        log.active('', booking.status, booking.id).then(function (response) {
          _this2.$message({
            type: 'success',
            message: 'Status Changed Succefully'
          });
          o.reloadAgain();
        })["catch"](function (error) {
          console.log(error);
          _this2.$message({
            type: 'danger',
            message: error
          });
        });
      })["catch"](function (e) {
        _this2.$message({
          type: 'info',
          message: 'Update canceled'
        });
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/log.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/log/log.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Pagination */ "./resources/js/components/Pagination/index.vue");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Table */ "./resources/js/views/ezuru/log/components/Table.vue");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Search */ "./resources/js/views/ezuru/log/components/Search.vue");
/* harmony import */ var _api_ezuru_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/ezuru/log */ "./resources/js/api/ezuru/log.js");
/* harmony import */ var tableexport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tableexport */ "./node_modules/tableexport/dist/js/tableexport.js");
/* harmony import */ var tableexport__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tableexport__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _directive_permission_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/directive/permission/index.js */ "./resources/js/directive/permission/index.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





var Log = new _api_ezuru_log__WEBPACK_IMPORTED_MODULE_3__["default"]();

/* harmony default export */ __webpack_exports__["default"] = ({
  'name': 'LogManager',
  directives: {
    permission: _directive_permission_index_js__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      list: [],
      type: this.$route.meta.type,
      loading: true,
      search: false,
      query: {
        type: this.$route.meta.type,
        limit: 10
      },
      total: 0
    };
  },
  components: {
    Table: _components_Table__WEBPACK_IMPORTED_MODULE_1__["default"],
    Pagination: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__["default"],
    Search: _components_Search__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    gety: function gety() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var listres;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this.loading = true;
              _context.n = 1;
              return Log.list(_this.query);
            case 1:
              listres = _context.v;
              _this.list = listres.data;
              _this.total = parseInt(listres.total);
              _this.query.page = parseInt(listres.current_page);
              _this.query.limit = parseInt(listres.per_page);
              _this.loading = false;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    exportTable: function exportTable() {
      tableexport__WEBPACK_IMPORTED_MODULE_4___default()(document.getElementsByClassName("el-table__body"), {
        position: "top",
        filename: "log"
      });
    }
  },
  mounted: function mounted() {
    var o = this;
    o.gety();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/components/Search.vue?vue&type=template&id=632c713b":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/log/components/Search.vue?vue&type=template&id=632c713b ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
      id: "unitSearch"
    }
  }, [_c("div", {
    staticClass: "app-container"
  }, [_c("el-form", {
    attrs: {
      model: _vm.query,
      "label-position": "left",
      "label-width": "150px"
    }
  }, [_c("el-row", [_c("el-col", {
    attrs: {
      span: 6
    }
  }, [_c("el-form-item", {
    attrs: {
      label: "User"
    }
  }, [_c("el-select", {
    attrs: {
      filterable: "",
      remote: "",
      placeholder: "Search User",
      "remote-method": _vm.searchUser,
      loading: _vm.loading
    },
    model: {
      value: _vm.query.user_id,
      callback: function callback($$v) {
        _vm.$set(_vm.query, "user_id", $$v);
      },
      expression: "query.user_id"
    }
  }, _vm._l(_vm.users_list, function (item) {
    return _c("el-option", {
      key: item.id,
      attrs: {
        label: item.name,
        value: item.id
      }
    });
  }), 1)], 1)], 1), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 6
    }
  }, [_c("el-form-item", {
    attrs: {
      label: "Model"
    }
  }, [_c("el-select", {
    attrs: {
      placeholder: "Models"
    },
    model: {
      value: _vm.query.models,
      callback: function callback($$v) {
        _vm.$set(_vm.query, "models", $$v);
      },
      expression: "query.models"
    }
  }, _vm._l(_vm.models_list, function (item) {
    return _c("el-option", {
      key: item,
      attrs: {
        label: _vm.capitalizeFirstLetter(item),
        value: item
      }
    });
  }), 1)], 1)], 1), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 1
    }
  }, [_vm._v(" ")]), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 5
    }
  }, [_c("el-button", {
    attrs: {
      type: "primary"
    },
    on: {
      click: _vm.DoSearch
    }
  }, [_vm._v("Search")]), _vm._v(" "), _c("el-button", {
    attrs: {
      type: "warning"
    },
    on: {
      click: function click($event) {
        return _vm.CancelSearch();
      }
    }
  }, [_vm._v("Cancel")])], 1)], 1), _vm._v(" "), _c("el-row")], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/components/Table.vue?vue&type=template&id=3322df0b":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/log/components/Table.vue?vue&type=template&id=3322df0b ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
      id: "logTable"
    }
  }, [_c("el-table", {
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
        return [_c("span", [_vm._v(_vm._s(scope.row.id))])];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "User"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("router-link", {
          attrs: {
            to: "/users/user/edit/" + scope.row.user.id
          }
        }, [_c("span", [_vm._v(_vm._s(scope.row.user.name))])])];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Operation"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_vm._v("\n                                " + _vm._s(scope.row.log_type) + "\n                        ")];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Model"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_vm._v("\n                                " + _vm._s(scope.row.model) + "\n                        ")];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Date"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("el-button-group", [_c("el-tooltip", {
          attrs: {
            content: scope.row.created_at
          }
        }, [_c("el-button", {
          attrs: {
            size: "mini",
            type: "primary",
            icon: "el-icon-date"
          }
        })], 1)], 1)];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    directives: [{
      name: "premission",
      rawName: "v-premission",
      value: ["manage log delete"],
      expression: "['manage log delete']"
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
        })], 1)], 1)];
      }
    }])
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/log.vue?vue&type=template&id=692ebb9e":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/log/log.vue?vue&type=template&id=692ebb9e ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      id: "reviews"
    }
  }, [_c("el-button", {
    directives: [{
      name: "permission",
      rawName: "v-permission",
      value: ["manage log search"],
      expression: "['manage log search']"
    }],
    attrs: {
      type: "primary"
    },
    on: {
      click: function click($event) {
        _vm.search ^= true;
      }
    }
  }, [_c("i", {
    staticClass: "el-icon-search"
  }), _vm._v(" Search")]), _vm._v(" "), _c("el-button", {
    directives: [{
      name: "permission",
      rawName: "v-permission",
      value: ["manage log export"],
      expression: "['manage log export']"
    }],
    attrs: {
      type: "warning"
    },
    on: {
      click: function click($event) {
        return _vm.exportTable();
      }
    }
  }, [_c("i", {
    staticClass: "el-icon-share"
  }), _vm._v(" Export")]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.search ? _c("Search", {
    attrs: {
      search: _vm.query,
      types: _vm.type
    }
  }) : _vm._e(), _vm._v(" "), _c("Table", {
    attrs: {
      list: _vm.list,
      loading: _vm.loading,
      type: _vm.type
    },
    on: {
      reloadAgain: _vm.gety
    }
  }), _vm._v(" "), _c("pagination", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.total > 0,
      expression: "total>0"
    }],
    attrs: {
      total: _vm.total,
      page: _vm.query.page,
      limit: _vm.query.limit
    },
    on: {
      "update:page": function updatePage($event) {
        return _vm.$set(_vm.query, "page", $event);
      },
      "update:limit": function updateLimit($event) {
        return _vm.$set(_vm.query, "limit", $event);
      },
      pagination: _vm.gety
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/components/Search.vue?vue&type=style&index=0&id=632c713b&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/log/components/Search.vue?vue&type=style&index=0&id=632c713b&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n#unitSearch{\n    padding:20px 0;\n    background:#f1f1f1\n}\n.el-form-item__label{\n    text-align: center!important\n}\n.el-date-editor--datetimerange.el-input, .el-date-editor--datetimerange.el-input__inner,.el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner{\n    max-width: 100%\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/components/Search.vue?vue&type=style&index=0&id=632c713b&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/log/components/Search.vue?vue&type=style&index=0&id=632c713b&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=style&index=0&id=632c713b&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/components/Search.vue?vue&type=style&index=0&id=632c713b&lang=css");

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

/***/ "./resources/js/api/ezuru/log.js":
/*!***************************************!*\
  !*** ./resources/js/api/ezuru/log.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogResource; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/js/utils/request.js");
/* harmony import */ var _api_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/resource */ "./resources/js/api/resource.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var LogResource = /*#__PURE__*/function (_Resource) {
  function LogResource() {
    _classCallCheck(this, LogResource);
    return _callSuper(this, LogResource, ['log']);
  }
  _inherits(LogResource, _Resource);
  return _createClass(LogResource);
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

/***/ "./resources/js/views/ezuru/log/components/Search.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/ezuru/log/components/Search.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search_vue_vue_type_template_id_632c713b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=632c713b */ "./resources/js/views/ezuru/log/components/Search.vue?vue&type=template&id=632c713b");
/* harmony import */ var _Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js */ "./resources/js/views/ezuru/log/components/Search.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Search_vue_vue_type_style_index_0_id_632c713b_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search.vue?vue&type=style&index=0&id=632c713b&lang=css */ "./resources/js/views/ezuru/log/components/Search.vue?vue&type=style&index=0&id=632c713b&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Search_vue_vue_type_template_id_632c713b__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Search_vue_vue_type_template_id_632c713b__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ezuru/log/components/Search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ezuru/log/components/Search.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/views/ezuru/log/components/Search.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/components/Search.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ezuru/log/components/Search.vue?vue&type=style&index=0&id=632c713b&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/ezuru/log/components/Search.vue?vue&type=style&index=0&id=632c713b&lang=css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_632c713b_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=style&index=0&id=632c713b&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/components/Search.vue?vue&type=style&index=0&id=632c713b&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_632c713b_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_632c713b_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_632c713b_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_632c713b_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/ezuru/log/components/Search.vue?vue&type=template&id=632c713b":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/ezuru/log/components/Search.vue?vue&type=template&id=632c713b ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_632c713b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=template&id=632c713b */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/components/Search.vue?vue&type=template&id=632c713b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_632c713b__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_632c713b__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/ezuru/log/components/Table.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/ezuru/log/components/Table.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table_vue_vue_type_template_id_3322df0b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=3322df0b */ "./resources/js/views/ezuru/log/components/Table.vue?vue&type=template&id=3322df0b");
/* harmony import */ var _Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js */ "./resources/js/views/ezuru/log/components/Table.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Table_vue_vue_type_template_id_3322df0b__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Table_vue_vue_type_template_id_3322df0b__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ezuru/log/components/Table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ezuru/log/components/Table.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/ezuru/log/components/Table.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/components/Table.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ezuru/log/components/Table.vue?vue&type=template&id=3322df0b":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/ezuru/log/components/Table.vue?vue&type=template&id=3322df0b ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_3322df0b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=template&id=3322df0b */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/components/Table.vue?vue&type=template&id=3322df0b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_3322df0b__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_3322df0b__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/ezuru/log/log.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/ezuru/log/log.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log_vue_vue_type_template_id_692ebb9e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.vue?vue&type=template&id=692ebb9e */ "./resources/js/views/ezuru/log/log.vue?vue&type=template&id=692ebb9e");
/* harmony import */ var _log_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.vue?vue&type=script&lang=js */ "./resources/js/views/ezuru/log/log.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _log_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _log_vue_vue_type_template_id_692ebb9e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _log_vue_vue_type_template_id_692ebb9e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ezuru/log/log.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ezuru/log/log.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/views/ezuru/log/log.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_log_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./log.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/log.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_log_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ezuru/log/log.vue?vue&type=template&id=692ebb9e":
/*!****************************************************************************!*\
  !*** ./resources/js/views/ezuru/log/log.vue?vue&type=template&id=692ebb9e ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_log_vue_vue_type_template_id_692ebb9e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./log.vue?vue&type=template&id=692ebb9e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/log/log.vue?vue&type=template&id=692ebb9e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_log_vue_vue_type_template_id_692ebb9e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_log_vue_vue_type_template_id_692ebb9e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);