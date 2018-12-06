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
  blogPosts: Post[];
  displayedColumns = ['date_posted', 'title', 'imgURL', 'content', 'delete'];
  dataSource = new PostDataSource(this.postService);

  constructor(private postService: PostService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  adminBlogSubscription() {
    this.postService.getBlogPosts()
      .subscribe(data => this.blogPosts = data);
  }

  openDialogBox(): void {
    let dialog = this.dialog.open(NewPostComponent, {
      width: '600px',
      data: 'Nouvel article'
    });

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
