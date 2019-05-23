import { Component } from '@angular/core';
import { Post } from './services/post';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostService]
})
export class AppComponent {
  text: string;
  posts: Post[];

  constructor(private postService: PostService) {
    this.postService.getPosts().then(posts => {
      this.posts = posts;
    });
  }

  clicked(event: any) {
    console.log(event);
    this.text = 'Button clicked';
  }

  showText(event: any) {
    // console.log(event.target.value);
    console.log(this.text);
  }
}
