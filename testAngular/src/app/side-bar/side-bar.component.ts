import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../comments.service';
import { Comment } from '../comment.interface';
import { Post } from '../post.interface';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input()
  post : Post; 

  comments : Comment[];
  constructor(private service : CommentsService) { }

  ngOnInit() {
    this.service.getAll().subscribe((comments) => {
      this.comments = comments;
    });
  }

}
