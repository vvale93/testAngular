import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  person: any;
  persona = {
    nickName: null,
    password: null,
  };

  constructor(private personService: PersonService) { 
    
  }

  checkUser(){
    let nickname = (<HTMLInputElement>document.getElementById("nickLog")).value;
    let pass = (<HTMLInputElement>document.getElementById("passLog")).value;
    if(this.person.nickName == nickname && this.person.password == pass)
    {
      alert("Usted ha ingresado con exito!");
    }
    else
    {
      alert("Credenciales invalidas");
    }
    
  }
 
  ngOnInit() {
    this.personService.getPerson().subscribe(data => {
      this.person = data;
  });
}

}
