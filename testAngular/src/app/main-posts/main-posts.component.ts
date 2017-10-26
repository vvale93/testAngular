import { Component, OnInit } from '@angular/core';
import { GetPostsService } from '../get-posts.service';

@Component({
  selector: 'app-main-posts',
  templateUrl: './main-posts.component.html',
  styleUrls: ['./main-posts.component.scss']
})
export class MainPostsComponent implements OnInit {

  collection = [];    
  posts : Array<any>;
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