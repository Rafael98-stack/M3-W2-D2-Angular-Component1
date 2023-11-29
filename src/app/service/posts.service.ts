import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: any[] = [];

  constructor() {
    this.recuperaPosts().then((data) => {
      this.posts = data.posts;
    });
  }

  async recuperaPosts() {
    return await (await fetch('../../assets/db.json')).json();
  }

  inviaPost(updatePost: Post) {
    const index = this.posts.findIndex((post) => post.id === updatePost.id);

    if (index !== -1) {
      this.posts[index] = updatePost;
    } else {
      console.error('Post not found:', updatePost);
    }
  }
  getPosts(): Post[] {
    return this.posts;
  }
}
