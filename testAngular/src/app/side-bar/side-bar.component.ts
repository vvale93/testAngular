import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input()
  post : any; 

  comments : Array<any>;
  constructor(private service : CommentsService) { }

  ngOnInit() {
    this.service.getAll().subscribe((comments) => {
           this.comments = comments.json();
         });
  }

}
