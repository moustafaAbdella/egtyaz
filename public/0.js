(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/settings */ "./resources/js/settings.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EditorSlideUpload',
  props: {
    color: {
      type: String,
      "default": '#1890ff'
    }
  },
  data: function data() {
    return {
      apiUrl: _settings__WEBPACK_IMPORTED_MODULE_0__["default"].apiUrl + 'admin/upload?return=object',
      dialogVisible: false,
      listObj: {},
      fileList: []
    };
  },
  methods: {
    checkAllSuccess: function checkAllSuccess() {
      var _this = this;
      return Object.keys(this.listObj).every(function (item) {
        return _this.listObj[item].hasSuccess;
      });
    },
    handleSubmit: function handleSubmit() {
      var _this2 = this;
      var arr = Object.keys(this.listObj).map(function (v) {
        return _this2.listObj[v];
      });
      if (!this.checkAllSuccess()) {
        this.$message('Please wait for all images to be uploaded successfully or there is a network problem, please refresh the page and re-upload!');
        return;
      }
      this.$emit('successCBK', arr);
      this.listObj = {};
      this.fileList = [];
      this.dialogVisible = false;
    },
    handleSuccess: function handleSuccess(response, file) {
      var uid = file.uid;
      var objKeyArr = Object.keys(this.listObj);
      for (var i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          this.listObj[objKeyArr[i]].url = response.files.file;
          this.listObj[objKeyArr[i]].hasSuccess = true;
          return;
        }
      }
    },
    handleRemove: function handleRemove(file) {
      var uid = file.uid;
      var objKeyArr = Object.keys(this.listObj);
      for (var i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          delete this.listObj[objKeyArr[i]];
          return;
        }
      }
    },
    beforeUpload: function beforeUpload(file) {
      var _self = this;
      var _URL = window.URL || window.webkitURL;
      var fileName = file.uid;
      this.listObj[fileName] = {};
      return new Promise(function (resolve, reject) {
        var img = new Image();
        img.src = _URL.createObjectURL(file);
        img.onload = function () {
          _self.listObj[fileName] = {
            hasSuccess: false,
            uid: file.uid,
            width: this.width,
            height: this.height
          };
        };
        resolve(true);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/index.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tinymce/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_EditorImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EditorImage */ "./resources/js/components/Tinymce/components/EditorImage.vue");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins */ "./resources/js/components/Tinymce/plugins.js");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar */ "./resources/js/components/Tinymce/toolbar.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Tinymce',
  components: {
    editorImage: _components_EditorImage__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    id: {
      type: String,
      "default": function _default() {
        return 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '');
      }
    },
    value: {
      type: String,
      "default": ''
    },
    toolbar: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    menubar: {
      type: String,
      "default": 'file edit insert view format table'
    },
    height: {
      type: Number,
      required: false,
      "default": 360
    }
  },
  data: function data() {
    return {
      hasChange: false,
      hasInit: false,
      tinymceId: this.id,
      fullscreen: false,
      languageTypeList: {
        'en': 'en',
        'zh': 'zh_CN'
      }
    };
  },
  computed: {
    language: function language() {
      return this.languageTypeList[this.$store.getters.language];
    }
  },
  watch: {
    value: function value(val) {
      var _this2 = this;
      if (!this.hasChange && this.hasInit) {
        this.$nextTick(function () {
          return window.tinymce.get(_this2.tinymceId).setContent(val || '');
        });
      }
    },
    language: function language() {
      var _this3 = this;
      this.destroyTinymce();
      this.$nextTick(function () {
        return _this3.initTinymce();
      });
    }
  },
  mounted: function mounted() {
    this.initTinymce();
  },
  activated: function activated() {
    this.initTinymce();
  },
  deactivated: function deactivated() {
    this.destroyTinymce();
  },
  destroyed: function destroyed() {
    this.destroyTinymce();
  },
  methods: {
    initTinymce: function initTinymce() {
      var _this4 = this;
      var _this = this;
      window.tinymce.init({
        language: this.language,
        selector: "#".concat(this.tinymceId),
        height: this.height,
        body_class: 'panel-body ',
        object_resizing: false,
        toolbar: this.toolbar.length > 0 ? this.toolbar : _toolbar__WEBPACK_IMPORTED_MODULE_2__["default"],
        menubar: this.menubar,
        plugins: _plugins__WEBPACK_IMPORTED_MODULE_1__["default"],
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
        convert_urls: false,
        default_link_target: '_blank',
        link_title: false,
        nonbreaking_force_tab: true,
        // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        init_instance_callback: function init_instance_callback(editor) {
          if (_this.value) {
            editor.setContent(_this.value);
          }
          _this.hasInit = true;
          editor.on('NodeChange Change KeyUp SetContent', function () {
            _this4.hasChange = true;
            _this4.$emit('input', editor.getContent());
          });
        },
        setup: function setup(editor) {
          editor.on('FullscreenStateChanged', function (e) {
            _this.fullscreen = e.state;
          });
        }
      });
    },
    destroyTinymce: function destroyTinymce() {
      var tinymce = window.tinymce.get(this.tinymceId);
      if (this.fullscreen) {
        tinymce.execCommand('mceFullScreen');
      }
      if (tinymce) {
        tinymce.destroy();
      }
    },
    setContent: function setContent(value) {
      window.tinymce.get(this.tinymceId).setContent(value);
    },
    getContent: function getContent() {
      window.tinymce.get(this.tinymceId).getContent();
    },
    imageSuccessCBK: function imageSuccessCBK(arr) {
      var _this = this;
      arr.forEach(function (v) {
        window.tinymce.get(_this.tinymceId).insertContent("<img class=\"wscnph\" src=\"".concat(v.url, "\" >"));
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=template&id=1f258700&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=template&id=1f258700&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "upload-container"
  }, [_c("el-button", {
    style: {
      background: _vm.color,
      borderColor: _vm.color
    },
    attrs: {
      icon: "el-icon-upload",
      size: "mini",
      type: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogVisible = true;
      }
    }
  }, [_vm._v("\n    Upload Image\n  ")]), _vm._v(" "), _c("el-dialog", {
    attrs: {
      visible: _vm.dialogVisible
    },
    on: {
      "update:visible": function updateVisible($event) {
        _vm.dialogVisible = $event;
      }
    }
  }, [_c("el-upload", {
    staticClass: "editor-slide-upload",
    attrs: {
      multiple: true,
      "file-list": _vm.fileList,
      "show-file-list": true,
      "on-remove": _vm.handleRemove,
      "on-success": _vm.handleSuccess,
      "before-upload": _vm.beforeUpload,
      action: _vm.apiUrl,
      "list-type": "picture-card"
    }
  }, [_c("el-button", {
    attrs: {
      size: "small",
      type: "primary"
    }
  }, [_vm._v("Click here to upload")])], 1), _vm._v(" "), _c("el-button", {
    on: {
      click: function click($event) {
        _vm.dialogVisible = false;
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("el-button", {
    attrs: {
      type: "primary"
    },
    on: {
      click: _vm.handleSubmit
    }
  }, [_vm._v("Confirm")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/index.vue?vue&type=template&id=4fa41bf7&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tinymce/index.vue?vue&type=template&id=4fa41bf7&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "tinymce-container editor-container",
    "class": {
      fullscreen: _vm.fullscreen
    }
  }, [_c("textarea", {
    staticClass: "tinymce-textarea",
    attrs: {
      id: _vm.tinymceId
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "editor-custom-btn-container"
  }, [_c("editorImage", {
    staticClass: "editor-upload-btn",
    attrs: {
      color: "#1890ff"
    },
    on: {
      successCBK: _vm.imageSuccessCBK
    }
  })], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=style&index=0&id=1f258700&rel=stylesheet%2Fscss&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=style&index=0&id=1f258700&rel=stylesheet%2Fscss&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\n\r\n    <el-button :style=\"{background:color,borderColor:color}\" icon=\"el-icon-upload\" size=\"mini\" type=\"primary\" @click=\" dialogVisible=true\">\r\n                     ^\r\n      Expected selector.\n  ╷\n3 │   margin-bottom: 20px;\n  │                       ^\n  ╵\n  stdin 3:23  root stylesheet\r\n      in C:\\xampp30\\htdocs\\Main_Egtyaz-main\\Main_Egtyaz-main\\resources\\js\\components\\Tinymce\\components\\EditorImage.vue (line 3, column 23)");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/index.vue?vue&type=style&index=0&id=4fa41bf7&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tinymce/index.vue?vue&type=style&index=0&id=4fa41bf7&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.tinymce-container[data-v-4fa41bf7] {\n  position: relative;\n  line-height: normal;\n}\n.tinymce-container[data-v-4fa41bf7] .mce-fullscreen {\n  z-index: 10000;\n}\n.tinymce-textarea[data-v-4fa41bf7] {\n  visibility: hidden;\n  z-index: -1;\n}\n.editor-custom-btn-container[data-v-4fa41bf7] {\n  position: absolute;\n  right: 4px;\n  top: 4px;\n  /*z-index: 2005;*/\n}\n.fullscreen .editor-custom-btn-container[data-v-4fa41bf7] {\n  z-index: 10000;\n  position: fixed;\n}\n.editor-upload-btn[data-v-4fa41bf7] {\n  display: inline-block;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=style&index=0&id=1f258700&rel=stylesheet%2Fscss&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=style&index=0&id=1f258700&rel=stylesheet%2Fscss&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditorImage.vue?vue&type=style&index=0&id=1f258700&rel=stylesheet%2Fscss&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=style&index=0&id=1f258700&rel=stylesheet%2Fscss&lang=scss&scoped=true");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/index.vue?vue&type=style&index=0&id=4fa41bf7&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tinymce/index.vue?vue&type=style&index=0&id=4fa41bf7&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=4fa41bf7&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/index.vue?vue&type=style&index=0&id=4fa41bf7&scoped=true&lang=css");

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

/***/ "./resources/js/components/Tinymce/components/EditorImage.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/Tinymce/components/EditorImage.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditorImage_vue_vue_type_template_id_1f258700_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorImage.vue?vue&type=template&id=1f258700&scoped=true */ "./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=template&id=1f258700&scoped=true");
/* harmony import */ var _EditorImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditorImage.vue?vue&type=script&lang=js */ "./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _EditorImage_vue_vue_type_style_index_0_id_1f258700_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorImage.vue?vue&type=style&index=0&id=1f258700&rel=stylesheet%2Fscss&lang=scss&scoped=true */ "./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=style&index=0&id=1f258700&rel=stylesheet%2Fscss&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditorImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditorImage_vue_vue_type_template_id_1f258700_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditorImage_vue_vue_type_template_id_1f258700_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f258700",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tinymce/components/EditorImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditorImage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=style&index=0&id=1f258700&rel=stylesheet%2Fscss&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=style&index=0&id=1f258700&rel=stylesheet%2Fscss&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_style_index_0_id_1f258700_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditorImage.vue?vue&type=style&index=0&id=1f258700&rel=stylesheet%2Fscss&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=style&index=0&id=1f258700&rel=stylesheet%2Fscss&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_style_index_0_id_1f258700_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_style_index_0_id_1f258700_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_style_index_0_id_1f258700_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_style_index_0_id_1f258700_rel_stylesheet_2Fscss_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=template&id=1f258700&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=template&id=1f258700&scoped=true ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_template_id_1f258700_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditorImage.vue?vue&type=template&id=1f258700&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/components/EditorImage.vue?vue&type=template&id=1f258700&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_template_id_1f258700_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_template_id_1f258700_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Tinymce/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Tinymce/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4fa41bf7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4fa41bf7&scoped=true */ "./resources/js/components/Tinymce/index.vue?vue&type=template&id=4fa41bf7&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/components/Tinymce/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_4fa41bf7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=4fa41bf7&scoped=true&lang=css */ "./resources/js/components/Tinymce/index.vue?vue&type=style&index=0&id=4fa41bf7&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4fa41bf7_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4fa41bf7_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4fa41bf7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tinymce/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tinymce/index.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Tinymce/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tinymce/index.vue?vue&type=style&index=0&id=4fa41bf7&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Tinymce/index.vue?vue&type=style&index=0&id=4fa41bf7&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4fa41bf7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=4fa41bf7&scoped=true&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/index.vue?vue&type=style&index=0&id=4fa41bf7&scoped=true&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4fa41bf7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4fa41bf7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4fa41bf7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4fa41bf7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Tinymce/index.vue?vue&type=template&id=4fa41bf7&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Tinymce/index.vue?vue&type=template&id=4fa41bf7&scoped=true ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4fa41bf7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4fa41bf7&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tinymce/index.vue?vue&type=template&id=4fa41bf7&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4fa41bf7_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4fa41bf7_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Tinymce/plugins.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Tinymce/plugins.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Any plugins you want to use has to be imported
// Detail plugins list see https://www.tinymce.com/docs/plugins/
// Custom builds see https://www.tinymce.com/download/custom-builds/

var plugins = ['advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount mathslate'];
/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),

/***/ "./resources/js/components/Tinymce/toolbar.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Tinymce/toolbar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Here is a list of the toolbar
// Detail list see https://www.tinymce.com/docs/advanced/editor-control-identifiers/#toolbarcontrols

var toolbar = ['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen'];
/* harmony default export */ __webpack_exports__["default"] = (toolbar);

/***/ })

}]);