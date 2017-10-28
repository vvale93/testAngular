import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  rForm : FormGroup;
  'name' : string = null;
  'lastName' : string = null;
  'nickName' : string = null;
  /*genero?*/
  'email' : string = null;
  'telephone' : number = null;
  'pass' : string = null;
  'passRepeat' : string = null;
  /*TyC? */
  titleAlert:string = 'This field is required';
  constructor(private fb: FormBuilder) { 
    this.rForm = fb.group({
      'name' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      'lastName' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      'nickName' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      /*genero*/
      'email' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      'telephone' : '',
      'pass' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
      'passRepeat' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
    });
  }

  ngOnInit() {
    
  }

}
