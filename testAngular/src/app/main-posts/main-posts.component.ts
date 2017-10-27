import { Component, OnInit } from '@angular/core';
import { GetPostsService } from '../get-posts.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-main-posts',
  templateUrl: './main-posts.component.html',
  styleUrls: ['./main-posts.component.scss']
})
export class MainPostsComponent implements OnInit {

  collection = [];    
  posts : Post[];
  constructor(private GetPostsService : GetPostsService) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push('item ${i}');
    }
  }

  ngOnInit() {
    this.GetPostsService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

}