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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/register", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"aside\" class=\"app-aside fade nav-dropdown black folded\" *ngIf=\"isUserLogin\">\r\n  <!-- fluid app aside -->\r\n  <div class=\"navside dk\" data-layout=\"column\">\r\n    <div class=\"navbar no-radius\">\r\n      <!-- brand -->\r\n      <a [routerLink]=\"['/']\" class=\"navbar-brand\">\r\n        \t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" width=\"32\" height=\"32\">\r\n          \t<circle cx=\"24\" cy=\"24\" r=\"24\" style=\"fill: rgba(120,130,140,0.7);\"></circle>\r\n          \t<circle cx=\"24\" cy=\"0\" r=\"2\" fill=\"#ffffff\" class=\"brand-animate\"></circle>\r\n          \t<text dy=\"10\" x=\"50%\" y=\"50%\" text-anchor=\"middle\" style=\"fill: #ffffff; stroke: none; font-size: 40px;\">a</text>\r\n          </svg>\r\n        \t<img src=\"assets/images/logo.png\" alt=\".\" class=\"hide\">\r\n        \t<span class=\"hidden-folded inline\">aside</span>\r\n        </a>\r\n      <!-- / brand -->\r\n    </div>\r\n    <div data-flex class=\"hide-scroll\">\r\n        <nav class=\"scroll nav-stacked nav-stacked-rounded nav-color\">\r\n\r\n          <ul class=\"nav\" data-ui-nav>\r\n            <li class=\"nav-header hidden-folded\">\r\n              <span class=\"text-xs\">Main</span>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/dashboard']\" class=\"b-danger\">\r\n                <span class=\"nav-icon text-white no-fade\">\r\n                  <i class=\"ion-filing\"></i>\r\n                </span>\r\n                <span class=\"nav-text\">Dashboard</span>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/project']\" class=\"b-success\">\r\n                <span class=\"nav-icon text-white no-fade\">\r\n                  <i class=\"ion-android-apps\"></i>\r\n                </span>\r\n                <span class=\"nav-text\">Projects</span>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/inbox']\" class=\"b-info\">\r\n                <span class=\"nav-icon text-white no-fade\">\r\n                  <i class=\"ion-email\"></i>\r\n                </span>\r\n                <span class=\"nav-text\">Inbox</span>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/message']\" class=\"b-default\">\r\n                <span class=\"nav-label\">\r\n                  <b class=\"label label-xs rounded danger\"></b>\r\n                </span>\r\n                <span class=\"nav-icon\">\r\n                  <i class=\"ion-chatbubble-working\"></i>\r\n                </span>\r\n                <span class=\"nav-text\">Messages</span>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/contact']\" class=\"b-default\">\r\n                <span class=\"nav-icon\">\r\n                  <i class=\"ion-person\"></i>\r\n                </span>\r\n                <span class=\"nav-text\">Contacts</span>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n    </div>\r\n    <div data-flex-no-shrink>\r\n      <div class=\"nav-fold dropup\">\r\n        <a data-toggle=\"dropdown\">\r\n            <div class=\"pull-left\">\r\n              <div class=\"inline\"><span class=\"avatar w-40 grey\">JR</span></div>\r\n              <img src=\"assets/images/a0.jpg\" alt=\"...\" class=\"w-40 img-circle hide\">\r\n            </div>\r\n            <div class=\"clear hidden-folded p-x\">\r\n              <span class=\"block _500 text-muted\">Jean Reyes</span>\r\n              <div class=\"progress-xxs m-y-sm lt progress\">\r\n                  <div class=\"progress-bar info\" style=\"width: 15%;\">\r\n                  </div>\r\n              </div>\r\n            </div>\r\n        </a>\r\n        <div class=\"dropdown-menu w dropdown-menu-scale \">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">\r\n            <span>Profile</span>\r\n          </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/setting']\">\r\n            <span>Settings</span>\r\n          </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/inbox']\">\r\n            <span>Inbox</span>\r\n          </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/message']\">\r\n            <span>Message</span>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\"  [routerLink]=\"['/login']\">Sign out</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"content\" class=\"app-content box-shadow-z2 pjax-container\" role=\"main\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isUserLogin = false;
        this.submitted = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        if (localStorage.getItem('currentUser')) {
            this.isUserLogin = true;
        }
        else {
            this.isUserLogin = false;
        }
    };
    AppComponent.prototype.onSubmit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _blank__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blank */ "./src/app/blank/index.ts");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project */ "./src/app/project/index.ts");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard */ "./src/app/dashboard/index.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./message */ "./src/app/message/index.ts");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./inbox */ "./src/app/inbox/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// used to create fake backend















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"],
                _home__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _login__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _blank__WEBPACK_IMPORTED_MODULE_13__["BlankComponent"],
                _project__WEBPACK_IMPORTED_MODULE_14__["ProjectComponent"],
                _message__WEBPACK_IMPORTED_MODULE_16__["MessageComponent"],
                _inbox__WEBPACK_IMPORTED_MODULE_17__["InboxComponent"],
                _dashboard__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"]
            ],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["UserService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"], multi: true },
                // provider used to create fake backend
                _helpers__WEBPACK_IMPORTED_MODULE_4__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _blank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blank */ "./src/app/blank/index.ts");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/app/project/index.ts");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard */ "./src/app/dashboard/index.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message */ "./src/app/message/index.ts");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inbox */ "./src/app/inbox/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");










var appRoutes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'blank', component: _blank__WEBPACK_IMPORTED_MODULE_4__["BlankComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'project', component: _project__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'dashboard', component: _dashboard__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'message', component: _message__WEBPACK_IMPORTED_MODULE_7__["MessageComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'inbox', component: _inbox__WEBPACK_IMPORTED_MODULE_8__["InboxComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    // otherwise redirect to blank
    { path: '**', redirectTo: 'blank' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/blank/blank.component.html":
/*!********************************************!*\
  !*** ./src/app/blank/blank.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-main\">\r\n  <h3><i class=\"fa fa-exclamation-triangle\"></i> <span>404</span></h3>\r\n<div class=\"col-xs-7 error-main-left\">\r\n  <span>Oops!</span>\r\n  <p>The page you're looking for could not be found.</p>\r\n  <div class=\"error-btn\">\r\n    <a [routerLink]=\"['/']\">Go back?</a>\r\n  </div>\r\n</div>\r\n<div class=\"col-xs-5 error-main-right\">\r\n  <img src=\"assets/images/7.png\" alt=\" \" class=\"img-responsive\" />\r\n</div>\r\n<div class=\"clearfix\"> </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/blank/blank.component.ts":
/*!******************************************!*\
  !*** ./src/app/blank/blank.component.ts ***!
  \******************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlankComponent = /** @class */ (function () {
    function BlankComponent(formBuilder, router, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    BlankComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(BlankComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    BlankComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./blank.component.html */ "./src/app/blank/blank.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/blank/index.ts":
/*!********************************!*\
  !*** ./src/app/blank/index.ts ***!
  \********************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank.component */ "./src/app/blank/blank.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return _blank_component__WEBPACK_IMPORTED_MODULE_0__["BlankComponent"]; });




/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header white bg b-b\">\r\n      <div class=\"navbar\" data-pjax>\r\n            <a data-toggle=\"modal\" data-target=\"#aside\" class=\"navbar-item pull-left hidden-lg-up p-r m-a-0\">\r\n              <i class=\"ion-navicon\"></i>\r\n            </a>\r\n            <div class=\"navbar-item pull-left h5\" id=\"pageTitle\">Dashboard</div>\r\n            <!-- nabar right -->\r\n            <ul class=\"nav navbar-nav pull-right\">\r\n              <li class=\"nav-item dropdown pos-stc-xs\">\r\n                <a class=\"nav-link\" data-toggle=\"dropdown\">\r\n                  <i class=\"ion-android-search w-24\"></i>\r\n                </a>\r\n                <div class=\"dropdown-menu text-color w-md animated fadeInUp pull-right\">\r\n                  <!-- search form -->\r\n\r\n                  <!-- / search form -->\r\n                </div>\r\n              </li>\r\n              <li class=\"nav-item dropdown pos-stc-xs\">\r\n                <a class=\"nav-link clear\" data-toggle=\"dropdown\">\r\n                  <i class=\"ion-android-notifications-none w-24\"></i>\r\n                  <span class=\"label up p-a-0 danger\"></span>\r\n                </a>\r\n                <!-- dropdown -->\r\n                <div class=\"dropdown-menu pull-right w-xl animated fadeIn no-bg no-border no-shadow\">\r\n                    <div class=\"scrollable\" style=\"max-height: 220px\">\r\n                      <ul class=\"list-group list-group-gap m-a-0\">\r\n                        <li class=\"list-group-item dark-white box-shadow-z0 b\">\r\n                          <span class=\"pull-left m-r\">\r\n                            <img src=\"assets/images/a0.jpg\" alt=\"...\" class=\"w-40 img-circle\">\r\n                          </span>\r\n                          <span class=\"clear block\">\r\n                            Use awesome <a href=\"#\" class=\"text-primary\">animate.css</a><br>\r\n                            <small class=\"text-muted\">10 minutes ago</small>\r\n                          </span>\r\n                        </li>\r\n                        <li class=\"list-group-item dark-white box-shadow-z0 b\">\r\n                          <span class=\"pull-left m-r\">\r\n                            <img src=\"assets/images/a1.jpg\" alt=\"...\" class=\"w-40 img-circle\">\r\n                          </span>\r\n                          <span class=\"clear block\">\r\n                            <a href=\"#\" class=\"text-primary\">Joe</a> Added you as friend<br>\r\n                            <small class=\"text-muted\">2 hours ago</small>\r\n                          </span>\r\n                        </li>\r\n                        <li class=\"list-group-item dark-white text-color box-shadow-z0 b\">\r\n                          <span class=\"pull-left m-r\">\r\n                            <img src=\"assets/images/a2.jpg\" alt=\"...\" class=\"w-40 img-circle\">\r\n                          </span>\r\n                          <span class=\"clear block\">\r\n                            <a href=\"#\" class=\"text-primary\">Danie</a> sent you a message<br>\r\n                            <small class=\"text-muted\">1 day ago</small>\r\n                          </span>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                </div>\r\n                <!-- / dropdown -->\r\n              </li>\r\n              <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link clear\" data-toggle=\"dropdown\">\r\n                  <span class=\"avatar w-32\">\r\n                    <img src=\"assets/images/a3.jpg\" class=\"w-full rounded\" alt=\"...\">\r\n                  </span>\r\n                </a>\r\n                <div class=\"dropdown-menu w dropdown-menu-scale pull-right\">\r\n                  <a class=\"dropdown-item\" href=\"profile.html\">\r\n                    <span>Profile</span>\r\n                  </a>\r\n                  <a class=\"dropdown-item\" href=\"setting.html\">\r\n                    <span>Settings</span>\r\n                  </a>\r\n                  <a class=\"dropdown-item\" href=\"app.inbox.html\">\r\n                    <span>Inbox</span>\r\n                  </a>\r\n                  <a class=\"dropdown-item\" href=\"app.message.html\">\r\n                    <span>Message</span>\r\n                  </a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item\" href=\"docs.html\">\r\n                    Need help?\r\n                  </a>\r\n                  <a class=\"dropdown-item\" href=\"signin.html\">Sign out</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n            <!-- / navbar right -->\r\n      </div>\r\n</div>\r\n<div class=\"app-footer white bg p-a b-t\">\r\n  <div class=\"pull-right text-sm text-muted\">Version 1.0.1</div>\r\n  <span class=\"text-sm text-muted\">&copy; Copyright.</span>\r\n</div>\r\n<div class=\"app-body\">\r\n\r\n<!-- ############ PAGE START-->\r\n<div class=\"row-col\">\r\n<div class=\"col-lg b-r\">\r\n<div class=\"row no-gutter\">\r\n  <div class=\"col-xs-6 col-sm-3 b-r b-b\">\r\n    <div class=\"padding\">\r\n      <div>\r\n        <span class=\"pull-right\"><i class=\"fa fa-caret-up text-primary m-y-xs\"></i></span>\r\n        <span class=\"text-muted l-h-1x\"><i class=\"ion-ios-grid-view text-muted\"></i></span>\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <h2 class=\"text-center _600\">45</h2>\r\n        <p class=\"text-muted m-b-md\">New Projects</p>\r\n        <div>\r\n          <span data-ui-jp=\"sparkline\" data-ui-options=\"[2,3,2,2,1,3,6,3,2,1], {type:'line', height:20, width: '60', lineWidth:1, valueSpots:{'0:':'#818a91'}, lineColor:'#818a91', spotColor:'#818a91', fillColor:'', highlightLineColor:'rgba(120,130,140,0.3)', spotRadius:0}\" class=\"sparkline inline\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n      </div>\r\n      <div class=\"col-xs-6 col-sm-3 b-r b-b\">\r\n    <div class=\"padding\">\r\n      <div>\r\n        <span class=\"pull-right\"><i class=\"fa fa-caret-up text-primary m-y-xs\"></i></span>\r\n        <span class=\"text-muted l-h-1x\"><i class=\"ion-document text-muted\"></i></span>\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <h2 class=\"text-center _600\">219</h2>\r\n        <p class=\"text-muted m-b-md\">New Invoices</p>\r\n        <div>\r\n          <span data-ui-jp=\"sparkline\" data-ui-options=\"[1,1,0,2,3,4,2,1,2,2], {type:'line', height:20, width: '60', lineWidth:1, valueSpots:{'0:':'#818a91'}, lineColor:'#818a91', spotColor:'#818a91', fillColor:'', highlightLineColor:'rgba(120,130,140,0.3)', spotRadius:0}\" class=\"sparkline inline\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n      </div>\r\n      <div class=\"col-xs-6 col-sm-3 b-r b-b\">\r\n    <div class=\"padding\">\r\n      <div>\r\n        <span class=\"pull-right\"><i class=\"fa fa-caret-down text-danger m-y-xs\"></i></span>\r\n        <span class=\"text-muted l-h-1x\"><i class=\"ion-pie-graph text-muted\"></i></span>\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <h2 class=\"text-center _600\">8</h2>\r\n        <p class=\"text-muted m-b-md\">New Quotes</p>\r\n        <div>\r\n          <span data-ui-jp=\"sparkline\" data-ui-options=\"[9,2,5,5,7,4,4,3,2,2], {type:'line', height:20, width: '60', lineWidth:1, valueSpots:{'0:':'#818a91'}, lineColor:'#818a91', spotColor:'#818a91', fillColor:'', highlightLineColor:'rgba(120,130,140,0.3)', spotRadius:0}\" class=\"sparkline inline\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n      </div>\r\n      <div class=\"col-xs-6 col-sm-3 b-b\">\r\n    <div class=\"padding\">\r\n      <div>\r\n        <span class=\"pull-right\"><i class=\"fa fa-caret-up text-primary m-y-xs\"></i></span>\r\n        <span class=\"text-muted l-h-1x\"><i class=\"ion-paper-airplane text-muted\"></i></span>\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <h2 class=\"text-center _600\">36</h2>\r\n        <p class=\"text-muted m-b-md\">New Compains</p>\r\n        <div>\r\n          <span data-ui-jp=\"sparkline\" data-ui-options=\"[3,3,1,62,4,3,7,3,2,5], {type:'line', height:20, width: '60', lineWidth:1, valueSpots:{'0:':'#818a91'}, lineColor:'#818a91', spotColor:'#818a91', fillColor:'', highlightLineColor:'rgba(120,130,140,0.3)', spotRadius:0}\" class=\"sparkline inline\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n      </div>\r\n    </div>\r\n<div class=\"padding\">\r\n  <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n          <div class=\"box\">\r\n            <div class=\"box-header\">\r\n              <h3>Marketing</h3>\r\n              <small>A general overview of your sales</small>\r\n            </div>\r\n            <div class=\"box-tool\">\r\n            <ul class=\"nav\">\r\n              <li class=\"nav-item inline\">\r\n                <a class=\"nav-link\">\r\n                  <i class=\"ion-android-sync m-x-xs\"></i>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item inline dropdown\">\r\n                <a class=\"nav-link\" data-toggle=\"dropdown\">\r\n                  <i class=\"ion-android-menu m-x-xs\"></i>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-scale pull-right\">\r\n                  <a class=\"dropdown-item\" href=\"#\">This week</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">This month</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">This week</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item\">Today</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n            <div>\r\n              <canvas data-ui-jp=\"chart\" data-ui-options=\"\r\n                {\r\n                  type: 'line',\r\n                  data: {\r\n                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n                      datasets: [\r\n                          {\r\n                              label: 'Dataset',\r\n                              data: [25, 21, 18, 20, 30, 40, 45],\r\n                              fill: true,\r\n                              backgroundColor: '#2196f3',\r\n                              borderColor: '#2196f3',\r\n                              borderWidth: 2,\r\n                              borderCapStyle: 'butt',\r\n                              borderDash: [],\r\n                              borderDashOffset: 0.0,\r\n                              borderJoinStyle: 'miter',\r\n                              pointBorderColor: '#2196f3',\r\n                              pointBackgroundColor: '#fff',\r\n                              pointBorderWidth: 2,\r\n                              pointHoverRadius: 4,\r\n                              pointHoverBackgroundColor: '#2196f3',\r\n                              pointHoverBorderColor: '#fff',\r\n                              pointHoverBorderWidth: 2,\r\n                              pointRadius: [0,4,4,4,4,4,0],\r\n                              pointHitRadius: 10,\r\n                              spanGaps: false\r\n                          }\r\n                      ]\r\n                  },\r\n                  options: {\r\n                    scales: {\r\n                      xAxes: [{\r\n                         display: false\r\n                      }],\r\n                      yAxes: [{\r\n                         display: false,\r\n                         ticks:{\r\n                           min: 0,\r\n                           max: 60\r\n                         }\r\n                      }]\r\n                    },\r\n                    legend: {\r\n                      display: false\r\n                    }\r\n                  }\r\n                }\r\n                \" height=\"150\">\r\n                </canvas>\r\n            </div>\r\n            <div class=\"box-body info text-center p-b-md\">\r\n              <span class=\"dark-white rounded m-r p-x p-y-xs text-info\"><i class=\"fa fa-caret-up\"></i> 20%</span>\r\n              <span>Over last Month</span>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"box\">\r\n            <div class=\"box-header\">\r\n              <h3>Orders</h3>\r\n              <small>Calculated in last 30 days</small>\r\n            </div>\r\n            <div class=\"box-tool\">\r\n            <ul class=\"nav\">\r\n              <li class=\"nav-item inline\">\r\n                <a class=\"nav-link\">\r\n                  <i class=\"ion-android-sync m-x-xs\"></i>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item inline dropdown\">\r\n                <a class=\"nav-link\" data-toggle=\"dropdown\">\r\n                  <i class=\"ion-android-menu m-x-xs\"></i>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-scale pull-right\">\r\n                  <a class=\"dropdown-item\" href=\"#\">This week</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">This month</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">This week</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item\">Today</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n            <div>\r\n              <canvas data-ui-jp=\"chart\" data-ui-options=\"\r\n                {\r\n                  type: 'line',\r\n                  data: {\r\n                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n                      datasets: [\r\n                          {\r\n                              label: 'Dataset',\r\n                              data: [63, 57, 40, 25, 20, 22, 26],\r\n                              fill: true,\r\n                              backgroundColor: '#ef193c',\r\n                              borderColor: '#ef193c',\r\n                              borderWidth: 2,\r\n                              borderCapStyle: 'butt',\r\n                              borderDash: [],\r\n                              borderDashOffset: 0.0,\r\n                              borderJoinStyle: 'miter',\r\n                              pointBorderColor: '#ef193c',\r\n                              pointBackgroundColor: '#fff',\r\n                              pointBorderWidth: 2,\r\n                              pointHoverRadius: 4,\r\n                              pointHoverBackgroundColor: '#ef193c',\r\n                              pointHoverBorderColor: '#fff',\r\n                              pointHoverBorderWidth: 2,\r\n                              pointRadius: [0,4,4,4,4,4,0],\r\n                              pointHitRadius: 10,\r\n                              spanGaps: false\r\n                          }\r\n                      ]\r\n                  },\r\n                  options: {\r\n                    scales: {\r\n                      xAxes: [{\r\n                         display: false\r\n                      }],\r\n                      yAxes: [{\r\n                         display: false,\r\n                         ticks:{\r\n                           min: 0,\r\n                           max: 100\r\n                         }\r\n                      }]\r\n                    },\r\n                    legend: {\r\n                      display: false\r\n                    }\r\n                  }\r\n                }\r\n                \" height=\"150\">\r\n                </canvas>\r\n            </div>\r\n            <div class=\"box-body danger text-center p-b-md\">\r\n              <span class=\"dark-white rounded m-r p-x p-y-xs text-danger\"><i class=\"fa fa-caret-down\"></i> 25%</span>\r\n              <span>Over last Month</span>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"box\">\r\n            <div class=\"box-header\">\r\n              <h3>Deposit</h3>\r\n              <small>Calculated in last 7 days</small>\r\n            </div>\r\n            <div class=\"box-tool\">\r\n            <ul class=\"nav\">\r\n              <li class=\"nav-item inline\">\r\n                <a class=\"nav-link\">\r\n                  <i class=\"ion-android-sync m-x-xs\"></i>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item inline dropdown\">\r\n                <a class=\"nav-link\" data-toggle=\"dropdown\">\r\n                  <i class=\"ion-android-menu m-x-xs\"></i>\r\n                </a>\r\n                <div class=\"dropdown-menu dropdown-menu-scale pull-right\">\r\n                  <a class=\"dropdown-item\" href=\"#\">This week</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">This month</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">This week</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item\">Today</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n            <div>\r\n              <canvas data-ui-jp=\"chart\" data-ui-options=\"\r\n                {\r\n                  type: 'line',\r\n                  data: {\r\n                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n                      datasets: [\r\n                          {\r\n                              label: 'Dataset',\r\n                              data: [10, 15, 25, 40, 60, 75, 80],\r\n                              fill: true,\r\n                              backgroundColor: '#22b66e',\r\n                              borderColor: '#22b66e',\r\n                              borderWidth: 2,\r\n                              borderCapStyle: 'butt',\r\n                              borderDash: [],\r\n                              borderDashOffset: 0.0,\r\n                              borderJoinStyle: 'miter',\r\n                              pointBorderColor: '#22b66e',\r\n                              pointBackgroundColor: '#fff',\r\n                              pointBorderWidth: 2,\r\n                              pointHoverRadius: 4,\r\n                              pointHoverBackgroundColor: '#22b66e',\r\n                              pointHoverBorderColor: '#fff',\r\n                              pointHoverBorderWidth: 2,\r\n                              pointRadius: [0,4,4,4,4,4,0],\r\n                              pointHitRadius: 10,\r\n                              spanGaps: false\r\n                          }\r\n                      ]\r\n                  },\r\n                  options: {\r\n                    scales: {\r\n                      xAxes: [{\r\n                         display: false\r\n                      }],\r\n                      yAxes: [{\r\n                         display: false,\r\n                         ticks:{\r\n                           min: 0,\r\n                           max: 120\r\n                         }\r\n                      }]\r\n                    },\r\n                    legend: {\r\n                      display: false\r\n                    }\r\n                  }\r\n                }\r\n                \" height=\"150\">\r\n                </canvas>\r\n            </div>\r\n            <div class=\"box-body success text-center p-b-md\">\r\n              <span class=\"dark-white rounded m-r p-x p-y-xs text-success\"><i class=\"fa fa-caret-up\"></i> 85%</span>\r\n              <span>Over last Month</span>\r\n            </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n      <div class=\"box\">\r\n        <div class=\"box-header b-b\">\r\n          <h3>System status</h3>\r\n        </div>\r\n        <div class=\"box-tool\">\r\n      <div class=\"dropdown\">\r\n              <a data-toggle=\"dropdown\" class=\"btn btn-xs rounded white dropdown-toggle\">Today</a>\r\n              <div class=\"dropdown-menu pull-right\">\r\n                <a class=\"dropdown-item\" href=\"#\">Last 24 hours</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Last 7 days</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Last month</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Last Year</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\">Today</a>\r\n              </div>\r\n           </div>\r\n        </div>\r\n        <div>\r\n          <div class=\"row-col\">\r\n            <div class=\"col-sm-4 b-r light lt\">\r\n              <div class=\"p-a-md\">\r\n                    <span class=\"pull-right text-success\">40%</span>\r\n                    <small>Consulting</small>\r\n                  <div class=\"progress progress-xs m-t-sm white bg\">\r\n                    <div class=\"progress-bar success\" data-toggle=\"tooltip\" data-original-title=\"40%\" style=\"width: 40%\"></div>\r\n                  </div>\r\n                  <span class=\"pull-right text-info\">25%</span>\r\n                  <small>Online tutorials</small>\r\n                  <div class=\"progress progress-xs m-t-sm white bg\">\r\n                    <div class=\"progress-bar info\" data-toggle=\"tooltip\" data-original-title=\"25%\" style=\"width: 25%\"></div>\r\n                  </div>\r\n                  <span class=\"pull-right text-danger\">15%</span>\r\n                  <small>EDU management</small>\r\n                  <div class=\"progress progress-xs m-t-sm white bg\">\r\n                    <div class=\"progress-bar danger\" data-toggle=\"tooltip\" data-original-title=\"15%\" style=\"width: 15%\"></div>\r\n                  </div>\r\n                  <p class=\"text-muted m-t-md text-sm\">Morbi id neque quam. Dales nisi nec adipiscing elit. ADales nisi nec adipiscing elit. liquam sollicitudin venenatis</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <div class=\"p-a\">\r\n                <canvas data-ui-jp=\"chart\" data-ui-options=\"\r\n                    {\r\n                      type: 'bar',\r\n                      data: {\r\n                          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\r\n                          datasets: [\r\n                            {\r\n                                label: 'Dataset1',\r\n                                type: 'bubble',\r\n                                data: [\r\n                                  {\r\n                                      x: 10,\r\n                                      y: 30,\r\n                                      r: 25\r\n                                  },\r\n                                  {\r\n                                      x: 20,\r\n                                      y: 20,\r\n                                      r: 8\r\n                                  },\r\n                                  {\r\n                                      x: 30,\r\n                                      y: 12,\r\n                                      r: 5\r\n                                  },\r\n                                  {\r\n                                      x: 40,\r\n                                      y: 37,\r\n                                      r: 4\r\n                                  },\r\n                                  {\r\n                                      x: 50,\r\n                                      y: 30,\r\n                                      r: 10\r\n                                  },\r\n                                  {\r\n                                      x: 60,\r\n                                      y: 20,\r\n                                      r: 8\r\n                                  },\r\n                                  {\r\n                                      x: 70,\r\n                                      y: 30,\r\n                                      r: 15\r\n                                  }\r\n                                ],\r\n                                backgroundColor: [\r\n                                    '#22b66e',\r\n                                    '#FF6384',\r\n                                    '#4BC0C0',\r\n                                    '#E7E9ED',\r\n                                    '#36A2EB',\r\n                                    '#FFCE56',\r\n                                    '#FF6384',\r\n                                    '#36A2EB'\r\n                                ]\r\n                            },\r\n                            {\r\n                                label: 'Dataset2',\r\n                                type: 'bar',\r\n                                data: [9, 10, 31, 14, 12, 8, 10],\r\n                                backgroundColor: 'rgba(120,130,140,0.2)',\r\n                                borderColor: 'rgba(120,130,140,0.2)',\r\n                                borderWidth: 1,\r\n                                borderJoinStyle: 'miter'\r\n                            }\r\n                          ]\r\n                      },\r\n                      options: {\r\n                        scales: {\r\n                          xAxes:[\r\n                            {\r\n                              barPercentage: 0.4\r\n                            }\r\n                          ],\r\n                          yAxes:[\r\n                            {\r\n                              display: false\r\n                            }\r\n                          ]\r\n                      },\r\n                      legend: {\r\n                        position: 'bottom'\r\n                      }\r\n                      }\r\n                    }\r\n                    \" height=\"200\">\r\n                  </canvas>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n          <div class=\"box\">\r\n              <div class=\"box-header\">\r\n                <span class=\"label success pull-right\">52</span>\r\n                <h3>Members</h3>\r\n              </div>\r\n              <div class=\"p-b-sm\">\r\n                <ul class=\"list no-border m-a-0\">\r\n                  <li class=\"list-item\">\r\n                    <a href=\"#\" class=\"list-left\">\r\n                      <span class=\"w-40 avatar danger\">\r\n                        <span>C</span>\r\n                        <i class=\"on b-white bottom\"></i>\r\n                      </span>\r\n                    </a>\r\n                    <div class=\"list-body\">\r\n                      <div><a href=\"#\">Chris Fox</a></div>\r\n                      <small class=\"text-muted text-ellipsis\">Designer, Blogger</small>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"list-item\">\r\n                    <a href=\"#\" class=\"list-left\">\r\n                      <span class=\"w-40 avatar purple\">\r\n                        <span>M</span>\r\n                        <i class=\"on b-white bottom\"></i>\r\n                    </span>\r\n                    </a>\r\n                    <div class=\"list-body\">\r\n                      <div><a href=\"#\">Mogen Polish</a></div>\r\n                      <small class=\"text-muted text-ellipsis\">Writter, Mag Editor</small>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"list-item\">\r\n                    <a href=\"#\" class=\"list-left\">\r\n                      <span class=\"w-40 avatar info\">\r\n                        <span>J</span>\r\n                        <i class=\"off b-white bottom\"></i>\r\n                    </span>\r\n                    </a>\r\n                    <div class=\"list-body\">\r\n                      <div><a href=\"#\">Joge Lucky</a></div>\r\n                      <small class=\"text-muted text-ellipsis\">Art director, Movie Cut</small>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"list-item\">\r\n                    <a href=\"#\" class=\"list-left\">\r\n                      <span class=\"w-40 avatar warning\">\r\n                        <span>F</span>\r\n                        <i class=\"on b-white bottom\"></i>\r\n                    </span>\r\n                    </a>\r\n                    <div class=\"list-body\">\r\n                      <div><a href=\"#\">Folisise Chosielie</a></div>\r\n                      <small class=\"text-muted text-ellipsis\">Musician, Player</small>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"list-item\">\r\n                    <a href=\"#\" class=\"list-left\">\r\n                      <span class=\"w-40 avatar success\">\r\n                        <span>P</span>\r\n                        <i class=\"away b-white bottom\"></i>\r\n                      </span>\r\n                    </a>\r\n                    <div class=\"list-body\">\r\n                      <div><a href=\"#\">Peter</a></div>\r\n                      <small class=\"text-muted text-ellipsis\">Musician, Player</small>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n      <div class=\"box\">\r\n        <div class=\"box-header\">\r\n          <h3>Tasks</h3>\r\n          <small>20 finished, 5 remaining</small>\r\n        </div>\r\n        <div class=\"box-tool\">\r\n              <ul class=\"nav\">\r\n                <li class=\"nav-item inline dropdown\">\r\n                  <a class=\"nav-link text-muted p-x-xs\" data-toggle=\"dropdown\">\r\n                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                  </a>\r\n                  <div class=\"dropdown-menu dropdown-menu-scale pull-right\">\r\n                    <a class=\"dropdown-item\" href=\"#\">New task</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Make all finished</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Make all unfinished</a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\">Settings</a>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n          </div>\r\n        <div class=\"box-body\">\r\n            <div class=\"streamline\">\r\n                <div class=\"sl-item b-success\">\r\n                  <div class=\"sl-content\">\r\n                    <div class=\"sl-date text-muted\">8:30</div>\r\n                    <div>Call to customer <a href=\"#\" class=\"text-info\">Jacob</a> and discuss the detail about the AP project.</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"sl-item\">\r\n                  <div class=\"sl-content\">\r\n                    <div class=\"sl-date text-muted\">Sat, 5 Mar</div>\r\n                    <div>Prepare for presentation</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"sl-item\">\r\n                  <div class=\"sl-content\">\r\n                    <div class=\"sl-date text-muted\">Sun, 11 Feb</div>\r\n                    <div><a href=\"#\" class=\"text-info\">Jessi</a> assign you a task <a href=\"#\" class=\"text-info\">Mockup Design</a>.</div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n          <div class=\"box-footer\">\r\n            <a href=\"#\" class=\"btn btn-xs white rounded\">More</a>\r\n          </div>\r\n        </div>\r\n    </div>\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"row-col b-a white m-b\">\r\n          <div class=\"col-md-8\">\r\n            <div class=\"box-header b-b\"><h3>World Market</h3></div>\r\n            <div class=\"box-body\">\r\n              <p class=\"m-b-lg text-muted\">Worldwide data visualization</p>\r\n              <div class=\"m-b-md\" style=\"height:240px;\" data-ui-jp=\"vectorMap\" data-ui-options=\"{\r\n                map: 'world_mill_en',\r\n                markers: [{latLng: [52.5167, 13.3833], name: 'Berlin'}, {latLng: [48.8567, 2.3508], name: 'Paris'}, {latLng: [35.6833, 139.6833], name: 'Tokyo'}, {latLng: [40.7127, -74.0059], name: 'New York City'},{latLng: [49.2827, -123.1207], name: 'City of Vancouver'},{latLng: [22.2783, 114.1747], name: 'Hong Kong'},{latLng: [55.7500, 37.6167], name: 'Moscow'},{latLng: [37.7833, -122.4167], name: 'San Francisco'},{latLng: [39.9167, 116.3833], name: 'Beijing'}],\r\n                normalizeFunction: 'polynomial',\r\n                backgroundColor: 'transparent',\r\n                regionsSelectable: true,\r\n                markersSelectable: true,\r\n                regionStyle: {\r\n                  initial: {\r\n                    fill: 'rgba(120,130,140,0.3)'\r\n                  },\r\n                  hover: {\r\n                    fill: 'rgba(120,130,140,0.3)',\r\n                    stroke: '#fff'\r\n                  },\r\n                },\r\n                markerStyle: {\r\n                  initial: {\r\n                    fill: '#f3c111',\r\n                    stroke: '#fff'\r\n                  },\r\n                  hover: {\r\n                    fill: 'rgba(120,130,140,0.3)',\r\n                    stroke: '#fff'\r\n                  }\r\n                },\r\n                series: {\r\n                  markers: [{\r\n                    attribute: 'fill',\r\n                    scale: ['#22b66e','#f3c111', '#ef193c'],\r\n                    values: [ 605.16, 310.69, 405.17, 748.31, 207.35, 217.22, 137.70, 280.71, 210.32, 325.42 ]\r\n                  },{\r\n                    attribute: 'r',\r\n                    scale: [5, 20],\r\n                    values: [ 605.16, 310.69, 405.17, 748.31, 207.35, 217.22, 137.70, 280.71, 210.32, 325.42 ]\r\n                  }]\r\n                }\r\n              }\" >\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 b-l no-border-sm\">\r\n            <div class=\"box-header b-b\"><h3>Infomation</h3></div>\r\n            <div class=\"list-group no-border no-radius\">\r\n              <div class=\"list-group-item\">\r\n                <span class=\"pull-right text-muted\">293,200</span>\r\n                <i class=\"label label-xs red m-r-sm\"></i>\r\n                New York City\r\n              </div>\r\n              <div class=\"list-group-item\">\r\n                <span class=\"pull-right text-muted\">203,000</span>\r\n                <i class=\"label label-xs orange m-r-sm\"></i>\r\n                Berlin\r\n              </div>\r\n              <div class=\"list-group-item\">\r\n                <span class=\"pull-right text-muted\">180,230</span>\r\n                <i class=\"label label-xs yellow m-r-sm\"></i>\r\n                Paris\r\n              </div>\r\n              <div class=\"list-group-item\">\r\n                <span class=\"pull-right text-muted\">130,100</span>\r\n                <i class=\"label label-xs green m-r-sm\"></i>\r\n                Maldives\r\n              </div>\r\n              <div class=\"list-group-item\">\r\n                <span class=\"pull-right text-muted\">98,000</span>\r\n                <i class=\"label label-xs teal m-r-sm\"></i>\r\n                Palau\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"box\">\r\n        <div class=\"box-header\">\r\n          <h3>Messages</h3>\r\n        </div>\r\n        <ul class=\"list-group no-border m-b\">\r\n              <li class=\"list-group-item\">\r\n                <a href=\"#\" class=\"pull-left w-40 m-r\"><img src=\"assets/images/a8.jpg\" class=\"img-responsive img-circle\" alt=\".\"></a>\r\n                <div class=\"clear\">\r\n                  <a href=\"#\" class=\"_500 block\">Jonathan Doe</a>\r\n                  <span class=\"text-muted text-ellipsis\">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <a href=\"\" class=\"pull-left w-40 m-r\"><img src=\"assets/images/a2.jpg\" class=\"img-responsive img-circle\" alt=\".\"></a>\r\n                <div class=\"clear\">\r\n                  <a href=\"#\" class=\"_500 block\">Jack Michale</a>\r\n                  <span class=\"text-muted text-ellipsis\">Sectetur adipiscing elit</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <a href=\"\" class=\"pull-left w-40 m-r\"><img src=\"assets/images/a3.jpg\" class=\"img-responsive img-circle\" alt=\".\"></a>\r\n                <div class=\"clear\">\r\n                  <a href=\"#\" class=\"_500 block\">Jessi</a>\r\n                  <span class=\"text-muted text-ellipsis\">Sectetur adipiscing elit</span>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <a href=\"\" class=\"pull-left w-40 m-r\"><img src=\"assets/images/a4.jpg\" class=\"img-responsive img-circle\" alt=\".\"></a>\r\n                <div class=\"clear\">\r\n                  <a href=\"#\" class=\"_500 block\">Sodake</a>\r\n                  <span class=\"text-muted text-ellipsis\">Vestibulum ullamcorper sodales nisi nec condimentum</span>\r\n                </div>\r\n              </li>\r\n          </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n          <div class=\"box\">\r\n              <div class=\"box-header b-b\">\r\n                <h3>News</h3>\r\n              </div>\r\n              <ul class=\"list\">\r\n                <li class=\"list-item\">\r\n                  <div class=\"list-body\">\r\n                    <div class=\"text-ellipsis\">Wellcome <a href=\"#\" class=\"text-info\">@Drew Wllon</a> and play this web application template, have fun1 </div>\r\n                    <small class=\"block text-muted\"><i class=\"fa fa-fw fa-clock-o\"></i> 2 minuts ago</small>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-item\">\r\n                  <div class=\"list-body\">\r\n                    <p>Morbi nec <a href=\"#\" class=\"text-info\">@Jonathan George</a> nunc condimentum ipsum dolor sit amet, consectetur</p>\r\n                    <small class=\"block text-muted\"><i class=\"fa fa-fw fa-clock-o\"></i> 1 hour ago</small>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-item\">\r\n                  <div class=\"list-body\">\r\n                    <p><a href=\"#\" class=\"text-info\">@Josh Long</a> Vestibulum ullamcorper sodales nisi nec adipiscing elit. Morbi id neque quam</p>\r\n                    <small class=\"block text-muted\"><i class=\"fa fa-fw fa-clock-o\"></i> 2 hours ago</small>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n          </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"col-lg w-lg w-auto-md white bg\">\r\n<div>\r\n  <div class=\"p-a\">\r\n    <h6 class=\"text-muted m-a-0\">Quick chat</h6>\r\n  </div>\r\n  <div class=\"list inset\">\r\n    <a class=\"list-item\" data-toggle=\"modal\" data-target=\"#chat\" data-dismiss=\"modal\">\r\n            <span class=\"list-left\">\r\n              <span class=\"avatar\">\r\n                <i class=\"on avatar-center no-border\"></i>\r\n                  <img src=\"assets/images/a1.jpg\" class=\"w-20\" alt=\".\">\r\n                </span>\r\n            </span>\r\n            <span class=\"list-body text-ellipsis\">\r\n              Jonathan Morina\r\n            </span>\r\n          </a>\r\n          <a class=\"list-item\" data-toggle=\"modal\" data-target=\"#chat\" data-dismiss=\"modal\">\r\n            <span class=\"list-left\">\r\n              <span class=\"avatar\">\r\n                <i class=\"on avatar-center no-border\"></i>\r\n                  <img src=\"assets/images/a2.jpg\" class=\"w-20\" alt=\".\">\r\n                </span>\r\n            </span>\r\n            <span class=\"list-body text-ellipsis\">\r\n              Crystal Guerrero\r\n            </span>\r\n          </a>\r\n          <a class=\"list-item\" data-toggle=\"modal\" data-target=\"#chat\" data-dismiss=\"modal\">\r\n            <span class=\"list-left\">\r\n              <span class=\"avatar\">\r\n                <i class=\"on avatar-center no-border\"></i>\r\n                  <img src=\"assets/images/a3.jpg\" class=\"w-20\" alt=\".\">\r\n                </span>\r\n            </span>\r\n            <span class=\"list-body text-ellipsis\">\r\n              Judith Garcia\r\n            </span>\r\n          </a>\r\n          <a class=\"list-item\" data-toggle=\"modal\" data-target=\"#chat\" data-dismiss=\"modal\">\r\n            <span class=\"list-left\">\r\n              <span class=\"avatar\">\r\n                <i class=\"away avatar-center no-border\"></i>\r\n                  <img src=\"assets/images/a4.jpg\" class=\"w-20\" alt=\".\">\r\n                </span>\r\n            </span>\r\n            <span class=\"list-body text-ellipsis\">\r\n              Melissa Garza\r\n            </span>\r\n          </a>\r\n          <a class=\"list-item\" data-toggle=\"modal\" data-target=\"#chat\" data-dismiss=\"modal\">\r\n            <span class=\"list-left\">\r\n              <span class=\"avatar\">\r\n                <i class=\"off avatar-center no-border\"></i>\r\n                  <img src=\"assets/images/a5.jpg\" class=\"w-20\" alt=\".\">\r\n                </span>\r\n            </span>\r\n            <span class=\"list-body text-ellipsis\">\r\n              Douglas Torres\r\n            </span>\r\n          </a>\r\n      </div>\r\n      <div class=\"p-a\">\r\n        <h6 class=\"text-muted m-a-0\">Activities</h6>\r\n      </div>\r\n      <div class=\"streamline streamline-theme m-b\">\r\n        <div class=\"sl-item b-success\">\r\n          <div class=\"sl-content\">\r\n            <div>Finished task <a href=\"#\" class=\"text-info\">#features 4</a>.</div>\r\n            <div class=\"sl-date text-muted\">Just now</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sl-item b-success active\">\r\n          <div class=\"sl-content\">\r\n            <div><a href=\"#\">@Jessi</a> uploaded a file <a href=\"#\" class=\"text-info\">documentation.pdf</a></div>\r\n            <div class=\"sl-date text-muted\">11:30</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sl-item b-info\">\r\n          <div class=\"sl-content\">\r\n            <div>Call to customer <a href=\"#\" class=\"text-info\">Jacob</a> and discuss the detail.</div>\r\n            <div class=\"sl-date text-muted\">10:30</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sl-item\">\r\n          <div class=\"sl-content\">\r\n            <div><a href=\"#\" class=\"text-info\">Jessi</a> commented your post.</div>\r\n            <div class=\"sl-date text-muted\">3 days ago</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sl-item\">\r\n          <div class=\"sl-content\">\r\n            <div><a href=\"#\" class=\"text-info\">Jessi</a> report a issue #2122.</div>\r\n            <div class=\"sl-date text-muted\">Thu, 10 Mar</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sl-item\">\r\n          <div class=\"sl-content\">\r\n            <div>Prepare for presentation</div>\r\n            <div class=\"sl-date text-muted\">Sat, 5 Mar</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"modal fade inactive\" id=\"chat\" data-backdrop=\"false\">\r\n<div class=\"modal-right w-xxl dark-white b-l\">\r\n  <div class=\"row-col\">\r\n    <a data-dismiss=\"modal\" class=\"pull-right text-muted text-lg p-a-sm m-r-sm\">&times;</a>\r\n    <div class=\"p-a b-b\">\r\n      <span class=\"h5\">Chat</span>\r\n    </div>\r\n    <div class=\"row-row light\">\r\n      <div class=\"row-body scrollable hover\">\r\n        <div class=\"row-inner\">\r\n          <div class=\"p-a-md\">\r\n            <div class=\"m-b\">\r\n              <a href=\"#\" class=\"pull-left w-40 m-r-sm\"><img src=\"assets/images/a2.jpg\" alt=\"...\" class=\"w-full img-circle\"></a>\r\n              <div class=\"clear\">\r\n                <div class=\"p-a p-y-sm dark-white inline r\">\r\n                  Hi John, What's up...\r\n                </div>\r\n                <div class=\"text-muted text-xs m-t-xs\"><i class=\"fa fa-ok text-success\"></i> 2 minutes ago</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"m-b\">\r\n              <a href=\"#\" class=\"pull-right w-40 m-l-sm\"><img src=\"assets/images/a3.jpg\" class=\"w-full img-circle\" alt=\"...\"></a>\r\n              <div class=\"clear text-right\">\r\n                <div class=\"p-a p-y-sm success inline text-left r\">\r\n                  Lorem ipsum dolor soe rooke..\r\n                </div>\r\n                <div class=\"text-muted text-xs m-t-xs\">1 minutes ago</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"m-b\">\r\n              <a href=\"#\" class=\"pull-left w-40 m-r-sm\"><img src=\"assets/images/a2.jpg\" alt=\"...\" class=\"w-full img-circle\"></a>\r\n              <div class=\"clear\">\r\n                <div class=\"p-a p-y-sm dark-white inline r\">\r\n                  Good!\r\n                </div>\r\n                <div class=\"text-muted text-xs m-t-xs\"><i class=\"fa fa-ok text-success\"></i> 5 seconds ago</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"m-b\">\r\n              <a href=\"#\" class=\"pull-right w-40 m-l-sm\"><img src=\"assets/images/a3.jpg\" class=\"w-full img-circle\" alt=\"...\"></a>\r\n              <div class=\"clear text-right\">\r\n                <div class=\"p-a p-y-sm success inline text-left r\">\r\n                  Dlor soe isep..\r\n                </div>\r\n                <div class=\"text-muted text-xs m-t-xs\">Just now</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"p-a b-t\">\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<!-- ############ PAGE END-->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.users = [];
        this.isUserLogin = false;
        this.submitted = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.searchForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.loadAllUsers();
    };
    Object.defineProperty(DashboardComponent.prototype, "f", {
        get: function () { return this.searchForm.controls; },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    DashboardComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    DashboardComponent.prototype.onSearch = function () {
        this.submitted = true;
        alert(1);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html") }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/index.ts":
/*!************************************!*\
  !*** ./src/app/dashboard/index.ts ***!
  \************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });




/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <!-- content -->\r\n<div>\r\n  <div class=\"app-header hidden-lg-up black lt b-b\">\r\n    <div class=\"navbar\" data-pjax>\r\n      <a data-toggle=\"modal\" data-target=\"#aside\" class=\"navbar-item pull-left hidden-lg-up p-r m-a-0\">\r\n        <i class=\"ion-navicon\"></i>\r\n      </a>\r\n      <div class=\"navbar-item pull-left h5\" id=\"pageTitle\">Project</div>\r\n      <!-- nabar right -->\r\n      <ul class=\"nav navbar-nav pull-right\">\r\n        <li class=\"nav-item dropdown pos-stc-xs\">\r\n          <a class=\"nav-link\" data-toggle=\"dropdown\">\r\n            <i class=\"ion-android-search w-24\"></i>\r\n          </a>\r\n          <div class=\"dropdown-menu text-color w-md animated fadeInUp pull-right\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\r\n              <div class=\"form-group l-h m-a-0\">\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n                  <span class=\"input-group-btn\">\r\n                    <button type=\"submit\" class=\"btn white b-a no-shadow\"><i class=\"fa fa-search\"></i></button>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown pos-stc-xs\">\r\n          <a class=\"nav-link clear\" data-toggle=\"dropdown\">\r\n            <i class=\"ion-android-notifications-none w-24\"></i>\r\n            <span class=\"label up p-a-0 danger\"></span>\r\n          </a>\r\n          <!-- dropdown -->\r\n          <div class=\"dropdown-menu pull-right w-xl animated fadeIn no-bg no-border no-shadow\">\r\n            <div class=\"scrollable\" style=\"max-height: 220px\">\r\n              <ul class=\"list-group list-group-gap m-a-0\">\r\n                <li class=\"list-group-item dark-white box-shadow-z0 b\">\r\n                  <span class=\"pull-left m-r\">\r\n                    <img src=\"assets/images/a0.jpg\" alt=\"...\" class=\"w-40 img-circle\">\r\n                  </span>\r\n                  <span class=\"clear block\">\r\n                    Use awesome <a href=\"#\" class=\"text-primary\">animate.css</a><br>\r\n                    <small class=\"text-muted\">10 minutes ago</small>\r\n                  </span>\r\n                </li>\r\n                <li class=\"list-group-item dark-white box-shadow-z0 b\">\r\n                  <span class=\"pull-left m-r\">\r\n                    <img src=\"assets/images/a1.jpg\" alt=\"...\" class=\"w-40 img-circle\">\r\n                  </span>\r\n                  <span class=\"clear block\">\r\n                    <a href=\"#\" class=\"text-primary\">Joe</a> Added you as friend<br>\r\n                    <small class=\"text-muted\">2 hours ago</small>\r\n                  </span>\r\n                </li>\r\n                <li class=\"list-group-item dark-white text-color box-shadow-z0 b\">\r\n                  <span class=\"pull-left m-r\">\r\n                    <img src=\"assets/images/a2.jpg\" alt=\"...\" class=\"w-40 img-circle\">\r\n                  </span>\r\n                  <span class=\"clear block\">\r\n                    <a href=\"#\" class=\"text-primary\">Danie</a> sent you a message<br>\r\n                    <small class=\"text-muted\">1 day ago</small>\r\n                  </span>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <!-- / dropdown -->\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link clear\" data-toggle=\"dropdown\">\r\n            <span class=\"avatar w-32\">\r\n              <img src=\"assets/images/a3.jpg\" class=\"w-full rounded\" alt=\"...\">\r\n            </span>\r\n          </a>\r\n          <div class=\"dropdown-menu w dropdown-menu-scale pull-right\">\r\n            <a class=\"dropdown-item\" href=\"profile.html\">\r\n              <span>Profile</span>\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"setting.html\">\r\n              <span>Settings</span>\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"app.inbox.html\">\r\n              <span>Inbox</span>\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"app.message.html\">\r\n              <span>Message</span>\r\n            </a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"docs.html\">\r\n              Need help?\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"signin.html\">Sign out</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <!-- / navbar right -->\r\n    </div>\r\n  </div>\r\n  <div class=\"app-body\">\r\n\r\n    <!-- ############ PAGE START-->\r\n\r\n    <div class=\"app-body-inner\">\r\n      <div class=\"row-col\">\r\n        <div class=\"col-xs-3 w-xl modal fade aside aside-lg\" id=\"subnav\">\r\n          <div class=\"row-col black b-r bg\">\r\n            <div class=\"b-b\">\r\n              <div class=\"navbar no-radius\">\r\n                <!-- nabar right -->\r\n                <ul class=\"nav navbar-nav pull-right m-l\">\r\n                  <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link\" data-toggle=\"dropdown\">\r\n                      <span class=\"btn btn-xs white rounded dropdown-toggle\">\r\n                        New\r\n                      </span>\r\n                    </a>\r\n                    <div class=\"dropdown-menu text-color pull-right\" role=\"menu\">\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-inbox\"></i>\r\n                        New project\r\n                      </a>\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-check-square-o\"></i>\r\n                        New task\r\n                      </a>\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-file-o\"></i>\r\n                        New note\r\n                      </a>\r\n                      <div class=\"dropdown-divider\"></div>\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-comment-o\"></i>\r\n                        Message\r\n                      </a>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <!-- / navbar right -->\r\n                <!-- link and dropdown -->\r\n                <ul class=\"nav navbar-nav\">\r\n                  <li class=\"nav-item\">\r\n                    <span class=\"navbar-item text-md\">Projects</span>\r\n                  </li>\r\n                </ul>\r\n                <!-- / link and dropdown -->\r\n              </div>\r\n            </div>\r\n            <!-- flex content -->\r\n            <div class=\"row-row\">\r\n              <div class=\"row-body scrollable hover\">\r\n                <div class=\"row-inner\">\r\n                  <!-- left content -->\r\n                  <div class=\"list\" data-ui-list=\"b-r b-2x b-theme\">\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle lt\">\r\n                          <span class=\"fa fa-twitter text-md\"></span>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <div class=\"pull-right dropdown\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\" class=\"text-muted\"><i class=\"fa fa-fw fa-ellipsis-h\"></i></a>\r\n                          <div class=\"dropdown-menu pull-right text-color\" role=\"menu\">\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-tag\"></i>\r\n                              Tag item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                              Edit item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                              Delete item\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-ellipsis-h\"></i>\r\n                              More action\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Twitter connect</a>\r\n                        </div>\r\n                        <small class=\"block text-ellipsis\">\r\n                          <span class=\"text-xs\">\r\n                            50\r\n                          </span> <span class=\"text-muted\">completed</span>\r\n                        </small>\r\n\r\n                        <div class=\"progress-xxs m-y-sm lter progress w-sm\">\r\n                          <div class=\"progress-bar success\" data-toggle=\"tooltip\" title=\"Finished: 44%\" style=\"width: 19%;\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle lt\">\r\n                          <span class=\"fa fa-youtube-play text-md\"></span>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <div class=\"pull-right dropdown\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\" class=\"text-muted\"><i class=\"fa fa-fw fa-ellipsis-h\"></i></a>\r\n                          <div class=\"dropdown-menu pull-right text-color\" role=\"menu\">\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-tag\"></i>\r\n                              Tag item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                              Edit item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                              Delete item\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-ellipsis-h\"></i>\r\n                              More action\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Youtube ads</a>\r\n                        </div>\r\n                        <small class=\"block text-ellipsis\">\r\n                          <span class=\"text-xs\">\r\n                            5\r\n                          </span> <span class=\"text-muted\">open tasks, </span>\r\n                          <span class=\"text-xs\">\r\n                            20\r\n                          </span> <span class=\"text-muted\">completed</span>\r\n                        </small>\r\n\r\n                        <div class=\"progress-xxs m-y-sm lter progress w-sm\">\r\n                          <div class=\"progress-bar success\" data-toggle=\"tooltip\" title=\"Finished: 34%\" style=\"width: 41%;\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle lt\">\r\n                          <span class=\"fa fa-paypal text-md\"></span>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <div class=\"pull-right dropdown\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\" class=\"text-muted\"><i class=\"fa fa-fw fa-ellipsis-h\"></i></a>\r\n                          <div class=\"dropdown-menu pull-right text-color\" role=\"menu\">\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-tag\"></i>\r\n                              Tag item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                              Edit item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                              Delete item\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-ellipsis-h\"></i>\r\n                              More action\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Paypal integration</a>\r\n                        </div>\r\n                        <small class=\"block text-ellipsis\">\r\n                          <span class=\"text-xs\">\r\n                            2\r\n                          </span> <span class=\"text-muted\">open tasks, </span>\r\n                          <span class=\"text-xs\">\r\n                            5\r\n                          </span> <span class=\"text-muted\">completed</span>\r\n                        </small>\r\n\r\n                        <div class=\"progress-xxs m-y-sm lter progress w-sm\">\r\n                          <div class=\"progress-bar success\" data-toggle=\"tooltip\" title=\"Finished: 22%\" style=\"width: 33%;\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle lt\">\r\n                          <span class=\"fa fa-android text-md\"></span>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <div class=\"pull-right dropdown\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\" class=\"text-muted\"><i class=\"fa fa-fw fa-ellipsis-h\"></i></a>\r\n                          <div class=\"dropdown-menu pull-right text-color\" role=\"menu\">\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-tag\"></i>\r\n                              Tag item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                              Edit item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                              Delete item\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-ellipsis-h\"></i>\r\n                              More action\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Android game app</a>\r\n                        </div>\r\n                        <small class=\"block text-ellipsis\">\r\n                          <span class=\"text-xs\">\r\n                            30\r\n                          </span> <span class=\"text-muted\">open tasks, </span>\r\n                          <span class=\"text-xs\">\r\n                            4\r\n                          </span> <span class=\"text-muted\">completed</span>\r\n                        </small>\r\n\r\n                        <div class=\"progress-xxs m-y-sm lter progress w-sm\">\r\n                          <div class=\"progress-bar success\" data-toggle=\"tooltip\" title=\"Finished: 7%\" style=\"width: 19%;\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle lt\">\r\n                          <span class=\"fa fa-apple text-md\"></span>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <div class=\"pull-right dropdown\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\" class=\"text-muted\"><i class=\"fa fa-fw fa-ellipsis-h\"></i></a>\r\n                          <div class=\"dropdown-menu pull-right text-color\" role=\"menu\">\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-tag\"></i>\r\n                              Tag item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                              Edit item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                              Delete item\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-ellipsis-h\"></i>\r\n                              More action\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">IOS application</a>\r\n                        </div>\r\n                        <small class=\"block text-ellipsis\">\r\n                          <span class=\"text-xs\">\r\n                            5\r\n                          </span> <span class=\"text-muted\">completed</span>\r\n                        </small>\r\n\r\n                        <div class=\"progress-xxs m-y-sm lter progress w-sm\">\r\n                          <div class=\"progress-bar success\" data-toggle=\"tooltip\" title=\"Finished: 20%\" style=\"width: 12%;\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle lt\">\r\n                          <span class=\"fa fa-tumblr text-md\"></span>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <div class=\"pull-right dropdown\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\" class=\"text-muted\"><i class=\"fa fa-fw fa-ellipsis-h\"></i></a>\r\n                          <div class=\"dropdown-menu pull-right text-color\" role=\"menu\">\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-tag\"></i>\r\n                              Tag item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                              Edit item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                              Delete item\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-ellipsis-h\"></i>\r\n                              More action\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Tumblr theme</a>\r\n                        </div>\r\n                        <small class=\"block text-ellipsis\">\r\n                          <span class=\"text-xs\">\r\n                            8\r\n                          </span> <span class=\"text-muted\">open tasks, </span>\r\n                          <span class=\"text-xs\">\r\n                            5\r\n                          </span> <span class=\"text-muted\">completed</span>\r\n                        </small>\r\n\r\n                        <div class=\"progress-xxs m-y-sm lter progress w-sm\">\r\n                          <div class=\"progress-bar success\" data-toggle=\"tooltip\" title=\"Finished: 23%\" style=\"width: 41%;\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- / -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / -->\r\n            <!-- footer -->\r\n            <div class=\"p-a b-t clearfix\">\r\n              <div class=\"btn-group pull-right\">\r\n                <a href=\"#\" class=\"btn btn-xs white circle\"><i class=\"fa fa-fw fa-angle-left\"></i></a>\r\n                <a href=\"#\" class=\"btn btn-xs white circle\"><i class=\"fa fa-fw fa-angle-right\"></i></a>\r\n              </div>\r\n              <span class=\"text-sm text-muted\">Total: <strong>4</strong></span>\r\n            </div>\r\n            <!-- / -->\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-4 modal fade aside aside-sm\" id=\"list\">\r\n          <div class=\"row-col b-r light lt\">\r\n            <div class=\"b-b\">\r\n              <div class=\"navbar no-radius\">\r\n                <a data-toggle=\"modal\" data-target=\"#subnav\" data-ui-modal class=\"navbar-item pull-left hidden-xl-up hidden-sm-down\">\r\n                  <span class=\"btn btn-sm btn-icon blue\">\r\n                    <i class=\"fa fa-th\"></i>\r\n                  </span>\r\n                </a>\r\n                <!-- nabar right -->\r\n                <ul class=\"nav navbar-nav pull-right m-l\">\r\n                  <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link text-muted\" href=\"#\" data-toggle=\"dropdown\">\r\n                      <i class=\"fa fa-ellipsis-h\"></i>\r\n                    </a>\r\n                    <div class=\"dropdown-menu pull-right text-color\" role=\"menu\">\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-tag\"></i>\r\n                        Tag item\r\n                      </a>\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-pencil\"></i>\r\n                        Edit item\r\n                      </a>\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                        Delete item\r\n                      </a>\r\n                      <div class=\"dropdown-divider\"></div>\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-ellipsis-h\"></i>\r\n                        More action\r\n                      </a>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <!-- / navbar right -->\r\n                <!-- link and dropdown -->\r\n                <ul class=\"nav navbar-nav\">\r\n                  <li class=\"nav-item\">\r\n                    <span class=\"navbar-item m-r-0 text-md\">Tasks</span>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\">\r\n                      <span class=\"label rounded\">\r\n                        55\r\n                      </span>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n                <!-- / link and dropdown -->\r\n              </div>\r\n            </div>\r\n            <!-- flex content -->\r\n            <div class=\"row-row\">\r\n              <div class=\"row-body scrollable hover\">\r\n                <div class=\"row-inner\">\r\n                  <!-- content -->\r\n                  <div class=\"list\" data-ui-list=\"b-r b-2x b-theme\">\r\n                    <div class=\"list-item row-col\">\r\n                      <div class=\"col-xs\">\r\n                        <label class=\"md-check p-r-xs\">\r\n                          <input type=\"checkbox\">\r\n                          <i></i>\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"list-body col-xs\">\r\n                        <a href=\"#\" class=\"item-title _500\">Wireframes for app landing page</a>\r\n                        <div class=\"text-muted text-xs\">\r\n                          <i class=\"fa fa-clock-o\"></i> 10:30 pm, 24 July\r\n                        </div>\r\n                        <div class=\"dropdown m-t-xs\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\">\r\n                            <span class=\"label warn rounded dropdown-toggle\">In progress</span>\r\n                          </a>\r\n                          <div class=\"dropdown-menu\">\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-accent\"></i>Active\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-warn\"></i>In progress\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-success\"></i>Completed\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-muted\"></i>Archived\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item row-col\">\r\n                      <div class=\"col-xs\">\r\n                        <label class=\"md-check p-r-xs\">\r\n                          <input type=\"checkbox\">\r\n                          <i></i>\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"list-body col-xs\">\r\n                        <a href=\"#\" class=\"item-title _500\">Backend development</a>\r\n                        <div class=\"text-muted text-xs\">\r\n                          <i class=\"fa fa-clock-o\"></i> 10:30 pm, 24 July\r\n                        </div>\r\n                        <div class=\"dropdown m-t-xs\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\">\r\n                            <span class=\"label accent rounded dropdown-toggle\">Active</span>\r\n                          </a>\r\n                          <div class=\"dropdown-menu\">\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-accent\"></i>Active\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-warn\"></i>In progress\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-success\"></i>Completed\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-muted\"></i>Archived\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item row-col\">\r\n                      <div class=\"col-xs\">\r\n                        <label class=\"md-check p-r-xs\">\r\n                          <input type=\"checkbox\">\r\n                          <i></i>\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"list-body col-xs\">\r\n                        <a href=\"#\" class=\"item-title _500\">Iconography and illustration style sheet</a>\r\n                        <div class=\"text-muted text-xs\">\r\n                          <i class=\"fa fa-clock-o\"></i> 11:30 pm, 20 July\r\n                        </div>\r\n                        <div class=\"dropdown m-t-xs\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\">\r\n                            <span class=\"label success rounded dropdown-toggle\">Completed</span>\r\n                          </a>\r\n                          <div class=\"dropdown-menu\">\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-accent\"></i>Active\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-warn\"></i>In progress\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-success\"></i>Completed\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-muted\"></i>Archived\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item row-col\">\r\n                      <div class=\"col-xs\">\r\n                        <label class=\"md-check p-r-xs\">\r\n                          <input type=\"checkbox\">\r\n                          <i></i>\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"list-body col-xs\">\r\n                        <a href=\"#\" class=\"item-title _500\">Design requirements documentation</a>\r\n                        <div class=\"text-muted text-xs\">\r\n                          <i class=\"fa fa-clock-o\"></i> 4:40 pm, 18 July\r\n                        </div>\r\n                        <div class=\"dropdown m-t-xs\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\">\r\n                            <span class=\"label success rounded dropdown-toggle\">Completed</span>\r\n                          </a>\r\n                          <div class=\"dropdown-menu\">\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-accent\"></i>Active\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-warn\"></i>In progress\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-success\"></i>Completed\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-muted\"></i>Archived\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item row-col\">\r\n                      <div class=\"col-xs\">\r\n                        <label class=\"md-check p-r-xs\">\r\n                          <input type=\"checkbox\">\r\n                          <i></i>\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"list-body col-xs\">\r\n                        <a href=\"#\" class=\"item-title _500\">Project teammates video meeting</a>\r\n                        <div class=\"text-muted text-xs\">\r\n                          <i class=\"fa fa-clock-o\"></i> 12:30 pm, 5 July\r\n                        </div>\r\n                        <div class=\"dropdown m-t-xs\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\">\r\n                            <span class=\"label rounded dropdown-toggle\">Archived</span>\r\n                          </a>\r\n                          <div class=\"dropdown-menu\">\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-accent\"></i>Active\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-warn\"></i>In progress\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-success\"></i>Completed\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-muted\"></i>Archived\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item row-col\">\r\n                      <div class=\"col-xs\">\r\n                        <label class=\"md-check p-r-xs\">\r\n                          <input type=\"checkbox\">\r\n                          <i></i>\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"list-body col-xs\">\r\n                        <a href=\"#\" class=\"item-title _500\">Kick-off meeting</a>\r\n                        <div class=\"text-muted text-xs\">\r\n                          <i class=\"fa fa-clock-o\"></i> 9:30 pm, 5 July\r\n                        </div>\r\n                        <div class=\"dropdown m-t-xs\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\">\r\n                            <span class=\"label rounded dropdown-toggle\">Archived</span>\r\n                          </a>\r\n                          <div class=\"dropdown-menu\">\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-accent\"></i>Active\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-warn\"></i>In progress\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-success\"></i>Completed\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-muted\"></i>Archived\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- / -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / -->\r\n            <!-- footer -->\r\n            <div class=\"p-a b-t clearfix\">\r\n              <div class=\"btn-group pull-right\">\r\n                <a href=\"#\" class=\"btn btn-xs white circle\"><i class=\"fa fa-fw fa-angle-left\"></i></a>\r\n                <a href=\"#\" class=\"btn btn-xs white circle\"><i class=\"fa fa-fw fa-angle-right\"></i></a>\r\n              </div>\r\n              <span class=\"text-sm text-muted\">Completed: <strong>10</strong>, In Progress: <strong>5</strong></span>\r\n            </div>\r\n            <!-- / -->\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-5\" id=\"detail\">\r\n          <div class=\"row-col white b-r\">\r\n            <div class=\"b-b\">\r\n              <div class=\"navbar no-radius\">\r\n\r\n                <!-- nabar right -->\r\n                <ul class=\"nav navbar-nav pull-right m-l\">\r\n                  <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link\">\r\n                      <span class=\"label warn rounded\">\r\n                        24\r\n                      </span>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n                <!-- / navbar right -->\r\n\r\n                <a data-toggle=\"modal\" data-target=\"#subnav\" data-ui-modal class=\"navbar-item pull-left hidden-md-up\">\r\n                  <span class=\"btn btn-sm btn-icon blue\">\r\n                    <i class=\"fa fa-th\"></i>\r\n                  </span>\r\n                </a>\r\n                <a data-toggle=\"modal\" data-target=\"#list\" data-ui-modal class=\"navbar-item pull-left hidden-md-up\">\r\n                  <span class=\"btn btn-sm btn-icon btn-default\">\r\n                    <i class=\"fa fa-list\"></i>\r\n                  </span>\r\n                </a>\r\n                <span class=\"navbar-item text-md text-ellipsis\">Activities</span>\r\n              </div>\r\n            </div>\r\n            <!-- flex content -->\r\n            <div class=\"row-row\">\r\n              <div class=\"row-body scrollable hover\">\r\n                <div class=\"row-inner\">\r\n                  <!-- content -->\r\n                  <div class=\"p-a\">\r\n                    <div class=\"streamline streamline-theme m-b\">\r\n                      <div class=\"sl-item b-primary\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">Just now</div>\r\n                          <p>Finished task <a href=\"#\" class=\"text-info\">#features 4</a>.</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sl-item b-success\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">11:30</div>\r\n                          <p><a href=\"#\">@Jessi</a> uploaded a file <a href=\"#\" class=\"text-info\">documentation.pdf</a></p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sl-item b-info\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">10:30</div>\r\n                          <p>Call to customer <a href=\"#\" class=\"text-info\">Jacob</a> and discuss the detail.</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sl-item b-warn\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">3 days ago</div>\r\n                          <p><a href=\"#\" class=\"text-info\">Jessi</a> commented your post.</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sl-item b-warning\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">Thu, 10 Mar</div>\r\n                          <p><a href=\"#\" class=\"text-info\">Jessi</a> report a issue #2122.</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sl-item\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">Sat, 5 Mar</div>\r\n                          <p>Prepare for presentation</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sl-item\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">Sun, 11 Feb</div>\r\n                          <p><a href=\"#\" class=\"text-info\">Jessi</a> assign you a task <a href=\"#\" class=\"text-info\">Mockup Design</a>.</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sl-item\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">Thu, 17 Jan</div>\r\n                          <p>Task created</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- / -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- footer -->\r\n            <div class=\"p-a p-y-sm b-t\">\r\n\r\n            </div>\r\n            <!--  -->\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs w-80\" id=\"sidenav\">\r\n          <div class=\"row-col bg\">\r\n            <!-- flex content -->\r\n            <div class=\"row-row\">\r\n              <div class=\"row-body scrollable hover\">\r\n                <div class=\"row-inner\">\r\n                  <!-- content -->\r\n                  <div class=\"p-y text-center\">\r\n                    <div>\r\n                      <a href=\"#\" class=\"inline\">\r\n                        <span class=\"circle w-40 avatar success\">\r\n                          M\r\n                        </span>\r\n                      </a>\r\n                    </div>\r\n                    <div>\r\n                      <a href=\"#\" class=\"inline\">\r\n                        <span class=\"circle w-40 avatar info\">\r\n                          RD\r\n                        </span>\r\n                      </a>\r\n                    </div>\r\n                    <div>\r\n                      <a href=\"#\" class=\"inline\">\r\n                        <span class=\"circle w-40 avatar\">\r\n                          <img src=\"assets/images/a2.jpg\" alt=\".\">\r\n                        </span>\r\n                      </a>\r\n                    </div>\r\n                    <div>\r\n                      <a href=\"#\" class=\"inline\">\r\n                        <span class=\"circle w-40 avatar\">\r\n                          <img src=\"assets/images/a3.jpg\" alt=\".\">\r\n                        </span>\r\n                      </a>\r\n                    </div>\r\n                    <div>\r\n                      <a href=\"#\" class=\"inline\">\r\n                        <span class=\"circle w-40 avatar grey\">\r\n                          S\r\n                        </span>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / -->\r\n            <!-- footer -->\r\n            <div class=\"p-y text-center\">\r\n              <a href=\"#\" class=\"md-btn md-mini md-fab primary\"><i class=\"fa fa-plus\"></i></a>\r\n            </div>\r\n            <!-- / -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ############ PAGE END-->\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.users = [];
        this.isUserLogin = false;
        this.submitted = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.searchForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.loadAllUsers();
    };
    Object.defineProperty(HomeComponent.prototype, "f", {
        get: function () { return this.searchForm.controls; },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    HomeComponent.prototype.onSearch = function () {
        this.submitted = true;
        alert(1);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html") }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/inbox/inbox.component.html":
/*!********************************************!*\
  !*** ./src/app/inbox/inbox.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body\">\r\n\r\n<!-- ############ PAGE START-->\r\n\r\n<div class=\"app-body-inner\">\r\n<div class=\"row-col\">\r\n<div class=\"col-xs-3 w modal fade aside aside-md\" id=\"subnav\">\r\n  <div class=\"row-col black bg\">\r\n      <!-- header -->\r\n      <div class=\"box-shadow-z1\">\r\n          <div class=\"navbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n              <li class=\"nav-item\">\r\n                  <span class=\"navbar-item text-md\">Inbox</span>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav pull-right\">\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" data-toggle=\"modal\" data-target=\"#modal-new\">\r\n                    <span class=\"btn btn-sm btn-icon rounded white\"><i class=\"fa fa-plus\"></i></span>\r\n                  </a>\r\n              </li>\r\n            </ul>\r\n        </div>\r\n      </div>\r\n        <!-- / -->\r\n        <!-- flex content -->\r\n        <div class=\"row-row\">\r\n          <div class=\"row-body scrollable hover\">\r\n            <div class=\"row-inner\">\r\n              <!-- content -->\r\n              <div class=\"navside m-x-xs m-t\">\r\n                <nav class=\"nav-stacked nav-stacked-rounded nav-active-info\">\r\n                  <ul class=\"nav\" data-ui-nav>\r\n                  <li class=\"active\">\r\n                    <a href=\"#inbox\">\r\n                        <span class=\"nav-label\">\r\n                                <b class=\"label primary rounded\">12</b>\r\n                              </span>\r\n                        <span class=\"nav-icon\">\r\n                          <i class=\"ion-ios-filing\"></i>\r\n                        </span>\r\n                        <span class=\"nav-text\">Inbox</span>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#sent\">\r\n                        <span class=\"nav-label\">\r\n                                <b class=\"label info rounded\">4</b>\r\n                              </span>\r\n                        <span class=\"nav-icon\">\r\n                          <i class=\"ion-paper-airplane\"></i>\r\n                        </span>\r\n                        <span class=\"nav-text\">Sent</span>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#draft\">\r\n                        <span class=\"nav-label\">\r\n                                <b class=\"label rounded\">30</b>\r\n                              </span>\r\n                        <span class=\"nav-icon\">\r\n                          <i class=\"ion-clipboard\"></i>\r\n                        </span>\r\n                        <span class=\"nav-text\">Draft</span>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#trash\">\r\n                        <span class=\"nav-label\">\r\n                                <b class=\"label rounded\">6</b>\r\n                              </span>\r\n                        <span class=\"nav-icon\">\r\n                          <i class=\"ion-trash-b\"></i>\r\n                        </span>\r\n                        <span class=\"nav-text\">Trash</span>\r\n                    </a>\r\n                  </li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n          <div class=\"p-a-md\">\r\n                <div class=\"m-b text-muted text-xs\">Labels</div>\r\n                <div class=\"nav-active-white\">\r\n                  <ul class=\"nav\">\r\n                      <li class=\"nav-item m-b-xs\">\r\n                          <a class=\"nav-link text-muted block\">\r\n                            <span class=\"pull-right text-sm\">23</span>\r\n                            <span>Html5</span>\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item m-b-xs\">\r\n                          <a class=\"nav-link text-muted block\">\r\n                            <span class=\"pull-right text-sm\">2</span>\r\n                            Bootstrap\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item m-b-xs\">\r\n                          <a class=\"nav-link text-muted block\">\r\n                            <span class=\"pull-right text-sm\">4</span>\r\n                            Client\r\n                          </a>\r\n                      </li>\r\n                      <li class=\"nav-item m-b-xs\">\r\n                          <a class=\"nav-link text-muted block\">\r\n                            <span class=\"pull-right text-sm\">1</span>\r\n                            Work\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"p-y\">\r\n                    <!-- <form name=\"label\">\r\n                      <div class=\"input-group\">\r\n                          <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"New label\" required>\r\n                          <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default btn-sm no-shadow\" type=\"button\"><i class=\"fa fa-plus\"></i></button>\r\n                          </span>\r\n                      </div>\r\n                    </form> -->\r\n                </div>\r\n              </div>\r\n              <!-- / -->\r\n          </div>\r\n          </div>\r\n      </div>\r\n        <!-- / -->\r\n      <!-- footer -->\r\n      <div class=\"p-x-md p-y\">\r\n          <div class=\"text-muted text-sm\">\r\n            <span class=\"pull-right text-primary\">35%</span>\r\n            <span>Status: </span>\r\n          </div>\r\n      </div>\r\n      <!-- / -->\r\n    </div>\r\n</div>\r\n<div class=\"col-xs-3 w-xl modal fade aside aside-sm black\" id=\"list\">\r\n  <div class=\"row-col lt\">\r\n    <!-- header -->\r\n    <div class=\"p-a\">\r\n          <!-- <form>\r\n              <div class=\"input-group\">\r\n                  <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Search\" required=\"\">\r\n                  <span class=\"input-group-btn\">\r\n                    <button class=\"btn btn-default btn-sm no-shadow\" type=\"button\"><i class=\"fa fa-search\"></i></button>\r\n                  </span>\r\n              </div>\r\n          </form> -->\r\n      </div>\r\n      <!-- / -->\r\n        <!-- flex content -->\r\n        <div class=\"row-row\">\r\n          <div class=\"row-body scrollable hover\">\r\n            <div class=\"row-inner\">\r\n              <!-- left content -->\r\n              <div class=\"list inset\" data-ui-list=\"info\">\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle green\">\r\n                            <img src=\"assets/images/a2.jpg\" alt=\".\">\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                          <span class=\"pull-right text-xs text-muted\">09.04</span>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Jeremy Scott</a>\r\n                        </div>\r\n                        <small class=\"block text-muted text-ellipsis\">\r\n                            Submit a support ticket\r\n                        </small>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle pink\">\r\n                            <img src=\"assets/images/a3.jpg\" alt=\".\">\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                          <span class=\"pull-right text-xs text-muted\">04.05</span>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Judith Garcia</a>\r\n                        </div>\r\n                        <small class=\"block text-muted text-ellipsis\">\r\n                            Eddel upload a media\r\n                        </small>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle blue-grey\">\r\n                            <img src=\"assets/images/a4.jpg\" alt=\".\">\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                          <span class=\"pull-right text-xs text-muted\">09.05</span>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Radionomy</a>\r\n                        </div>\r\n                        <small class=\"block text-muted text-ellipsis\">\r\n                            Competitive gaming ladders\r\n                        </small>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle blue\">\r\n                            <img src=\"assets/images/a9.jpg\" alt=\".\">\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                          <span class=\"pull-right text-xs text-muted\">02.04</span>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Postiljonen</a>\r\n                        </div>\r\n                        <small class=\"block text-muted text-ellipsis\">\r\n                            Looking for some client-work\r\n                        </small>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle cyan\">\r\n                            <img src=\"assets/images/a8.jpg\" alt=\".\">\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                          <span class=\"pull-right text-xs text-muted\">02.04</span>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Pablo Nouvelle</a>\r\n                        </div>\r\n                        <small class=\"block text-muted text-ellipsis\">\r\n                            It&#x27;s been a Javascript kind of day\r\n                        </small>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle brown\">\r\n                            <img src=\"assets/images/a5.jpg\" alt=\".\">\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                          <span class=\"pull-right text-xs text-muted\">09.04</span>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Rita Ora</a>\r\n                        </div>\r\n                        <small class=\"block text-muted text-ellipsis\">\r\n                            Homepage mockup design\r\n                        </small>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle indigo\">\r\n                            <img src=\"assets/images/a6.jpg\" alt=\".\">\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                          <span class=\"pull-right text-xs text-muted\">05.05</span>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Fifth Harmony</a>\r\n                        </div>\r\n                        <small class=\"block text-muted text-ellipsis\">\r\n                            Send you a invitation to SWO\r\n                        </small>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle grey\">\r\n                            <img src=\"assets/images/a0.jpg\" alt=\".\">\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                          <span class=\"pull-right text-xs text-muted\">30.05</span>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Summerella</a>\r\n                        </div>\r\n                        <small class=\"block text-muted text-ellipsis\">\r\n                            Send you a message\r\n                        </small>\r\n                      </div>\r\n                    </div>\r\n              </div>\r\n              <!-- / -->\r\n            </div>\r\n        </div>\r\n        </div>\r\n        <!-- / -->\r\n      <!-- footer -->\r\n      <div class=\"p-x-md p-y\">\r\n          <div class=\"btn-group pull-right\">\r\n              <a href=\"#\" class=\"btn btn-xs white\"><i class=\"fa fa-fw fa-angle-left\"></i></a>\r\n              <a href=\"#\" class=\"btn btn-xs white\"><i class=\"fa fa-fw fa-angle-right\"></i></a>\r\n          </div>\r\n          <span class=\"text-sm text-muted\">Total: 6</span>\r\n      </div>\r\n      <!-- / -->\r\n    </div>\r\n</div>\r\n<div class=\"col-xs-6 bg\" id=\"detail\">\r\n  <div class=\"row-col\">\r\n    <!-- header -->\r\n    <div class=\"white b-b bg\">\r\n      <div class=\"navbar\">\r\n          <!-- nabar right -->\r\n          <ul class=\"nav navbar-nav pull-right m-l\">\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link text-muted\" href=\"#\" data-toggle=\"dropdown\">\r\n                  <i class=\"fa fa-ellipsis-h\"></i>\r\n                </a>\r\n                <div class=\"dropdown-menu pull-right text-color\" role=\"menu\">\r\n                  <a class=\"dropdown-item\">\r\n                    <i class=\"fa fa-tag\"></i>\r\n                    Tag item\r\n                  </a>\r\n                  <a class=\"dropdown-item\">\r\n                    <i class=\"fa fa-pencil\"></i>\r\n                    Edit item\r\n                  </a>\r\n                  <a class=\"dropdown-item\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                    Delete item\r\n                  </a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item\">\r\n                    <i class=\"fa fa-ellipsis-h\"></i>\r\n                    More action\r\n                  </a>\r\n                </div>\r\n            </li>\r\n          </ul>\r\n          <!-- / navbar right -->\r\n\r\n        <a data-toggle=\"modal\" data-target=\"#subnav\" data-ui-modal class=\"navbar-item pull-left hidden-lg-up\">\r\n          <span class=\"btn btn-sm btn-icon blue\">\r\n                <i class=\"fa fa-th\"></i>\r\n              </span>\r\n          </a>\r\n          <a data-toggle=\"modal\" data-target=\"#list\" data-ui-modal class=\"navbar-item pull-left hidden-md-up\">\r\n            <span class=\"btn btn-sm btn-icon white\">\r\n                <i class=\"fa fa-list\"></i>\r\n              </span>\r\n          </a>\r\n          <!-- link and dropdown -->\r\n          <ul class=\"nav navbar-nav\">\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link text-muted\" data-toggle=\"modal\" data-target=\"#modal-new\" title=\"Reply\">\r\n                    <span class=\"nav-text\"><i class=\"fa fa-fw fa-mail-reply-all\"></i></span>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item b-l p-l\">\r\n                <a class=\"nav-link text-muted no-border\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Archive\">\r\n                    <span class=\"nav-text\"><i class=\"fa fa-fw fa-hdd-o\"></i></span>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item hidden-sm-down\">\r\n                <a class=\"nav-link text-muted\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Report\">\r\n                    <span class=\"nav-text\"><i class=\"fa fa-fw fa-question\"></i></span>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link text-muted\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete\">\r\n                    <span class=\"nav-text\"><i class=\"fa fa-fw fa-trash-o\"></i></span>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item pos-rlt b-l p-l\">\r\n                  <a class=\"nav-link text-muted dropdown-toggle no-border\" data-toggle=\"dropdown\" title=\"Label\">\r\n                    <span class=\"nav-text\"><i class=\"fa fa-fw fa-tag\"></i></span>\r\n                  </a>\r\n                <div class=\"dropdown-menu pull-right-xs text-color\" role=\"menu\">\r\n                    <a class=\"dropdown-item\">\r\n                      <i class=\"fa fa-dot-circle-o text-warn\"></i>\r\n                      Bootstrap\r\n                    </a>\r\n                    <a class=\"dropdown-item\">\r\n                      <i class=\"fa fa-dot-circle-o text-info\"></i>\r\n                      Html5\r\n                     </a>\r\n                    <a class=\"dropdown-item\">\r\n                      <i class=\"fa fa-dot-circle-o text-warning\"></i>\r\n                      Client\r\n                    </a>\r\n                    <a class=\"dropdown-item\">\r\n                      <i class=\"fa fa-dot-circle-o text-success\"></i>\r\n                      Work\r\n                    </a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\">\r\n                      <i class=\"fa fa-plus\"></i>\r\n                      Create new label\r\n                    </a>\r\n                </div>\r\n              </li>\r\n          </ul>\r\n          <!-- / link and dropdown -->\r\n      </div>\r\n    </div>\r\n    <!-- / -->\r\n    <!-- flex content -->\r\n    <div class=\"row-row\">\r\n      <div class=\"row-body\">\r\n        <div class=\"row-inner\">\r\n          <!-- mail content -->\r\n          <div class=\"padding\">\r\n            <h2 class=\"m-b _600\">Bootstrap 4 CSS Framework</h2>\r\n            <div class=\"p-y b-t\">\r\n                <img class=\"img-circle w-32 m-r-sm\" src=\"assets/images/a0.jpg\" alt=\".\">\r\n                from\r\n                <a href=\"#\">james@gmail.com</a>\r\n                <span class=\"text-xs text-muted\">on 12:20 7/23</span>\r\n            </div>\r\n            <div>\r\n                  <p>Hey David,</p>\r\n                  <p class=\"text-lt\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat.</p>\r\n                  <blockquote>\r\n                    <em>Phasellus at ultricies neque, quis malesuada augue. Donec eleifend condimentum nisl eu consectetur. Integer eleifend, nisl venenatis consequat iaculis, lectus arcu malesuada sem, dapibus porta quam lacus eu neque.</em>\r\n                  </blockquote>\r\n                  <p>Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend condimentum nisl eu consectetur. Integer eleifend, nisl venenatis consequat iaculis, lectus arcu malesuada sem, dapibus porta quam lacus eu neque.</p>\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non malesuada est, quis congue nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\r\n                  <p>Consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend</p>\r\n                  <p>&nbsp;</p>\r\n                  <p>Best Regards</p>\r\n              </div>\r\n          </div>\r\n          <div class=\"padding b-t\">\r\n            <h6 class=\"m-b\">Attached files:</h6>\r\n            <div>\r\n              <a href=\"#\" class=\"block m-b-xs\">\r\n                <span class=\"label\">PSD</span>\r\n                DesignMockup.psd\r\n                <small class=\"m-l text-muted\">34kb</small>\r\n              </a>\r\n              <a href=\"#\" class=\"block m-b-xs\">\r\n                <span class=\"label success\">PDF</span>\r\n                Design-Documentation.pdf\r\n                <small class=\"m-l text-muted\">432kb</small>\r\n              </a>\r\n              <a href=\"#\" class=\"block m-b-xs\">\r\n                <span class=\"label\">MP4</span>\r\n                Design-video-show.mp4\r\n                <small class=\"m-l text-muted\">3mb</small>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <!-- / -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- / -->\r\n    </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"modal-new\">\r\n<div class=\"modal-right col-xs-10 col-sm-9 col-md-8 col-lg-6 white dk b-l p-a-md\">\r\n<!-- <form name=\"newMail\" class=\"form-horizontal\">\r\n  <div class=\"form-group row\">\r\n      <label class=\"col-lg-2 form-control-label\">To:</label>\r\n      <div class=\"col-lg-8\">\r\n        <input type=\"text\" class=\"form-control\">\r\n      </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n      <label class=\"col-lg-2 form-control-label\">Subject:</label>\r\n      <div class=\"col-lg-8\">\r\n          <input type=\"text\" class=\"form-control\">\r\n      </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n      <label class=\"col-lg-2 form-control-label\">Content</label>\r\n      <div class=\"col-lg-10\">\r\n          <div class=\"b-a\">\r\n            <div data-ui-jp=\"summernote\" data-ui-options=\"{height: 150,\r\n              toolbar: [\r\n                ['style', ['bold', 'italic', 'underline', 'clear']],\r\n                ['color', ['color']],\r\n                ['para', ['ul', 'ol', 'paragraph']],\r\n                ['height', ['height']]\r\n              ]}\">\r\n        </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n      <div class=\"col-lg-8 offset-lg-2\">\r\n          <button class=\"btn primary btn-sm p-x-md\">Send</button>\r\n      </div>\r\n  </div>\r\n</form> -->\r\n</div>\r\n</div>\r\n\r\n<!-- ############ PAGE END-->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/inbox/inbox.component.ts":
/*!******************************************!*\
  !*** ./src/app/inbox/inbox.component.ts ***!
  \******************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InboxComponent = /** @class */ (function () {
    function InboxComponent(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.users = [];
        this.isUserLogin = false;
        this.submitted = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    InboxComponent.prototype.ngOnInit = function () {
        this.searchForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.loadAllUsers();
    };
    Object.defineProperty(InboxComponent.prototype, "f", {
        get: function () { return this.searchForm.controls; },
        enumerable: true,
        configurable: true
    });
    InboxComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    InboxComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    InboxComponent.prototype.onSearch = function () {
        this.submitted = true;
        alert(1);
    };
    InboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./inbox.component.html */ "./src/app/inbox/inbox.component.html") }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/inbox/index.ts":
/*!********************************!*\
  !*** ./src/app/inbox/index.ts ***!
  \********************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.component */ "./src/app/inbox/inbox.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return _inbox_component__WEBPACK_IMPORTED_MODULE_0__["InboxComponent"]; });




/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"padding\">\r\n  <div class=\"navbar\">\r\n    <div class=\"pull-center\">\r\n      <!-- brand -->\r\n      <a href=\"index.html\" class=\"navbar-brand\">\r\n        <div data-ui-include=\"'images/logo.svg'\"></div>\r\n        <img src=\"images/logo.png\" alt=\".\" class=\"hide\">\r\n        <span class=\"hidden-folded inline\">aside</span>\r\n      </a>\r\n      <!-- / brand -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"b-t\">\r\n  <div class=\"center-block w-xxl w-auto-xs p-y-md text-center\">\r\n    <div class=\"p-a-md\">\r\n      <div>\r\n        <a href=\"#\" class=\"btn btn-block indigo text-white m-b-sm\">\r\n          <i class=\"fa fa-facebook pull-left\"></i>\r\n          Sign in with Facebook\r\n        </a>\r\n        <a href=\"#\" class=\"btn btn-block red text-white\">\r\n          <i class=\"fa fa-google-plus pull-left\"></i>\r\n          Sign in with Google+\r\n        </a>\r\n      </div>\r\n      <div class=\"m-y text-sm\">\r\n        OR\r\n      </div>\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n          <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"m-b-md\">\r\n          <label class=\"md-check\">\r\n            <input type=\"checkbox\"><i class=\"primary\"></i> Keep me signed in\r\n          </label>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-lg black p-x-lg\">Sign in</button>\r\n      </form>\r\n      <div class=\"m-y\">\r\n        <a href=\"forgot-password.html\" class=\"_600\">Forgot password?</a>\r\n      </div>\r\n      <div>\r\n        Do not have an account?\r\n        <a [routerLink]=\"['/register']\" class=\"text-primary _600\">Sign up</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.isUserLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        console.log(this.f);
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message/index.ts":
/*!**********************************!*\
  !*** ./src/app/message/index.ts ***!
  \**********************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.component */ "./src/app/message/message.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return _message_component__WEBPACK_IMPORTED_MODULE_0__["MessageComponent"]; });




/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body\">\r\n\r\n<!-- ############ PAGE START-->\r\n\r\n<div class=\"app-body-inner\">\r\n<div class=\"row-col\">\r\n<div class=\"col-xs-3 w-lg modal fade aside aside-sm\" id=\"list\">\r\n  <div class=\"row-col success\">\r\n    <!-- header -->\r\n    <div>\r\n      <div class=\"p-a\">\r\n            <!-- <form>\r\n                <div class=\"input-group input-group-sm p-x-sm dker rounded\">\r\n                    <input type=\"text\" class=\"form-control no-bg no-border text-white\" placeholder=\"Search\" required=\"\">\r\n                    <span class=\"input-group-btn\">\r\n                      <button class=\"btn no-bg no-border no-shadow\" type=\"button\"><i class=\"fa fa-search\"></i></button>\r\n                    </span>\r\n                </div>\r\n            </form> -->\r\n        </div>\r\n        <div class=\"nav text-center p-b\">\r\n          <a href=\"#\" class=\"nav-link m-x\" data-toggle=\"tooltip\" title=\"Add Contact\"><i class=\"ion-person-add\"></i></a>\r\n          <a href=\"#\" class=\"nav-link m-x\" data-toggle=\"tooltip\" title=\"Contacts\"><i class=\"ion-person-stalker\"></i></a>\r\n          <a href=\"#\" class=\"nav-link m-x\" data-toggle=\"tooltip\" title=\"Chat\"><i class=\"ion-chatbubble\"></i></a>\r\n          <a href=\"#\" class=\"nav-link m-x\" data-toggle=\"tooltip\" title=\"Location\"><i class=\"ion-location\"></i></a>\r\n          <a href=\"#\" class=\"nav-link m-x\" data-toggle=\"tooltip\" title=\"Plugins\"><i class=\"ion-grid\"></i></a>\r\n        </div>\r\n      </div>\r\n      <!-- / -->\r\n        <!-- flex content -->\r\n        <div class=\"row-row\">\r\n          <div class=\"row-body scrollable hover\">\r\n            <div class=\"row-inner\">\r\n              <!-- left content -->\r\n              <div class=\"list inset\" data-ui-list=\"active\">\r\n                <div class=\"p-x text-dark m-t m-b-sm text-sm\">Messages</div>\r\n\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle indigo\">\r\n                          <i class=\"on b-white avatar-right\"></i>\r\n                            <img src=\"assets/images/a6.jpg\" alt=\".\">\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                            <span class=\"pull-right text-xs label rounded lt\">\r\n                              8\r\n                            </span>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Fifth Harmony</a>\r\n                        </div>\r\n                        <small class=\"block text-muted text-ellipsis\">\r\n                            Send you a invitation to SWO\r\n                        </small>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle light-blue\">\r\n                          <i class=\"off b-white avatar-right\"></i>\r\n                            <img src=\"assets/images/a1.jpg\" alt=\".\">\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                            <span class=\"pull-right text-xs label rounded lt\">\r\n                              30\r\n                            </span>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Kygo</a>\r\n                        </div>\r\n                        <small class=\"block text-muted text-ellipsis\">\r\n                            What&#x27;s the project progress now\r\n                        </small>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle teal\">\r\n                          <i class=\"on b-white avatar-right\"></i>\r\n                            <img src=\"assets/images/a7.jpg\" alt=\".\">\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">RYD</a>\r\n                        </div>\r\n                        <small class=\"block text-muted text-ellipsis\">\r\n                            Added you to repo\r\n                        </small>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle blue\">\r\n                          <i class=\"on b-white avatar-right\"></i>\r\n                            <img src=\"assets/images/a9.jpg\" alt=\".\">\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Postiljonen</a>\r\n                        </div>\r\n                        <small class=\"block text-muted text-ellipsis\">\r\n                            Looking for some client-work\r\n                        </small>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle grey\">\r\n                          <i class=\"on b-white avatar-right\"></i>\r\n                            <img src=\"assets/images/a0.jpg\" alt=\".\">\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Summerella</a>\r\n                        </div>\r\n                        <small class=\"block text-muted text-ellipsis\">\r\n                            Send you a message\r\n                        </small>\r\n                      </div>\r\n                    </div>\r\n\r\n                <div class=\"p-x text-dark m-t m-b-sm text-sm\">Groups</div>\r\n                <div class=\"list-item\">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle\">\r\n                            <span class=\"w-40 avatar lter\">WG</span>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <a href=\"#\" class=\"_500\">Work group</a>\r\n                        <small class=\"block text-muted text-ellipsis\">\r\n                            32 persons\r\n                        </small>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <!-- / -->\r\n            </div>\r\n        </div>\r\n        </div>\r\n        <!-- / -->\r\n      <!-- footer -->\r\n      <div class=\"p-x-md p-y\">\r\n          <a class=\"pull-right btn btn-xs rounded dk\">\r\n              <i class=\"fa fa-plus\"></i>\r\n          </a>\r\n          <span class=\"text-sm text-muted\">Messages: 90+</span>\r\n      </div>\r\n      <!-- / -->\r\n    </div>\r\n</div>\r\n<div class=\"col-xs-6\" id=\"detail\">\r\n  <div class=\"row-col dark-light\">\r\n    <!-- header -->\r\n    <div class=\"dark-white b-b\">\r\n      <div class=\"navbar\">\r\n\r\n          <!-- nabar right -->\r\n          <ul class=\"nav navbar-nav pull-right m-l\">\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Phone Call\">\r\n                    <span class=\"btn btn-sm btn-icon rounded success\">\r\n                    <i class=\"fa fa-phone\"></i>\r\n                  </span>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Face Call\">\r\n                    <span class=\"btn btn-sm btn-icon rounded success\">\r\n                    <i class=\"fa fa-video-camera\"></i>\r\n                  </span>\r\n                </a>\r\n              </li>\r\n          </ul>\r\n          <!-- / navbar right -->\r\n\r\n        <a data-toggle=\"modal\" data-target=\"#profile\" data-ui-modal class=\"m-r-0 m-l navbar-item pull-right hidden-lg-up\">\r\n          <span class=\"btn btn-sm btn-icon rounded success\">\r\n                <i class=\"ion-person\"></i>\r\n              </span>\r\n          </a>\r\n          <a data-toggle=\"modal\" data-target=\"#list\" data-ui-modal class=\"navbar-item pull-left hidden-md-up\">\r\n            <span class=\"btn btn-sm btn-icon success\">\r\n                <i class=\"fa fa-list\"></i>\r\n              </span>\r\n          </a>\r\n\r\n            <span class=\"navbar-item text-md text-ellipsis\">\r\n              Pablo Nouvelle\r\n            </span>\r\n      </div>\r\n    </div>\r\n    <!-- / -->\r\n    <!-- flex content -->\r\n    <div class=\"row-row\">\r\n      <div class=\"row-body\">\r\n        <div class=\"row-inner\">\r\n          <!-- content -->\r\n          <div class=\"p-a-md\">\r\n                  <div class=\"m-b\">\r\n                    <a href=\"#\" class=\"pull-left w-40 m-r-sm\">\r\n                      <img src=\"assets/images/a2.jpg\" alt=\".\" class=\"w-full img-circle\">\r\n                    </a>\r\n                    <div class=\"clear\">\r\n                      <div>\r\n                        <div class=\"p-a p-y-sm success inline rounded\">\r\n                          Hi John, What's up...\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"m-t-xs\">\r\n                        <div class=\"p-a p-y-sm success inline rounded\">\r\n                          hmm...\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"text-muted text-xs m-t-xs\"><i class=\"fa fa-ok text-success\"></i> 2 minutes ago</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"m-b\">\r\n                    <a href=\"#\" class=\"pull-right w-40 m-l-sm\">\r\n                      <img src=\"assets/images/a0.jpg\" class=\"w-full img-circle\" alt=\".\">\r\n                    </a>\r\n                    <div class=\"clear text-right\">\r\n                      <div class=\"p-a p-y-sm dark-white inline rounded text-left\">\r\n                        Lorem ipsum dolor soe rooke..\r\n                      </div>\r\n                      <div class=\"text-muted text-xs m-t-xs\">1 minutes ago</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"m-b\">\r\n                    <a href=\"#\" class=\"pull-left w-40 m-r-sm\">\r\n                      <img src=\"assets/images/a2.jpg\" alt=\".\" class=\"w-full img-circle\">\r\n                    </a>\r\n                    <div class=\"clear\">\r\n                      <div class=\"p-a p-y-sm success inline rounded\">\r\n                        Good!\r\n                      </div>\r\n                      <div class=\"text-muted text-xs m-t-xs\"><i class=\"fa fa-ok text-success\"></i> 5 seconds ago</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"m-b\">\r\n                    <a href=\"#\" class=\"pull-right w-40 m-l-sm\">\r\n                      <img src=\"assets/images/a0.jpg\" class=\"w-full img-circle\" alt=\".\">\r\n                    </a>\r\n                    <div class=\"clear text-right\">\r\n                      <div>\r\n                        <div class=\"p-a p-y-sm dark-white inline rounded text-left\">\r\n                          Dlor soe isep slie gosese..\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"m-t-xs\">\r\n                        <div class=\"p-a p-y-sm dark-white inline rounded text-left\">\r\n                          Loris aspim..\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"text-muted text-xs m-t-xs\">3 seconds ago</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"m-b\">\r\n                    <a href=\"#\" class=\"pull-left w-40 m-r-sm\">\r\n                      <img src=\"assets/images/a2.jpg\" alt=\".\" class=\"w-full img-circle\">\r\n                    </a>\r\n                    <div class=\"clear\">\r\n                      <div>\r\n                        <div class=\"p-a p-y-sm success inline rounded text-left\">\r\n                          Typing...\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"text-muted text-xs m-t-xs\"><i class=\"fa fa-ok text-success\"></i> Just now</div>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n          <!-- / -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- / -->\r\n    <div class=\"p-a b-t dark-white\">\r\n        <!-- <form>\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Say something\">\r\n                <span class=\"input-group-btn\">\r\n                  <button class=\"btn white b-a no-shadow\" type=\"button\">\r\n                    <i class=\"fa fa-send text-success\"></i>\r\n                  </button>\r\n                </span>\r\n            </div>\r\n        </form> -->\r\n    </div>\r\n    </div>\r\n</div>\r\n<div class=\"col-xs-3 w-md modal fade aside aside-md aside-md-right\" id=\"profile\">\r\n  <div class=\"row-col dark-white b-l\">\r\n        <!-- flex content -->\r\n        <div class=\"row-row\">\r\n          <div class=\"row-body scrollable hover\">\r\n            <div class=\"row-inner\">\r\n              <!-- content -->\r\n              <div class=\"p-a-lg text-center\">\r\n                <img src=\"assets/images/a2.jpg\" class=\"w-full circle\" alt=\".\">\r\n                <span class=\"text-md m-t block\">Pablo Nouvelle</span>\r\n                <small class=\"text-muted\">UX/UI Designer</small>\r\n                <div class=\"block clearfix m-t\">\r\n                    <a href=\"#\" class=\"btn btn-icon btn-social rounded btn-sm\">\r\n                      <i class=\"fa fa-facebook\"></i>\r\n                      <i class=\"fa fa-facebook indigo\"></i>\r\n                    </a>\r\n                    <a href=\"#\" class=\"btn btn-icon btn-social rounded btn-sm\">\r\n                      <i class=\"fa fa-twitter\"></i>\r\n                      <i class=\"fa fa-twitter light-blue\"></i>\r\n                    </a>\r\n                    <a href=\"#\" class=\"btn btn-icon btn-social rounded btn-sm\">\r\n                      <i class=\"fa fa-google-plus\"></i>\r\n                      <i class=\"fa fa-google-plus red\"></i>\r\n                    </a>\r\n                    <a href=\"#\" class=\"btn btn-icon btn-social rounded btn-sm\">\r\n                      <i class=\"fa fa-linkedin\"></i>\r\n                      <i class=\"fa fa-linkedin cyan-600\"></i>\r\n                    </a>\r\n                  </div>\r\n              </div>\r\n          <div class=\"p-a-md\">\r\n                <ul class=\"nav\">\r\n                    <li class=\"nav-item m-b-xs\">\r\n                        <a class=\"nav-link text-muted block\">\r\n                          <span class=\"pull-right text-sm\">\r\n                            <i class=\"fa fa-fw fa-map-marker\"></i>\r\n                          </span>\r\n                          <span>London</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item m-b-xs\">\r\n                        <a class=\"nav-link text-muted block\">\r\n                          <span class=\"pull-right text-sm\">\r\n                            <i class=\"fa fa-fw fa-phone\"></i>\r\n                          </span>\r\n                          <span>123-456-789</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item m-b-xs\">\r\n                        <a class=\"nav-link text-muted block\">\r\n                          <span class=\"pull-right text-sm\">\r\n                            <i class=\"fa fa-fw fa-birthday-cake\"></i>\r\n                          </span>\r\n                          <span>July 03</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item m-b-xs\">\r\n                        <a class=\"nav-link text-muted block\">\r\n                          <span class=\"pull-right text-sm\">\r\n                            <i class=\"fa fa-fw fa-envelope\"></i>\r\n                          </span>\r\n                          <span>Nouvelle@gmail.com</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n              </div>\r\n              <!-- / -->\r\n          </div>\r\n          </div>\r\n      </div>\r\n        <!-- / -->\r\n    </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<!-- ############ PAGE END-->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageComponent = /** @class */ (function () {
    function MessageComponent(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.users = [];
        this.isUserLogin = false;
        this.submitted = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.searchForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.loadAllUsers();
    };
    Object.defineProperty(MessageComponent.prototype, "f", {
        get: function () { return this.searchForm.controls; },
        enumerable: true,
        configurable: true
    });
    MessageComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    MessageComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    MessageComponent.prototype.onSearch = function () {
        this.submitted = true;
        alert(1);
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html") }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/project/index.ts":
/*!**********************************!*\
  !*** ./src/app/project/index.ts ***!
  \**********************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.component */ "./src/app/project/project.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return _project_component__WEBPACK_IMPORTED_MODULE_0__["ProjectComponent"]; });




/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <!-- content -->\r\n<div>\r\n  <div class=\"app-header hidden-lg-up black lt b-b\">\r\n    <div class=\"navbar\" data-pjax>\r\n      <a data-toggle=\"modal\" data-target=\"#aside\" class=\"navbar-item pull-left hidden-lg-up p-r m-a-0\">\r\n        <i class=\"ion-navicon\"></i>\r\n      </a>\r\n      <div class=\"navbar-item pull-left h5\" id=\"pageTitle\">Project</div>\r\n      <!-- nabar right -->\r\n      <ul class=\"nav navbar-nav pull-right\">\r\n        <li class=\"nav-item dropdown pos-stc-xs\">\r\n          <a class=\"nav-link\" data-toggle=\"dropdown\">\r\n            <i class=\"ion-android-search w-24\"></i>\r\n          </a>\r\n          <div class=\"dropdown-menu text-color w-md animated fadeInUp pull-right\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\r\n              <div class=\"form-group l-h m-a-0\">\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n                  <span class=\"input-group-btn\">\r\n                    <button type=\"submit\" class=\"btn white b-a no-shadow\"><i class=\"fa fa-search\"></i></button>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown pos-stc-xs\">\r\n          <a class=\"nav-link clear\" data-toggle=\"dropdown\">\r\n            <i class=\"ion-android-notifications-none w-24\"></i>\r\n            <span class=\"label up p-a-0 danger\"></span>\r\n          </a>\r\n          <!-- dropdown -->\r\n          <div class=\"dropdown-menu pull-right w-xl animated fadeIn no-bg no-border no-shadow\">\r\n            <div class=\"scrollable\" style=\"max-height: 220px\">\r\n              <ul class=\"list-group list-group-gap m-a-0\">\r\n                <li class=\"list-group-item dark-white box-shadow-z0 b\">\r\n                  <span class=\"pull-left m-r\">\r\n                    <img src=\"assets/images/a0.jpg\" alt=\"...\" class=\"w-40 img-circle\">\r\n                  </span>\r\n                  <span class=\"clear block\">\r\n                    Use awesome <a href=\"#\" class=\"text-primary\">animate.css</a><br>\r\n                    <small class=\"text-muted\">10 minutes ago</small>\r\n                  </span>\r\n                </li>\r\n                <li class=\"list-group-item dark-white box-shadow-z0 b\">\r\n                  <span class=\"pull-left m-r\">\r\n                    <img src=\"assets/images/a1.jpg\" alt=\"...\" class=\"w-40 img-circle\">\r\n                  </span>\r\n                  <span class=\"clear block\">\r\n                    <a href=\"#\" class=\"text-primary\">Joe</a> Added you as friend<br>\r\n                    <small class=\"text-muted\">2 hours ago</small>\r\n                  </span>\r\n                </li>\r\n                <li class=\"list-group-item dark-white text-color box-shadow-z0 b\">\r\n                  <span class=\"pull-left m-r\">\r\n                    <img src=\"assets/images/a2.jpg\" alt=\"...\" class=\"w-40 img-circle\">\r\n                  </span>\r\n                  <span class=\"clear block\">\r\n                    <a href=\"#\" class=\"text-primary\">Danie</a> sent you a message<br>\r\n                    <small class=\"text-muted\">1 day ago</small>\r\n                  </span>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <!-- / dropdown -->\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link clear\" data-toggle=\"dropdown\">\r\n            <span class=\"avatar w-32\">\r\n              <img src=\"assets/images/a3.jpg\" class=\"w-full rounded\" alt=\"...\">\r\n            </span>\r\n          </a>\r\n          <div class=\"dropdown-menu w dropdown-menu-scale pull-right\">\r\n            <a class=\"dropdown-item\" href=\"profile.html\">\r\n              <span>Profile</span>\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"setting.html\">\r\n              <span>Settings</span>\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"app.inbox.html\">\r\n              <span>Inbox</span>\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"app.message.html\">\r\n              <span>Message</span>\r\n            </a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"docs.html\">\r\n              Need help?\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"signin.html\">Sign out</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <!-- / navbar right -->\r\n    </div>\r\n  </div>\r\n  <div class=\"app-body\">\r\n\r\n    <!-- ############ PAGE START-->\r\n\r\n    <div class=\"app-body-inner\">\r\n      <div class=\"row-col\">\r\n        <div class=\"col-xs-3 w-xl modal fade aside aside-lg\" id=\"subnav\">\r\n          <div class=\"row-col black b-r bg\">\r\n            <div class=\"b-b\">\r\n              <div class=\"navbar no-radius\">\r\n                <!-- nabar right -->\r\n                <ul class=\"nav navbar-nav pull-right m-l\">\r\n                  <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link\" data-toggle=\"dropdown\">\r\n                      <span class=\"btn btn-xs white rounded dropdown-toggle\">\r\n                        New\r\n                      </span>\r\n                    </a>\r\n                    <div class=\"dropdown-menu text-color pull-right\" role=\"menu\">\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-inbox\"></i>\r\n                        New project\r\n                      </a>\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-check-square-o\"></i>\r\n                        New task\r\n                      </a>\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-file-o\"></i>\r\n                        New note\r\n                      </a>\r\n                      <div class=\"dropdown-divider\"></div>\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-comment-o\"></i>\r\n                        Message\r\n                      </a>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <!-- / navbar right -->\r\n                <!-- link and dropdown -->\r\n                <ul class=\"nav navbar-nav\">\r\n                  <li class=\"nav-item\">\r\n                    <span class=\"navbar-item text-md\">Projects</span>\r\n                  </li>\r\n                </ul>\r\n                <!-- / link and dropdown -->\r\n              </div>\r\n            </div>\r\n            <!-- flex content -->\r\n            <div class=\"row-row\">\r\n              <div class=\"row-body scrollable hover\">\r\n                <div class=\"row-inner\">\r\n                  <!-- left content -->\r\n                  <div class=\"list\" data-ui-list=\"b-r b-2x b-theme\">\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle lt\">\r\n                          <span class=\"fa fa-twitter text-md\"></span>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <div class=\"pull-right dropdown\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\" class=\"text-muted\"><i class=\"fa fa-fw fa-ellipsis-h\"></i></a>\r\n                          <div class=\"dropdown-menu pull-right text-color\" role=\"menu\">\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-tag\"></i>\r\n                              Tag item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                              Edit item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                              Delete item\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-ellipsis-h\"></i>\r\n                              More action\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Twitter connect</a>\r\n                        </div>\r\n                        <small class=\"block text-ellipsis\">\r\n                          <span class=\"text-xs\">\r\n                            50\r\n                          </span> <span class=\"text-muted\">completed</span>\r\n                        </small>\r\n\r\n                        <div class=\"progress-xxs m-y-sm lter progress w-sm\">\r\n                          <div class=\"progress-bar success\" data-toggle=\"tooltip\" title=\"Finished: 44%\" style=\"width: 19%;\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle lt\">\r\n                          <span class=\"fa fa-youtube-play text-md\"></span>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <div class=\"pull-right dropdown\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\" class=\"text-muted\"><i class=\"fa fa-fw fa-ellipsis-h\"></i></a>\r\n                          <div class=\"dropdown-menu pull-right text-color\" role=\"menu\">\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-tag\"></i>\r\n                              Tag item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                              Edit item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                              Delete item\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-ellipsis-h\"></i>\r\n                              More action\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Youtube ads</a>\r\n                        </div>\r\n                        <small class=\"block text-ellipsis\">\r\n                          <span class=\"text-xs\">\r\n                            5\r\n                          </span> <span class=\"text-muted\">open tasks, </span>\r\n                          <span class=\"text-xs\">\r\n                            20\r\n                          </span> <span class=\"text-muted\">completed</span>\r\n                        </small>\r\n\r\n                        <div class=\"progress-xxs m-y-sm lter progress w-sm\">\r\n                          <div class=\"progress-bar success\" data-toggle=\"tooltip\" title=\"Finished: 34%\" style=\"width: 41%;\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle lt\">\r\n                          <span class=\"fa fa-paypal text-md\"></span>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <div class=\"pull-right dropdown\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\" class=\"text-muted\"><i class=\"fa fa-fw fa-ellipsis-h\"></i></a>\r\n                          <div class=\"dropdown-menu pull-right text-color\" role=\"menu\">\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-tag\"></i>\r\n                              Tag item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                              Edit item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                              Delete item\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-ellipsis-h\"></i>\r\n                              More action\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Paypal integration</a>\r\n                        </div>\r\n                        <small class=\"block text-ellipsis\">\r\n                          <span class=\"text-xs\">\r\n                            2\r\n                          </span> <span class=\"text-muted\">open tasks, </span>\r\n                          <span class=\"text-xs\">\r\n                            5\r\n                          </span> <span class=\"text-muted\">completed</span>\r\n                        </small>\r\n\r\n                        <div class=\"progress-xxs m-y-sm lter progress w-sm\">\r\n                          <div class=\"progress-bar success\" data-toggle=\"tooltip\" title=\"Finished: 22%\" style=\"width: 33%;\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle lt\">\r\n                          <span class=\"fa fa-android text-md\"></span>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <div class=\"pull-right dropdown\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\" class=\"text-muted\"><i class=\"fa fa-fw fa-ellipsis-h\"></i></a>\r\n                          <div class=\"dropdown-menu pull-right text-color\" role=\"menu\">\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-tag\"></i>\r\n                              Tag item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                              Edit item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                              Delete item\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-ellipsis-h\"></i>\r\n                              More action\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Android game app</a>\r\n                        </div>\r\n                        <small class=\"block text-ellipsis\">\r\n                          <span class=\"text-xs\">\r\n                            30\r\n                          </span> <span class=\"text-muted\">open tasks, </span>\r\n                          <span class=\"text-xs\">\r\n                            4\r\n                          </span> <span class=\"text-muted\">completed</span>\r\n                        </small>\r\n\r\n                        <div class=\"progress-xxs m-y-sm lter progress w-sm\">\r\n                          <div class=\"progress-bar success\" data-toggle=\"tooltip\" title=\"Finished: 7%\" style=\"width: 19%;\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle lt\">\r\n                          <span class=\"fa fa-apple text-md\"></span>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <div class=\"pull-right dropdown\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\" class=\"text-muted\"><i class=\"fa fa-fw fa-ellipsis-h\"></i></a>\r\n                          <div class=\"dropdown-menu pull-right text-color\" role=\"menu\">\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-tag\"></i>\r\n                              Tag item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                              Edit item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                              Delete item\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-ellipsis-h\"></i>\r\n                              More action\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">IOS application</a>\r\n                        </div>\r\n                        <small class=\"block text-ellipsis\">\r\n                          <span class=\"text-xs\">\r\n                            5\r\n                          </span> <span class=\"text-muted\">completed</span>\r\n                        </small>\r\n\r\n                        <div class=\"progress-xxs m-y-sm lter progress w-sm\">\r\n                          <div class=\"progress-bar success\" data-toggle=\"tooltip\" title=\"Finished: 20%\" style=\"width: 12%;\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item \">\r\n                      <div class=\"list-left\">\r\n                        <span class=\"w-40 avatar circle lt\">\r\n                          <span class=\"fa fa-tumblr text-md\"></span>\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"list-body\">\r\n                        <div class=\"pull-right dropdown\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\" class=\"text-muted\"><i class=\"fa fa-fw fa-ellipsis-h\"></i></a>\r\n                          <div class=\"dropdown-menu pull-right text-color\" role=\"menu\">\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-tag\"></i>\r\n                              Tag item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                              Edit item\r\n                            </a>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                              Delete item\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\">\r\n                              <i class=\"fa fa-ellipsis-h\"></i>\r\n                              More action\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"item-title\">\r\n                          <a href=\"#\" class=\"_500\">Tumblr theme</a>\r\n                        </div>\r\n                        <small class=\"block text-ellipsis\">\r\n                          <span class=\"text-xs\">\r\n                            8\r\n                          </span> <span class=\"text-muted\">open tasks, </span>\r\n                          <span class=\"text-xs\">\r\n                            5\r\n                          </span> <span class=\"text-muted\">completed</span>\r\n                        </small>\r\n\r\n                        <div class=\"progress-xxs m-y-sm lter progress w-sm\">\r\n                          <div class=\"progress-bar success\" data-toggle=\"tooltip\" title=\"Finished: 23%\" style=\"width: 41%;\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- / -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / -->\r\n            <!-- footer -->\r\n            <div class=\"p-a b-t clearfix\">\r\n              <div class=\"btn-group pull-right\">\r\n                <a href=\"#\" class=\"btn btn-xs white circle\"><i class=\"fa fa-fw fa-angle-left\"></i></a>\r\n                <a href=\"#\" class=\"btn btn-xs white circle\"><i class=\"fa fa-fw fa-angle-right\"></i></a>\r\n              </div>\r\n              <span class=\"text-sm text-muted\">Total: <strong>4</strong></span>\r\n            </div>\r\n            <!-- / -->\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-4 modal fade aside aside-sm\" id=\"list\">\r\n          <div class=\"row-col b-r light lt\">\r\n            <div class=\"b-b\">\r\n              <div class=\"navbar no-radius\">\r\n                <a data-toggle=\"modal\" data-target=\"#subnav\" data-ui-modal class=\"navbar-item pull-left hidden-xl-up hidden-sm-down\">\r\n                  <span class=\"btn btn-sm btn-icon blue\">\r\n                    <i class=\"fa fa-th\"></i>\r\n                  </span>\r\n                </a>\r\n                <!-- nabar right -->\r\n                <ul class=\"nav navbar-nav pull-right m-l\">\r\n                  <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link text-muted\" href=\"#\" data-toggle=\"dropdown\">\r\n                      <i class=\"fa fa-ellipsis-h\"></i>\r\n                    </a>\r\n                    <div class=\"dropdown-menu pull-right text-color\" role=\"menu\">\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-tag\"></i>\r\n                        Tag item\r\n                      </a>\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-pencil\"></i>\r\n                        Edit item\r\n                      </a>\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                        Delete item\r\n                      </a>\r\n                      <div class=\"dropdown-divider\"></div>\r\n                      <a class=\"dropdown-item\">\r\n                        <i class=\"fa fa-ellipsis-h\"></i>\r\n                        More action\r\n                      </a>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <!-- / navbar right -->\r\n                <!-- link and dropdown -->\r\n                <ul class=\"nav navbar-nav\">\r\n                  <li class=\"nav-item\">\r\n                    <span class=\"navbar-item m-r-0 text-md\">Tasks</span>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\">\r\n                      <span class=\"label rounded\">\r\n                        55\r\n                      </span>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n                <!-- / link and dropdown -->\r\n              </div>\r\n            </div>\r\n            <!-- flex content -->\r\n            <div class=\"row-row\">\r\n              <div class=\"row-body scrollable hover\">\r\n                <div class=\"row-inner\">\r\n                  <!-- content -->\r\n                  <div class=\"list\" data-ui-list=\"b-r b-2x b-theme\">\r\n                    <div class=\"list-item row-col\">\r\n                      <div class=\"col-xs\">\r\n                        <label class=\"md-check p-r-xs\">\r\n                          <input type=\"checkbox\">\r\n                          <i></i>\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"list-body col-xs\">\r\n                        <a href=\"#\" class=\"item-title _500\">Wireframes for app landing page</a>\r\n                        <div class=\"text-muted text-xs\">\r\n                          <i class=\"fa fa-clock-o\"></i> 10:30 pm, 24 July\r\n                        </div>\r\n                        <div class=\"dropdown m-t-xs\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\">\r\n                            <span class=\"label warn rounded dropdown-toggle\">In progress</span>\r\n                          </a>\r\n                          <div class=\"dropdown-menu\">\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-accent\"></i>Active\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-warn\"></i>In progress\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-success\"></i>Completed\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-muted\"></i>Archived\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item row-col\">\r\n                      <div class=\"col-xs\">\r\n                        <label class=\"md-check p-r-xs\">\r\n                          <input type=\"checkbox\">\r\n                          <i></i>\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"list-body col-xs\">\r\n                        <a href=\"#\" class=\"item-title _500\">Backend development</a>\r\n                        <div class=\"text-muted text-xs\">\r\n                          <i class=\"fa fa-clock-o\"></i> 10:30 pm, 24 July\r\n                        </div>\r\n                        <div class=\"dropdown m-t-xs\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\">\r\n                            <span class=\"label accent rounded dropdown-toggle\">Active</span>\r\n                          </a>\r\n                          <div class=\"dropdown-menu\">\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-accent\"></i>Active\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-warn\"></i>In progress\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-success\"></i>Completed\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-muted\"></i>Archived\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item row-col\">\r\n                      <div class=\"col-xs\">\r\n                        <label class=\"md-check p-r-xs\">\r\n                          <input type=\"checkbox\">\r\n                          <i></i>\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"list-body col-xs\">\r\n                        <a href=\"#\" class=\"item-title _500\">Iconography and illustration style sheet</a>\r\n                        <div class=\"text-muted text-xs\">\r\n                          <i class=\"fa fa-clock-o\"></i> 11:30 pm, 20 July\r\n                        </div>\r\n                        <div class=\"dropdown m-t-xs\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\">\r\n                            <span class=\"label success rounded dropdown-toggle\">Completed</span>\r\n                          </a>\r\n                          <div class=\"dropdown-menu\">\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-accent\"></i>Active\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-warn\"></i>In progress\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-success\"></i>Completed\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-muted\"></i>Archived\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item row-col\">\r\n                      <div class=\"col-xs\">\r\n                        <label class=\"md-check p-r-xs\">\r\n                          <input type=\"checkbox\">\r\n                          <i></i>\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"list-body col-xs\">\r\n                        <a href=\"#\" class=\"item-title _500\">Design requirements documentation</a>\r\n                        <div class=\"text-muted text-xs\">\r\n                          <i class=\"fa fa-clock-o\"></i> 4:40 pm, 18 July\r\n                        </div>\r\n                        <div class=\"dropdown m-t-xs\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\">\r\n                            <span class=\"label success rounded dropdown-toggle\">Completed</span>\r\n                          </a>\r\n                          <div class=\"dropdown-menu\">\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-accent\"></i>Active\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-warn\"></i>In progress\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-success\"></i>Completed\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-muted\"></i>Archived\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item row-col\">\r\n                      <div class=\"col-xs\">\r\n                        <label class=\"md-check p-r-xs\">\r\n                          <input type=\"checkbox\">\r\n                          <i></i>\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"list-body col-xs\">\r\n                        <a href=\"#\" class=\"item-title _500\">Project teammates video meeting</a>\r\n                        <div class=\"text-muted text-xs\">\r\n                          <i class=\"fa fa-clock-o\"></i> 12:30 pm, 5 July\r\n                        </div>\r\n                        <div class=\"dropdown m-t-xs\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\">\r\n                            <span class=\"label rounded dropdown-toggle\">Archived</span>\r\n                          </a>\r\n                          <div class=\"dropdown-menu\">\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-accent\"></i>Active\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-warn\"></i>In progress\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-success\"></i>Completed\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-muted\"></i>Archived\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"list-item row-col\">\r\n                      <div class=\"col-xs\">\r\n                        <label class=\"md-check p-r-xs\">\r\n                          <input type=\"checkbox\">\r\n                          <i></i>\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"list-body col-xs\">\r\n                        <a href=\"#\" class=\"item-title _500\">Kick-off meeting</a>\r\n                        <div class=\"text-muted text-xs\">\r\n                          <i class=\"fa fa-clock-o\"></i> 9:30 pm, 5 July\r\n                        </div>\r\n                        <div class=\"dropdown m-t-xs\">\r\n                          <a href=\"#\" data-toggle=\"dropdown\">\r\n                            <span class=\"label rounded dropdown-toggle\">Archived</span>\r\n                          </a>\r\n                          <div class=\"dropdown-menu\">\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-accent\"></i>Active\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-warn\"></i>In progress\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-success\"></i>Completed\r\n                            </a>\r\n                            <a class=\"dropdown-item\" href=\"#\">\r\n                              <i class=\"fa fa-circle-o text-muted\"></i>Archived\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- / -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / -->\r\n            <!-- footer -->\r\n            <div class=\"p-a b-t clearfix\">\r\n              <div class=\"btn-group pull-right\">\r\n                <a href=\"#\" class=\"btn btn-xs white circle\"><i class=\"fa fa-fw fa-angle-left\"></i></a>\r\n                <a href=\"#\" class=\"btn btn-xs white circle\"><i class=\"fa fa-fw fa-angle-right\"></i></a>\r\n              </div>\r\n              <span class=\"text-sm text-muted\">Completed: <strong>10</strong>, In Progress: <strong>5</strong></span>\r\n            </div>\r\n            <!-- / -->\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-5\" id=\"detail\">\r\n          <div class=\"row-col white b-r\">\r\n            <div class=\"b-b\">\r\n              <div class=\"navbar no-radius\">\r\n\r\n                <!-- nabar right -->\r\n                <ul class=\"nav navbar-nav pull-right m-l\">\r\n                  <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link\">\r\n                      <span class=\"label warn rounded\">\r\n                        24\r\n                      </span>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n                <!-- / navbar right -->\r\n\r\n                <a data-toggle=\"modal\" data-target=\"#subnav\" data-ui-modal class=\"navbar-item pull-left hidden-md-up\">\r\n                  <span class=\"btn btn-sm btn-icon blue\">\r\n                    <i class=\"fa fa-th\"></i>\r\n                  </span>\r\n                </a>\r\n                <a data-toggle=\"modal\" data-target=\"#list\" data-ui-modal class=\"navbar-item pull-left hidden-md-up\">\r\n                  <span class=\"btn btn-sm btn-icon btn-default\">\r\n                    <i class=\"fa fa-list\"></i>\r\n                  </span>\r\n                </a>\r\n                <span class=\"navbar-item text-md text-ellipsis\">Activities</span>\r\n              </div>\r\n            </div>\r\n            <!-- flex content -->\r\n            <div class=\"row-row\">\r\n              <div class=\"row-body scrollable hover\">\r\n                <div class=\"row-inner\">\r\n                  <!-- content -->\r\n                  <div class=\"p-a\">\r\n                    <div class=\"streamline streamline-theme m-b\">\r\n                      <div class=\"sl-item b-primary\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">Just now</div>\r\n                          <p>Finished task <a href=\"#\" class=\"text-info\">#features 4</a>.</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sl-item b-success\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">11:30</div>\r\n                          <p><a href=\"#\">@Jessi</a> uploaded a file <a href=\"#\" class=\"text-info\">documentation.pdf</a></p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sl-item b-info\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">10:30</div>\r\n                          <p>Call to customer <a href=\"#\" class=\"text-info\">Jacob</a> and discuss the detail.</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sl-item b-warn\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">3 days ago</div>\r\n                          <p><a href=\"#\" class=\"text-info\">Jessi</a> commented your post.</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sl-item b-warning\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">Thu, 10 Mar</div>\r\n                          <p><a href=\"#\" class=\"text-info\">Jessi</a> report a issue #2122.</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sl-item\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">Sat, 5 Mar</div>\r\n                          <p>Prepare for presentation</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sl-item\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">Sun, 11 Feb</div>\r\n                          <p><a href=\"#\" class=\"text-info\">Jessi</a> assign you a task <a href=\"#\" class=\"text-info\">Mockup Design</a>.</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"sl-item\">\r\n                        <div class=\"sl-content\">\r\n                          <div class=\"sl-date text-muted\">Thu, 17 Jan</div>\r\n                          <p>Task created</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- / -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- footer -->\r\n            <div class=\"p-a p-y-sm b-t\">\r\n\r\n            </div>\r\n            <!--  -->\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs w-80\" id=\"sidenav\">\r\n          <div class=\"row-col bg\">\r\n            <!-- flex content -->\r\n            <div class=\"row-row\">\r\n              <div class=\"row-body scrollable hover\">\r\n                <div class=\"row-inner\">\r\n                  <!-- content -->\r\n                  <div class=\"p-y text-center\">\r\n                    <div>\r\n                      <a href=\"#\" class=\"inline\">\r\n                        <span class=\"circle w-40 avatar success\">\r\n                          M\r\n                        </span>\r\n                      </a>\r\n                    </div>\r\n                    <div>\r\n                      <a href=\"#\" class=\"inline\">\r\n                        <span class=\"circle w-40 avatar info\">\r\n                          RD\r\n                        </span>\r\n                      </a>\r\n                    </div>\r\n                    <div>\r\n                      <a href=\"#\" class=\"inline\">\r\n                        <span class=\"circle w-40 avatar\">\r\n                          <img src=\"assets/images/a2.jpg\" alt=\".\">\r\n                        </span>\r\n                      </a>\r\n                    </div>\r\n                    <div>\r\n                      <a href=\"#\" class=\"inline\">\r\n                        <span class=\"circle w-40 avatar\">\r\n                          <img src=\"assets/images/a3.jpg\" alt=\".\">\r\n                        </span>\r\n                      </a>\r\n                    </div>\r\n                    <div>\r\n                      <a href=\"#\" class=\"inline\">\r\n                        <span class=\"circle w-40 avatar grey\">\r\n                          S\r\n                        </span>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- / -->\r\n            <!-- footer -->\r\n            <div class=\"p-y text-center\">\r\n              <a href=\"#\" class=\"md-btn md-mini md-fab primary\"><i class=\"fa fa-plus\"></i></a>\r\n            </div>\r\n            <!-- / -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ############ PAGE END-->\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.users = [];
        this.isUserLogin = false;
        this.submitted = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.searchForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.loadAllUsers();
    };
    Object.defineProperty(ProjectComponent.prototype, "f", {
        get: function () { return this.searchForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProjectComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    ProjectComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    ProjectComponent.prototype.onSearch = function () {
        this.submitted = true;
        alert(1);
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html") }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\r\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <label for=\"firstName\">First Name</label>\r\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"lastName\">Last Name</label>\r\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"username\">Username</label>\r\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
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
    production: false,
    apiUrl: 'http://localhost:4000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! D:\RandhirProject\Angular4\GitAngular6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map