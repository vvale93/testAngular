import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Http } from '@angular/http';

@Injectable()
export class GetPostsService {

  constructor(private http : Http) { }

  getAll() : Observable<any> {
    
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
}

get(id: number) {
      return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
   }
}
