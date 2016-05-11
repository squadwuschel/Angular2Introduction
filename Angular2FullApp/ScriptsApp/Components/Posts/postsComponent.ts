import {Component, OnInit} from 'angular2/core';
import {PostsService} from './../../Services/postsService';
import {LoadingSpinnerComponent} from './loadingSpinnerComponent';
import {Post} from './../../TsClasses/JsonPlaceHolderClasses'


@Component({
    selector: 'posts',
    templateUrl: `Templates/Posts`,
    providers: [PostsService], //Dipendency Injection
    directives: [LoadingSpinnerComponent], //die verwendeten Direktiven
})
export class PostsComponent implements OnInit {
    public posts: Post[] = [];
    public isLoading: boolean = false;

    constructor(private postsSrv : PostsService) {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }

    public ngOnInit() {
        this.isLoading = true;
        this.postsSrv.getAllPosts().subscribe(res => {
            this.posts = res;
        }, null,() => { this.isLoading = false; });
    }
}