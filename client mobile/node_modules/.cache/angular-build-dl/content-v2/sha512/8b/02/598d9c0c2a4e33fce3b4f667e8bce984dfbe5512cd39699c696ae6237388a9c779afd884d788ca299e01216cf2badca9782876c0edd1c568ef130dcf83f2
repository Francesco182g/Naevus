(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-header >\n    <ion-segment *ngIf=\"shot==false\" placeholder=\"Select Flash\" [(ngModel)]=\"flashMode\"\n    (ionChange)=\"changeFlashMode()\">\n    <ion-segment-button value=\"off\">\n      <ion-icon color=\"danger\" name=\"flash-off\"></ion-icon>\n      <ion-label color=\"danger\" >Off</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"torch\">\n      <ion-icon color=\"secondary\" name=\"flash\"></ion-icon>\n      <ion-label color=\"secondary\">On</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <img *ngIf=\"shot==true\" [src]=\"this.img_color\">\n\n    <ion-range *ngIf=\"shot==true\" min=\"0\" max=\"10\" step=\"1\" [value]=\"color\" snaps color=\"secondary\">\n      <ion-text slot=\"start\" size=\"small\" color=\"primary\">{{this.color}}</ion-text>\n      <ion-text slot=\"end\" color=\"secondary\">10</ion-text>\n    </ion-range>\n\n\n      <!--\n      <ion-segment placeholder=\"Select Focus\" [(ngModel)]=\"focusMode\"\n      (ionChange)=\"changeFocusMode()\">\n        <ion-segment-button value=\"auto\">\n          <ion-icon name=\"disc\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"fixed\">\n          <ion-icon name=\"aperture\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"infinity\">\n          <ion-icon name=\"infinite\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"macro\">\n          <ion-icon name=\"search\"></ion-icon>\n        </ion-segment-button>\n      </ion-segment>\n    -->\n\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <!--\n  <ion-row *ngIf=\"activescreenshot==true\">\n    <ion-col>\n      <img [src]=\"IMAGE_PATH\">\n    </ion-col>\n  </ion-row>\n    -->\n\n  <ion-fab *ngIf=\"shot==true\" horizontal=\"end\" vertical=\"top\" slot=\"fixed\" >\n    <ion-fab-button>{{this.classified}} %</ion-fab-button>\n  </ion-fab>\n\n  <ion-grid *ngIf=\"shot==true\">\n    <ion-row class=\"ion-align-items-end\">\n      <ion-col class=\"ion-align-self-end\">\n        Diametro\n        <ion-range *ngIf=\"shot==true\" min=\"0\" max=\"40\" step=\"5\" [value]=\"diameter\" snaps color=\"danger\">\n        <ion-text slot=\"start\" size=\"small\" color=\"danger\">{{this.diameter}} mm</ion-text>\n        <ion-text slot=\"end\" color=\"secondary\">40 mm</ion-text>\n      </ion-range> \n      </ion-col>\n      <ion-col>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"shot==true\">\n    <ion-row>\n      <ion-col>\n        Centroide\n        <ion-range *ngIf=\"shot==true\" min=\"0\" max=\"2\" step=\"1\" [value]=\"centroid\" snaps color=\"danger\">\n        <ion-icon slot=\"start\" color=\"danger\" name=\"arrow-back-circle\"> </ion-icon>\n        <ion-icon slot=\"end\" color=\"danger\" name=\"arrow-forward-circle\"> </ion-icon>\n      </ion-range> \n      </ion-col>\n      <ion-col>\n        {{this.symmetricInfo}}\n          <ion-range *ngIf=\"shot==true\" min=\"0\" max=\"15\" step=\"1\" [value]=\"asymmetry\" snaps color=\"danger\">\n          <ion-text slot=\"start\" size=\"small\" color=\"primary\">Asim</ion-text>\n          <ion-text slot=\"end\" color=\"secondary\">Sim</ion-text>\n        </ion-range>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"shot==true\">\n    <ion-row>\n      <ion-col>\n        <!--<div>elemento</div>-->\n      </ion-col>\n      <ion-col>\n        <!--<div>elemento</div>-->\n      </ion-col>\n      <ion-col>\n        <!--<div>elemento</div>-->\n      </ion-col>\n      <ion-col >\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"shot==true\">\n    <ion-row>\n      <ion-col>\n        <img (click)=\"openImage(this.ipAddress + '/media/photometric.png')\"  [src]=\"this.img_photometric\">\n      </ion-col>\n      <ion-col>\n        <!--<div>elemento</div>-->\n      </ion-col>\n      <ion-col>\n        <!--<div>elemento</div>-->\n      </ion-col>\n      <ion-col >\n        <!--<div>elemento</div>-->\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"shot==true\">\n    <ion-row>\n      <ion-col>\n        \n      </ion-col>\n      <ion-col>\n        <img (click)=\"openImage(this.ipAddress + '/media/border1.png')\" [src]=\"this.img_border1\">\n      </ion-col>\n      <ion-col>\n        <!--<div>elemento</div>-->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-avatar  vertical=\"center\" horizontal=\"center\">\n    <img src=\"assets/circle.png\">\n  </ion-avatar>\n\n</ion-content>\n<ion-footer>\n  <ion-range  min=\"1\" max=\"25\" pin color=\"primary\" [(ngModel)]=\"setZoom\" (ionChange)=\"changeZoom()\">\n    <ion-icon color=\"primary\" slot=\"start\" size=\"small\" name=\"search-outline\"></ion-icon>\n    <ion-icon slot=\"end\" name=\"search-outline\"></ion-icon>\n  </ion-range>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button *ngIf=\"startAR==true\" expand=\"block\" color=\"primary\"(click)=\"saveScreenshot()\">\n          <ion-icon  size=\"big\" name=\"save-outline\"></ion-icon>\n        </ion-button>    \n        <ion-button *ngIf=\"startAR==false\" expand=\"block\" color=\"primary\"(click)=\"getInfo()\">\n          <ion-icon  size=\"big\" name=\"information-circle-outline\" ></ion-icon>\n        </ion-button>     \n      </ion-col>\n      <ion-col>\n        <ion-button *ngIf=\"startAR==true\" expand=\"block\" color=\"danger\" (click)=\"switchOff()\">\n          <ion-icon  size=\"big\" name=\"close-circle\"></ion-icon>\n        </ion-button> \n        <ion-button *ngIf=\"startAR==false\" expand=\"block\" color=\"success\" (click)=\"takePicture()\">\n          <ion-icon  size=\"big\" name=\"camera-outline\"></ion-icon>\n        </ion-button>            \n      </ion-col>\n    \n    </ion-row>\n  </ion-grid>\n</ion-footer>\n\n\n");

/***/ }),

/***/ "./src/app/tab2/tab2-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/tab2/tab2-routing.module.ts");









let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab2PageRoutingModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: transparent;\n}\n\nion-avatar {\n  width: 170px !important;\n  height: 170px !important;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nion-col > div {\n  background-color: #f7f7f7;\n  border: solid 1px #ddd;\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXJ0aGluay9UaGVzaXMvSW9uaWMvTmFldnVzIEJFVEEvc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQWE7QUNDakI7O0FERUU7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQ0NwQzs7QURFRTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsYUFBYTtBQ0NqQiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDE3MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxNzBweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuICBpb24tY29sID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNkZGQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG5cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAxNzBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE3MHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbmlvbi1jb2wgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZGRkO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera-preview/ngx */ "./node_modules/@ionic-native/camera-preview/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _uploading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../uploading.service */ "./src/app/uploading.service.ts");
/* harmony import */ var _api_django_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api-django.service */ "./src/app/api-django.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/base64-to-gallery/ngx */ "./node_modules/@ionic-native/base64-to-gallery/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/screenshot/ngx */ "./node_modules/@ionic-native/screenshot/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





//Upload and Analysis import













let Tab2Page = class Tab2Page {
    constructor(cameraPreview, platform, storage, uploadingService, http, apiDjangoService, base64ToGallery, file, ngZone, loadingController, screenshot, photoViewer, toastController, router) {
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
        this.router = router;
        //UPLOAD CODE  
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
        this.clearAll();
        //this.takePicture();
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("WILL ENTER: ");
            yield this.startCameraAbove();
        });
    }
    ionViewWillLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("WILL LEAVE");
            yield this.stopCamera();
        });
    }
    startCameraAbove() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.platform.ready();
                yield this.cameraPreview.startCamera({
                    x: 0,
                    y: 0,
                    width: this.platform.width(),
                    height: this.platform.height(),
                    toBack: true,
                    camera: "rear",
                    previewDrag: false,
                    tapPhoto: true
                });
            }
            catch (err) {
                console.error("startCameraAbove", err);
            }
            finally {
            }
        });
    }
    stopCamera() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                console.log("stopping camera");
                yield this.cameraPreview.stopCamera();
            }
            catch (err) {
                console.error("stop camera error. Err: ", err);
            }
            finally {
            }
        });
    }
    takePicture() {
        let base64option = {
            prefix: 'img',
            mediaScanner: false
        };
        this.cameraPreview.takePicture({
            width: 1280,
            height: 1280,
            quality: 100,
        }).then((imageData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let b64data = atob(imageData);
            this.IMAGE_PATH = 'data:image/jpeg;base64,' + imageData;
            //this.addImage(this.b64toBlob(imageData));
            this.startAR = true;
            this.addImage(imageData);
            //this.active = true;
            this.base64ToGallery.base64ToGallery(btoa(b64data), { prefix: '_img', mediaScanner: true }).then(res => console.log("Saved Success", res), err => console.log("Error saving image to gallery ", err));
        }), (err) => {
            console.log(err);
            this.IMAGE_PATH = 'assets/img/test.jpg';
        });
    }
    show() {
        return this.cameraPreview.show();
    }
    hide() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.cameraPreview.hide();
        });
    }
    changeColorEffect() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cameraPreview.setColorEffect(this.colorEffect);
        });
    }
    changeZoom() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cameraPreview.setZoom(this.setZoom);
        });
    }
    changeFlashMode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cameraPreview.setFlashMode(this.flashMode);
        });
    }
    changeFocusMode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cameraPreview.setFocusMode(this.focusMode);
        });
    }
    fileOverBase(event) {
        this.hasBaseDropZoneOver = event;
    }
    getFiles() {
        return this.fileUploader.queue.map((fileItem) => {
            return fileItem.file;
        });
    }
    addImage(res) {
        const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
            const byteCharacters = atob(b64Data);
            const byteArrays = [];
            for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                const slice = byteCharacters.slice(offset, offset + sliceSize);
                const byteNumbers = new Array(slice.length);
                for (let i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            const blob = new Blob(byteArrays, { type: contentType });
            return blob;
        };
        const contentType = 'image/png';
        const b64Data = res;
        const blob = b64toBlob(b64Data, contentType);
        //const blobUrl = URL.createObjectURL(blob);
        this.uploadImage(blob);
        //const img = document.createElement('img');
        //img.src = blobUrl;
        //document.body.appendChild(img);
    }
    uploadImage(res) {
        this.putWait();
        //var blob = new Blob([res], { type: 'image/jpg' });         
        let requests = [];
        let fileName = "melorigin.jpg";
        let formData = new FormData();
        formData.append('file', res, "melorigin.jpg");
        requests.push(this.uploadingService.uploadFormData(formData));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"])(...requests).subscribe((res) => {
            console.log(res);
            this.shot = true;
            this.active = true;
            this.getBorder();
        }, (err) => {
            console.log(err);
        });
    }
    getAsymmetry() {
        let items = [];
        items.push(this.apiDjangoService.getAsymmetry());
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"])(...items).subscribe((res) => {
            console.log(res);
            this.asymmetry = "" + res;
            this.img_photometric = this.ipAddress + "/media/photometric.png" + "?" + (Math.random() * 3);
            const info = +this.asymmetry;
            if (info > 10) {
                this.symmetricInfo = "Simmetrico";
            }
            if (info <= 9) {
                this.symmetricInfo = "Leggermente Asimmetrico";
            }
            if (info < 5) {
                this.symmetricInfo = "Asimmetrico";
            }
        }, (err) => {
            console.log(err);
        });
    }
    getBorder() {
        let items = [];
        items.push(this.apiDjangoService.getBorder());
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"])(...items).subscribe((res) => {
            console.log(res);
            this.classified = "" + res;
            if (this.classified == "0") {
                this.presentToast("Nevo non trovato, riprova");
                this.reshotWait();
                this.reshot();
            }
            else {
                this.img_border1 = this.ipAddress + "/media/border.png" + "?" + (Math.random() * 3);
                //this.uploadLoading();
                this.getAsymmetry();
                this.getColor();
                this.getCentroid();
                this.getDiameter();
                this.presentLoading();
            }
        }, (err) => {
            console.log(err);
        });
    }
    getColor() {
        let items = [];
        items.push(this.apiDjangoService.getColor());
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"])(...items).subscribe((res) => {
            console.log(res);
            const result = "" + res;
            this.img_color = this.ipAddress + "/media/color.png" + "?" + (Math.random() * 3);
            this.color = +result;
            this.putWait();
            this.reshot();
            if (this.color > 15) {
                this.getError("Riconoscimento Errato");
            }
        }, (err) => {
            console.log(err);
        });
    }
    getCentroid() {
        let items = [];
        items.push(this.apiDjangoService.getCentroid());
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"])(...items).subscribe((res) => {
            console.log(res);
            this.centroid = "" + res;
        }, (err) => {
            console.log(err);
        });
    }
    getDiameter() {
        let items = [];
        items.push(this.apiDjangoService.getDiameter(this.setZoom));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"])(...items).subscribe((res) => {
            console.log(res);
            this.diameter = "" + res;
        }, (err) => {
            console.log(err);
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(4000);
            console.log('Loading dismissed!');
            this.changePlaying();
        });
    }
    putWait() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(4000);
            console.log('WAIT');
        });
    }
    reshotWait() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(1000);
            console.log('WAIT');
        });
    }
    getError(code) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            alert("Errore: " + code);
        });
    }
    presentToast(code) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let toast = this.toastController.create({
                message: 'Errore: ' + code,
                duration: 1000,
                position: 'top'
            });
            (yield toast).present();
        });
    }
    reshot() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["delay"])(2500);
            this.reset(event);
            if (this.startAR == true) {
                this.takePicture();
            }
            console.log('Reshot');
        });
    }
    changePlaying() {
        this.ngZone.run(() => {
            this.shot = true;
            this.active = true;
        });
    }
    reset(event) {
        this.ngZone.run(() => {
            let requests = [];
            /*
            this.img_color = 'assets/colorful.gif';
            this.img_photometric = 'assets/color.gif';
            this.img_border1 = 'assets/loading.gif';
      
            this.color = 0;
            this.classified = "";
            this.asymmetry = "";
            this.centroid = "";
            */
            this.platform.resume.subscribe(() => {
                location.reload();
            });
            requests.push(this.apiDjangoService.clearPic());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"])(...requests).subscribe((res) => {
                console.log(res);
            }, (err) => {
                console.log(err);
            });
        });
    }
    openImage(path) {
        this.photoViewer.show(path + "?" + (Math.random() * 3));
    }
    saveScreenshot() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.activescreenshot = true;
            this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(() => {
                alert("Screenshot Salvato!");
            });
            this.activescreenshot = false;
        });
    }
    clearAll() {
        let requests = [];
        requests.push(this.apiDjangoService.clearPic());
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"])(...requests).subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }
    getInfo() {
        this.router.navigate(['tabs/guide']);
    }
    switchOff() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.startAR = false;
            this.active = true;
            this.shot = false;
            alert("AR OFF!");
            this.ngZone.run(() => {
                let requests = [];
                this.img_color = 'assets/colorful.gif';
                this.img_photometric = 'assets/color.gif';
                this.img_border1 = 'assets/loading.gif';
                this.color = 0;
                this.classified = "";
                this.asymmetry = "";
                this.centroid = "";
                this.platform.resume.subscribe(() => {
                    location.reload();
                });
                requests.push(this.apiDjangoService.clearPic());
                Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["concat"])(...requests).subscribe((res) => {
                    console.log(res);
                }, (err) => {
                    console.log(err);
                });
            });
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_2__["CameraPreview"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: _uploading_service__WEBPACK_IMPORTED_MODULE_5__["UploadingService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _api_django_service__WEBPACK_IMPORTED_MODULE_6__["ApiDjangoService"] },
    { type: _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_11__["Base64ToGallery"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_native_screenshot_ngx__WEBPACK_IMPORTED_MODULE_13__["Screenshot"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_12__["PhotoViewer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    })
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map