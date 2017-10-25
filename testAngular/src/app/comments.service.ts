import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService {

  constructor(private http : Http) { }
  getAll() {
        return this.http.get('https://jsonplaceholder.typicode.com/comments');
      }
  getPostId(postId:number)
  {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
    .map(data => data.json());
  }

}

/*creo que en postId en realidad deberia ir id, concatenarlo para que quede el id del post ahi en el medio y ahi te toma la direccion y te devuelve los comentarios de dicho post */
