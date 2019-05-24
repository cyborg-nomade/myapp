/* -- old functionality posts
import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// import { POSTS } from '../mock-posts'; -- old mock

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
  }

  addPost(post: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Post>(
      'https://jsonplaceholder.typicode.com/posts',
      post,
      {
        headers
      }
    );
  }
}
*/
