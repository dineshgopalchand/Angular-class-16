import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PostService, Post } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postList: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPost();
  }
  createPost(postForm: NgForm) {
    const formValue = postForm.value;
    const newPost = {
      userId: 1,
      title: formValue.posttitle,
      body: formValue.description
    };
    // console.log(newPost);
    this.postService.create(newPost)
      .subscribe(res => {
        // console.log(res as Post);
        this.postList.splice(0, 1, (res as Post));
        postForm.resetForm();
      });
  }

  getPost() {
    this.postService.getAll()
      .subscribe(data => {
        // console.log((data as Post[])[0].title);
        this.postList = data as Post[];
      });
  }

}

