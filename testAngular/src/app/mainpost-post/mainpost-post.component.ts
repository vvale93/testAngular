import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.interface';

@Component({
  selector: 'app-mainpost-post',
  templateUrl: './mainpost-post.component.html',
  styleUrls: ['./mainpost-post.component.scss']
})
export class MainpostPostComponent implements OnInit {

  @Input()
  post : Post;

  constructor() { }

  ngOnInit() {
  }

}
