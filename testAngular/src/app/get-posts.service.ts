import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Post } from './post.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class GetPostsService {

  constructor(private http : Http) { }

  getAll() : Observable<Post[]> {    
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(function(data){
        return data.json();
      });
  }

  get(id: number) : Observable<Post> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .map(function(data){
        return data.json();
      });
  }
}
