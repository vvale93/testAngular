import { Component, OnInit, Input } from '@angular/core';
import { GetPostsService } from '../get-posts.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  posts : Post[];
  

  constructor(private GetPostsService : GetPostsService) { }

  ngOnInit() {
    this.GetPostsService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }
}