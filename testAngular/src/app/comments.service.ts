import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Comment } from './comment.interface'
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService {

  constructor(private http : Http) { }
  getAll() : Observable<Comment[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
      .map(function(data){
        return data.json();
      });
  }
  
  getPostComments(id:number) : Observable<Comment[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
      .map(function(data){
        return data.json();
      });
  }

}

