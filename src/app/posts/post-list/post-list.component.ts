import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  isLoading = false;
  private postSub: Subscription;


  constructor(public postsService: PostsService) {
    this.postsService = postsService;
  }

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    // Subscribe to updated data from post service
    this.postSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.isLoading = false;
      this.posts = posts;
    });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }


  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
