function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles-roles-module"], {
  /***/
  "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js ***!
    \***************************************************************************/

  /*! exports provided: NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderService, PB_DIRECTION, POSITION, SPINNER, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf */

  /***/
  function node_modulesNgxUiLoader__ivy_ngcc__Fesm2015NgxUiLoaderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxUiLoaderHttpModule", function () {
      return NgxUiLoaderHttpModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxUiLoaderModule", function () {
      return NgxUiLoaderModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxUiLoaderRouterModule", function () {
      return NgxUiLoaderRouterModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxUiLoaderService", function () {
      return NgxUiLoaderService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PB_DIRECTION", function () {
      return PB_DIRECTION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "POSITION", function () {
      return POSITION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPINNER", function () {
      return SPINNER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return NGX_UI_LOADER_CONFIG_TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return NgxUiLoaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return NgxUiLoaderBlurredDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return NGX_UI_LOADER_ROUTER_CONFIG_TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return NgxUiLoaderHttpInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return NGX_UI_LOADER_HTTP_CONFIG_TOKEN;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /**
     * Available spinner types
     */


    function NgxUiLoaderComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 7);
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r14.pbThickness, "px")("color", ctx_r14.pbColor);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-position-absolute", ctx_r14.loaderId !== ctx_r14.defaultConfig.masterLoaderId)("loading-foreground", ctx_r14.showForeground)("foreground-closing", ctx_r14.foregroundClosing)("fast-closing", ctx_r14.foregroundClosing && ctx_r14.fastFadeOut);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "ngx-progress-bar-" + ctx_r14.pbDirection);
      }
    }

    function NgxUiLoaderComponent_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 8);
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r15.logoSize, "px")("height", ctx_r15.logoSize, "px")("top", ctx_r15.logoTop);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r15.logoPosition)("src", ctx_r15.trustedLogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function NgxUiLoaderComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
      }
    }

    function NgxUiLoaderComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
      }
    }

    var SPINNER;

    (function (SPINNER) {
      SPINNER["ballScaleMultiple"] = "ball-scale-multiple";
      SPINNER["ballSpin"] = "ball-spin";
      SPINNER["ballSpinClockwise"] = "ball-spin-clockwise";
      SPINNER["ballSpinClockwiseFadeRotating"] = "ball-spin-clockwise-fade-rotating";
      SPINNER["ballSpinFadeRotating"] = "ball-spin-fade-rotating";
      SPINNER["chasingDots"] = "chasing-dots";
      SPINNER["circle"] = "circle";
      SPINNER["cubeGrid"] = "cube-grid";
      SPINNER["doubleBounce"] = "double-bounce";
      SPINNER["fadingCircle"] = "fading-circle";
      SPINNER["foldingCube"] = "folding-cube";
      SPINNER["pulse"] = "pulse";
      SPINNER["rectangleBounce"] = "rectangle-bounce";
      SPINNER["rectangleBounceParty"] = "rectangle-bounce-party";
      SPINNER["rectangleBouncePulseOut"] = "rectangle-bounce-pulse-out";
      SPINNER["rectangleBouncePulseOutRapid"] = "rectangle-bounce-pulse-out-rapid";
      SPINNER["rotatingPlane"] = "rotating-plane";
      SPINNER["squareJellyBox"] = "square-jelly-box";
      SPINNER["squareLoader"] = "square-loader";
      SPINNER["threeBounce"] = "three-bounce";
      SPINNER["threeStrings"] = "three-strings";
      SPINNER["wanderingCubes"] = "wandering-cubes";
    })(SPINNER || (SPINNER = {}));
    /**
     * Available postions
     */


    var POSITION;

    (function (POSITION) {
      POSITION["bottomCenter"] = "bottom-center";
      POSITION["bottomLeft"] = "bottom-left";
      POSITION["bottomRight"] = "bottom-right";
      POSITION["centerCenter"] = "center-center";
      POSITION["centerLeft"] = "center-left";
      POSITION["centerRight"] = "center-right";
      POSITION["topCenter"] = "top-center";
      POSITION["topLeft"] = "top-left";
      POSITION["topRight"] = "top-right";
    })(POSITION || (POSITION = {}));
    /**
     * Progress bar directions
     */


    var PB_DIRECTION;

    (function (PB_DIRECTION) {
      PB_DIRECTION["leftToRight"] = "ltr";
      PB_DIRECTION["rightToLeft"] = "rtl";
    })(PB_DIRECTION || (PB_DIRECTION = {}));
    /**
     * The default value of foreground task id
     */


    var DEFAULT_FG_TASK_ID = 'fg-default';
    /**
     * The default value of background task id
     */

    var DEFAULT_BG_TASK_ID = 'bg-default';
    /**
     * The default value of loader id
     */

    var DEFAULT_MASTER_LOADER_ID = 'master';
    var DEFAULT_TIME = {};
    var MIN_DELAY = 0;
    var MIN_TIME = 300;
    var CLOSING_TIME = 1001;
    var FAST_CLOSING_TIME = 601;
    var BACKGROUND = false;
    var FOREGROUND = true;
    var OVERLAY_DISAPPEAR_TIME = 500;
    var FAST_OVERLAY_DISAPPEAR_TIME = 300;
    /**
     * Http loader taskId
     */

    var HTTP_LOADER_TASK_ID = '$_http-loader';
    /**
     * Router loader taskId
     */

    var ROUTER_LOADER_TASK_ID = '$_router_loader';
    /**
     * The configuration of spinners
     */

    var SPINNER_CONFIG = {
      'ball-scale-multiple': {
        divs: 3,
        "class": 'sk-ball-scale-multiple'
      },
      'ball-spin': {
        divs: 8,
        "class": 'sk-ball-spin'
      },
      'ball-spin-clockwise': {
        divs: 8,
        "class": 'sk-ball-spin-clockwise'
      },
      'ball-spin-clockwise-fade-rotating': {
        divs: 8,
        "class": 'sk-ball-spin-clockwise-fade-rotating'
      },
      'ball-spin-fade-rotating': {
        divs: 8,
        "class": 'sk-ball-spin-fade-rotating'
      },
      'chasing-dots': {
        divs: 2,
        "class": 'sk-chasing-dots'
      },
      circle: {
        divs: 12,
        "class": 'sk-circle'
      },
      'cube-grid': {
        divs: 9,
        "class": 'sk-cube-grid'
      },
      'double-bounce': {
        divs: 2,
        "class": 'sk-double-bounce'
      },
      'fading-circle': {
        divs: 12,
        "class": 'sk-fading-circle'
      },
      'folding-cube': {
        divs: 4,
        "class": 'sk-folding-cube'
      },
      pulse: {
        divs: 1,
        "class": 'sk-pulse'
      },
      'rectangle-bounce': {
        divs: 5,
        "class": 'sk-rectangle-bounce'
      },
      'rectangle-bounce-party': {
        divs: 5,
        "class": 'sk-rectangle-bounce-party'
      },
      'rectangle-bounce-pulse-out': {
        divs: 5,
        "class": 'sk-rectangle-bounce-pulse-out'
      },
      'rectangle-bounce-pulse-out-rapid': {
        divs: 5,
        "class": 'sk-rectangle-bounce-pulse-out-rapid'
      },
      'rotating-plane': {
        divs: 1,
        "class": 'sk-rotating-plane'
      },
      'square-jelly-box': {
        divs: 2,
        "class": 'sk-square-jelly-box'
      },
      'square-loader': {
        divs: 1,
        "class": 'sk-square-loader'
      },
      'three-bounce': {
        divs: 3,
        "class": 'sk-three-bounce'
      },
      'three-strings': {
        divs: 3,
        "class": 'sk-three-strings'
      },
      'wandering-cubes': {
        divs: 2,
        "class": 'sk-wandering-cubes'
      }
    };
    /**
     * The default configuration of ngx-ui-loader
     */

    var DEFAULT_CONFIG = {
      bgsColor: '#00ACC1',
      bgsOpacity: 0.5,
      bgsPosition: POSITION.bottomRight,
      bgsSize: 60,
      bgsType: SPINNER.ballSpinClockwise,
      blur: 5,
      delay: 0,
      fastFadeOut: false,
      fgsColor: '#00ACC1',
      fgsPosition: POSITION.centerCenter,
      fgsSize: 60,
      fgsType: SPINNER.ballSpinClockwise,
      gap: 24,
      logoPosition: POSITION.centerCenter,
      logoSize: 120,
      logoUrl: '',
      masterLoaderId: DEFAULT_MASTER_LOADER_ID,
      overlayBorderRadius: '0',
      overlayColor: 'rgba(40, 40, 40, 0.8)',
      pbColor: '#00ACC1',
      pbDirection: PB_DIRECTION.leftToRight,
      pbThickness: 3,
      hasProgressBar: true,
      text: '',
      textColor: '#FFFFFF',
      textPosition: POSITION.centerCenter,
      maxTime: -1,
      minTime: 500
    };
    /**
     * Injection token for ngx-ui-loader configuration
     */

    var NGX_UI_LOADER_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ngxUiLoaderCustom.config');

    var NgxUiLoaderService = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function NgxUiLoaderService(config) {
        _classCallCheck(this, NgxUiLoaderService);

        this.config = config;
        this.defaultConfig = Object.assign({}, DEFAULT_CONFIG);

        if (this.config) {
          if (this.config.minTime && this.config.minTime < MIN_TIME) {
            this.config.minTime = MIN_TIME;
          }

          this.defaultConfig = Object.assign(Object.assign({}, this.defaultConfig), this.config);
        }

        this.loaders = {};
        this.showForeground = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
          loaderId: '',
          isShow: false
        });
        this.showForeground$ = this.showForeground.asObservable();
        this.showBackground = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
          loaderId: '',
          isShow: false
        });
        this.showBackground$ = this.showBackground.asObservable();
        this.fgClosing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
          loaderId: '',
          isShow: false
        });
        this.foregroundClosing$ = this.fgClosing.asObservable();
        this.bgClosing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
          loaderId: '',
          isShow: false
        });
        this.backgroundClosing$ = this.bgClosing.asObservable();
      }
      /**
       * For internal use only.
       * @docs-private
       */


      _createClass(NgxUiLoaderService, [{
        key: "bindLoaderData",
        value: function bindLoaderData(loaderId) {
          var isMaster = false;

          if (loaderId === this.defaultConfig.masterLoaderId) {
            this.throwErrorIfMasterLoaderExists(true);
            isMaster = true;
          } else {
            // not master loader
            this.throwErrorIfLoaderExists(loaderId, true);
          }

          if (this.loaders[loaderId]) {
            this.loaders[loaderId].isBound = true;
            this.loaders[loaderId].isMaster = isMaster; // emit showEvent after data loader is bound

            if (this.hasRunningTask(FOREGROUND, loaderId)) {
              this.showForeground.next({
                loaderId: loaderId,
                isShow: true
              });
            } else {
              if (this.hasRunningTask(BACKGROUND, loaderId)) {
                this.showBackground.next({
                  loaderId: loaderId,
                  isShow: true
                });
              }
            }
          } else {
            this.createLoaderData(loaderId, isMaster, true);
          }
        }
        /**
         * For internal use only.
         * @docs-private
         */

      }, {
        key: "updateLoaderId",
        value: function updateLoaderId(loaderId, newLoaderId) {
          this.throwErrorIfLoaderNotExist(loaderId);

          if (this.loaders[loaderId].loaderId === this.defaultConfig.masterLoaderId) {
            console.warn("[ngx-ui-loader] - Cannot change loaderId of master loader. The current " + "master's loaderId is \"".concat(this.defaultConfig.masterLoaderId, "\". If you really want to ") + "change it, please use NgxUiLoaderModule.forRoot() method.");
            return;
          }

          if (newLoaderId !== loaderId) {
            this.throwErrorIfLoaderExists(newLoaderId, true);
            this.loaders[newLoaderId] = {
              loaderId: newLoaderId,
              tasks: Object.assign({}, this.loaders[loaderId].tasks),
              isMaster: false,
              isBound: this.loaders[loaderId].isBound
            };
            delete this.loaders[loaderId];
          }
        }
        /**
         * For internal use only.
         * @docs-private
         */

      }, {
        key: "destroyLoaderData",
        value: function destroyLoaderData(loaderId) {
          this.stopAllLoader(loaderId);
          delete this.loaders[loaderId];
        }
        /**
         * Get default loader configuration
         * @returns default configuration object
         */

      }, {
        key: "getDefaultConfig",
        value: function getDefaultConfig() {
          return Object.assign({}, this.defaultConfig);
        }
        /**
         * Get all the loaders
         */

      }, {
        key: "getLoaders",
        value: function getLoaders() {
          return JSON.parse(JSON.stringify(this.loaders));
        }
        /**
         * Get data of a specified loader. If loaderId is not provided, it will return data of master loader(if existed)
         */

      }, {
        key: "getLoader",
        value: function getLoader(loaderId) {
          if (loaderId) {
            this.throwErrorIfLoaderNotExist(loaderId);
          } else {
            this.throwErrorIfMasterLoaderNotExist();
            loaderId = this.defaultConfig.masterLoaderId;
          }

          return JSON.parse(JSON.stringify(this.loaders[loaderId]));
        }
        /**
         * Start the foreground loading of loader having `loaderId` with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stopLoader() method.
         * @param loaderId the loader Id
         * @param taskId the optional task Id of the loading. taskId is set to 'fd-default' by default.
         */

      }, {
        key: "startLoader",
        value: function startLoader(loaderId) {
          var taskId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_FG_TASK_ID;
          var time = arguments.length > 2 ? arguments[2] : undefined;

          if (!this.readyToStart(loaderId, taskId, true, time)) {
            return;
          }

          if (!this.loaders[loaderId].tasks[taskId].isOtherRunning) {
            // no other foreground task running
            if (this.hasRunningTask(BACKGROUND, loaderId)) {
              this.backgroundCloseout(loaderId);
              this.showBackground.next({
                loaderId: loaderId,
                isShow: false
              });
            }

            this.showForeground.next({
              loaderId: loaderId,
              isShow: true
            });
          }
        }
        /**
         * Start the foreground loading of master loader with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stop() method.
         * NOTE: Really this function just wraps startLoader() function
         * @param taskId the optional task Id of the loading. taskId is set to 'fd-default' by default.
         */

      }, {
        key: "start",
        value: function start() {
          var taskId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_FG_TASK_ID;
          var time = arguments.length > 1 ? arguments[1] : undefined;
          this.startLoader(this.defaultConfig.masterLoaderId, taskId, time);
        }
        /**
         * Start the background loading of loader having `loaderId` with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stopLoaderBackground() method.
         * @param loaderId the loader Id
         * @param taskId the optional task Id of the loading. taskId is set to 'bg-default' by default.
         */

      }, {
        key: "startBackgroundLoader",
        value: function startBackgroundLoader(loaderId) {
          var taskId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_BG_TASK_ID;
          var time = arguments.length > 2 ? arguments[2] : undefined;

          if (!this.readyToStart(loaderId, taskId, false, time)) {
            return;
          }

          if (!this.hasRunningTask(FOREGROUND, loaderId) && !this.loaders[loaderId].tasks[taskId].isOtherRunning) {
            this.showBackground.next({
              loaderId: loaderId,
              isShow: true
            });
          }
        }
        /**
         * Start the background loading of master loader with a specified `taskId`.
         * The loading is only closed off when all taskIds of that loader are called with stopBackground() method.
         * NOTE: Really this function just wraps startBackgroundLoader() function
         * @param taskId the optional task Id of the loading. taskId is set to 'bg-default' by default.
         */

      }, {
        key: "startBackground",
        value: function startBackground() {
          var taskId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_BG_TASK_ID;
          var time = arguments.length > 1 ? arguments[1] : undefined;
          this.startBackgroundLoader(this.defaultConfig.masterLoaderId, taskId, time);
        }
        /**
         * Stop a foreground loading of loader having `loaderId` with specific `taskId`
         * @param loaderId the loader Id
         * @param taskId the optional task Id to stop. If not provided, 'fg-default' is used.
         * @returns Object
         */

      }, {
        key: "stopLoader",
        value: function stopLoader(loaderId) {
          var _this = this;

          var taskId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_FG_TASK_ID;

          if (!this.readyToStop(loaderId, taskId)) {
            return;
          }

          if (!this.hasRunningTask(FOREGROUND, loaderId)) {
            this.foregroundCloseout(loaderId);
            this.showForeground.next({
              loaderId: loaderId,
              isShow: false
            });

            if (this.hasRunningTask(BACKGROUND, loaderId)) {
              setTimeout(function () {
                if (_this.hasRunningTask(BACKGROUND, loaderId)) {
                  // still have background tasks
                  _this.showBackground.next({
                    loaderId: loaderId,
                    isShow: true
                  });
                }
              }, this.defaultConfig.fastFadeOut ? FAST_OVERLAY_DISAPPEAR_TIME : OVERLAY_DISAPPEAR_TIME);
            }
          }
        }
        /**
         * Stop a foreground loading of master loader with specific `taskId`
         * @param taskId the optional task Id to stop. If not provided, 'fg-default' is used.
         * @returns Object
         */

      }, {
        key: "stop",
        value: function stop() {
          var taskId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_FG_TASK_ID;
          this.stopLoader(this.defaultConfig.masterLoaderId, taskId);
        }
        /**
         * Stop a background loading of loader having `loaderId` with specific `taskId`
         * @param loaderId the loader Id
         * @param taskId the optional task Id to stop. If not provided, 'bg-default' is used.
         * @returns Object
         */

      }, {
        key: "stopBackgroundLoader",
        value: function stopBackgroundLoader(loaderId) {
          var taskId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_BG_TASK_ID;

          if (!this.readyToStop(loaderId, taskId)) {
            return;
          }

          if (!this.hasRunningTask(FOREGROUND, loaderId) && !this.hasRunningTask(BACKGROUND, loaderId)) {
            this.backgroundCloseout(loaderId);
            this.showBackground.next({
              loaderId: loaderId,
              isShow: false
            });
          }
        }
        /**
         * Stop a background loading of master loader with specific taskId
         * @param taskId the optional task Id to stop. If not provided, 'bg-default' is used.
         * @returns Object
         */

      }, {
        key: "stopBackground",
        value: function stopBackground() {
          var taskId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_BG_TASK_ID;
          this.stopBackgroundLoader(this.defaultConfig.masterLoaderId, taskId);
        }
        /**
         * Stop all the background and foreground loadings of loader having `loaderId`
         * @param loaderId the loader Id
         */

      }, {
        key: "stopAllLoader",
        value: function stopAllLoader(loaderId) {
          this.throwErrorIfLoaderNotExist(loaderId);

          if (this.hasRunningTask(FOREGROUND, loaderId)) {
            this.foregroundCloseout(loaderId);
            this.showForeground.next({
              loaderId: loaderId,
              isShow: false
            });
          } else if (this.hasRunningTask(BACKGROUND, loaderId)) {
            this.backgroundCloseout(loaderId);
            this.showBackground.next({
              loaderId: loaderId,
              isShow: false
            });
          }

          this.clearAllTimers(this.loaders[loaderId].tasks);
          this.loaders[loaderId].tasks = {};
        }
        /**
         * Stop all the background and foreground loadings of master loader
         */

      }, {
        key: "stopAll",
        value: function stopAll() {
          this.stopAllLoader(this.defaultConfig.masterLoaderId);
        }
        /**
         * Create loader data if it does not exist
         * @docs-private
         */

      }, {
        key: "createLoaderData",
        value: function createLoaderData(loaderId, isMaster, isBound) {
          if (!this.loaders[loaderId]) {
            this.loaders[loaderId] = {
              loaderId: loaderId,
              tasks: {},
              isMaster: isMaster,
              isBound: isBound
            };
          }
        }
        /**
         * Throw error if the loaderId does not exist.
         * @docs-private
         */

      }, {
        key: "throwErrorIfLoaderNotExist",
        value: function throwErrorIfLoaderNotExist(loaderId) {
          if (!this.loaders[loaderId]) {
            throw new Error("[ngx-ui-loader] - loaderId \"".concat(loaderId, "\" does not exist."));
          }
        }
        /**
         * Throw error if the loaderId has already existed.
         * @docs-private
         */

      }, {
        key: "throwErrorIfLoaderExists",
        value: function throwErrorIfLoaderExists(loaderId, useIsBoundProp) {
          if (this.loaders[loaderId] && this.loaders[loaderId].isBound && useIsBoundProp) {
            throw new Error("[ngx-ui-loader] - loaderId \"".concat(loaderId, "\" is duplicated."));
          }
        }
        /**
         * Throw error if the master loader has already existed.
         * @docs-private
         */

      }, {
        key: "throwErrorIfMasterLoaderExists",
        value: function throwErrorIfMasterLoaderExists(useIsBoundProp) {
          if (this.loaders[this.defaultConfig.masterLoaderId] && this.loaders[this.defaultConfig.masterLoaderId].isBound && useIsBoundProp) {
            throw new Error("[ngx-ui-loader] - The master loader has already existed. " + "The app should have only one master loader and it should be placed in the root app template");
          }
        }
        /**
         * Throw error if the master loader does not exist.
         * @docs-private
         */

      }, {
        key: "throwErrorIfMasterLoaderNotExist",
        value: function throwErrorIfMasterLoaderNotExist() {
          if (!this.loaders[this.defaultConfig.masterLoaderId]) {
            throw new Error("[ngx-ui-loader] - The master loader does not exist.");
          }
        }
        /**
         * Manage to close foreground loading
         * @docs-private
         * @param loaderId the loader id
         */

      }, {
        key: "foregroundCloseout",
        value: function foregroundCloseout(loaderId) {
          var _this2 = this;

          this.fgClosing.next({
            loaderId: loaderId,
            isShow: true
          });
          setTimeout(function () {
            _this2.fgClosing.next({
              loaderId: loaderId,
              isShow: false
            });
          }, this.defaultConfig.fastFadeOut ? FAST_CLOSING_TIME : CLOSING_TIME);
        }
        /**
         * Manage to close background loading
         * @docs-private
         * @param loaderId the loader id
         */

      }, {
        key: "backgroundCloseout",
        value: function backgroundCloseout(loaderId) {
          var _this3 = this;

          this.bgClosing.next({
            loaderId: loaderId,
            isShow: true
          });
          setTimeout(function () {
            _this3.bgClosing.next({
              loaderId: loaderId,
              isShow: false
            });
          }, this.defaultConfig.fastFadeOut ? FAST_CLOSING_TIME : CLOSING_TIME);
        }
        /**
         * Clear all timers of the given task
         * @docs-private
         */

      }, {
        key: "clearTimers",
        value: function clearTimers(task) {
          if (task.delayTimer) {
            clearTimeout(task.delayTimer);
          }

          if (task.maxTimer) {
            clearTimeout(task.maxTimer);
          }

          if (task.minTimer) {
            clearTimeout(task.minTimer);
          }
        }
        /**
         * Clear all timers of the given tasks
         * @docs-private
         */

      }, {
        key: "clearAllTimers",
        value: function clearAllTimers(tasks) {
          var _this4 = this;

          Object.keys(tasks).map(function (id) {
            _this4.clearTimers(tasks[id]);
          });
        }
        /**
         * Check whether the specified loader has a running task with the given `taskId`.
         * If no `taskId` specified, it will check whether the loader has any running tasks.
         * For internal use only.
         * @docs-private
         * @param isForeground foreground task or background task
         * @param loaderId the loader Id
         * @param taskId the optional task Id
         * @returns boolean
         */

      }, {
        key: "hasRunningTask",
        value: function hasRunningTask(isForeground, loaderId, taskId) {
          if (this.loaders[loaderId]) {
            var tasks = this.loaders[loaderId].tasks;

            if (taskId) {
              return tasks[taskId] ? tasks[taskId].startAt ? true : false : false;
            }

            return Object.keys(tasks).some(function (id) {
              return !!tasks[id].startAt && tasks[id].isForeground === isForeground;
            });
          }

          return false;
        }
        /**
         * @docs-private
         */

      }, {
        key: "readyToStart",
        value: function readyToStart(loaderId, taskId, isForeground) {
          var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_TIME;
          this.createLoaderData(loaderId, undefined, false);
          var isOtherRunning = this.hasRunningTask(isForeground, loaderId);

          if (!this.loaders[loaderId].tasks[taskId]) {
            this.loaders[loaderId].tasks[taskId] = {
              taskId: taskId,
              isForeground: isForeground,
              minTime: time.minTime >= MIN_TIME ? time.minTime : this.defaultConfig.minTime,
              maxTime: time.maxTime ? time.maxTime : this.defaultConfig.maxTime,
              delay: time.delay >= MIN_DELAY ? time.delay : this.defaultConfig.delay
            };
          } else {
            if (this.loaders[loaderId].tasks[taskId].isForeground !== isForeground) {
              throw new Error("[ngx-ui-loader] - taskId \"".concat(taskId, "\" is duplicated."));
            }
          }

          if (this.setDelayTimer(this.loaders[loaderId].tasks[taskId], loaderId)) {
            return false;
          }

          this.loaders[loaderId].tasks[taskId] = Object.assign(Object.assign({}, this.loaders[loaderId].tasks[taskId]), {
            isOtherRunning: isOtherRunning,
            startAt: Date.now()
          });
          this.setMaxTimer(this.loaders[loaderId].tasks[taskId], loaderId);

          if (!this.loaders[loaderId].isBound) {
            return false;
          }

          return true;
        }
        /**
         * @docs-private
         */

      }, {
        key: "readyToStop",
        value: function readyToStop(loaderId, taskId) {
          this.throwErrorIfLoaderNotExist(loaderId);
          var task = this.loaders[loaderId].tasks[taskId];

          if (!task) {
            return false;
          }

          if (task.isDelayed) {
            this.clearTimers(task);
            delete this.loaders[loaderId].tasks[taskId];
            return false;
          }

          if (this.setMinTimer(task, loaderId)) {
            return false;
          }

          this.clearTimers(task);
          delete this.loaders[loaderId].tasks[taskId];
          return true;
        }
        /**
         * Set delay timer, if `delay` > 0
         * @docs-private
         * @returns boolean
         */

      }, {
        key: "setDelayTimer",
        value: function setDelayTimer(task, loaderId) {
          var _this5 = this;

          if (task.delay > MIN_DELAY) {
            if (task.isDelayed) {
              return true;
            }

            if (!task.delayTimer) {
              task.isDelayed = true;
              task.delayTimer = setTimeout(function () {
                task.isDelayed = false;

                if (task.isForeground) {
                  _this5.startLoader(loaderId, task.taskId);
                } else {
                  _this5.startBackgroundLoader(loaderId, task.taskId);
                }
              }, task.delay);
              return true;
            }
          }

          return false;
        }
        /**
         * Set maxTimer if `maxTime` > `minTime`
         * @docs-private
         * @returns boolean
         */

      }, {
        key: "setMaxTimer",
        value: function setMaxTimer(task, loaderId) {
          var _this6 = this;

          if (task.maxTime > task.minTime) {
            // restart the task, reset maxTimer
            if (task.maxTimer) {
              clearTimeout(task.maxTimer);
            }

            task.maxTimer = setTimeout(function () {
              if (task.isForeground) {
                _this6.stopLoader(loaderId, task.taskId);
              } else {
                _this6.stopBackgroundLoader(loaderId, task.taskId);
              }
            }, task.maxTime);
          }
        }
        /**
         * Set minTimer if `startAt` + `minTime` > `Date.now()`
         * @docs-private
         * @returns boolean
         */

      }, {
        key: "setMinTimer",
        value: function setMinTimer(task, loaderId) {
          var _this7 = this;

          var now = Date.now();

          if (task.startAt) {
            if (task.startAt + task.minTime > now) {
              task.minTimer = setTimeout(function () {
                if (task.isForeground) {
                  _this7.stopLoader(loaderId, task.taskId);
                } else {
                  _this7.stopBackgroundLoader(loaderId, task.taskId);
                }
              }, task.startAt + task.minTime - now);
              return true;
            }
          }

          return false;
        }
      }]);

      return NgxUiLoaderService;
    }();

    NgxUiLoaderService.ɵfac = function NgxUiLoaderService_Factory(t) {
      return new (t || NgxUiLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NGX_UI_LOADER_CONFIG_TOKEN, 8));
    };

    NgxUiLoaderService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [NGX_UI_LOADER_CONFIG_TOKEN]
        }]
      }];
    };

    NgxUiLoaderService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function NgxUiLoaderService_Factory() {
        return new NgxUiLoaderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(NGX_UI_LOADER_CONFIG_TOKEN, 8));
      },
      token: NgxUiLoaderService,
      providedIn: "root"
    });
    NgxUiLoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NGX_UI_LOADER_CONFIG_TOKEN)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], NgxUiLoaderService);
    /**
     * Coerce a value (string) to a number
     */

    function coerceNumber(value, fallbackValue) {
      return !isNaN(parseFloat(value)) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
    }

    function getExcludeObj(config) {
      var strs;
      var regExps;

      if (config) {
        if (config.exclude) {
          strs = config.exclude.map(function (url) {
            return url.toLowerCase();
          });
        }

        if (config.excludeRegexp) {
          regExps = config.excludeRegexp.map(function (regexp) {
            return new RegExp(regexp, 'i');
          });
        }
      }

      return {
        strs: strs,
        regExps: regExps
      };
    }

    function isIgnored(url, excludeStrings, excludeRegexps) {
      if (excludeStrings) {
        // do not show the loader for urls in the `exclude` list
        if (excludeStrings.findIndex(function (str) {
          return url.toLowerCase().startsWith(str);
        }) !== -1) {
          return true;
        }
      }

      if (excludeRegexps) {
        // do not show the loader for urls which matches regexps in the `excludeRegexp` list
        if (excludeRegexps.findIndex(function (regexp) {
          return regexp.test(url);
        }) !== -1) {
          return true;
        }
      }

      return false;
    }

    var NgxUiLoaderComponent = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function NgxUiLoaderComponent(domSanitizer, changeDetectorRef, ngxService) {
        _classCallCheck(this, NgxUiLoaderComponent);

        this.domSanitizer = domSanitizer;
        this.changeDetectorRef = changeDetectorRef;
        this.ngxService = ngxService;
        this.initialized = false;
        this.defaultConfig = this.ngxService.getDefaultConfig();
        this.bgsColor = this.defaultConfig.bgsColor;
        this.bgsOpacity = this.defaultConfig.bgsOpacity;
        this.bgsPosition = this.defaultConfig.bgsPosition;
        this.bgsSize = this.defaultConfig.bgsSize;
        this.bgsType = this.defaultConfig.bgsType;
        this.fastFadeOut = this.defaultConfig.fastFadeOut;
        this.fgsColor = this.defaultConfig.fgsColor;
        this.fgsPosition = this.defaultConfig.fgsPosition;
        this.fgsSize = this.defaultConfig.fgsSize;
        this.fgsType = this.defaultConfig.fgsType;
        this.gap = this.defaultConfig.gap;
        this.loaderId = this.defaultConfig.masterLoaderId;
        this.logoPosition = this.defaultConfig.logoPosition;
        this.logoSize = this.defaultConfig.logoSize;
        this.logoUrl = this.defaultConfig.logoUrl;
        this.overlayBorderRadius = this.defaultConfig.overlayBorderRadius;
        this.overlayColor = this.defaultConfig.overlayColor;
        this.pbColor = this.defaultConfig.pbColor;
        this.pbDirection = this.defaultConfig.pbDirection;
        this.pbThickness = this.defaultConfig.pbThickness;
        this.hasProgressBar = this.defaultConfig.hasProgressBar;
        this.text = this.defaultConfig.text;
        this.textColor = this.defaultConfig.textColor;
        this.textPosition = this.defaultConfig.textPosition;
      }
      /**
       * On init event
       */


      _createClass(NgxUiLoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.initializeSpinners();
          this.ngxService.bindLoaderData(this.loaderId);
          this.determinePositions();
          this.bgsPosition = this.validate('bgsPosition', this.bgsPosition, POSITION, this.defaultConfig.bgsPosition);
          this.trustedLogoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.logoUrl);
          this.pbDirection = this.validate('pbDirection', this.pbDirection, PB_DIRECTION, this.defaultConfig.pbDirection);
          this.showForegroundWatcher = this.ngxService.showForeground$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (showEvent) {
            return _this8.loaderId === showEvent.loaderId;
          })).subscribe(function (data) {
            _this8.showForeground = data.isShow;

            _this8.changeDetectorRef.markForCheck();
          });
          this.showBackgroundWatcher = this.ngxService.showBackground$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (showEvent) {
            return _this8.loaderId === showEvent.loaderId;
          })).subscribe(function (data) {
            _this8.showBackground = data.isShow;

            _this8.changeDetectorRef.markForCheck();
          });
          this.foregroundClosingWatcher = this.ngxService.foregroundClosing$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (showEvent) {
            return _this8.loaderId === showEvent.loaderId;
          })).subscribe(function (data) {
            _this8.foregroundClosing = data.isShow;

            _this8.changeDetectorRef.markForCheck();
          });
          this.backgroundClosingWatcher = this.ngxService.backgroundClosing$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (showEvent) {
            return _this8.loaderId === showEvent.loaderId;
          })).subscribe(function (data) {
            _this8.backgroundClosing = data.isShow;

            _this8.changeDetectorRef.markForCheck();
          });
          this.initialized = true;
        }
        /**
         * On changes event
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.initialized) {
            return;
          }

          var bgsTypeChange = changes.bgsType;
          var bgsPositionChange = changes.bgsPosition;
          var fgsTypeChange = changes.fgsType;
          var loaderIdChange = changes.loaderId;
          var logoUrlChange = changes.logoUrl;
          var pbDirectionChange = changes.pbDirection;

          if (fgsTypeChange || bgsTypeChange) {
            this.initializeSpinners();
          }

          if (loaderIdChange) {
            this.ngxService.updateLoaderId(loaderIdChange.previousValue, this.loaderId);
          }

          this.determinePositions();

          if (bgsPositionChange) {
            this.bgsPosition = this.validate('bgsPosition', this.bgsPosition, POSITION, this.defaultConfig.bgsPosition);
          }

          if (logoUrlChange) {
            this.trustedLogoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.logoUrl);
          }

          if (pbDirectionChange) {
            this.pbDirection = this.validate('pbDirection', this.pbDirection, PB_DIRECTION, this.defaultConfig.pbDirection);
          }
        }
        /**
         * Initialize spinners
         */

      }, {
        key: "initializeSpinners",
        value: function initializeSpinners() {
          this.fgsType = this.validate('fgsType', this.fgsType, SPINNER, this.defaultConfig.fgsType);
          this.bgsType = this.validate('bgsType', this.bgsType, SPINNER, this.defaultConfig.bgsType);
          this.fgDivs = Array(SPINNER_CONFIG[this.fgsType].divs).fill(1);
          this.fgSpinnerClass = SPINNER_CONFIG[this.fgsType]["class"];
          this.bgDivs = Array(SPINNER_CONFIG[this.bgsType].divs).fill(1);
          this.bgSpinnerClass = SPINNER_CONFIG[this.bgsType]["class"];
        }
        /**
         * Determine the positions of spinner, logo and text
         */

      }, {
        key: "determinePositions",
        value: function determinePositions() {
          this.fgsPosition = this.validate('fgsPosition', this.fgsPosition, POSITION, this.defaultConfig.fgsPosition);
          this.logoPosition = this.validate('logoPosition', this.logoPosition, POSITION, this.defaultConfig.logoPosition);
          this.textPosition = this.validate('textPosition', this.textPosition, POSITION, this.defaultConfig.textPosition);
          this.gap = coerceNumber(this.gap, this.defaultConfig.gap);
          this.logoTop = 'initial';
          this.spinnerTop = 'initial';
          this.textTop = 'initial';
          var textSize = 24;

          if (this.logoPosition.startsWith('center')) {
            this.logoTop = '50%';
          } else if (this.logoPosition.startsWith('top')) {
            this.logoTop = '30px';
          }

          if (this.fgsPosition.startsWith('center')) {
            this.spinnerTop = '50%';
          } else if (this.fgsPosition.startsWith('top')) {
            this.spinnerTop = '30px';
          }

          if (this.textPosition.startsWith('center')) {
            this.textTop = '50%';
          } else if (this.textPosition.startsWith('top')) {
            this.textTop = '30px';
          }

          if (this.fgsPosition === POSITION.centerCenter) {
            if (this.logoUrl && this.logoPosition === POSITION.centerCenter) {
              if (this.text && this.textPosition === POSITION.centerCenter) {
                // logo, spinner and text
                this.logoTop = this.domSanitizer.bypassSecurityTrustStyle("calc(50% - ".concat(this.fgsSize / 2, "px - ").concat(textSize / 2, "px - ").concat(this.gap, "px)"));
                this.spinnerTop = this.domSanitizer.bypassSecurityTrustStyle("calc(50% + ".concat(this.logoSize / 2, "px - ").concat(textSize / 2, "px)"));
                this.textTop = this.domSanitizer.bypassSecurityTrustStyle("calc(50% + ".concat(this.logoSize / 2, "px + ").concat(this.gap, "px + ").concat(this.fgsSize / 2, "px)"));
              } else {
                // logo and spinner
                this.logoTop = this.domSanitizer.bypassSecurityTrustStyle("calc(50% - ".concat(this.fgsSize / 2, "px - ").concat(this.gap / 2, "px)"));
                this.spinnerTop = this.domSanitizer.bypassSecurityTrustStyle("calc(50% + ".concat(this.logoSize / 2, "px + ").concat(this.gap / 2, "px)"));
              }
            } else {
              if (this.text && this.textPosition === POSITION.centerCenter) {
                // spinner and text
                this.spinnerTop = this.domSanitizer.bypassSecurityTrustStyle("calc(50% - ".concat(textSize / 2, "px - ").concat(this.gap / 2, "px)"));
                this.textTop = this.domSanitizer.bypassSecurityTrustStyle("calc(50% + ".concat(this.fgsSize / 2, "px + ").concat(this.gap / 2, "px)"));
              }
            }
          } else {
            if (this.logoUrl && this.logoPosition === POSITION.centerCenter && this.text && this.textPosition === POSITION.centerCenter) {
              // logo and text
              this.logoTop = this.domSanitizer.bypassSecurityTrustStyle("calc(50% - ".concat(textSize / 2, "px - ").concat(this.gap / 2, "px)"));
              this.textTop = this.domSanitizer.bypassSecurityTrustStyle("calc(50% + ".concat(this.logoSize / 2, "px + ").concat(this.gap / 2, "px)"));
            }
          }
        }
      }, {
        key: "validate",
        value: function validate(inputName, value, validTypeObj, fallbackValue) {
          if (Object.keys(validTypeObj).map(function (k) {
            return validTypeObj[k];
          }).findIndex(function (v) {
            return v === value;
          }) === -1) {
            console.error("[ngx-ui-loader] - ".concat(inputName, " (\"").concat(value, "\") is invalid. ") + "Default value \"".concat(fallbackValue, "\" is used."));
            return fallbackValue;
          }

          return value;
        }
        /**
         * On destroy event
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngxService.destroyLoaderData(this.loaderId);

          if (this.showForegroundWatcher) {
            this.showForegroundWatcher.unsubscribe();
          }

          if (this.showBackgroundWatcher) {
            this.showBackgroundWatcher.unsubscribe();
          }

          if (this.foregroundClosingWatcher) {
            this.foregroundClosingWatcher.unsubscribe();
          }

          if (this.backgroundClosingWatcher) {
            this.backgroundClosingWatcher.unsubscribe();
          }
        }
      }]);

      return NgxUiLoaderComponent;
    }();

    NgxUiLoaderComponent.ɵfac = function NgxUiLoaderComponent_Factory(t) {
      return new (t || NgxUiLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxUiLoaderService));
    };

    NgxUiLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NgxUiLoaderComponent,
      selectors: [["ngx-ui-loader"]],
      inputs: {
        bgsColor: "bgsColor",
        bgsOpacity: "bgsOpacity",
        bgsPosition: "bgsPosition",
        bgsSize: "bgsSize",
        bgsType: "bgsType",
        fgsColor: "fgsColor",
        fgsPosition: "fgsPosition",
        fgsSize: "fgsSize",
        fgsType: "fgsType",
        gap: "gap",
        loaderId: "loaderId",
        logoPosition: "logoPosition",
        logoSize: "logoSize",
        logoUrl: "logoUrl",
        overlayBorderRadius: "overlayBorderRadius",
        overlayColor: "overlayColor",
        pbColor: "pbColor",
        pbDirection: "pbDirection",
        pbThickness: "pbThickness",
        hasProgressBar: "hasProgressBar",
        text: "text",
        textColor: "textColor",
        textPosition: "textPosition"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 11,
      vars: 52,
      consts: [["class", "ngx-progress-bar", 3, "ngx-position-absolute", "ngClass", "height", "color", "loading-foreground", "foreground-closing", "fast-closing", 4, "ngIf"], [1, "ngx-overlay"], ["class", "ngx-loading-logo", 3, "ngClass", "src", "width", "height", "top", 4, "ngIf"], [1, "ngx-foreground-spinner", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "ngx-loading-text", 3, "ngClass"], [1, "ngx-background-spinner", 3, "ngClass"], [1, "ngx-progress-bar", 3, "ngClass"], [1, "ngx-loading-logo", 3, "ngClass", "src"]],
      template: function NgxUiLoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgxUiLoaderComponent_div_0_Template, 1, 13, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxUiLoaderComponent_img_2_Template, 1, 8, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgxUiLoaderComponent_div_5_Template, 1, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NgxUiLoaderComponent_div_10_Template, 1, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasProgressBar);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.overlayColor)("border-radius", ctx.overlayBorderRadius);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-position-absolute", ctx.loaderId !== ctx.defaultConfig.masterLoaderId)("loading-foreground", ctx.showForeground)("foreground-closing", ctx.foregroundClosing)("fast-closing", ctx.foregroundClosing && ctx.fastFadeOut);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logoUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.fgsColor)("width", ctx.fgsSize, "px")("height", ctx.fgsSize, "px")("top", ctx.spinnerTop);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.fgsPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.fgSpinnerClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fgDivs);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx.textTop)("color", ctx.textColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.textPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.bgsSize, "px")("height", ctx.bgsSize, "px")("color", ctx.bgsColor)("opacity", ctx.bgsOpacity);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-position-absolute", ctx.loaderId !== ctx.defaultConfig.masterLoaderId)("loading-background", ctx.showBackground)("background-closing", ctx.backgroundClosing)("fast-closing", ctx.backgroundClosing && ctx.fastFadeOut);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.bgsPosition);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.bgSpinnerClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.bgDivs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".ngx-progress-bar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:3px;z-index:99999!important;display:none;color:#00acc1;overflow:hidden}.ngx-progress-bar.foreground-closing[_ngcontent-%COMP%], .ngx-progress-bar.loading-foreground[_ngcontent-%COMP%]{display:block}.ngx-progress-bar.foreground-closing[_ngcontent-%COMP%]{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-progress-bar.fast-closing[_ngcontent-%COMP%]{transition:opacity .3s ease-out .3s!important}.ngx-progress-bar[_ngcontent-%COMP%]::after, .ngx-progress-bar[_ngcontent-%COMP%]::before{background-color:currentColor;content:\"\";display:block;width:100%;height:100%;position:absolute;top:0}.ngx-progress-bar-ltr[_ngcontent-%COMP%]::before{transform:translate3d(-100%,0,0)}.ngx-progress-bar-ltr[_ngcontent-%COMP%]::after{-webkit-animation:12s ease-out progressBar-slide-ltr;animation:12s ease-out progressBar-slide-ltr;transform:translate3d(-5%,0,0)}.ngx-progress-bar-rtl[_ngcontent-%COMP%]::before{transform:translate3d(100%,0,0)}.ngx-progress-bar-rtl[_ngcontent-%COMP%]::after{-webkit-animation:12s ease-out progressBar-slide-rtl;animation:12s ease-out progressBar-slide-rtl;transform:translate3d(5%,0,0)}.foreground-closing.ngx-progress-bar-ltr[_ngcontent-%COMP%]::before{-webkit-animation:1s ease-out progressBar-slide-complete-ltr;animation:1s ease-out progressBar-slide-complete-ltr;transform:translate3d(0,0,0)}.fast-closing.ngx-progress-bar-ltr[_ngcontent-%COMP%]::before{-webkit-animation:.6s ease-out progressBar-slide-complete-ltr!important;animation:.6s ease-out progressBar-slide-complete-ltr!important}.foreground-closing.ngx-progress-bar-rtl[_ngcontent-%COMP%]::before{-webkit-animation:1s ease-out progressBar-slide-complete-rtl;animation:1s ease-out progressBar-slide-complete-rtl;transform:translate3d(0,0,0)}.fast-closing.ngx-progress-bar-rtl[_ngcontent-%COMP%]::before{-webkit-animation:.6s ease-out progressBar-slide-complete-rtl!important;animation:.6s ease-out progressBar-slide-complete-rtl!important}@-webkit-keyframes progressBar-slide-ltr{from{transform:translate3d(-100%,0,0)}to{transform:translate3d(-5%,0,0)}}@keyframes progressBar-slide-ltr{from{transform:translate3d(-100%,0,0)}to{transform:translate3d(-5%,0,0)}}@-webkit-keyframes progressBar-slide-rtl{from{transform:translate3d(100%,0,0)}to{transform:translate3d(5%,0,0)}}@keyframes progressBar-slide-rtl{from{transform:translate3d(100%,0,0)}to{transform:translate3d(5%,0,0)}}@-webkit-keyframes progressBar-slide-complete-ltr{0%{transform:translate3d(-75%,0,0)}50%{transform:translate3d(0,0,0)}}@keyframes progressBar-slide-complete-ltr{0%{transform:translate3d(-75%,0,0)}50%{transform:translate3d(0,0,0)}}@-webkit-keyframes progressBar-slide-complete-rtl{0%{transform:translate3d(75%,0,0)}50%{transform:translate3d(0,0,0)}}@keyframes progressBar-slide-complete-rtl{0%{transform:translate3d(75%,0,0)}50%{transform:translate3d(0,0,0)}}.ngx-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99998!important;background-color:rgba(40,40,40,.8);cursor:progress;display:none}.ngx-overlay.foreground-closing[_ngcontent-%COMP%], .ngx-overlay.loading-foreground[_ngcontent-%COMP%]{display:block}.ngx-overlay.foreground-closing[_ngcontent-%COMP%]{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-overlay.fast-closing[_ngcontent-%COMP%]{transition:opacity .3s ease-out .3s!important}.ngx-overlay[_ngcontent-%COMP%] > .ngx-foreground-spinner[_ngcontent-%COMP%]{position:fixed;width:60px;height:60px;margin:0;color:#00acc1}.ngx-overlay[_ngcontent-%COMP%] > .ngx-loading-logo[_ngcontent-%COMP%]{position:fixed;margin:0;width:120px;height:120px}.ngx-overlay[_ngcontent-%COMP%] > .ngx-loading-text[_ngcontent-%COMP%]{position:fixed;margin:0;font-family:sans-serif;font-weight:400;font-size:1.2em;color:#fff}.ngx-background-spinner[_ngcontent-%COMP%]{position:fixed;z-index:99997!important;width:60px;height:60px;margin:0;color:#00acc1;opacity:.6;display:none}.ngx-background-spinner.background-closing[_ngcontent-%COMP%], .ngx-background-spinner.loading-background[_ngcontent-%COMP%]{display:block}.ngx-background-spinner.background-closing[_ngcontent-%COMP%]{opacity:0!important;transition:opacity .7s ease-out}.ngx-background-spinner.fast-closing[_ngcontent-%COMP%]{transition:opacity .4s ease-out!important}.ngx-position-absolute[_ngcontent-%COMP%], .ngx-position-absolute[_ngcontent-%COMP%] > .ngx-foreground-spinner[_ngcontent-%COMP%], .ngx-position-absolute[_ngcontent-%COMP%] > .ngx-loading-logo[_ngcontent-%COMP%], .ngx-position-absolute[_ngcontent-%COMP%] > .ngx-loading-text[_ngcontent-%COMP%]{position:absolute!important}.ngx-position-absolute.ngx-progress-bar[_ngcontent-%COMP%]{z-index:99996!important}.ngx-position-absolute.ngx-overlay[_ngcontent-%COMP%]{z-index:99995!important}.ngx-position-absolute[_ngcontent-%COMP%]   .sk-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .ngx-position-absolute.ngx-background-spinner[_ngcontent-%COMP%]{z-index:99994!important}.top-left[_ngcontent-%COMP%]{top:30px;left:30px}.top-center[_ngcontent-%COMP%]{top:30px;left:50%;transform:translateX(-50%)}.top-right[_ngcontent-%COMP%]{top:30px;right:30px}.center-left[_ngcontent-%COMP%]{top:50%;left:30px;transform:translateY(-50%)}.center-center[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%)}.center-right[_ngcontent-%COMP%]{top:50%;right:30px;transform:translateY(-50%)}.bottom-left[_ngcontent-%COMP%]{bottom:30px;left:30px}.bottom-center[_ngcontent-%COMP%]{bottom:30px;left:50%;transform:translateX(-50%)}.bottom-right[_ngcontent-%COMP%]{bottom:30px;right:30px}.sk-ball-scale-multiple[_ngcontent-%COMP%], .sk-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-ball-scale-multiple[_ngcontent-%COMP%]{width:100%;height:100%;font-size:0}.sk-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;opacity:0;-webkit-animation:1s linear infinite ball-scale-multiple;animation:1s linear infinite ball-scale-multiple}.sk-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}100%{opacity:0;transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}100%{opacity:0;transform:scale(1)}}.sk-ball-spin[_ngcontent-%COMP%], .sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-ball-spin[_ngcontent-%COMP%]{width:100%;height:100%;font-size:0}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.sk-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}@-webkit-keyframes ball-spin{0%,100%{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin{0%,100%{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.sk-ball-spin-clockwise[_ngcontent-%COMP%], .sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise[_ngcontent-%COMP%]{width:100%;height:100%;font-size:0}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-875ms;animation-delay:-875ms}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-625ms;animation-delay:-625ms}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-375ms;animation-delay:-375ms}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-125ms;animation-delay:-125ms}.sk-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes ball-spin-clockwise{0%,100%{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin-clockwise{0%,100%{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%], .sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{font-size:0;width:100%;height:100%;-webkit-animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate;animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-clockwise-fade-rotating;animation:1s linear infinite ball-spin-clockwise-fade-rotating}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-875ms;animation-delay:-875ms}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-625ms;animation-delay:-625ms}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-375ms;animation-delay:-375ms}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-125ms;animation-delay:-125ms}.sk-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{100%{transform:rotate(-360deg)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{100%{transform:rotate(-360deg)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%], .sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%]{width:100%;height:100%;font-size:0;-webkit-animation:6s linear infinite ball-spin-fade-rotate;animation:6s linear infinite ball-spin-fade-rotate}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-fade;animation:1s linear infinite ball-spin-fade}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.sk-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}@-webkit-keyframes ball-spin-fade-rotate{100%{transform:rotate(360deg)}}@keyframes ball-spin-fade-rotate{100%{transform:rotate(360deg)}}@-webkit-keyframes ball-spin-fade{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}@keyframes ball-spin-fade{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}.sk-chasing-dots[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;position:absolute;text-align:center;-webkit-animation:2s linear infinite sk-chasingDots-rotate;animation:2s linear infinite sk-chasingDots-rotate}.sk-chasing-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:currentColor;border-radius:100%;-webkit-animation:2s ease-in-out infinite sk-chasingDots-bounce;animation:2s ease-in-out infinite sk-chasingDots-bounce}.sk-chasing-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-chasingDots-rotate{100%{transform:rotate(360deg)}}@keyframes sk-chasingDots-rotate{100%{transform:rotate(360deg)}}@-webkit-keyframes sk-chasingDots-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}@keyframes sk-chasingDots-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}.sk-circle[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;position:relative}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]::before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circle-bounceDelay;animation:1.2s ease-in-out infinite both sk-circle-bounceDelay}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){transform:rotate(30deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){transform:rotate(60deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){transform:rotate(90deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){transform:rotate(120deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){transform:rotate(150deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){transform:rotate(180deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){transform:rotate(210deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){transform:rotate(240deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10){transform:rotate(270deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(11){transform:rotate(300deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(12){transform:rotate(330deg)}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2)::before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3)::before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4)::before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5)::before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6)::before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7)::before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8)::before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9)::before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10)::before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(11)::before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(12)::before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circle-bounceDelay{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}@keyframes sk-circle-bounceDelay{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}.sk-cube-grid[_ngcontent-%COMP%]{width:100%;height:100%;margin:auto}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:33%;height:33%;background-color:currentColor;float:left;-webkit-animation:1.3s ease-in-out infinite sk-cubeGrid-scaleDelay;animation:1.3s ease-in-out infinite sk-cubeGrid-scaleDelay}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:0s;animation-delay:0s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes sk-cubeGrid-scaleDelay{0%,100%,70%{transform:scale3D(1,1,1)}35%{transform:scale3D(0,0,1)}}@keyframes sk-cubeGrid-scaleDelay{0%,100%,70%{transform:scale3D(1,1,1)}35%{transform:scale3D(0,0,1)}}.sk-double-bounce[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;margin:auto}.sk-double-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;background-color:currentColor;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:2s ease-in-out infinite sk-doubleBounce-bounce;animation:2s ease-in-out infinite sk-doubleBounce-bounce}.sk-double-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-doubleBounce-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}@keyframes sk-doubleBounce-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}.sk-fading-circle[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;position:relative}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]::before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-fadingCircle-FadeDelay;animation:1.2s ease-in-out infinite both sk-fadingCircle-FadeDelay}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){transform:rotate(30deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){transform:rotate(60deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){transform:rotate(90deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){transform:rotate(120deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){transform:rotate(150deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){transform:rotate(180deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){transform:rotate(210deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){transform:rotate(240deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10){transform:rotate(270deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(11){transform:rotate(300deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(12){transform:rotate(330deg)}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2)::before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3)::before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4)::before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5)::before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6)::before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7)::before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8)::before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9)::before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10)::before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(11)::before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(12)::before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-fadingCircle-FadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-fadingCircle-FadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}.sk-folding-cube[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;position:relative;transform:rotateZ(45deg)}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{float:left;width:50%;height:50%;position:relative;transform:scale(1.1)}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;-webkit-animation:2.4s linear infinite both sk-foldingCube-angle;animation:2.4s linear infinite both sk-foldingCube-angle;transform-origin:100% 100%}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){transform:scale(1.1) rotateZ(90deg)}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){transform:scale(1.1) rotateZ(270deg)}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){transform:scale(1.1) rotateZ(180deg)}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2)::before{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3)::before{-webkit-animation-delay:.9s;animation-delay:.9s}.sk-folding-cube[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4)::before{-webkit-animation-delay:.6s;animation-delay:.6s}@-webkit-keyframes sk-foldingCube-angle{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes sk-foldingCube-angle{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}.sk-pulse[_ngcontent-%COMP%]{width:100%;height:100%;margin:auto}.sk-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;background-color:currentColor;border-radius:100%;-webkit-animation:1s ease-in-out infinite sk-pulse-scaleOut;animation:1s ease-in-out infinite sk-pulse-scaleOut}@-webkit-keyframes sk-pulse-scaleOut{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}@keyframes sk-pulse-scaleOut{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}.sk-rectangle-bounce[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;height:100%;width:10%;margin:0 5%;display:inline-block;-webkit-animation:1.2s ease-in-out infinite sk-rectangleBounce-stretchDelay;animation:1.2s ease-in-out infinite sk-rectangleBounce-stretchDelay}.sk-rectangle-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-rectangle-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.sk-rectangle-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-rectangleBounce-stretchDelay{0%,100%,40%{transform:scaleY(.4)}20%{transform:scaleY(1)}}@keyframes sk-rectangleBounce-stretchDelay{0%,100%,40%{transform:scaleY(.4)}20%{transform:scaleY(1)}}.sk-rectangle-bounce-party[_ngcontent-%COMP%], .sk-rectangle-bounce-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-rectangle-bounce-party[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation-name:rectangle-bounce-party;animation-name:rectangle-bounce-party;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.sk-rectangle-bounce-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.23s;animation-delay:-.23s}.sk-rectangle-bounce-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-duration:.62s;animation-duration:.62s;-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-rectangle-bounce-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.44s;animation-delay:-.44s}.sk-rectangle-bounce-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-delay:-.31s;animation-delay:-.31s}.sk-rectangle-bounce-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-duration:.74s;animation-duration:.74s;-webkit-animation-delay:-.24s;animation-delay:-.24s}@-webkit-keyframes rectangle-bounce-party{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.4)}}@keyframes rectangle-bounce-party{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.4)}}.sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%], .sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation:.9s cubic-bezier(.85,.25,.37,.85) infinite rectangle-bounce-pulse-out;animation:.9s cubic-bezier(.85,.25,.37,.85) infinite rectangle-bounce-pulse-out}.sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .sk-rectangle-bounce-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}@-webkit-keyframes rectangle-bounce-pulse-out{0%,100%{transform:scaley(1)}50%{transform:scaley(.4)}}@keyframes rectangle-bounce-pulse-out{0%,100%{transform:scaley(1)}50%{transform:scaley(.4)}}.sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%], .sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation:.9s cubic-bezier(.11,.49,.38,.78) infinite rectangle-bounce-pulse-out-rapid;animation:.9s cubic-bezier(.11,.49,.38,.78) infinite rectangle-bounce-pulse-out-rapid}.sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .sk-rectangle-bounce-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}@-webkit-keyframes rectangle-bounce-pulse-out-rapid{0%,90%{transform:scaley(1)}80%{transform:scaley(.4)}}@keyframes rectangle-bounce-pulse-out-rapid{0%,90%{transform:scaley(1)}80%{transform:scaley(.4)}}.sk-rotating-plane[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center;margin:auto}.sk-rotating-plane[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%;background-color:currentColor;-webkit-animation:1.2s ease-in-out infinite sk-rotatePlane;animation:1.2s ease-in-out infinite sk-rotatePlane}@-webkit-keyframes sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}@keyframes sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}.sk-square-jelly-box[_ngcontent-%COMP%], .sk-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-square-jelly-box[_ngcontent-%COMP%]{width:100%;height:100%;font-size:0}.sk-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .sk-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){position:absolute;left:0;width:100%}.sk-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:-25%;z-index:99997;height:100%;border-radius:10%;-webkit-animation:.6s linear -.1s infinite square-jelly-box-animate;animation:.6s linear -.1s infinite square-jelly-box-animate}.sk-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;-webkit-animation:.6s linear -.1s infinite square-jelly-box-shadow;animation:.6s linear -.1s infinite square-jelly-box-shadow}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}100%{transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}100%{transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{transform:scale(1.25,1)}}@keyframes square-jelly-box-shadow{50%{transform:scale(1.25,1)}}.sk-square-loader[_ngcontent-%COMP%], .sk-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.sk-square-loader[_ngcontent-%COMP%]{font-size:0;width:100%;height:100%}.sk-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;border:3px solid currentColor;width:100%;height:100%;background:0 0;border-radius:0;-webkit-animation:2s infinite square-loader;animation:2s infinite square-loader}.sk-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{display:inline-block;width:100%;vertical-align:top;content:\"\";background-color:currentColor;-webkit-animation:2s ease-in infinite square-loader-inner;animation:2s ease-in infinite square-loader-inner}@-webkit-keyframes square-loader{0%{transform:rotate(0)}25%,50%{transform:rotate(180deg)}100%,75%{transform:rotate(360deg)}}@keyframes square-loader{0%{transform:rotate(0)}25%,50%{transform:rotate(180deg)}100%,75%{transform:rotate(360deg)}}@-webkit-keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}@keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}.sk-three-bounce[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;text-align:center}.sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-top:35%;width:30%;height:30%;background-color:currentColor;border-radius:100%;display:inline-block;-webkit-animation:1.4s ease-in-out infinite both sk-threeBounce-bounceDelay;animation:1.4s ease-in-out infinite both sk-threeBounce-bounceDelay}.bottom-center[_ngcontent-%COMP%] > .sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .bottom-left[_ngcontent-%COMP%] > .sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .bottom-right[_ngcontent-%COMP%] > .sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-top:70%!important}.top-center[_ngcontent-%COMP%] > .sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .top-left[_ngcontent-%COMP%] > .sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .top-right[_ngcontent-%COMP%] > .sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-top:0!important}.sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-three-bounce[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-threeBounce-bounceDelay{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}@keyframes sk-threeBounce-bounceDelay{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}.sk-three-strings[_ngcontent-%COMP%]{width:100%;height:100%}.sk-three-strings[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;box-sizing:border-box;width:100%;height:100%;border-radius:50%}.sk-three-strings[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){left:0;top:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateOne;animation:1s linear infinite sk-threeStrings-rotateOne;border-bottom:3px solid currentColor}.sk-three-strings[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){right:0;top:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateTwo;animation:1s linear infinite sk-threeStrings-rotateTwo;border-right:3px solid currentColor}.sk-three-strings[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){right:0;bottom:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateThree;animation:1s linear infinite sk-threeStrings-rotateThree;border-top:3px solid currentColor}@-webkit-keyframes sk-threeStrings-rotateOne{0%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateOne{0%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-webkit-keyframes sk-threeStrings-rotateTwo{0%{transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateTwo{0%{transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-webkit-keyframes sk-threeStrings-rotateThree{0%{transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateThree{0%{transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}.sk-wandering-cubes[_ngcontent-%COMP%]{margin:auto;width:100%;height:100%;position:relative;text-align:center}.sk-wandering-cubes[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:currentColor;width:25%;height:25%;position:absolute;top:0;left:0;-webkit-animation:1.8s ease-in-out infinite sk-wanderingCubes-cubeMove;animation:1.8s ease-in-out infinite sk-wanderingCubes-cubeMove}.sk-wandering-cubes[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.9s;animation-delay:-.9s}@-webkit-keyframes sk-wanderingCubes-cubeMove{25%{transform:translateX(290%) rotate(-90deg) scale(.5)}50%{transform:translateX(290%) translateY(290%) rotate(-179deg)}50.1%{transform:translateX(290%) translateY(290%) rotate(-180deg)}75%{transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5)}100%{transform:rotate(-360deg)}}@keyframes sk-wanderingCubes-cubeMove{25%{transform:translateX(290%) rotate(-90deg) scale(.5)}50%{transform:translateX(290%) translateY(290%) rotate(-179deg)}50.1%{transform:translateX(290%) translateY(290%) rotate(-180deg)}75%{transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5)}100%{transform:rotate(-360deg)}}"],
      changeDetection: 0
    });

    NgxUiLoaderComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: NgxUiLoaderService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "bgsColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], NgxUiLoaderComponent.prototype, "bgsOpacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "bgsPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], NgxUiLoaderComponent.prototype, "bgsSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "bgsType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "fgsColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "fgsPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], NgxUiLoaderComponent.prototype, "fgsSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "fgsType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], NgxUiLoaderComponent.prototype, "gap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "loaderId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "logoPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], NgxUiLoaderComponent.prototype, "logoSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "logoUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "overlayBorderRadius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "overlayColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "pbColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "pbDirection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], NgxUiLoaderComponent.prototype, "pbThickness", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], NgxUiLoaderComponent.prototype, "hasProgressBar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "text", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "textColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderComponent.prototype, "textPosition", void 0);
    NgxUiLoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], NgxUiLoaderService])], NgxUiLoaderComponent);

    var NgxUiLoaderBlurredDirective = /*#__PURE__*/function () {
      function NgxUiLoaderBlurredDirective(elementRef, renderer, loader) {
        _classCallCheck(this, NgxUiLoaderBlurredDirective);

        this.elementRef = elementRef;
        this.renderer = renderer;
        this.loader = loader;
        this.blurNumber = this.loader.getDefaultConfig().blur;
        this.loaderId = this.loader.getDefaultConfig().masterLoaderId;
        this.fastFadeOut = this.loader.getDefaultConfig().fastFadeOut;
      }

      _createClass(NgxUiLoaderBlurredDirective, [{
        key: "ngOnInit",

        /**
         * On Init event
         */
        value: function ngOnInit() {
          var _this9 = this;

          this.showForegroundWatcher = this.loader.showForeground$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (showEvent) {
            return _this9.loaderId === showEvent.loaderId;
          })).subscribe(function (data) {
            if (data.isShow) {
              var filterValue = "blur(".concat(_this9.blurNumber, "px)");

              _this9.renderer.setStyle(_this9.elementRef.nativeElement, '-webkit-filter', filterValue);

              _this9.renderer.setStyle(_this9.elementRef.nativeElement, 'filter', filterValue);
            } else {
              setTimeout(function () {
                if (!_this9.loader.hasRunningTask(FOREGROUND, data.loaderId)) {
                  _this9.renderer.setStyle(_this9.elementRef.nativeElement, '-webkit-filter', 'none');

                  _this9.renderer.setStyle(_this9.elementRef.nativeElement, 'filter', 'none');
                }
              }, _this9.fastFadeOut ? FAST_OVERLAY_DISAPPEAR_TIME : OVERLAY_DISAPPEAR_TIME);
            }
          });
        }
        /**
         * On destroy event
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.showForegroundWatcher) {
            this.showForegroundWatcher.unsubscribe();
          }
        }
      }, {
        key: "blur",
        get: function get() {
          return this.blurNumber;
        },
        set: function set(value) {
          this.blurNumber = coerceNumber(value, this.loader.getDefaultConfig().blur);
        }
      }]);

      return NgxUiLoaderBlurredDirective;
    }();

    NgxUiLoaderBlurredDirective.ɵfac = function NgxUiLoaderBlurredDirective_Factory(t) {
      return new (t || NgxUiLoaderBlurredDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxUiLoaderService));
    };

    NgxUiLoaderBlurredDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: NgxUiLoaderBlurredDirective,
      selectors: [["", "ngxUiLoaderBlurred", ""]],
      inputs: {
        loaderId: "loaderId",
        blur: "blur"
      }
    });

    NgxUiLoaderBlurredDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: NgxUiLoaderService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], NgxUiLoaderBlurredDirective.prototype, "blur", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgxUiLoaderBlurredDirective.prototype, "loaderId", void 0);
    NgxUiLoaderBlurredDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], NgxUiLoaderService])], NgxUiLoaderBlurredDirective);
    var NgxUiLoaderModule_1;

    var NgxUiLoaderModule = NgxUiLoaderModule_1 = /*#__PURE__*/function () {
      function NgxUiLoaderModule() {
        _classCallCheck(this, NgxUiLoaderModule);
      }

      _createClass(NgxUiLoaderModule, null, [{
        key: "forRoot",

        /**
         * forRoot
         * @returns A module with its provider dependencies
         */
        value: function forRoot(ngxUiLoaderConfig) {
          return {
            ngModule: NgxUiLoaderModule_1,
            providers: [{
              provide: NGX_UI_LOADER_CONFIG_TOKEN,
              useValue: ngxUiLoaderConfig
            }]
          };
        }
      }]);

      return NgxUiLoaderModule;
    }();

    NgxUiLoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgxUiLoaderModule
    });
    NgxUiLoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgxUiLoaderModule_Factory(t) {
        return new (t || NgxUiLoaderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
    });
    /**
     * Injection token for ngx-ui-loader-router configuration
     */

    var NGX_UI_LOADER_ROUTER_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ngxUiLoaderRouterCustom.config');
    var NgxUiLoaderRouterModule_1;

    var NgxUiLoaderRouterModule = NgxUiLoaderRouterModule_1 = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function NgxUiLoaderRouterModule(parentModule, customConfig, router, loader) {
        var _this10 = this;

        _classCallCheck(this, NgxUiLoaderRouterModule);

        if (parentModule) {
          throw new Error('[ngx-ui-loader] - NgxUiLoaderRouterModule is already loaded. It should be imported in the root `AppModule` only!');
        }

        var config = {
          loaderId: loader.getDefaultConfig().masterLoaderId,
          showForeground: true
        };
        this.exclude = getExcludeObj(customConfig);

        if (customConfig) {
          config = Object.assign(Object.assign({}, config), customConfig);
        }

        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"]) {
            if (!isIgnored(event.url, _this10.exclude.strs, _this10.exclude.regExps)) {
              if (config.showForeground) {
                loader.startLoader(config.loaderId, ROUTER_LOADER_TASK_ID);
              } else {
                loader.startBackgroundLoader(config.loaderId, ROUTER_LOADER_TASK_ID);
              }
            }
          }

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationError"]) {
            if (!isIgnored(event.url, _this10.exclude.strs, _this10.exclude.regExps)) {
              if (config.showForeground) {
                loader.stopLoader(config.loaderId, ROUTER_LOADER_TASK_ID);
              } else {
                loader.stopBackgroundLoader(config.loaderId, ROUTER_LOADER_TASK_ID);
              }
            }
          }
        });
      }
      /**
       * forRoot
       * @returns A module with its provider dependencies
       */


      _createClass(NgxUiLoaderRouterModule, null, [{
        key: "forRoot",
        value: function forRoot(routerConfig) {
          return {
            ngModule: NgxUiLoaderRouterModule_1,
            providers: [{
              provide: NGX_UI_LOADER_ROUTER_CONFIG_TOKEN,
              useValue: routerConfig
            }]
          };
        }
      }]);

      return NgxUiLoaderRouterModule;
    }();

    NgxUiLoaderRouterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgxUiLoaderRouterModule
    });
    NgxUiLoaderRouterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgxUiLoaderRouterModule_Factory(t) {
        return new (t || NgxUiLoaderRouterModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NgxUiLoaderRouterModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NGX_UI_LOADER_ROUTER_CONFIG_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NgxUiLoaderService));
      }
    });

    NgxUiLoaderRouterModule.ctorParameters = function () {
      return [{
        type: NgxUiLoaderRouterModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [NGX_UI_LOADER_ROUTER_CONFIG_TOKEN]
        }]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: NgxUiLoaderService
      }];
    };

    NgxUiLoaderRouterModule = NgxUiLoaderRouterModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NGX_UI_LOADER_ROUTER_CONFIG_TOKEN)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgxUiLoaderRouterModule, Object, _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], NgxUiLoaderService])], NgxUiLoaderRouterModule);
    /**
     * Injection token for ngx-ui-loader-http configuration
     */

    var NGX_UI_LOADER_HTTP_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ngxUiLoaderHttpCustom.config');

    var NgxUiLoaderHttpInterceptor = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function NgxUiLoaderHttpInterceptor(customConfig, loader) {
        _classCallCheck(this, NgxUiLoaderHttpInterceptor);

        this.loader = loader;
        this.count = 0;
        this.config = {
          loaderId: this.loader.getDefaultConfig().masterLoaderId,
          showForeground: false
        };
        this.exclude = getExcludeObj(customConfig);

        if (customConfig) {
          this.config = Object.assign(Object.assign({}, this.config), customConfig);
        }
      }

      _createClass(NgxUiLoaderHttpInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this11 = this;

          if (isIgnored(req.url, this.exclude.strs, this.exclude.regExps)) {
            return next.handle(req);
          }

          this.count++;

          if (this.config.showForeground) {
            this.loader.startLoader(this.config.loaderId, HTTP_LOADER_TASK_ID, this.config);
          } else {
            this.loader.startBackgroundLoader(this.config.loaderId, HTTP_LOADER_TASK_ID, this.config);
          }

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            _this11.count--;

            if (_this11.count === 0) {
              if (_this11.config.showForeground) {
                _this11.loader.stopLoader(_this11.config.loaderId, HTTP_LOADER_TASK_ID);
              } else {
                _this11.loader.stopBackgroundLoader(_this11.config.loaderId, HTTP_LOADER_TASK_ID);
              }
            }
          }));
        }
      }]);

      return NgxUiLoaderHttpInterceptor;
    }();

    NgxUiLoaderHttpInterceptor.ɵfac = function NgxUiLoaderHttpInterceptor_Factory(t) {
      return new (t || NgxUiLoaderHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NGX_UI_LOADER_HTTP_CONFIG_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NgxUiLoaderService));
    };

    NgxUiLoaderHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NgxUiLoaderHttpInterceptor,
      factory: NgxUiLoaderHttpInterceptor.ɵfac
    });

    NgxUiLoaderHttpInterceptor.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [NGX_UI_LOADER_HTTP_CONFIG_TOKEN]
        }]
      }, {
        type: NgxUiLoaderService
      }];
    };

    NgxUiLoaderHttpInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NGX_UI_LOADER_HTTP_CONFIG_TOKEN)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, NgxUiLoaderService])], NgxUiLoaderHttpInterceptor);
    var NgxUiLoaderHttpModule_1;

    var NgxUiLoaderHttpModule = NgxUiLoaderHttpModule_1 = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function NgxUiLoaderHttpModule(parentModule) {
        _classCallCheck(this, NgxUiLoaderHttpModule);

        if (parentModule) {
          throw new Error('[ngx-ui-loader] - NgxUiLoaderHttpModule is already loaded. It should be imported in the root `AppModule` only!');
        }
      }
      /**
       * forRoot
       * @returns A module with its provider dependencies
       */


      _createClass(NgxUiLoaderHttpModule, null, [{
        key: "forRoot",
        value: function forRoot(httpConfig) {
          return {
            ngModule: NgxUiLoaderHttpModule_1,
            providers: [{
              provide: NGX_UI_LOADER_HTTP_CONFIG_TOKEN,
              useValue: httpConfig
            }]
          };
        }
      }]);

      return NgxUiLoaderHttpModule;
    }();

    NgxUiLoaderHttpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgxUiLoaderHttpModule
    });
    NgxUiLoaderHttpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgxUiLoaderHttpModule_Factory(t) {
        return new (t || NgxUiLoaderHttpModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NgxUiLoaderHttpModule, 12));
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: NgxUiLoaderHttpInterceptor,
        multi: true
      }]
    });

    NgxUiLoaderHttpModule.ctorParameters = function () {
      return [{
        type: NgxUiLoaderHttpModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }];
    };

    NgxUiLoaderHttpModule = NgxUiLoaderHttpModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgxUiLoaderHttpModule])], NgxUiLoaderHttpModule);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxUiLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [NGX_UI_LOADER_CONFIG_TOKEN]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxUiLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-ui-loader',
          template: "<!-- Progress bar {{{ -->\n<div\n  *ngIf=\"hasProgressBar\"\n  class=\"ngx-progress-bar\"\n  [class.ngx-position-absolute]=\"loaderId !== defaultConfig.masterLoaderId\"\n  [ngClass]=\"'ngx-progress-bar-' + pbDirection\"\n  [style.height.px]=\"pbThickness\"\n  [style.color]=\"pbColor\"\n  [class.loading-foreground]=\"showForeground\"\n  [class.foreground-closing]=\"foregroundClosing\"\n  [class.fast-closing]=\"foregroundClosing && fastFadeOut\"\n></div>\n<!-- Progress bar }}} -->\n\n<!-- Foreground container {{{ -->\n<div\n  class=\"ngx-overlay\"\n  [class.ngx-position-absolute]=\"loaderId !== defaultConfig.masterLoaderId\"\n  [style.background-color]=\"overlayColor\"\n  [style.border-radius]=\"overlayBorderRadius\"\n  [class.loading-foreground]=\"showForeground\"\n  [class.foreground-closing]=\"foregroundClosing\"\n  [class.fast-closing]=\"foregroundClosing && fastFadeOut\"\n>\n  <!-- Logo {{{ -->\n  <img\n    *ngIf=\"logoUrl\"\n    class=\"ngx-loading-logo\"\n    [ngClass]=\"logoPosition\"\n    [src]=\"trustedLogoUrl\"\n    [style.width.px]=\"logoSize\"\n    [style.height.px]=\"logoSize\"\n    [style.top]=\"logoTop\"\n  />\n  <!-- Logo }}} -->\n\n  <!-- Foreground spinner {{{ -->\n  <div\n    class=\"ngx-foreground-spinner\"\n    [ngClass]=\"fgsPosition\"\n    [style.color]=\"fgsColor\"\n    [style.width.px]=\"fgsSize\"\n    [style.height.px]=\"fgsSize\"\n    [style.top]=\"spinnerTop\"\n  >\n    <div [class]=\"fgSpinnerClass\">\n      <div *ngFor=\"let div of fgDivs\"></div>\n    </div>\n  </div>\n  <!-- Foreground spinner }}} -->\n\n  <!-- Loading text {{{ -->\n  <div class=\"ngx-loading-text\" [ngClass]=\"textPosition\" [style.top]=\"textTop\" [style.color]=\"textColor\">{{ text }}</div>\n  <!-- Loading text }}} -->\n</div>\n<!-- Foreground container }}} -->\n\n<!-- Background spinner {{{ -->\n<div\n  class=\"ngx-background-spinner\"\n  [class.ngx-position-absolute]=\"loaderId !== defaultConfig.masterLoaderId\"\n  [ngClass]=\"bgsPosition\"\n  [class.loading-background]=\"showBackground\"\n  [class.background-closing]=\"backgroundClosing\"\n  [class.fast-closing]=\"backgroundClosing && fastFadeOut\"\n  [style.width.px]=\"bgsSize\"\n  [style.height.px]=\"bgsSize\"\n  [style.color]=\"bgsColor\"\n  [style.opacity]=\"bgsOpacity\"\n>\n  <div [class]=\"bgSpinnerClass\">\n    <div *ngFor=\"let div of bgDivs\"></div>\n  </div>\n</div>\n<!-- Background spinner }}} -->\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [".ngx-progress-bar{position:fixed;top:0;left:0;width:100%;height:3px;z-index:99999!important;display:none;color:#00acc1;overflow:hidden}.ngx-progress-bar.foreground-closing,.ngx-progress-bar.loading-foreground{display:block}.ngx-progress-bar.foreground-closing{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-progress-bar.fast-closing{transition:opacity .3s ease-out .3s!important}.ngx-progress-bar::after,.ngx-progress-bar::before{background-color:currentColor;content:\"\";display:block;width:100%;height:100%;position:absolute;top:0}.ngx-progress-bar-ltr::before{transform:translate3d(-100%,0,0)}.ngx-progress-bar-ltr::after{-webkit-animation:12s ease-out progressBar-slide-ltr;animation:12s ease-out progressBar-slide-ltr;transform:translate3d(-5%,0,0)}.ngx-progress-bar-rtl::before{transform:translate3d(100%,0,0)}.ngx-progress-bar-rtl::after{-webkit-animation:12s ease-out progressBar-slide-rtl;animation:12s ease-out progressBar-slide-rtl;transform:translate3d(5%,0,0)}.foreground-closing.ngx-progress-bar-ltr::before{-webkit-animation:1s ease-out progressBar-slide-complete-ltr;animation:1s ease-out progressBar-slide-complete-ltr;transform:translate3d(0,0,0)}.fast-closing.ngx-progress-bar-ltr::before{-webkit-animation:.6s ease-out progressBar-slide-complete-ltr!important;animation:.6s ease-out progressBar-slide-complete-ltr!important}.foreground-closing.ngx-progress-bar-rtl::before{-webkit-animation:1s ease-out progressBar-slide-complete-rtl;animation:1s ease-out progressBar-slide-complete-rtl;transform:translate3d(0,0,0)}.fast-closing.ngx-progress-bar-rtl::before{-webkit-animation:.6s ease-out progressBar-slide-complete-rtl!important;animation:.6s ease-out progressBar-slide-complete-rtl!important}@-webkit-keyframes progressBar-slide-ltr{from{transform:translate3d(-100%,0,0)}to{transform:translate3d(-5%,0,0)}}@keyframes progressBar-slide-ltr{from{transform:translate3d(-100%,0,0)}to{transform:translate3d(-5%,0,0)}}@-webkit-keyframes progressBar-slide-rtl{from{transform:translate3d(100%,0,0)}to{transform:translate3d(5%,0,0)}}@keyframes progressBar-slide-rtl{from{transform:translate3d(100%,0,0)}to{transform:translate3d(5%,0,0)}}@-webkit-keyframes progressBar-slide-complete-ltr{0%{transform:translate3d(-75%,0,0)}50%{transform:translate3d(0,0,0)}}@keyframes progressBar-slide-complete-ltr{0%{transform:translate3d(-75%,0,0)}50%{transform:translate3d(0,0,0)}}@-webkit-keyframes progressBar-slide-complete-rtl{0%{transform:translate3d(75%,0,0)}50%{transform:translate3d(0,0,0)}}@keyframes progressBar-slide-complete-rtl{0%{transform:translate3d(75%,0,0)}50%{transform:translate3d(0,0,0)}}.ngx-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99998!important;background-color:rgba(40,40,40,.8);cursor:progress;display:none}.ngx-overlay.foreground-closing,.ngx-overlay.loading-foreground{display:block}.ngx-overlay.foreground-closing{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-overlay.fast-closing{transition:opacity .3s ease-out .3s!important}.ngx-overlay>.ngx-foreground-spinner{position:fixed;width:60px;height:60px;margin:0;color:#00acc1}.ngx-overlay>.ngx-loading-logo{position:fixed;margin:0;width:120px;height:120px}.ngx-overlay>.ngx-loading-text{position:fixed;margin:0;font-family:sans-serif;font-weight:400;font-size:1.2em;color:#fff}.ngx-background-spinner{position:fixed;z-index:99997!important;width:60px;height:60px;margin:0;color:#00acc1;opacity:.6;display:none}.ngx-background-spinner.background-closing,.ngx-background-spinner.loading-background{display:block}.ngx-background-spinner.background-closing{opacity:0!important;transition:opacity .7s ease-out}.ngx-background-spinner.fast-closing{transition:opacity .4s ease-out!important}.ngx-position-absolute,.ngx-position-absolute>.ngx-foreground-spinner,.ngx-position-absolute>.ngx-loading-logo,.ngx-position-absolute>.ngx-loading-text{position:absolute!important}.ngx-position-absolute.ngx-progress-bar{z-index:99996!important}.ngx-position-absolute.ngx-overlay{z-index:99995!important}.ngx-position-absolute .sk-square-jelly-box>div:nth-child(1),.ngx-position-absolute.ngx-background-spinner{z-index:99994!important}.top-left{top:30px;left:30px}.top-center{top:30px;left:50%;transform:translateX(-50%)}.top-right{top:30px;right:30px}.center-left{top:50%;left:30px;transform:translateY(-50%)}.center-center{top:50%;left:50%;transform:translate(-50%,-50%)}.center-right{top:50%;right:30px;transform:translateY(-50%)}.bottom-left{bottom:30px;left:30px}.bottom-center{bottom:30px;left:50%;transform:translateX(-50%)}.bottom-right{bottom:30px;right:30px}.sk-ball-scale-multiple,.sk-ball-scale-multiple>div{position:relative;box-sizing:border-box}.sk-ball-scale-multiple{width:100%;height:100%;font-size:0}.sk-ball-scale-multiple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;opacity:0;-webkit-animation:1s linear infinite ball-scale-multiple;animation:1s linear infinite ball-scale-multiple}.sk-ball-scale-multiple>div:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-ball-scale-multiple>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}100%{opacity:0;transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;transform:scale(0)}5%{opacity:.75}100%{opacity:0;transform:scale(1)}}.sk-ball-spin,.sk-ball-spin>div{position:relative;box-sizing:border-box}.sk-ball-spin{width:100%;height:100%;font-size:0}.sk-ball-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.sk-ball-spin>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.sk-ball-spin>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.sk-ball-spin>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.sk-ball-spin>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.sk-ball-spin>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.sk-ball-spin>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.sk-ball-spin>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.sk-ball-spin>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}@-webkit-keyframes ball-spin{0%,100%{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin{0%,100%{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.sk-ball-spin-clockwise,.sk-ball-spin-clockwise>div{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise{width:100%;height:100%;font-size:0}.sk-ball-spin-clockwise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.sk-ball-spin-clockwise>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-875ms;animation-delay:-875ms}.sk-ball-spin-clockwise>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.sk-ball-spin-clockwise>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-625ms;animation-delay:-625ms}.sk-ball-spin-clockwise>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-ball-spin-clockwise>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-375ms;animation-delay:-375ms}.sk-ball-spin-clockwise>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.sk-ball-spin-clockwise>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-125ms;animation-delay:-125ms}.sk-ball-spin-clockwise>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes ball-spin-clockwise{0%,100%{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}@keyframes ball-spin-clockwise{0%,100%{opacity:1;transform:scale(1)}20%{opacity:1}80%{opacity:0;transform:scale(0)}}.sk-ball-spin-clockwise-fade-rotating,.sk-ball-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise-fade-rotating{font-size:0;width:100%;height:100%;-webkit-animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate;animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate}.sk-ball-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-clockwise-fade-rotating;animation:1s linear infinite ball-spin-clockwise-fade-rotating}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-875ms;animation-delay:-875ms}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-625ms;animation-delay:-625ms}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-375ms;animation-delay:-375ms}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-125ms;animation-delay:-125ms}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{100%{transform:rotate(-360deg)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{100%{transform:rotate(-360deg)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.sk-ball-spin-fade-rotating,.sk-ball-spin-fade-rotating>div{position:relative;box-sizing:border-box}.sk-ball-spin-fade-rotating{width:100%;height:100%;font-size:0;-webkit-animation:6s linear infinite ball-spin-fade-rotate;animation:6s linear infinite ball-spin-fade-rotate}.sk-ball-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-fade;animation:1s linear infinite ball-spin-fade}.sk-ball-spin-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.sk-ball-spin-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.sk-ball-spin-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.sk-ball-spin-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.sk-ball-spin-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.sk-ball-spin-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.sk-ball-spin-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.sk-ball-spin-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}@-webkit-keyframes ball-spin-fade-rotate{100%{transform:rotate(360deg)}}@keyframes ball-spin-fade-rotate{100%{transform:rotate(360deg)}}@-webkit-keyframes ball-spin-fade{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}@keyframes ball-spin-fade{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.5)}}.sk-chasing-dots{margin:auto;width:100%;height:100%;position:absolute;text-align:center;-webkit-animation:2s linear infinite sk-chasingDots-rotate;animation:2s linear infinite sk-chasingDots-rotate}.sk-chasing-dots>div{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:currentColor;border-radius:100%;-webkit-animation:2s ease-in-out infinite sk-chasingDots-bounce;animation:2s ease-in-out infinite sk-chasingDots-bounce}.sk-chasing-dots>div:nth-child(2){top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-chasingDots-rotate{100%{transform:rotate(360deg)}}@keyframes sk-chasingDots-rotate{100%{transform:rotate(360deg)}}@-webkit-keyframes sk-chasingDots-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}@keyframes sk-chasingDots-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}.sk-circle{margin:auto;width:100%;height:100%;position:relative}.sk-circle>div{width:100%;height:100%;position:absolute;left:0;top:0}.sk-circle>div::before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circle-bounceDelay;animation:1.2s ease-in-out infinite both sk-circle-bounceDelay}.sk-circle>div:nth-child(2){transform:rotate(30deg)}.sk-circle>div:nth-child(3){transform:rotate(60deg)}.sk-circle>div:nth-child(4){transform:rotate(90deg)}.sk-circle>div:nth-child(5){transform:rotate(120deg)}.sk-circle>div:nth-child(6){transform:rotate(150deg)}.sk-circle>div:nth-child(7){transform:rotate(180deg)}.sk-circle>div:nth-child(8){transform:rotate(210deg)}.sk-circle>div:nth-child(9){transform:rotate(240deg)}.sk-circle>div:nth-child(10){transform:rotate(270deg)}.sk-circle>div:nth-child(11){transform:rotate(300deg)}.sk-circle>div:nth-child(12){transform:rotate(330deg)}.sk-circle>div:nth-child(2)::before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-circle>div:nth-child(3)::before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-circle>div:nth-child(4)::before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-circle>div:nth-child(5)::before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-circle>div:nth-child(6)::before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-circle>div:nth-child(7)::before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-circle>div:nth-child(8)::before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-circle>div:nth-child(9)::before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-circle>div:nth-child(10)::before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-circle>div:nth-child(11)::before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-circle>div:nth-child(12)::before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circle-bounceDelay{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}@keyframes sk-circle-bounceDelay{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}.sk-cube-grid{width:100%;height:100%;margin:auto}.sk-cube-grid>div{width:33%;height:33%;background-color:currentColor;float:left;-webkit-animation:1.3s ease-in-out infinite sk-cubeGrid-scaleDelay;animation:1.3s ease-in-out infinite sk-cubeGrid-scaleDelay}.sk-cube-grid>div:nth-child(1){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid>div:nth-child(2){-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.sk-cube-grid>div:nth-child(4){-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid>div:nth-child(5){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid>div:nth-child(6){-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid>div:nth-child(7){-webkit-animation-delay:0s;animation-delay:0s}.sk-cube-grid>div:nth-child(8){-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid>div:nth-child(9){-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes sk-cubeGrid-scaleDelay{0%,100%,70%{transform:scale3D(1,1,1)}35%{transform:scale3D(0,0,1)}}@keyframes sk-cubeGrid-scaleDelay{0%,100%,70%{transform:scale3D(1,1,1)}35%{transform:scale3D(0,0,1)}}.sk-double-bounce{width:100%;height:100%;position:relative;margin:auto}.sk-double-bounce>div{width:100%;height:100%;border-radius:50%;background-color:currentColor;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:2s ease-in-out infinite sk-doubleBounce-bounce;animation:2s ease-in-out infinite sk-doubleBounce-bounce}.sk-double-bounce>div:nth-child(2){-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-doubleBounce-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}@keyframes sk-doubleBounce-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}.sk-fading-circle{margin:auto;width:100%;height:100%;position:relative}.sk-fading-circle>div{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle>div::before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-fadingCircle-FadeDelay;animation:1.2s ease-in-out infinite both sk-fadingCircle-FadeDelay}.sk-fading-circle>div:nth-child(2){transform:rotate(30deg)}.sk-fading-circle>div:nth-child(3){transform:rotate(60deg)}.sk-fading-circle>div:nth-child(4){transform:rotate(90deg)}.sk-fading-circle>div:nth-child(5){transform:rotate(120deg)}.sk-fading-circle>div:nth-child(6){transform:rotate(150deg)}.sk-fading-circle>div:nth-child(7){transform:rotate(180deg)}.sk-fading-circle>div:nth-child(8){transform:rotate(210deg)}.sk-fading-circle>div:nth-child(9){transform:rotate(240deg)}.sk-fading-circle>div:nth-child(10){transform:rotate(270deg)}.sk-fading-circle>div:nth-child(11){transform:rotate(300deg)}.sk-fading-circle>div:nth-child(12){transform:rotate(330deg)}.sk-fading-circle>div:nth-child(2)::before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle>div:nth-child(3)::before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle>div:nth-child(4)::before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle>div:nth-child(5)::before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle>div:nth-child(6)::before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle>div:nth-child(7)::before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle>div:nth-child(8)::before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle>div:nth-child(9)::before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle>div:nth-child(10)::before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle>div:nth-child(11)::before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle>div:nth-child(12)::before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-fadingCircle-FadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-fadingCircle-FadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}.sk-folding-cube{margin:auto;width:100%;height:100%;position:relative;transform:rotateZ(45deg)}.sk-folding-cube>div{float:left;width:50%;height:50%;position:relative;transform:scale(1.1)}.sk-folding-cube>div::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;-webkit-animation:2.4s linear infinite both sk-foldingCube-angle;animation:2.4s linear infinite both sk-foldingCube-angle;transform-origin:100% 100%}.sk-folding-cube>div:nth-child(2){transform:scale(1.1) rotateZ(90deg)}.sk-folding-cube>div:nth-child(3){transform:scale(1.1) rotateZ(270deg)}.sk-folding-cube>div:nth-child(4){transform:scale(1.1) rotateZ(180deg)}.sk-folding-cube>div:nth-child(2)::before{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-folding-cube>div:nth-child(3)::before{-webkit-animation-delay:.9s;animation-delay:.9s}.sk-folding-cube>div:nth-child(4)::before{-webkit-animation-delay:.6s;animation-delay:.6s}@-webkit-keyframes sk-foldingCube-angle{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes sk-foldingCube-angle{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}.sk-pulse{width:100%;height:100%;margin:auto}.sk-pulse>div{width:100%;height:100%;background-color:currentColor;border-radius:100%;-webkit-animation:1s ease-in-out infinite sk-pulse-scaleOut;animation:1s ease-in-out infinite sk-pulse-scaleOut}@-webkit-keyframes sk-pulse-scaleOut{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}@keyframes sk-pulse-scaleOut{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}.sk-rectangle-bounce{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce>div{background-color:currentColor;height:100%;width:10%;margin:0 5%;display:inline-block;-webkit-animation:1.2s ease-in-out infinite sk-rectangleBounce-stretchDelay;animation:1.2s ease-in-out infinite sk-rectangleBounce-stretchDelay}.sk-rectangle-bounce>div:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-rectangle-bounce>div:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.sk-rectangle-bounce>div:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce>div:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-rectangleBounce-stretchDelay{0%,100%,40%{transform:scaleY(.4)}20%{transform:scaleY(1)}}@keyframes sk-rectangleBounce-stretchDelay{0%,100%,40%{transform:scaleY(.4)}20%{transform:scaleY(1)}}.sk-rectangle-bounce-party,.sk-rectangle-bounce-party>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-party{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-party>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation-name:rectangle-bounce-party;animation-name:rectangle-bounce-party;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.sk-rectangle-bounce-party>div:nth-child(1){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.23s;animation-delay:-.23s}.sk-rectangle-bounce-party>div:nth-child(2){-webkit-animation-duration:.62s;animation-duration:.62s;-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-rectangle-bounce-party>div:nth-child(3){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.44s;animation-delay:-.44s}.sk-rectangle-bounce-party>div:nth-child(4){-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-delay:-.31s;animation-delay:-.31s}.sk-rectangle-bounce-party>div:nth-child(5){-webkit-animation-duration:.74s;animation-duration:.74s;-webkit-animation-delay:-.24s;animation-delay:-.24s}@-webkit-keyframes rectangle-bounce-party{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.4)}}@keyframes rectangle-bounce-party{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.4)}}.sk-rectangle-bounce-pulse-out,.sk-rectangle-bounce-pulse-out>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation:.9s cubic-bezier(.85,.25,.37,.85) infinite rectangle-bounce-pulse-out;animation:.9s cubic-bezier(.85,.25,.37,.85) infinite rectangle-bounce-pulse-out}.sk-rectangle-bounce-pulse-out>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce-pulse-out>div:nth-child(2),.sk-rectangle-bounce-pulse-out>div:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-rectangle-bounce-pulse-out>div:nth-child(1),.sk-rectangle-bounce-pulse-out>div:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}@-webkit-keyframes rectangle-bounce-pulse-out{0%,100%{transform:scaley(1)}50%{transform:scaley(.4)}}@keyframes rectangle-bounce-pulse-out{0%,100%{transform:scaley(1)}50%{transform:scaley(.4)}}.sk-rectangle-bounce-pulse-out-rapid,.sk-rectangle-bounce-pulse-out-rapid>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out-rapid{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out-rapid>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation:.9s cubic-bezier(.11,.49,.38,.78) infinite rectangle-bounce-pulse-out-rapid;animation:.9s cubic-bezier(.11,.49,.38,.78) infinite rectangle-bounce-pulse-out-rapid}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(2),.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(1),.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}@-webkit-keyframes rectangle-bounce-pulse-out-rapid{0%,90%{transform:scaley(1)}80%{transform:scaley(.4)}}@keyframes rectangle-bounce-pulse-out-rapid{0%,90%{transform:scaley(1)}80%{transform:scaley(.4)}}.sk-rotating-plane{width:100%;height:100%;text-align:center;margin:auto}.sk-rotating-plane>div{width:100%;height:100%;background-color:currentColor;-webkit-animation:1.2s ease-in-out infinite sk-rotatePlane;animation:1.2s ease-in-out infinite sk-rotatePlane}@-webkit-keyframes sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}@keyframes sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}.sk-square-jelly-box,.sk-square-jelly-box>div{position:relative;box-sizing:border-box}.sk-square-jelly-box{width:100%;height:100%;font-size:0}.sk-square-jelly-box>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-square-jelly-box>div:nth-child(1),.sk-square-jelly-box>div:nth-child(2){position:absolute;left:0;width:100%}.sk-square-jelly-box>div:nth-child(1){top:-25%;z-index:99997;height:100%;border-radius:10%;-webkit-animation:.6s linear -.1s infinite square-jelly-box-animate;animation:.6s linear -.1s infinite square-jelly-box-animate}.sk-square-jelly-box>div:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;-webkit-animation:.6s linear -.1s infinite square-jelly-box-shadow;animation:.6s linear -.1s infinite square-jelly-box-shadow}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}100%{transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{transform:translateY(25%) rotate(67.5deg)}100%{transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{transform:scale(1.25,1)}}@keyframes square-jelly-box-shadow{50%{transform:scale(1.25,1)}}.sk-square-loader,.sk-square-loader>div{position:relative;box-sizing:border-box}.sk-square-loader{font-size:0;width:100%;height:100%}.sk-square-loader>div{display:inline-block;float:none;border:3px solid currentColor;width:100%;height:100%;background:0 0;border-radius:0;-webkit-animation:2s infinite square-loader;animation:2s infinite square-loader}.sk-square-loader>div:after{display:inline-block;width:100%;vertical-align:top;content:\"\";background-color:currentColor;-webkit-animation:2s ease-in infinite square-loader-inner;animation:2s ease-in infinite square-loader-inner}@-webkit-keyframes square-loader{0%{transform:rotate(0)}25%,50%{transform:rotate(180deg)}100%,75%{transform:rotate(360deg)}}@keyframes square-loader{0%{transform:rotate(0)}25%,50%{transform:rotate(180deg)}100%,75%{transform:rotate(360deg)}}@-webkit-keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}@keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}.sk-three-bounce{margin:auto;width:100%;height:100%;text-align:center}.sk-three-bounce>div{margin-top:35%;width:30%;height:30%;background-color:currentColor;border-radius:100%;display:inline-block;-webkit-animation:1.4s ease-in-out infinite both sk-threeBounce-bounceDelay;animation:1.4s ease-in-out infinite both sk-threeBounce-bounceDelay}.bottom-center>.sk-three-bounce>div,.bottom-left>.sk-three-bounce>div,.bottom-right>.sk-three-bounce>div{margin-top:70%!important}.top-center>.sk-three-bounce>div,.top-left>.sk-three-bounce>div,.top-right>.sk-three-bounce>div{margin-top:0!important}.sk-three-bounce>div:nth-child(1){-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-three-bounce>div:nth-child(2){-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-threeBounce-bounceDelay{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}@keyframes sk-threeBounce-bounceDelay{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}.sk-three-strings{width:100%;height:100%}.sk-three-strings>div{position:absolute;box-sizing:border-box;width:100%;height:100%;border-radius:50%}.sk-three-strings>div:nth-child(1){left:0;top:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateOne;animation:1s linear infinite sk-threeStrings-rotateOne;border-bottom:3px solid currentColor}.sk-three-strings>div:nth-child(2){right:0;top:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateTwo;animation:1s linear infinite sk-threeStrings-rotateTwo;border-right:3px solid currentColor}.sk-three-strings>div:nth-child(3){right:0;bottom:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateThree;animation:1s linear infinite sk-threeStrings-rotateThree;border-top:3px solid currentColor}@-webkit-keyframes sk-threeStrings-rotateOne{0%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateOne{0%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-webkit-keyframes sk-threeStrings-rotateTwo{0%{transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateTwo{0%{transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-webkit-keyframes sk-threeStrings-rotateThree{0%{transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateThree{0%{transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}.sk-wandering-cubes{margin:auto;width:100%;height:100%;position:relative;text-align:center}.sk-wandering-cubes>div{background-color:currentColor;width:25%;height:25%;position:absolute;top:0;left:0;-webkit-animation:1.8s ease-in-out infinite sk-wanderingCubes-cubeMove;animation:1.8s ease-in-out infinite sk-wanderingCubes-cubeMove}.sk-wandering-cubes>div:nth-child(2){-webkit-animation-delay:-.9s;animation-delay:-.9s}@-webkit-keyframes sk-wanderingCubes-cubeMove{25%{transform:translateX(290%) rotate(-90deg) scale(.5)}50%{transform:translateX(290%) translateY(290%) rotate(-179deg)}50.1%{transform:translateX(290%) translateY(290%) rotate(-180deg)}75%{transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5)}100%{transform:rotate(-360deg)}}@keyframes sk-wanderingCubes-cubeMove{25%{transform:translateX(290%) rotate(-90deg) scale(.5)}50%{transform:translateX(290%) translateY(290%) rotate(-179deg)}50.1%{transform:translateX(290%) translateY(290%) rotate(-180deg)}75%{transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5)}100%{transform:rotate(-360deg)}}"]
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: NgxUiLoaderService
        }];
      }, {
        bgsColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bgsOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bgsPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bgsSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bgsType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fgsColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fgsPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fgsSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fgsType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        gap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        loaderId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        logoPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        logoSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        logoUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        overlayBorderRadius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        overlayColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pbColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pbDirection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pbThickness: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hasProgressBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        textColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        textPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxUiLoaderBlurredDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[ngxUiLoaderBlurred]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: NgxUiLoaderService
        }];
      }, {
        loaderId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        blur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxUiLoaderModule, {
        declarations: function declarations() {
          return [NgxUiLoaderComponent, NgxUiLoaderBlurredDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
        },
        exports: function exports() {
          return [NgxUiLoaderComponent, NgxUiLoaderBlurredDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxUiLoaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
          declarations: [NgxUiLoaderComponent, NgxUiLoaderBlurredDirective],
          exports: [NgxUiLoaderComponent, NgxUiLoaderBlurredDirective]
        }]
      }], null, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxUiLoaderRouterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{}]
      }], function () {
        return [{
          type: NgxUiLoaderRouterModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [NGX_UI_LOADER_ROUTER_CONFIG_TOKEN]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: NgxUiLoaderService
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxUiLoaderHttpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [NGX_UI_LOADER_HTTP_CONFIG_TOKEN]
          }]
        }, {
          type: NgxUiLoaderService
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxUiLoaderHttpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: NgxUiLoaderHttpInterceptor,
            multi: true
          }]
        }]
      }], function () {
        return [{
          type: NgxUiLoaderHttpModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }];
      }, null);
    })();
    /*
     * Public API Surface of ngx-ui-loader
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-ui-loader.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/create-role/create-role.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/create-role/create-role.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSetupConfigurationRolesCreateRoleCreateRoleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<div class=\"ui fluid container\">\r\n    <div class=\"ui grid\">\r\n        <div class=\"sixteen wide column row\">\r\n            <div class=\"eight wide column\">\r\n                <h3><span class=\"update-header\">Create Role</span></h3>\r\n            </div>\r\n            <div class=\"eight wide column bookings_btn-panel text-right\">\r\n                <a class=\"ui primary button roleActionButton\" routerLink=\"../\">\r\n                    <span class=\"tourCode_text\">List Roles</span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"outer-basic\">\r\n        \r\n        <div class=\"outer-basicForm\">\r\n            <div class=\"ui form\">\r\n\r\n            <div class=\"email-list b2c-list-user-table\">\r\n\r\n                <form [formGroup]=\"rolePermissionForm\" (ngSubmit)=\"btnSubmitHandler()\">\r\n\r\n                    <div class=\"ui grid grid-header\">\r\n\r\n                        <div class=\"four wide column\">\r\n                            <div class=\"field\">\r\n                                <label>Role Name <small *ngIf=\"isSubmitted && gfc.name.errors \">*</small></label>\r\n                                <input type=\"text\" placeholder=\"Role Name\" formControlName=\"name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"four wide column\">\r\n                            <div class=\"field\">\r\n                                <label>Role Code <small *ngIf=\"isSubmitted && gfc.code.errors \">*</small></label>\r\n                                <input type=\"text\" placeholder=\"Role Name\" formControlName=\"code\">\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"sixteen wide column\" *ngFor=\"let allPermission of allPermissions; let i = index;\">\r\n                            <h3 class=\"ui header\">{{ allPermission.name }}</h3>\r\n\r\n                            <div class=\"ui card\" style=\"width:100%;\">\r\n                                <div class=\"content\">\r\n                                    <div class=\"description\">\r\n                                        <div class=\"ui grid edit-checkbox-list\">\r\n                                            <div class=\"three wide column\" *ngFor=\"let permissionKey of allPermission.permissions; let j = index;\">\r\n                                                <div class=\"ui checkbox\">\r\n                                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"check-{{ i }}{{ j }}\" [formControlName]=\"permissionKey.allow[0]\">\r\n                                                    <label for=\"check-{{ i }}{{ j }}\">{{ permissionKey.name }}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                      </div>\r\n            \r\n                    <div class=\"mt-2 text-right\">\r\n                        <button type=\"submit\" class=\"ui primary button\">Create Role</button>\r\n                    </div>\r\n            \r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSetupConfigurationRolesEditRoleEditRoleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3><span class=\"update-header\">Update Role</span></h3>\r\n\r\n<div class=\"ui fluid container\">\r\n    <!-- <div class=\"eight wide field\">    </div> -->\r\n    <div class=\"eight wide field bookings_btn-panel text-right\">\r\n        <a class=\"ui primary button roleActionButton\" routerLink=\"../../list\">\r\n            <span class=\"tourCode_text\">List Roles</span>\r\n        </a>\r\n    </div>\r\n    <div class=\"outer-basic\">\r\n        \r\n        <div class=\"outer-basicForm\">\r\n            <div class=\"ui form\">\r\n\r\n            <div class=\"email-list b2c-list-user-table\">\r\n\r\n                <form [formGroup]=\"rolePermissionForm\" (ngSubmit)=\"btnSubmitHandler()\">\r\n\r\n                    <div class=\"ui grid grid-header\">\r\n\r\n                        <div class=\"four wide column\">\r\n                            <div class=\"field\">\r\n                                <label>Role Name <small *ngIf=\"isSubmitted && gfc.name.errors \">*</small></label>\r\n                                <input type=\"text\" placeholder=\"Role Name\" formControlName=\"name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"four wide column\">\r\n                            <div class=\"field\">\r\n                                <label>Role Code <small *ngIf=\"isSubmitted && gfc.code.errors \">*</small></label>\r\n                                <input type=\"text\" placeholder=\"Role Name\" formControlName=\"code\">\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"sixteen wide column\" *ngFor=\"let allPermission of allPermissions; let i = index;\">\r\n                            <h3 class=\"ui header\">{{ allPermission.name }}</h3>\r\n\r\n                            <div class=\"ui card\" style=\"width:100%;\">\r\n                                <div class=\"content\">\r\n                                    <div class=\"description\">\r\n                                        <div class=\"ui grid edit-checkbox-list\">\r\n                                            <div class=\"three wide column\" *ngFor=\"let permissionKey of allPermission.permissions; let j = index;\">\r\n                                                <div class=\"ui checkbox\">\r\n                                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"check-{{ i }}{{ j }}\" [formControlName]=\"permissionKey.allow[0]\">\r\n                                                    <label for=\"check-{{ i }}{{ j }}\">{{ permissionKey.name }}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                      </div>\r\n            \r\n                    <div class=\"mt-2 text-right\">\r\n                        <button type=\"submit\" class=\"ui primary button\">Update Role</button>\r\n                    </div>\r\n            \r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/roles.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/roles.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSetupConfigurationRolesRolesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ngx-ui-loader></ngx-ui-loader>\r\n<div class=\"outer-segment animated fadeIn\">\r\n    <div class=\"markup_list\">\r\n        <div class=\"ui grid\">\r\n            <div class=\"sixteen wide column row\">\r\n                <div class=\"eight wide column\">\r\n                    <h3 class=\"markup_title\">Roles </h3>\r\n                </div>\r\n                <div class=\"eight wide column text-right bookings_btn-panel\">\r\n                    <a class=\"ui primary button roleActionButton\" routerLink=\"create\">\r\n                        <span class=\"tourCode_text\">Create Role</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n <div class=\"ui bottom attached active tab segment tabContent-block\" data-tab=\"first\">\r\n        <div class=\"result-block\">\r\n            \r\n            <table class=\"ui celled table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Code</th>\r\n                        <th>Role</th>\r\n                        <th width=\"220\">&nbsp;</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n\r\n                    <tr *ngFor=\"let role of roles;\">\r\n                    <td data-label=\"Code\"><span class=\"head\">Code: </span><span>{{ role.code }}</span></td>\r\n                    <td data-label=\"Name\"><span class=\"head\">Role: </span><span>{{ role.name }}</span></td>\r\n                    \r\n                    <td data-label=\"Name\" class=\"text-center align-btn\">\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <a class=\"ui primary button\"  [routerLink]=\"['edit', role.role_id]\" routerLinkActive=\"router-link-active\"><i class=\"fa fa-edit\"></i></a>\r\n                            <button (click)=\"delete(role.role_id)\" class=\"ui red button\"><i class=\"fa fa-trash\"></i></button>\r\n                        </div>\r\n                    </td>\r\n                    </tr>\r\n\r\n                </tbody>\r\n        \r\n            </table>\r\n            \r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/roles/create-role/create-role.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/roles/create-role/create-role.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSetupConfigurationRolesCreateRoleCreateRoleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.fluid.container {\n  padding: 25px;\n}\n\n.outer-basic {\n  padding: 24px;\n  background: #fff;\n  box-shadow: 0 0px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 2px rgba(60, 64, 67, 0.15);\n  border-radius: 4.96141px;\n  margin-top: 24px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n}\n\n.basic-header {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.ui.grid h3 {\n  margin-top: 0px !important;\n}\n\n.ui.header {\n  font-weight: 400 !important;\n  font-size: 18px;\n}\n\n.ui.checkbox input:checked ~ label {\n  color: #3867b1;\n}\n\n.ui.checkbox input:checked ~ label:before {\n  border-color: #3867b1;\n}\n\n.ui.checkbox input:checked ~ label:after {\n  color: #3867b1;\n}\n\n@media (max-width: 920px) {\n  .ui.grid.edit-checkbox-list .three.wide.column {\n    width: 25% !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .ui.grid.edit-checkbox-list .three.wide.column {\n    width: 31.25% !important;\n  }\n}\n\n@media (max-width: 630px) {\n  .ui.grid.edit-checkbox-list .three.wide.column {\n    width: 48.5% !important;\n  }\n\n  .ui.grid.grid-header .four.wide.column {\n    width: 50% !important;\n  }\n}\n\n@media (max-width: 420px) {\n  .ui.grid.edit-checkbox-list .three.wide.column {\n    width: 100% !important;\n  }\n\n  .ui.grid.grid-header .four.wide.column {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vcm9sZXMvY3JlYXRlLXJvbGUvRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxzZXR1cC1jb25maWd1cmF0aW9uXFxyb2xlc1xcY3JlYXRlLXJvbGVcXGNyZWF0ZS1yb2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2V0dXAtY29uZmlndXJhdGlvbi9yb2xlcy9jcmVhdGUtcm9sZS9jcmVhdGUtcm9sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUZBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksaUNBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURBSTtFQUNJLHFCQUFBO0FDRVI7O0FEQUk7RUFDSSxjQUFBO0FDRVI7O0FERUE7RUFFUTtJQUNJLHFCQUFBO0VDQVY7QUFDRjs7QURJQTtFQUVRO0lBQ0ksd0JBQUE7RUNIVjtBQUNGOztBRE9BO0VBRVE7SUFDSSx1QkFBQTtFQ05WOztFRFVNO0lBQ0kscUJBQUE7RUNQVjtBQUNGOztBRFdBO0VBRVE7SUFDSSxzQkFBQTtFQ1ZWOztFRGNNO0lBQ0ksc0JBQUE7RUNYVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vcm9sZXMvY3JlYXRlLXJvbGUvY3JlYXRlLXJvbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBkYXRlLWhlYWRlciB7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG5cclxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDBweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDRweCA4cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNGb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYmFzaWMtaGVhZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnVpLmdyaWQgaDMge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4udWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzM4NjdiMTtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcclxuICAgIC51aS5ncmlkLmVkaXQtY2hlY2tib3gtbGlzdCB7XHJcbiAgICAgICAgLnRocmVlLndpZGUuY29sdW1uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAudWkuZ3JpZC5lZGl0LWNoZWNrYm94LWxpc3Qge1xyXG4gICAgICAgIC50aHJlZS53aWRlLmNvbHVtbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMS4yNSUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xyXG4gICAgLnVpLmdyaWQuZWRpdC1jaGVja2JveC1saXN0IHtcclxuICAgICAgICAudGhyZWUud2lkZS5jb2x1bW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogNDguNSUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWkuZ3JpZC5ncmlkLWhlYWRlciB7XHJcbiAgICAgICAgLmZvdXIud2lkZS5jb2x1bW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgIC51aS5ncmlkLmVkaXQtY2hlY2tib3gtbGlzdCB7XHJcbiAgICAgICAgLnRocmVlLndpZGUuY29sdW1uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWkuZ3JpZC5ncmlkLWhlYWRlciB7XHJcbiAgICAgICAgLmZvdXIud2lkZS5jb2x1bW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi51cGRhdGUtaGVhZGVyIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDBweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDRweCA4cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLm91dGVyLWJhc2ljRm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5iYXNpYy1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnVpLmdyaWQgaDMge1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnVpLmhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcbiAgY29sb3I6ICMzODY3YjE7XG59XG4udWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzM4NjdiMTtcbn1cbi51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xuICBjb2xvcjogIzM4NjdiMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gIC51aS5ncmlkLmVkaXQtY2hlY2tib3gtbGlzdCAudGhyZWUud2lkZS5jb2x1bW4ge1xuICAgIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC51aS5ncmlkLmVkaXQtY2hlY2tib3gtbGlzdCAudGhyZWUud2lkZS5jb2x1bW4ge1xuICAgIHdpZHRoOiAzMS4yNSUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XG4gIC51aS5ncmlkLmVkaXQtY2hlY2tib3gtbGlzdCAudGhyZWUud2lkZS5jb2x1bW4ge1xuICAgIHdpZHRoOiA0OC41JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVpLmdyaWQuZ3JpZC1oZWFkZXIgLmZvdXIud2lkZS5jb2x1bW4ge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC51aS5ncmlkLmVkaXQtY2hlY2tib3gtbGlzdCAudGhyZWUud2lkZS5jb2x1bW4ge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudWkuZ3JpZC5ncmlkLWhlYWRlciAuZm91ci53aWRlLmNvbHVtbiB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/roles/create-role/create-role.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/roles/create-role/create-role.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: CreateRoleComponent */

  /***/
  function srcAppLayoutSetupConfigurationRolesCreateRoleCreateRoleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateRoleComponent", function () {
      return CreateRoleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _permissions_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../permissions.json */
    "./src/app/layout/setup-configuration/roles/permissions.json");

    var _permissions_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../permissions.json */
    "./src/app/layout/setup-configuration/roles/permissions.json", 1);
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_services_setup_config_roles_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/setup-config/roles-config.service */
    "./src/app/shared/services/setup-config/roles-config.service.ts");

    var CreateRoleComponent = /*#__PURE__*/function () {
      function CreateRoleComponent(_fb, toastr, roleService, router) {
        _classCallCheck(this, CreateRoleComponent);

        this._fb = _fb;
        this.toastr = toastr;
        this.roleService = roleService;
        this.router = router;
        this.allPermissions = _permissions_json__WEBPACK_IMPORTED_MODULE_4__;
        this.isSubmitted = false;
      }

      _createClass(CreateRoleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createRolePermissionForm();
        }
      }, {
        key: "btnSubmitHandler",
        value: function btnSubmitHandler() {
          var _this12 = this;

          this.isSubmitted = true;

          if (this.rolePermissionForm.invalid) {
            this.toasterMessage('error', 'Role Name & code is required.');
            return;
          }

          var mapped = Object.keys(this.gfc).map(function (key) {
            return {
              name: key,
              data: _this12.gfc[key],
              endpoint: _this12.gfc[key].value
            };
          });
          var prmsn = [];
          mapped.forEach(function (cp) {
            var v = !!cp.data.value;
            var k = cp.name;

            if (k == 'name' || k == 'code') {} else {
              prmsn.push(_defineProperty({}, k, v));
            }
          });
          var data = {
            name: this.gfc.name.value,
            code: this.gfc.code.value,
            permissions: prmsn
          };
          this.roleService.addRole(data).subscribe(function (r) {
            if (r.status) {
              _this12.toasterMessage('success', r.message);

              _this12.rolePermissionForm.reset();

              _this12.router.navigateByUrl('setup-configuration/roles');
            } else {
              _this12.toasterMessage('error', r.message);
            }
          });
        }
      }, {
        key: "createRolePermissionForm",
        value: function createRolePermissionForm() {
          this.rolePermissionForm = this._fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.createPermissions();
        }
      }, {
        key: "createPermissions",
        value: function createPermissions() {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.allPermissions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var formModule = _step.value;
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = formModule.permissions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var formModuleKey = _step2.value;
                  var dsKey = formModuleKey.allow[0];
                  this.rolePermissionForm.addControl(dsKey, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false));
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                    _iterator2["return"]();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "toasterMessage",
        value: function toasterMessage() {
          var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';
          var message = arguments.length > 1 ? arguments[1] : undefined;

          if (type == 'success') {
            this.toastr.success(message, 'Success !', {
              disableTimeOut: false,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          } else if (type == 'error') {
            this.toastr.error(message, 'Server Error !', {
              disableTimeOut: false,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          } else {
            this.toastr.info(message, 'Information !', {
              disableTimeOut: false,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          }
        }
      }, {
        key: "gfc",
        get: function get() {
          return this.rolePermissionForm.controls;
        }
      }]);

      return CreateRoleComponent;
    }();

    CreateRoleComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: src_app_shared_services_setup_config_roles_config_service__WEBPACK_IMPORTED_MODULE_6__["SetupConfigRoleService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    CreateRoleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-role',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-role.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/create-role/create-role.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-role.component.scss */
      "./src/app/layout/setup-configuration/roles/create-role/create-role.component.scss"))["default"]]
    })], CreateRoleComponent);
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSetupConfigurationRolesEditRoleEditRoleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-left: 30px;\n}\n\n.ui.fluid.container {\n  padding: 25px;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n}\n\n.basic-header {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.ui.primary.button.roleActionButton {\n  position: relative;\n  top: -40px;\n}\n\n.ui.checkbox input:checked ~ label {\n  color: #3867b1;\n}\n\n.ui.checkbox input:checked ~ label:before {\n  border-color: #3867b1;\n}\n\n.ui.checkbox input:checked ~ label:after {\n  color: #3867b1;\n}\n\n@media (max-width: 1110px) {\n  .ui.grid.edit-checkbox-list .three.wide.column {\n    width: 25% !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .ui.grid.edit-checkbox-list .three.wide.column {\n    width: 48.5% !important;\n  }\n\n  .ui.grid.grid-header .four.wide.column {\n    width: 50% !important;\n  }\n}\n\n@media (max-width: 480px) {\n  .ui.grid.edit-checkbox-list .three.wide.column {\n    width: 100% !important;\n  }\n\n  .ui.grid.grid-header .four.wide.column {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vcm9sZXMvZWRpdC1yb2xlL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcc2V0dXAtY29uZmlndXJhdGlvblxccm9sZXNcXGVkaXQtcm9sZVxcZWRpdC1yb2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2V0dXAtY29uZmlndXJhdGlvbi9yb2xlcy9lZGl0LXJvbGUvZWRpdC1yb2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURHQTtFQUNJLGlDQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURDSTtFQUNJLHFCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxjQUFBO0FDQ1I7O0FER0E7RUFFUTtJQUNJLHFCQUFBO0VDRFY7QUFDRjs7QURLQTtFQUVRO0lBQ0ksdUJBQUE7RUNKVjs7RURRTTtJQUNJLHFCQUFBO0VDTFY7QUFDRjs7QURTQTtFQUVRO0lBQ0ksc0JBQUE7RUNSVjs7RURZTTtJQUNJLHNCQUFBO0VDVFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL3JvbGVzL2VkaXQtcm9sZS9lZGl0LXJvbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBkYXRlLWhlYWRlciB7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4udWkuZmx1aWQuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNGb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLy8gcGFkZGluZzogMzBweCAxNXB4O1xyXG59XHJcblxyXG4uYmFzaWMtaGVhZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnVpLnByaW1hcnkuYnV0dG9uLnJvbGVBY3Rpb25CdXR0b257XHJcbiAgICBwb3NpdGlvbiA6cmVsYXRpdmU7XHJcbiAgICB0b3A6LTQwcHg7XHJcbn1cclxuXHJcbi51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgY29sb3I6ICMzODY3YjE7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzg2N2IxO1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29sb3I6ICMzODY3YjE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTEwcHgpIHtcclxuICAgIC51aS5ncmlkLmVkaXQtY2hlY2tib3gtbGlzdCB7XHJcbiAgICAgICAgLnRocmVlLndpZGUuY29sdW1uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAudWkuZ3JpZC5lZGl0LWNoZWNrYm94LWxpc3Qge1xyXG4gICAgICAgIC50aHJlZS53aWRlLmNvbHVtbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0OC41JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51aS5ncmlkLmdyaWQtaGVhZGVyIHtcclxuICAgICAgICAuZm91ci53aWRlLmNvbHVtbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnVpLmdyaWQuZWRpdC1jaGVja2JveC1saXN0IHtcclxuICAgICAgICAudGhyZWUud2lkZS5jb2x1bW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51aS5ncmlkLmdyaWQtaGVhZGVyIHtcclxuICAgICAgICAuZm91ci53aWRlLmNvbHVtbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnVwZGF0ZS1oZWFkZXIge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLm91dGVyLWJhc2ljRm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5iYXNpYy1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnVpLnByaW1hcnkuYnV0dG9uLnJvbGVBY3Rpb25CdXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQwcHg7XG59XG5cbi51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xuICBjb2xvcjogIzM4NjdiMTtcbn1cbi51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzg2N2IxO1xufVxuLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDphZnRlciB7XG4gIGNvbG9yOiAjMzg2N2IxO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTExMHB4KSB7XG4gIC51aS5ncmlkLmVkaXQtY2hlY2tib3gtbGlzdCAudGhyZWUud2lkZS5jb2x1bW4ge1xuICAgIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC51aS5ncmlkLmVkaXQtY2hlY2tib3gtbGlzdCAudGhyZWUud2lkZS5jb2x1bW4ge1xuICAgIHdpZHRoOiA0OC41JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVpLmdyaWQuZ3JpZC1oZWFkZXIgLmZvdXIud2lkZS5jb2x1bW4ge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC51aS5ncmlkLmVkaXQtY2hlY2tib3gtbGlzdCAudGhyZWUud2lkZS5jb2x1bW4ge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudWkuZ3JpZC5ncmlkLWhlYWRlciAuZm91ci53aWRlLmNvbHVtbiB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: EditRoleComponent */

  /***/
  function srcAppLayoutSetupConfigurationRolesEditRoleEditRoleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditRoleComponent", function () {
      return EditRoleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _permissions_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../permissions.json */
    "./src/app/layout/setup-configuration/roles/permissions.json");

    var _permissions_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../permissions.json */
    "./src/app/layout/setup-configuration/roles/permissions.json", 1);
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_services_setup_config_roles_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/setup-config/roles-config.service */
    "./src/app/shared/services/setup-config/roles-config.service.ts");

    var EditRoleComponent = /*#__PURE__*/function () {
      function EditRoleComponent(_fb, toastr, roleService, router, activatedRole) {
        _classCallCheck(this, EditRoleComponent);

        this._fb = _fb;
        this.toastr = toastr;
        this.roleService = roleService;
        this.router = router;
        this.activatedRole = activatedRole;
        this.allPermissions = _permissions_json__WEBPACK_IMPORTED_MODULE_4__;
        this.isSubmitted = false;
        this.selectedRoleId = null;
        this.selectedRole = null;
      }

      _createClass(EditRoleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.createRolePermissionForm(null, null, null);
          this.selectedRoleId = this.activatedRole.snapshot.params.id;
          this.roleService.getRole(this.selectedRoleId).subscribe(function (r) {
            if (r.status) {
              _this13.selectedRole = r.data;

              _this13.createRolePermissionForm(r.data.code, r.data.name, r.data.permissions);
            } else {
              _this13.toasterMessage('error', 'Role Name & code is required.');
            }
          });
        }
      }, {
        key: "btnSubmitHandler",
        value: function btnSubmitHandler() {
          var _this14 = this;

          this.isSubmitted = true;

          if (this.rolePermissionForm.invalid) {
            this.toasterMessage('error', 'Role Name & code is required.');
            return;
          }

          var mapped = Object.keys(this.gfc).map(function (key) {
            return {
              name: key,
              data: _this14.gfc[key],
              endpoint: _this14.gfc[key].value
            };
          });
          var prmsn = [];
          mapped.forEach(function (cp) {
            var v = !!cp.data.value;
            var k = cp.name;

            if (k == 'name' || k == 'code') {} else {
              prmsn.push(_defineProperty({}, k, v));
            }
          });
          var data = {
            name: this.gfc.name.value,
            code: this.gfc.code.value,
            permissions: prmsn
          };
          this.roleService.updateRole(this.selectedRoleId, data).subscribe(function (r) {
            if (r.status) {
              _this14.toasterMessage('success', r.msg);

              _this14.rolePermissionForm.reset();

              _this14.router.navigateByUrl('setup-configuration/roles');
            } else {
              _this14.toasterMessage('error', r.message);
            }
          });
        }
      }, {
        key: "createRolePermissionForm",
        value: function createRolePermissionForm(code, name, permissions) {
          this.rolePermissionForm = this._fb.group({
            name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            code: [code, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.createPermissions(permissions);
        }
      }, {
        key: "createPermissions",
        value: function createPermissions(permissions) {
          var _this15 = this;

          permissions = JSON.parse(permissions);
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.allPermissions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var formModule = _step3.value;
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                var _loop = function _loop() {
                  var formModuleKey = _step4.value;
                  var isAllowed = false;
                  var dsKey = formModuleKey.allow[0];

                  if (permissions) {
                    isAllowed = permissions.filter(function (elem) {
                      return elem.hasOwnProperty(dsKey);
                    })[0] || false;
                  }

                  _this15.rolePermissionForm.addControl(dsKey, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](isAllowed[dsKey]));
                };

                for (var _iterator4 = formModule.permissions[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  _loop();
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                    _iterator4["return"]();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                _iterator3["return"]();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      }, {
        key: "toasterMessage",
        value: function toasterMessage() {
          var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';
          var message = arguments.length > 1 ? arguments[1] : undefined;

          if (type == 'success') {
            this.toastr.success(message, 'Success !', {
              disableTimeOut: false,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          } else if (type == 'error') {
            this.toastr.error(message, 'Server Error !', {
              disableTimeOut: false,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          } else {
            this.toastr.info(message, 'Information !', {
              disableTimeOut: false,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          }
        }
      }, {
        key: "gfc",
        get: function get() {
          return this.rolePermissionForm.controls;
        }
      }]);

      return EditRoleComponent;
    }();

    EditRoleComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: src_app_shared_services_setup_config_roles_config_service__WEBPACK_IMPORTED_MODULE_6__["SetupConfigRoleService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    EditRoleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-role',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-role.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-role.component.scss */
      "./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.scss"))["default"]]
    })], EditRoleComponent);
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/roles/permissions.json":
  /*!*******************************************************************!*\
    !*** ./src/app/layout/setup-configuration/roles/permissions.json ***!
    \*******************************************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */

  /***/
  function srcAppLayoutSetupConfigurationRolesPermissionsJson(module) {
    module.exports = JSON.parse("[{\"name\":\"Users\",\"permissions\":[{\"name\":\"List Users\",\"allow\":[\"listUsers\",\"users\"]},{\"name\":\"Create New User\",\"allow\":[\"create-new-user\",\"users/new\"]},{\"name\":\"Update User\",\"allow\":[\"update-user\",\"users\"]},{\"name\":\"List user information\",\"allow\":[\"fetch-new-user\",\"users\"]},{\"name\":\"Update My Profile\",\"allow\":[\"logedin-user-info\",\"user-role-management/update-profile\"]},{\"name\":\"Permissions\",\"allow\":[\"fetch-new-user\",\"users/permissions\"]}]},{\"name\":\"Point of Sale Management\",\"permissions\":[{\"name\":\"List All POS\",\"allow\":[\"organization/pos-list\",\"point-sales-management/list-point-sale\"]},{\"name\":\"Add Point of Sale\",\"allow\":[\"organization/create-agency\",\"point-sales-management/add-point-sale/pos-info\"]},{\"name\":\"Update Point of Sale\",\"allow\":[\"organization/update-agency\",\"point-sales-management/add-point-sale/pos-edit\"]},{\"name\":\"List POS Information\",\"allow\":[\"organization/fetch-pos\",\"btn-edit\"]},{\"name\":\"Delete POS\",\"allow\":[\"organization/delete-pos\",\"btn-delete\"]},{\"name\":\"List Registrations\",\"allow\":[\"registration-list\",\"point-sales-management/registration\"]}]},{\"name\":\"Role/Permissions\",\"permissions\":[{\"name\":\"List All Group Name\",\"allow\":[\"fetch-all-sales\",\"setup-configuration/markup-configuration\"]},{\"name\":\"Add/Update Group Name\",\"allow\":[\"add-sale\",\"setup-configuration/markup-configuration\"]},{\"name\":\"Search Group Name\",\"allow\":[\"search-sales\",\"setup-configuration/markup-configuration\"]},{\"name\":\"Delete Group Name\",\"allow\":[\"delete-sale\",\"setup-configuration/markup-configuration\"]},{\"name\":\"List All Markup Rules\",\"allow\":[\"fetch-all-markups\",\"setup-configuration/markup-configuration\"]},{\"name\":\"Add/Update Markup Rules\",\"allow\":[\"add-markup\",\"setup-configuration/markup-configuration\"]},{\"name\":\"Search Markup Rules\",\"allow\":[\"search-markups\",\"setup-configuration/markup-configuration\"]},{\"name\":\"Delete Markup Rules\",\"allow\":[\"delete-markup\",\"setup-configuration/markup-configuration\"]},{\"name\":\"List All Roles\",\"allow\":[\"roles/list\",\"setup-configuration/roles\"]},{\"name\":\"Add/Update Roles\",\"allow\":[\"roles/add\",\"setup-configuration/roles\"]},{\"name\":\"List Roles Information\",\"allow\":[\"roles/get\",\"setup-configuration/roles\"]},{\"name\":\"Delete Roles\",\"allow\":[\"roles/delete\",\"setup-configuration/roles\"]},{\"name\":\"List All Tour Codes\",\"allow\":[\"fetch-all-tourcodes\",\"setup-configuration/airline-deals\"]},{\"name\":\"Add Tour Code\",\"allow\":[\"create-new-tourcode\",\"setup-configuration/airline-deals\"]},{\"name\":\"Update Tour Code\",\"allow\":[\"update-tourcode\",\"setup-configuration/airline-deals\"]},{\"name\":\"List Tour Code Information\",\"allow\":[\"fetch-tourcode\",\"setup-configuration/airline-deals\"]},{\"name\":\"Delete Tour Code\",\"allow\":[\"remove-tourcode\",\"setup-configuration/airline-deals\"]},{\"name\":\"List All Tour Commissions\",\"allow\":[\"fetch-all-commissions\",\"setup-configuration/airline-deals\"]},{\"name\":\"Add Tour Commission\",\"allow\":[\"create-new-commission\",\"setup-configuration/airline-deals\"]},{\"name\":\"Update Tour Commission\",\"allow\":[\"update-commission\",\"setup-configuration/airline-deals\"]},{\"name\":\"List Tour Commission Information\",\"allow\":[\"fetch-commission\",\"setup-configuration/airline-deals\"]},{\"name\":\"Delete Tour Commission\",\"allow\":[\"remove-commission\",\"setup-configuration/airline-deals\"]},{\"name\":\"List All Tour Routes\",\"allow\":[\"fetch-all-routes\",\"setup-configuration/airline-deals\"]},{\"name\":\"Add Tour Route\",\"allow\":[\"create-new-routes\",\"setup-configuration/airline-deals\"]},{\"name\":\"Update Tour Route\",\"allow\":[\"update-routes\",\"setup-configuration/airline-deals\"]},{\"name\":\"List Tour Route Information\",\"allow\":[\"fetch-routes\",\"setup-configuration/airline-deals\"]},{\"name\":\"Delete Tour Route\",\"allow\":[\"remove-routes\",\"setup-configuration/airline-deals\"]},{\"name\":\"List All Suppliers\",\"allow\":[\"read-all-supplier\",\"setup-configuration/supplier\"]},{\"name\":\"Update Supplier\",\"allow\":[\"update-supplier\",\"setup-configuration/edit-supplier\"]},{\"name\":\"List All Currencies\",\"allow\":[\"fetch-all-currency\",\"setup-configuration/currency-configuration\"]},{\"name\":\"Add Currency\",\"allow\":[\"create-new-currency\",\"setup-configuration/currency-configuration\"]},{\"name\":\"Update Currency\",\"allow\":[\"update-currency\",\"setup-configuration/currency-configuration\"]},{\"name\":\"List Currency Information\",\"allow\":[\"fetch-currency\",\"setup-configuration/currency-configuration\"]},{\"name\":\"Delete Currency\",\"allow\":[\"remove-currency\",\"setup-configuration/currency-configuration\"]},{\"name\":\"List All Email Templates\",\"allow\":[\"fetch-all-email-template\",\"setup-configuration/email-templates\"]},{\"name\":\"Update Email Templates\",\"allow\":[\"update-email-template\",\"setup-configuration/email-templates\"]},{\"name\":\"List Email Templates Information\",\"allow\":[\"fetch-email-template\",\"setup-configuration/email-templates\"]}]},{\"name\":\"Bookings\",\"permissions\":[{\"name\":\"List All Bookings\",\"allow\":[\"fetch-all-bookings\",\"bookings\"]},{\"name\":\"Export Bookings\",\"allow\":[\"export-bookings\",\"bookings\"]}]},{\"name\":\"Accounts\",\"permissions\":[{\"name\":\"List All Transactions\",\"allow\":[\"transaction-list\",\"accounts/transactions\"]},{\"name\":\"Export Transactions\",\"allow\":[\"export-transaction\",\"accounts/transactions\"]},{\"name\":\"Add Agent Transaction\",\"allow\":[\"make-agent-transaction\",\"accounts/transactions\"]},{\"name\":\"List Top UP\",\"allow\":[\"get-topup-view\",\"accounts/transactions\"]},{\"name\":\"Update Top UP\",\"allow\":[\"update-topup-request\",\"accounts/transactions\"]},{\"name\":\"List Floating Deposit\",\"allow\":[\"get-topup-view\",\"accounts/transactions\"]},{\"name\":\"Update Top UP\",\"allow\":[\"update-topup-request\",\"accounts/transactions\"]}]},{\"name\":\"Report\",\"permissions\":[{\"name\":\"List All Bookings\",\"allow\":[\"fetch-all-bookings\",\"report/booking-report\"]},{\"name\":\"Search Bookings\",\"allow\":[\"search-bookings-by-organisation\",\"report/booking-report\"]},{\"name\":\"Export Booking Report\",\"allow\":[\"export-booking-report\",\"report/booking-report\"]},{\"name\":\"Search Segments\",\"allow\":[\"search-segments\",\"report/segment-report\"]},{\"name\":\"MIS (Total Count)\",\"allow\":[\"Flight-Search-Log/count\",\"report/mis-report\"]},{\"name\":\"MIS (Month Wise)\",\"allow\":[\"Flight-Search-Log/monthlwise\",\"report/mis-report\"]},{\"name\":\"Search Log\",\"allow\":[\"fetch-all-Flight-Search-Log\",\"report/search-log-report\"]},{\"name\":\"List All Audit Trail Log\",\"allow\":[\"fetch-all-Audit-Trail\",\"report/audit-report\"]},{\"name\":\"Search Audit Trail Log\",\"allow\":[\"get-audit-trails\",\"report/audit-report\"]},{\"name\":\"Ticket Log\",\"allow\":[\"search-tickets-new\",\"report/ticket-report\"]},{\"name\":\"Dynamic Report\",\"allow\":[\"dynamic-report-data\",\"report/dynamic-report\"]}]},{\"name\":\"Flight\",\"permissions\":[{\"name\":\"Search\",\"allow\":[\"flights-search\",\"search/flights\"]},{\"name\":\"Book\",\"allow\":[\"flight-booking\",\"search/flights\"]},{\"name\":\"Ticket\",\"allow\":[\"flight-ticket\",\"search/flights\"]},{\"name\":\"Cancel\",\"allow\":[\"flight-cancel\",\"search/flights\"]},{\"name\":\"Reshop\",\"allow\":[\"flight-amend\",\"search/flights\"]},{\"name\":\"Refund\",\"allow\":[\"flight-refund\",\"search/flights\"]},{\"name\":\"Markup\",\"allow\":[\"flight-markup\",\"search/flights\"]},{\"name\":\"Split PNR\",\"allow\":[\"flight-markup\",\"search/flights\"]},{\"name\":\"Void\",\"allow\":[\"flight-void\",\"search/flights\"]},{\"name\":\"Reprice\",\"allow\":[\"flight-reprice\",\"search/flights\"]},{\"name\":\"ReIssue\",\"allow\":[\"flight-ReIssue\",\"search/flights\"]}]},{\"name\":\"Hotels\",\"permissions\":[{\"name\":\"Search\",\"allow\":[\"hotel-search\",\"search/hotels\"]},{\"name\":\"Book\",\"allow\":[\"hotel-room-book\",\"search/hotels\"]},{\"name\":\"Details\",\"allow\":[\"hotel-room-details\",\"search/hotels\"]},{\"name\":\"Cancel\",\"allow\":[\"hotel-booking-cancel\",\"search/hotels\"]}]},{\"name\":\"Cars\",\"permissions\":[{\"name\":\"Search\",\"allow\":[\"car-search\",\"search/cars\"]},{\"name\":\"Book\",\"allow\":[\"car-book\",\"search/cars\"]},{\"name\":\"Details\",\"allow\":[\"car-details\",\"search/cars\"]},{\"name\":\"Cancel\",\"allow\":[\"car-cancel\",\"search/cars\"]}]},{\"name\":\"Extras\",\"permissions\":[{\"name\":\"List Organisations\",\"allow\":[\"fetch-all-organization\",\"users\"]},{\"name\":\"List Roles \",\"allow\":[\"roles/list\",\"users\"]},{\"name\":\"List Suppliers\",\"allow\":[\"fetch-all-supplier\",\"report/booking-report\"]},{\"name\":\"List Countries\",\"allow\":[\"get-country\",\"users\"]},{\"name\":\"Toggle Status\",\"allow\":[\"toggle-status\",\"report/booking-report\"]},{\"name\":\"List Currency\",\"allow\":[\"get-currency-list\",\"accounts/transactions\"]},{\"name\":\"List Airport\",\"allow\":[\"get-airports-cache\",\"report/segment-report\"]},{\"name\":\"List Airlines\",\"allow\":[\"get-airlines-list\",\"report/segment-report\"]}]}]");
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/roles/roles-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/roles/roles-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: RolesRoutingModule */

  /***/
  function srcAppLayoutSetupConfigurationRolesRolesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RolesRoutingModule", function () {
      return RolesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./roles.component */
    "./src/app/layout/setup-configuration/roles/roles.component.ts");
    /* harmony import */


    var _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-role/create-role.component */
    "./src/app/layout/setup-configuration/roles/create-role/create-role.component.ts");
    /* harmony import */


    var _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-role/edit-role.component */
    "./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.ts");

    var routes = [{
      path: '',
      component: _roles_component__WEBPACK_IMPORTED_MODULE_3__["RolesComponent"]
    }, {
      path: 'list',
      redirectTo: '',
      pathMatch: 'prefix'
    }, // { path: 'list', component: RolesComponent },
    {
      path: 'create',
      component: _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_4__["CreateRoleComponent"]
    }, {
      path: 'edit/:id',
      component: _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_5__["EditRoleComponent"]
    }];

    var RolesRoutingModule = function RolesRoutingModule() {
      _classCallCheck(this, RolesRoutingModule);
    };

    RolesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RolesRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/roles/roles.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/layout/setup-configuration/roles/roles.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSetupConfigurationRolesRolesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.action {\n  display: inline-block;\n}\n.action .icon {\n  width: 16px;\n  margin: 0px 10px;\n  cursor: pointer;\n}\n.action .icon img {\n  width: 16px;\n}\nh3 {\n  margin-top: 24px !important;\n}\n.roleActionButton {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n.roleActionButton span {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n.goto_list {\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n  color: #181B20;\n  font-size: 14px;\n}\n.goto_list span {\n  color: #181B20;\n}\n.goto-link {\n  position: relative;\n  top: 8px;\n}\n.mar-right-15 {\n  margin-right: 15px;\n}\n.mar-top-15 {\n  margin-top: 15px;\n}\n.permission-block {\n  margin-top: 15px;\n  display: block;\n}\n.padd-left-15 {\n  padding-left: 15px;\n}\n.showOnlyParent {\n  width: 136px;\n  float: left;\n  padding-bottom: 8px;\n}\n.action .icon.edit_icon {\n  margin: 0px;\n}\n.ui.table {\n  font-size: 12px;\n}\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n  padding-left: 0px;\n}\n.ui.form .three.wide.field,\n.ui.form .field > .checkbox-field {\n  margin-bottom: 16px;\n}\n.search-section {\n  padding-bottom: 30px;\n}\n.outer-segment {\n  margin: 0px;\n}\n.outer-segment .markup_list {\n  padding: 0px 24px;\n}\n.outer-segment .markup_list .markup_title {\n  margin: 0;\n  font-style: normal;\n  font-weight: 400 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #4F4F4F;\n}\ni.icon {\n  margin-top: 24px;\n}\n.role-perm-label {\n  display: block;\n  width: 100%;\n}\n.role-perm-block {\n  border: 1px solid #DADCE0;\n  box-sizing: border-box;\n  border-radius: 10px;\n  margin: 8px;\n}\n.role-perm-block i.icon {\n  margin-top: 0px;\n}\n.role-perm-block .pos_access-rights {\n  color: rgba(24, 27, 32, 0.7);\n  font-size: 13px;\n}\n.role-perm-block .pos_access-rights.head {\n  color: #181B20;\n  font-weight: 500 !important;\n  padding-bottom: 25px;\n}\n.role-perm-block .ui.checkbox label:before {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n}\n.role-perm-block .ui.checkbox label:after {\n  left: -1px;\n}\n.role-perm-block .ui.checkbox input:checked ~ label span {\n  color: #181B20;\n}\n.role-perm-block .ui.checkbox input:checked ~ label:before {\n  border: none;\n}\n.role-perm-block .ui.checkbox input:checked ~ .box:before {\n  border: none;\n}\n.role-perm-block .ui.checkbox.inner-checkbox label:after {\n  font-size: 10px;\n}\n.role-perm-block .ui.checkbox.inner-checkbox input:checked ~ label:before {\n  background: #437ADA;\n}\n.role-perm-block .ui.checkbox.inner-checkbox input:checked ~ label:after {\n  color: #fff;\n}\n.role-perm-block .ui.checkbox.inner-checkbox input:checked ~ .box:after {\n  color: #fff;\n}\n.role-perm-block .ui.checkbox.outer-checkbox {\n  width: 100%;\n}\n.role-perm-block .ui.checkbox.outer-checkbox label i.icon {\n  cursor: pointer;\n  float: right;\n}\n.role-perm-block .ui.checkbox.outer-checkbox input:checked ~ label .pos_access-rights.head {\n  color: #181B20;\n  font-weight: 700 !important;\n}\n.role-perm-block .ui.checkbox.outer-checkbox input:checked ~ label:before, .role-perm-block .ui.checkbox.outer-checkbox input:checked ~ .box:before {\n  border: 1px solid rgba(6, 40, 98, 0.3);\n}\n.role-perm-block .ui.checkbox.outer-checkbox input:checked ~ .box:after, .role-perm-block .ui.checkbox.outer-checkbox input:checked ~ label:after {\n  content: \"•\";\n  font-size: 36px;\n  top: -5px;\n  color: #1B61DD;\n}\n.mt-12 {\n  margin: 12px;\n}\n.ui.segment {\n  margin-bottom: 60px;\n}\n.search-section {\n  padding: 0px 30px;\n  text-align: right;\n}\n.search-section .eight.wide.field .main_head {\n  text-align: left;\n  font-weight: 500 !important;\n  font-size: 13px;\n  line-height: 15px;\n  color: #1B1F26;\n}\n.search-section .list-code {\n  text-align: left;\n  padding: 0px !important;\n}\n.save-btn-block {\n  text-align: right;\n  position: relative;\n  top: 96px;\n  right: -24px;\n}\n.save-btn-block .ui.reset.button.tourCode_btn {\n  margin-right: 14px;\n}\n.child-container {\n  display: inline-block;\n  min-width: 188px;\n}\n.child-obj-block {\n  border: 1px solid #DADCE0;\n  box-sizing: border-box;\n  border-radius: 10px;\n  margin: 8px;\n  padding: 8px;\n  max-width: 94px;\n}\n.child-obj-block .ui.checkbox {\n  display: block;\n  padding: 8px;\n}\n.ui.red.button {\n  position: relative;\n  top: 3px;\n  left: 8px;\n}\n.ui.primary.button {\n  min-width: auto;\n}\n.bookings_btn-panel .primary.button {\n  margin-top: 24px !important;\n}\n@media (max-width: 1440px) {\n  .bookings_btn-panel .roleActionButton {\n    margin-right: 0px;\n    margin-top: 24px;\n  }\n\n  .search-section .eight.wide.field {\n    padding: 0px;\n  }\n\n  .child-container {\n    min-width: auto;\n  }\n\n  .save-btn-block {\n    right: -30px;\n  }\n}\n@media (max-width: 1280px) {\n  .save-btn-block {\n    right: -22px;\n  }\n}\n@media (min-width: 767px) {\n  td span:first-child {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .ui.table:not(.unstackable) tbody {\n    width: 100% !important;\n  }\n  .ui.table:not(.unstackable) tbody tr td span {\n    display: inline-block;\n    width: 50% !important;\n    font-weight: 400;\n    text-transform: capitalize;\n  }\n  .ui.table:not(.unstackable) tbody tr td span.head {\n    font-weight: 700;\n    width: 25% !important;\n  }\n  .ui.table:not(.unstackable) thead {\n    display: none;\n  }\n  .ui.table:not(.unstackable) td.align-btn {\n    position: absolute;\n    top: auto;\n    right: 60px;\n    bottom: auto;\n    margin-top: -48px;\n  }\n}\n@media (max-width: 480px) {\n  .ui.table:not(.unstackable) td.align-btn {\n    position: relative;\n    text-align: right !important;\n    top: auto;\n    right: 12px;\n    margin-top: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vcm9sZXMvcm9sZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL3JvbGVzL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcc2V0dXAtY29uZmlndXJhdGlvblxccm9sZXNcXHJvbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLHFCQUFBO0FERUo7QUNESTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURHUjtBQ0ZRO0VBQ0ksV0FBQTtBRElaO0FDQ0E7RUFDSSwyQkFBQTtBREVKO0FDQ0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FERUo7QUNESTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURHUjtBQ0NBO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBREVKO0FDREk7RUFDSSxjQUFBO0FER1I7QUNDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBREVKO0FDQ0E7RUFDSSxrQkFBQTtBREVKO0FDQ0E7RUFDSSxnQkFBQTtBREVKO0FDQ0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QURFSjtBQ0NBO0VBQ0ksa0JBQUE7QURFSjtBQ0NBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBREVKO0FDS0E7RUFDSSxXQUFBO0FERko7QUNLQTtFQUNJLGVBQUE7QURGSjtBQ0tBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURGSjtBQ0tBOztFQUVJLG1CQUFBO0FERko7QUNLQTtFQUNJLG9CQUFBO0FERko7QUNLQTtFQUNJLFdBQUE7QURGSjtBQ0dJO0VBQ0ksaUJBQUE7QUREUjtBQ0VRO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEQVo7QUNLQTtFQUNJLGdCQUFBO0FERko7QUNLQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FERko7QUNLQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURGSjtBQ0lJO0VBQ0ksZUFBQTtBREZSO0FDSUk7RUFDSSw0QkFBQTtFQUNBLGVBQUE7QURGUjtBQ0dRO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUREWjtBQ01ZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBREpoQjtBQ01ZO0VBQ0ksVUFBQTtBREpoQjtBQ1FZO0VBQ0ksY0FBQTtBRE5oQjtBQ1FZO0VBQ0ksWUFBQTtBRE5oQjtBQ1NRO0VBQ0ksWUFBQTtBRFBaO0FDWVk7RUFDSSxlQUFBO0FEVmhCO0FDY1k7RUFDSSxtQkFBQTtBRFpoQjtBQ2NZO0VBQ0ksV0FBQTtBRFpoQjtBQ2dCWTtFQUNJLFdBQUE7QURkaEI7QUNrQkk7RUFDSSxXQUFBO0FEaEJSO0FDa0JZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QURoQmhCO0FDb0JZO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0FEbEJoQjtBQ3FCUTtFQUNJLHNDQUFBO0FEbkJaO0FDcUJRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBRG5CWjtBQ3dCQTtFQUNJLFlBQUE7QURyQko7QUN3QkE7RUFDSSxtQkFBQTtBRHJCSjtBQ3dCQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QURyQko7QUNzQkk7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRHBCUjtBQ3NCSTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7QURwQlI7QUN3QkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QURyQko7QUNzQkk7RUFDSSxrQkFBQTtBRHBCUjtBQ3dCQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QURyQko7QUN3QkE7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QURyQko7QUNzQkk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBRHBCUjtBQ3dCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QURyQko7QUN3QkE7RUFDSSxlQUFBO0FEckJKO0FDd0JBO0VBQ0ksMkJBQUE7QURyQko7QUN3QkE7RUFFUTtJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7RUR0QlY7O0VDMEJNO0lBQ0ksWUFBQTtFRHZCVjs7RUMwQkU7SUFDSSxlQUFBO0VEdkJOOztFQ3lCRTtJQUNJLFlBQUE7RUR0Qk47QUFDRjtBQ3lCQTtFQUNJO0lBQ0ksWUFBQTtFRHZCTjtBQUNGO0FDMEJBO0VBRVE7SUFDSSxhQUFBO0VEekJWO0FBQ0Y7QUM2QkE7RUFFUTtJQUNJLHNCQUFBO0VENUJWO0VDNkJVO0lBQ0kscUJBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0lBQ0EsMEJBQUE7RUQzQmQ7RUM2QlU7SUFDSSxnQkFBQTtJQUNBLHFCQUFBO0VEM0JkO0VDOEJNO0lBQ0ksYUFBQTtFRDVCVjtFQzhCTTtJQUNJLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUQ1QlY7QUFDRjtBQ2dDQTtFQUVRO0lBQ0ksa0JBQUE7SUFDQSw0QkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUQvQlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmFjdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hY3Rpb24gLmljb24ge1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFjdGlvbiAuaWNvbiBpbWcge1xuICB3aWR0aDogMTZweDtcbn1cblxuaDMge1xuICBtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yb2xlQWN0aW9uQnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xufVxuLnJvbGVBY3Rpb25CdXR0b24gc3BhbiB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ290b19saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMxODFCMjA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5nb3RvX2xpc3Qgc3BhbiB7XG4gIGNvbG9yOiAjMTgxQjIwO1xufVxuXG4uZ290by1saW5rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhweDtcbn1cblxuLm1hci1yaWdodC0xNSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLm1hci10b3AtMTUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucGVybWlzc2lvbi1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGFkZC1sZWZ0LTE1IHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uc2hvd09ubHlQYXJlbnQge1xuICB3aWR0aDogMTM2cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG4uYWN0aW9uIC5pY29uLmVkaXRfaWNvbiB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4udWkudGFibGUge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi51aS5mb3JtIC5maWVsZCA+IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6ICMxODFCMjA7XG4gIG1hcmdpbjogMHB4IDBweCA4cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCxcbi51aS5mb3JtIC5maWVsZCA+IC5jaGVja2JveC1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5zZWFyY2gtc2VjdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4ub3V0ZXItc2VnbWVudCB7XG4gIG1hcmdpbjogMHB4O1xufVxuLm91dGVyLXNlZ21lbnQgLm1hcmt1cF9saXN0IHtcbiAgcGFkZGluZzogMHB4IDI0cHg7XG59XG4ub3V0ZXItc2VnbWVudCAubWFya3VwX2xpc3QgLm1hcmt1cF90aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGNvbG9yOiAjNEY0RjRGO1xufVxuXG5pLmljb24ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4ucm9sZS1wZXJtLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucm9sZS1wZXJtLWJsb2NrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RBRENFMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA4cHg7XG59XG4ucm9sZS1wZXJtLWJsb2NrIGkuaWNvbiB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnBvc19hY2Nlc3MtcmlnaHRzIHtcbiAgY29sb3I6IHJnYmEoMjQsIDI3LCAzMiwgMC43KTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnJvbGUtcGVybS1ibG9jayAucG9zX2FjY2Vzcy1yaWdodHMuaGVhZCB7XG4gIGNvbG9yOiAjMTgxQjIwO1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3ggbGFiZWw6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3ggbGFiZWw6YWZ0ZXIge1xuICBsZWZ0OiAtMXB4O1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHNwYW4ge1xuICBjb2xvcjogIzE4MUIyMDtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUge1xuICBib3JkZXI6IG5vbmU7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmJveDpiZWZvcmUge1xuICBib3JkZXI6IG5vbmU7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveC5pbm5lci1jaGVja2JveCBsYWJlbDphZnRlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94LmlubmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjNDM3QURBO1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3guaW5uZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmFmdGVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveC5pbm5lci1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmJveDphZnRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3gub3V0ZXItY2hlY2tib3gge1xuICB3aWR0aDogMTAwJTtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94Lm91dGVyLWNoZWNrYm94IGxhYmVsIGkuaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3gub3V0ZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5wb3NfYWNjZXNzLXJpZ2h0cy5oZWFkIHtcbiAgY29sb3I6ICMxODFCMjA7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94Lm91dGVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUsIC5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94Lm91dGVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuYm94OmJlZm9yZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNiwgNDAsIDk4LCAwLjMpO1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3gub3V0ZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5ib3g6YWZ0ZXIsIC5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94Lm91dGVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4oCiXCI7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgdG9wOiAtNXB4O1xuICBjb2xvcjogIzFCNjFERDtcbn1cblxuLm10LTEyIHtcbiAgbWFyZ2luOiAxMnB4O1xufVxuXG4udWkuc2VnbWVudCB7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5zZWFyY2gtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5zZWFyY2gtc2VjdGlvbiAuZWlnaHQud2lkZS5maWVsZCAubWFpbl9oZWFkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzFCMUYyNjtcbn1cbi5zZWFyY2gtc2VjdGlvbiAubGlzdC1jb2RlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zYXZlLWJ0bi1ibG9jayB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOTZweDtcbiAgcmlnaHQ6IC0yNHB4O1xufVxuLnNhdmUtYnRuLWJsb2NrIC51aS5yZXNldC5idXR0b24udG91ckNvZGVfYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xufVxuXG4uY2hpbGQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDE4OHB4O1xufVxuXG4uY2hpbGQtb2JqLWJsb2NrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RBRENFMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWF4LXdpZHRoOiA5NHB4O1xufVxuLmNoaWxkLW9iai1ibG9jayAudWkuY2hlY2tib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4O1xufVxuXG4udWkucmVkLmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDhweDtcbn1cblxuLnVpLnByaW1hcnkuYnV0dG9uIHtcbiAgbWluLXdpZHRoOiBhdXRvO1xufVxuXG4uYm9va2luZ3NfYnRuLXBhbmVsIC5wcmltYXJ5LmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuYm9va2luZ3NfYnRuLXBhbmVsIC5yb2xlQWN0aW9uQnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICB9XG5cbiAgLnNlYXJjaC1zZWN0aW9uIC5laWdodC53aWRlLmZpZWxkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAuY2hpbGQtY29udGFpbmVyIHtcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gIH1cblxuICAuc2F2ZS1idG4tYmxvY2sge1xuICAgIHJpZ2h0OiAtMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAuc2F2ZS1idG4tYmxvY2sge1xuICAgIHJpZ2h0OiAtMjJweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIHRkIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudWkudGFibGU6bm90KC51bnN0YWNrYWJsZSkgdGJvZHkge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLnRhYmxlOm5vdCgudW5zdGFja2FibGUpIHRib2R5IHRyIHRkIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuICAudWkudGFibGU6bm90KC51bnN0YWNrYWJsZSkgdGJvZHkgdHIgdGQgc3Bhbi5oZWFkIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcbiAgfVxuICAudWkudGFibGU6bm90KC51bnN0YWNrYWJsZSkgdGhlYWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnVpLnRhYmxlOm5vdCgudW5zdGFja2FibGUpIHRkLmFsaWduLWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogYXV0bztcbiAgICByaWdodDogNjBweDtcbiAgICBib3R0b206IGF1dG87XG4gICAgbWFyZ2luLXRvcDogLTQ4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudWkudGFibGU6bm90KC51bnN0YWNrYWJsZSkgdGQuYWxpZ24tYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICB0b3A6IGF1dG87XG4gICAgcmlnaHQ6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgfVxufSIsIi5hY3Rpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLmljb24ge1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaDMge1xyXG4gICAgbWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm9sZUFjdGlvbkJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmdvdG9fbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZ290by1saW5rIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogOHB4O1xyXG59XHJcblxyXG4ubWFyLXJpZ2h0LTE1IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLm1hci10b3AtMTUge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnBlcm1pc3Npb24tYmxvY2sge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucGFkZC1sZWZ0LTE1IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLnNob3dPbmx5UGFyZW50IHtcclxuICAgIHdpZHRoOiAxMzZweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG5cclxuLy8gLnVpLmJvdHRvbS5hdHRhY2hlZC50YWIge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4uYWN0aW9uIC5pY29uLmVkaXRfaWNvbiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnVpLnRhYmxle1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIC5maWVsZD5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgIG1hcmdpbjogMHB4IDBweCA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQsXHJcbi51aS5mb3JtIC5maWVsZD4uY2hlY2tib3gtZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ub3V0ZXItc2VnbWVudCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIC5tYXJrdXBfbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDI0cHg7XHJcbiAgICAgICAgLm1hcmt1cF90aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiM0RjRGNEY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pLmljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG5cclxuLnJvbGUtcGVybS1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucm9sZS1wZXJtLWJsb2NrIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQURDRTA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG5cclxuICAgIGkuaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLnBvc19hY2Nlc3MtcmlnaHRzIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNCwgMjcsIDMyLCAwLjcpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAmLmhlYWQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWkuY2hlY2tib3gge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmNoZWNrZWR+bGFiZWwge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpjaGVja2Vkfi5ib3g6YmVmb3JlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICAudWkuY2hlY2tib3guaW5uZXItY2hlY2tib3gge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Y2hlY2tlZH5sYWJlbCB7XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0MzdBREE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpjaGVja2Vkfi5ib3gge1xyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVpLmNoZWNrYm94Lm91dGVyLWNoZWNrYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGkuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Y2hlY2tlZH5sYWJlbCB7XHJcbiAgICAgICAgICAgIC5wb3NfYWNjZXNzLXJpZ2h0cy5oZWFkIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmNoZWNrZWR+bGFiZWw6YmVmb3JlLCBpbnB1dDpjaGVja2Vkfi5ib3g6YmVmb3JlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2LCA0MCwgOTgsIDAuMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmNoZWNrZWR+LmJveDphZnRlciwgaW5wdXQ6Y2hlY2tlZH5sYWJlbDphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXDIwMjInO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMxQjYxREQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubXQtMTIge1xyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG59XHJcblxyXG4udWkuc2VnbWVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC5laWdodC53aWRlLmZpZWxkIC5tYWluX2hlYWQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICBjb2xvcjogIzFCMUYyNjtcclxuICAgIH1cclxuICAgIC5saXN0LWNvZGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zYXZlLWJ0bi1ibG9jayB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogOTZweDtcclxuICAgIHJpZ2h0OiAtMjRweDtcclxuICAgIC51aS5yZXNldC5idXR0b24udG91ckNvZGVfYnRuIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaGlsZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAxODhweDtcclxufVxyXG5cclxuLmNoaWxkLW9iai1ibG9jayB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREFEQ0UwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG1heC13aWR0aDogOTRweDtcclxuICAgIC51aS5jaGVja2JveCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkucmVkLmJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgbGVmdDogOHB4O1xyXG59XHJcblxyXG4udWkucHJpbWFyeS5idXR0b257XHJcbiAgICBtaW4td2lkdGg6YXV0bztcclxufVxyXG5cclxuLmJvb2tpbmdzX2J0bi1wYW5lbCAucHJpbWFyeS5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDoyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgICAgIC5yb2xlQWN0aW9uQnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgICAgIC5laWdodC53aWRlLmZpZWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGlsZC1jb250YWluZXIge1xyXG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgIC5zYXZlLWJ0bi1ibG9jayB7XHJcbiAgICAgICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAuc2F2ZS1idG4tYmxvY2sge1xyXG4gICAgICAgIHJpZ2h0OiAtMjJweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC51aS50YWJsZTpub3QoLnVuc3RhY2thYmxlKSB7XHJcbiAgICAgICAgdGJvZHkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ciB0ZCBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ciB0ZCBzcGFuLmhlYWQge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRkLmFsaWduLWJ0biB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICByaWdodDogNjBweDtcclxuICAgICAgICAgICAgYm90dG9tOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnVpLnRhYmxlOm5vdCgudW5zdGFja2FibGUpIHtcclxuICAgICAgICB0ZC5hbGlnbi1idG4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/roles/roles.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/layout/setup-configuration/roles/roles.component.ts ***!
    \*********************************************************************/

  /*! exports provided: RolesComponent */

  /***/
  function srcAppLayoutSetupConfigurationRolesRolesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RolesComponent", function () {
      return RolesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_services_setup_config_roles_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/setup-config/roles-config.service */
    "./src/app/shared/services/setup-config/roles-config.service.ts");

    var RolesComponent = /*#__PURE__*/function () {
      function RolesComponent(roleService, toastr) {
        _classCallCheck(this, RolesComponent);

        this.roleService = roleService;
        this.toastr = toastr;
        this.loading = false;
      }

      _createClass(RolesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchRoles();
        }
      }, {
        key: "fetchRoles",
        value: function fetchRoles() {
          var _this16 = this;

          this.loading = true;
          this.roleService.getRoles().subscribe(function (res) {
            _this16.roles = res.data;
          }, function (err) {
            _this16.toasterMessage('error', err);
          });
        }
      }, {
        key: "delete",
        value: function _delete(role) {
          var _this17 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(function (result) {
            if (result.value) {
              _this17.roleService.deleteRole(role).subscribe(function (r) {
                if (r.status) {
                  _this17.roles.filter(function (value, index, arr) {
                    if (role === value['role_id']) {
                      arr.splice(index, 1);
                    }
                  });

                  _this17.toasterMessage('success', 'Role deleted successfully');
                } else {
                  _this17.toasterMessage('error', r.msg);
                }
              }, function (err) {
                _this17.toasterMessage('error', err);
              });
            }
          });
        }
      }, {
        key: "toasterMessage",
        value: function toasterMessage() {
          var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';
          var message = arguments.length > 1 ? arguments[1] : undefined;

          if (type == 'success') {
            this.toastr.success(message, 'Success !', {
              disableTimeOut: false,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          } else if (type == 'error') {
            this.toastr.error(message, 'Server Error !', {
              disableTimeOut: false,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          } else {
            this.toastr.info(message, 'Information !', {
              disableTimeOut: false,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          }
        }
      }]);

      return RolesComponent;
    }();

    RolesComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_setup_config_roles_config_service__WEBPACK_IMPORTED_MODULE_4__["SetupConfigRoleService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    RolesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-roles',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./roles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/roles.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./roles.component.scss */
      "./src/app/layout/setup-configuration/roles/roles.component.scss"))["default"]]
    })], RolesComponent);
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/roles/roles.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/layout/setup-configuration/roles/roles.module.ts ***!
    \******************************************************************/

  /*! exports provided: RolesModule */

  /***/
  function srcAppLayoutSetupConfigurationRolesRolesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RolesModule", function () {
      return RolesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _roles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./roles-routing.module */
    "./src/app/layout/setup-configuration/roles/roles-routing.module.ts");
    /* harmony import */


    var _roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./roles.component */
    "./src/app/layout/setup-configuration/roles/roles.component.ts");
    /* harmony import */


    var _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./create-role/create-role.component */
    "./src/app/layout/setup-configuration/roles/create-role/create-role.component.ts");
    /* harmony import */


    var _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./edit-role/edit-role.component */
    "./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.ts");

    var RolesModule = function RolesModule() {
      _classCallCheck(this, RolesModule);
    };

    RolesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_roles_component__WEBPACK_IMPORTED_MODULE_6__["RolesComponent"], _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_7__["CreateRoleComponent"], _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_8__["EditRoleComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _roles_routing_module__WEBPACK_IMPORTED_MODULE_5__["RolesRoutingModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderModule"]]
    })], RolesModule);
    /***/
  },

  /***/
  "./src/app/shared/services/setup-config/roles-config.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/services/setup-config/roles-config.service.ts ***!
    \**********************************************************************/

  /*! exports provided: SetupConfigRoleService */

  /***/
  function srcAppSharedServicesSetupConfigRolesConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetupConfigRoleService", function () {
      return SetupConfigRoleService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SetupConfigRoleService = /*#__PURE__*/function () {
      function SetupConfigRoleService(http) {
        _classCallCheck(this, SetupConfigRoleService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL;
        this.pager = {};
        this.pageOfItems = []; // Http Headers

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      } // GET ALL Roles create by me


      _createClass(SetupConfigRoleService, [{
        key: "getRoles",
        value: function getRoles() {
          return this.http.get("".concat(this.url, "/api/roles/list")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "addRole",
        value: function addRole(formData) {
          return this.http.post("".concat(this.url, "/api/roles/add"), formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "getRole",
        value: function getRole(role_id) {
          return this.http.get("".concat(this.url, "/api/roles/get/").concat(role_id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "updateRole",
        value: function updateRole(role_id, formData) {
          return this.http.put("".concat(this.url, "/api/roles/update/").concat(role_id), formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "deleteRole",
        value: function deleteRole(role_id) {
          return this.http.post("".concat(this.url, "/api/roles/delete/").concat(role_id), "").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // Error handling

      }, {
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
        }
      }]);

      return SetupConfigRoleService;
    }();

    SetupConfigRoleService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    SetupConfigRoleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SetupConfigRoleService);
    /***/
  }
}]);
//# sourceMappingURL=roles-roles-module-es5.js.map