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
var postsService_1 = require('./../../Services/postsService');
var loadingSpinnerComponent_1 = require('./loadingSpinnerComponent');
var PostsComponent = (function () {
    function PostsComponent(postsSrv) {
        this.postsSrv = postsSrv;
        this.posts = [];
        this.isLoading = false;
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.postsSrv.getAllPosts().subscribe(function (res) {
            _this.posts = res;
        }, null, function () { _this.isLoading = false; });
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            templateUrl: "Templates/Posts",
            providers: [postsService_1.PostsService],
            directives: [loadingSpinnerComponent_1.LoadingSpinnerComponent],
        }), 
        __metadata('design:paramtypes', [postsService_1.PostsService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=postsComponent.js.map