"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
        this.url = "http://jsonplaceholder.typicode.com/";
    }
    PersonService.prototype.getPerson = function (id) {
        return this.http.get("Person/GetPerson?id=" + id).map(function (res) { return res.json(); });
    };
    PersonService.prototype.getPosts = function () {
        return this.http.get(this.url + "posts").map(function (res) { return res.json(); });
    };
    PersonService.prototype.createPost = function (post) {
        //So einfach kann man aus einem Obserable ein Pormise machen
        return this.http.post(this.url, JSON.stringify(post)).map(function (res) { return res.json(); }).toPromise();
    };
    PersonService.prototype.getUser = function () {
        return this.http.get(this.url + "users").map(function (res) { return res.json(); });
    };
    PersonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
//# sourceMappingURL=personService.js.map