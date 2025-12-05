(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/exams/add.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/exams/add.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Pagination */ "./resources/js/components/Pagination/index.vue");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Table */ "./resources/js/views/ezuru/exams/components/Table.vue");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Search */ "./resources/js/views/ezuru/exams/components/Search.vue");
/* harmony import */ var _api_ezuru_exams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/ezuru/exams */ "./resources/js/api/ezuru/exams.js");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/user */ "./resources/js/api/user.js");
/* harmony import */ var tableexport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tableexport */ "./node_modules/tableexport/dist/js/tableexport.js");
/* harmony import */ var tableexport__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tableexport__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _directive_permission_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/directive/permission/index.js */ "./resources/js/directive/permission/index.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/settings */ "./resources/js/settings.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api_ezuru_posts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/ezuru/posts */ "./resources/js/api/ezuru/posts.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }






var Exams = new _api_ezuru_exams__WEBPACK_IMPORTED_MODULE_3__["default"]();
var Users = new _api_user__WEBPACK_IMPORTED_MODULE_4__["default"]();



var TokenKey = 'Admin-Token';

var Post = new _api_ezuru_posts__WEBPACK_IMPORTED_MODULE_9__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    permission: _directive_permission_index_js__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  'name': 'examShow',
  data: function data() {
    return {
      exam: {
        questions: [],
        subjects: [],
        level_id: [],
        questions_count: 10,
        available_time: 300,
        title: '',
        challengers: [],
        parent: '',
        copy: ''
      },
      time_per: "1",
      challenge_users: [],
      question_id: [],
      control_exams: 0,
      selected_questions: [],
      selected_subjects: [],
      selected_skills: [],
      selected_users: [],
      users_list: [],
      questions: [],
      subjects: [],
      skills: [],
      levels: [],
      loading: true,
      id: this.$route.params.id,
      student: '',
      type: 'free',
      query: {},
      parents: [],
      mocks: []
    };
  },
  methods: {
    delQuestion: function delQuestion(scope) {
      this.selected_questions.splice(scope.$index, 1);
    },
    getMockT: function getMockT() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var attachments;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return Post.selectByType('competitions');
            case 1:
              attachments = _context.v;
              _this.parents = attachments;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    getMocks: function getMocks() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var ex;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return Exams.selectByType('mock');
            case 1:
              ex = _context2.v;
              _this2.mocks = ex;
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    saveExam: function saveExam() {
      var _this3 = this;
      if (false) {} else {
        var tm = this.exam.available_time;
        if (this.time_per == "1" || this.time_per == 1) {
          tm = this.exam.available_time * 60;
        }
        var data = {
          id: this.id,
          type: this.type,
          title: this.exam.title,
          student_id: this.exam.student_id,
          subjects: this.exam.subjects,
          skills: this.exam.skills,
          level_id: this.exam.level_id,
          parent: this.exam.parent,
          questions_count: this.exam.questions_count,
          available_time: tm,
          challengers: this.exam.challengers,
          questions: [],
          copy: this.exam.copy
        };
        this.selected_questions.map(function (v) {
          data.questions.push(v.id);
        });
        Exams.store(data).then(function (response) {
          _this3.$message({
            message: 'Exam Saved successfully.',
            type: 'success',
            duration: 5 * 1000
          });
        });
      }
    },
    addThisToQuestions: function addThisToQuestions() {
      var o = this;
      var Q = {};
      var QQ = {};
      this.questions.map(function (que) {
        Q[que.id] = que.title;
      });
      this.selected_questions.map(function (que) {
        QQ[que.id] = que.title;
      });
      this.question_id.map(function (v) {
        if (Q.hasOwnProperty(v) && !QQ.hasOwnProperty(v)) {
          o.selected_questions.push({
            'id': v,
            'title': Q[v]
          });
        }
      });
      this.question_id = [];
    },
    getSize: function getSize(i) {
      if ((this.type == 'free' || this.type == 'challenge') && !this.control_exams) {
        if (i == 0) {
          return 24;
        } else {
          return 0;
        }
      } else {
        if (i == 0) {
          return 11;
        } else if (i == 1) {
          return 1;
        } else {
          return 12;
        }
      }
    },
    gety: function gety() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var listres, o, sub, skil, chalgers;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _this4.loading = true;
              _context3.n = 1;
              return Exams.addEdit(_this4.id);
            case 1:
              listres = _context3.v;
              if (listres) {
                _context3.n = 2;
                break;
              }
              if (_this4.exam.type == 'challenge') {
                _this4.getUsers();
              }
              return _context3.a(2, false);
            case 2:
              _this4.exam = listres;
              _this4.type = _this4.exam.type;
              _this4.exam.available_time = _this4.exam.available_time / 60;
              _this4.time_per = "1";
              _this4.selected_questions = [];
              _this4.selected_subjects = [];
              _this4.selected_kills = [];
              o = _this4;
              _this4.exam.questions.map(function (question) {
                if (question.question && question.question.hasOwnProperty('id')) {
                  o.selected_questions.push({
                    'id': question.question.id,
                    'title': question.question.title
                  });
                }
              });
              sub = [];
              _this4.exam.subjects.map(function (subject) {
                sub.push(subject.subject_id);
              });
              _this4.exam.subjects = sub;
              skil = [];
              _this4.exam.skills.map(function (skill) {
                skil.push(skill.skill_id);
              });
              _this4.exam.skills = skil;
              if (_this4.exam.student_id > 0) {
                _this4.users_list.push({
                  'id': _this4.exam.user.id,
                  'name': _this4.exam.user.name
                });
              }
              if (_this4.exam.type == 'challenge') {
                chalgers = [];
                if (_this4.exam.challenge) {
                  if (_this4.exam.challenge.challengers.length > 0) {
                    _this4.exam.challenge.challengers.map(function (ch) {
                      chalgers.push(ch.user_id);
                    });
                  }
                }
                _this4.exam.challengers = chalgers;
                _this4.getUsers();
                _this4.getMockT();
              }
              _this4.loading = false;
            case 3:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    getUsers: function getUsers() {
      var self = this;
      fetch(_settings__WEBPACK_IMPORTED_MODULE_7__["default"].apiUrl + 'admin/users/list?s=*').then(function (res) {
        return res.json();
      }).then(function (res) {
        self.challenge_users = res;
      });
    },
    getTaxonomy: function getTaxonomy(type, variable) {
      var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      if (!type) {
        type = category;
      }
      var self = this;
      fetch(_settings__WEBPACK_IMPORTED_MODULE_7__["default"].apiUrl + 'admin/taxonomy/' + type + '?parent=' + parent, {
        method: 'get',
        headers: new Headers({
          'Authorization': 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.get(TokenKey)
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        self[variable] = res;
      });
    },
    searchQuestions: function searchQuestions(s) {
      if (s.length < 3) {
        return false;
      }
      var self = this;
      var query = {
        's': s,
        'level_id': this.exam.level_id,
        'subjects': this.exam.subjects
      };
      fetch(_settings__WEBPACK_IMPORTED_MODULE_7__["default"].apiUrl + 'admin/questions/select', {
        method: 'post',
        headers: new Headers({
          'Authorization': 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.get(TokenKey)
        }),
        body: JSON.stringify(query)
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        self.questions = res;
      });
    },
    searchSubjects: function searchSubjects(s) {
      var self = this;
      fetch(_settings__WEBPACK_IMPORTED_MODULE_7__["default"].apiUrl + 'admin/taxonomy/select?type=subject&s=' + s, {
        method: 'get',
        headers: new Headers({
          'Authorization': 'Bearer ' + js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.get(TokenKey)
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        self.subjects = res;
      });
    },
    searchUser: function searchUser(query) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var self;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (!(query.length > 3)) {
                _context4.n = 2;
                break;
              }
              _this5.loading = true;
              self = _this5;
              _context4.n = 1;
              return Users.select({
                's': query
              });
            case 1:
              _this5.users_list = _context4.v;
              _this5.loading = false;
              _context4.n = 3;
              break;
            case 2:
              _this5.users_list = [];
            case 3:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    }
  },
  mounted: function mounted() {
    var o = this;
    if (this.$route.hasOwnProperty('query') && this.$route.query.hasOwnProperty('type')) {
      this.type = this.$route.query.type;
      this.exam.type = this.type;
    }
    if (this.$route.hasOwnProperty('query') && this.$route.query.hasOwnProperty('student')) {
      this.student = this.$route.query.student;
    }
    this.getTaxonomy('level', 'levels');
    this.getTaxonomy('subject', 'subjects');
    this.getTaxonomy('skill', 'skills');
    this.getMocks();
    o.gety();
    if (this.exam.type == 'challenge' || this.type == 'challenge') {
      this.getMockT();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/exams/add.vue?vue&type=template&id=77bba42b":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ezuru/exams/add.vue?vue&type=template&id=77bba42b ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
      id: "booking"
    }
  }, [_c("el-row", [_c("el-form", {
    attrs: {
      model: _vm.query,
      "label-position": "left",
      "label-width": "150px"
    }
  }, [_c("el-col", {
    attrs: {
      span: _vm.getSize(0)
    }
  }, [_c("el-card", {
    staticClass: "box-card",
    attrs: {
      shadow: "always"
    }
  }, [_c("div", {
    staticClass: "clearfix",
    attrs: {
      slot: "header"
    },
    slot: "header"
  }, [_c("span", [_vm._v("Exam Information")])]), _vm._v(" "), _c("el-row", [_vm.type == "free" || _vm.type == "challenge" ? _c("el-col", {
    attrs: {
      span: 24
    }
  }, [_c("el-form-item", {
    attrs: {
      label: "Student"
    }
  }, [_c("el-select", {
    attrs: {
      filterable: "",
      remote: "",
      placeholder: "Search Students",
      "remote-method": _vm.searchUser
    },
    model: {
      value: _vm.exam.student_id,
      callback: function callback($$v) {
        _vm.$set(_vm.exam, "student_id", $$v);
      },
      expression: "exam.student_id"
    }
  }, _vm._l(_vm.users_list, function (item) {
    return _c("el-option", {
      key: item.id,
      attrs: {
        label: item.name,
        value: item.id
      }
    });
  }), 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.type == "mock" || _vm.type == "challenge" ? _c("el-col", {
    attrs: {
      span: 24
    }
  }, [_c("el-form-item", {
    attrs: {
      label: "title"
    }
  }, [_c("el-input", {
    model: {
      value: _vm.exam.title,
      callback: function callback($$v) {
        _vm.$set(_vm.exam, "title", $$v);
      },
      expression: "exam.title"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 24
    }
  }, [_c("el-form-item", {
    attrs: {
      label: "Subjects"
    }
  }, [_c("el-select", {
    attrs: {
      filterable: "",
      multiple: "",
      placeholder: "Search Subjects"
    },
    model: {
      value: _vm.exam.subjects,
      callback: function callback($$v) {
        _vm.$set(_vm.exam, "subjects", $$v);
      },
      expression: "exam.subjects"
    }
  }, _vm._l(_vm.subjects, function (item) {
    return _c("el-option", {
      key: item.id,
      attrs: {
        label: item.name,
        value: {
          id: item.id,
          text: item.name
        }
      }
    });
  }), 1)], 1)], 1), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 24
    }
  }, [_c("el-form-item", {
    attrs: {
      label: "Skills"
    }
  }, [_c("el-select", {
    attrs: {
      filterable: "",
      multiple: "",
      placeholder: "Search Skills"
    },
    model: {
      value: _vm.exam.skills,
      callback: function callback($$v) {
        _vm.$set(_vm.exam, "skills", $$v);
      },
      expression: "exam.skills"
    }
  }, _vm._l(_vm.skills, function (item) {
    return _c("el-option", {
      key: item.id,
      attrs: {
        label: item.name,
        value: item.id
      }
    });
  }), 1)], 1)], 1), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 24
    }
  }, [_c("el-form-item", {
    attrs: {
      label: "Levels"
    }
  }, [_c("el-select", {
    attrs: {
      placeholder: "Levels",
      filterable: ""
    },
    model: {
      value: _vm.exam.level_id,
      callback: function callback($$v) {
        _vm.$set(_vm.exam, "level_id", $$v);
      },
      expression: "exam.level_id"
    }
  }, _vm._l(_vm.levels, function (level) {
    return _c("el-option", {
      key: level.id,
      attrs: {
        label: level.name,
        value: parseInt(level.id)
      }
    });
  }), 1)], 1)], 1), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 24
    }
  }, [_c("el-form-item", {
    attrs: {
      label: "Questions Count"
    }
  }, [_c("el-input", {
    model: {
      value: _vm.exam.questions_count,
      callback: function callback($$v) {
        _vm.$set(_vm.exam, "questions_count", $$v);
      },
      expression: "exam.questions_count"
    }
  })], 1)], 1), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 24
    }
  }, [_c("el-form-item", {
    attrs: {
      label: "Available Time"
    }
  }, [_c("el-input", {
    model: {
      value: _vm.exam.available_time,
      callback: function callback($$v) {
        _vm.$set(_vm.exam, "available_time", $$v);
      },
      expression: "exam.available_time"
    }
  }, [_c("el-select", {
    staticStyle: {
      width: "100px"
    },
    attrs: {
      slot: "prepend",
      placeholder: "Time Per"
    },
    slot: "prepend",
    model: {
      value: _vm.time_per,
      callback: function callback($$v) {
        _vm.time_per = $$v;
      },
      expression: "time_per"
    }
  }, [_c("el-option", {
    attrs: {
      label: "in Minutes",
      value: "1"
    }
  }), _vm._v(" "), _c("el-option", {
    attrs: {
      label: "in Seconds",
      value: "2"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _vm.type == "challenge" ? _c("el-col", {
    attrs: {
      span: 24
    }
  }, [_c("el-form-item", {
    attrs: {
      label: "Challengers"
    }
  }, [_c("el-select", {
    attrs: {
      filterable: "",
      multiple: "",
      placeholder: "Select Challengers"
    },
    model: {
      value: _vm.exam.challengers,
      callback: function callback($$v) {
        _vm.$set(_vm.exam, "challengers", $$v);
      },
      expression: "exam.challengers"
    }
  }, _vm._l(_vm.challenge_users, function (item) {
    return _c("el-option", {
      key: item.id,
      attrs: {
        label: item.name,
        value: item.id
      }
    });
  }), 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.type == "challenge" ? _c("el-col", {
    attrs: {
      span: 24
    }
  }, [_c("el-form-item", {
    attrs: {
      label: "Competitions"
    }
  }, [_c("el-select", {
    attrs: {
      filterable: ""
    },
    model: {
      value: _vm.exam.parent,
      callback: function callback($$v) {
        _vm.$set(_vm.exam, "parent", $$v);
      },
      expression: "exam.parent"
    }
  }, [_c("el-option", {
    key: "0",
    attrs: {
      value: "",
      label: "Without"
    }
  }), _vm._v(" "), _vm._l(_vm.parents, function (item) {
    return _c("el-option", {
      key: item.id,
      attrs: {
        value: item.id,
        label: item.title
      }
    });
  })], 2)], 1)], 1) : _vm._e(), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 24
    }
  }, [_c("el-form-item", {
    attrs: {
      label: "Control Questions"
    }
  }, [_c("el-switch", {
    model: {
      value: _vm.control_exams,
      callback: function callback($$v) {
        _vm.control_exams = $$v;
      },
      expression: "control_exams"
    }
  })], 1)], 1), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 24
    }
  }, [_c("el-form-item", {
    attrs: {
      label: " "
    }
  }, [_c("el-button", {
    attrs: {
      type: "success"
    },
    on: {
      click: _vm.saveExam
    }
  }, [_vm._v("\n                                                Save Exam\n                                        ")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("el-col", {
    attrs: {
      span: _vm.getSize(1)
    }
  }, [_vm._v(" ")]), _vm._v(" "), _c("el-col", {
    attrs: {
      span: _vm.getSize(2)
    }
  }, [_c("el-card", {
    staticClass: "box-card"
  }, [_c("div", {
    staticClass: "clearfix",
    attrs: {
      slot: "header"
    },
    slot: "header"
  }, [_c("span", [_vm._v("Questions List")])]), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 18
    }
  }, [_c("el-form-item", {
    attrs: {
      label: "Questions"
    }
  }, [_c("el-select", {
    attrs: {
      multiple: "",
      filterable: "",
      remote: "",
      placeholder: "Search Questions",
      "remote-method": _vm.searchQuestions
    },
    model: {
      value: _vm.question_id,
      callback: function callback($$v) {
        _vm.question_id = $$v;
      },
      expression: "question_id"
    }
  }, _vm._l(_vm.questions, function (item) {
    return _c("el-option", {
      key: item.id,
      attrs: {
        label: item.title,
        value: item.id
      }
    });
  }), 1)], 1)], 1), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 6
    }
  }, [_c("el-button", {
    attrs: {
      type: "primary",
      size: "mini",
      icon: "el-icon-plus"
    },
    on: {
      click: _vm.addThisToQuestions
    }
  })], 1), _vm._v(" "), _c("div", [_c("el-table", {
    attrs: {
      data: _vm.selected_questions
    }
  }, [_c("el-table-column", {
    attrs: {
      align: "center",
      label: "Question"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("p", [_vm._v(_vm._s(scope.row.title.replace(/<.*?>/g, "")))])];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Delete"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("router-link", {
          attrs: {
            to: "/set-questions/questions/edit/" + scope.row.id
          }
        }, [_c("el-button", {
          attrs: {
            type: "warning",
            icon: "el-icon-edit"
          }
        })], 1)];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      align: "center",
      label: "Delete"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("el-button", {
          attrs: {
            type: "danger",
            icon: "el-icon-delete"
          },
          on: {
            click: function click($event) {
              return _vm.delQuestion(scope);
            }
          }
        })];
      }
    }])
  })], 1), _vm._v(" "), _c("el-divider", [_vm._v(" Or Get Questions from Mock "), _c("i", {
    staticClass: "el-icon-star-on"
  })]), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 24
    }
  }, [_c("el-form-item", {
    attrs: {
      label: "Mock Tests To Copy From"
    }
  }, [_c("el-select", {
    attrs: {
      filterable: ""
    },
    model: {
      value: _vm.exam.copy,
      callback: function callback($$v) {
        _vm.$set(_vm.exam, "copy", $$v);
      },
      expression: "exam.copy"
    }
  }, [_c("el-option", {
    key: "0",
    attrs: {
      value: "",
      label: "Dont Copy"
    }
  }), _vm._v(" "), _vm._l(_vm.mocks, function (item) {
    return _c("el-option", {
      key: item.id,
      attrs: {
        value: item.id,
        label: item.title
      }
    });
  })], 2)], 1), _vm._v(" "), _c("el-alert", {
    attrs: {
      title: "When Chose Copy : We ignore Any Other Questions ",
      type: "error"
    }
  }), _vm._v(" "), _c("br")], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/api/ezuru/posts.js":
/*!*****************************************!*\
  !*** ./resources/js/api/ezuru/posts.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostsResource; });
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


var PostsResource = /*#__PURE__*/function (_Resource) {
  function PostsResource() {
    _classCallCheck(this, PostsResource);
    return _callSuper(this, PostsResource, ['admin/post']);
  }
  _inherits(PostsResource, _Resource);
  return _createClass(PostsResource);
}(_api_resource__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./resources/js/views/ezuru/exams/add.vue":
/*!************************************************!*\
  !*** ./resources/js/views/ezuru/exams/add.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_77bba42b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=77bba42b */ "./resources/js/views/ezuru/exams/add.vue?vue&type=template&id=77bba42b");
/* harmony import */ var _add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js */ "./resources/js/views/ezuru/exams/add.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_77bba42b__WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_77bba42b__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ezuru/exams/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ezuru/exams/add.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/views/ezuru/exams/add.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/exams/add.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ezuru/exams/add.vue?vue&type=template&id=77bba42b":
/*!******************************************************************************!*\
  !*** ./resources/js/views/ezuru/exams/add.vue?vue&type=template&id=77bba42b ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_77bba42b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=77bba42b */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ezuru/exams/add.vue?vue&type=template&id=77bba42b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_77bba42b__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_77bba42b__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);