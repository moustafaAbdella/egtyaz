(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/users/List.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/users/List.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Pagination */ "./resources/js/components/Pagination/index.vue");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/user */ "./resources/js/api/user.js");
/* harmony import */ var _api_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/resource */ "./resources/js/api/resource.js");
/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/directive/waves */ "./resources/js/directive/waves/index.js");
/* harmony import */ var _directive_permission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/directive/permission */ "./resources/js/directive/permission/index.js");
/* harmony import */ var _utils_permission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/permission */ "./resources/js/utils/permission.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/settings */ "./resources/js/settings.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
 // Secondary package based on el-pagination


 // Waves directive
 // Waves directive
 // Permission checking


var userResource = new _api_user__WEBPACK_IMPORTED_MODULE_1__["default"]();
var permissionResource = new _api_resource__WEBPACK_IMPORTED_MODULE_2__["default"]('permissions');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserList',
  components: {
    Pagination: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__["default"],
    permission: _directive_permission__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  directives: {
    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    var _this = this;
    var validateConfirmPassword = function validateConfirmPassword(rule, value, callback) {
      if (value !== _this.newUser.password) {
        callback(new Error('Password is mismatched!'));
      } else {
        callback();
      }
    };
    return {
      apiUrl: _settings__WEBPACK_IMPORTED_MODULE_6__["default"].apiUrl + 'admin/upload',
      list: null,
      total: 0,
      loading: true,
      downloading: false,
      userCreating: false,
      query: {
        page: 1,
        limit: 15,
        keyword: '',
        role: 'user',
        verification: []
      },
      roles: ['admin', 'manager', 'editor'],
      nonAdminRoles: ['manager', 'editor'],
      newUser: {
        avatar: '',
        roles: ''
      },
      dialogFormVisible: false,
      dialogPermissionVisible: false,
      dialogPermissionLoading: false,
      currentUserId: 0,
      currentUser: {
        name: '',
        permissions: [],
        rolePermissions: []
      },
      rules: {
        role: [{
          required: true,
          message: 'Role is required',
          trigger: 'change'
        }],
        name: [{
          required: true,
          message: 'Name is required',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: 'Email is required',
          trigger: 'blur'
        }, {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change']
        }],
        password: [{
          required: true,
          message: 'Password is required',
          trigger: 'blur'
        }],
        confirmPassword: [{
          validator: validateConfirmPassword,
          trigger: 'blur'
        }]
      },
      permissionProps: {
        children: 'children',
        label: 'name',
        disabled: 'disabled'
      },
      permissions: [],
      menuPermissions: [],
      otherPermissions: [],
      status: _settings__WEBPACK_IMPORTED_MODULE_6__["default"].userStatus,
      verification: [{
        label: "Email",
        value: "email_verified_at"
      }, {
        label: "Mobile",
        value: "mobile_verified_at"
      }, {
        label: "Photo Id",
        value: "photoid_verified_at"
      }],
      settings: _settings__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
  },
  computed: {
    normalizedMenuPermissions: function normalizedMenuPermissions() {
      var _this2 = this;
      var tmp = [];
      this.currentUser.permissions.role.forEach(function (permission) {
        tmp.push({
          id: permission.id,
          name: permission.name,
          disabled: true
        });
      });
      var rolePermissions = {
        id: -1,
        // Faked ID
        name: 'Inherited from role',
        disabled: true,
        children: this.classifyPermissions(tmp).menu
      };
      tmp = this.menuPermissions.filter(function (permission) {
        return !_this2.currentUser.permissions.role.find(function (p) {
          return p.id === permission.id;
        });
      });
      var userPermissions = {
        id: 0,
        // Faked ID
        name: 'Extra menus',
        children: tmp,
        disabled: tmp.length === 0
      };
      return [rolePermissions, userPermissions];
    },
    normalizedOtherPermissions: function normalizedOtherPermissions() {
      var _this3 = this;
      var tmp = [];
      this.currentUser.permissions.role.forEach(function (permission) {
        tmp.push({
          id: permission.id,
          name: permission.name,
          disabled: true
        });
      });
      var rolePermissions = {
        id: -1,
        name: 'Inherited from role',
        disabled: true,
        children: this.classifyPermissions(tmp).other
      };
      tmp = this.otherPermissions.filter(function (permission) {
        return !_this3.currentUser.permissions.role.find(function (p) {
          return p.id === permission.id;
        });
      });
      var userPermissions = {
        id: 0,
        name: 'Extra permissions',
        children: tmp,
        disabled: tmp.length === 0
      };
      return [rolePermissions, userPermissions];
    },
    userMenuPermissions: function userMenuPermissions() {
      return this.classifyPermissions(this.userPermissions).menu;
    },
    userOtherPermissions: function userOtherPermissions() {
      return this.classifyPermissions(this.userPermissions).other;
    },
    userPermissions: function userPermissions() {
      return this.currentUser.permissions.role.concat(this.currentUser.permissions.user);
    }
  },
  created: function created() {
    this.resetNewUser();
    this.getList();
    if (Object(_utils_permission__WEBPACK_IMPORTED_MODULE_5__["default"])(['manage permission'])) {
      this.getPermissions();
    }
  },
  methods: {
    checkPermission: _utils_permission__WEBPACK_IMPORTED_MODULE_5__["default"],
    getPermissions: function getPermissions() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$permissionReso, data, _this4$classifyPermis, all, menu, other;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return permissionResource.list({});
            case 1:
              _yield$permissionReso = _context.v;
              data = _yield$permissionReso.data;
              _this4$classifyPermis = _this4.classifyPermissions(data), all = _this4$classifyPermis.all, menu = _this4$classifyPermis.menu, other = _this4$classifyPermis.other;
              _this4.permissions = all;
              _this4.menuPermissions = menu;
              _this4.otherPermissions = other;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    getList: function getList() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this5$query, limit, page, _yield$userResource$l, data, total;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _this5$query = _this5.query, limit = _this5$query.limit, page = _this5$query.page;
              _this5.loading = true;
              _context2.n = 1;
              return userResource.list(_this5.query);
            case 1:
              _yield$userResource$l = _context2.v;
              data = _yield$userResource$l.data;
              total = _yield$userResource$l.total;
              _this5.list = data;
              _this5.list.forEach(function (element, index) {
                element['index'] = (page - 1) * limit + index + 1;
              });
              _this5.total = total;
              _this5.loading = false;
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    handleFilter: function handleFilter() {
      this.query.page = 1;
      this.getList();
    },
    handleCreate: function handleCreate() {
      var _this6 = this;
      this.resetNewUser();
      this.dialogFormVisible = true;
      this.$nextTick(function () {
        _this6.$refs['userForm'].clearValidate();
      });
    },
    handleDelete: function handleDelete(id, name) {
      var _this7 = this;
      this.$confirm('This will permanently delete user ' + name + '. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(function () {
        userResource.destroy(id).then(function (response) {
          _this7.$message({
            type: 'success',
            message: 'Delete completed'
          });
          _this7.handleFilter();
        })["catch"](function (error) {
          console.log(error);
        });
      })["catch"](function () {
        _this7.$message({
          type: 'info',
          message: 'Delete canceled'
        });
      });
    },
    handleActive: function handleActive(user, status) {
      var _this8 = this;
      var o = this;
      this.$confirm('This will Update User Status. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(function () {
        userResource.active(_settings__WEBPACK_IMPORTED_MODULE_6__["default"].apiUrl + 'users/active/' + user.id, status).then(function (response) {
          _this8.$message({
            type: 'success',
            message: 'Status Changed Succefully'
          });
          _this8.handleFilter();
        })["catch"](function (error) {
          console.log(error);
          _this8.$message({
            type: 'danger',
            message: error
          });
        });
      })["catch"](function () {
        _this8.$message({
          type: 'info',
          message: 'Update canceled'
        });
      });
    },
    handleEditPermissions: function handleEditPermissions(id) {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var found, _yield$userResource$p, data;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _this9.currentUserId = id;
              _this9.dialogPermissionLoading = true;
              _this9.dialogPermissionVisible = true;
              found = _this9.list.find(function (user) {
                return user.id === id;
              });
              _context3.n = 1;
              return userResource.permissions(id);
            case 1:
              _yield$userResource$p = _context3.v;
              data = _yield$userResource$p.data;
              _this9.currentUser = {
                id: found.id,
                name: found.name,
                permissions: data
              };
              _this9.dialogPermissionLoading = false;
              _this9.$nextTick(function () {
                _this9.$refs.menuPermissions.setCheckedKeys(_this9.permissionKeys(_this9.userMenuPermissions));
                _this9.$refs.otherPermissions.setCheckedKeys(_this9.permissionKeys(_this9.userOtherPermissions));
              });
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    createUser: function createUser() {
      var _this0 = this;
      this.$refs['userForm'].validate(function (valid) {
        if (valid) {
          // this.newUser.roles = [this.newUser.role];
          _this0.userCreating = true;
          userResource.store(_this0.newUser).then(function (response) {
            _this0.$message({
              message: 'New user ' + _this0.newUser.name + '(' + _this0.newUser.email + ') has been created successfully.',
              type: 'success',
              duration: 5 * 1000
            });
            _this0.resetNewUser();
            _this0.dialogFormVisible = false;
            _this0.handleFilter();
          })["catch"](function (error) {
            console.log(error);
          })["finally"](function () {
            _this0.userCreating = false;
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetNewUser: function resetNewUser() {
      this.newUser = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        avatar: '',
        mobile: '',
        city: '',
        role: '',
        status: 0
      };
    },
    handleDownload: function handleDownload() {
      var _this1 = this;
      this.downloading = true;
      Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, /*! @/vendor/Export2Excel */ "./resources/js/vendor/Export2Excel.js")).then(function (excel) {
        var tHeader = ['id', 'name', 'email', 'mobile', 'city', 'Units', 'Requests', 'Joined at'];
        var data = [];
        var col = 7;
        var rows = document.querySelectorAll(".el-table__body tr");
        rows.forEach(function (v, k) {
          var r = Array.prototype.slice.call(v.children);
          var rtr = [];
          r.forEach(function (vv, kk) {
            if (kk <= col) {
              rtr.push(vv.innerText);
            }
          });
          data.push(rtr);
        });
        excel.export_json_to_excel({
          header: tHeader,
          data: data,
          filename: 'user-list'
        });
        _this1.downloading = false;
      });
    },
    formatJson: function formatJson(filterVal, jsonData) {
      return jsonData.map(function (v) {
        return filterVal.map(function (j) {
          return v[j];
        });
      });
    },
    permissionKeys: function permissionKeys(permissions) {
      return permissions.map(function (permssion) {
        return permssion.id;
      });
    },
    classifyPermissions: function classifyPermissions(permissions) {
      var _this10 = this;
      var all = [];
      var menu = [];
      var other = [];
      permissions.forEach(function (permission) {
        var permissionName = permission.name;
        all.push(permission);
        if (permissionName.startsWith('view menu')) {
          menu.push(_this10.normalizeMenuPermission(permission));
        } else {
          other.push(_this10.normalizePermission(permission));
        }
      });
      return {
        all: all,
        menu: menu,
        other: other
      };
    },
    handleAvatarSuccess: function handleAvatarSuccess(res, file) {
      this.newUser.avatar = file.response;
    },
    beforeAvatarUpload: function beforeAvatarUpload(file) {
      var isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image.gif';
      var isLt2M = file.size / 1024 / 1024 < 10;
      if (!isJPG) {
        this.$message.error('Avatar picture must be JPG format!');
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!');
      }
      return isJPG && isLt2M;
    },
    normalizeMenuPermission: function normalizeMenuPermission(permission) {
      return {
        id: permission.id,
        name: this.$options.filters.uppercaseFirst(permission.name.substring(10)),
        disabled: permission.disabled || false
      };
    },
    normalizePermission: function normalizePermission(permission) {
      var disabled = permission.disabled || permission.name === 'manage permission';
      return {
        id: permission.id,
        name: this.$options.filters.uppercaseFirst(permission.name),
        disabled: disabled
      };
    },
    confirmPermission: function confirmPermission() {
      var _this11 = this;
      var checkedMenu = this.$refs.menuPermissions.getCheckedKeys();
      var checkedOther = this.$refs.otherPermissions.getCheckedKeys();
      var checkedPermissions = checkedMenu.concat(checkedOther);
      this.dialogPermissionLoading = true;
      userResource.updatePermission(this.currentUserId, {
        permissions: checkedPermissions
      }).then(function (response) {
        _this11.$message({
          message: 'Permissions has been updated successfully',
          type: 'success',
          duration: 5 * 1000
        });
        _this11.dialogPermissionLoading = false;
        _this11.dialogPermissionVisible = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/users/List.vue?vue&type=template&id=c6c55c60&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/users/List.vue?vue&type=template&id=c6c55c60&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "filter-container"
  }, [_c("el-input", {
    directives: [{
      name: "permission",
      rawName: "v-permission",
      value: ["manage user search"],
      expression: "['manage user search']"
    }],
    staticClass: "filter-item",
    staticStyle: {
      width: "300px"
    },
    attrs: {
      placeholder: _vm.$t("table.search") + " Name , Email , Mobile , City"
    },
    nativeOn: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.handleFilter.apply(null, arguments);
      }
    },
    model: {
      value: _vm.query.keyword,
      callback: function callback($$v) {
        _vm.$set(_vm.query, "keyword", $$v);
      },
      expression: "query.keyword"
    }
  }), _vm._v(" "), _c("el-select", {
    directives: [{
      name: "permission",
      rawName: "v-permission",
      value: ["manage user search"],
      expression: "['manage user search']"
    }],
    staticStyle: {
      width: "300px"
    },
    attrs: {
      multiple: "",
      filterable: "",
      placeholder: "Verify Type"
    },
    model: {
      value: _vm.query.verification,
      callback: function callback($$v) {
        _vm.$set(_vm.query, "verification", $$v);
      },
      expression: "query.verification"
    }
  }, _vm._l(_vm.verification, function (item) {
    return _c("el-option", {
      key: item.value,
      attrs: {
        label: item.label,
        value: item.value
      }
    });
  }), 1), _vm._v(" "), _c("el-button", {
    directives: [{
      name: "waves",
      rawName: "v-waves"
    }, {
      name: "permission",
      rawName: "v-permission",
      value: ["manage user search"],
      expression: "['manage user search']"
    }],
    staticClass: "filter-item",
    attrs: {
      type: "primary",
      icon: "el-icon-search"
    },
    on: {
      click: _vm.handleFilter
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t("table.search")) + " \n    ")]), _vm._v(" "), _c("el-button", {
    directives: [{
      name: "permission",
      rawName: "v-permission",
      value: ["manage user add"],
      expression: "['manage user add']"
    }],
    staticClass: "filter-item",
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      type: "primary",
      icon: "el-icon-plus"
    },
    on: {
      click: _vm.handleCreate
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t("table.add")) + "\n    ")]), _vm._v(" "), _c("el-button", {
    directives: [{
      name: "permission",
      rawName: "v-permission",
      value: ["manage user export"],
      expression: "['manage user export']"
    }, {
      name: "waves",
      rawName: "v-waves"
    }],
    staticClass: "filter-item",
    attrs: {
      loading: _vm.downloading,
      type: "primary",
      icon: "el-icon-download"
    },
    on: {
      click: _vm.handleDownload
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t("table.export")) + "\n    ")])], 1), _vm._v(" "), _c("el-table", {
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
      width: "80"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("span", [_vm._v(_vm._s(scope.row.index))])];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Name"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("span", [_vm._v(_vm._s(scope.row.name))])];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Email"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("span", [_vm._v(_vm._s(scope.row.email))])];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Mobile"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("span", [_vm._v(_vm._s(scope.row.mobile))])];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "City"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [scope.row.city && scope.row.city.hasOwnProperty("name") ? _c("span", [_vm._v(_vm._s(scope.row.city.name))]) : _c("span")];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Joined At"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("span", [_vm._v(_vm._s(scope.row.created_at))])];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Verfications",
      width: "120"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("el-button-group", [_c("el-tooltip", {
          staticClass: "item",
          attrs: {
            effect: "dark",
            content: "Verfied At: " + scope.row.mobile_verified_at,
            placement: "top-start"
          }
        }, [scope.row.mobile_verified_at ? _c("el-button", {
          attrs: {
            size: "mini",
            type: "success",
            icon: "el-icon-mobile"
          }
        }) : _vm._e()], 1)], 1)];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Actions",
      width: "350"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("router-link", {
          attrs: {
            to: "/users/user/edit/" + scope.row.id
          }
        }, [_c("el-button", {
          directives: [{
            name: "permission",
            rawName: "v-permission",
            value: ["manage user edit"],
            expression: "['manage user edit']"
          }],
          attrs: {
            type: "primary",
            size: "small",
            icon: "el-icon-edit"
          }
        })], 1), _vm._v(" "), _c("el-button", {
          directives: [{
            name: "permission",
            rawName: "v-permission",
            value: ["manage user delete"],
            expression: "['manage user delete']"
          }],
          attrs: {
            type: "danger",
            size: "small",
            icon: "el-icon-delete"
          },
          on: {
            click: function click($event) {
              return _vm.handleDelete(scope.row.id, scope.row.name);
            }
          }
        }), _vm._v(" "), _c("el-tooltip", {
          staticClass: "item",
          attrs: {
            effect: "dark",
            content: "Status: " + _vm.status[scope.row.status],
            placement: "top-start"
          }
        }, [_c("el-button", {
          directives: [{
            name: "permission",
            rawName: "v-permission",
            value: ["manage user status"],
            expression: "['manage user status']"
          }],
          attrs: {
            size: "small",
            type: scope.row.status ? "success" : "",
            icon: scope.row.status ? "el-icon-success" : "el-icon-error"
          },
          on: {
            click: function click($event) {
              _vm.handleActive(scope.row, scope.row.status == 1 ? 0 : 1);
            }
          }
        })], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("pagination", {
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
      pagination: _vm.getList
    }
  }), _vm._v(" "), _c("el-dialog", {
    attrs: {
      title: "Create new user",
      visible: _vm.dialogFormVisible
    },
    on: {
      "update:visible": function updateVisible($event) {
        _vm.dialogFormVisible = $event;
      }
    }
  }, [_c("div", {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.userCreating,
      expression: "userCreating"
    }],
    staticClass: "form-container"
  }, [_c("el-form", {
    ref: "userForm",
    staticStyle: {
      "max-width": "500px"
    },
    attrs: {
      rules: _vm.rules,
      model: _vm.newUser,
      "label-position": "left",
      "label-width": "150px"
    }
  }, [_c("el-form-item", {
    attrs: {
      label: _vm.$t("user.name"),
      prop: "name"
    }
  }, [_c("el-input", {
    model: {
      value: _vm.newUser.name,
      callback: function callback($$v) {
        _vm.$set(_vm.newUser, "name", $$v);
      },
      expression: "newUser.name"
    }
  })], 1), _vm._v(" "), _c("el-form-item", {
    attrs: {
      label: _vm.$t("user.email"),
      prop: "email"
    }
  }, [_c("el-input", {
    model: {
      value: _vm.newUser.email,
      callback: function callback($$v) {
        _vm.$set(_vm.newUser, "email", $$v);
      },
      expression: "newUser.email"
    }
  })], 1), _vm._v(" "), _c("el-form-item", {
    attrs: {
      label: _vm.$t("Mobile"),
      prop: "mobile"
    }
  }, [_c("el-input", {
    model: {
      value: _vm.newUser.mobile,
      callback: function callback($$v) {
        _vm.$set(_vm.newUser, "mobile", $$v);
      },
      expression: "newUser.mobile"
    }
  })], 1), _vm._v(" "), _c("el-form-item", {
    attrs: {
      label: _vm.$t("Status"),
      prop: "status"
    }
  }, [_c("el-select", {
    attrs: {
      placeholder: "Status"
    },
    model: {
      value: _vm.newUser.status,
      callback: function callback($$v) {
        _vm.$set(_vm.newUser, "status", $$v);
      },
      expression: "newUser.status"
    }
  }, _vm._l(_vm.status, function (item, index) {
    return _c("el-option", {
      key: index,
      attrs: {
        label: item,
        value: index
      }
    });
  }), 1)], 1), _vm._v(" "), _c("el-form-item", {
    attrs: {
      label: _vm.$t("Roles"),
      prop: "roles"
    }
  }, [_c("el-select", {
    attrs: {
      placeholder: "Role"
    },
    model: {
      value: _vm.newUser.roles,
      callback: function callback($$v) {
        _vm.$set(_vm.newUser, "roles", $$v);
      },
      expression: "newUser.roles"
    }
  }, _vm._l(_vm.settings.nonAdminRoles, function (item, index) {
    return _c("el-option", {
      key: item,
      attrs: {
        label: item,
        value: item
      }
    });
  }), 1)], 1), _vm._v(" "), _c("el-form-item", {
    attrs: {
      label: "Image"
    }
  }, [_c("el-upload", {
    staticClass: "avatar-uploader",
    attrs: {
      action: _vm.apiUrl,
      "show-file-list": false,
      "on-success": _vm.handleAvatarSuccess,
      "before-upload": _vm.beforeAvatarUpload
    }
  }, [_vm.newUser.avatar != "" ? _c("img", {
    staticClass: "avatar",
    attrs: {
      src: _vm.newUser.avatar
    }
  }) : _c("i", {
    staticClass: "el-icon-plus avatar-uploader-icon"
  })])], 1), _vm._v(" "), _c("el-form-item", {
    attrs: {
      label: _vm.$t("user.password"),
      prop: "password"
    }
  }, [_c("el-input", {
    attrs: {
      "show-password": ""
    },
    model: {
      value: _vm.newUser.password,
      callback: function callback($$v) {
        _vm.$set(_vm.newUser, "password", $$v);
      },
      expression: "newUser.password"
    }
  })], 1), _vm._v(" "), _c("el-form-item", {
    attrs: {
      label: _vm.$t("user.confirmPassword"),
      prop: "confirmPassword"
    }
  }, [_c("el-input", {
    attrs: {
      "show-password": ""
    },
    model: {
      value: _vm.newUser.confirmPassword,
      callback: function callback($$v) {
        _vm.$set(_vm.newUser, "confirmPassword", $$v);
      },
      expression: "newUser.confirmPassword"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "dialog-footer",
    attrs: {
      slot: "footer"
    },
    slot: "footer"
  }, [_c("el-button", {
    on: {
      click: function click($event) {
        _vm.dialogFormVisible = false;
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("table.cancel")) + "\n        ")]), _vm._v(" "), _c("el-button", {
    attrs: {
      type: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.createUser();
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("table.confirm")) + "\n        ")])], 1)], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/users/List.vue?vue&type=style&index=1&id=c6c55c60&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/users/List.vue?vue&type=style&index=1&id=c6c55c60&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".edit-input[data-v-c6c55c60] {\n  padding-right: 100px;\n}\n.cancel-btn[data-v-c6c55c60] {\n  position: absolute;\n  right: 15px;\n  top: 10px;\n}\n.dialog-footer[data-v-c6c55c60] {\n  text-align: left;\n  padding-top: 0;\n  margin-left: 150px;\n}\n.app-container[data-v-c6c55c60] {\n  flex: 1;\n  justify-content: space-between;\n  font-size: 14px;\n  padding-right: 8px;\n}\n.app-container .block[data-v-c6c55c60] {\n  float: left;\n  min-width: 250px;\n}\n.app-container .clear-left[data-v-c6c55c60] {\n  clear: left;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/directive/waves/waves.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/directive/waves/waves.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".waves-ripple {\n    position: absolute;\n    border-radius: 100%;\n    background-color: rgba(0, 0, 0, 0.15);\n    background-clip: padding-box;\n    pointer-events: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n    transform: scale(0);\n    opacity: 1;\n}\n\n.waves-ripple.z-active {\n    opacity: 0;\n    transform: scale(2);\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/users/List.vue?vue&type=style&index=0&id=c6c55c60&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/users/List.vue?vue&type=style&index=0&id=c6c55c60&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.el-left{\n     float:right\n}\n.avatar-uploader .el-upload {\n   border: 1px dashed #d9d9d9;\n   border-radius: 6px;\n   cursor: pointer;\n   position: relative;\n   overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n   border-color: #409EFF;\n}\n.avatar-uploader-icon {\n   font-size: 28px;\n   color: #8c939d;\n   width: 178px;\n   height: 178px;\n   line-height: 178px;\n   text-align: center;\n}\n.avatar {\n   width: 178px;\n   height: 178px;\n   display: block;\n}\ntable .el-button + .el-button {\n   margin-left: 0px !important ;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/users/List.vue?vue&type=style&index=1&id=c6c55c60&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/users/List.vue?vue&type=style&index=1&id=c6c55c60&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=1&id=c6c55c60&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/users/List.vue?vue&type=style&index=1&id=c6c55c60&lang=scss&scoped=true");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/users/List.vue?vue&type=style&index=0&id=c6c55c60&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/users/List.vue?vue&type=style&index=0&id=c6c55c60&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&id=c6c55c60&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/users/List.vue?vue&type=style&index=0&id=c6c55c60&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ "./resources/js/directive/waves/index.js":
/*!***********************************************!*\
  !*** ./resources/js/directive/waves/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _waves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waves */ "./resources/js/directive/waves/waves.js");

var install = function install(Vue) {
  Vue.directive('waves', _waves__WEBPACK_IMPORTED_MODULE_0__["default"]);
};
if (window.Vue) {
  window.waves = _waves__WEBPACK_IMPORTED_MODULE_0__["default"];
  Vue.use(install); // eslint-disable-line
}
_waves__WEBPACK_IMPORTED_MODULE_0__["default"].install = install;
/* harmony default export */ __webpack_exports__["default"] = (_waves__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/directive/waves/waves.css":
/*!************************************************!*\
  !*** ./resources/js/directive/waves/waves.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/postcss-loader/src??ref--6-2!./waves.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/directive/waves/waves.css");

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

/***/ "./resources/js/directive/waves/waves.js":
/*!***********************************************!*\
  !*** ./resources/js/directive/waves/waves.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _waves_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waves.css */ "./resources/js/directive/waves/waves.css");
/* harmony import */ var _waves_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_waves_css__WEBPACK_IMPORTED_MODULE_0__);

var context = '@@wavesContext';
function handleClick(el, binding) {
  function handle(e) {
    var customOpts = Object.assign({}, binding.value);
    var opts = Object.assign({
      ele: el,
      // Main wave element
      type: 'hit',
      // hit: Wave at click location. center: Center point
      color: 'rgba(0, 0, 0, 0.15)' // Ripple color
    }, customOpts);
    var target = opts.ele;
    if (target) {
      target.style.position = 'relative';
      target.style.overflow = 'hidden';
      var rect = target.getBoundingClientRect();
      var ripple = target.querySelector('.waves-ripple');
      if (!ripple) {
        ripple = document.createElement('span');
        ripple.className = 'waves-ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        target.appendChild(ripple);
      } else {
        ripple.className = 'waves-ripple';
      }
      switch (opts.type) {
        case 'center':
          ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px';
          ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px';
          break;
        default:
          ripple.style.top = (e.pageY - rect.top - ripple.offsetHeight / 2 - document.documentElement.scrollTop || document.body.scrollTop) + 'px';
          ripple.style.left = (e.pageX - rect.left - ripple.offsetWidth / 2 - document.documentElement.scrollLeft || document.body.scrollLeft) + 'px';
      }
      ripple.style.backgroundColor = opts.color;
      ripple.className = 'waves-ripple z-active';
      return false;
    }
  }
  if (!el[context]) {
    el[context] = {
      removeHandle: handle
    };
  } else {
    el[context].removeHandle = handle;
  }
  return handle;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function bind(el, binding) {
    el.addEventListener('click', handleClick(el, binding), false);
  },
  update: function update(el, binding) {
    el.removeEventListener('click', el[context].removeHandle, false);
    el.addEventListener('click', handleClick(el, binding), false);
  },
  unbind: function unbind(el) {
    el.removeEventListener('click', el[context].removeHandle, false);
    el[context] = null;
    delete el[context];
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

/***/ "./resources/js/views/ezuru/users/List.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/ezuru/users/List.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_c6c55c60_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=c6c55c60&scoped=true */ "./resources/js/views/ezuru/users/List.vue?vue&type=template&id=c6c55c60&scoped=true");
/* harmony import */ var _List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js */ "./resources/js/views/ezuru/users/List.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _List_vue_vue_type_style_index_0_id_c6c55c60_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.vue?vue&type=style&index=0&id=c6c55c60&lang=css */ "./resources/js/views/ezuru/users/List.vue?vue&type=style&index=0&id=c6c55c60&lang=css");
/* harmony import */ var _List_vue_vue_type_style_index_1_id_c6c55c60_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./List.vue?vue&type=style&index=1&id=c6c55c60&lang=scss&scoped=true */ "./resources/js/views/ezuru/users/List.vue?vue&type=style&index=1&id=c6c55c60&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_c6c55c60_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_c6c55c60_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c6c55c60",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ezuru/users/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ezuru/users/List.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/views/ezuru/users/List.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/users/List.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ezuru/users/List.vue?vue&type=style&index=0&id=c6c55c60&lang=css":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/ezuru/users/List.vue?vue&type=style&index=0&id=c6c55c60&lang=css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_c6c55c60_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&id=c6c55c60&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/users/List.vue?vue&type=style&index=0&id=c6c55c60&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_c6c55c60_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_c6c55c60_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_c6c55c60_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_c6c55c60_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/ezuru/users/List.vue?vue&type=style&index=1&id=c6c55c60&lang=scss&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/ezuru/users/List.vue?vue&type=style&index=1&id=c6c55c60&lang=scss&scoped=true ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_1_id_c6c55c60_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=1&id=c6c55c60&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/users/List.vue?vue&type=style&index=1&id=c6c55c60&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_1_id_c6c55c60_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_1_id_c6c55c60_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_1_id_c6c55c60_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_1_id_c6c55c60_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/ezuru/users/List.vue?vue&type=template&id=c6c55c60&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/ezuru/users/List.vue?vue&type=template&id=c6c55c60&scoped=true ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_c6c55c60_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=c6c55c60&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/users/List.vue?vue&type=template&id=c6c55c60&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_c6c55c60_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_c6c55c60_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);