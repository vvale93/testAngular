import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class UserListService {

  constructor(private http : Http) { 
    }
 
  getAll() : Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(function(data){
        return data.json();
      });
  }

  get(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id)
      .map(function(data){
        return data.json();
      });
  }
}
