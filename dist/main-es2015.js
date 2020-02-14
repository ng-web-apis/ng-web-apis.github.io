(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['main'],
    {
        /***/ './$$_lazy_route_resource lazy recursive':
            /*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                function webpackEmptyAsyncContext(req) {
                    // Here Promise.resolve().then() is used instead of new Promise() to prevent
                    // uncaught exception popping up in devtools
                    return Promise.resolve().then(function() {
                        var e = new Error("Cannot find module '" + req + "'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    });
                }
                webpackEmptyAsyncContext.keys = function() {
                    return [];
                };
                webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
                module.exports = webpackEmptyAsyncContext;
                webpackEmptyAsyncContext.id = './$$_lazy_route_resource lazy recursive';

                /***/
            },

        /***/ './src/app/app.component.ts':
            /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
            /*! exports provided: AppComponent */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'AppComponent',
                    function() {
                        return AppComponent;
                    },
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js',
                );
                /* harmony import */ var _ng_web_apis_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @ng-web-apis/geolocation */ './node_modules/@ng-web-apis/geolocation/__ivy_ngcc__/fesm2015/ng-web-apis-geolocation.js',
                );
                /* harmony import */ var _ng_web_apis_midi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! @ng-web-apis/midi */ './node_modules/@ng-web-apis/midi/__ivy_ngcc__/fesm2015/ng-web-apis-midi.js',
                );
                /* harmony import */ var _ng_web_apis_payment_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! @ng-web-apis/payment-request */ './node_modules/@ng-web-apis/payment-request/__ivy_ngcc__/fesm2015/ng-web-apis-payment-request.js',
                );

                class AppComponent {
                    constructor(paymentRequestSupport, geolocationSupport, midiSupport) {
                        this.paymentRequestSupport = paymentRequestSupport;
                        this.geolocationSupport = geolocationSupport;
                        this.midiSupport = midiSupport;
                        // TODO: Issue with Ivy: https://github.com/angular/angular/issues/34267
                        this.audioSupport =
                            !!window.AudioContext || !!window.webkitAudioContext;
                    }
                }
                AppComponent.ɵfac = function AppComponent_Factory(t) {
                    return new (t || AppComponent)(
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
                            _ng_web_apis_payment_request__WEBPACK_IMPORTED_MODULE_3__[
                                'PAYMENT_REQUEST_SUPPORT'
                            ],
                        ),
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
                            _ng_web_apis_geolocation__WEBPACK_IMPORTED_MODULE_1__[
                                'GEOLOCATION_SUPPORT'
                            ],
                        ),
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
                            _ng_web_apis_midi__WEBPACK_IMPORTED_MODULE_2__[
                                'MIDI_SUPPORT'
                            ],
                        ),
                    );
                };
                AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                    'ɵɵdefineComponent'
                ]({
                    type: AppComponent,
                    selectors: [['main']],
                    decls: 45,
                    vars: 8,
                    consts: [
                        [
                            'href',
                            'https://github.com/ng-web-apis/common',
                            'target',
                            '_blank',
                            1,
                            'link',
                        ],
                        [
                            'src',
                            '/dist/assets/images/common.svg',
                            'width',
                            '64',
                            'height',
                            '64',
                            'alt',
                            'Common utils logo',
                            1,
                            'icon',
                        ],
                        [
                            'href',
                            'https://github.com/ng-web-apis/audio',
                            'target',
                            '_blank',
                            1,
                            'link',
                        ],
                        [
                            'src',
                            '/dist/assets/images/audio.svg',
                            'width',
                            '64',
                            'height',
                            '64',
                            'alt',
                            'Web Audio API logo',
                            1,
                            'icon',
                        ],
                        [
                            'href',
                            'https://github.com/ng-web-apis/geolocation',
                            'target',
                            '_blank',
                            1,
                            'link',
                        ],
                        [
                            'src',
                            '/dist/assets/images/geolocation.svg',
                            'width',
                            '64',
                            'height',
                            '64',
                            'alt',
                            'Geolocation API logo',
                            1,
                            'icon',
                        ],
                        [
                            'href',
                            'https://github.com/ng-web-apis/midi',
                            'target',
                            '_blank',
                            1,
                            'link',
                        ],
                        [
                            'src',
                            '/dist/assets/images/midi.svg',
                            'width',
                            '64',
                            'height',
                            '64',
                            'alt',
                            'Web MIDI API logo',
                            1,
                            'icon',
                        ],
                        [
                            'href',
                            'https://github.com/ng-web-apis/payment-request',
                            'target',
                            '_blank',
                            1,
                            'link',
                        ],
                        [
                            'src',
                            '/dist/assets/images/payment-request.svg',
                            'width',
                            '64',
                            'height',
                            '64',
                            'alt',
                            'Payment Request API logo',
                            1,
                            'icon',
                        ],
                    ],
                    template: function AppComponent_Template(rf, ctx) {
                        if (rf & 1) {
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                0,
                                'a',
                                0,
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                1,
                                'div',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                2,
                                'h2',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                3,
                                'Common',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                4,
                                ' A set of common utils for consuming ',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                5,
                                'strong',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                6,
                                'Web APIs',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                7,
                                ' with Angular ',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                                8,
                                'img',
                                1,
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                9,
                                'a',
                                2,
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                10,
                                'div',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                11,
                                'h2',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                12,
                                'Audio',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                13,
                                ' A library for declarative use of ',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                14,
                                'strong',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                15,
                                'Web Audio API',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                16,
                                ' with Angular ',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                                17,
                                'img',
                                3,
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                18,
                                'a',
                                4,
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                19,
                                'div',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                20,
                                'h2',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                21,
                                'Geolocation',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                22,
                                ' An Observable based abstraction to use ',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                23,
                                'strong',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                24,
                                'Geolocation API',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                25,
                                ' with Angular ',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                                26,
                                'img',
                                5,
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                27,
                                'a',
                                6,
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                28,
                                'div',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                29,
                                'h2',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                30,
                                'MIDI',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                31,
                                ' An Observable based library for the use of ',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                32,
                                'strong',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                33,
                                'Web MIDI API',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                34,
                                ' with Angular ',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                                35,
                                'img',
                                7,
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                36,
                                'a',
                                8,
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                37,
                                'div',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                38,
                                'h2',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                39,
                                'Payment Request',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                40,
                                ' A library for declarative use of ',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                                41,
                                'strong',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                42,
                                'Payment Request API',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                                43,
                                ' with Angular ',
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                                44,
                                'img',
                                9,
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
                        }
                        if (rf & 2) {
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](9);
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                                'not_supported',
                                !ctx.audioSupport,
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](9);
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                                'not-supported',
                                !ctx.geolocationSupport,
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](9);
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                                'not-supported',
                                !ctx.midiSupport,
                            );
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](9);
                            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                                'not-supported',
                                !ctx.paymentRequestSupport,
                            );
                        }
                    },
                    encapsulation: 2,
                });
                /*@__PURE__*/ (function() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
                        AppComponent,
                        [
                            {
                                type:
                                    _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                        'Component'
                                    ],
                                args: [
                                    {
                                        selector: 'main',
                                        templateUrl: './app.component.html',
                                    },
                                ],
                            },
                        ],
                        function() {
                            return [
                                {
                                    type: undefined,
                                    decorators: [
                                        {
                                            type:
                                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                                    'Inject'
                                                ],
                                            args: [
                                                _ng_web_apis_payment_request__WEBPACK_IMPORTED_MODULE_3__[
                                                    'PAYMENT_REQUEST_SUPPORT'
                                                ],
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: undefined,
                                    decorators: [
                                        {
                                            type:
                                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                                    'Inject'
                                                ],
                                            args: [
                                                _ng_web_apis_geolocation__WEBPACK_IMPORTED_MODULE_1__[
                                                    'GEOLOCATION_SUPPORT'
                                                ],
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: undefined,
                                    decorators: [
                                        {
                                            type:
                                                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                                    'Inject'
                                                ],
                                            args: [
                                                _ng_web_apis_midi__WEBPACK_IMPORTED_MODULE_2__[
                                                    'MIDI_SUPPORT'
                                                ],
                                            ],
                                        },
                                    ],
                                },
                            ];
                        },
                        null,
                    );
                })();

                /***/
            },

        /***/ './src/app/app.module.ts':
            /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
            /*! exports provided: AppModule */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'AppModule',
                    function() {
                        return AppModule;
                    },
                );
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js',
                );
                /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js',
                );
                /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./app.component */ './src/app/app.component.ts',
                );

                class AppModule {}
                AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                    'ɵɵdefineNgModule'
                ]({
                    type: AppModule,
                    bootstrap: [
                        _app_component__WEBPACK_IMPORTED_MODULE_2__['AppComponent'],
                    ],
                });
                AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                    'ɵɵdefineInjector'
                ]({
                    factory: function AppModule_Factory(t) {
                        return new (t || AppModule)();
                    },
                    providers: [],
                    imports: [
                        [
                            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__[
                                'BrowserModule'
                            ],
                        ],
                    ],
                });
                (function() {
                    (typeof ngJitMode === 'undefined' || ngJitMode) &&
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                            'ɵɵsetNgModuleScope'
                        ](AppModule, {
                            declarations: [
                                _app_component__WEBPACK_IMPORTED_MODULE_2__[
                                    'AppComponent'
                                ],
                            ],
                            imports: [
                                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__[
                                    'BrowserModule'
                                ],
                            ],
                        });
                })();
                /*@__PURE__*/ (function() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
                        AppModule,
                        [
                            {
                                type:
                                    _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                                        'NgModule'
                                    ],
                                args: [
                                    {
                                        declarations: [
                                            _app_component__WEBPACK_IMPORTED_MODULE_2__[
                                                'AppComponent'
                                            ],
                                        ],
                                        imports: [
                                            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__[
                                                'BrowserModule'
                                            ],
                                        ],
                                        providers: [],
                                        bootstrap: [
                                            _app_component__WEBPACK_IMPORTED_MODULE_2__[
                                                'AppComponent'
                                            ],
                                        ],
                                    },
                                ],
                            },
                        ],
                        null,
                        null,
                    );
                })();

                /***/
            },

        /***/ './src/environments/environment.ts':
            /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
            /*! exports provided: environment */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'environment',
                    function() {
                        return environment;
                    },
                );
                // This file can be replaced during build by using the `fileReplacements` array.
                // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
                // The list of file replacements can be found in `angular.json`.
                const environment = {
                    production: false,
                };
                /*
                 * For easier debugging in development mode, you can import the following file
                 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
                 *
                 * This import should be commented out in production mode because it will have a negative impact
                 * on performance if an error is thrown.
                 */
                // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

                /***/
            },

        /***/ './src/main.ts':
            /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
            /*! no exports provided */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js',
                );
                /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./environments/environment */ './src/environments/environment.ts',
                );
                /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./app/app.module */ './src/app/app.module.ts',
                );
                /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js',
                );

                if (
                    _environments_environment__WEBPACK_IMPORTED_MODULE_1__['environment']
                        .production
                ) {
                    Object(
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__['enableProdMode'],
                    )();
                }
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[
                    'platformBrowser'
                ]()
                    .bootstrapModule(
                        _app_app_module__WEBPACK_IMPORTED_MODULE_2__['AppModule'],
                    )
                    .catch(err => console.error(err));

                /***/
            },

        /***/ 0:
            /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                module.exports = __webpack_require__(
                    /*! C:\Users\a.inkin\WebstormProjects\ng-web-apis.github.io\src\main.ts */ './src/main.ts',
                );

                /***/
            },
    },
    [[0, 'runtime', 'vendor']],
]);
//# sourceMappingURL=main-es2015.js.map
