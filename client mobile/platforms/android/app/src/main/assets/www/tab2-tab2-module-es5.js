function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <ion-header >\n    <ion-segment *ngIf=\"shot==false\" placeholder=\"Select Flash\" [(ngModel)]=\"flashMode\"\n    (ionChange)=\"changeFlashMode()\">\n    <ion-segment-button value=\"off\">\n      <ion-icon color=\"danger\" name=\"flash-off\"></ion-icon>\n      <ion-label color=\"danger\" >Off</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"torch\">\n      <ion-icon color=\"secondary\" name=\"flash\"></ion-icon>\n      <ion-label color=\"secondary\">On</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <img *ngIf=\"shot==true\" [src]=\"this.img_color\">\n\n    <ion-range *ngIf=\"shot==true\" min=\"0\" max=\"10\" step=\"1\" [value]=\"color\" snaps color=\"secondary\">\n      <ion-text slot=\"start\" size=\"small\" color=\"primary\">{{this.color}}</ion-text>\n      <ion-text slot=\"end\" color=\"secondary\">10</ion-text>\n    </ion-range>\n\n\n      <!--\n      <ion-segment placeholder=\"Select Focus\" [(ngModel)]=\"focusMode\"\n      (ionChange)=\"changeFocusMode()\">\n        <ion-segment-button value=\"auto\">\n          <ion-icon name=\"disc\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"fixed\">\n          <ion-icon name=\"aperture\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"infinity\">\n          <ion-icon name=\"infinite\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"macro\">\n          <ion-icon name=\"search\"></ion-icon>\n        </ion-segment-button>\n      </ion-segment>\n    -->\n\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <!--\n  <ion-row *ngIf=\"activescreenshot==true\">\n    <ion-col>\n      <img [src]=\"IMAGE_PATH\">\n    </ion-col>\n  </ion-row>\n    -->\n\n  <ion-fab *ngIf=\"shot==true\" horizontal=\"end\" vertical=\"top\" slot=\"fixed\" >\n    <ion-fab-button>{{this.classified}} %</ion-fab-button>\n  </ion-fab>\n\n  <ion-grid *ngIf=\"shot==true\">\n    <ion-row class=\"ion-align-items-end\">\n      <ion-col class=\"ion-align-self-end\">\n        Diametro\n        <ion-range *ngIf=\"shot==true\" min=\"0\" max=\"40\" step=\"5\" [value]=\"diameter\" snaps color=\"danger\">\n        <ion-text slot=\"start\" size=\"small\" color=\"danger\">{{this.diameter}} mm</ion-text>\n        <ion-text slot=\"end\" color=\"secondary\">40 mm</ion-text>\n      </ion-range> \n      </ion-col>\n      <ion-col>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"shot==true\">\n    <ion-row>\n      <ion-col>\n        Centroide\n        <ion-range *ngIf=\"shot==true\" min=\"0\" max=\"2\" step=\"1\" [value]=\"centroid\" snaps color=\"danger\">\n        <ion-icon slot=\"start\" color=\"danger\" name=\"arrow-back-circle\"> </ion-icon>\n        <ion-icon slot=\"end\" color=\"danger\" name=\"arrow-forward-circle\"> </ion-icon>\n      </ion-range> \n      </ion-col>\n      <ion-col>\n        {{this.symmetricInfo}}\n          <ion-range *ngIf=\"shot==true\" min=\"0\" max=\"15\" step=\"1\" [value]=\"asymmetry\" snaps color=\"danger\">\n          <ion-text slot=\"start\" size=\"small\" color=\"primary\">Asim</ion-text>\n          <ion-text slot=\"end\" color=\"secondary\">Sim</ion-text>\n        </ion-range>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"shot==true\">\n    <ion-row>\n      <ion-col>\n        <!--<div>elemento</div>-->\n      </ion-col>\n      <ion-col>\n        <!--<div>elemento</div>-->\n      </ion-col>\n      <ion-col>\n        <!--<div>elemento</div>-->\n      </ion-col>\n      <ion-col >\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"shot==true\">\n    <ion-row>\n      <ion-col>\n        <img (click)=\"openImage(this.ipAddress + '/media/photometric.png')\"  [src]=\"this.img_photometric\">\n      </ion-col>\n      <ion-col>\n        <!--<div>elemento</div>-->\n      </ion-col>\n      <ion-col>\n        <!--<div>elemento</div>-->\n      </ion-col>\n      <ion-col >\n        <!--<div>elemento</div>-->\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"shot==true\">\n    <ion-row>\n      <ion-col>\n        \n      </ion-col>\n      <ion-col>\n        <img (click)=\"openImage(this.ipAddress + '/media/border1.png')\" [src]=\"this.img_border1\">\n      </ion-col>\n      <ion-col>\n        <!--<div>elemento</div>-->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-avatar  vertical=\"center\" horizontal=\"center\">\n    <img src=\"assets/circle.png\">\n  </ion-avatar>\n\n</ion-content>\n<ion-footer>\n  <ion-range  min=\"1\" max=\"25\" pin color=\"primary\" [(ngModel)]=\"setZoom\" (ionChange)=\"changeZoom()\">\n    <ion-icon color=\"primary\" slot=\"start\" size=\"small\" name=\"search-outline\"></ion-icon>\n    <ion-icon slot=\"end\" name=\"search-outline\"></ion-icon>\n  </ion-range>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button *ngIf=\"startAR==true\" expand=\"block\" color=\"primary\"(click)=\"saveScreenshot()\">\n          <ion-icon  size=\"big\" name=\"save-outline\"></ion-icon>\n        </ion-button>    \n        <ion-button *ngIf=\"startAR==false\" expand=\"block\" color=\"primary\"(click)=\"getInfo()\">\n          <ion-icon  size=\"big\" name=\"information-circle-outline\" ></ion-icon>\n        </ion-button>     \n      </ion-col>\n      <ion-col>\n        <ion-button *ngIf=\"startAR==true\" expand=\"block\" color=\"danger\" (click)=\"switchOff()\">\n          <ion-icon  size=\"big\" name=\"close-circle\"></ion-icon>\n        </ion-button> \n        <ion-button *ngIf=\"startAR==false\" expand=\"block\" color=\"success\" (click)=\"takePicture()\">\n          <ion-icon  size=\"big\" name=\"camera-outline\"></ion-icon>\n        </ion-button>            \n      </ion-col>\n    \n    </ion-row>\n  </ion-grid>\n</ion-footer>\n\n\n";
    /***/
  },

  /***/
  "./src/app/tab2/tab2-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab2/tab2-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab2PageRoutingModule */

  /***/
  function srcAppTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
      return Tab2PageRoutingModule;
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


    var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");

    var routes = [{
      path: '',
      component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
    }];

    var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
      _classCallCheck(this, Tab2PageRoutingModule);
    };

    Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tab2-routing.module */
    "./src/app/tab2/tab2-routing.module.ts");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab2PageRoutingModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"]],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: transparent;\n}\n\nion-avatar {\n  width: 170px !important;\n  height: 170px !important;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nion-col > div {\n  background-color: #f7f7f7;\n  border: solid 1px #ddd;\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXJ0aGluay9UaGVzaXMvSW9uaWMvTmFldnVzIEJFVEEvc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQWE7QUNDakI7O0FERUU7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQ0NwQzs7QURFRTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsYUFBYTtBQ0NqQiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDE3MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxNzBweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuICBpb24tY29sID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNkZGQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG5cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAxNzBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE3MHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbmlvbi1jb2wgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZGRkO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
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


    var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera-preview/ngx */
    "./node_modules/@ionic-native/camera-preview/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _uploading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../uploading.service */
    "./src/app/uploading.service.ts");
    /* harmony import */


    var _api_django_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../api-django.service */
    "./src/app/api-django.service.ts");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/base64-to-gallery/ngx */
    "./node_modules/@ionic-native/base64-to-gallery/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/screenshot/ngx */
    "./node_modules/@ionic-native/screenshot/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //Upload and Analysis import


    var Tab2Page = /*#__PURE__*/function () {
      function Tab2Page(cameraPreview, platform, storage, uploadingService, http, apiDjangoService, base64ToGallery, file, ngZone, loadingController, screenshot, photoViewer, toastController, router) {
        _classCallCheck(this, Tab2Page);

        this.cameraPreview = cameraPreview;
        this.platform = platform;
        this.storage = storage;
        this.uploadingService = uploadingService;
        this.http = http;
        this.apiDjangoService = apiDjangoService;
        this.base64ToGallery = base64ToGallery;
        this.file = file;
        this.ngZone = ngZone;
        this.loadingController = loadingController;
        this.screenshot = screenshot;
        this.photoViewer = photoViewer;
        this.toastController = toastController;
        this.router = router; //UPLOAD CODE  

        this.fileUploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({});
        this.hasBaseDropZoneOver = false;
        this.fileToUpload = null;
        this.colorEffect = 'none';
        this.setZoom = 1;
        this.flashMode = 'off';
        this.focusMode = 'auto';
        this.shot = false;
        this.active = false;
        this.activescreenshot = false;
        this.startAR = false;
        this.img_color = 'assets/colorful.gif';
        this.img_photometric = 'assets/color.gif';
        this.img_border1 = 'assets/loading.gif';
        this.ipAddress = "http://192.168.43.135:8000";
        this.online = true;
        this.clearAll(); //this.takePicture();
      }

      _createClass(Tab2Page, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("WILL ENTER: ");
                    _context.next = 3;
                    return this.startCameraAbove();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log("WILL LEAVE");
                    _context2.next = 3;
                    return this.stopCamera();

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "startCameraAbove",
        value: function startCameraAbove() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return this.platform.ready();

                  case 3:
                    _context3.next = 5;
                    return this.cameraPreview.startCamera({
                      x: 0,
                      y: 0,
                      width: this.platform.width(),
                      height: this.platform.height(),
                      toBack: true,
                      camera: "rear",
                      previewDrag: false,
                      tapPhoto: true
                    });

                  case 5:
                    _context3.next = 10;
                    break;

                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](0);
                    console.error("startCameraAbove", _context3.t0);

                  case 10:
                    _context3.prev = 10;
                    return _context3.finish(10);

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[0, 7, 10, 12]]);
          }));
        }
      }, {
        key: "stopCamera",
        value: function stopCamera() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    console.log("stopping camera");
                    _context4.next = 4;
                    return this.cameraPreview.stopCamera();

                  case 4:
                    _context4.next = 9;
                    break;

                  case 6:
                    _context4.prev = 6;
                    _context4.t0 = _context4["catch"](0);
                    console.error("stop camera error. Err: ", _context4.t0);

                  case 9:
                    _context4.prev = 9;
                    return _context4.finish(9);

                  case 11:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[0, 6, 9, 11]]);
          }));
        }
      }, {
        key: "takePicture",
        value: function takePicture() {
          var _this = this;

          var base64option = {
            prefix: 'img',
            mediaScanner: false
          };
          this.cameraPreview.takePicture({
            width: 1280,
            height: 1280,
            quality: 100
          }).then(function (imageData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var b64data;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      b64data = atob(imageData);
                      this.IMAGE_PATH = 'data:image/jpeg;base64,' + imageData; //this.addImage(this.b64toBlob(imageData));

                      this.startAR = true;
                      this.addImage(imageData); //this.active = true;

                      this.base64ToGallery.base64ToGallery(btoa(b64data), {
                        prefix: '_img',
                        mediaScanner: true
                      }).then(function (res) {
                        return console.log("Saved Success", res);
                      }, function (err) {
                        return console.log("Error saving image to gallery ", err);
                      });

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }, function (err) {
            console.log(err);
            _this.IMAGE_PATH = 'assets/img/test.jpg';
          });
        }
      }, {
        key: "show",
        value: function show() {
          return this.cameraPreview.show();
        }
      }, {
        key: "hide",
        value: function hide() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    return _context6.abrupt("return", this.cameraPreview.hide());

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "changeColorEffect",
        value: function changeColorEffect() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.cameraPreview.setColorEffect(this.colorEffect);

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "changeZoom",
        value: function changeZoom() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.cameraPreview.setZoom(this.setZoom);

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "changeFlashMode",
        value: function changeFlashMode() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.cameraPreview.setFlashMode(this.flashMode);

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "changeFocusMode",
        value: function changeFocusMode() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.cameraPreview.setFocusMode(this.focusMode);

                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "fileOverBase",
        value: function fileOverBase(event) {
          this.hasBaseDropZoneOver = event;
        }
      }, {
        key: "getFiles",
        value: function getFiles() {
          return this.fileUploader.queue.map(function (fileItem) {
            return fileItem.file;
          });
        }
      }, {
        key: "addImage",
        value: function addImage(res) {
          var b64toBlob = function b64toBlob(b64Data) {
            var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              var slice = byteCharacters.slice(offset, offset + sliceSize);
              var byteNumbers = new Array(slice.length);

              for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              var byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
            }

            var blob = new Blob(byteArrays, {
              type: contentType
            });
            return blob;
          };

          var contentType = 'image/png';
          var b64Data = res;
          var blob = b64toBlob(b64Data, contentType); //const blobUrl = URL.createObjectURL(blob);

          this.uploadImage(blob); //const img = document.createElement('img');
          //img.src = blobUrl;
          //document.body.appendChild(img);
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(res) {
          var _this2 = this;

          this.putWait(); //var blob = new Blob([res], { type: 'image/jpg' });         

          var requests = [];
          var fileName = "melorigin.jpg";
          var formData = new FormData();
          formData.append('file', res, "melorigin.jpg");
          requests.push(this.uploadingService.uploadFormData(formData));
          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"]).apply(void 0, requests).subscribe(function (res) {
            console.log(res);
            _this2.shot = true;
            _this2.active = true;

            _this2.getBorder();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getAsymmetry",
        value: function getAsymmetry() {
          var _this3 = this;

          var items = [];
          items.push(this.apiDjangoService.getAsymmetry());
          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"]).apply(void 0, items).subscribe(function (res) {
            console.log(res);
            _this3.asymmetry = "" + res;
            _this3.img_photometric = _this3.ipAddress + "/media/photometric.png" + "?" + Math.random() * 3;
            var info = +_this3.asymmetry;

            if (info > 10) {
              _this3.symmetricInfo = "Simmetrico";
            }

            if (info <= 9) {
              _this3.symmetricInfo = "Leggermente Asimmetrico";
            }

            if (info < 5) {
              _this3.symmetricInfo = "Asimmetrico";
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getBorder",
        value: function getBorder() {
          var _this4 = this;

          var items = [];
          items.push(this.apiDjangoService.getBorder());
          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"]).apply(void 0, items).subscribe(function (res) {
            console.log(res);
            _this4.classified = "" + res;

            if (_this4.classified == "0") {
              _this4.presentToast("Nevo non trovato, riprova");

              _this4.reshotWait();

              _this4.reshot();
            } else {
              _this4.img_border1 = _this4.ipAddress + "/media/border.png" + "?" + Math.random() * 3; //this.uploadLoading();

              _this4.getAsymmetry();

              _this4.getColor();

              _this4.getCentroid();

              _this4.getDiameter();

              _this4.presentLoading();
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getColor",
        value: function getColor() {
          var _this5 = this;

          var items = [];
          items.push(this.apiDjangoService.getColor());
          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"]).apply(void 0, items).subscribe(function (res) {
            console.log(res);
            var result = "" + res;
            _this5.img_color = _this5.ipAddress + "/media/color.png" + "?" + Math.random() * 3;
            _this5.color = +result;

            _this5.putWait();

            _this5.reshot();

            if (_this5.color > 15) {
              _this5.getError("Riconoscimento Errato");
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getCentroid",
        value: function getCentroid() {
          var _this6 = this;

          var items = [];
          items.push(this.apiDjangoService.getCentroid());
          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"]).apply(void 0, items).subscribe(function (res) {
            console.log(res);
            _this6.centroid = "" + res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getDiameter",
        value: function getDiameter() {
          var _this7 = this;

          var items = [];
          items.push(this.apiDjangoService.getDiameter(this.setZoom));
          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"]).apply(void 0, items).subscribe(function (res) {
            console.log(res);
            _this7.diameter = "" + res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(4000);

                  case 2:
                    console.log('Loading dismissed!');
                    this.changePlaying();

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "putWait",
        value: function putWait() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(4000);

                  case 2:
                    console.log('WAIT');

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));
        }
      }, {
        key: "reshotWait",
        value: function reshotWait() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(1000);

                  case 2:
                    console.log('WAIT');

                  case 3:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13);
          }));
        }
      }, {
        key: "getError",
        value: function getError(code) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    alert("Errore: " + code);

                  case 1:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(code) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var toast;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    toast = this.toastController.create({
                      message: 'Errore: ' + code,
                      duration: 1000,
                      position: 'top'
                    });
                    _context15.next = 3;
                    return toast;

                  case 3:
                    _context15.sent.present();

                  case 4:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "reshot",
        value: function reshot() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(2500);

                  case 2:
                    this.reset(event);

                    if (this.startAR == true) {
                      this.takePicture();
                    }

                    console.log('Reshot');

                  case 5:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "changePlaying",
        value: function changePlaying() {
          var _this8 = this;

          this.ngZone.run(function () {
            _this8.shot = true;
            _this8.active = true;
          });
        }
      }, {
        key: "reset",
        value: function reset(event) {
          var _this9 = this;

          this.ngZone.run(function () {
            var requests = [];
            /*
            this.img_color = 'assets/colorful.gif';
            this.img_photometric = 'assets/color.gif';
            this.img_border1 = 'assets/loading.gif';
                   this.color = 0;
            this.classified = "";
            this.asymmetry = "";
            this.centroid = "";
            */

            _this9.platform.resume.subscribe(function () {
              location.reload();
            });

            requests.push(_this9.apiDjangoService.clearPic());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"]).apply(void 0, requests).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "openImage",
        value: function openImage(path) {
          this.photoViewer.show(path + "?" + Math.random() * 3);
        }
      }, {
        key: "saveScreenshot",
        value: function saveScreenshot() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    this.activescreenshot = true;
                    this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(function () {
                      alert("Screenshot Salvato!");
                    });
                    this.activescreenshot = false;

                  case 3:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "clearAll",
        value: function clearAll() {
          var requests = [];
          requests.push(this.apiDjangoService.clearPic());
          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"]).apply(void 0, requests).subscribe(function (res) {
            console.log(res);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getInfo",
        value: function getInfo() {
          this.router.navigate(['tabs/guide']);
        }
      }, {
        key: "switchOff",
        value: function switchOff() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var _this10 = this;

            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    this.startAR = false;
                    this.active = true;
                    this.shot = false;
                    alert("AR OFF!");
                    this.ngZone.run(function () {
                      var requests = [];
                      _this10.img_color = 'assets/colorful.gif';
                      _this10.img_photometric = 'assets/color.gif';
                      _this10.img_border1 = 'assets/loading.gif';
                      _this10.color = 0;
                      _this10.classified = "";
                      _this10.asymmetry = "";
                      _this10.centroid = "";

                      _this10.platform.resume.subscribe(function () {
                        location.reload();
                      });

                      requests.push(_this10.apiDjangoService.clearPic());
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"]).apply(void 0, requests).subscribe(function (res) {
                        console.log(res);
                      }, function (err) {
                        console.log(err);
                      });
                    });

                  case 5:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }]);

      return Tab2Page;
    }();

    Tab2Page.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_2__["CameraPreview"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
      }, {
        type: _uploading_service__WEBPACK_IMPORTED_MODULE_5__["UploadingService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
      }, {
        type: _api_django_service__WEBPACK_IMPORTED_MODULE_6__["ApiDjangoService"]
      }, {
        type: _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_11__["Base64ToGallery"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_13__["Screenshot"]
      }, {
        type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_12__["PhotoViewer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]
      }];
    };

    Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss"))["default"]]
    })], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map