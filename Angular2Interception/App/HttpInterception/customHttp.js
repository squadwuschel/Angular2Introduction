"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var httpSubject_service_1 = require('./httpSubject.service');
//http://restlet.com/blog/2016/04/18/interacting-efficiently-with-a-restful-service-with-angular2-and-rxjs-part-3/
var CustomHttp = (function (_super) {
    __extends(CustomHttp, _super);
    function CustomHttp(backend, defaultOptions, httpSubjectService) {
        _super.call(this, backend, defaultOptions);
        this.httpSubjectService = httpSubjectService;
    }
    CustomHttp.prototype.request = function (url, options) {
        var _this = this;
        this.httpSubjectService.addSpinner();
        return _super.prototype.request.call(this, url, options).map(function (res) {
            _this.httpSubjectService.addNotification(res.json());
            return res;
        })
            .catch(function (err) {
            _this.httpSubjectService.removeSpinner();
            _this.httpSubjectService.removeOverlay();
            if (err.status === 400 || err.status === 422) {
                _this.httpSubjectService.addHttp403(err);
                return Observable_1.Observable.throw(err);
            }
            else if (err.status === 500) {
                _this.httpSubjectService.addHttp500(err);
                return Observable_1.Observable.throw(err);
            }
            else {
                return Observable_1.Observable.empty();
            }
        })
            .finally(function () {
            // console.log('After the request...');
            _this.httpSubjectService.removeSpinner();
        });
    };
    CustomHttp = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.ConnectionBackend, http_1.RequestOptions, httpSubject_service_1.HttpSubjectService])
    ], CustomHttp);
    return CustomHttp;
}(http_1.Http));
exports.CustomHttp = CustomHttp;
//# sourceMappingURL=customHttp.js.map