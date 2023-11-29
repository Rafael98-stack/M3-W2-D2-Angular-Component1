import { Injectable } from '@angular/core';
// import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  // post: Post[] = [];

  async recuperaPosts() {
    return await (await fetch('../../assets/db.json')).json();
  }

  constructor() {}
}
