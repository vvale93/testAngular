import { Component, OnInit } from '@angular/core';
import { LastpostsService } from '../lastposts.service';

@Component({
  selector: 'app-lastposts',
  templateUrl: './lastposts.component.html',
  styleUrls: ['./lastposts.component.scss']
})
export class LastpostsComponent implements OnInit {

  lastposts : Array<any>;
  constructor(private LastpostsService : LastpostsService) { }
  idlastpost :number;
  ngOnInit() {
    this.LastpostsService.getAll().subscribe(posts => {
      this.lastposts = posts.json();
     });
}

  }


