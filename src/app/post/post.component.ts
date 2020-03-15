import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postList: Post[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPost();
  }
  createPost(postForm: NgForm) {
    const formValue = postForm.value;
    const newPost = {
      userId: '1',
      title: formValue.posttitle,
      body: formValue.description
    };
    console.log(newPost);
    postForm.resetForm();
  }

  getPost() {
    // this.http.get<Post[]>('http://localhost:3016/posts/')
    this.http.get('http://localhost:3016/posts/')
      .subscribe(data => {
        // console.log((data as Post[])[0].title);
        this.postList = data as Post[];
      });
  }

}

export interface Post {
  'userId': number;
  'id': number;
  'title': string;
  'body'?: string;
}
