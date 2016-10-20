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
var Rx_1 = require('rxjs/Rx');
//http://restlet.com/blog/2016/04/18/interacting-efficiently-with-a-restful-service-with-angular2-and-rxjs-part-3/
var CustomHttp = (function (_super) {
    __extends(CustomHttp, _super);
    function CustomHttp(backend, defaultOptions) {
        _super.call(this, backend, defaultOptions);
    }
    CustomHttp.prototype.request = function (url, options) {
        //console.log('Before the request...');
        return _super.prototype.request.call(this, url, options).map(function (res) {
            console.log(res.json());
            return res;
        })
            .catch(function (err) {
            console.log('On received an error...');
            return Rx_1.Observable.throw(err);
        })
            .finally(function () {
            console.log('After the request...');
        });
    };
    CustomHttp.prototype.get = function (url, options) {
        //console.log('Before the request...');
        return _super.prototype.get.call(this, url, options).map(function (res) {
            console.log(res.json());
            return res;
        })
            .catch(function (err) {
            console.log('On received an error...');
            return Rx_1.Observable.throw(err);
        })
            .finally(function () {
            console.log('After the request...');
        });
    };
    CustomHttp.prototype.post = function (url, body, options) {
        console.log('Before the request...');
        return _super.prototype.post.call(this, url, body, options)
            .catch(function (err) {
            if (err.status === 400 || err.status === 422) {
                return Rx_1.Observable.throw(err);
            }
            else {
                //this.errorService.notifyError(err);
                return Rx_1.Observable.empty();
            }
        })
            .finally(function () {
            console.log('After the request...');
        });
    };
    CustomHttp = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.ConnectionBackend, http_1.RequestOptions])
    ], CustomHttp);
    return CustomHttp;
}(http_1.Http));
exports.CustomHttp = CustomHttp;
//# sourceMappingURL=customHttp.js.map