import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app',
     templateUrl: 'app/app.component.html',
     styles: [`
     .ng-invalid {
        border: 1px solid red;
        }
    `]
})
export class TemplateDrivenComponent {
  user = {
    username: 'sumeet',
    email: 'sumeet@test.com',
    password: 'test',
    gender: 'male'
  };

  genders = [
    'male',
    'female'
  ];

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}