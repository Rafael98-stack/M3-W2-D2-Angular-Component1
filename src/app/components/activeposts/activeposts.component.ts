import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';
@Component({
  selector: 'app-activeposts',
  templateUrl: './activeposts.component.html',
  styleUrls: ['./activeposts.component.scss'],
})
export class ActivepostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postSrv: PostsService) {
    this.postSrv.recuperaPosts().then((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  ngOnInit(): void {}
}
