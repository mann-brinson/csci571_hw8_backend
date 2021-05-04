(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/markmann/Desktop/CSCI_571/homework/hw8/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "3fDq":
/*!*********************************************************!*\
  !*** ./src/app/components/homepage/homepage.service.ts ***!
  \*********************************************************/
/*! exports provided: HomepageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageService", function() { return HomepageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class HomepageService {
    constructor(http) {
        this.http = http;
        // private _url: string = 'http://localhost:8080/apis'; //TEST
        this._url = 'https://csci571-hw8-nodejs-2021sp.wl.r.appspot.com/apis'; //PROD
    }
    // WORKING
    getHomepage() {
        return this.http.get(this._url);
    }
}
HomepageService.ɵfac = function HomepageService_Factory(t) { return new (t || HomepageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HomepageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomepageService, factory: HomepageService.ɵfac });


/***/ }),

/***/ "6DPj":
/*!*******************************************************!*\
  !*** ./src/app/components/mylist/mylist.component.ts ***!
  \*******************************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/local-storage/local-storage.service */ "rc3/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return [a0]; };
function MylistComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MylistComponent_div_0_div_5_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.gotoMovieTvPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", card_r3.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", card_r3.entity_type, "-", card_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r2.small_screen_yn ? "phone-screen" : "non-phone-screen"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", card_r3.entity_type, "-", card_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r3.name);
} }
function MylistComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MylistComponent_div_0_div_5_Template, 5, 9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.watchlist_json);
} }
function MylistComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No items found in Watchlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MylistComponent {
    constructor(localStorageService, router, breakpointObserver) {
        this.localStorageService = localStorageService;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.len_localStorage = 0;
        this.localStorage_not_empty = false;
        this.localStorage_items = [];
        this.lruCache_empty_yn = true;
        this.watchlist_empty_yn = true;
        this.lruCache_json = {};
        this.watchlist_json = [];
        this.small_screen_yn = false;
    }
    ngOnInit() {
        // Check localstorage and set variables
        this.lru_cache = this.localStorageService.localStorage["lru_cache"];
        this.watchlist = this.localStorageService.localStorage["watchlist"];
        this.len_localStorage = this.localStorageService.localStorage.length;
        //// JSON-TO-INTERFACE HELPERS
        function adapt(mapper, json) {
            let adaptedObj = {};
            const fields = Object.keys(mapper);
            for (let field of fields) {
                const targetField = mapper[field];
                adaptedObj[targetField] = json[field];
            }
            return adaptedObj;
        }
        function JSONtoMovieTvItemMapper(json) {
            const mapper = {
                'id': 'id',
                'name': 'name',
                'poster_path': 'poster_path',
                'entity_type': 'entity_type'
            };
            return adapt(mapper, json);
        }
        //// DRIVER
        // Check if screen is smartphone
        // ASSUME: if screen is <500px that the device is smartphone
        this.breakpointObserver
            .observe(['(min-width: 500px)'])
            .subscribe((state) => {
            if (state.matches) {
                // console.log('Viewport is 500px or over!')
                this.small_screen_yn = false;
            }
            else {
                // console.log('Viewport is smaller than 500px!')
                this.small_screen_yn = true;
            }
        });
        // CONTINUE WATCHING EXISTS
        if (this.lru_cache != undefined) {
            this.lruCache_empty_yn = false;
            this.lruCache_json = JSON.parse(this.lru_cache);
        }
        // WATCHLIST EXISTS
        if (this.watchlist != undefined) {
            this.watchlist_empty_yn = false;
            var watchlist_json_v1 = JSON.parse(this.watchlist);
            this.watchlist_json = watchlist_json_v1.map((record) => JSONtoMovieTvItemMapper(record));
        }
    }
    gotoMovieTvPage(event) {
        let entityType_movieId = event.target.id;
        var entity_type = entityType_movieId.split('-')[0];
        var movie_id = entityType_movieId.split('-')[1];
        // console.log({"going to ": [entity_type, movie_id]})
        this.router.navigate([`/watch/${entity_type}/${movie_id}`]);
    }
}
MylistComponent.ɵfac = function MylistComponent_Factory(t) { return new (t || MylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
MylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MylistComponent, selectors: [["app-mylist"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["style", "text-align: center; height: 80vh", 4, "ngIf"], [1, "container-fluid"], [1, "row", "justify-content-center"], ["class", "col-lg-3 card primary-card border-0", "style", "border-radius: 10px;", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "card", "primary-card", "border-0", 2, "border-radius", "10px", 3, "click"], [1, "card-img-top", 2, "width", "200px", "border-radius", "10px", 3, "src"], [1, "card-img-overlay", "d-flex", "flex-column", "overlay-primary", 3, "ngClass", "id"], [1, "card-title", "mt-auto", 2, "color", "white", "bottom", "0", "padding-left", "10px", 3, "id"], [2, "text-align", "center", "height", "80vh"]], template: function MylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MylistComponent_div_0_Template, 6, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_div_1_Template, 5, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.watchlist_empty_yn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.watchlist_empty_yn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["[_nghost-%COMP%]     .carousel-control-next {\n    width: 5%;\n}\n[_nghost-%COMP%]     .carousel-control-prev {\n    width: 5%;\n}\n\n[_nghost-%COMP%]     .primary-card {\n    margin: 10px;\n    width: 200px;\n    padding: 0px;\n}\n[_nghost-%COMP%]     .overlay-primary {\n    max-width: 200px;\n    \n    padding: 0px;\n}\n\n.card[_ngcontent-%COMP%]:hover   .card-img-overlay[_ngcontent-%COMP%] {\n    opacity: 1;\n}\n.card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    transform: scale(1.05);\n}\n\n.non-phone-screen[_ngcontent-%COMP%] {\n    opacity: 0;\n}\n.phone-screen[_ngcontent-%COMP%] {\n    opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjtBQUNuQjtJQUNJLFNBQVM7QUFDYjtBQUVBO0lBQ0ksU0FBUztBQUNiO0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6Im15bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR0xPQkFMIFNUWUxJTkcgKi9cbjpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgICB3aWR0aDogNSU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgICB3aWR0aDogNSU7XG59XG5cbi8qIE1ZTElTVCBTVFlMSU5HICovXG46aG9zdCA6Om5nLWRlZXAgLnByaW1hcnktY2FyZCB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAub3ZlcmxheS1wcmltYXJ5IHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIC8qIG9wYWNpdHk6IDA7ICovXG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4vKiBOT04tTU9CSUxFIFNUWUxJTkcgKi9cbi5jYXJkOmhvdmVyIC5jYXJkLWltZy1vdmVybGF5IHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uY2FyZDpob3ZlciBpbWcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi8qIE1PQklMRSBTVFlMSU5HICovXG4ubm9uLXBob25lLXNjcmVlbiB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnBob25lLXNjcmVlbiB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuIl19 */"] });


/***/ }),

/***/ "6MaC":
/*!*********************************************************************!*\
  !*** ./src/app/components/movie-reviews/movie-reviews.component.ts ***!
  \*********************************************************************/
/*! exports provided: MovieReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieReviewsComponent", function() { return MovieReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function MovieReviewsComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", review_r2.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", review_r2.author, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2605 ", review_r2.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", review_r2.author, " on ", ctx_r1.written_by_datetime[i_r3], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r2.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", review_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MovieReviewsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reviews\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MovieReviewsComponent_div_0_div_7_Template, 20, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.len_reviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.reviews);
} }
class MovieReviewsComponent {
    constructor() {
        this.reviews = [];
        this.len_reviews = 0;
        this.reviews_empty_yn = true;
        this.written_by_datetime = [];
    }
    ngOnChanges() {
        this.len_reviews = this.reviews.length;
        if (this.len_reviews > 0) {
            this.reviews_empty_yn = false;
            this.reviews.forEach((review) => {
                // var date_raw = review.created_at.split('T')[0]
                var date_raw = new Date(review.created_at);
                var date_am_pm = "";
                var hours_0 = date_raw.getHours();
                var hours_1 = hours_0 % 12;
                if (Math.floor(hours_0 / 12) == 1) {
                    date_am_pm = "PM";
                }
                else {
                    date_am_pm = "AM";
                }
                let formatted_date = `${date_raw.toLocaleString('default', { month: 'long' })} ${date_raw.getDate()}, ${date_raw.getFullYear()}, ${hours_1}:${date_raw.getMinutes()}:${date_raw.getSeconds()} ${date_am_pm}`;
                this.written_by_datetime.push(formatted_date);
            });
        }
    }
}
MovieReviewsComponent.ɵfac = function MovieReviewsComponent_Factory(t) { return new (t || MovieReviewsComponent)(); };
MovieReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieReviewsComponent, selectors: [["app-movie-reviews"]], inputs: { reviews: "reviews" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [2, "color", "rgb(112,118,147)"], [1, "container-fluid"], ["class", "card", "style", "border-radius: 10px; margin: 20px;", 4, "ngFor", "ngForOf"], [1, "card", 2, "border-radius", "10px", "margin", "20px"], [1, "card-body", 2, "margin", "5px"], [1, "row"], [1, "col-md-2", 2, "padding-left", "20px"], [2, "max-width", "100px", "border-radius", "50%", 3, "src"], [1, "col-md-8"], [2, "font-size", "22px", "margin-bottom", "25px", "color", "black"], [1, "rounded-pill", 2, "background-color", "rgb(0,0,0)", "color", "white", "width", "40px"], [2, "font-size", "18px", "top", "50%"], [2, "color", "rgb(155,150,150)"], [1, "truncate-overflow", 2, "color", "black"], [3, "href"]], template: function MovieReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieReviewsComponent_div_0_Template, 8, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reviews_empty_yn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".truncate-overflow[_ngcontent-%COMP%] {   \n    display: -webkit-box;   \n    -webkit-line-clamp: 4;   \n    -webkit-box-orient: vertical;     \n    overflow: hidden; \n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLXJldmlld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJtb3ZpZS1yZXZpZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJ1bmNhdGUtb3ZlcmZsb3cgeyAgIFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94OyAgIFxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogNDsgICBcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAgICAgXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gfSJdfQ== */"] });


/***/ }),

/***/ "6cZ2":
/*!*******************************************************!*\
  !*** ./src/app/components/homepage/resize.service.ts ***!
  \*******************************************************/
/*! exports provided: ResizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeService", function() { return ResizeService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ResizeService {
    constructor() {
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    get onResize$() {
        return this.resizeSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    }
    onResize(size) {
        this.resizeSubject.next(size);
    }
}
ResizeService.ɵfac = function ResizeService_Factory(t) { return new (t || ResizeService)(); };
ResizeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ResizeService, factory: ResizeService.ɵfac });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CTpd":
/*!******************************************************!*\
  !*** ./src/app/components/youtube/youtube.module.ts ***!
  \******************************************************/
/*! exports provided: YoutubeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeModule", function() { return YoutubeModule; });
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _youtube_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube.component */ "pTb4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class YoutubeModule {
}
YoutubeModule.ɵfac = function YoutubeModule_Factory(t) { return new (t || YoutubeModule)(); };
YoutubeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: YoutubeModule });
YoutubeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_0__["YouTubePlayerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](YoutubeModule, { declarations: [_youtube_component__WEBPACK_IMPORTED_MODULE_1__["YoutubeComponent"]], imports: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_0__["YouTubePlayerModule"]], exports: [_youtube_component__WEBPACK_IMPORTED_MODULE_1__["YoutubeComponent"]] }); })();


/***/ }),

/***/ "POyx":
/*!***********************************************************!*\
  !*** ./src/app/components/moviepage/moviepage.service.ts ***!
  \***********************************************************/
/*! exports provided: MoviepageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviepageService", function() { return MoviepageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class MoviepageService {
    constructor(http) {
        this.http = http;
    }
    getMoviepage(movie_id, entity_type) {
        // var url = `http://localhost:8080/apis/watch/${entity_type}/${movie_id}` //TEST
        var url = `https://csci571-hw8-nodejs-2021sp.wl.r.appspot.com/apis/watch/${entity_type}/${movie_id}`; //PROD
        return this.http.get(url);
    }
}
MoviepageService.ɵfac = function MoviepageService_Factory(t) { return new (t || MoviepageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MoviepageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoviepageService, factory: MoviepageService.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.title = 'USC Films';
        titleService.setTitle('USC Films');
        metaService.addTags([
            { property: 'og:title', content: 'Angular with Node.js Movie Finder' },
            { property: 'og:url', content: 'https://csci571-hw8-nodejs-2021sp.wl.r.appspot.com/' },
            { property: 'og:description', content: 'Example of Node.js backend with Angular frontend capabilities using a pre-built API from TMDB. Assignment for USC CSCI 571 (Web Technologies), Spring 2021.' },
            { property: 'og:author', content: 'Mark Mann' },
            { property: 'og:image', content: 'https://csci571-hw6-assets.s3-us-west-1.amazonaws.com/csci_hw8_angular_node2.jpeg' }
        ]);
    }
    ;
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container-fluid", 2, "background-color", "rgb(5,8,51)", "color", "white", "min-height", "100vh", "height", "auto"], [1, "mt-auto"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Powered by TMDB. Developed by Mark Mann.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["@import \"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css\";\n\n\n\nfooter[_ngcontent-%COMP%] {\n    font-style: italic;\n    text-align: center;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVGQUF1Rjs7QUFFdkY7Ozs7OztHQU1HOztBQUVIO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjAuMC1iZXRhMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuXG4vKiA6aG9zdCA6Om5nLWRlZXAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsOCw1MSkgIWltcG9ydGFudDtcbn1cblxuLmJvZHliZy1jb2xvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsOCw1MSk7XG59ICovXG5cbmZvb3RlciB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogODBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "W3zJ":
/*!***************************************************************!*\
  !*** ./src/app/components/cast-modal/cast-modal.component.ts ***!
  \***************************************************************/
/*! exports provided: CastModalContent, CastModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastModalContent", function() { return CastModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastModalComponent", function() { return CastModalComponent; });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _castItem_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./castItem.service */ "s56G");






function CastModalContent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth: ", ctx_r0.birthdate, "");
} }
function CastModalContent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r1.birthplace, "");
} }
function CastModalContent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Gender: ", ctx_r2.gender, "");
} }
function CastModalContent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Known for: ", ctx_r3.known_for, "");
} }
function CastModalContent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r4.also_known_as, "");
} }
function CastModalContent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r5.imdb_page, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r5.imdb_square);
} }
function CastModalContent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r6.insta_page, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r6.insta_square);
} }
function CastModalContent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r7.fb_page, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r7.fb_square);
} }
function CastModalContent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r8.twitter_page, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r8.twitter_square);
} }
function CastModalContent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.biography);
} }
const _c0 = ".modal-dialog[_ngcontent-%COMP%]{\n    overflow-y: initial !important\n}\n.modal-body-md[_ngcontent-%COMP%]{\n    max-height: 80vh;\n    overflow-y: auto;\n}\n\n[_nghost-%COMP%]     .icon + .tooltip > .tooltip-inner {\n    background-color: white;\n    color: black;\n    border: black;\n}\n[_nghost-%COMP%]     .icon + .tooltip.top > .arrow {\n    border-top: white;\n}\n\n[_nghost-%COMP%]     .cast-detail {\n    margin: 0px;\n}\n[_nghost-%COMP%]     .icon {\n    margin: 3px\n}\n[_nghost-%COMP%]     .imdb-square {\n    color: rgb(233,181,0)\n}\n[_nghost-%COMP%]     .insta-square {\n    color: rgb(151,0,143)\n}\n[_nghost-%COMP%]     .twitter-square {\n    color: rgb(29, 162, 239)\n}\n[_nghost-%COMP%]     .fb-square {\n    color: rgb(34,0,255)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc3QtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVO0FBQ1Y7SUFDSTtBQUNKO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBSUEsWUFBWTtBQUNaO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoiY2FzdC1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTU9EQUwgKi9cbi5tb2RhbC1kaWFsb2d7XG4gICAgb3ZlcmZsb3cteTogaW5pdGlhbCAhaW1wb3J0YW50XG59XG4ubW9kYWwtYm9keS1tZHtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cblxuXG4vKiBUT09MVElQICovXG46aG9zdCA6Om5nLWRlZXAgLmljb24gKyAudG9vbHRpcCA+IC50b29sdGlwLWlubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiBibGFjaztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5pY29uICsgLnRvb2x0aXAudG9wID4gLmFycm93IHtcbiAgICBib3JkZXItdG9wOiB3aGl0ZTtcbn1cblxuLyogRVhURVJOQUwgSURTICovXG46aG9zdCA6Om5nLWRlZXAgLmNhc3QtZGV0YWlsIHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5pY29uIHtcbiAgICBtYXJnaW46IDNweFxufVxuXG46aG9zdCA6Om5nLWRlZXAgLmltZGItc3F1YXJlIHtcbiAgICBjb2xvcjogcmdiKDIzMywxODEsMClcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5pbnN0YS1zcXVhcmUge1xuICAgIGNvbG9yOiByZ2IoMTUxLDAsMTQzKVxufVxuXG46aG9zdCA6Om5nLWRlZXAgLnR3aXR0ZXItc3F1YXJlIHtcbiAgICBjb2xvcjogcmdiKDI5LCAxNjIsIDIzOSlcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5mYi1zcXVhcmUge1xuICAgIGNvbG9yOiByZ2IoMzQsMCwyNTUpXG59Il19 */";
//// COMP.CONTENT
class CastModalContent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.name = "";
        this.profile_path = "";
        this.birthdate = "";
        this.birthplace = "";
        this.gender = "";
        this.known_for = "";
        this.also_known_as = "";
        this.biography = "";
        /// EXTERNAL IDS
        this.imdb_page = "";
        this.insta_page = "";
        this.fb_page = "";
        this.twitter_page = "";
        this.imdb_square = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faImdb"];
        this.insta_square = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faInstagram"];
        this.fb_square = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFacebookSquare"];
        this.twitter_square = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTwitter"];
    }
}
CastModalContent.ɵfac = function CastModalContent_Factory(t) { return new (t || CastModalContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"])); };
CastModalContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CastModalContent, selectors: [["app-cast-modal-content"]], decls: 24, vars: 12, consts: [[2, "max-width", "1000px"], [1, "modal-header-md", 2, "border-bottom", "1px solid gainsboro"], [1, "modal-title", 2, "padding-top", "2vh", "padding-left", "1vw"], ["type", "button", "aria-label", "Close", 1, "close", 2, "margin-right", "1vw", 3, "click"], ["aria-hidden", "true"], [1, "modal-body-md"], [1, "container-fluid"], [1, "row", 2, "padding-top", "0.5vh"], [1, "col-md-4"], [2, "max-width", "250px", 3, "src"], [1, "col-md-7", 2, "margin", "0px"], ["class", "cast-detail", 4, "ngIf"], ["class", "icon", "style", "font-size: 40px", "placement", "top", "ngbTooltip", "Visit IMDB", 4, "ngIf"], ["class", "icon", "style", "font-size: 40px;", "data-toggle", "tooltip", "placement", "top", "ngbTooltip", "Visit Instagram", 4, "ngIf"], ["class", "icon", "style", "font-size: 40px", "placement", "top", "ngbTooltip", "Visit Facebook", 4, "ngIf"], ["class", "icon", "style", "font-size: 40px", "placement", "top", "ngbTooltip", "Visit Twitter", 4, "ngIf"], [1, "row"], ["class", "col-lg-12", "style", "margin: 0px; padding-bottom: 2vh;", 4, "ngIf"], [1, "cast-detail"], ["placement", "top", "ngbTooltip", "Visit IMDB", 1, "icon", 2, "font-size", "40px"], [3, "href"], [1, "imdb-square", 3, "icon"], ["data-toggle", "tooltip", "placement", "top", "ngbTooltip", "Visit Instagram", 1, "icon", 2, "font-size", "40px"], [1, "insta-square", 3, "icon"], ["placement", "top", "ngbTooltip", "Visit Facebook", 1, "icon", 2, "font-size", "40px"], [1, "fb-square", 3, "icon"], ["placement", "top", "ngbTooltip", "Visit Twitter", 1, "icon", 2, "font-size", "40px"], [1, "twitter-square", 3, "icon"], [1, "col-lg-12", 2, "margin", "0px", "padding-bottom", "2vh"]], template: function CastModalContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CastModalContent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CastModalContent_p_13_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CastModalContent_p_14_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CastModalContent_p_15_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CastModalContent_p_16_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CastModalContent_p_17_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CastModalContent_span_18_Template, 3, 2, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CastModalContent_span_19_Template, 3, 2, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CastModalContent_span_20_Template, 3, 2, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CastModalContent_span_21_Template, 3, 2, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CastModalContent_div_23_Template, 5, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.birthdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.birthplace);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.known_for);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.also_known_as);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imdb_page);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.insta_page);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fb_page);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.twitter_page);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.biography);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: [_c0] });
//// COMP.COMP
class CastModalComponent {
    constructor(modalService, castItemFullService) {
        this.modalService = modalService;
        this.castItemFullService = castItemFullService;
    }
    open(person_id) {
        //Get castItem for given person_id
        this.castItemFullService.getCastItemFull(person_id)
            .subscribe((data) => {
            //Pass the castItemFull to the modal
            var castItem = JSON.stringify(data);
            var castItem_person_json = JSON.parse(castItem).person;
            var castItem_eIds_json = JSON.parse(castItem).externalIds;
            //Initialize a modal object 
            const modalRef = this.modalService.open(CastModalContent, { 'size': 'lg' });
            modalRef.componentInstance.cast_item_modal = JSON.stringify(data);
            console.log({ "data in modal": modalRef.componentInstance.cast_item_modal });
            //Assign individual attributes
            modalRef.componentInstance.name = castItem_person_json.name;
            modalRef.componentInstance.profile_path = castItem_person_json.profile_path;
            modalRef.componentInstance.birthdate = castItem_person_json.birthday;
            modalRef.componentInstance.birthplace = castItem_person_json.birthplace;
            modalRef.componentInstance.gender = castItem_person_json.gender;
            modalRef.componentInstance.known_for = castItem_person_json.known_for;
            modalRef.componentInstance.also_known_as = castItem_person_json.also_known_as.join(', ');
            // External IDs
            if ("imdb_id" in castItem_eIds_json) {
                modalRef.componentInstance.imdb_page = castItem_eIds_json.imdb_id;
            }
            if ("instagram_id" in castItem_eIds_json) {
                modalRef.componentInstance.insta_page = castItem_eIds_json.instagram_id;
            }
            if ("facebook_id" in castItem_eIds_json) {
                modalRef.componentInstance.fb_page = castItem_eIds_json.facebook_id;
            }
            if ("twitter_id" in castItem_eIds_json) {
                modalRef.componentInstance.twitter_page = castItem_eIds_json.twitter_id;
            }
            //Biography
            modalRef.componentInstance.biography = castItem_person_json.biography;
        });
    }
}
CastModalComponent.ɵfac = function CastModalComponent_Factory(t) { return new (t || CastModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_castItem_service__WEBPACK_IMPORTED_MODULE_5__["CastItemFullService"])); };
CastModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CastModalComponent, selectors: [["app-cast-modal"]], decls: 0, vars: 0, template: function CastModalComponent_Template(rf, ctx) { }, styles: [_c0] });


/***/ }),

/***/ "YXUT":
/*!*************************************************************!*\
  !*** ./src/app/components/cast-list/cast-list.component.ts ***!
  \*************************************************************/
/*! exports provided: CastListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastListComponent", function() { return CastListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_components_cast_modal_cast_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/cast-modal/cast-modal.component */ "W3zJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CastListComponent_div_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cast_r1.character);
} }
function CastListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CastListComponent_div_2_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openCastModal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CastListComponent_div_2_span_7_Template, 6, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", cast_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", cast_r1.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cast_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cast_r1.character);
} }
class CastListComponent {
    constructor(http, castItemComponent) {
        this.http = http;
        this.castItemComponent = castItemComponent;
        this.cast_list = [];
        this.cast_modal_obj = {};
    }
    openCastModal(event) {
        let person_id = event.target.id;
        //Get the person_id details, then pass and render inside a pop-up modal
        this.castItemComponent.open(person_id);
    }
}
CastListComponent.ɵfac = function CastListComponent_Factory(t) { return new (t || CastListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_cast_modal_cast_modal_component__WEBPACK_IMPORTED_MODULE_2__["CastModalComponent"])); };
CastListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CastListComponent, selectors: [["app-cast-list"]], inputs: { cast_list: "cast_list" }, decls: 3, vars: 1, consts: [[1, "container-fluid"], [1, "row", "flex-row", "flex-nowrap", 2, "overflow-y", "hidden"], ["class", "card border-0", "style", "text-align: center; max-width: 220px; margin: 5px; padding: 0px; color: black;", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "border-0", 2, "text-align", "center", "max-width", "220px", "margin", "5px", "padding", "0px", "color", "black", 3, "click"], [1, "card-img-bottom", 3, "id", "src"], [1, "card-body", 2, "padding", "10px", "margin", "0px"], [4, "ngIf"]], template: function CastListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CastListComponent_div_2_Template, 8, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cast_list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_homepage_homepage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/homepage/homepage.service */ "3fDq");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_moviepage_moviepage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/moviepage/moviepage.service */ "POyx");
/* harmony import */ var _components_moviepage_moviepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/moviepage/moviepage.component */ "bq+H");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "6DPj");
/* harmony import */ var _components_multi_item_carousel_multi_item_carousel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/multi-item-carousel/multi-item-carousel.component */ "pLmR");
/* harmony import */ var _components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/typeahead/typeahead.component */ "kfdD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_youtube_youtube_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/youtube/youtube.module */ "CTpd");
/* harmony import */ var _components_local_storage_local_storage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/local-storage/local-storage.component */ "pTox");
/* harmony import */ var _components_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/local-storage/local-storage.service */ "rc3/");
/* harmony import */ var _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/movie-detail/movie-detail.component */ "bV9e");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _components_cast_list_cast_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/cast-list/cast-list.component */ "YXUT");
/* harmony import */ var _components_cast_modal_castItem_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/cast-modal/castItem.service */ "s56G");
/* harmony import */ var _components_cast_modal_cast_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/cast-modal/cast-modal.component */ "W3zJ");
/* harmony import */ var _components_movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/movie-reviews/movie-reviews.component */ "6MaC");
/* harmony import */ var _components_homepage_resize_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/homepage/resize.service */ "6cZ2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ "fXoL");



























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ providers: [
        _components_homepage_homepage_service__WEBPACK_IMPORTED_MODULE_8__["HomepageService"],
        _components_moviepage_moviepage_service__WEBPACK_IMPORTED_MODULE_10__["MoviepageService"],
        _components_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_18__["LocalStorageService"],
        _components_cast_modal_castItem_service__WEBPACK_IMPORTED_MODULE_22__["CastItemFullService"],
        _components_cast_modal_cast_modal_component__WEBPACK_IMPORTED_MODULE_23__["CastModalComponent"],
        _components_homepage_resize_service__WEBPACK_IMPORTED_MODULE_25__["ResizeService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _components_youtube_youtube_module__WEBPACK_IMPORTED_MODULE_16__["YoutubeModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
        _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_12__["MylistComponent"],
        _components_moviepage_moviepage_component__WEBPACK_IMPORTED_MODULE_11__["MoviepageComponent"],
        _components_multi_item_carousel_multi_item_carousel_component__WEBPACK_IMPORTED_MODULE_13__["MultiItemCarouselComponent"],
        _components_typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_14__["TypeaheadComponent"],
        _components_local_storage_local_storage_component__WEBPACK_IMPORTED_MODULE_17__["LocalStorageComponent"],
        _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_19__["MovieDetailComponent"],
        _components_cast_list_cast_list_component__WEBPACK_IMPORTED_MODULE_21__["CastListComponent"],
        _components_cast_modal_cast_modal_component__WEBPACK_IMPORTED_MODULE_23__["CastModalComponent"],
        _components_cast_modal_cast_modal_component__WEBPACK_IMPORTED_MODULE_23__["CastModalContent"],
        _components_movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_24__["MovieReviewsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _components_youtube_youtube_module__WEBPACK_IMPORTED_MODULE_16__["YoutubeModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"]] }); })();


/***/ }),

/***/ "bV9e":
/*!*******************************************************************!*\
  !*** ./src/app/components/movie-detail/movie-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _local_storage_local_storage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../local-storage/local-storage.component */ "pTox");



function MovieDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie_detail.tagline);
} }
function MovieDetailComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.year_rating_duration);
} }
function MovieDetailComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Genres:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.genres_str, "");
} }
function MovieDetailComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Spoken Languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.langs_str, "");
} }
class MovieDetailComponent {
    constructor() {
        this.entity_type = "";
        this.movie_detail = {
            name: "",
            tagline: "",
            release_year: "",
            vote_average: "",
            duration_mins: "",
            genres: [],
            spoken_languages: []
        };
        this.release_year = "";
        this.duration_hours = "";
        this.year_rating_duration = "";
        this.genres_str = "";
        this.langs_str = "";
    }
    ngOnChanges() {
        var movie_det = JSON.stringify(this.movie_detail);
        var movie_det_obj = JSON.parse(movie_det);
        if (this.movie_detail.name != undefined) {
            //Convert duration mins to hours
            if (movie_det_obj.runtime != 0) {
                var runtime_mins = movie_det_obj.runtime;
                var hours = Math.floor(runtime_mins / 60);
                var mins = runtime_mins % 60;
                if (hours != 0) {
                    this.duration_hours = `${hours}hrs ${mins}mins`;
                }
                else {
                    this.duration_hours = `${mins}mins`;
                }
                console.log({ "duration_new": this.duration_hours });
            }
            // Parse release_date differently based on 'movie' or 'tv'
            if (this.entity_type == "movie") {
                this.release_year = movie_det_obj.release_date.split('-')[0];
            }
            else if (this.entity_type == "tv") {
                this.release_year = movie_det_obj.first_air_date.split('-')[0];
            }
            // Concatenate release_year + vote_average + duration_hours
            var holder = [];
            if (this.release_year != "") {
                holder.push(this.release_year);
            }
            if (movie_det_obj.vote_average != 0) {
                holder.push(`★ ${movie_det_obj.vote_average.toString()}`);
            }
            if (movie_det_obj.runtime != 0) {
                holder.push(this.duration_hours);
            }
            this.year_rating_duration = holder.join(' | ');
            console.log(this.year_rating_duration);
            //Unwrap the genres into a string
            if (movie_det_obj.genres.length != 0) {
                this.genres_str = movie_det_obj.genres.join(', ');
            }
            //Unwrap languages into a string
            if (movie_det_obj.spoken_languages.length != 0) {
                this.langs_str = movie_det_obj.spoken_languages.join(', ');
            }
        }
    }
}
MovieDetailComponent.ɵfac = function MovieDetailComponent_Factory(t) { return new (t || MovieDetailComponent)(); };
MovieDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailComponent, selectors: [["app-movie-detail"]], inputs: { entity_type: "entity_type", movie_detail: "movie_detail" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 10, vars: 7, consts: [[1, "container-fluid", 2, "padding", "0px"], [1, "row"], [2, "font-size", "40px"], ["class", "row", 4, "ngIf"], [3, "movie_details", "entity_type"], [2, "font-size", "20px", "font-style", "italic"], [2, "font-size", "20px"], [2, "font-size", "16px"]], template: function MovieDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MovieDetailComponent_div_4_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MovieDetailComponent_div_5_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MovieDetailComponent_div_6_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MovieDetailComponent_div_7_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-local-storage", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie_detail.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie_detail.tagline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.year_rating_duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.genres_str);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.langs_str);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie_details", ctx.movie_detail)("entity_type", ctx.entity_type);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _local_storage_local_storage_component__WEBPACK_IMPORTED_MODULE_2__["LocalStorageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3ZpZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "bq+H":
/*!*************************************************************!*\
  !*** ./src/app/components/moviepage/moviepage.component.ts ***!
  \*************************************************************/
/*! exports provided: MoviepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviepageComponent", function() { return MoviepageComponent; });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _moviepage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moviepage.service */ "POyx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "rc3/");
/* harmony import */ var _youtube_youtube_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../youtube/youtube.component */ "pTb4");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../movie-detail/movie-detail.component */ "bV9e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _cast_list_cast_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cast-list/cast-list.component */ "YXUT");
/* harmony import */ var _movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../movie-reviews/movie-reviews.component */ "6MaC");
/* harmony import */ var _multi_item_carousel_multi_item_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../multi-item-carousel/multi-item-carousel.component */ "pLmR");












function MoviepageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.details.overview);
} }
function MoviepageComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-multi-item-carousel", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Recommended ", ctx_r1.entity_type_pretty, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("movies_list_raw", ctx_r1.recommended)("primary_page_yn", ctx_r1.primary_page_yn);
} }
function MoviepageComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-multi-item-carousel", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Similar ", ctx_r2.entity_type_pretty, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("movies_list_raw", ctx_r2.similar)("primary_page_yn", ctx_r2.primary_page_yn);
} }
class MoviepageComponent {
    constructor(moviepageService, route, localStorageService) {
        this.moviepageService = moviepageService;
        this.route = route;
        this.localStorageService = localStorageService;
        this.holder = {};
        this.preview_video = {};
        this.details = {};
        this.credits = [];
        this.reviews = [];
        this.entity_type = "";
        this.entity_type_pretty = "";
        this.youtube_page = "";
        this.fb_share_page = "";
        this.fb_square = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFacebookSquare"];
        this.twitter_share_page = "";
        this.twitter_square = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTwitter"];
        this.similar_empty_yn = true;
        this.recommended_empty_yn = true;
        this.similar = [];
        this.recommended = [];
        this.primary_page_yn = false;
    }
    ngOnInit() {
        var movie_id = this.route.snapshot.paramMap.get("tmdb_id");
        // Will trigger whenver the tmdb_id in route changes
        this.route.params.subscribe(routeParams => {
            console.log("arrived at this page");
            // Get entity_type
            this.entity_type = window.location.pathname.split("/")[2];
            // Map into entity_type_pretty
            if (this.entity_type == "movie") {
                this.entity_type_pretty = "Movies";
            }
            else if (this.entity_type == "tv") {
                this.entity_type_pretty = "TV Shows";
            }
            this.moviepageService.getMoviepage(routeParams.tmdb_id, this.entity_type)
                .subscribe((data) => {
                // Assign data to class properties
                this.holder = data;
                this.preview_video = data.video;
                this.details = data.detail;
                this.credits = data.credits;
                this.reviews = data.reviews;
                // Shareable links
                this.youtube_page = encodeURIComponent(`https://www.youtube.com/watch?v=${this.preview_video.key}`);
                this.fb_share_page = `https://www.facebook.com/sharer/sharer.php?u=${this.youtube_page}`;
                this.twitter_share_page = `https://twitter.com/intent/tweet?text=Watch%20${encodeURI(this.details.name)}%20${this.youtube_page}&hashtags=USC,CSCI571,FightOn`;
                //Recommendations
                this.similar = data.similar;
                this.recommended = data.recommended;
                //// SET EMPTY_YN FLAGS
                if (this.similar.length != 0) {
                    this.similar_empty_yn = false;
                }
                else {
                    this.similar_empty_yn = true;
                }
                if (this.recommended.length != 0) {
                    this.recommended_empty_yn = false;
                }
                else {
                    this.recommended_empty_yn = true;
                }
                //// ADD TO LRU_CACHE HERE
                this.addMovieToLRU();
            });
        });
    }
    addMovieToLRU() {
        ///PARAMETERS
        var max_lru_length = 24;
        var item_to_add = { "id": this.details.tmdb_id,
            "name": this.details.name,
            "entity_type": this.entity_type,
            "poster_path": this.details.poster_path
        };
        var lru_cache = this.localStorageService.get("lru_cache");
        //// LRU EXISTS
        if (lru_cache != null) {
            // Check if the curret movie is in lru
            var i;
            var idx = 1000;
            var result = [];
            for (i = 0; i < lru_cache.length; i++) {
                var record = lru_cache[i];
                if (record.id == this.details.tmdb_id && record.entity_type == this.entity_type) {
                    idx = i;
                    result.push(record);
                    break;
                }
            }
            //// MOVIE IN LRU
            if (result.length > 0) {
                //Pop movie from LRU
                //Add movie to left part of LRU
                var new_val = lru_cache;
                new_val.splice(idx, 1);
                new_val.splice(0, 0, result[0]);
                this.localStorageService.set("lru_cache", new_val);
            }
            //// MOVIE NOT IN LRU
            else {
                //// LRU IS FULL
                if (lru_cache.length == max_lru_length) {
                    var new_val = lru_cache;
                    new_val.pop();
                    new_val.splice(0, 0, item_to_add);
                    this.localStorageService.set("lru_cache", new_val);
                }
                //// LRU IS NOT FULL
                else {
                    var new_val = lru_cache;
                    new_val.splice(0, 0, item_to_add);
                    this.localStorageService.set("lru_cache", new_val);
                }
            }
            //// LRU DOES NOT EXIST
        }
        else {
            var lru_cache_new = [{ "id": this.details.tmdb_id,
                    "name": this.details.name,
                    "entity_type": this.entity_type,
                    "poster_path": this.details.poster_path
                }];
            this.localStorageService.set("lru_cache", lru_cache_new);
        }
    }
}
MoviepageComponent.ɵfac = function MoviepageComponent_Factory(t) { return new (t || MoviepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_moviepage_service__WEBPACK_IMPORTED_MODULE_2__["MoviepageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"])); };
MoviepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MoviepageComponent, selectors: [["app-moviepage"]], decls: 30, vars: 12, consts: [["id", "fb-root"], [1, "container"], [1, "row", 2, "margin-top", "5vh"], [1, "col-md-8"], [3, "video_data"], [1, "col-md-4"], [3, "movie_detail", "entity_type"], [1, "row"], ["style", "padding-bottom: 20px;", 4, "ngIf"], [2, "font-size", "26px"], [2, "font-size", "40px"], [3, "href"], [1, "twitter-square", 2, "padding", "5px", 3, "icon"], [1, "fb-square", 2, "padding", "5px", 3, "icon"], [3, "cast_list"], [3, "reviews"], [4, "ngIf"], [2, "padding-bottom", "20px"], [3, "movies_list_raw", "primary_page_yn"]], template: function MoviepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-youtube", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-movie-detail", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MoviepageComponent_div_8_Template, 6, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Full Cast & Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "app-cast-list", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "app-movie-reviews", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MoviepageComponent_div_27_Template, 4, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, MoviepageComponent_div_29_Template, 4, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("video_data", ctx.preview_video);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("movie_detail", ctx.details)("entity_type", ctx.entity_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.details.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.twitter_share_page, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.twitter_square);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.fb_share_page, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.fb_square);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cast_list", ctx.credits);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("reviews", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.recommended_empty_yn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.similar_empty_yn);
    } }, directives: [_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_5__["YoutubeComponent"], _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"], _cast_list_cast_list_component__WEBPACK_IMPORTED_MODULE_9__["CastListComponent"], _movie_reviews_movie_reviews_component__WEBPACK_IMPORTED_MODULE_10__["MovieReviewsComponent"], _multi_item_carousel_multi_item_carousel_component__WEBPACK_IMPORTED_MODULE_11__["MultiItemCarouselComponent"]], styles: ["[_nghost-%COMP%]     .twitter-square {\n    color: rgb(29, 162, 239)\n}\n\n[_nghost-%COMP%]     .fb-square {\n    color: rgb(34,0,255)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoibW92aWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnR3aXR0ZXItc3F1YXJlIHtcbiAgICBjb2xvcjogcmdiKDI5LCAxNjIsIDIzOSlcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5mYi1zcXVhcmUge1xuICAgIGNvbG9yOiByZ2IoMzQsMCwyNTUpXG59Il19 */"] });


/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../typeahead/typeahead.component */ "kfdD");





const _c0 = function (a0) { return { "collapse": a0, "navbar-collapse": true }; };
class NavBarComponent {
    constructor() {
        this.title = "USC Films";
        this.collapsed = true;
    }
    ngOnInit() {
    }
    toggleCollapsed() {
        console.log("click");
        this.collapsed = !this.collapsed;
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 18, vars: 3, consts: [[1, "navbar", "navbar-expand-lg"], ["routerLink", "/", 1, "navbar-brand", 2, "font-size", "26px", "color", "white"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-dark", 2, "color", "white", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngClass"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "/", 1, "nav-link", 2, "text-align", "right", "color", "white"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "/mylist", 1, "nav-link", 2, "text-align", "right", "color", "white"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", 2, "right", "0"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_3_listener() { return ctx.toggleCollapsed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-typeahead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.collapsed));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _typeahead_typeahead_component__WEBPACK_IMPORTED_MODULE_4__["TypeaheadComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "kHmC":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: SCREEN_SIZE, HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_SIZE", function() { return SCREEN_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _homepage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.service */ "3fDq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "rc3/");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _multi_item_carousel_multi_item_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../multi-item-carousel/multi-item-carousel.component */ "pLmR");








const _c0 = function (a0) { return [a0]; };
function HomepageComponent_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_3_ng_template_0_Template_div_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.gotoMoviePage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_3_ng_template_0_Template_h3_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.gotoMoviePage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", movie_r3.entity_type, "-", movie_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", movie_r3.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r5.small_screen_yn ? "phone-screen" : "non-phone-screen"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", movie_r3.entity_type, "-", movie_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r3.name);
} }
function HomepageComponent_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomepageComponent_3_ng_template_0_Template, 9, 9, "ng-template", 9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} }
function HomepageComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-multi-item-carousel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies_list_raw", ctx_r10.continue_watching);
} }
function HomepageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomepageComponent_div_4_div_3_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lru_not_empty);
} }
function HomepageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Popular Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-multi-item-carousel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies_list_raw", ctx_r2.movies_popular);
} }
// An enum that define all screen sizes the application support
var SCREEN_SIZE;
(function (SCREEN_SIZE) {
    SCREEN_SIZE[SCREEN_SIZE["XS"] = 0] = "XS";
    SCREEN_SIZE[SCREEN_SIZE["SM"] = 1] = "SM";
    SCREEN_SIZE[SCREEN_SIZE["MD"] = 2] = "MD";
    SCREEN_SIZE[SCREEN_SIZE["LG"] = 3] = "LG";
    SCREEN_SIZE[SCREEN_SIZE["XL"] = 4] = "XL";
})(SCREEN_SIZE || (SCREEN_SIZE = {}));
class HomepageComponent {
    constructor(homepageService, router, localStorageService, breakpointObserver) {
        this.homepageService = homepageService;
        this.router = router;
        this.localStorageService = localStorageService;
        this.breakpointObserver = breakpointObserver;
        this.holder = {};
        this.movies_now_playing = [];
        this.movies_popular = [];
        this.movies_top_rated = [];
        this.movies_trending = [];
        this.tv_popular = [];
        this.tv_top_rated = [];
        this.tv_trending = [];
        this.lru_not_empty = false;
        this.continue_watching = [];
        this.small_screen_yn = false;
        this.slides = [[]];
    }
    ngOnInit() {
        // Check if screen is smartphone
        // ASSUME: if screen is <500px that the device is smartphone
        this.breakpointObserver
            .observe(['(min-width: 500px)'])
            .subscribe((state) => {
            if (state.matches) {
                console.log('Viewport is 500px or over!');
                this.small_screen_yn = false;
            }
            else {
                console.log('Viewport is smaller than 500px!');
                this.small_screen_yn = true;
            }
        });
        this.homepageService.getHomepage()
            .subscribe((data) => {
            this.holder = data;
            this.movies_now_playing = data.head.now_playing;
            this.movies_popular = data.movie[0].popular;
            this.movies_top_rated = data.movie[1].top_rated;
            this.movies_trending = data.movie[2].trending;
            this.tv_popular = data.tv[0].popular;
            this.tv_top_rated = data.tv[1].top_rated;
            this.tv_trending = data.tv[2].trending;
            if ("lru_cache" in this.localStorageService.localStorage) {
                this.lru_not_empty = true;
                this.continue_watching = JSON.parse(this.localStorageService.localStorage["lru_cache"]);
            }
        });
    }
    gotoMoviePage(event) {
        let entityType_movieId = event.target.id;
        var entity_type = entityType_movieId.split("-")[0];
        var movie_id = entityType_movieId.split("-")[1];
        // console.log({"going to ": [entity_type, movie_id]})
        this.router.navigate([`/watch/${entity_type}/${movie_id}`]);
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_homepage_service__WEBPACK_IMPORTED_MODULE_1__["HomepageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 36, vars: 9, consts: [[1, "row", "justify-content-center"], [1, "col-xl-12"], [3, "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["class", "container-fluid", "style", "margin-left: 10vw; margin-right: 10vw;", 4, "ngIf"], [1, "container-fluid", 2, "margin-left", "10vw", "margin-right", "10vw"], [1, "row"], [1, "col-lg-10"], [3, "movies_list_raw"], ["ngbSlide", ""], ["Slide", ""], [1, "container"], [1, "card", "border-0"], [1, "picsum-img-wrapper", 3, "click"], [2, "width", "100%", "height", "auto", 3, "id", "src"], [1, "carousel-caption", 3, "ngClass"], [3, "id", "click"], [4, "ngIf"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomepageComponent_3_Template, 2, 0, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomepageComponent_div_4_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomepageComponent_div_5_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Top Rated Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-multi-item-carousel", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Trending Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-multi-item-carousel", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Popular TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-multi-item-carousel", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Top Rated TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-multi-item-carousel", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Trending TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-multi-item-carousel", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationIndicators", !ctx.small_screen_yn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies_now_playing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.continue_watching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movies_popular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies_list_raw", ctx.movies_top_rated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies_list_raw", ctx.movies_trending);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies_list_raw", ctx.tv_popular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies_list_raw", ctx.tv_top_rated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies_list_raw", ctx.tv_trending);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _multi_item_carousel_multi_item_carousel_component__WEBPACK_IMPORTED_MODULE_7__["MultiItemCarouselComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["[_nghost-%COMP%]     img {\n    \n    resize: both;\n    max-width: 1200px;\n}\nngb-carousel[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0;\n  padding-top: 55%; \n}\n.picsum-img-wrapper[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nngb-carousel[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n\n.non-phone-screen[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.phone-screen[_ngcontent-%COMP%] {\n  opacity: 1;\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CO0FBQ25CO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZ0JBQWdCLEVBQUUsa0NBQWtDO0FBQ3REO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7RUFDViwwQkFBMEI7QUFDNUIiLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdMT0JBTCBTVFlMSU5HICovXG46aG9zdCA6Om5nLWRlZXAgaW1nIHtcbiAgICAvKiB3aWR0aDogNzUwcHg7ICovXG4gICAgcmVzaXplOiBib3RoO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xufVxuXG5uZ2ItY2Fyb3VzZWwgLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogNTUlOyAvKiBLZWVwIHJhdGlvIGZvciA5MDB4NTAwIGltYWdlcyAqL1xufVxuXG4ucGljc3VtLWltZy13cmFwcGVyOmhvdmVyIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgb3BhY2l0eTogMTtcbn1cblxubmdiLWNhcm91c2VsIC5waWNzdW0taW1nLXdyYXBwZXI+aW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi8qIE5PTi1NT0JJTEUgU1RZTElORyAqL1xuLmNhcmQ6aG92ZXIgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLyogTU9CSUxFIFNUWUxJTkcgKi9cbi5ub24tcGhvbmUtc2NyZWVuIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnBob25lLXNjcmVlbiB7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuIl19 */"] });


/***/ }),

/***/ "kfdD":
/*!*************************************************************!*\
  !*** ./src/app/components/typeahead/typeahead.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchService, TypeaheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadComponent", function() { return TypeaheadComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







function TypeaheadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ngb-highlight", 4);
} if (rf & 2) {
    const r_r2 = ctx.result;
    const t_r3 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", r_r2["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("result", r_r2.name)("term", t_r3);
} }
//// MOVIE APP
// const SEARCH_URL = 'http://localhost:8080/apis/search/'; //TEST
const SEARCH_URL = 'https://csci571-hw8-nodejs-2021sp.wl.r.appspot.com/apis/search/'; //PROD
class SearchService {
    constructor(http) {
        this.http = http;
    }
    search(term) {
        if (term.length < 2) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        var url_full = `${SEARCH_URL}${term}`;
        var result = this.http.get(url_full)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response));
        // console.log({"search triggered": result})
        return result;
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac });
class TypeaheadComponent {
    constructor(_service, router) {
        this._service = _service;
        this.router = router;
        this.searching = false;
        this.searchFailed = false;
        // VERSION 2
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.searching = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(term => this._service.search(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
            // console.log("test") //Every time we search
            this.searchFailed = false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(() => {
            this.searchFailed = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
            this.searching = false;
            // console.log("apple") //Every time we search
        }));
        this.formatter = (x) => x.name;
        this.tmdb_id = "";
        this.media_type = "";
    }
    selectedItem(event) {
        // this.clickedItem = item
        this.tmdb_id = event.item.id;
        this.media_type = event.item.media_type;
        // console.log({"tmdb_id": this.tmdb_id,
        //               "media_type": this.media_type})
        // console.log(`/watch/${this.media_type}/${this.tmdb_id}`)
        this.router.navigate([`/watch/${this.media_type}/${this.tmdb_id}`]);
    }
}
TypeaheadComponent.ɵfac = function TypeaheadComponent_Factory(t) { return new (t || TypeaheadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
TypeaheadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TypeaheadComponent, selectors: [["app-typeahead"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([SearchService])], decls: 3, vars: 4, consts: [["style", "height: 100px;"], ["rt", ""], ["id", "typeahead-template", "type", "text", "placeholder", "Search", 1, "form-control", 2, "background-color", "rgb(5,8,51)", "color", "white", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "selectItem"], [1, "mr-1", 2, "width", "80px", 3, "src"], [3, "result", "term"]], template: function TypeaheadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TypeaheadComponent_ng_template_0_Template, 2, 3, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TypeaheadComponent_Template_input_ngModelChange_2_listener($event) { return ctx.model = $event; })("selectItem", function TypeaheadComponent_Template_input_selectItem_2_listener($event) { return ctx.selectedItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultTemplate", _r0)("inputFormatter", ctx.formatter);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbHighlight"]], styles: [".search-box[_ngcontent-%COMP%] {\n    width: 300px; \n    border-bottom-width: 4px; \n    border-bottom-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVhaGVhZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4QiwwQkFBMEI7QUFDOUI7O0FBRUE7OztHQUdHIiwiZmlsZSI6InR5cGVhaGVhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1ib3gge1xuICAgIHdpZHRoOiAzMDBweDsgXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNHB4OyBcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcbn1cblxuLyogLmRyb3Bkb3duLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1LDgsNTEpICFpbXBvcnRhbnQ7IFxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSAqL1xuIl19 */"] });


/***/ }),

/***/ "pLmR":
/*!*********************************************************************************!*\
  !*** ./src/app/components/multi-item-carousel/multi-item-carousel.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SCREEN_SIZE, MultiItemCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_SIZE", function() { return SCREEN_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiItemCarouselComponent", function() { return MultiItemCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return [a0]; };
const _c1 = function (a0, a1) { return [a0, a1]; };
function MultiItemCarouselComponent_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiItemCarouselComponent_1_ng_template_0_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r5.gotoMovieTvPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r3.primary_page_yn ? "primary-card" : "secondary-card"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", card_r4.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", card_r4.entity_type, "-", card_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, ctx_r3.primary_page_yn ? "overlay-primary" : "overlay-secondary", ctx_r3.small_screen_yn ? "phone-screen" : "non-phone-screen"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", card_r4.entity_type, "-", card_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r4.name);
} }
function MultiItemCarouselComponent_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiItemCarouselComponent_1_ng_template_0_div_1_Template, 5, 13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r1);
} }
function MultiItemCarouselComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiItemCarouselComponent_1_ng_template_0_Template, 2, 1, "ng-template", 2);
} }
// An enum that define all screen sizes the application support
var SCREEN_SIZE;
(function (SCREEN_SIZE) {
    SCREEN_SIZE[SCREEN_SIZE["XS"] = 0] = "XS";
    SCREEN_SIZE[SCREEN_SIZE["SM"] = 1] = "SM";
    SCREEN_SIZE[SCREEN_SIZE["MD"] = 2] = "MD";
    SCREEN_SIZE[SCREEN_SIZE["LG"] = 3] = "LG";
    SCREEN_SIZE[SCREEN_SIZE["XL"] = 4] = "XL";
})(SCREEN_SIZE || (SCREEN_SIZE = {}));
class MultiItemCarouselComponent {
    constructor(router, element, breakpointObserver) {
        this.router = router;
        this.element = element;
        this.breakpointObserver = breakpointObserver;
        this.movies_list_raw = [];
        this.primary_page_yn = true;
        this.slides = [[]];
        this.screenWidth = 0;
        this.card_class = "card-moviepage";
        this.card_img_class = "card-img-overlay-moviepage";
        this.small_screen_yn = false;
    }
    //Must wait until the homepage projects its data into this view
    ngOnChanges() {
        // Check if screen is smartphone
        // ASSUME: if screen is <500px that the device is smartphone
        this.breakpointObserver
            .observe(['(min-width: 500px)'])
            .subscribe((state) => {
            if (state.matches) {
                // console.log('Viewport is 500px or over!')
                this.small_screen_yn = false;
            }
            else {
                // console.log('Viewport is smaller than 500px!')
                this.small_screen_yn = true;
            }
        });
        if (this.movies_list_raw.length != 0) {
            // Get the client current width
            this.screenWidth = window.innerWidth;
            // Assign a chunk size based on client's current width
            var chunkSize = 1;
            if (this.screenWidth > 0 && this.screenWidth <= 650) {
                chunkSize = 1;
            }
            else if (this.screenWidth > 650 && this.screenWidth <= 900) {
                chunkSize = 2;
            }
            else if (this.screenWidth > 900 && this.screenWidth <= 1150) {
                chunkSize = 3;
            }
            else if (this.screenWidth > 1150 && this.screenWidth <= 1400) {
                chunkSize = 4;
            }
            else if (this.screenWidth > 1400) {
                chunkSize = 6;
            }
            // Chunk the slides according to the client's curent width
            let R = [];
            for (let i = 0, len = this.movies_list_raw.length; i < len; i += chunkSize) {
                R.push(this.movies_list_raw.slice(i, i + chunkSize));
            }
            this.slides = R;
        }
    }
    gotoMovieTvPage(event) {
        let entityType_movieId = event.target.id;
        var entity_type = entityType_movieId.split('-')[0];
        var movie_id = entityType_movieId.split('-')[1];
        // console.log({"going to ": [entity_type, movie_id]})
        this.router.navigate([`/watch/${entity_type}/${movie_id}`]);
    }
}
MultiItemCarouselComponent.ɵfac = function MultiItemCarouselComponent_Factory(t) { return new (t || MultiItemCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
MultiItemCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiItemCarouselComponent, selectors: [["app-multi-item-carousel"]], inputs: { movies_list_raw: "movies_list_raw", primary_page_yn: "primary_page_yn" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 3, consts: [[3, "interval", "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "justify-content-center"], ["class", "col-sm-2 card border-0", "style", "border-radius: 10px;", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-sm-2", "card", "border-0", 2, "border-radius", "10px", 3, "ngClass", "click"], [1, "card-img-top", 2, "width", "200px", "border-radius", "10px", 3, "src"], [1, "card-img-overlay", "d-flex", "flex-column", 3, "id", "ngClass"], [1, "card-title", "mt-auto", 2, "color", "white", "margin-left", "10px", 3, "id"]], template: function MultiItemCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiItemCarouselComponent_1_Template, 1, 0, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0)("showNavigationIndicators", !ctx.small_screen_yn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["[_nghost-%COMP%]     .carousel-control-next {\n    width: 5%;\n}\n[_nghost-%COMP%]     .carousel-control-prev {\n    width: 5%;\n}\n[_nghost-%COMP%]     .carousel-inner { \n    margin-bottom: 50px;\n}\n[_nghost-%COMP%]     .carousel-indicators { \n    bottom:-50px;\n}\n\n[_nghost-%COMP%]     .primary-card {\n    margin: 10px;\n    width: 200px;\n    padding: 0px;\n}\n[_nghost-%COMP%]     .overlay-primary {\n    max-width: 200px;\n    padding: 0px;\n}\n\n[_nghost-%COMP%]     .secondary-card {\n    margin: 42px;\n    width: 125px;\n    padding: 0px;\n}\n[_nghost-%COMP%]     .overlay-secondary {\n    width: 200px;\n    padding: 0px;\n}\n\n.card[_ngcontent-%COMP%]:hover   .card-img-overlay[_ngcontent-%COMP%] {\n    background-color: black;\n    transform: scale(1.05);\n    opacity: 0.7;\n}\n.card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    transform: scale(1.05);\n    opacity: 0.7;\n}\n\n.non-phone-screen[_ngcontent-%COMP%] {\n    opacity: 0;\n}\n.phone-screen[_ngcontent-%COMP%] {\n    opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpLWl0ZW0tY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7SUFDSSxTQUFTO0FBQ2I7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoibXVsdGktaXRlbS1jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR0xPQkFMIFNUWUxJTkcgKi9cbjpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgICB3aWR0aDogNSU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgICB3aWR0aDogNSU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2Fyb3VzZWwtaW5uZXIgeyBcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcm91c2VsLWluZGljYXRvcnMgeyBcbiAgICBib3R0b206LTUwcHg7XG59XG5cbi8qIEhPTUVQQUdFIFNUWUxJTkcgKi9cbjpob3N0IDo6bmctZGVlcCAucHJpbWFyeS1jYXJkIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5vdmVybGF5LXByaW1hcnkge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4vKiBNT1ZJRVBBR0UgU1RZTElORyAqL1xuOmhvc3QgOjpuZy1kZWVwIC5zZWNvbmRhcnktY2FyZCB7XG4gICAgbWFyZ2luOiA0MnB4O1xuICAgIHdpZHRoOiAxMjVweDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAub3ZlcmxheS1zZWNvbmRhcnkge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi8qIE5PTi1NT0JJTEUgU1RZTElORyAqL1xuLmNhcmQ6aG92ZXIgLmNhcmQtaW1nLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4uY2FyZDpob3ZlciBpbWcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4vKiBNT0JJTEUgU1RZTElORyAqL1xuLm5vbi1waG9uZS1zY3JlZW4ge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5waG9uZS1zY3JlZW4ge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "pTb4":
/*!*********************************************************!*\
  !*** ./src/app/components/youtube/youtube.component.ts ***!
  \*********************************************************/
/*! exports provided: YoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeComponent", function() { return YoutubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");


const _c0 = ["YouTubePlayer"];
class YoutubeComponent {
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.video_data = {};
        this.onResize = () => {
            // Automatically expand the video to fit the page up to 1000px width
            this.videoWidth = Math.min(this.YouTubePlayer.nativeElement.clientWidth, 1000);
            this.videoHeight = this.videoWidth * 0.6;
            this._changeDetectorRef.detectChanges();
        };
    }
    ngOnChanges() {
        if ("key" in this.video_data) {
            // console.log("creating youtube vid");
            // console.log(this.video_data);
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(tag);
        }
    }
    ngAfterViewInit() {
        this.onResize();
        window.addEventListener('resize', this.onResize);
    }
}
YoutubeComponent.ɵfac = function YoutubeComponent_Factory(t) { return new (t || YoutubeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
YoutubeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YoutubeComponent, selectors: [["app-youtube"]], viewQuery: function YoutubeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.YouTubePlayer = _t.first);
    } }, inputs: { video_data: "video_data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [["YouTubePlayer", ""], [3, "videoId", "width", "height"]], template: function YoutubeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "youtube-player", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", ctx.video_data.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.videoWidth)("height", ctx.videoHeight);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__["YouTubePlayer"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ5b3V0dWJlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "pTox":
/*!*********************************************************************!*\
  !*** ./src/app/components/local-storage/local-storage.component.ts ***!
  \*********************************************************************/
/*! exports provided: LocalStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageComponent", function() { return LocalStorageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.service */ "rc3/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




const _c0 = ["addAlert"];
const _c1 = ["removeAlert"];
function LocalStorageComponent_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-alert", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function LocalStorageComponent_div_3_p_1_Template_ngb_alert_closed_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const alert_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.close(alert_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", alert_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](alert_r2.message);
} }
function LocalStorageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LocalStorageComponent_div_3_p_1_Template, 3, 2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.alerts);
} }
const ALERTS = [];
class LocalStorageComponent {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
        this.movie_details = {};
        this.entity_type = "";
        this.alerts = [];
        this.alerts_empty_yn = true;
        this.current_movie_in_watchlist_yn = "0";
        this.current_movie_key = "";
        this.button_text = "";
    }
    closeAlert(event) {
        var alert_id = event.target.id;
        if (alert_id = "add_item") {
            this.addAlert.nativeElement.classList.remove('show');
        }
        if (alert_id = "remove_item") {
            this.removeAlert.nativeElement.classList.remove('show');
        }
        this.alerts_empty_yn = true;
    }
    close(alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
    // Absorb incoming data from moviepage
    ngOnChanges() {
        if (Object.keys(this.movie_details).length > 0) { //Triggers when loading input data from moviepage
            var len_storage = this.localStorageService.localStorage.length;
            // The watchlist doesn't exist
            if (!("watchlist" in this.localStorageService.localStorage)) {
                this.current_movie_in_watchlist_yn = "0";
                this.button_text = "Add to Watchlist";
            }
            // The watchlist exists
            else {
                var temp_val = JSON.parse(this.localStorageService.localStorage.getItem("watchlist"));
                var result = temp_val.filter((record) => record.id == this.movie_details.tmdb_id && record.entity_type == this.entity_type);
                if (result.length == 0) { //RECORD DOES NOT EXIST
                    this.current_movie_in_watchlist_yn = "0";
                    this.button_text = "Add to Watchlist";
                }
                else { //RECORD EXISTS
                    this.current_movie_in_watchlist_yn = "1";
                    this.button_text = "Remove from Watchlist";
                }
            }
        }
    }
    putMoviev2() {
        // console.log(this.localStorageService.localStorage.length)
        // var len_storage: number = this.localStorageService.localStorage.length
        // var key = "watchlist"
        var watchlist = this.localStorageService.get("watchlist");
        // NO WATCHLIST
        if (watchlist == null) {
            var value = [{ "id": this.movie_details.tmdb_id,
                    "name": this.movie_details.name,
                    "entity_type": this.entity_type,
                    "poster_path": this.movie_details.poster_path
                }];
            this.localStorageService.set("watchlist", value);
            // PRE-EXISTING WATCHLIST
        }
        else {
            var temp_val = watchlist;
            var result = temp_val.filter((record) => record.id == this.movie_details.tmdb_id && record.entity_type == this.entity_type);
            if (result.length == 0) { //RECORD DOES NOT EXIST
                var record = { "id": this.movie_details.tmdb_id,
                    "name": this.movie_details.name,
                    "entity_type": this.entity_type,
                    "poster_path": this.movie_details.poster_path
                };
                temp_val.splice(0, 0, record);
                this.localStorageService.set("watchlist", temp_val);
            }
        }
        this.button_text = "Remove from Watchlist";
    }
    removeMoviev2() {
        var watchlist = this.localStorageService.get("watchlist");
        // No watchlist to remove items from.
        if (watchlist == null) {
        }
        else {
            var watchlist_prev = watchlist;
            var watchlist_new = watchlist_prev.filter((record) => record.id != this.movie_details.tmdb_id || record.entity_type != this.entity_type);
            if (watchlist_new.length == 0) {
                this.localStorageService.remove("watchlist");
            }
            else {
                this.localStorageService.set("watchlist", watchlist_new);
            }
        }
        this.button_text = "Add to Watchlist";
    }
    finalButton() {
        if (this.button_text == "Remove from Watchlist") {
            this.removeMoviev2();
            var alert_to_send = { type: 'secondary', message: 'Removed from Watchlist.' };
            this.alerts.push(alert_to_send);
            this.alerts_empty_yn = false;
        }
        else if (this.button_text == "Add to Watchlist") {
            this.putMoviev2();
            var alert_to_send = { type: 'success', message: 'Added to Watchlist.' };
            this.alerts.push(alert_to_send);
            this.alerts_empty_yn = false;
        }
    }
    clearWatchList() {
        this.localStorageService.clear();
        console.log(this.localStorageService.localStorage);
    }
}
LocalStorageComponent.ɵfac = function LocalStorageComponent_Factory(t) { return new (t || LocalStorageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"])); };
LocalStorageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocalStorageComponent, selectors: [["app-local-storage"]], viewQuery: function LocalStorageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addAlert = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.removeAlert = _t.first);
    } }, inputs: { movie_details: "movie_details", entity_type: "entity_type" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [["id", "button-5", "type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "type", "closed"]], template: function LocalStorageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocalStorageComponent_Template_button_click_0_listener() { return ctx.finalButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LocalStorageComponent_div_3_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.button_text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.alerts_empty_yn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlert"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhbC1zdG9yYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "rc3/":
/*!*******************************************************************!*\
  !*** ./src/app/components/local-storage/local-storage.service.ts ***!
  \*******************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocalStorageService {
    constructor() {
        this.changes$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.localStorage = window.localStorage;
    }
    get(key) {
        if (this.isLocalStorageSupported) {
            return JSON.parse(this.localStorage.getItem(key));
        }
        return null;
    }
    set(key, value) {
        if (this.isLocalStorageSupported) {
            this.localStorage.setItem(key, JSON.stringify(value));
            return true;
        }
        return false;
    }
    remove(key) {
        if (this.isLocalStorageSupported) {
            this.localStorage.removeItem(key);
            return true;
        }
        return false;
    }
    clear() {
        this.localStorage.clear();
    }
    existsYn(key) {
        if (key in this.localStorage) {
            return true;
        }
        return false;
    }
    existsYnV2(entity_type, tmdb_id) {
        if ("watchlist" in this.localStorage) {
            console.log("watchlist exists");
            console.log(this.localStorage.getItem("watchlist"));
            var temp_val = this.localStorage.getItem("watchlist");
            if (temp_val.length == 0) {
                return false;
            }
            else {
                var result = JSON.parse(temp_val).filter((record) => record.tmdb_id == tmdb_id && record.entity_type == entity_type);
                if (result.length == 0) { //RECORD DOES NOT EXIST
                    return false;
                }
                return true;
            }
        }
        return false;
    }
    get isLocalStorageSupported() {
        return !!this.localStorage;
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "s56G":
/*!***********************************************************!*\
  !*** ./src/app/components/cast-modal/castItem.service.ts ***!
  \***********************************************************/
/*! exports provided: CastItemFullService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastItemFullService", function() { return CastItemFullService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CastItemFullService {
    constructor(http) {
        this.http = http;
    }
    // WORKING
    getCastItemFull(person_id) {
        // var cast_url = `http://localhost:8080/apis/person/${person_id}`; //TEST
        var cast_url = `https://csci571-hw8-nodejs-2021sp.wl.r.appspot.com/apis/person/${person_id}`; //PROD
        return this.http.get(cast_url);
    }
}
CastItemFullService.ɵfac = function CastItemFullService_Factory(t) { return new (t || CastItemFullService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CastItemFullService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CastItemFullService, factory: CastItemFullService.ɵfac });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "6DPj");
/* harmony import */ var _components_moviepage_moviepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/moviepage/moviepage.component */ "bq+H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"] },
    { path: 'mylist', component: _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__["MylistComponent"] },
    {
        path: 'watch',
        children: [
            { path: 'movie/:tmdb_id', component: _components_moviepage_moviepage_component__WEBPACK_IMPORTED_MODULE_3__["MoviepageComponent"] },
            { path: 'tv/:tmdb_id', component: _components_moviepage_moviepage_component__WEBPACK_IMPORTED_MODULE_3__["MoviepageComponent"] }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map