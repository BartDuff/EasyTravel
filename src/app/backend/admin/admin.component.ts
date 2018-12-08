import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { Post } from 'src/app/shared/post';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { NewPostComponent } from '../new-post/new-post.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  blogPosts;
  displayedColumns = ['date_posted', 'title', 'imgURL', 'content', 'delete'];
  dataSource = new PostDataSource(this.postService);

  constructor(private postService: PostService, private dialog: MatDialog) { }

  ngOnInit() {
    this.adminBlogSubscription();
  }

  adminBlogSubscription() {
    this.dataSource.connect()
      .subscribe(data => this.blogPosts = data);
  }

  openDialogBox(): void {
    const dialogRef = this.dialog.open(NewPostComponent, {
      width: '600px',
      data: 'Nouvel article'
    });
    dialogRef.componentInstance.event.subscribe(() => {
      this.dataSource = new PostDataSource(this.postService);
    });
  }

  deleteBlogPost(blogPostId) {
    this.postService.deletePost(blogPostId);
  }
}

export class PostDataSource extends DataSource<any> {
  constructor(private postService: PostService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.postService.getBlogPosts();
  }

  disconnect() {
  }
}
