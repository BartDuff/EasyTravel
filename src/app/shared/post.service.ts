import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  blogPosts;
  idToDelete;
  constructor(private db: AngularFirestore) { }

  getBlogPosts() {
    this.blogPosts = this.db.collection('posts', ref => ref.orderBy('idPost', 'desc')).valueChanges();
    return this.blogPosts;
  }

  addBlogPost(blogPost) {
    this.db.collection('posts').add(blogPost);
  }

  deletePost(id: number) {
  this.db.collection('posts').get().subscribe( res => res.docs.find(
    x => x.get('idPost') === id).ref.delete());
  }
}
