import { Component, OnInit, Input  } from '@angular/core';
import { UserListService } from '../user-list.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users : User[];
  constructor(private UserListService : UserListService) { }

  ngOnInit() {
    this.UserListService.getAll().subscribe(users => {
      this.users = users;
    });
  }
  

} 