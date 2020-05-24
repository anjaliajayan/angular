function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~booking-report-booking-report-module~bookings-bookings-module~email-templates-email-template~4a04f70a"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/_modal/modal.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/_modal/modal.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayout_modalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jw-modal\">\r\n    <div class=\"jw-modal-body\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>\r\n<div class=\"jw-modal-background\"></div>";
    /***/
  },

  /***/
  "./src/app/layout/_modal/index.ts":
  /*!****************************************!*\
    !*** ./src/app/layout/_modal/index.ts ***!
    \****************************************/

  /*! exports provided: ModalModule, ModalService */

  /***/
  function srcAppLayout_modalIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modal.module */
    "./src/app/layout/_modal/modal.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return _modal_module__WEBPACK_IMPORTED_MODULE_1__["ModalModule"];
    });
    /* harmony import */


    var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modal.service */
    "./src/app/layout/_modal/modal.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"];
    });
    /***/

  },

  /***/
  "./src/app/layout/_modal/modal.component.less":
  /*!****************************************************!*\
    !*** ./src/app/layout/_modal/modal.component.less ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayout_modalModalComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* MODAL STYLES\n-------------------------------*/\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\njw-modal .jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  margin: 40px;\n}\njw-modal .jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L19tb2RhbC9tb2RhbC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbGF5b3V0L19tb2RhbC9FOi9CZWxhbC9wcm9qZWN0cy9wcm9kdWN0aW9uLWJ1aWxkL2FnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjL2FwcC9sYXlvdXQvX21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO2dDQUNnQztBQ3lEaEM7RUR2REUsaUNBQWlDO0VDeUQvQixhQUFBO0FEdkRKO0FDcURBO0VEbkRFLDhDQUE4QztFQ3lEeEMsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUR2RE4scURBQXFEO0VDMEQvQyxhQUFBO0VEeEROLHNDQUFzQztFQzJEaEMsY0FBQTtBRHpEUjtBQ3lDQTtFQW1CWSxhQUFBO0VBQ0EsZ0JBQUE7RUR6RFYsZ0RBQWdEO0VDNER0QyxZQUFBO0FEMURaO0FDbUNBO0VEakNFLCtDQUErQztFQzhEekMsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUQ1RE4sNEJBQTRCO0VDK0R0QixzQkFBQTtFQUNBLGFBQUE7RUQ3RE4sK0RBQStEO0VDZ0V6RCxZQUFBO0FEOURSO0FDa0VBO0VEaEVFLDZFQUE2RTtFQ2tFM0UsZ0JBQUE7QURoRUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvX21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTU9EQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmp3LW1vZGFsIHtcbiAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBkaXNwbGF5OiBub25lO1xufVxuanctbW9kYWwgLmp3LW1vZGFsIHtcbiAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAuanctbW9kYWwtYmFja2dyb3VuZCAqL1xuICB6LWluZGV4OiAxMDAwO1xuICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5qdy1tb2RhbCAuanctbW9kYWwgLmp3LW1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXG4gIG1hcmdpbjogNDBweDtcbn1cbmp3LW1vZGFsIC5qdy1tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICAvKiBzZW1pLXRyYW5zcGFyZW50IGJsYWNrICAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwLjc1O1xuICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gIHotaW5kZXg6IDkwMDtcbn1cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwiLy8gLy8gLyogTU9EQUwgU1RZTEVTXG4vLyAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8vIGp3LW1vZGFsIHtcbi8vICAgICAvKiBtb2RhbHMgYXJlIGhpZGRlbiBieSBkZWZhdWx0ICovXG4vLyAgICAgZGlzcGxheTogbm9uZTtcblxuLy8gICAgIC5qdy1tb2RhbCB7XG4vLyAgICAgICAgIC8qIG1vZGFsIGNvbnRhaW5lciBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4vLyAgICAgICAgIHdpZHRoOiA1MHZoO1xuLy8gICAgaGVpZ2h0OiA1MHZoO1xuLy8gICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgbGVmdDogNTAlO1xuLy8gICAgdG9wOiA1MCU7IFxuLy8gICAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbi8vICAgIG1hcmdpbi10b3A6IC0xNTBweDtcblxuLy8gICAgICAgICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cbi8vICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgXG4vLyAgICAgICAgIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xuLy8gICAgICAgICBvdmVyZmxvdzogYXV0bztcblxuLy8gICAgICAgICAuanctbW9kYWwtYm9keSB7XG4vLyAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHZoICFpbXBvcnRhbnQ7XG4vLyAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgICAgICAgICAgIC8qIG1hcmdpbiBleHBvc2VzIHBhcnQgb2YgdGhlIG1vZGFsIGJhY2tncm91bmQgKi9cbi8vICAgICAgICAgICAgIC8vbWFyZ2luOiA0MHB4O1xuLy8gICAgICAgICAgICAgLy93aWR0aDogNTB2aDtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIC5qdy1tb2RhbC1iYWNrZ3JvdW5kIHtcbi8vICAgICAgICAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4vLyAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgICAgICAgdG9wOiAwO1xuLy8gICAgICAgICByaWdodDogMDtcbi8vICAgICAgICAgYm90dG9tOiAwO1xuLy8gICAgICAgICBsZWZ0OiAwO1xuXG4vLyAgICAgICAgIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4vLyAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgIFxuLy8gICAgICAgICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4vLyAgICAgICAgIHotaW5kZXg6IDkwMDtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGJvZHkuanctbW9kYWwtb3BlbiB7XG4vLyAgICAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vIH1cblxuXG4vKiBNT0RBTCBTVFlMRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuanctbW9kYWwge1xuICAgIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgLmp3LW1vZGFsIHtcbiAgICAgICAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgLyogei1pbmRleCBtdXN0IGJlIGhpZ2hlciB0aGFuIC5qdy1tb2RhbC1iYWNrZ3JvdW5kICovXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIFxuICAgICAgICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAgICAgLmp3LW1vZGFsLWJvZHkge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgICAgICAgIC8qIG1hcmdpbiBleHBvc2VzIHBhcnQgb2YgdGhlIG1vZGFsIGJhY2tncm91bmQgKi9cbiAgICAgICAgICAgIG1hcmdpbjogNDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5qdy1tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgIFxuICAgICAgICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gICAgICAgIHotaW5kZXg6IDkwMDtcbiAgICB9XG59XG5cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gICAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/layout/_modal/modal.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/layout/_modal/modal.component.ts ***!
    \**************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppLayout_modalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
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


    var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modal.service */
    "./src/app/layout/_modal/modal.service.ts");

    var ModalComponent = /*#__PURE__*/function () {
      function ModalComponent(modalService, el) {
        _classCallCheck(this, ModalComponent);

        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // ensure id attribute exists
          if (!this.id) {
            console.error('modal must have an id');
            return;
          } // move element to bottom of page (just before </body>) so it can be displayed above everything else


          document.body.appendChild(this.element); // close modal on background click

          this.element.addEventListener('click', function (el) {
            if (el.target.className === 'jw-modal') {
              _this.close();
            }
          }); // add self (this modal instance) to the modal service so it's accessible from controllers

          this.modalService.add(this);
        } // remove self from modal service when component is destroyed

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.modalService.remove(this.id);
          this.element.remove();
        } // open modal

      }, {
        key: "open",
        value: function open() {
          this.element.style.display = 'block';
          document.body.classList.add('jw-modal-open');
        } // close modal

      }, {
        key: "close",
        value: function close() {
          this.element.style.display = 'none';
          document.body.classList.remove('jw-modal-open');
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.ctorParameters = function () {
      return [{
        type: _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalComponent.prototype, "id", void 0);
    ModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'jw-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/_modal/modal.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal.component.less */
      "./src/app/layout/_modal/modal.component.less"))["default"]]
    })], ModalComponent);
    /***/
  },

  /***/
  "./src/app/layout/_modal/modal.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/layout/_modal/modal.module.ts ***!
    \***********************************************/

  /*! exports provided: ModalModule */

  /***/
  function srcAppLayout_modalModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalModule", function () {
      return ModalModule;
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


    var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal.component */
    "./src/app/layout/_modal/modal.component.ts");

    var ModalModule = function ModalModule() {
      _classCallCheck(this, ModalModule);
    };

    ModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]],
      exports: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]]
    })], ModalModule);
    /***/
  },

  /***/
  "./src/app/layout/_modal/modal.service.ts":
  /*!************************************************!*\
    !*** ./src/app/layout/_modal/modal.service.ts ***!
    \************************************************/

  /*! exports provided: ModalService */

  /***/
  function srcAppLayout_modalModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
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

    var ModalService = /*#__PURE__*/function () {
      function ModalService() {
        _classCallCheck(this, ModalService);

        this.modals = [];
        this.seatMapZ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.currentSeat = this.seatMapZ.asObservable();
      }

      _createClass(ModalService, [{
        key: "add",
        value: function add(modal) {
          // add modal to array of active modals
          this.modals.push(modal);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          // remove modal from array of active modals
          this.modals = this.modals.filter(function (x) {
            return x.id !== id;
          });
        }
      }, {
        key: "open",
        value: function open(id) {
          // open modal specified by id
          var modal = this.modals.find(function (x) {
            return x.id === id;
          });
          modal.open({
            "var": "top"
          });
        }
      }, {
        key: "seat",
        value: function seat(id, data) {
          // open modal specified by id
          this.seatMapJson = data;
          this.seatMapId = id; // this.sampleId.next(this.seatMapJson);

          this.seatMapZ.next(data);
          var modal = this.modals.find(function (x) {
            return x.id === id;
          });
          modal.open();
        }
      }, {
        key: "close",
        value: function close(id) {
          // close modal specified by id
          var modal = this.modals.find(function (x) {
            return x.id === id;
          });
          modal.close();
        }
      }]);

      return ModalService;
    }();

    ModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ModalService);
    /***/
  }
}]);
//# sourceMappingURL=default~booking-report-booking-report-module~bookings-bookings-module~email-templates-email-template~4a04f70a-es5.js.map