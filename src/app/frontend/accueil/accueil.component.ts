import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/post.service';
import { Post } from 'src/app/shared/post';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  blogPosts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.blogSubscription();
  }

  blogSubscription(){
    this.postService.getBlogPosts()
    .subscribe(data => this.blogPosts = data);
  }

}
