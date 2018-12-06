import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  blogPosts;
  constructor(private db: AngularFirestore) { }

  getBlogPosts(){
    this.blogPosts = this.db.collection('posts').valueChanges();
    return this.blogPosts;
  }
}
