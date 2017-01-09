/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/437331678ded788e561d47f16e9a3313', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/437331678ded788e561d47f16e9a3313',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "name"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "用户名："
	          }
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "text",
	            "name": "userName",
	            "placeholder": "请输入用户名",
	            "value": function () {return this.username}
	          },
	          "id": "userName",
	          "events": {
	            "input": "usernameoninput"
	          },
	          "style": {
	            "marginTop": 0,
	            "marginLeft": 5,
	            "fontSize": 32
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "password"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "密码："
	          }
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "password",
	            "name": "password",
	            "placeholder": "请输入密码",
	            "value": function () {return this.password}
	          },
	          "events": {
	            "input": "passwordoninput"
	          },
	          "style": {
	            "marginTop": 0,
	            "marginLeft": 5,
	            "fontSize": 32
	          }
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": "登陆"
	      },
	      "events": {
	        "click": "login"
	      },
	      "style": {
	        "alignItems": "center"
	      }
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "name": {
	    "flexDirection": "row",
	    "margin": 4
	  },
	  "password": {
	    "margin": 4,
	    "flexDirection": "row"
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
		data: function () {return {
			root: 'dist',
			username: '',
			password: ''
		}},
		ready: function ready() {},
		methods: {
			login: function login(e) {
				var storage = __weex_require__('@weex-module/storage');
				var self = this;
				var bundlUrl = this.$getConfig().bundlUrl;
				var url = common.getUrl(bundlUrl, 'mainindex.lib', 'dist');
				storage.setItem('username', self.username, function (e) {
					self.$openUrl(url);
				});
			}
		},
		usernameoninput: function usernameoninput(e) {
			this.username = e.value;
		},
		passwordoninput: function passwordoninput(e) {
			this.password = e.value;
		}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);