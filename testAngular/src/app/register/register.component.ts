import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidation } from './passMatcher';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  
  constructor(private fb: FormBuilder) { /*!*/
    this.createForm();
  }
  
  private createForm() {
        this.form = this.fb.group({
          nombre: [null, [
            Validators.required,
            Validators.pattern('[a-zA-Z ]*'),
            Validators.minLength(3)
          ]],
          apellido: [null, [
            Validators.required,
            Validators.pattern('[a-zA-Z ]*'),
            Validators.minLength(3)
          ]],
          email: [null, [
            Validators.required,
            Validators.pattern (/[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
          ]],
          nickName: [null, [
            Validators.required,
            Validators.minLength(3)
          ]],
          telefono: [null, [
            Validators.required,
            Validators.pattern('[0-9]*'),
            Validators.minLength(6)
          ]],
          password: [null, [
            Validators.required,
            Validators.minLength(6)
          ]],
          confirmPass: [null, Validators.required],
          fechaNacimiento: [null, Validators.required],
          genero: [null, Validators.required],
          pais: [null, Validators.required],
          acepto: [false, Validators.requiredTrue]
        }, {
          validator: PasswordValidation.MatchPassword          
        });
      }
  ngOnInit() {
    
  }

}
