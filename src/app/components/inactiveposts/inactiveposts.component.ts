import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';
@Component({
  selector: 'app-inactiveposts',
  templateUrl: './inactiveposts.component.html',
  styleUrls: ['./inactiveposts.component.scss'],
})
export class InactivepostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postSrv: PostsService) {
    this.postSrv.recuperaPosts().then((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  ngOnInit(): void {}
}
