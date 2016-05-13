import {Component, OnInit} from '@angular/core';
import {PostsService} from './../../Services/postsService';
import {CommentService} from './../../Services/commentService';
import {PersonService} from './../../Services/personService';
import {LoadingSpinnerComponent} from './loadingSpinnerComponent';
import {Post, Comment, User} from './../../TsClasses/JsonPlaceHolderClasses'


@Component({
    selector: 'posts',
    templateUrl: `Templates/Posts`,
    providers: [PostsService, CommentService, PersonService], //Dipendency Injection
    directives: [LoadingSpinnerComponent], //die verwendeten Direktiven
})
export class PostsComponent implements OnInit {
    public isPostsLoading: boolean = false;
    public isCommentLoading: boolean = false;

    public posts: Post[] = [];
    public selectedPost: Post = undefined;
    public comments: Comment[] = [];

    public users : User[]  = [];
    public selectedUserId : number = 0;

    constructor(private postsSrv: PostsService, private commentSrv: CommentService, private personSrv : PersonService) {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }

    public ngOnInit() {

        this.personSrv.getUser()
            .subscribe((res : User[])  => {
                this.users = res;
                //this.selectedUserId = res[0].id;
                //this.loadPosts(this.selectedUserId);
            });
    }

    public loadPosts(userid: number): void {
        this.isPostsLoading = true;
        this.posts = [];

        this.postsSrv.getPostsByUserId(this.selectedUserId).subscribe(res => {
            this.posts = res;
        }, null, () => { this.isPostsLoading = false; });
    }

    public userChanged(): void {
        console.log(this.selectedUserId);

        this.loadPosts(this.selectedUserId);
    }

    public selectPost(post: Post): void {
        this.selectedPost = post;
        this.comments = [];
        this.isCommentLoading = true;

        this.commentSrv.getCommentsForPostId(post.id)
            .subscribe(res => {
                this.comments = res;
            }, null, () => { this.isCommentLoading = false; });
    }
}