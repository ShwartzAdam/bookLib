(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Book Store</a>\n</nav>\n<article>\n  <app-book-list></app-book-list>\n</article>\n<footer>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _pipes_remove_none_eng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/remove-none-eng */ "./src/app/pipes/remove-none-eng.ts");
/* harmony import */ var _components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/field-error-display/field-error-display.component */ "./src/app/components/field-error-display/field-error-display.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _modals_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/add-book/add-book.component */ "./src/app/modals/add-book/add-book.component.ts");
/* harmony import */ var _modals_remove_book_remove_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/remove-book/remove-book.component */ "./src/app/modals/remove-book/remove-book.component.ts");
/* harmony import */ var _modals_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/edit-book/edit-book.component */ "./src/app/modals/edit-book/edit-book.component.ts");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/store.service */ "./src/app/services/store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// modules



// pipes

// components






// services


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_9__["BookComponent"],
                _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_8__["BookListComponent"],
                _pipes_remove_none_eng__WEBPACK_IMPORTED_MODULE_6__["RemoveNoneEngPipe"],
                _modals_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_10__["AddBookComponent"],
                _modals_remove_book_remove_book_component__WEBPACK_IMPORTED_MODULE_11__["RemoveBookComponent"],
                _modals_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_12__["EditBookComponent"],
                _components_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_7__["FieldErrorDisplayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_5__["NgxSmartModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_services_book_service__WEBPACK_IMPORTED_MODULE_13__["BookService"], _services_store_service__WEBPACK_IMPORTED_MODULE_14__["StoreService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-list/book-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-list/book-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin-top: 120px;\n}\n.row{\n  margin-left: 55px ;\n}\n.col-auto{\n  margin-bottom: 15px;\n}\n"

/***/ }),

/***/ "./src/app/book-list/book-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-book (notify)=\"onNotifyClicked($event)\"></app-add-book>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <app-book class=\"col-auto\" *ngFor=\"let book of arrBooks\"\n              [book]=\"book\"\n              (bookObj)=\"onObject($event)\">\n    </app-book>\n  </div>\n</div>\n<app-edit-book [editBook]=\"editBook\" (notify)=\"onNotifyClicked($event)\" ></app-edit-book>\n<app-remove-book [removeBook]=\"deleteBook\" (notify)=\"onNotifyClicked($event)\"></app-remove-book>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _class_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class/book */ "./src/app/class/book.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/store.service */ "./src/app/services/store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookListComponent = /** @class */ (function () {
    function BookListComponent(bookService, storeService) {
        this.bookService = bookService;
        this.storeService = storeService;
        // array with books for template
        this.arrBooks = new Array();
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // on component init - fetch with book service all books to array of Books
        this.bookService.getAllBooksGoogleAPI().then(function (res) {
            // store array of 10 books
            var bookArr = res['items'];
            // loop on the arr and fetch needed data
            bookArr.forEach(function (bk) {
                var _bk = new _class_book__WEBPACK_IMPORTED_MODULE_2__["Book"];
                _bk.id = bk['id'];
                _bk.bookTitle = bk['volumeInfo']['title'];
                _bk.authorName = bk['volumeInfo']['authors'][0];
                _bk.publishedDate = bk['volumeInfo']['publishedDate'];
                _this.arrBooks.push(_bk);
            });
            // set Storage with books
            _this.storeService.setBooks(_this.arrBooks);
        }).catch(function (rej) { });
    };
    BookListComponent.prototype.onNotifyClicked = function (message) {
        this.updateView();
    };
    BookListComponent.prototype.onObject = function (_book) {
        // update modal with the Book
        this.editBook = _book;
        this.deleteBook = _book;
    };
    BookListComponent.prototype.updateView = function () {
        var _this = this;
        this.storeService.getBooks().then(function (res) {
            _this.arrBooks = new Array();
            _this.arrBooks = res;
        });
    };
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.css */ "./src/app/book-list/book-list.component.css")],
            providers: [_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book {\n  position: relative;\n  margin: 10px;\n  border: 1px solid #000;\n  border-radius: 10px;\n  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);\n  width: 200px;\n  height: 350px;\n  background: #86CECE;\n}\n.book h3 {\n  text-align: center;\n  margin-top:10px;\n  padding: 0 20px 20px;\n  font-size:1.3em;\n}\n.book .text {\n  position: absolute;\n  left: 0;\n  bottom: 40px;\n  text-align: center;\n  padding: 0 20px 20px;\n}\n.book .text p{\n  font-size:0.6em;\n  float:left;\n}\n.book .buttons {\n  position: absolute;\n  left: 0;\n  bottom: 10px;\n  margin:10px;\n}\n.book .buttons > button {\n  background: #CDA349;\n  border: 1px solid #000;\n  color: white;\n  width:60px;\n  padding: 5px;\n  outline:none;\n  font-size:0.8em;\n  border-radius: 5px;\n  margin-right: 5px;\n}\n\n\n"

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"book\">\n  <h3>{{book.bookTitle | titlecase | removeNonEnglish }}</h3>\n  <div class=\"text\">\n    <p class=\"text-left\">Author: <strong>{{book.authorName}}</strong></p>\n    <p class=\"text-left\">Published Date: <strong>{{book.publishedDate}}</strong></p>\n    <p class=\"text-left\">ID: <strong>{{book.id}} </strong></p>\n  </div>\n  <div class=\"buttons\">\n    <button (click)=\"editBook()\">edit</button>\n    <button (click)=\"deleteBook()\">remove</button>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _class_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class/book */ "./src/app/class/book.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookComponent = /** @class */ (function () {
    function BookComponent(ngxSmartModalService) {
        this.ngxSmartModalService = ngxSmartModalService;
        this.bookObj = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BookComponent.prototype.editBook = function () {
        // emit event to change Book object
        this.bookObj.emit(this.book);
        // open modal
        this.ngxSmartModalService.getModal('editModal').open();
    };
    BookComponent.prototype.deleteBook = function () {
        // emit event to change Book object
        this.bookObj.emit(this.book);
        // open modal
        this.ngxSmartModalService.getModal('removeModal').open();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _class_book__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], BookComponent.prototype, "book", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BookComponent.prototype, "bookObj", void 0);
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__["NgxSmartModalService"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/class/book.ts":
/*!*******************************!*\
  !*** ./src/app/class/book.ts ***!
  \*******************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/components/field-error-display/field-error-display.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/field-error-display/field-error-display.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-msg {\n  color: #a94442;\n}\n.fix-error-icon {\n  top: 15px;\n}\n"

/***/ }),

/***/ "./src/app/components/field-error-display/field-error-display.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/field-error-display/field-error-display.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\" >\n  <span class=\"glyphicon glyphicon-remove form-control-feedback fix-error-icon\"></span>\n  <span class=\"sr-only\">(error)</span>\n  <div class=\"error-msg\">\n    {{errorMsg}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/field-error-display/field-error-display.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/field-error-display/field-error-display.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FieldErrorDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldErrorDisplayComponent", function() { return FieldErrorDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldErrorDisplayComponent = /** @class */ (function () {
    function FieldErrorDisplayComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FieldErrorDisplayComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FieldErrorDisplayComponent.prototype, "displayError", void 0);
    FieldErrorDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-field-error-display',
            template: __webpack_require__(/*! ./field-error-display.component.html */ "./src/app/components/field-error-display/field-error-display.component.html"),
            styles: [__webpack_require__(/*! ./field-error-display.component.css */ "./src/app/components/field-error-display/field-error-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FieldErrorDisplayComponent);
    return FieldErrorDisplayComponent;
}());



/***/ }),

/***/ "./src/app/modals/add-book/add-book.component.css":
/*!********************************************************!*\
  !*** ./src/app/modals/add-book/add-book.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  border: 0;\n  color: white;\n  padding: 10px;\n  outline:none;\n}\nh1{\n  text-align: center;\n  font-size:1.5em;\n}\n.add-button{\n  background-color: #CDA349 !important;\n  position: absolute;\n  top:0;\n  left:0;\n  border-radius: 0px 0px 10px 0px;\n  padding:20px;\n  margin-top:50px;\n}\n.modal-buttons{\n  position: relative;\n  display: block;\n  padding: 30px;\n}\n.modal-buttons > #left {\n  background: red;\n  position: absolute;\n  border-radius: 20px;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.modal-buttons > #right {\n  background: green;\n  position: absolute;\n  border-radius: 20px;\n  top: 50%;\n  right: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.control-label.required:after {\n  color: #d00;\n  content: \"*\";\n  position: relative;\n  margin-left: 5px;\n}\n.form-group{\n  margin-bottom: 20px;\n}\n\n"

/***/ }),

/***/ "./src/app/modals/add-book/add-book.component.html":
/*!*********************************************************!*\
  !*** ./src/app/modals/add-book/add-book.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"add-button\" (click)=\"ngxSmartModalService.getModal('addBook').open()\">Add A Book</button>\n<ngx-smart-modal #myModal identifier=\"addBook\">\n  <h1>Add A New Book </h1>\n  <form [formGroup]=\"formGroup\">\n    <div class=\"form-group\" [ngClass]=\"displayFieldCss('id')\">\n      <label for=\"id\" class=\"control-label required\">ID</label>\n      <input id=\"id\" type=\"text\" class=\"form-control\" formControlName=\"id\" [(ngModel)]=\"model.id\" />\n      <app-field-error-display\n        [displayError]=\"isFieldValid('id')\"\n        errorMsg=\"Please insert book id\">\n      </app-field-error-display>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"displayFieldCss('authorName')\">\n      <label for=\"authorName\" class=\"control-label required\">Author Name</label>\n      <input id=\"authorName\" type=\"text\" class=\"form-control\" formControlName=\"authorName\" [(ngModel)]=\"model.authorName\" />\n      <app-field-error-display\n        [displayError]=\"isFieldValid('authorName')\"\n        errorMsg=\"Please insert the author name\">\n      </app-field-error-display>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"displayFieldCss('publishedDate')\">\n      <label for=\"publishedDate\" class=\"control-label required\">Published Date</label>\n      <input id=\"publishedDate\" type=\"date\" class=\"form-control\" formControlName=\"publishedDate\" [(ngModel)]=\"model.publishedDate\" />\n      <app-field-error-display\n        [displayError]=\"isFieldValid('publishedDate')\"\n        errorMsg=\"Please insert proper date MM/DD/YYYY\">\n      </app-field-error-display>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"displayFieldCss('bookTitle')\">\n      <label for=\"bookTitle\" class=\"control-label required\">Book Title</label>\n      <input id=\"bookTitle\" type=\"text\" class=\"form-control\" formControlName=\"bookTitle\" [(ngModel)]=\"model.bookTitle\" />\n      <app-field-error-display\n        [displayError]=\"isFieldValid('bookTitle')\"\n        errorMsg=\"{{errorMessage}}\">\n      </app-field-error-display>\n    </div>\n    <div class=\"modal-buttons\">\n      <button id=\"left\" (click)=\"action('Close')\">Close</button>\n      <button id=\"right\" (click)=\"action('Ok')\">Ok</button>\n    </div>\n  </form>\n</ngx-smart-modal>\n"

/***/ }),

/***/ "./src/app/modals/add-book/add-book.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modals/add-book/add-book.component.ts ***!
  \*******************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _class_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../class/book */ "./src/app/class/book.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(ngxSmartModalService, formBuilder, storeService) {
        this.ngxSmartModalService = ngxSmartModalService;
        this.formBuilder = formBuilder;
        this.storeService = storeService;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.model = new _class_book__WEBPACK_IMPORTED_MODULE_3__["Book"];
        this.errorMessage = "Please insert a title for the book";
        this.formGroup = this.formBuilder.group({
            id: [this.model.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            authorName: [this.model.authorName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            publishedDate: [this.model.publishedDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bookTitle: [this.model.bookTitle, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], this.validationTitle.bind(this)]
        });
    }
    AddBookComponent.prototype.action = function (s) {
        var _this = this;
        if (s === 'Ok') {
            if (this.formGroup.valid) {
                // added it to store service
                var _book = new _class_book__WEBPACK_IMPORTED_MODULE_3__["Book"];
                _book.id = this.model.id;
                _book.bookTitle = this.model.bookTitle;
                _book.publishedDate = this.model.publishedDate;
                _book.authorName = this.model.authorName;
                this.storeService.addBook(_book).then(function () {
                    _this.notify.emit('Added Successfully');
                    _this.resetForm();
                }).catch(function (err) { return console.log(err); });
            }
            else {
                Object.keys(this.formGroup.controls).forEach(function (field) {
                    var control = _this.formGroup.get(field);
                    control.markAsTouched({ onlySelf: true });
                });
            }
        }
        else {
            this.resetForm();
        }
    };
    AddBookComponent.prototype.resetForm = function () {
        this.ngxSmartModalService.getModal('addBook').close();
        this.formGroup.reset();
    };
    AddBookComponent.prototype.isFieldValid = function (field) {
        return !this.formGroup.get(field).valid && this.formGroup.get(field).touched;
    };
    AddBookComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    AddBookComponent.prototype.validationTitle = function (control) {
        var _this = this;
        return this.storeService.getBooks().then(function (res) {
            var titleBook = control.value;
            var isExist = res.filter(function (book) { return book.bookTitle == titleBook; });
            if (isExist['length']) {
                _this.errorMessage = 'Please choose a different title for the book';
                return { 'bookTitleExist': true };
            }
            else {
                return null;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddBookComponent.prototype, "notify", void 0);
    AddBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-book',
            template: __webpack_require__(/*! ./add-book.component.html */ "./src/app/modals/add-book/add-book.component.html"),
            styles: [__webpack_require__(/*! ./add-book.component.css */ "./src/app/modals/add-book/add-book.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__["NgxSmartModalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"]])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "./src/app/modals/edit-book/edit-book.component.css":
/*!**********************************************************!*\
  !*** ./src/app/modals/edit-book/edit-book.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  border: 0;\n  color: white;\n  padding: 10px;\n  margin-bottom:10px;\n  border-radius: 20px;\n  outline:none;\n}\nh1{\n  text-align: center;\n  font-size:1.5em;\n}\n.modal-buttons{\n  position: relative;\n  display: block;\n  padding: 30px;\n}\n.modal-buttons > #left {\n  background: red;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.modal-buttons > #right {\n  background: green;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n"

/***/ }),

/***/ "./src/app/modals/edit-book/edit-book.component.html":
/*!***********************************************************!*\
  !*** ./src/app/modals/edit-book/edit-book.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-smart-modal #editModal identifier=\"editModal\">\n  <h1>Edit An Existing Book </h1>\n  <form [formGroup]=\"formGroup\">\n    <div class=\"form-group\" [ngClass]=\"displayFieldCss('id')\">\n      <label for=\"id\" class=\"control-label required\">ID</label>\n      <input id=\"id\" type=\"text\" class=\"form-control\" formControlName=\"id\" [(ngModel)]=\"model.id\" />\n      <app-field-error-display\n        [displayError]=\"isFieldValid('id')\"\n        errorMsg=\"Please insert a book id\">\n      </app-field-error-display>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"displayFieldCss('authorName')\">\n      <label for=\"authorName\" class=\"control-label required\">Author Name</label>\n      <input id=\"authorName\" type=\"text\" class=\"form-control\" formControlName=\"authorName\" [(ngModel)]=\"model.authorName\" />\n      <app-field-error-display\n        [displayError]=\"isFieldValid('authorName')\"\n        errorMsg=\"Please insert the author name\">\n      </app-field-error-display>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"displayFieldCss('publishedDate')\">\n      <label for=\"publishedDate\" class=\"control-label required\">Published Date</label>\n      <input id=\"publishedDate\" type=\"date\" class=\"form-control\" formControlName=\"publishedDate\" [(ngModel)]=\"model.publishedDate\" />\n      <app-field-error-display\n        [displayError]=\"isFieldValid('publishedDate')\"\n        errorMsg=\"Please insert proper date MM/DD/YYYY\">\n      </app-field-error-display>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"displayFieldCss('bookTitle')\">\n      <label for=\"bookTitle\" class=\"control-label required\">Book Title</label>\n      <input id=\"bookTitle\" type=\"text\" class=\"form-control\" formControlName=\"bookTitle\" [(ngModel)]=\"model.bookTitle\" />\n      <app-field-error-display\n        [displayError]=\"isFieldValid('bookTitle')\"\n        errorMsg=\"{{errorMessage}}\">\n      </app-field-error-display>\n    </div>\n    <div class=\"modal-buttons\">\n      <button id=\"left\" (click)=\"action('Close')\">Close</button>\n      <button id=\"right\" (click)=\"action('Ok')\">Ok</button>\n    </div>\n  </form>\n</ngx-smart-modal>\n"

/***/ }),

/***/ "./src/app/modals/edit-book/edit-book.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modals/edit-book/edit-book.component.ts ***!
  \*********************************************************/
/*! exports provided: EditBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookComponent", function() { return EditBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _class_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../class/book */ "./src/app/class/book.ts");
/* harmony import */ var _validators_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators/validation.service */ "./src/app/validators/validation.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditBookComponent = /** @class */ (function () {
    function EditBookComponent(ngxSmartModalService, formBuilder, storeService) {
        this.ngxSmartModalService = ngxSmartModalService;
        this.formBuilder = formBuilder;
        this.storeService = storeService;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editBook = null;
        this.model = new _class_book__WEBPACK_IMPORTED_MODULE_3__["Book"];
        this.modelSubmit = new _class_book__WEBPACK_IMPORTED_MODULE_3__["Book"];
        this.errorMessage = "Please insert a title for the book";
        this.formGroup = this.formBuilder.group({
            id: [this.model.id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            authorName: [this.model.authorName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            publishedDate: [this.model.publishedDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _validators_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].dateValidator]],
            bookTitle: [this.model.bookTitle, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], this.validationTitle.bind(this)]
        });
    }
    EditBookComponent.prototype.ngOnChanges = function (changes) {
        if (changes.editBook.firstChange) {
            return;
        }
        else {
            this.modelSubmit = changes.editBook.currentValue;
            // keep value aside
            this.model = new _class_book__WEBPACK_IMPORTED_MODULE_3__["Book"];
            this.model.id = this.modelSubmit.id;
            this.model.authorName = this.modelSubmit.authorName;
            this.model.publishedDate = this.modelSubmit.publishedDate;
            this.model.bookTitle = this.modelSubmit.bookTitle;
        }
    };
    EditBookComponent.prototype.action = function (s) {
        var _this = this;
        if (s === 'Ok') {
            if (this.formGroup.valid) {
                // added it to store service
                this.storeService.editBook(this.model, this.modelSubmit).then(function () {
                    _this.notify.emit('Edited Successfully');
                    _this.ngxSmartModalService.getModal('editModal').close();
                }).catch(function () { });
            }
            else {
                Object.keys(this.formGroup.controls).forEach(function (field) {
                    var control = _this.formGroup.get(field);
                    control.markAsTouched({ onlySelf: true });
                });
            }
        }
        else {
            this.ngxSmartModalService.getModal('editModal').close();
        }
    };
    EditBookComponent.prototype.isFieldValid = function (field) {
        return !this.formGroup.get(field).valid && this.formGroup.get(field).touched;
    };
    EditBookComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    EditBookComponent.prototype.validationTitle = function (control) {
        var _this = this;
        return this.storeService.getBooks().then(function (res) {
            // if it is the same , dont check and exit
            if (_this.editBook.bookTitle == control.value) {
                return null;
            }
            else {
                var isExist = res.filter(function (book) { return book.bookTitle == control.value; });
                if (isExist['length']) {
                    _this.errorMessage = 'Please choose a different title for the book';
                    return { 'bookTitleExist': true };
                }
                else {
                    return null;
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditBookComponent.prototype, "notify", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditBookComponent.prototype, "editBook", void 0);
    EditBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-book',
            template: __webpack_require__(/*! ./edit-book.component.html */ "./src/app/modals/edit-book/edit-book.component.html"),
            styles: [__webpack_require__(/*! ./edit-book.component.css */ "./src/app/modals/edit-book/edit-book.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__["NgxSmartModalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"]])
    ], EditBookComponent);
    return EditBookComponent;
}());



/***/ }),

/***/ "./src/app/modals/remove-book/remove-book.component.css":
/*!**************************************************************!*\
  !*** ./src/app/modals/remove-book/remove-book.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  border: 0;\n  color: white;\n  padding: 10px;\n  margin-bottom:10px;\n  border-radius: 20px;\n  outline:none;\n}\nh1{\n  text-align: center;\n  font-size:1.5em;\n}\np{\n  text-align: center;\n}\n.modal-buttons{\n  position: relative;\n  display: block;\n  padding: 30px;\n}\n.modal-buttons > #left {\n  background: red;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.modal-buttons > #right {\n  background: green;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n"

/***/ }),

/***/ "./src/app/modals/remove-book/remove-book.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modals/remove-book/remove-book.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-smart-modal #removeModal identifier=\"removeModal\">\n  <h1>Delete An Existing Book </h1>\n  <div *ngIf=\"removeBook\">\n    <p>Do you want to delete this book ?</p>\n    <p>ID = {{removeBook.id}}</p>\n  </div>\n  <div class=\"modal-buttons\">\n    <button id=\"left\" (click)=\"action('Close')\">Close</button>\n    <button id=\"right\" (click)=\"action('Ok')\">Ok</button>\n  </div>\n</ngx-smart-modal>\n"

/***/ }),

/***/ "./src/app/modals/remove-book/remove-book.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modals/remove-book/remove-book.component.ts ***!
  \*************************************************************/
/*! exports provided: RemoveBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveBookComponent", function() { return RemoveBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RemoveBookComponent = /** @class */ (function () {
    function RemoveBookComponent(ngxSmartModalService, storeService) {
        this.ngxSmartModalService = ngxSmartModalService;
        this.storeService = storeService;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeBook = null;
    }
    RemoveBookComponent.prototype.action = function (s) {
        var _this = this;
        if (s === 'Ok') {
            this.storeService.getBooks().then(function (res) {
                // remove book id from array and set new books array for storage
                var store = res.filter(function (book) { return book.id != _this.removeBook.id; });
                _this.storeService.clearBooks().then(function (res) {
                    // console.log(res);
                    _this.storeService.setBooks(store);
                    _this.notify.emit('Deleted Successfully');
                });
            });
        }
        this.ngxSmartModalService.getModal('removeModal').close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RemoveBookComponent.prototype, "notify", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RemoveBookComponent.prototype, "removeBook", void 0);
    RemoveBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remove-book',
            template: __webpack_require__(/*! ./remove-book.component.html */ "./src/app/modals/remove-book/remove-book.component.html"),
            styles: [__webpack_require__(/*! ./remove-book.component.css */ "./src/app/modals/remove-book/remove-book.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__["NgxSmartModalService"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
    ], RemoveBookComponent);
    return RemoveBookComponent;
}());



/***/ }),

/***/ "./src/app/pipes/remove-none-eng.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/remove-none-eng.ts ***!
  \******************************************/
/*! exports provided: RemoveNoneEngPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveNoneEngPipe", function() { return RemoveNoneEngPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RemoveNoneEngPipe = /** @class */ (function () {
    function RemoveNoneEngPipe() {
    }
    RemoveNoneEngPipe.prototype.transform = function (value, args) {
        if (value === null)
            return 'Not assigned';
        return value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ' ').trim();
    };
    RemoveNoneEngPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'removeNonEnglish'
        })
    ], RemoveNoneEngPipe);
    return RemoveNoneEngPipe;
}());



/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this.url = 'https://www.googleapis.com/books/v1/volumes?q=war';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json');
        this.headerConfig = headers;
    }
    BookService.prototype.getAllBooksGoogleAPI = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url, {
                headers: _this.headerConfig,
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/services/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreService = /** @class */ (function () {
    function StoreService() {
        this.books = null;
        localforage__WEBPACK_IMPORTED_MODULE_1__["config"]({
            driver: localforage__WEBPACK_IMPORTED_MODULE_1__["WEBSQL"],
            name: 'BookLib',
            version: 1.0,
            size: 4980736,
            storeName: 'keyvaluepairs',
            description: 'some description'
        });
        this.instance = localforage__WEBPACK_IMPORTED_MODULE_1__["createInstance"]({});
    }
    StoreService.prototype.getBooks = function () {
        if (this.books) {
            return Promise.resolve(this.books);
        }
        else {
            return this.instance.getItem('books').then(function (res) {
                return res;
            });
        }
    };
    StoreService.prototype.setBooks = function (_books) {
        this.books = _books;
        return this.instance.setItem('books', _books).then(function (res) { });
    };
    StoreService.prototype.clearBooks = function () {
        this.instance.removeItem('books');
        return Promise.resolve(true);
    };
    StoreService.prototype.addBook = function (_book) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.books.push(_book);
            resolve(true);
        });
    };
    ;
    StoreService.prototype.editBook = function (_book, _bookOld) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var arr = _this.books.filter(function (book) { return book != _bookOld; });
            arr.push(_book);
            _this.books = arr;
            resolve(true);
        });
    };
    ;
    StoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "./src/app/validators/validation.service.ts":
/*!**************************************************!*\
  !*** ./src/app/validators/validation.service.ts ***!
  \**************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.dateValidator = function (control) {
        if (!control.value)
            return;
        else {
            if (control.value.match(/^\d{4}[-]\d{2}[-]\d{2}$/)) {
                return null;
            }
            else {
                return { 'invalidDate': true };
            }
        }
    };
    return ValidationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/AdamShwartz/WebstormProjects/book-lib-v1/book-lib/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map