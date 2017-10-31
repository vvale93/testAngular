import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class PersonService {

  person: any;

  constructor() { }

  getPerson(): Observable<any> {
    return Observable.of(this.person);
  }
  
  savePerson(person) {
    this.person = person;
    
  }

}
