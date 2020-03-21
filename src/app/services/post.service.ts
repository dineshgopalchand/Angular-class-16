import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor(http: HttpClient) {
    const url = 'http://localhost:3016/posts/';
    super(http, url);
  }

}
export interface Post {
  'userId': number;
  'id'?: number;
  'title': string;
  'body'?: string;
}

