import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPostsService } from '../get-posts.service';
import { CommentsService } from '../comments.service';
import { Post } from '../post.interface';
import { Comment } from '../comment.interface'

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {

  post : Post;
  comments : Comment[];
  isLoading: Boolean = true;

constructor(private route : ActivatedRoute, private service : GetPostsService, private commService : CommentsService) { }

  private getPost(id: number) {
      this.service.get(id).subscribe((post) => {
        this.post = post;
      });
  }

  ngOnInit() {
    let id:number;
    this.route.params.subscribe((params) => {
      id = params['id'];
      this.getPost(id);
    })
    this.commService.getPostComments(id).subscribe(comments => {
      this.comments = comments;
    }, (error) => {
      console.error(error);
      }, () => {
        this.isLoading = false;           
    });
      
  }

}
