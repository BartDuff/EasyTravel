import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  blogPosts;
  deleteObj;
  constructor(private db: AngularFirestore) { }

  getBlogPosts(){
    this.blogPosts = this.db.collection('posts', ref => ref.orderBy('idPost', "desc")).valueChanges();
    return this.blogPosts;
  }

  addBlogPost(blogPost){
    this.db.collection('posts').add(blogPost);
  }  

  deletePost(id){
    this.db.collection("posts", ref => ref.where('idPost', '==', id)).snapshotChanges();
  }
}
