import { Component, OnInit, Input } from '@angular/core';
import { GetPostsService } from '../get-posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  posts : Array<any>;
  

  constructor(private GetPostsService : GetPostsService) { }

  ngOnInit() {
    this.GetPostsService.getAll().subscribe(posts => {
      this.posts = posts.json();
    });
  }
}