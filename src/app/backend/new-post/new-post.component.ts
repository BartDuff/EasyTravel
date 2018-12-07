import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PostService } from 'src/app/shared/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from 'src/app/shared/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  blogPost: Post;
  blogPosts: Post[];
  postForm: FormGroup;
  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<NewPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public postService: PostService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
    this.postsListSubscription();
  }

  postsListSubscription() {
    this.postService.getBlogPosts()
      .subscribe(data => this.blogPosts = data);
  }

  initializeForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      imgURL: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.blogPost = new Post();
      this.blogPost.title = this.postForm.value.title;
      this.blogPost.content = this.postForm.value.content;
      this.blogPost.imgURL = this.postForm.value.imgURL;
      this.blogPost.date_posted = new Date();
      let ids = [];
      for(var p of this.blogPosts){
        ids.push(p.idPost);
      }
      var newId = Math.max.apply(Math, ids)
      this.blogPost.idPost = newId + 1;
      var newEntry = Object.assign({}, this.blogPost);
      this.postService.addBlogPost(newEntry);
      this.postsListSubscription();
      this.dialogRef.close();
    }
  }

  onCancelForm() {
    this.dialogRef.close();
  }
}
