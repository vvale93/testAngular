import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mainpost-post',
  templateUrl: './mainpost-post.component.html',
  styleUrls: ['./mainpost-post.component.scss']
})
export class MainpostPostComponent implements OnInit {

  @Input()
  post : any;

  constructor() { }

  ngOnInit() {
  }

}
/*asi deberia ser*/