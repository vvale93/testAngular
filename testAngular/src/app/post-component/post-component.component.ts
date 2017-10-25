import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPostsService } from '../get-posts.service';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {

  post : any;
  comments : Array<any>;

  constructor(private route : ActivatedRoute, private service : GetPostsService & CommentsService) { }

  private getPost(id: number) {
      this.service.get(id).subscribe((post) => {
          this.post = post.json();
      });
  }

  private getComments(id: number) {
    this.service.get(id).subscribe((comments) => {
        this.comments = comments.json();
    });
}

  ngOnInit() {
      this.route.params.subscribe((params) => {
          let id = params['id'];
          this.getPost(id);
      })

      this.route.params.subscribe((params) => {
        let id = params['id'];
        this.getComments(id);
    })
  }

}
