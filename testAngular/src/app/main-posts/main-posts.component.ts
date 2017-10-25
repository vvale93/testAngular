import { Component, OnInit } from '@angular/core';
import { GetPostsService } from '../get-posts.service';

@Component({
  selector: 'app-main-posts',
  templateUrl: './main-posts.component.html',
  styleUrls: ['./main-posts.component.scss']
})
export class MainPostsComponent implements OnInit {

  posts : Array<any>;
  constructor(private GetPostsService : GetPostsService) { }

  ngOnInit() {
    this.GetPostsService.getAll().subscribe(posts => {
      this.posts = posts.json();
    });
  }

}