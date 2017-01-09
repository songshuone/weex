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

	__weex_define__('@weex-component/5f71dc4ab3488a5fd29974cf811d2b61', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/5f71dc4ab3488a5fd29974cf811d2b61',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "list",
	      "classList": [
	        "list"
	      ],
	      "children": [
	        {
	          "type": "header",
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "backgroundColor": "#FAEBD7",
	                "alignItems": "center",
	                "height": 50,
	                "justifyContent": "center"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#FF0000",
	                    "fontSize": 32
	                  },
	                  "attr": {
	                    "value": "head"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "refresh",
	          "classList": [
	            "refresh-view"
	          ],
	          "attr": {
	            "display": function () {return this.refresh_display}
	          },
	          "events": {
	            "refresh": "onrefresh"
	          },
	          "children": [
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "indicator"
	              ]
	            },
	            {
	              "type": "text",
	              "shown": function () {return (this.refresh_display==='hide')},
	              "attr": {
	                "value": "释放刷新"
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "cell"
	          ],
	          "events": {
	            "appear": "onapper",
	            "disappear": "ondisappear"
	          },
	          "repeat": function () {return this.rows},
	          "attr": {
	            "index": function () {return this.$index}
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "item-title"
	                  ],
	                  "attr": {
	                    "value": function () {return 'row ' + (this.id)}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "loading",
	          "classList": [
	            "loading_view"
	          ],
	          "attr": {
	            "display": function () {return this.loading_display}
	          },
	          "events": {
	            "loading": "onloading"
	          },
	          "children": [
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "indicator"
	              ]
	            },
	            {
	              "type": "text",
	              "shown": function () {return (this.loading_display==='hide')},
	              "attr": {
	                "value": "释放加载更多..."
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "list": {
	    "height": 1150
	  },
	  "item": {
	    "height": 100,
	    "alignItems": "center"
	  },
	  "item-title": {
	    "fontSize": 32,
	    "color": "#7FFF00"
	  },
	  "refresh-view": {
	    "width": 750,
	    "height": 120,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "cell": {
	    "width": 750
	  },
	  "loading_view": {
	    "justifyContent": "center",
	    "flexDirection": "column",
	    "height": 120,
	    "alignItems": "center"
	  },
	  "indicator": {
	    "height": 70,
	    "width": 70,
	    "color": "#008000"
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        refresh_display: 'hide',
	        loading_display: 'hide',
	        rows: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 6 }, { id: 7 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 6 }, { id: 7 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]
	    }},
	    methods: {
	        onrefresh: function onrefresh(e) {
	            var self = this;
	            self.refresh_display = 'show';
	            self.$call('modal', 'toast', {
	                'message': 'refresh'
	            });
	            this.$call('timer', 'setTimeout', function () {
	                self.refresh_display = 'hide';
	            }, 3000);
	        },
	        onloading: function onloading(e) {
	            var self = this;
	            self.loading_display = 'show';
	            self.$call('modal', 'toast', {
	                'message': 'onloading'
	            });
	            this.$call('timer', 'setTimeout', function () {
	                self.loading_display = 'hide';
	            }, 3000);
	        }

	    }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);