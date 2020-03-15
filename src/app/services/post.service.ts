import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'http://localhost:3016/posts/';
  constructor(private http: HttpClient) { }

  getAll() {
    // this.http.get<Post[]>('http://localhost:3016/posts/')
    return this.http.get(this.url);
  }
  create(post: Post) {
    return this.http.post(this.url, post);
  }
}
export interface Post {
  'userId': number;
  'id'?: number;
  'title': string;
  'body'?: string;
}

