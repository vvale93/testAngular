import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { 
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
      telefono: [null, [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(6)
      ]],
      comentarios: [null, [
        Validators.required,
        Validators.minLength(15)
      ]],     
    });
  }
  ngOnInit() {
  }

}
