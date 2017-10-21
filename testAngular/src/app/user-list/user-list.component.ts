import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users : string[] = [];
  /*items:string[[ = [];*/ 
  constructor(private UserListService : UserListService) { }

  ngOnInit() {
    this.UserListService.getAll().subscribe(users => {
            this.users = users.json().map(value => value.name);
          });
  }

}
