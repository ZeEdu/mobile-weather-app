(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/display-error/display-error.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/display-error/display-error.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n   <ion-img src=\"assets/images/page_not_found.svg\" class=\"error-icon\"></ion-img>\n   <h1 class=\"error-response-title\">Ops! We couldn't find this city!</h1>\n   <h2 class=\"error-response-paragraph\">Please, Try Again!!</h2>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/display-weather/display-weather.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/display-weather/display-weather.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n   <ion-img\n      src=\"http://openweathermap.org/img/wn/{{ report.weather[0].icon }}@2x.png\"\n      class=\"weather-icon\"\n   ></ion-img>\n   <ion-text color=\"primary\">\n      <h1>{{ report.name }}, {{ report.sys.country }}</h1>\n   </ion-text>\n   <ion-text color=\"tertiary\">\n      <p>{{ report.main.temp }} Cº</p>\n   </ion-text>\n\n   <div class=\"border-green ion-align-self-baseline\">\n      <ion-img\n         src=\"assets/images/wind.svg\"\n         class=\"wind-icon inline-block bottom-icon\"\n      ></ion-img>\n      <span class=\"inline-block bottom-text\"\n         >{{ report.wind.speed }} M/sec</span\n      >\n      <ion-img\n         src=\"assets/images/humidity.svg\"\n         class=\"humidity-icon inline-block bottom-icon\"\n      ></ion-img>\n      <span class=\"inline-block bottom-text\">{{ report.main.humidity }} %</span>\n   </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n   <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n         <ion-back-button defaultHref=\"home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Weather Report</ion-title>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n   <app-display-weather *ngIf=\"report\" [report]=\"report\"></app-display-weather>\n   <app-display-error *ngIf=\"error\" [error]=\"error\"></app-display-error>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/display-error/display-error.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/display-error/display-error.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-icon {\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  height: 250px;\n  width: 250px;\n}\n\n.error-response-title {\n  text-align: center;\n  font-size: 1.25rem;\n}\n\n.error-response-paragraph {\n  text-align: center;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkdWFyZG8vUHJvamV0b3MvZGlzcG9zaXRpdm9zLW1vdmVpcy1JSS9FbnRyZWdhcy93ZWF0aGVyLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS1lcnJvci9kaXNwbGF5LWVycm9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Rpc3BsYXktZXJyb3IvZGlzcGxheS1lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5LWVycm9yL2Rpc3BsYXktZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmVycm9yLXJlc3BvbnNlLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG4uZXJyb3ItcmVzcG9uc2UtcGFyYWdyYXBoe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuIiwiLmVycm9yLWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5lcnJvci1yZXNwb25zZS10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4uZXJyb3ItcmVzcG9uc2UtcGFyYWdyYXBoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/display-error/display-error.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/display-error/display-error.component.ts ***!
  \*********************************************************************/
/*! exports provided: DisplayErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayErrorComponent", function() { return DisplayErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DisplayErrorComponent = class DisplayErrorComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DisplayErrorComponent.prototype, "error", void 0);
DisplayErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/display-error/display-error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display-error.component.scss */ "./src/app/components/display-error/display-error.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DisplayErrorComponent);



/***/ }),

/***/ "./src/app/components/display-weather/display-weather.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/display-weather/display-weather.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 15%;\n}\n\n.weather-icon {\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  height: 150px;\n  width: 150px;\n}\n\n.wind-icon {\n  height: 50px;\n  width: 50px;\n}\n\n.humidity-icon {\n  height: 50px;\n  width: 50px;\n}\n\n.inline-block {\n  align-items: baseline;\n  display: inline-block;\n}\n\n.bottom-icon {\n  vertical-align: middle;\n}\n\n.bottom-text {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkdWFyZG8vUHJvamV0b3MvZGlzcG9zaXRpdm9zLW1vdmVpcy1JSS9FbnRyZWdhcy93ZWF0aGVyLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS13ZWF0aGVyL2Rpc3BsYXktd2VhdGhlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5LXdlYXRoZXIvZGlzcGxheS13ZWF0aGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQ0NIOztBREdBO0VBQ0csa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUg7O0FERUE7RUFDRyxZQUFBO0VBQ0EsV0FBQTtBQ0NIOztBREVBO0VBQ0csWUFBQTtFQUNBLFdBQUE7QUNDSDs7QURFQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNHLHNCQUFBO0FDQ0g7O0FER0E7RUFDRyxxQkFBQTtBQ0FIIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5LXdlYXRoZXIvZGlzcGxheS13ZWF0aGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBsZWZ0OiAwO1xuICAgcmlnaHQ6IDA7XG4gICB0b3A6IDE1JTtcbiAgIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ud2VhdGhlci1pY29uIHtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICBoZWlnaHQ6IDE1MHB4O1xuICAgd2lkdGg6IDE1MHB4O1xufVxuLndpbmQtaWNvbiB7XG4gICBoZWlnaHQ6IDUwcHg7XG4gICB3aWR0aDogNTBweDtcbn1cblxuLmh1bWlkaXR5LWljb24ge1xuICAgaGVpZ2h0OiA1MHB4O1xuICAgd2lkdGg6IDUwcHg7XG59XG5cbi5pbmxpbmUtYmxvY2sge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJvdHRvbS1pY29uIHtcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAvL21hcmdpbi10b3A6IGF1dG87XG4gICAvL21hcmdpbi1ib3R0b206IGF1dG87XG59XG4uYm90dG9tLXRleHQge1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAxNSU7XG59XG5cbi53ZWF0aGVyLWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi53aW5kLWljb24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uaHVtaWRpdHktaWNvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5pbmxpbmUtYmxvY2sge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJvdHRvbS1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmJvdHRvbS10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/display-weather/display-weather.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/display-weather/display-weather.component.ts ***!
  \*************************************************************************/
/*! exports provided: DisplayWeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayWeatherComponent", function() { return DisplayWeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DisplayWeatherComponent = class DisplayWeatherComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DisplayWeatherComponent.prototype, "report", void 0);
DisplayWeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display-weather',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display-weather.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/display-weather/display-weather.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display-weather.component.scss */ "./src/app/components/display-weather/display-weather.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DisplayWeatherComponent);



/***/ }),

/***/ "./src/app/report/report-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/report/report-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ReportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageRoutingModule", function() { return ReportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.page */ "./src/app/report/report.page.ts");




const routes = [
    {
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_3__["ReportPage"]
    }
];
let ReportPageRoutingModule = class ReportPageRoutingModule {
};
ReportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportPageRoutingModule);



/***/ }),

/***/ "./src/app/report/report.module.ts":
/*!*****************************************!*\
  !*** ./src/app/report/report.module.ts ***!
  \*****************************************/
/*! exports provided: ReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageModule", function() { return ReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-routing.module */ "./src/app/report/report-routing.module.ts");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.page */ "./src/app/report/report.page.ts");
/* harmony import */ var _components_display_weather_display_weather_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/display-weather/display-weather.component */ "./src/app/components/display-weather/display-weather.component.ts");
/* harmony import */ var _components_display_error_display_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/display-error/display-error.component */ "./src/app/components/display-error/display-error.component.ts");









let ReportPageModule = class ReportPageModule {
};
ReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportPageRoutingModule"]],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_6__["ReportPage"], _components_display_weather_display_weather_component__WEBPACK_IMPORTED_MODULE_7__["DisplayWeatherComponent"], _components_display_error_display_error_component__WEBPACK_IMPORTED_MODULE_8__["DisplayErrorComponent"]],
    })
], ReportPageModule);



/***/ }),

/***/ "./src/app/report/report.page.scss":
/*!*****************************************!*\
  !*** ./src/app/report/report.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background-color: #2a2a2a;\n}\nion-content #container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VkdWFyZG8vUHJvamV0b3MvZGlzcG9zaXRpdm9zLW1vdmVpcy1JSS9FbnRyZWdhcy93ZWF0aGVyLWFwcC9zcmMvYXBwL3JlcG9ydC9yZXBvcnQucGFnZS5zY3NzIiwic3JjL2FwcC9yZXBvcnQvcmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHlCQUFBO0FDQUY7QURDRztFQUNHLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9yZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjOTI5YWZjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTJhO1xuICAgI2NvbnRhaW5lciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDE1JTtcbiAgICAgIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgfVxufVxuIiwiaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTJhO1xufVxuaW9uLWNvbnRlbnQgI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAxNSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/report/report.page.ts":
/*!***************************************!*\
  !*** ./src/app/report/report.page.ts ***!
  \***************************************/
/*! exports provided: ReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPage", function() { return ReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_open_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/open-weather.service */ "./src/app/services/open-weather.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let ReportPage = class ReportPage {
    constructor(loadingController, route, openWeather) {
        this.loadingController = loadingController;
        this.route = route;
        this.openWeather = openWeather;
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait...',
            });
            return yield this.loading.present();
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.presentLoading();
            this.openWeather
                .getForecast(this.route.snapshot.params.city, this.route.snapshot.params.country)
                .subscribe((r) => (this.report = r), (error) => (this.error = error));
            yield this.loading.dismiss();
        });
    }
};
ReportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_open_weather_service__WEBPACK_IMPORTED_MODULE_3__["OpenWeatherService"] }
];
ReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./report.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./report.page.scss */ "./src/app/report/report.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_open_weather_service__WEBPACK_IMPORTED_MODULE_3__["OpenWeatherService"]])
], ReportPage);



/***/ })

}]);
//# sourceMappingURL=report-report-module-es2015.js.map