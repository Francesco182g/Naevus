(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!nameOfSource\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>TEST PAGE</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  [color]=\"dark\" padding >\n  <input type=\"file\" accept=\"image/*\" ng2FileSelect [uploader]=\"fileUploader\" *ngIf=\"!nameOfSource\" />\n  <ion-button (click)=\"uploadFiles()\" *ngIf=\"!nameOfSource\">Start Analysis</ion-button>\n\n  <!--\n  <ion-row>\n    <ion-col>\n      <img src=\"http://192.168.1.2:8000/media/mel.jpg\">\n    </ion-col>\n  </ion-row>\n  -->\n      \n    <div class=\"container\" *ngIf=\"nameOfSource\" >\n          <ion-img [src]=\"nameOfSource\" alt=\"errore\"></ion-img>\n    <ion-button class=\"btn\" expand=\"full\">{{classificatore}}</ion-button>\n    <ion-avatar class=\"cnt\" vertical=\"center\" horizontal=\"center\" >\n      <img src=\"https://www.pngkit.com/png/full/422-4220644_dotted-circle-outline-pictures-to-pin-on-pinterest.png\">\n    </ion-avatar>\n    <ion-button expand=\"full\">Asymmetry {{asymmetry}}</ion-button>\n  </div>\n\n    <ion-button expand=\"full\" (click)=\"reset()\"*ngIf=\"nameOfSource\" >Another Analysis</ion-button>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/tab3/tab3-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "./src/app/tab3/tab3-routing.module.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");










let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"]
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".area {\n  width: 95%;\n  padding: 15px;\n  margin: 15px;\n  border: 1px solid #333;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n}\n\n.container img {\n  width: 100%;\n  height: auto;\n}\n\n.container .btn {\n  position: absolute;\n  top: 0%;\n  left: 80%;\n  transform: translate(0%, 0%);\n  -ms-transform: translate(0%, 0%);\n  background-color: #03005a;\n  color: white;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  text-align: right;\n}\n\n.container .cnt {\n  position: absolute;\n  width: 220px !important;\n  height: 220px !important;\n  top: 32%;\n  left: 25%;\n  border: none;\n}\n\n.container .btn:hover {\n  background-color: primary;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VzZXJ0aGluay9UaGVzaXMvSW9uaWMvTmFldnVzIEJFVEEvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDhCQUEyQjtBQ0MvQjs7QURFQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0FDQ3BCOztBREVFO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUNDaEI7O0FERUU7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQ0NyQjs7QURFRTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtBQ0NoQjs7QURHRTtFQUNFLHlCQUF5QjtBQ0E3QiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJlYSB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIC5jb250YWluZXIgLmJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMCU7XG4gICAgbGVmdDogODAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMDA1YTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG5cbiAgLmNvbnRhaW5lciAuY250IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIyMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyMjBweCAhaW1wb3J0YW50O1xuICAgIHRvcDogMzIlO1xuICAgIGxlZnQ6IDI1JTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuXG4gIC5jb250YWluZXIgLmJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHJpbWFyeTtcbiAgfSIsIi5hcmVhIHtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb250YWluZXIgLmJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogODAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMDA1YTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY29udGFpbmVyIC5jbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIyMHB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogMzIlO1xuICBsZWZ0OiAyNSU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciAuYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcHJpbWFyeTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _uploading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uploading.service */ "./src/app/uploading.service.ts");
/* harmony import */ var _api_django_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-django.service */ "./src/app/api-django.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");









let Tab3Page = class Tab3Page {
    constructor(uploadingService, http, apiDjangoService, file, ngZone, loadingController) {
        this.uploadingService = uploadingService;
        this.http = http;
        this.apiDjangoService = apiDjangoService;
        this.file = file;
        this.ngZone = ngZone;
        this.loadingController = loadingController;
        this.fileUploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({});
        this.hasBaseDropZoneOver = false;
        this.classificatore = 'load';
        this.asymmetry = '0.0';
    }
    fileOverBase(event) {
        this.hasBaseDropZoneOver = event;
    }
    getFiles() {
        return this.fileUploader.queue.map((fileItem) => {
            return fileItem.file;
        });
    }
    uploadFiles() {
        let files = this.getFiles();
        console.log(files.toString());
        let requests = [];
        files.forEach((file) => {
            console.log("file: " + file);
            let formData = new FormData();
            formData.append('file', file.rawFile, file.name);
            requests.push(this.uploadingService.uploadFormData(formData));
            requests.push(this.apiDjangoService.getClassified());
            this.dark = "dark";
            this.presentLoading();
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["concat"])(...requests).subscribe((res) => {
            console.log(res);
            this.classificatore = " " + res + " %";
        }, (err) => {
            console.log(err);
        });
    }
    getAsymmetry() {
        let items = [];
        items.push(this.apiDjangoService.getAsymmetry());
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["concat"])(...items).subscribe((res) => {
            console.log(res);
            this.asymmetry = "" + res;
        }, (err) => {
            console.log(err);
        });
    }
    reset() {
        let requests = [];
        this.nameOfSource = null;
        this.dark = "";
        this.fileUploader.cancelAll();
        requests.push(this.apiDjangoService.clearPic());
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["concat"])(...requests).subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }
    changePlaying() {
        this.ngZone.run(() => {
            this.nameOfSource = "http://192.168.1.2:8000/media/melar.jpg";
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 4000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
            this.changePlaying();
            this.getAsymmetry();
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _uploading_service__WEBPACK_IMPORTED_MODULE_2__["UploadingService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _api_django_service__WEBPACK_IMPORTED_MODULE_3__["ApiDjangoService"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    })
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map