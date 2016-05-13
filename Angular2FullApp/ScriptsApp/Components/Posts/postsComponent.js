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
var core_1 = require('@angular/core');
var postsService_1 = require('./../../Services/postsService');
var commentService_1 = require('./../../Services/commentService');
var personService_1 = require('./../../Services/personService');
var loadingSpinnerComponent_1 = require('./loadingSpinnerComponent');
var PostsComponent = (function () {
    function PostsComponent(postsSrv, commentSrv, personSrv) {
        this.postsSrv = postsSrv;
        this.commentSrv = commentSrv;
        this.personSrv = personSrv;
        this.isPostsLoading = false;
        this.isCommentLoading = false;
        this.posts = [];
        this.selectedPost = undefined;
        this.comments = [];
        this.users = [];
        this.selectedUserId = 0;
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personSrv.getUser()
            .subscribe(function (res) {
            _this.users = res;
            //this.selectedUserId = res[0].id;
            //this.loadPosts(this.selectedUserId);
        });
    };
    PostsComponent.prototype.loadPosts = function (userid) {
        var _this = this;
        this.isPostsLoading = true;
        this.posts = [];
        this.postsSrv.getPostsByUserId(this.selectedUserId).subscribe(function (res) {
            _this.posts = res;
        }, null, function () { _this.isPostsLoading = false; });
    };
    PostsComponent.prototype.userChanged = function () {
        console.log(this.selectedUserId);
        this.loadPosts(this.selectedUserId);
    };
    PostsComponent.prototype.selectPost = function (post) {
        var _this = this;
        this.selectedPost = post;
        this.comments = [];
        this.isCommentLoading = true;
        this.commentSrv.getCommentsForPostId(post.id)
            .subscribe(function (res) {
            _this.comments = res;
        }, null, function () { _this.isCommentLoading = false; });
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            templateUrl: "Templates/Posts",
            providers: [postsService_1.PostsService, commentService_1.CommentService, personService_1.PersonService],
            directives: [loadingSpinnerComponent_1.LoadingSpinnerComponent],
        }), 
        __metadata('design:paramtypes', [postsService_1.PostsService, commentService_1.CommentService, personService_1.PersonService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=postsComponent.js.map