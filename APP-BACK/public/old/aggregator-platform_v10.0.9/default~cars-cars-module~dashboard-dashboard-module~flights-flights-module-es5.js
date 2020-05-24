function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cars-cars-module~dashboard-dashboard-module~flights-flights-module"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js ***!
    \**********************************************************************/

  /*! exports provided: MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardModule, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015CardJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCard", function () {
      return MatCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardActions", function () {
      return MatCardActions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardAvatar", function () {
      return MatCardAvatar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardContent", function () {
      return MatCardContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardFooter", function () {
      return MatCardFooter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardHeader", function () {
      return MatCardHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardImage", function () {
      return MatCardImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardLgImage", function () {
      return MatCardLgImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardMdImage", function () {
      return MatCardMdImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardModule", function () {
      return MatCardModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardSmImage", function () {
      return MatCardSmImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardSubtitle", function () {
      return MatCardSubtitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardTitle", function () {
      return MatCardTitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardTitleGroup", function () {
      return MatCardTitleGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCardXlImage", function () {
      return MatCardXlImage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/card/card.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Content of a card, needed as it's used as a selector in the API.
     * \@docs-private
     */


    var _c0 = ["*", [["mat-card-footer"]]];
    var _c1 = ["*", "mat-card-footer"];
    var _c2 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
    var _c3 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
    var _c4 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["img"]], "*"];
    var _c5 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"];

    var MatCardContent = function MatCardContent() {
      _classCallCheck(this, MatCardContent);
    };

    MatCardContent.ɵfac = function MatCardContent_Factory(t) {
      return new (t || MatCardContent)();
    };

    MatCardContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardContent,
      selectors: [["mat-card-content"], ["", "mat-card-content", ""], ["", "matCardContent", ""]],
      hostAttrs: [1, "mat-card-content"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-card-content, [mat-card-content], [matCardContent]',
          host: {
            'class': 'mat-card-content'
          }
        }]
      }], null, null);
    })();
    /**
     * Title of a card, needed as it's used as a selector in the API.
     * \@docs-private
     */


    var MatCardTitle = function MatCardTitle() {
      _classCallCheck(this, MatCardTitle);
    };

    MatCardTitle.ɵfac = function MatCardTitle_Factory(t) {
      return new (t || MatCardTitle)();
    };

    MatCardTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardTitle,
      selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
      hostAttrs: [1, "mat-card-title"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "mat-card-title, [mat-card-title], [matCardTitle]",
          host: {
            'class': 'mat-card-title'
          }
        }]
      }], null, null);
    })();
    /**
     * Sub-title of a card, needed as it's used as a selector in the API.
     * \@docs-private
     */


    var MatCardSubtitle = function MatCardSubtitle() {
      _classCallCheck(this, MatCardSubtitle);
    };

    MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(t) {
      return new (t || MatCardSubtitle)();
    };

    MatCardSubtitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardSubtitle,
      selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
      hostAttrs: [1, "mat-card-subtitle"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSubtitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]",
          host: {
            'class': 'mat-card-subtitle'
          }
        }]
      }], null, null);
    })();
    /**
     * Action section of a card, needed as it's used as a selector in the API.
     * \@docs-private
     */


    var MatCardActions = function MatCardActions() {
      _classCallCheck(this, MatCardActions);

      /**
       * Position of the actions inside the card.
       */
      this.align = 'start';
    };

    MatCardActions.ɵfac = function MatCardActions_Factory(t) {
      return new (t || MatCardActions)();
    };

    MatCardActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardActions,
      selectors: [["mat-card-actions"]],
      hostAttrs: [1, "mat-card-actions"],
      hostVars: 2,
      hostBindings: function MatCardActions_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-card-actions-align-end", ctx.align === "end");
        }
      },
      inputs: {
        align: "align"
      },
      exportAs: ["matCardActions"]
    });
    MatCardActions.propDecorators = {
      align: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-card-actions',
          exportAs: 'matCardActions',
          host: {
            'class': 'mat-card-actions',
            '[class.mat-card-actions-align-end]': 'align === "end"'
          }
        }]
      }], function () {
        return [];
      }, {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Footer of a card, needed as it's used as a selector in the API.
     * \@docs-private
     */


    var MatCardFooter = function MatCardFooter() {
      _classCallCheck(this, MatCardFooter);
    };

    MatCardFooter.ɵfac = function MatCardFooter_Factory(t) {
      return new (t || MatCardFooter)();
    };

    MatCardFooter.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardFooter,
      selectors: [["mat-card-footer"]],
      hostAttrs: [1, "mat-card-footer"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardFooter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-card-footer',
          host: {
            'class': 'mat-card-footer'
          }
        }]
      }], null, null);
    })();
    /**
     * Image used in a card, needed to add the mat- CSS styling.
     * \@docs-private
     */


    var MatCardImage = function MatCardImage() {
      _classCallCheck(this, MatCardImage);
    };

    MatCardImage.ɵfac = function MatCardImage_Factory(t) {
      return new (t || MatCardImage)();
    };

    MatCardImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardImage,
      selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
      hostAttrs: [1, "mat-card-image"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-card-image], [matCardImage]',
          host: {
            'class': 'mat-card-image'
          }
        }]
      }], null, null);
    })();
    /**
     * Image used in a card, needed to add the mat- CSS styling.
     * \@docs-private
     */


    var MatCardSmImage = function MatCardSmImage() {
      _classCallCheck(this, MatCardSmImage);
    };

    MatCardSmImage.ɵfac = function MatCardSmImage_Factory(t) {
      return new (t || MatCardSmImage)();
    };

    MatCardSmImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardSmImage,
      selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
      hostAttrs: [1, "mat-card-sm-image"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSmImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-card-sm-image], [matCardImageSmall]',
          host: {
            'class': 'mat-card-sm-image'
          }
        }]
      }], null, null);
    })();
    /**
     * Image used in a card, needed to add the mat- CSS styling.
     * \@docs-private
     */


    var MatCardMdImage = function MatCardMdImage() {
      _classCallCheck(this, MatCardMdImage);
    };

    MatCardMdImage.ɵfac = function MatCardMdImage_Factory(t) {
      return new (t || MatCardMdImage)();
    };

    MatCardMdImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardMdImage,
      selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
      hostAttrs: [1, "mat-card-md-image"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardMdImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-card-md-image], [matCardImageMedium]',
          host: {
            'class': 'mat-card-md-image'
          }
        }]
      }], null, null);
    })();
    /**
     * Image used in a card, needed to add the mat- CSS styling.
     * \@docs-private
     */


    var MatCardLgImage = function MatCardLgImage() {
      _classCallCheck(this, MatCardLgImage);
    };

    MatCardLgImage.ɵfac = function MatCardLgImage_Factory(t) {
      return new (t || MatCardLgImage)();
    };

    MatCardLgImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardLgImage,
      selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
      hostAttrs: [1, "mat-card-lg-image"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardLgImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-card-lg-image], [matCardImageLarge]',
          host: {
            'class': 'mat-card-lg-image'
          }
        }]
      }], null, null);
    })();
    /**
     * Large image used in a card, needed to add the mat- CSS styling.
     * \@docs-private
     */


    var MatCardXlImage = function MatCardXlImage() {
      _classCallCheck(this, MatCardXlImage);
    };

    MatCardXlImage.ɵfac = function MatCardXlImage_Factory(t) {
      return new (t || MatCardXlImage)();
    };

    MatCardXlImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardXlImage,
      selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
      hostAttrs: [1, "mat-card-xl-image"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardXlImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-card-xl-image], [matCardImageXLarge]',
          host: {
            'class': 'mat-card-xl-image'
          }
        }]
      }], null, null);
    })();
    /**
     * Avatar image used in a card, needed to add the mat- CSS styling.
     * \@docs-private
     */


    var MatCardAvatar = function MatCardAvatar() {
      _classCallCheck(this, MatCardAvatar);
    };

    MatCardAvatar.ɵfac = function MatCardAvatar_Factory(t) {
      return new (t || MatCardAvatar)();
    };

    MatCardAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCardAvatar,
      selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
      hostAttrs: [1, "mat-card-avatar"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardAvatar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-card-avatar], [matCardAvatar]',
          host: {
            'class': 'mat-card-avatar'
          }
        }]
      }], null, null);
    })();
    /**
     * A basic content container component that adds the styles of a Material design card.
     *
     * While this component can be used alone, it also provides a number
     * of preset styles for common card sections, including:
     * - mat-card-title
     * - mat-card-subtitle
     * - mat-card-content
     * - mat-card-actions
     * - mat-card-footer
     */


    var MatCard = // @breaking-change 9.0.0 `_animationMode` parameter to be made required.

    /**
     * @param {?=} _animationMode
     */
    function MatCard(_animationMode) {
      _classCallCheck(this, MatCard);

      this._animationMode = _animationMode;
    };

    MatCard.ɵfac = function MatCard_Factory(t) {
      return new (t || MatCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatCard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatCard,
      selectors: [["mat-card"]],
      hostAttrs: [1, "mat-card"],
      hostVars: 2,
      hostBindings: function MatCard_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      exportAs: ["matCard"],
      ngContentSelectors: _c1,
      decls: 2,
      vars: 0,
      template: function MatCard_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
        }
      },
      styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatCard.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-card',
          exportAs: 'matCard',
          template: "<ng-content></ng-content>\n<ng-content select=\"mat-card-footer\"></ng-content>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            'class': 'mat-card',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
          },
          styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"]
        }]
      }], function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Component intended to be used within the `<mat-card>` component. It adds styles for a
     * preset header section (i.e. a title, subtitle, and avatar layout).
     * \@docs-private
     */


    var MatCardHeader = function MatCardHeader() {
      _classCallCheck(this, MatCardHeader);
    };

    MatCardHeader.ɵfac = function MatCardHeader_Factory(t) {
      return new (t || MatCardHeader)();
    };

    MatCardHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatCardHeader,
      selectors: [["mat-card-header"]],
      hostAttrs: [1, "mat-card-header"],
      ngContentSelectors: _c3,
      decls: 4,
      vars: 0,
      consts: [[1, "mat-card-header-text"]],
      template: function MatCardHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-card-header',
          template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            'class': 'mat-card-header'
          }
        }]
      }], null, null);
    })();
    /**
     * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
     * layout that groups an image with a title section.
     * \@docs-private
     */


    var MatCardTitleGroup = function MatCardTitleGroup() {
      _classCallCheck(this, MatCardTitleGroup);
    };

    MatCardTitleGroup.ɵfac = function MatCardTitleGroup_Factory(t) {
      return new (t || MatCardTitleGroup)();
    };

    MatCardTitleGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatCardTitleGroup,
      selectors: [["mat-card-title-group"]],
      hostAttrs: [1, "mat-card-title-group"],
      ngContentSelectors: _c5,
      decls: 4,
      vars: 0,
      template: function MatCardTitleGroup_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitleGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-card-title-group',
          template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"img\"></ng-content>\n<ng-content></ng-content>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          host: {
            'class': 'mat-card-title-group'
          }
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/card/card-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatCardModule = function MatCardModule() {
      _classCallCheck(this, MatCardModule);
    };

    MatCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatCardModule
    });
    MatCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatCardModule_Factory(t) {
        return new (t || MatCardModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCardModule, {
        declarations: function declarations() {
          return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          exports: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/card/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=card.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js ***!
    \***************************************************************************/

  /*! exports provided: MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText, ɵTileCoordinator, ɵangular_material_src_material_grid_list_grid_list_a */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015GridListJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function () {
      return MatGridAvatarCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridList", function () {
      return MatGridList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridListModule", function () {
      return MatGridListModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTile", function () {
      return MatGridTile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function () {
      return MatGridTileFooterCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function () {
      return MatGridTileHeaderCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileText", function () {
      return MatGridTileText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵTileCoordinator", function () {
      return TileCoordinator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_grid_list_grid_list_a", function () {
      return MAT_GRID_LIST;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-list-base.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to provide a grid list to a tile and to avoid circular imports.
     * \@docs-private
     * @type {?}
     */


    var _c0 = ["*"];
    var _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
    var _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
    var MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');
    /**
     * Base interface for a `MatGridList`.
     * \@docs-private
     * @record
     */

    function MatGridListBase() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-tile.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatGridTile =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?=} _gridList
       */
      function MatGridTile(_element, _gridList) {
        _classCallCheck(this, MatGridTile);

        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
      }
      /**
       * Amount of rows that the grid tile takes up.
       * @return {?}
       */


      _createClass(MatGridTile, [{
        key: "_setStyle",

        /**
         * Sets the style of the grid-tile element.  Needs to be set manually to avoid
         * "Changed after checked" errors that would occur with HostBinding.
         * @param {?} property
         * @param {?} value
         * @return {?}
         */
        value: function _setStyle(property, value) {
          /** @type {?} */
          this._element.nativeElement.style[property] = value;
        }
      }, {
        key: "rowspan",
        get: function get() {
          return this._rowspan;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
        }
        /**
         * Amount of columns that the grid tile takes up.
         * @return {?}
         */

      }, {
        key: "colspan",
        get: function get() {
          return this._colspan;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
        }
      }]);

      return MatGridTile;
    }();

    MatGridTile.ɵfac = function MatGridTile_Factory(t) {
      return new (t || MatGridTile)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_GRID_LIST, 8));
    };

    MatGridTile.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatGridTile,
      selectors: [["mat-grid-tile"]],
      hostAttrs: [1, "mat-grid-tile"],
      hostVars: 2,
      hostBindings: function MatGridTile_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
        }
      },
      inputs: {
        rowspan: "rowspan",
        colspan: "colspan"
      },
      exportAs: ["matGridTile"],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "mat-figure"]],
      template: function MatGridTile_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatGridTile.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_GRID_LIST]
        }]
      }];
    };

    MatGridTile.propDecorators = {
      rowspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      colspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTile, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-grid-tile',
          exportAs: 'matGridTile',
          host: {
            'class': 'mat-grid-tile',
            // Ensures that the "rowspan" and "colspan" input value is reflected in
            // the DOM. This is needed for the grid-tile harness.
            '[attr.rowspan]': 'rowspan',
            '[attr.colspan]': 'colspan'
          },
          template: "<!-- TODO(kara): Revisit why this is a figure.-->\n<figure class=\"mat-figure\">\n  <ng-content></ng-content>\n</figure>",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_GRID_LIST]
          }]
        }];
      }, {
        rowspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}

    var MatGridTileText =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       */
      function MatGridTileText(_element) {
        _classCallCheck(this, MatGridTileText);

        this._element = _element;
      }
      /**
       * @return {?}
       */


      _createClass(MatGridTileText, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
        }
      }]);

      return MatGridTileText;
    }();

    MatGridTileText.ɵfac = function MatGridTileText_Factory(t) {
      return new (t || MatGridTileText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    MatGridTileText.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatGridTileText,
      selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]],
      contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
        }
      },
      ngContentSelectors: _c2,
      decls: 4,
      vars: 0,
      consts: [[1, "mat-grid-list-text"]],
      template: function MatGridTileText_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatGridTileText.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    MatGridTileText.propDecorators = {
      _lines: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileText, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-grid-tile-header, mat-grid-tile-footer',
          template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        _lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatGridAvatarCssMatStyler = function MatGridAvatarCssMatStyler() {
      _classCallCheck(this, MatGridAvatarCssMatStyler);
    };

    MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) {
      return new (t || MatGridAvatarCssMatStyler)();
    };

    MatGridAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatGridAvatarCssMatStyler,
      selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]],
      hostAttrs: [1, "mat-grid-avatar"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridAvatarCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-grid-avatar], [matGridAvatar]',
          host: {
            'class': 'mat-grid-avatar'
          }
        }]
      }], null, null);
    })();
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatGridTileHeaderCssMatStyler = function MatGridTileHeaderCssMatStyler() {
      _classCallCheck(this, MatGridTileHeaderCssMatStyler);
    };

    MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) {
      return new (t || MatGridTileHeaderCssMatStyler)();
    };

    MatGridTileHeaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatGridTileHeaderCssMatStyler,
      selectors: [["mat-grid-tile-header"]],
      hostAttrs: [1, "mat-grid-tile-header"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileHeaderCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-grid-tile-header',
          host: {
            'class': 'mat-grid-tile-header'
          }
        }]
      }], null, null);
    })();
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatGridTileFooterCssMatStyler = function MatGridTileFooterCssMatStyler() {
      _classCallCheck(this, MatGridTileFooterCssMatStyler);
    };

    MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) {
      return new (t || MatGridTileFooterCssMatStyler)();
    };

    MatGridTileFooterCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatGridTileFooterCssMatStyler,
      selectors: [["mat-grid-tile-footer"]],
      hostAttrs: [1, "mat-grid-tile-footer"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileFooterCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-grid-tile-footer',
          host: {
            'class': 'mat-grid-tile-footer'
          }
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/tile-coordinator.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Interface describing a tile.
     * \@docs-private
     * @record
     */


    function Tile() {}

    if (false) {}
    /**
     * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
     * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
     * because the tiles can have a rowspan.
     *
     * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
     * large enough to accommodate it so that the tiles still render in the same order in which they
     * are given.
     *
     * The basis of the algorithm is the use of an array to track the already placed tiles. Each
     * element of the array corresponds to a column, and the value indicates how many cells in that
     * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
     * decrements each value in the tracking array (indicating that the column is one cell closer to
     * being free).
     *
     * \@docs-private
     */


    var TileCoordinator =
    /*#__PURE__*/
    function () {
      function TileCoordinator() {
        _classCallCheck(this, TileCoordinator);

        /**
         * Index at which the search for the next gap will start.
         */
        this.columnIndex = 0;
        /**
         * The current row index.
         */

        this.rowIndex = 0;
      }
      /**
       * Gets the total number of rows occupied by tiles
       * @return {?}
       */


      _createClass(TileCoordinator, [{
        key: "update",

        /**
         * Updates the tile positions.
         * @param {?} numColumns Amount of columns in the grid.
         * @param {?} tiles Tiles to be positioned.
         * @return {?}
         */
        value: function update(numColumns, tiles) {
          var _this = this;

          this.columnIndex = 0;
          this.rowIndex = 0;
          this.tracker = new Array(numColumns);
          this.tracker.fill(0, 0, this.tracker.length);
          this.positions = tiles.map(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            return _this._trackTile(tile);
          });
        }
        /**
         * Calculates the row and col position of a tile.
         * @private
         * @param {?} tile
         * @return {?}
         */

      }, {
        key: "_trackTile",
        value: function _trackTile(tile) {
          // Find a gap large enough for this tile.

          /** @type {?} */
          var gapStartIndex = this._findMatchingGap(tile.colspan); // Place tile in the resulting gap.


          this._markTilePosition(gapStartIndex, tile); // The next time we look for a gap, the search will start at columnIndex, which should be
          // immediately after the tile that has just been placed.


          this.columnIndex = gapStartIndex + tile.colspan;
          return new TilePosition(this.rowIndex, gapStartIndex);
        }
        /**
         * Finds the next available space large enough to fit the tile.
         * @private
         * @param {?} tileCols
         * @return {?}
         */

      }, {
        key: "_findMatchingGap",
        value: function _findMatchingGap(tileCols) {
          if (tileCols > this.tracker.length) {
            throw Error("mat-grid-list: tile with colspan ".concat(tileCols, " is wider than ") + "grid with cols=\"".concat(this.tracker.length, "\"."));
          } // Start index is inclusive, end index is exclusive.

          /** @type {?} */


          var gapStartIndex = -1;
          /** @type {?} */

          var gapEndIndex = -1; // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.

          do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapStartIndex = this.tracker.indexOf(0, this.columnIndex); // If there are no more empty spaces in this row at all, move on to the next row.

            if (gapStartIndex == -1) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapEndIndex = this._findGapEndIndex(gapStartIndex); // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.

            this.columnIndex = gapStartIndex + 1; // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
            // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
          } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0); // If we still didn't manage to find a gap, ensure that the index is
          // at least zero so the tile doesn't get pulled out of the grid.


          return Math.max(gapStartIndex, 0);
        }
        /**
         * Move "down" to the next row.
         * @private
         * @return {?}
         */

      }, {
        key: "_nextRow",
        value: function _nextRow() {
          this.columnIndex = 0;
          this.rowIndex++; // Decrement all spaces by one to reflect moving down one row.

          for (var i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
          }
        }
        /**
         * Finds the end index (exclusive) of a gap given the index from which to start looking.
         * The gap ends when a non-zero value is found.
         * @private
         * @param {?} gapStartIndex
         * @return {?}
         */

      }, {
        key: "_findGapEndIndex",
        value: function _findGapEndIndex(gapStartIndex) {
          for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
              return i;
            }
          } // The gap ends with the end of the row.


          return this.tracker.length;
        }
        /**
         * Update the tile tracker to account for the given tile in the given space.
         * @private
         * @param {?} start
         * @param {?} tile
         * @return {?}
         */

      }, {
        key: "_markTilePosition",
        value: function _markTilePosition(start, tile) {
          for (var i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
          }
        }
      }, {
        key: "rowCount",
        get: function get() {
          return this.rowIndex + 1;
        }
        /**
         * Gets the total span of rows occupied by tiles.
         * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
         * @return {?}
         */

      }, {
        key: "rowspan",
        get: function get() {
          /** @type {?} */
          var lastRowMax = Math.max.apply(Math, _toConsumableArray(this.tracker)); // if any of the tiles has a rowspan that pushes it beyond the total row count,
          // add the difference to the rowcount

          return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
        }
      }]);

      return TileCoordinator;
    }();

    if (false) {}
    /**
     * Simple data structure for tile position (row, col).
     * \@docs-private
     */


    var TilePosition =
    /**
     * @param {?} row
     * @param {?} col
     */
    function TilePosition(row, col) {
      _classCallCheck(this, TilePosition);

      this.row = row;
      this.col = col;
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/tile-styler.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * RegExp that can be used to check whether a value will
     * be allowed inside a CSS `calc()` expression.
     * @type {?}
     */


    var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
    /**
     * Sets the style properties for an individual tile, given the position calculated by the
     * Tile Coordinator.
     * \@docs-private
     * @abstract
     */

    var TileStyler =
    /*#__PURE__*/
    function () {
      function TileStyler() {
        _classCallCheck(this, TileStyler);

        this._rows = 0;
        this._rowspan = 0;
      }
      /**
       * Adds grid-list layout info once it is available. Cannot be processed in the constructor
       * because these properties haven't been calculated by that point.
       *
       * @param {?} gutterSize Size of the grid's gutter.
       * @param {?} tracker Instance of the TileCoordinator.
       * @param {?} cols Amount of columns in the grid.
       * @param {?} direction Layout direction of the grid.
       * @return {?}
       */


      _createClass(TileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          this._gutterSize = normalizeUnits(gutterSize);
          this._rows = tracker.rowCount;
          this._rowspan = tracker.rowspan;
          this._cols = cols;
          this._direction = direction;
        }
        /**
         * Computes the amount of space a single 1x1 tile would take up (width or height).
         * Used as a basis for other calculations.
         * @param {?} sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
         * @param {?} gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
         * @return {?} The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
         */

      }, {
        key: "getBaseTileSize",
        value: function getBaseTileSize(sizePercent, gutterFraction) {
          // Take the base size percent (as would be if evenly dividing the size between cells),
          // and then subtracting the size of one gutter. However, since there are no gutters on the
          // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
          // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
          // edge evenly among the cells).
          return "(".concat(sizePercent, "% - (").concat(this._gutterSize, " * ").concat(gutterFraction, "))");
        }
        /**
         * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
         * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param {?} offset Number of tiles that have already been rendered in the row/column.
         * @return {?} Position of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTilePosition",
        value: function getTilePosition(baseSize, offset) {
          // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
          // row/column (offset).
          return offset === 0 ? '0' : calc("(".concat(baseSize, " + ").concat(this._gutterSize, ") * ").concat(offset));
        }
        /**
         * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
         * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param {?} span The tile's rowspan or colspan.
         * @return {?} Size of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTileSize",
        value: function getTileSize(baseSize, span) {
          return "(".concat(baseSize, " * ").concat(span, ") + (").concat(span - 1, " * ").concat(this._gutterSize, ")");
        }
        /**
         * Sets the style properties to be applied to a tile for the given row and column index.
         * @param {?} tile Tile to which to apply the styling.
         * @param {?} rowIndex Index of the tile's row.
         * @param {?} colIndex Index of the tile's column.
         * @return {?}
         */

      }, {
        key: "setStyle",
        value: function setStyle(tile, rowIndex, colIndex) {
          // Percent of the available horizontal space that one column takes up.

          /** @type {?} */
          var percentWidthPerTile = 100 / this._cols; // Fraction of the vertical gutter size that each column takes up.
          // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.

          /** @type {?} */

          var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
          this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
          this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        }
        /**
         * Sets the horizontal placement of the tile in the list.
         * @param {?} tile
         * @param {?} colIndex
         * @param {?} percentWidth
         * @param {?} gutterWidth
         * @return {?}
         */

      }, {
        key: "setColStyles",
        value: function setColStyles(tile, colIndex, percentWidth, gutterWidth) {
          // Base horizontal size of a column.

          /** @type {?} */
          var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth); // The width and horizontal position of each tile is always calculated the same way, but the
          // height and vertical position depends on the rowMode.

          /** @type {?} */

          var side = this._direction === 'rtl' ? 'right' : 'left';

          tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));

          tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
        }
        /**
         * Calculates the total size taken up by gutters across one axis of a list.
         * @return {?}
         */

      }, {
        key: "getGutterSpan",
        value: function getGutterSpan() {
          return "".concat(this._gutterSize, " * (").concat(this._rowspan, " - 1)");
        }
        /**
         * Calculates the total size taken up by tiles across one axis of a list.
         * @param {?} tileHeight Height of the tile.
         * @return {?}
         */

      }, {
        key: "getTileSpan",
        value: function getTileSpan(tileHeight) {
          return "".concat(this._rowspan, " * ").concat(this.getTileSize(tileHeight, 1));
        }
        /**
         * Calculates the computed height and returns the correct style property to set.
         * This method can be implemented by each type of TileStyler.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return null;
        }
      }]);

      return TileStyler;
    }();

    if (false) {}
    /**
     * This type of styler is instantiated when the user passes in a fixed row height.
     * Example `<mat-grid-list cols="3" rowHeight="100px">`
     * \@docs-private
     */


    var FixedTileStyler =
    /*#__PURE__*/
    function (_TileStyler) {
      _inherits(FixedTileStyler, _TileStyler);

      /**
       * @param {?} fixedRowHeight
       */
      function FixedTileStyler(fixedRowHeight) {
        var _this2;

        _classCallCheck(this, FixedTileStyler);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(FixedTileStyler).call(this));
        _this2.fixedRowHeight = fixedRowHeight;
        return _this2;
      }
      /**
       * @param {?} gutterSize
       * @param {?} tracker
       * @param {?} cols
       * @param {?} direction
       * @return {?}
       */


      _createClass(FixedTileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          _get(_getPrototypeOf(FixedTileStyler.prototype), "init", this).call(this, gutterSize, tracker, cols, direction);

          this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);

          if (!cssCalcAllowedValue.test(this.fixedRowHeight)) {
            throw Error("Invalid value \"".concat(this.fixedRowHeight, "\" set as rowHeight."));
          }
        }
        /**
         * @param {?} tile
         * @param {?} rowIndex
         * @return {?}
         */

      }, {
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex) {
          tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['height', calc("".concat(this.getTileSpan(this.fixedRowHeight), " + ").concat(this.getGutterSpan()))];
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['height', null]);

          if (list._tiles) {
            list._tiles.forEach(
            /**
            * @param {?} tile
            * @return {?}
            */
            function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);

      return FixedTileStyler;
    }(TileStyler);

    if (false) {}
    /**
     * This type of styler is instantiated when the user passes in a width:height ratio
     * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
     * \@docs-private
     */


    var RatioTileStyler =
    /*#__PURE__*/
    function (_TileStyler2) {
      _inherits(RatioTileStyler, _TileStyler2);

      /**
       * @param {?} value
       */
      function RatioTileStyler(value) {
        var _this3;

        _classCallCheck(this, RatioTileStyler);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(RatioTileStyler).call(this));

        _this3._parseRatio(value);

        return _this3;
      }
      /**
       * @param {?} tile
       * @param {?} rowIndex
       * @param {?} percentWidth
       * @param {?} gutterWidth
       * @return {?}
       */


      _createClass(RatioTileStyler, [{
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
          /** @type {?} */
          var percentHeightPerTile = percentWidth / this.rowHeightRatio;
          this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth); // Use padding-top and margin-top to maintain the given aspect ratio, as
          // a percentage-based value for these properties is applied versus the *width* of the
          // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties

          tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));

          tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['paddingBottom', calc("".concat(this.getTileSpan(this.baseTileHeight), " + ").concat(this.getGutterSpan()))];
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['paddingBottom', null]);

          list._tiles.forEach(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            tile._setStyle('marginTop', null);

            tile._setStyle('paddingTop', null);
          });
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_parseRatio",
        value: function _parseRatio(value) {
          /** @type {?} */
          var ratioParts = value.split(':');

          if (ratioParts.length !== 2) {
            throw Error("mat-grid-list: invalid ratio given for row-height: \"".concat(value, "\""));
          }

          this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
        }
      }]);

      return RatioTileStyler;
    }(TileStyler);

    if (false) {}
    /**
     * This type of styler is instantiated when the user selects a "fit" row height mode.
     * In other words, the row height will reflect the total height of the container divided
     * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
     *
     * \@docs-private
     */


    var FitTileStyler =
    /*#__PURE__*/
    function (_TileStyler3) {
      _inherits(FitTileStyler, _TileStyler3);

      function FitTileStyler() {
        _classCallCheck(this, FitTileStyler);

        return _possibleConstructorReturn(this, _getPrototypeOf(FitTileStyler).apply(this, arguments));
      }

      _createClass(FitTileStyler, [{
        key: "setRowStyles",

        /**
         * @param {?} tile
         * @param {?} rowIndex
         * @return {?}
         */
        value: function setRowStyles(tile, rowIndex) {
          // Percent of the available vertical space that one row takes up.

          /** @type {?} */
          var percentHeightPerTile = 100 / this._rowspan; // Fraction of the horizontal gutter size that each column takes up.

          /** @type {?} */

          var gutterHeightPerTile = (this._rows - 1) / this._rows; // Base vertical size of a column.

          /** @type {?} */

          var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);

          tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          if (list._tiles) {
            list._tiles.forEach(
            /**
            * @param {?} tile
            * @return {?}
            */
            function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);

      return FitTileStyler;
    }(TileStyler);
    /**
     * Wraps a CSS string in a calc function
     * @param {?} exp
     * @return {?}
     */


    function calc(exp) {
      return "calc(".concat(exp, ")");
    }
    /**
     * Appends pixels to a CSS string if no units are given.
     * @param {?} value
     * @return {?}
     */


    function normalizeUnits(value) {
      return value.match(/([A-Za-z%]+)$/) ? value : "".concat(value, "px");
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-list.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(kara): Conditional (responsive) column count / row size.
    // TODO(kara): Re-layout on window resize / media change (debounced).
    // TODO(kara): gridTileHeader and gridTileFooter.

    /** @type {?} */


    var MAT_FIT_MODE = 'fit';

    var MatGridList =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?} _dir
       */
      function MatGridList(_element, _dir) {
        _classCallCheck(this, MatGridList);

        this._element = _element;
        this._dir = _dir;
        /**
         * The amount of space between tiles. This will be something like '5px' or '2em'.
         */

        this._gutter = '1px';
      }
      /**
       * Amount of columns in the grid list.
       * @return {?}
       */


      _createClass(MatGridList, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._checkCols();

          this._checkRowHeight();
        }
        /**
         * The layout calculation is fairly cheap if nothing changes, so there's little cost
         * to run it frequently.
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this._layoutTiles();
        }
        /**
         * Throw a friendly error if cols property is missing
         * @private
         * @return {?}
         */

      }, {
        key: "_checkCols",
        value: function _checkCols() {
          if (!this.cols) {
            throw Error("mat-grid-list: must pass in number of columns. " + "Example: <mat-grid-list cols=\"3\">");
          }
        }
        /**
         * Default to equal width:height if rowHeight property is missing
         * @private
         * @return {?}
         */

      }, {
        key: "_checkRowHeight",
        value: function _checkRowHeight() {
          if (!this._rowHeight) {
            this._setTileStyler('1:1');
          }
        }
        /**
         * Creates correct Tile Styler subtype based on rowHeight passed in by user
         * @private
         * @param {?} rowHeight
         * @return {?}
         */

      }, {
        key: "_setTileStyler",
        value: function _setTileStyler(rowHeight) {
          if (this._tileStyler) {
            this._tileStyler.reset(this);
          }

          if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
          } else if (rowHeight && rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
          } else {
            this._tileStyler = new FixedTileStyler(rowHeight);
          }
        }
        /**
         * Computes and applies the size and position for all children grid tiles.
         * @private
         * @return {?}
         */

      }, {
        key: "_layoutTiles",
        value: function _layoutTiles() {
          var _this4 = this;

          if (!this._tileCoordinator) {
            this._tileCoordinator = new TileCoordinator();
          }
          /** @type {?} */


          var tracker = this._tileCoordinator;
          /** @type {?} */

          var tiles = this._tiles.filter(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            return !tile._gridList || tile._gridList === _this4;
          });
          /** @type {?} */


          var direction = this._dir ? this._dir.value : 'ltr';

          this._tileCoordinator.update(this.cols, tiles);

          this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);

          tiles.forEach(
          /**
          * @param {?} tile
          * @param {?} index
          * @return {?}
          */
          function (tile, index) {
            /** @type {?} */
            var pos = tracker.positions[index];

            _this4._tileStyler.setStyle(tile, pos.row, pos.col);
          });

          this._setListStyle(this._tileStyler.getComputedHeight());
        }
        /**
         * Sets style on the main grid-list element, given the style name and value.
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "_setListStyle",
        value: function _setListStyle(style) {
          if (style) {
            /** @type {?} */
            this._element.nativeElement.style[style[0]] = style[1];
          }
        }
      }, {
        key: "cols",
        get: function get() {
          return this._cols;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
        }
        /**
         * Size of the grid list's gutter in pixels.
         * @return {?}
         */

      }, {
        key: "gutterSize",
        get: function get() {
          return this._gutter;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._gutter = "".concat(value == null ? '' : value);
        }
        /**
         * Set internal representation of row height from the user-provided value.
         * @return {?}
         */

      }, {
        key: "rowHeight",
        get: function get() {
          return this._rowHeight;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = "".concat(value == null ? '' : value);

          if (newValue !== this._rowHeight) {
            this._rowHeight = newValue;

            this._setTileStyler(this._rowHeight);
          }
        }
      }]);

      return MatGridList;
    }();

    MatGridList.ɵfac = function MatGridList_Factory(t) {
      return new (t || MatGridList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
    };

    MatGridList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatGridList,
      selectors: [["mat-grid-list"]],
      contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatGridTile, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
        }
      },
      hostAttrs: [1, "mat-grid-list"],
      hostVars: 1,
      hostBindings: function MatGridList_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cols", ctx.cols);
        }
      },
      inputs: {
        cols: "cols",
        gutterSize: "gutterSize",
        rowHeight: "rowHeight"
      },
      exportAs: ["matGridList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_GRID_LIST,
        useExisting: MatGridList
      }])],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      template: function MatGridList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatGridList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatGridList.propDecorators = {
      _tiles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatGridTile, {
          descendants: true
        }]
      }],
      cols: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      gutterSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      rowHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-grid-list',
          exportAs: 'matGridList',
          template: "<div>\n  <ng-content></ng-content>\n</div>",
          host: {
            'class': 'mat-grid-list',
            // Ensures that the "cols" input value is reflected in the DOM. This is
            // needed for the grid-list harness.
            '[attr.cols]': 'cols'
          },
          providers: [{
            provide: MAT_GRID_LIST,
            useExisting: MatGridList
          }],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        cols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gutterSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _tiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatGridTile, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-list-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatGridListModule = function MatGridListModule() {
      _classCallCheck(this, MatGridListModule);
    };

    MatGridListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatGridListModule
    });
    MatGridListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatGridListModule_Factory(t) {
        return new (t || MatGridListModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatGridListModule, {
        declarations: function declarations() {
          return [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          exports: [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
          declarations: [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=grid-list.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js ***!
    \**********************************************************************/

  /*! exports provided: MAT_TABS_CONFIG, MAT_TAB_GROUP, MatInkBar, MatTab, MatTabBody, MatTabBodyPortal, MatTabChangeEvent, MatTabContent, MatTabGroup, MatTabHeader, MatTabLabel, MatTabLabelWrapper, MatTabLink, MatTabNav, MatTabsModule, _MAT_INK_BAR_POSITIONER, _MatTabBodyBase, _MatTabGroupBase, _MatTabHeaderBase, _MatTabLinkBase, _MatTabNavBase, matTabsAnimations, ɵangular_material_src_material_tabs_tabs_a, ɵangular_material_src_material_tabs_tabs_b */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015TabsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TABS_CONFIG", function () {
      return MAT_TABS_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TAB_GROUP", function () {
      return MAT_TAB_GROUP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatInkBar", function () {
      return MatInkBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTab", function () {
      return MatTab;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabBody", function () {
      return MatTabBody;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabBodyPortal", function () {
      return MatTabBodyPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabChangeEvent", function () {
      return MatTabChangeEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabContent", function () {
      return MatTabContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabGroup", function () {
      return MatTabGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabHeader", function () {
      return MatTabHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabLabel", function () {
      return MatTabLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabLabelWrapper", function () {
      return MatTabLabelWrapper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabLink", function () {
      return MatTabLink;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabNav", function () {
      return MatTabNav;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabsModule", function () {
      return MatTabsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MAT_INK_BAR_POSITIONER", function () {
      return _MAT_INK_BAR_POSITIONER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatTabBodyBase", function () {
      return _MatTabBodyBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatTabGroupBase", function () {
      return _MatTabGroupBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatTabHeaderBase", function () {
      return _MatTabHeaderBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatTabLinkBase", function () {
      return _MatTabLinkBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatTabNavBase", function () {
      return _MatTabNavBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matTabsAnimations", function () {
      return matTabsAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_a", function () {
      return _MAT_INK_BAR_POSITIONER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_b", function () {
      return MatPaginatedTabHeader;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/ink-bar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface for a a MatInkBar positioner method, defining the positioning and width of the ink
     * bar in a set of tabs.
     * @record
     */


    function MatTab_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    }

    var _c0 = ["*"];

    function MatTabBody_ng_template_2_Template(rf, ctx) {}

    var _c1 = function _c1(a0) {
      return {
        animationDuration: a0
      };
    };

    var _c2 = function _c2(a0, a1) {
      return {
        value: a0,
        params: a1
      };
    };

    var _c3 = ["tabBodyWrapper"];
    var _c4 = ["tabHeader"];

    function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) {}

    function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 9);
      }

      if (rf & 2) {
        var tab_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkPortalOutlet", tab_r98.templateLabel);
      }
    }

    function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var tab_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tab_r98.textLabel);
      }
    }

    function MatTabGroup_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabGroup_div_2_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);

          var tab_r98 = ctx.$implicit;
          var i_r99 = ctx.index;

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

          return ctx_r105._handleClick(tab_r98, _r94, i_r99);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tab_r98 = ctx.$implicit;
        var i_r99 = ctx.index;

        var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-label-active", ctx_r95.selectedIndex == i_r99);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r95._getTabLabelId(i_r99))("disabled", tab_r98.disabled)("matRippleDisabled", tab_r98.disabled || ctx_r95.disableRipple);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabIndex", ctx_r95._getTabIndex(tab_r98, i_r99))("aria-posinset", i_r99 + 1)("aria-setsize", ctx_r95._tabs.length)("aria-controls", ctx_r95._getTabContentId(i_r99))("aria-selected", ctx_r95.selectedIndex == i_r99)("aria-label", tab_r98.ariaLabel || null)("aria-labelledby", !tab_r98.ariaLabel && tab_r98.ariaLabelledby ? tab_r98.ariaLabelledby : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tab_r98.templateLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !tab_r98.templateLabel);
      }
    }

    function MatTabGroup_mat_tab_body_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-body", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r110);

          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r109._removeTabBodyWrapperHeight();
        })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r110);

          var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r111._setTabBodyWrapperHeight($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tab_r107 = ctx.$implicit;
        var i_r108 = ctx.index;

        var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-body-active", ctx_r97.selectedIndex == i_r108);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r97._getTabContentId(i_r108))("content", tab_r107.content)("position", tab_r107.position)("origin", tab_r107.origin)("animationDuration", ctx_r97.animationDuration);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-labelledby", ctx_r97._getTabLabelId(i_r108));
      }
    }

    var _c5 = ["tabListContainer"];
    var _c6 = ["tabList"];
    var _c7 = ["nextPaginator"];
    var _c8 = ["previousPaginator"];
    var _c9 = ["mat-tab-nav-bar", ""];

    function _MatInkBarPositioner() {}
    /**
     * Injection token for the MatInkBar's Positioner.
     * @type {?}
     */


    var _MAT_INK_BAR_POSITIONER = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatInkBarPositioner', {
      providedIn: 'root',
      factory: _MAT_INK_BAR_POSITIONER_FACTORY
    });
    /**
     * The default positioner function for the MatInkBar.
     * \@docs-private
     * @return {?}
     */


    function _MAT_INK_BAR_POSITIONER_FACTORY() {
      /** @type {?} */
      var method =
      /**
      * @param {?} element
      * @return {?}
      */
      function method(element) {
        return {
          left: element ? (element.offsetLeft || 0) + 'px' : '0',
          width: element ? (element.offsetWidth || 0) + 'px' : '0'
        };
      };

      return method;
    }
    /**
     * The ink-bar is used to display and animate the line underneath the current active tab label.
     * \@docs-private
     */


    var MatInkBar =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       * @param {?} _inkBarPositioner
       * @param {?=} _animationMode
       */
      function MatInkBar(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
        _classCallCheck(this, MatInkBar);

        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._inkBarPositioner = _inkBarPositioner;
        this._animationMode = _animationMode;
      }
      /**
       * Calculates the styles from the provided element in order to align the ink-bar to that element.
       * Shows the ink bar if previously set as hidden.
       * @param {?} element
       * @return {?}
       */


      _createClass(MatInkBar, [{
        key: "alignToElement",
        value: function alignToElement(element) {
          var _this5 = this;

          this.show();

          if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                return _this5._setStyles(element);
              });
            });
          } else {
            this._setStyles(element);
          }
        }
        /**
         * Shows the ink bar.
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          this._elementRef.nativeElement.style.visibility = 'visible';
        }
        /**
         * Hides the ink bar.
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          this._elementRef.nativeElement.style.visibility = 'hidden';
        }
        /**
         * Sets the proper styles to the ink bar element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_setStyles",
        value: function _setStyles(element) {
          /** @type {?} */
          var positions = this._inkBarPositioner(element);
          /** @type {?} */


          var inkBar = this._elementRef.nativeElement;
          inkBar.style.left = positions.left;
          inkBar.style.width = positions.width;
        }
      }]);

      return MatInkBar;
    }();

    MatInkBar.ɵfac = function MatInkBar_Factory(t) {
      return new (t || MatInkBar)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_MAT_INK_BAR_POSITIONER), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatInkBar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatInkBar,
      selectors: [["mat-ink-bar"]],
      hostAttrs: [1, "mat-ink-bar"],
      hostVars: 2,
      hostBindings: function MatInkBar_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      }
    });
    /** @nocollapse */

    MatInkBar.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_MAT_INK_BAR_POSITIONER]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatInkBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: 'mat-ink-bar',
          host: {
            'class': 'mat-ink-bar',
            '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'"
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_MAT_INK_BAR_POSITIONER]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-content.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Decorates the `ng-template` tags and reads out the template from it.
     */


    var MatTabContent =
    /**
     * @param {?} template
     */
    function MatTabContent(template) {
      _classCallCheck(this, MatTabContent);

      this.template = template;
    };

    MatTabContent.ɵfac = function MatTabContent_Factory(t) {
      return new (t || MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
    };

    MatTabContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatTabContent,
      selectors: [["", "matTabContent", ""]]
    });
    /** @nocollapse */

    MatTabContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[matTabContent]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-label.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to flag tab labels for use with the portal directive
     */


    var MatTabLabel =
    /*#__PURE__*/
    function (_angular_cdk_portal__) {
      _inherits(MatTabLabel, _angular_cdk_portal__);

      function MatTabLabel() {
        _classCallCheck(this, MatTabLabel);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatTabLabel).apply(this, arguments));
      }

      return MatTabLabel;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortal"]);

    MatTabLabel.ɵfac = function MatTabLabel_Factory(t) {
      return ɵMatTabLabel_BaseFactory(t || MatTabLabel);
    };

    MatTabLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatTabLabel,
      selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatTabLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatTabLabel);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[mat-tab-label], [matTabLabel]'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatTab.

    /**
     * \@docs-private
     */


    var MatTabBase = function MatTabBase() {
      _classCallCheck(this, MatTabBase);
    };
    /** @type {?} */


    var _MatTabMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabBase);
    /**
     * Used to provide a tab group to a tab without causing a circular dependency.
     * \@docs-private
     * @type {?}
     */


    var MAT_TAB_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_TAB_GROUP');

    var MatTab =
    /*#__PURE__*/
    function (_MatTabMixinBase2) {
      _inherits(MatTab, _MatTabMixinBase2);

      /**
       * @param {?} _viewContainerRef
       * @param {?=} _closestTabGroup
       */
      function MatTab(_viewContainerRef, _closestTabGroup) {
        var _this6;

        _classCallCheck(this, MatTab);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(MatTab).call(this));
        _this6._viewContainerRef = _viewContainerRef;
        _this6._closestTabGroup = _closestTabGroup;
        /**
         * Plain text label for the tab, used when there is no template label.
         */

        _this6.textLabel = '';
        /**
         * Portal that will be the hosted content of the tab
         */

        _this6._contentPortal = null;
        /**
         * Emits whenever the internal state of the tab changes.
         */

        _this6._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * The relatively indexed position where 0 represents the center, negative is left, and positive
         * represents the right.
         */

        _this6.position = null;
        /**
         * The initial relatively index origin of the tab if it was created and selected after there
         * was already a selected tab. Provides context of what position the tab should originate from.
         */

        _this6.origin = null;
        /**
         * Whether the tab is currently active.
         */

        _this6.isActive = false;
        return _this6;
      }
      /**
       * Content for the tab label given by `<ng-template mat-tab-label>`.
       * @return {?}
       */


      _createClass(MatTab, [{
        key: "ngOnChanges",

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
            this._stateChanges.next();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this._explicitContent || this._implicitContent, this._viewContainerRef);
        }
      }, {
        key: "templateLabel",
        get: function get() {
          return this._templateLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          // Only update the templateLabel via query if there is actually
          // a MatTabLabel found. This works around an issue where a user may have
          // manually set `templateLabel` during creation mode, which would then get clobbered
          // by `undefined` when this query resolves.
          if (value) {
            this._templateLabel = value;
          }
        }
        /**
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "content",
        get: function get() {
          return this._contentPortal;
        }
      }]);

      return MatTab;
    }(_MatTabMixinBase);

    MatTab.ɵfac = function MatTab_Factory(t) {
      return new (t || MatTab)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TAB_GROUP, 8));
    };

    MatTab.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatTab,
      selectors: [["mat-tab"]],
      contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLabel, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticContentQuery"](dirIndex, MatTabContent, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
        }
      },
      viewQuery: function MatTab_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
        }
      },
      inputs: {
        disabled: "disabled",
        textLabel: ["label", "textLabel"],
        ariaLabel: ["aria-label", "ariaLabel"],
        ariaLabelledby: ["aria-labelledby", "ariaLabelledby"]
      },
      exportAs: ["matTab"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]()],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatTab_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2
    });
    /** @nocollapse */

    MatTab.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [MAT_TAB_GROUP]
        }]
      }];
    };

    MatTab.propDecorators = {
      templateLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
        args: [MatTabLabel]
      }],
      _explicitContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
        args: [MatTabContent, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
          static: true
        }]
      }],
      _implicitContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], {
          static: true
        }]
      }],
      textLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['label']
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['aria-labelledby']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTab, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-tab',
          template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n",
          inputs: ['disabled'],
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          exportAs: 'matTab'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_TAB_GROUP]
          }]
        }];
      }, {
        textLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['label']
        }],
        templateLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatTabLabel]
        }],
        _explicitContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatTabContent, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
            static: true
          }]
        }],
        _implicitContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], {
            static: true
          }]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['aria-labelledby']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tabs-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the Material tabs.
     * \@docs-private
     * @type {?}
     */


    var matTabsAnimations = {
      /**
       * Animation translates a tab along the X axis.
       */
      translateTab: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('translateTab', [// Note: transitions to `none` instead of 0, because some browsers might blur the content.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('center, void, left-origin-center, right-origin-center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'none'
      })), // If the tab is either on the left or right, we additionally add a `min-height` of 1px
      // in order to ensure that the element has a height before its state changes. This is
      // necessary because Chrome does seem to skip the transition in RTL mode if the element does
      // not have a static height and is not rendered. See related issue: #9465
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translate3d(-100%, 0, 0)',
        minHeight: '1px'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translate3d(100%, 0, 0)',
        minHeight: '1px'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => left, * => right, left => center, right => center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => left-origin-center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translate3d(-100%, 0, 0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => right-origin-center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translate3d(100%, 0, 0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')])])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-body.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The portal host directive for the contents of the tab.
     * \@docs-private
     */

    var MatTabBodyPortal =
    /*#__PURE__*/
    function (_angular_cdk_portal__2) {
      _inherits(MatTabBodyPortal, _angular_cdk_portal__2);

      /**
       * @param {?} componentFactoryResolver
       * @param {?} viewContainerRef
       * @param {?} _host
       * @param {?=} _document
       */
      function MatTabBodyPortal(componentFactoryResolver, viewContainerRef, _host,
      /**
       * @deprecated `_document` parameter to be made required.
       * @breaking-change 9.0.0
       */
      _document) {
        var _this7;

        _classCallCheck(this, MatTabBodyPortal);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(MatTabBodyPortal).call(this, componentFactoryResolver, viewContainerRef, _document));
        _this7._host = _host;
        /**
         * Subscription to events for when the tab body begins centering.
         */

        _this7._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Subscription to events for when the tab body finishes leaving from center position.
         */

        _this7._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        return _this7;
      }
      /**
       * Set initial visibility or set up subscription for changing visibility.
       * @return {?}
       */


      _createClass(MatTabBodyPortal, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          _get(_getPrototypeOf(MatTabBodyPortal.prototype), "ngOnInit", this).call(this);

          this._centeringSub = this._host._beforeCentering.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._host._isCenterPosition(this._host._position))).subscribe(
          /**
          * @param {?} isCentering
          * @return {?}
          */
          function (isCentering) {
            if (isCentering && !_this8.hasAttached()) {
              _this8.attach(_this8._host._content);
            }
          });
          this._leavingSub = this._host._afterLeavingCenter.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this8.detach();
          });
        }
        /**
         * Clean up centering subscription.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(MatTabBodyPortal.prototype), "ngOnDestroy", this).call(this);

          this._centeringSub.unsubscribe();

          this._leavingSub.unsubscribe();
        }
      }]);

      return MatTabBodyPortal;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"]);

    MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(t) {
      return new (t || MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatTabBody;
      })), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
    };

    MatTabBodyPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatTabBodyPortal,
      selectors: [["", "matTabBodyHost", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatTabBodyPortal.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
      }, {
        type: MatTabBody,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatTabBody;
          })]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabBodyPortal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[matTabBodyHost]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: MatTabBody,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return MatTabBody;
            })]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Base class with all of the `MatTabBody` functionality.
     * \@docs-private
     * @abstract
     */
    // tslint:disable-next-line:class-name


    var _MatTabBodyBase =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _dir
       * @param {?} changeDetectorRef
       */
      function _MatTabBodyBase(_elementRef, _dir, changeDetectorRef) {
        var _this9 = this;

        _classCallCheck(this, _MatTabBodyBase);

        this._elementRef = _elementRef;
        this._dir = _dir;
        /**
         * Subscription to the directionality change observable.
         */

        this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Emits when an animation on the tab is complete.
         */

        this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Event emitted when the tab begins to animate towards the center as the active tab.
         */

        this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted before the centering of the tab begins.
         */

        this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted before the centering of the tab begins.
         */

        this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when the tab completes its animation towards the center.
         */

        this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true); // Note that the default value will always be overwritten by `MatTabBody`, but we need one
        // anyway to prevent the animations module from throwing an error if the body is used on its own.

        /**
         * Duration for the tab's animation.
         */

        this.animationDuration = '500ms';

        if (_dir) {
          this._dirChangeSubscription = _dir.change.subscribe(
          /**
          * @param {?} dir
          * @return {?}
          */
          function (dir) {
            _this9._computePositionAnimationState(dir);

            changeDetectorRef.markForCheck();
          });
        } // Ensure that we get unique animation events, because the `.done` callback can get
        // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.


        this._translateTabComplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(
        /**
        * @param {?} x
        * @param {?} y
        * @return {?}
        */
        function (x, y) {
          return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // If the transition to the center is complete, emit an event.
          if (_this9._isCenterPosition(event.toState) && _this9._isCenterPosition(_this9._position)) {
            _this9._onCentered.emit();
          }

          if (_this9._isCenterPosition(event.fromState) && !_this9._isCenterPosition(_this9._position)) {
            _this9._afterLeavingCenter.emit();
          }
        });
      }
      /**
       * The shifted index position of the tab body, where zero represents the active center tab.
       * @param {?} position
       * @return {?}
       */


      _createClass(_MatTabBodyBase, [{
        key: "ngOnInit",

        /**
         * After initialized, check if the content is centered and has an origin. If so, set the
         * special position states that transition the tab from the left or right before centering.
         * @return {?}
         */
        value: function ngOnInit() {
          if (this._position == 'center' && this.origin != null) {
            this._position = this._computePositionFromOrigin(this.origin);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._dirChangeSubscription.unsubscribe();

          this._translateTabComplete.complete();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onTranslateTabStarted",
        value: function _onTranslateTabStarted(event) {
          /** @type {?} */
          var isCentering = this._isCenterPosition(event.toState);

          this._beforeCentering.emit(isCentering);

          if (isCentering) {
            this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
          }
        }
        /**
         * The text direction of the containing app.
         * @return {?}
         */

      }, {
        key: "_getLayoutDirection",
        value: function _getLayoutDirection() {
          return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * Whether the provided position state is considered center, regardless of origin.
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_isCenterPosition",
        value: function _isCenterPosition(position) {
          return position == 'center' || position == 'left-origin-center' || position == 'right-origin-center';
        }
        /**
         * Computes the position state that will be used for the tab-body animation trigger.
         * @private
         * @param {?=} dir
         * @return {?}
         */

      }, {
        key: "_computePositionAnimationState",
        value: function _computePositionAnimationState() {
          var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getLayoutDirection();

          if (this._positionIndex < 0) {
            this._position = dir == 'ltr' ? 'left' : 'right';
          } else if (this._positionIndex > 0) {
            this._position = dir == 'ltr' ? 'right' : 'left';
          } else {
            this._position = 'center';
          }
        }
        /**
         * Computes the position state based on the specified origin position. This is used if the
         * tab is becoming visible immediately after creation.
         * @private
         * @param {?} origin
         * @return {?}
         */

      }, {
        key: "_computePositionFromOrigin",
        value: function _computePositionFromOrigin(origin) {
          /** @type {?} */
          var dir = this._getLayoutDirection();

          if (dir == 'ltr' && origin <= 0 || dir == 'rtl' && origin > 0) {
            return 'left-origin-center';
          }

          return 'right-origin-center';
        }
      }, {
        key: "position",
        set: function set(position) {
          this._positionIndex = position;

          this._computePositionAnimationState();
        }
      }]);

      return _MatTabBodyBase;
    }();

    _MatTabBodyBase.ɵfac = function _MatTabBodyBase_Factory(t) {
      return new (t || _MatTabBodyBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
    };

    _MatTabBodyBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: _MatTabBodyBase,
      inputs: {
        animationDuration: "animationDuration",
        position: "position",
        _content: ["content", "_content"],
        origin: "origin"
      },
      outputs: {
        _onCentering: "_onCentering",
        _beforeCentering: "_beforeCentering",
        _afterLeavingCenter: "_afterLeavingCenter",
        _onCentered: "_onCentered"
      }
    });
    /** @nocollapse */

    _MatTabBodyBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }];
    };

    _MatTabBodyBase.propDecorators = {
      _onCentering: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _beforeCentering: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _afterLeavingCenter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _onCentered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['content']
      }],
      origin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      animationDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabBodyBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      }, {
        _onCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _beforeCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _afterLeavingCenter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _onCentered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        _content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['content']
        }],
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Wrapper for the contents of a tab.
     * \@docs-private
     */


    var MatTabBody =
    /*#__PURE__*/
    function (_MatTabBodyBase2) {
      _inherits(MatTabBody, _MatTabBodyBase2);

      /**
       * @param {?} elementRef
       * @param {?} dir
       * @param {?} changeDetectorRef
       */
      function MatTabBody(elementRef, dir, changeDetectorRef) {
        _classCallCheck(this, MatTabBody);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatTabBody).call(this, elementRef, dir, changeDetectorRef));
      }

      return MatTabBody;
    }(_MatTabBodyBase);

    MatTabBody.ɵfac = function MatTabBody_Factory(t) {
      return new (t || MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
    };

    MatTabBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatTabBody,
      selectors: [["mat-tab-body"]],
      viewQuery: function MatTabBody_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
        }
      },
      hostAttrs: [1, "mat-tab-body"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 6,
      consts: [[1, "mat-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]],
      template: function MatTabBody_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
            return ctx._onTranslateTabStarted($event);
          })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
            return ctx._translateTabComplete.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c2, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c1, ctx.animationDuration)));
        }
      },
      directives: [MatTabBodyPortal],
      styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"],
      encapsulation: 2,
      data: {
        animation: [matTabsAnimations.translateTab]
      }
    });
    /** @nocollapse */

    MatTabBody.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }];
    };

    MatTabBody.propDecorators = {
      _portalHost: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"]]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabBody, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-tab-body',
          template: "<div class=\"mat-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\">\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
          animations: [matTabsAnimations.translateTab],
          host: {
            'class': 'mat-tab-body'
          },
          styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      }, {
        _portalHost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"]]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Object that can be used to configure the default options for the tabs module.
     * @record
     */


    function MatTabsConfig() {}

    if (false) {}
    /**
     * Injection token that can be used to provide the default options the tabs module.
     * @type {?}
     */


    var MAT_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_TABS_CONFIG');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-group.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate unique ID's for each tab component
     * @type {?}
     */

    var nextId = 0;
    /**
     * A simple change event emitted on focus or selection changes.
     */

    var MatTabChangeEvent = function MatTabChangeEvent() {
      _classCallCheck(this, MatTabChangeEvent);
    };

    if (false) {} // Boilerplate for applying mixins to MatTabGroup.

    /**
     * \@docs-private
     */


    var MatTabGroupMixinBase =
    /**
     * @param {?} _elementRef
     */
    function MatTabGroupMixinBase(_elementRef) {
      _classCallCheck(this, MatTabGroupMixinBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatTabGroupMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(MatTabGroupMixinBase), 'primary');
    /**
     * @record
     */


    function MatTabGroupBaseHeader() {}

    if (false) {}
    /**
     * Base class with all of the `MatTabGroupBase` functionality.
     * \@docs-private
     * @abstract
     */
    // tslint:disable-next-line:class-name


    var _MatTabGroupBase =
    /*#__PURE__*/
    function (_MatTabGroupMixinBase2) {
      _inherits(_MatTabGroupBase, _MatTabGroupMixinBase2);

      /**
       * @param {?} elementRef
       * @param {?} _changeDetectorRef
       * @param {?=} defaultConfig
       * @param {?=} _animationMode
       */
      function _MatTabGroupBase(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
        var _this10;

        _classCallCheck(this, _MatTabGroupBase);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(_MatTabGroupBase).call(this, elementRef));
        _this10._changeDetectorRef = _changeDetectorRef;
        _this10._animationMode = _animationMode;
        /**
         * All of the tabs that belong to the group.
         */

        _this10._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["QueryList"]();
        /**
         * The tab index that should be selected after the content has been checked.
         */

        _this10._indexToSelect = 0;
        /**
         * Snapshot of the height of the tab body wrapper before another tab is activated.
         */

        _this10._tabBodyWrapperHeight = 0;
        /**
         * Subscription to tabs being added/removed.
         */

        _this10._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Subscription to changes in the tab labels.
         */

        _this10._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        _this10._dynamicHeight = false;
        _this10._selectedIndex = null;
        /**
         * Position of the tab header.
         */

        _this10.headerPosition = 'above';
        /**
         * Output to enable support for two-way binding on `[(selectedIndex)]`
         */

        _this10.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when focus has changed within a tab group.
         */

        _this10.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when the body animation has completed
         */

        _this10.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when the tab selection has changed.
         */

        _this10.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
        _this10._groupId = nextId++;
        _this10.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : '500ms';
        _this10.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
        return _this10;
      }
      /**
       * Whether the tab group should grow to the size of the active tab.
       * @return {?}
       */


      _createClass(_MatTabGroupBase, [{
        key: "ngAfterContentChecked",

        /**
         * After the content is checked, this component knows what tabs have been defined
         * and what the selected index should be. This is where we can know exactly what position
         * each tab should be in according to the new selected index, and additionally we know how
         * a new selected tab should transition in (from the left or right).
         * @return {?}
         */
        value: function ngAfterContentChecked() {
          var _this11 = this;

          // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
          // the amount of tabs changes before the actual change detection runs.

          /** @type {?} */
          var indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect); // If there is a change in selected index, emit a change event. Should not trigger if
          // the selected index has not yet been initialized.


          if (this._selectedIndex != indexToSelect) {
            /** @type {?} */
            var isFirstRun = this._selectedIndex == null;

            if (!isFirstRun) {
              this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
            } // Changing these values after change detection has run
            // since the checked content may contain references to them.


            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              _this11._tabs.forEach(
              /**
              * @param {?} tab
              * @param {?} index
              * @return {?}
              */
              function (tab, index) {
                return tab.isActive = index === indexToSelect;
              });

              if (!isFirstRun) {
                _this11.selectedIndexChange.emit(indexToSelect);
              }
            });
          } // Setup the position for each tab and optionally setup an origin on the next selected tab.


          this._tabs.forEach(
          /**
          * @param {?} tab
          * @param {?} index
          * @return {?}
          */
          function (tab, index) {
            tab.position = index - indexToSelect; // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.

            if (_this11._selectedIndex != null && tab.position == 0 && !tab.origin) {
              tab.origin = indexToSelect - _this11._selectedIndex;
            }
          });

          if (this._selectedIndex !== indexToSelect) {
            this._selectedIndex = indexToSelect;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this12 = this;

          this._subscribeToAllTabChanges();

          this._subscribeToTabLabels(); // Subscribe to changes in the amount of tabs, in order to be
          // able to re-render the content as new tabs are added or removed.


          this._tabsSubscription = this._tabs.changes.subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var indexToSelect = _this12._clampTabIndex(_this12._indexToSelect); // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.


            if (indexToSelect === _this12._selectedIndex) {
              /** @type {?} */
              var tabs = _this12._tabs.toArray();

              for (var i = 0; i < tabs.length; i++) {
                if (tabs[i].isActive) {
                  // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                  // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                  // adding a tab within the `selectedIndexChange` event.
                  _this12._indexToSelect = _this12._selectedIndex = i;
                  break;
                }
              }
            }

            _this12._changeDetectorRef.markForCheck();
          });
        }
        /**
         * Listens to changes in all of the tabs.
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribeToAllTabChanges",
        value: function _subscribeToAllTabChanges() {
          var _this13 = this;

          // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
          // some that are inside of nested tab groups. We filter them out manually by checking that
          // the closest group to the tab is the current one.
          this._allTabs.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._allTabs)).subscribe(
          /**
          * @param {?} tabs
          * @return {?}
          */
          function (tabs) {
            _this13._tabs.reset(tabs.filter(
            /**
            * @param {?} tab
            * @return {?}
            */
            function (tab) {
              // @breaking-change 10.0.0 Remove null check for `_closestTabGroup`
              // once it becomes a required parameter in MatTab.
              return !tab._closestTabGroup || tab._closestTabGroup === _this13;
            }));

            _this13._tabs.notifyOnChanges();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._tabs.destroy();

          this._tabsSubscription.unsubscribe();

          this._tabLabelSubscription.unsubscribe();
        }
        /**
         * Re-aligns the ink bar to the selected tab element.
         * @return {?}
         */

      }, {
        key: "realignInkBar",
        value: function realignInkBar() {
          if (this._tabHeader) {
            this._tabHeader._alignInkBarToSelectedTab();
          }
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_focusChanged",
        value: function _focusChanged(index) {
          this.focusChange.emit(this._createChangeEvent(index));
        }
        /**
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_createChangeEvent",
        value: function _createChangeEvent(index) {
          /** @type {?} */
          var event = new MatTabChangeEvent();
          event.index = index;

          if (this._tabs && this._tabs.length) {
            event.tab = this._tabs.toArray()[index];
          }

          return event;
        }
        /**
         * Subscribes to changes in the tab labels. This is needed, because the \@Input for the label is
         * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
         * binding to be updated, we need to subscribe to changes in it and trigger change detection
         * manually.
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribeToTabLabels",
        value: function _subscribeToTabLabels() {
          var _this14 = this;

          if (this._tabLabelSubscription) {
            this._tabLabelSubscription.unsubscribe();
          }

          this._tabLabelSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this._tabs.map(
          /**
          * @param {?} tab
          * @return {?}
          */
          function (tab) {
            return tab._stateChanges;
          }))).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this14._changeDetectorRef.markForCheck();
          });
        }
        /**
         * Clamps the given index to the bounds of 0 and the tabs length.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_clampTabIndex",
        value: function _clampTabIndex(index) {
          // Note the `|| 0`, which ensures that values like NaN can't get through
          // and which would otherwise throw the component into an infinite loop
          // (since Math.max(NaN, 0) === NaN).
          return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
        }
        /**
         * Returns a unique id for each tab label element
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getTabLabelId",
        value: function _getTabLabelId(i) {
          return "mat-tab-label-".concat(this._groupId, "-").concat(i);
        }
        /**
         * Returns a unique id for each tab content element
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getTabContentId",
        value: function _getTabContentId(i) {
          return "mat-tab-content-".concat(this._groupId, "-").concat(i);
        }
        /**
         * Sets the height of the body wrapper to the height of the activating tab if dynamic
         * height property is true.
         * @param {?} tabHeight
         * @return {?}
         */

      }, {
        key: "_setTabBodyWrapperHeight",
        value: function _setTabBodyWrapperHeight(tabHeight) {
          if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
            return;
          }
          /** @type {?} */


          var wrapper = this._tabBodyWrapper.nativeElement;
          wrapper.style.height = this._tabBodyWrapperHeight + 'px'; // This conditional forces the browser to paint the height so that
          // the animation to the new height can have an origin.

          if (this._tabBodyWrapper.nativeElement.offsetHeight) {
            wrapper.style.height = tabHeight + 'px';
          }
        }
        /**
         * Removes the height of the tab body wrapper.
         * @return {?}
         */

      }, {
        key: "_removeTabBodyWrapperHeight",
        value: function _removeTabBodyWrapperHeight() {
          /** @type {?} */
          var wrapper = this._tabBodyWrapper.nativeElement;
          this._tabBodyWrapperHeight = wrapper.clientHeight;
          wrapper.style.height = '';
          this.animationDone.emit();
        }
        /**
         * Handle click events, setting new selected index if appropriate.
         * @param {?} tab
         * @param {?} tabHeader
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick(tab, tabHeader, index) {
          if (!tab.disabled) {
            this.selectedIndex = tabHeader.focusIndex = index;
          }
        }
        /**
         * Retrieves the tabindex for the tab.
         * @param {?} tab
         * @param {?} idx
         * @return {?}
         */

      }, {
        key: "_getTabIndex",
        value: function _getTabIndex(tab, idx) {
          if (tab.disabled) {
            return null;
          }

          return this.selectedIndex === idx ? 0 : -1;
        }
      }, {
        key: "dynamicHeight",
        get: function get() {
          return this._dynamicHeight;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._dynamicHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
        }
        /**
         * The index of the active tab.
         * @return {?}
         */

      }, {
        key: "selectedIndex",
        get: function get() {
          return this._selectedIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._indexToSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value, null);
        }
        /**
         * Duration for the tab animation. Will be normalized to milliseconds if no units are set.
         * @return {?}
         */

      }, {
        key: "animationDuration",
        get: function get() {
          return this._animationDuration;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
        }
        /**
         * Background color of the tab group.
         * @return {?}
         */

      }, {
        key: "backgroundColor",
        get: function get() {
          return this._backgroundColor;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var nativeElement = this._elementRef.nativeElement;
          nativeElement.classList.remove("mat-background-".concat(this.backgroundColor));

          if (value) {
            nativeElement.classList.add("mat-background-".concat(value));
          }

          this._backgroundColor = value;
        }
      }]);

      return _MatTabGroupBase;
    }(_MatTabGroupMixinBase);

    _MatTabGroupBase.ɵfac = function _MatTabGroupBase_Factory(t) {
      return new (t || _MatTabGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    _MatTabGroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: _MatTabGroupBase,
      inputs: {
        headerPosition: "headerPosition",
        animationDuration: "animationDuration",
        disablePagination: "disablePagination",
        dynamicHeight: "dynamicHeight",
        selectedIndex: "selectedIndex",
        backgroundColor: "backgroundColor"
      },
      outputs: {
        selectedIndexChange: "selectedIndexChange",
        focusChange: "focusChange",
        animationDone: "animationDone",
        selectedTabChange: "selectedTabChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    _MatTabGroupBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [MAT_TABS_CONFIG]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    _MatTabGroupBase.propDecorators = {
      dynamicHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      headerPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      animationDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      disablePagination: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      backgroundColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      focusChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      animationDone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      selectedTabChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabGroupBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_TABS_CONFIG]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        headerPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        focusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        animationDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        selectedTabChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disablePagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dynamicHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Material design tab-group component. Supports basic tab pairs (label + content) and includes
     * animated ink-bar, keyboard navigation, and screen reader.
     * See: https://material.io/design/components/tabs.html
     */


    var MatTabGroup =
    /*#__PURE__*/
    function (_MatTabGroupBase2) {
      _inherits(MatTabGroup, _MatTabGroupBase2);

      /**
       * @param {?} elementRef
       * @param {?} changeDetectorRef
       * @param {?=} defaultConfig
       * @param {?=} animationMode
       */
      function MatTabGroup(elementRef, changeDetectorRef, defaultConfig, animationMode) {
        _classCallCheck(this, MatTabGroup);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatTabGroup).call(this, elementRef, changeDetectorRef, defaultConfig, animationMode));
      }

      return MatTabGroup;
    }(_MatTabGroupBase);

    MatTabGroup.ɵfac = function MatTabGroup_Factory(t) {
      return new (t || MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatTabGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatTabGroup,
      selectors: [["mat-tab-group"]],
      contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTab, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
        }
      },
      viewQuery: function MatTabGroup_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c4, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
        }
      },
      hostAttrs: [1, "mat-tab-group"],
      hostVars: 4,
      hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-group-dynamic-height", ctx.dynamicHeight)("mat-tab-group-inverted-header", ctx.headerPosition === "below");
        }
      },
      inputs: {
        color: "color",
        disableRipple: "disableRipple"
      },
      exportAs: ["matTabGroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 7,
      consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mat-tab-label", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "disabled", "matRippleDisabled", "click", 4, "ngFor", "ngForOf"], [1, "mat-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tabpanel", 3, "id", "mat-tab-body-active", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", 3, "id", "disabled", "matRippleDisabled", "click"], [1, "mat-tab-label-content"], [3, "ngIf"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering"]],
      template: function MatTabGroup_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-header", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
            return ctx._focusChanged($event);
          })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
            return ctx.selectedIndex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabGroup_div_2_Template, 4, 14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MatTabGroup_mat_tab_body_5_Template, 1, 8, "mat-tab-body", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._tabs);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._tabs);
        }
      },
      directives: function directives() {
        return [MatTabHeader, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], MatTabLabelWrapper, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], MatTabBody];
      },
      styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],
      encapsulation: 2
    });
    /** @nocollapse */

    MatTabGroup.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [MAT_TABS_CONFIG]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatTabGroup.propDecorators = {
      _allTabs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
        args: [MatTab, {
          descendants: true
        }]
      }],
      _tabBodyWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabBodyWrapper']
      }],
      _tabHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabHeader']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-tab-group',
          exportAs: 'matTabGroup',
          template: "<mat-tab-header #tabHeader\n               [selectedIndex]=\"selectedIndex || 0\"\n               [disableRipple]=\"disableRipple\"\n               [disablePagination]=\"disablePagination\"\n               (indexFocused)=\"_focusChanged($event)\"\n               (selectFocusedIndex)=\"selectedIndex = $event\">\n  <div class=\"mat-tab-label\" role=\"tab\" matTabLabelWrapper mat-ripple cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(tab, i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex == i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mat-tab-label-active]=\"selectedIndex == i\"\n       [disabled]=\"tab.disabled\"\n       [matRippleDisabled]=\"tab.disabled || disableRipple\"\n       (click)=\"_handleClick(tab, tabHeader, i)\">\n\n\n    <div class=\"mat-tab-label-content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</ng-template>\n    </div>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-tab-body-active]=\"selectedIndex == i\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
          inputs: ['color', 'disableRipple'],
          providers: [{
            provide: MAT_TAB_GROUP,
            useExisting: MatTabGroup
          }],
          host: {
            'class': 'mat-tab-group',
            '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
            '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"'
          },
          styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_TABS_CONFIG]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        _allTabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [MatTab, {
            descendants: true
          }]
        }],
        _tabBodyWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabBodyWrapper']
        }],
        _tabHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabHeader']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-label-wrapper.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatTabLabelWrapper.

    /**
     * \@docs-private
     */


    var MatTabLabelWrapperBase = function MatTabLabelWrapperBase() {
      _classCallCheck(this, MatTabLabelWrapperBase);
    };
    /** @type {?} */


    var _MatTabLabelWrapperMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabLabelWrapperBase);
    /**
     * Used in the `mat-tab-group` view to display tab labels.
     * \@docs-private
     */


    var MatTabLabelWrapper =
    /*#__PURE__*/
    function (_MatTabLabelWrapperMi) {
      _inherits(MatTabLabelWrapper, _MatTabLabelWrapperMi);

      /**
       * @param {?} elementRef
       */
      function MatTabLabelWrapper(elementRef) {
        var _this15;

        _classCallCheck(this, MatTabLabelWrapper);

        _this15 = _possibleConstructorReturn(this, _getPrototypeOf(MatTabLabelWrapper).call(this));
        _this15.elementRef = elementRef;
        return _this15;
      }
      /**
       * Sets focus on the wrapper element
       * @return {?}
       */


      _createClass(MatTabLabelWrapper, [{
        key: "focus",
        value: function focus() {
          this.elementRef.nativeElement.focus();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getOffsetLeft",
        value: function getOffsetLeft() {
          return this.elementRef.nativeElement.offsetLeft;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getOffsetWidth",
        value: function getOffsetWidth() {
          return this.elementRef.nativeElement.offsetWidth;
        }
      }]);

      return MatTabLabelWrapper;
    }(_MatTabLabelWrapperMixinBase);

    MatTabLabelWrapper.ɵfac = function MatTabLabelWrapper_Factory(t) {
      return new (t || MatTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
    };

    MatTabLabelWrapper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatTabLabelWrapper,
      selectors: [["", "matTabLabelWrapper", ""]],
      hostVars: 3,
      hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled);
        }
      },
      inputs: {
        disabled: "disabled"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatTabLabelWrapper.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLabelWrapper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[matTabLabelWrapper]',
          inputs: ['disabled'],
          host: {
            '[class.mat-tab-disabled]': 'disabled',
            '[attr.aria-disabled]': '!!disabled'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/paginated-tab-header.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Config used to bind passive event listeners
     * @type {?}
     */


    var passiveEventListenerOptions =
    /** @type {?} */
    Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
     * provide a small affordance to the label next to it.
     * @type {?}
     */

    var EXAGGERATED_OVERSCROLL = 60;
    /**
     * Amount of milliseconds to wait before starting to scroll the header automatically.
     * Set a little conservatively in order to handle fake events dispatched on touch devices.
     * @type {?}
     */

    var HEADER_SCROLL_DELAY = 650;
    /**
     * Interval in milliseconds at which to scroll the header
     * while the user is holding their pointer.
     * @type {?}
     */

    var HEADER_SCROLL_INTERVAL = 100;
    /**
     * Base class for a tab header that supported pagination.
     * \@docs-private
     * @abstract
     */

    var MatPaginatedTabHeader =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} _viewportRuler
       * @param {?} _dir
       * @param {?} _ngZone
       * @param {?=} _platform
       * @param {?=} _animationMode
       */
      function MatPaginatedTabHeader(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
        var _this16 = this;

        _classCallCheck(this, MatPaginatedTabHeader);

        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._viewportRuler = _viewportRuler;
        this._dir = _dir;
        this._ngZone = _ngZone;
        this._platform = _platform;
        this._animationMode = _animationMode;
        /**
         * The distance in pixels that the tab labels should be translated to the left.
         */

        this._scrollDistance = 0;
        /**
         * Whether the header should scroll to the selected index after the view has been checked.
         */

        this._selectedIndexChanged = false;
        /**
         * Emits when the component is destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Whether the controls for pagination should be displayed
         */

        this._showPaginationControls = false;
        /**
         * Whether the tab list can be scrolled more towards the end of the tab label list.
         */

        this._disableScrollAfter = true;
        /**
         * Whether the tab list can be scrolled more towards the beginning of the tab label list.
         */

        this._disableScrollBefore = true;
        /**
         * Stream that will stop the automated scrolling.
         */

        this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Whether pagination should be disabled. This can be used to avoid unnecessary
         * layout recalculations if it's known that pagination won't be required.
         */

        this.disablePagination = false;
        this._selectedIndex = 0;
        /**
         * Event emitted when the option is selected.
         */

        this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when a label is focused.
         */

        this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](); // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.

        _ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(_elementRef.nativeElement, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this16._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this16._stopInterval();
          });
        });
      }
      /**
       * The index of the active tab.
       * @return {?}
       */


      _createClass(MatPaginatedTabHeader, [{
        key: "ngAfterViewInit",

        /**
         * @return {?}
         */
        value: function ngAfterViewInit() {
          var _this17 = this;

          // We need to handle these events manually, because we want to bind passive event listeners.
          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this17._handlePaginatorPress('before');
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this17._handlePaginatorPress('after');
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this18 = this;

          /** @type {?} */
          var dirChange = this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
          /** @type {?} */

          var resize = this._viewportRuler.change(150);
          /** @type {?} */


          var realign =
          /**
          * @return {?}
          */
          function realign() {
            _this18.updatePagination();

            _this18._alignInkBarToSelectedTab();
          };

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._items).withHorizontalOrientation(this._getLayoutDirection()).withWrap();

          this._keyManager.updateActiveItem(0); // Defer the first call in order to allow for slower browsers to lay out the elements.
          // This helps in cases where the user lands directly on a page with paginated tabs.


          typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign(); // On dir change or window resize, realign the ink bar and update the orientation of
          // the key manager if the direction has changed.

          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(dirChange, resize, this._items.changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            realign();

            _this18._keyManager.withHorizontalOrientation(_this18._getLayoutDirection());
          }); // If there is a change in the focus key manager we need to emit the `indexFocused`
          // event in order to provide a public event that notifies about focus changes. Also we realign
          // the tabs container by scrolling the new focused tab into the visible section.

          this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} newFocusIndex
          * @return {?}
          */
          function (newFocusIndex) {
            _this18.indexFocused.emit(newFocusIndex);

            _this18._setTabFocus(newFocusIndex);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // If the number of tab labels have changed, check if scrolling should be enabled
          if (this._tabLabelCount != this._items.length) {
            this.updatePagination();
            this._tabLabelCount = this._items.length;

            this._changeDetectorRef.markForCheck();
          } // If the selected index has changed, scroll to the label and check if the scrolling controls
          // should be disabled.


          if (this._selectedIndexChanged) {
            this._scrollToLabel(this._selectedIndex);

            this._checkScrollingControls();

            this._alignInkBarToSelectedTab();

            this._selectedIndexChanged = false;

            this._changeDetectorRef.markForCheck();
          } // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
          // then translate the header to reflect this.


          if (this._scrollDistanceChanged) {
            this._updateTabScrollPosition();

            this._scrollDistanceChanged = false;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();

          this._stopScrolling.complete();
        }
        /**
         * Handles keyboard events on the header.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          // We don't handle any key bindings with a modifier key.
          if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["hasModifierKey"])(event)) {
            return;
          }

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["HOME"]:
              this._keyManager.setFirstItemActive();

              event.preventDefault();
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["END"]:
              this._keyManager.setLastItemActive();

              event.preventDefault();
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["SPACE"]:
              this.selectFocusedIndex.emit(this.focusIndex);

              this._itemSelected(event);

              break;

            default:
              this._keyManager.onKeydown(event);

          }
        }
        /**
         * Callback for when the MutationObserver detects that the content has changed.
         * @return {?}
         */

      }, {
        key: "_onContentChanges",
        value: function _onContentChanges() {
          var _this19 = this;

          /** @type {?} */
          var textContent = this._elementRef.nativeElement.textContent; // We need to diff the text content of the header, because the MutationObserver callback
          // will fire even if the text content didn't change which is inefficient and is prone
          // to infinite loops if a poorly constructed expression is passed in (see #14249).

          if (textContent !== this._currentTextContent) {
            this._currentTextContent = textContent || ''; // The content observer runs outside the `NgZone` by default, which
            // means that we need to bring the callback back in ourselves.

            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this19.updatePagination();

              _this19._alignInkBarToSelectedTab();

              _this19._changeDetectorRef.markForCheck();
            });
          }
        }
        /**
         * Updates the view whether pagination should be enabled or not.
         *
         * WARNING: Calling this method can be very costly in terms of performance. It should be called
         * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
         * page.
         * @return {?}
         */

      }, {
        key: "updatePagination",
        value: function updatePagination() {
          this._checkPaginationEnabled();

          this._checkScrollingControls();

          this._updateTabScrollPosition();
        }
        /**
         * Tracks which element has focus; used for keyboard navigation
         * @return {?}
         */

      }, {
        key: "_isValidIndex",

        /**
         * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
         * providing a valid index and return true.
         * @param {?} index
         * @return {?}
         */
        value: function _isValidIndex(index) {
          if (!this._items) {
            return true;
          }
          /** @type {?} */


          var tab = this._items ? this._items.toArray()[index] : null;
          return !!tab && !tab.disabled;
        }
        /**
         * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
         * scrolling is enabled.
         * @param {?} tabIndex
         * @return {?}
         */

      }, {
        key: "_setTabFocus",
        value: function _setTabFocus(tabIndex) {
          if (this._showPaginationControls) {
            this._scrollToLabel(tabIndex);
          }

          if (this._items && this._items.length) {
            this._items.toArray()[tabIndex].focus(); // Do not let the browser manage scrolling to focus the element, this will be handled
            // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
            // should be the full width minus the offset width.

            /** @type {?} */


            var containerEl = this._tabListContainer.nativeElement;
            /** @type {?} */

            var dir = this._getLayoutDirection();

            if (dir == 'ltr') {
              containerEl.scrollLeft = 0;
            } else {
              containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
            }
          }
        }
        /**
         * The layout direction of the containing app.
         * @return {?}
         */

      }, {
        key: "_getLayoutDirection",
        value: function _getLayoutDirection() {
          return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * Performs the CSS transformation on the tab list that will cause the list to scroll.
         * @return {?}
         */

      }, {
        key: "_updateTabScrollPosition",
        value: function _updateTabScrollPosition() {
          if (this.disablePagination) {
            return;
          }
          /** @type {?} */


          var scrollDistance = this.scrollDistance;
          /** @type {?} */

          var platform = this._platform;
          /** @type {?} */

          var translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance; // Don't use `translate3d` here because we don't want to create a new layer. A new layer
          // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
          // and ripples will exceed the boundaries of the visible tab bar.
          // See: https://github.com/angular/components/issues/10276
          // We round the `transform` here, because transforms with sub-pixel precision cause some
          // browsers to blur the content of the element.

          this._tabList.nativeElement.style.transform = "translateX(".concat(Math.round(translateX), "px)"); // Setting the `transform` on IE will change the scroll offset of the parent, causing the
          // position to be thrown off in some cases. We have to reset it ourselves to ensure that
          // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
          // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).
          // @breaking-change 9.0.0 Remove null check for `platform` after it can no longer be undefined.

          if (platform && (platform.TRIDENT || platform.EDGE)) {
            this._tabListContainer.nativeElement.scrollLeft = 0;
          }
        }
        /**
         * Sets the distance in pixels that the tab header should be transformed in the X-axis.
         * @return {?}
         */

      }, {
        key: "_scrollHeader",

        /**
         * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
         * the end of the list, respectively). The distance to scroll is computed to be a third of the
         * length of the tab list view window.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @param {?} direction
         * @return {?}
         */
        value: function _scrollHeader(direction) {
          /** @type {?} */
          var viewLength = this._tabListContainer.nativeElement.offsetWidth; // Move the scroll distance one-third the length of the tab list's viewport.

          /** @type {?} */

          var scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
          return this._scrollTo(this._scrollDistance + scrollAmount);
        }
        /**
         * Handles click events on the pagination arrows.
         * @param {?} direction
         * @return {?}
         */

      }, {
        key: "_handlePaginatorClick",
        value: function _handlePaginatorClick(direction) {
          this._stopInterval();

          this._scrollHeader(direction);
        }
        /**
         * Moves the tab list such that the desired tab label (marked by index) is moved into view.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @param {?} labelIndex
         * @return {?}
         */

      }, {
        key: "_scrollToLabel",
        value: function _scrollToLabel(labelIndex) {
          if (this.disablePagination) {
            return;
          }
          /** @type {?} */


          var selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;

          if (!selectedLabel) {
            return;
          } // The view length is the visible width of the tab labels.

          /** @type {?} */


          var viewLength = this._tabListContainer.nativeElement.offsetWidth;
          var _selectedLabel$elemen = selectedLabel.elementRef.nativeElement,
              offsetLeft = _selectedLabel$elemen.offsetLeft,
              offsetWidth = _selectedLabel$elemen.offsetWidth;
          /** @type {?} */

          var labelBeforePos;
          /** @type {?} */

          var labelAfterPos;

          if (this._getLayoutDirection() == 'ltr') {
            labelBeforePos = offsetLeft;
            labelAfterPos = labelBeforePos + offsetWidth;
          } else {
            labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft;
            labelBeforePos = labelAfterPos - offsetWidth;
          }
          /** @type {?} */


          var beforeVisiblePos = this.scrollDistance;
          /** @type {?} */

          var afterVisiblePos = this.scrollDistance + viewLength;

          if (labelBeforePos < beforeVisiblePos) {
            // Scroll header to move label to the before direction
            this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
          } else if (labelAfterPos > afterVisiblePos) {
            // Scroll header to move label to the after direction
            this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
          }
        }
        /**
         * Evaluate whether the pagination controls should be displayed. If the scroll width of the
         * tab list is wider than the size of the header container, then the pagination controls should
         * be shown.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @return {?}
         */

      }, {
        key: "_checkPaginationEnabled",
        value: function _checkPaginationEnabled() {
          if (this.disablePagination) {
            this._showPaginationControls = false;
          } else {
            /** @type {?} */
            var isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;

            if (!isEnabled) {
              this.scrollDistance = 0;
            }

            if (isEnabled !== this._showPaginationControls) {
              this._changeDetectorRef.markForCheck();
            }

            this._showPaginationControls = isEnabled;
          }
        }
        /**
         * Evaluate whether the before and after controls should be enabled or disabled.
         * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
         * before button. If the header is at the end of the list (scroll distance is equal to the
         * maximum distance we can scroll), then disable the after button.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @return {?}
         */

      }, {
        key: "_checkScrollingControls",
        value: function _checkScrollingControls() {
          if (this.disablePagination) {
            this._disableScrollAfter = this._disableScrollBefore = true;
          } else {
            // Check if the pagination arrows should be activated.
            this._disableScrollBefore = this.scrollDistance == 0;
            this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Determines what is the maximum length in pixels that can be set for the scroll distance. This
         * is equal to the difference in width between the tab list container and tab header container.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @return {?}
         */

      }, {
        key: "_getMaxScrollDistance",
        value: function _getMaxScrollDistance() {
          /** @type {?} */
          var lengthOfTabList = this._tabList.nativeElement.scrollWidth;
          /** @type {?} */

          var viewLength = this._tabListContainer.nativeElement.offsetWidth;
          return lengthOfTabList - viewLength || 0;
        }
        /**
         * Tells the ink-bar to align itself to the current label wrapper
         * @return {?}
         */

      }, {
        key: "_alignInkBarToSelectedTab",
        value: function _alignInkBarToSelectedTab() {
          /** @type {?} */
          var selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
          /** @type {?} */

          var selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;

          if (selectedLabelWrapper) {
            this._inkBar.alignToElement(selectedLabelWrapper);
          } else {
            this._inkBar.hide();
          }
        }
        /**
         * Stops the currently-running paginator interval.
         * @return {?}
         */

      }, {
        key: "_stopInterval",
        value: function _stopInterval() {
          this._stopScrolling.next();
        }
        /**
         * Handles the user pressing down on one of the paginators.
         * Starts scrolling the header after a certain amount of time.
         * @param {?} direction In which direction the paginator should be scrolled.
         * @param {?=} mouseEvent
         * @return {?}
         */

      }, {
        key: "_handlePaginatorPress",
        value: function _handlePaginatorPress(direction, mouseEvent) {
          var _this20 = this;

          // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
          // null check the `button`, but we do it so we don't break tests that use fake events.
          if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
            return;
          } // Avoid overlapping timers.


          this._stopInterval(); // Start a timer after the delay and keep firing based on the interval.


          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL) // Keep the timer going until something tells it to stop or the component is destroyed.
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this._stopScrolling, this._destroyed))).subscribe(
          /**
          * @return {?}
          */
          function () {
            var _this20$_scrollHeader = _this20._scrollHeader(direction),
                maxScrollDistance = _this20$_scrollHeader.maxScrollDistance,
                distance = _this20$_scrollHeader.distance; // Stop the timer if we've reached the start or the end.


            if (distance === 0 || distance >= maxScrollDistance) {
              _this20._stopInterval();
            }
          });
        }
        /**
         * Scrolls the header to a given position.
         * @private
         * @param {?} position Position to which to scroll.
         * @return {?} Information on the current scroll distance and the maximum.
         */

      }, {
        key: "_scrollTo",
        value: function _scrollTo(position) {
          if (this.disablePagination) {
            return {
              maxScrollDistance: 0,
              distance: 0
            };
          }
          /** @type {?} */


          var maxScrollDistance = this._getMaxScrollDistance();

          this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position)); // Mark that the scroll distance has changed so that after the view is checked, the CSS
          // transformation can move the header.

          this._scrollDistanceChanged = true;

          this._checkScrollingControls();

          return {
            maxScrollDistance: maxScrollDistance,
            distance: this._scrollDistance
          };
        }
      }, {
        key: "selectedIndex",
        get: function get() {
          return this._selectedIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value);

          if (this._selectedIndex != value) {
            this._selectedIndexChanged = true;
            this._selectedIndex = value;

            if (this._keyManager) {
              this._keyManager.updateActiveItem(value);
            }
          }
        }
      }, {
        key: "focusIndex",
        get: function get() {
          return this._keyManager ?
          /** @type {?} */
          this._keyManager.activeItemIndex : 0;
        }
        /**
         * When the focus index is set, we must manually send focus to the correct label
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
            return;
          }

          this._keyManager.setActiveItem(value);
        }
      }, {
        key: "scrollDistance",
        get: function get() {
          return this._scrollDistance;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._scrollTo(value);
        }
      }]);

      return MatPaginatedTabHeader;
    }();

    MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(t) {
      return new (t || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatPaginatedTabHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatPaginatedTabHeader,
      inputs: {
        disablePagination: "disablePagination"
      }
    });
    /** @nocollapse */

    MatPaginatedTabHeader.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatPaginatedTabHeader.propDecorators = {
      disablePagination: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatPaginatedTabHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        disablePagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-header.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base class with all of the `MatTabHeader` functionality.
     * \@docs-private
     * @abstract
     */
    // tslint:disable-next-line:class-name


    var _MatTabHeaderBase =
    /*#__PURE__*/
    function (_MatPaginatedTabHeade) {
      _inherits(_MatTabHeaderBase, _MatPaginatedTabHeade);

      /**
       * @param {?} elementRef
       * @param {?} changeDetectorRef
       * @param {?} viewportRuler
       * @param {?} dir
       * @param {?} ngZone
       * @param {?} platform
       * @param {?=} animationMode
       */
      function _MatTabHeaderBase(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
      animationMode) {
        var _this21;

        _classCallCheck(this, _MatTabHeaderBase);

        _this21 = _possibleConstructorReturn(this, _getPrototypeOf(_MatTabHeaderBase).call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode));
        _this21._disableRipple = false;
        return _this21;
      }
      /**
       * Whether the ripple effect is disabled or not.
       * @return {?}
       */


      _createClass(_MatTabHeaderBase, [{
        key: "_itemSelected",

        /**
         * @protected
         * @param {?} event
         * @return {?}
         */
        value: function _itemSelected(event) {
          event.preventDefault();
        }
      }, {
        key: "disableRipple",
        get: function get() {
          return this._disableRipple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
        }
      }]);

      return _MatTabHeaderBase;
    }(MatPaginatedTabHeader);

    _MatTabHeaderBase.ɵfac = function _MatTabHeaderBase_Factory(t) {
      return new (t || _MatTabHeaderBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    _MatTabHeaderBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: _MatTabHeaderBase,
      inputs: {
        disableRipple: "disableRipple"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    _MatTabHeaderBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    _MatTabHeaderBase.propDecorators = {
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabHeaderBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * The header of the tab group which displays a list of all the tabs in the tab group. Includes
     * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
     * width of the header container, then arrows will be displayed to allow the user to scroll
     * left and right across the header.
     * \@docs-private
     */


    var MatTabHeader =
    /*#__PURE__*/
    function (_MatTabHeaderBase2) {
      _inherits(MatTabHeader, _MatTabHeaderBase2);

      /**
       * @param {?} elementRef
       * @param {?} changeDetectorRef
       * @param {?} viewportRuler
       * @param {?} dir
       * @param {?} ngZone
       * @param {?} platform
       * @param {?=} animationMode
       */
      function MatTabHeader(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
      animationMode) {
        _classCallCheck(this, MatTabHeader);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatTabHeader).call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode));
      }

      return MatTabHeader;
    }(_MatTabHeaderBase);

    MatTabHeader.ɵfac = function MatTabHeader_Factory(t) {
      return new (t || MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatTabHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatTabHeader,
      selectors: [["mat-tab-header"]],
      contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLabelWrapper, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._items = _t);
        }
      },
      viewQuery: function MatTabHeader_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](MatInkBar, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c6, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c8, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
        }
      },
      hostAttrs: [1, "mat-tab-header"],
      hostVars: 4,
      hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
        }
      },
      inputs: {
        selectedIndex: "selectedIndex"
      },
      outputs: {
        selectFocusedIndex: "selectFocusedIndex",
        indexFocused: "indexFocused"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 13,
      vars: 8,
      consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-label-container", 3, "keydown"], ["tabListContainer", ""], ["role", "tablist", 1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-labels"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
      template: function MatTabHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabHeader_Template_div_click_0_listener($event) {
            return ctx._handlePaginatorClick("before");
          })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) {
            return ctx._handlePaginatorPress("before", $event);
          })("touchend", function MatTabHeader_Template_div_touchend_0_listener($event) {
            return ctx._stopInterval();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
            return ctx._handleKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener($event) {
            return ctx._onContentChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-ink-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) {
            return ctx._handlePaginatorPress("after", $event);
          })("click", function MatTabHeader_Template_div_click_10_listener($event) {
            return ctx._handlePaginatorClick("after");
          })("touchend", function MatTabHeader_Template_div_touchend_10_listener($event) {
            return ctx._stopInterval();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["CdkObserveContent"], MatInkBar],
      styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center] .mat-tab-labels{justify-content:center}[mat-align-tabs=end] .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"],
      encapsulation: 2
    });
    /** @nocollapse */

    MatTabHeader.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatTabHeader.propDecorators = {
      _items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
        args: [MatTabLabelWrapper, {
          descendants: false
        }]
      }],
      _inkBar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatInkBar, {
          static: true
        }]
      }],
      _tabListContainer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabListContainer', {
          static: true
        }]
      }],
      _tabList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabList', {
          static: true
        }]
      }],
      _nextPaginator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['nextPaginator']
      }],
      _previousPaginator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['previousPaginator']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-tab-header',
          template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-label-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    #tabList\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    role=\"tablist\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-labels\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
          inputs: ['selectedIndex'],
          outputs: ['selectFocusedIndex', 'indexFocused'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
          host: {
            'class': 'mat-tab-header',
            '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
            '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'"
          },
          styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center] .mat-tab-labels{justify-content:center}[mat-align-tabs=end] .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        _items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [MatTabLabelWrapper, {
            descendants: false
          }]
        }],
        _inkBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatInkBar, {
            static: true
          }]
        }],
        _tabListContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabListContainer', {
            static: true
          }]
        }],
        _tabList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabList', {
            static: true
          }]
        }],
        _nextPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['nextPaginator']
        }],
        _previousPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['previousPaginator']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-nav-bar/tab-nav-bar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base class with all of the `MatTabNav` functionality.
     * \@docs-private
     * @abstract
     */
    // tslint:disable-next-line:class-name


    var _MatTabNavBase =
    /*#__PURE__*/
    function (_MatPaginatedTabHeade2) {
      _inherits(_MatTabNavBase, _MatPaginatedTabHeade2);

      /**
       * @param {?} elementRef
       * @param {?} dir
       * @param {?} ngZone
       * @param {?} changeDetectorRef
       * @param {?} viewportRuler
       * @param {?=} platform
       * @param {?=} animationMode
       */
      function _MatTabNavBase(elementRef, dir, ngZone, changeDetectorRef, viewportRuler,
      /**
       * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
       */
      platform, animationMode) {
        var _this22;

        _classCallCheck(this, _MatTabNavBase);

        _this22 = _possibleConstructorReturn(this, _getPrototypeOf(_MatTabNavBase).call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode));
        _this22._disableRipple = false;
        /**
         * Theme color of the nav bar.
         */

        _this22.color = 'primary';
        return _this22;
      }
      /**
       * Background color of the tab nav.
       * @return {?}
       */


      _createClass(_MatTabNavBase, [{
        key: "_itemSelected",

        /**
         * @protected
         * @return {?}
         */
        value: function _itemSelected() {} // noop

        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this23 = this;

          // We need this to run before the `changes` subscription in parent to ensure that the
          // selectedIndex is up-to-date by the time the super class starts looking for it.
          this._items.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this23.updateActiveLink();
          });

          _get(_getPrototypeOf(_MatTabNavBase.prototype), "ngAfterContentInit", this).call(this);
        }
        /**
         * Notifies the component that the active link has been changed.
         * \@breaking-change 8.0.0 `element` parameter to be removed.
         * @param {?=} _element
         * @return {?}
         */

      }, {
        key: "updateActiveLink",
        value: function updateActiveLink(_element) {
          if (!this._items) {
            return;
          }
          /** @type {?} */


          var items = this._items.toArray();

          for (var i = 0; i < items.length; i++) {
            if (items[i].active) {
              this.selectedIndex = i;

              this._changeDetectorRef.markForCheck();

              return;
            }
          } // The ink bar should hide itself if no items are active.


          this.selectedIndex = -1;

          this._inkBar.hide();
        }
      }, {
        key: "backgroundColor",
        get: function get() {
          return this._backgroundColor;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var classList = this._elementRef.nativeElement.classList;
          classList.remove("mat-background-".concat(this.backgroundColor));

          if (value) {
            classList.add("mat-background-".concat(value));
          }

          this._backgroundColor = value;
        }
        /**
         * Whether the ripple effect is disabled or not.
         * @return {?}
         */

      }, {
        key: "disableRipple",
        get: function get() {
          return this._disableRipple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
        }
      }]);

      return _MatTabNavBase;
    }(MatPaginatedTabHeader);

    _MatTabNavBase.ɵfac = function _MatTabNavBase_Factory(t) {
      return new (t || _MatTabNavBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    _MatTabNavBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: _MatTabNavBase,
      inputs: {
        color: "color",
        backgroundColor: "backgroundColor",
        disableRipple: "disableRipple"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    _MatTabNavBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    _MatTabNavBase.propDecorators = {
      backgroundColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabNavBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Navigation component matching the styles of the tab group header.
     * Provides anchored navigation with animated ink bar.
     */


    var MatTabNav =
    /*#__PURE__*/
    function (_MatTabNavBase2) {
      _inherits(MatTabNav, _MatTabNavBase2);

      /**
       * @param {?} elementRef
       * @param {?} dir
       * @param {?} ngZone
       * @param {?} changeDetectorRef
       * @param {?} viewportRuler
       * @param {?=} platform
       * @param {?=} animationMode
       */
      function MatTabNav(elementRef, dir, ngZone, changeDetectorRef, viewportRuler,
      /**
       * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
       */
      platform, animationMode) {
        _classCallCheck(this, MatTabNav);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatTabNav).call(this, elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode));
      }

      return MatTabNav;
    }(_MatTabNavBase);

    MatTabNav.ɵfac = function MatTabNav_Factory(t) {
      return new (t || MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatTabNav.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatTabNav,
      selectors: [["", "mat-tab-nav-bar", ""]],
      contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLink, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._items = _t);
        }
      },
      viewQuery: function MatTabNav_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](MatInkBar, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c6, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c8, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
        }
      },
      hostAttrs: [1, "mat-tab-nav-bar", "mat-tab-header"],
      hostVars: 10,
      hostBindings: function MatTabNav_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
        }
      },
      inputs: {
        color: "color"
      },
      exportAs: ["matTabNavBar", "matTabNav"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      attrs: _c9,
      ngContentSelectors: _c0,
      decls: 13,
      vars: 6,
      consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-link-container", 3, "keydown"], ["tabListContainer", ""], [1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-links"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
      template: function MatTabNav_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabNav_Template_div_click_0_listener($event) {
            return ctx._handlePaginatorClick("before");
          })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) {
            return ctx._handlePaginatorPress("before", $event);
          })("touchend", function MatTabNav_Template_div_touchend_0_listener($event) {
            return ctx._stopInterval();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
            return ctx._handleKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener($event) {
            return ctx._onContentChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-ink-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) {
            return ctx._handlePaginatorPress("after", $event);
          })("click", function MatTabNav_Template_div_click_10_listener($event) {
            return ctx._handlePaginatorClick("after");
          })("touchend", function MatTabNav_Template_div_touchend_10_listener($event) {
            return ctx._stopInterval();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["CdkObserveContent"], MatInkBar],
      styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center] .mat-tab-links{justify-content:center}[mat-align-tabs=end] .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"],
      encapsulation: 2
    });
    /** @nocollapse */

    MatTabNav.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatTabNav.propDecorators = {
      _items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return MatTabLink;
        }), {
          descendants: true
        }]
      }],
      _inkBar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatInkBar, {
          static: true
        }]
      }],
      _tabListContainer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabListContainer', {
          static: true
        }]
      }],
      _tabList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabList', {
          static: true
        }]
      }],
      _nextPaginator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['nextPaginator']
      }],
      _previousPaginator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['previousPaginator']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabNav, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: '[mat-tab-nav-bar]',
          exportAs: 'matTabNavBar, matTabNav',
          inputs: ['color'],
          template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div class=\"mat-tab-list\" #tabList (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-links\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
          host: {
            'class': 'mat-tab-nav-bar mat-tab-header',
            '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
            '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
            '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
            '[class.mat-accent]': 'color === "accent"',
            '[class.mat-warn]': 'color === "warn"'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
          styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center] .mat-tab-links{justify-content:center}[mat-align-tabs=end] .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        _items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatTabLink;
          }), {
            descendants: true
          }]
        }],
        _inkBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatInkBar, {
            static: true
          }]
        }],
        _tabListContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabListContainer', {
            static: true
          }]
        }],
        _tabList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabList', {
            static: true
          }]
        }],
        _nextPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['nextPaginator']
        }],
        _previousPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['previousPaginator']
        }]
      });
    })();

    if (false) {} // Boilerplate for applying mixins to MatTabLink.


    var MatTabLinkMixinBase = function MatTabLinkMixinBase() {
      _classCallCheck(this, MatTabLinkMixinBase);
    };
    /** @type {?} */


    var _MatTabLinkMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabLinkMixinBase)));
    /**
     * Base class with all of the `MatTabLink` functionality.
     */
    // tslint:disable-next-line:class-name


    var _MatTabLinkBase =
    /*#__PURE__*/
    function (_MatTabLinkMixinBase2) {
      _inherits(_MatTabLinkBase, _MatTabLinkMixinBase2);

      /**
       * @param {?} _tabNavBar
       * @param {?} elementRef
       * @param {?} globalRippleOptions
       * @param {?} tabIndex
       * @param {?} _focusMonitor
       * @param {?=} animationMode
       */
      function _MatTabLinkBase(_tabNavBar, elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
        var _this24;

        _classCallCheck(this, _MatTabLinkBase);

        _this24 = _possibleConstructorReturn(this, _getPrototypeOf(_MatTabLinkBase).call(this));
        _this24._tabNavBar = _tabNavBar;
        _this24.elementRef = elementRef;
        _this24._focusMonitor = _focusMonitor;
        /**
         * Whether the tab link is active or not.
         */

        _this24._isActive = false;
        _this24.rippleConfig = globalRippleOptions || {};
        _this24.tabIndex = parseInt(tabIndex) || 0;

        if (animationMode === 'NoopAnimations') {
          _this24.rippleConfig.animation = {
            enterDuration: 0,
            exitDuration: 0
          };
        }

        _focusMonitor.monitor(elementRef);

        return _this24;
      }
      /**
       * Whether the link is active.
       * @return {?}
       */


      _createClass(_MatTabLinkBase, [{
        key: "focus",

        /**
         * @return {?}
         */
        value: function focus() {
          this.elementRef.nativeElement.focus();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this.elementRef);
        }
      }, {
        key: "active",
        get: function get() {
          return this._isActive;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._isActive) {
            this._isActive = value;

            this._tabNavBar.updateActiveLink(this.elementRef);
          }
        }
        /**
         * Whether ripples are disabled on interaction.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "rippleDisabled",
        get: function get() {
          return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
        }
      }]);

      return _MatTabLinkBase;
    }(_MatTabLinkMixinBase);

    _MatTabLinkBase.ɵfac = function _MatTabLinkBase_Factory(t) {
      return new (t || _MatTabLinkBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_MatTabNavBase), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    _MatTabLinkBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: _MatTabLinkBase,
      inputs: {
        active: "active"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    _MatTabLinkBase.ctorParameters = function () {
      return [{
        type: _MatTabNavBase
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    _MatTabLinkBase.propDecorators = {
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabLinkBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _MatTabNavBase
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Link inside of a `mat-tab-nav-bar`.
     */


    var MatTabLink =
    /*#__PURE__*/
    function (_MatTabLinkBase2) {
      _inherits(MatTabLink, _MatTabLinkBase2);

      /**
       * @param {?} tabNavBar
       * @param {?} elementRef
       * @param {?} ngZone
       * @param {?} platform
       * @param {?} globalRippleOptions
       * @param {?} tabIndex
       * @param {?} focusMonitor
       * @param {?=} animationMode
       */
      function MatTabLink(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
        var _this25;

        _classCallCheck(this, MatTabLink);

        _this25 = _possibleConstructorReturn(this, _getPrototypeOf(MatTabLink).call(this, tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode));
        _this25._tabLinkRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["RippleRenderer"](_assertThisInitialized(_this25), ngZone, elementRef, platform);

        _this25._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);

        return _this25;
      }
      /**
       * @return {?}
       */


      _createClass(MatTabLink, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(MatTabLink.prototype), "ngOnDestroy", this).call(this);

          this._tabLinkRipple._removeTriggerEvents();
        }
      }]);

      return MatTabLink;
    }(_MatTabLinkBase);

    MatTabLink.ɵfac = function MatTabLink_Factory(t) {
      return new (t || MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatTabLink.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatTabLink,
      selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
      hostAttrs: [1, "mat-tab-link"],
      hostVars: 7,
      hostBindings: function MatTabLink_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-current", ctx.active ? "page" : null)("aria-disabled", ctx.disabled)("tabIndex", ctx.tabIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled)("mat-tab-label-active", ctx.active);
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        tabIndex: "tabIndex"
      },
      exportAs: ["matTabLink"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatTabLink.ctorParameters = function () {
      return [{
        type: MatTabNav
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLink, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[mat-tab-link], [matTabLink]',
          exportAs: 'matTabLink',
          inputs: ['disabled', 'disableRipple', 'tabIndex'],
          host: {
            'class': 'mat-tab-link',
            '[attr.aria-current]': 'active ? "page" : null',
            '[attr.aria-disabled]': 'disabled',
            '[attr.tabIndex]': 'tabIndex',
            '[class.mat-tab-disabled]': 'disabled',
            '[class.mat-tab-label-active]': 'active'
          }
        }]
      }], function () {
        return [{
          type: MatTabNav
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tabs-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatTabsModule = function MatTabsModule() {
      _classCallCheck(this, MatTabsModule);
    };

    MatTabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: MatTabsModule
    });
    MatTabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function MatTabsModule_Factory(t) {
        return new (t || MatTabsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatTabsModule, {
        declarations: function declarations() {
          return [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]];
        },
        exports: function exports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]],
          // Don't export all components because some are only to be used internally.
          exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent],
          declarations: [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-nav-bar/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=tabs.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~cars-cars-module~dashboard-dashboard-module~flights-flights-module-es5.js.map