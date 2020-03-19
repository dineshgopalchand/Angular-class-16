import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post, PostService } from '../services/post.service';

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
        this.postList.splice(0, 0, (res as Post));
        postForm.resetForm();
      });
  }

  getPost() {
    this.postService.getAll()
      .subscribe(data => {
        // console.log((data as Post[])[0].title);
        this.postList = data as Post[];
      }, error => {
        console.log(error);
      });
  }
  deletePost(post) {
    this.postService.delete(post)
      .subscribe(res => {
        const indexVal = this.postList.indexOf(post);
        this.postList.splice(indexVal, 1);
      });
  }
  updatePost(post: Post) {
    const newPost = post;
    const indexVal = this.postList.indexOf(post);
    newPost.title += '--';
    delete newPost.body;

    this.postService.update(newPost)
      .subscribe(updatedPost => {
        console.log(updatedPost);
        this.postList.splice(indexVal, 1, (updatedPost as Post));
      });
  }

}

