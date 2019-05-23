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
  text:string;
  posts:Post[];

  constructor(private _postService:PostService){
    
  }

  clicked (event) {
    console.log(event);
    this.text='Button clicked'
  }

  showText (event) {
    //console.log(event.target.value);
    console.log(this.text);
  }
}
