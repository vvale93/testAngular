import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class GetPostsService {

  constructor(private http : Http) { }

  getAll() : Observable<any> {    
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(function(data){
        return data.json();
      });
  }

  get(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .map(function(data){
        return data.json();
      });
  }
}
