import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserListService } from '../user-list.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user : User;
  isLoading: Boolean = true;

  constructor(private route : ActivatedRoute, private service : UserListService) { }

  private getUserP(id: number) {
    this.service.get(id).subscribe((user) => {
      this.user = user;
    }, (error) => {
        console.error(error);
      }, () => {
          this.isLoading = false;
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.getUserP(id);
    })
  }

}
