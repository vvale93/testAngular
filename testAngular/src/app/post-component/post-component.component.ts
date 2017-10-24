import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPostsService } from '../get-posts.service';


@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {

  post : any;
  constructor(private route : ActivatedRoute, private service : GetPostsService) { }

  private getPost(id: number) {
        this.service.get(id).subscribe((post) => {
          this.post = post.json();
        });
      }
  ngOnInit() {
    this.route.params.subscribe((params) => {
         let id = params['id'];
          this.getPost(id);
        })
  }

}
