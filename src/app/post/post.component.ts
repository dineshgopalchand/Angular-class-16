import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post, PostService } from '../services/post.service';
import { NotFoundErrors } from '../common/errors/not-found-error';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postList: Post[] = [];
  errorMessage = '';
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
      }, error => {
        // show  error to user
      }, () => {
        // add some action on completion
      });
  }

  getPost() {
    //
    // this.postService.getAll().toPromise().then(res=>{
    //   // console.log(res);
    //   this.postList = res as Post[];
    // })
    this.postService.getAll()
      .subscribe(data => {
        // console.log((data as Post[])[0].title);
        this.postList = data as Post[];
        console.log('subscription done');
      }, (error) => {
        console.log(error);
        // if(error.status===404){
        //   alert('requested API link is not available')
        // }else{
        //   alert('some unexpected errors');
        // }
        if (error instanceof NotFoundErrors) {
          this.errorMessage = 'unable to connect the API';
        }

      },
        () => {
          console.log('completed');
        }
      );
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
    // delete newPost.body;

    this.postService.update(newPost)
      .subscribe(updatedPost => {
        console.log(updatedPost);
        this.postList.splice(indexVal, 1, (updatedPost as Post));
      });
  }

}

