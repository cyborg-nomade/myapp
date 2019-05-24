import { Component } from '@angular/core';

// import { Post } from './components/services/post'; --old functionality posts
// import { PostService } from './components/services/post.service'; --old functionality posts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [PostService] --old functionality posts
})
export class AppComponent {
  // text: string; -- older functionality text alteration
  /* posts: Post[]; --old functionality posts
  title: string;
  body: string; */

  /* --old functionality posts
  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  addPost() {
    const newPost = {
      title: this.title,
      body: this.body
    };

    this.postService.addPost(newPost).subscribe(post => {
      this.posts.push(post);
    });
    return false;
  } */

  /* older functionality (click event tryouts)
  clicked(event: any) {
    console.log(event);
    this.text = 'Button clicked';
  }

  showText(event: any) {
    // console.log(event.target.value);
    console.log(this.text);
  }
  */
}
