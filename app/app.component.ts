import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  public answer = '';
  public genders = ['Male', 'Female', 'Other'];
  public user = {
    name: '',
    email: '',
    gender: '',
    question: '',
    answer: '',
  };
  public submitted = false;

  suggestUserName() {
    const suggestedName = 'User-' + Math.floor(Math.random() * 90 + 10);

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    });
  }

  clearForm() {
    this.signupForm.form.reset();
    this.submitted = false;
  }

  // alternative - pass f to on submit
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;

    this.user.name = this.signupForm.form.value.userData.username;
    this.user.email = this.signupForm.form.value.userData.email;
    this.user.gender = this.signupForm.form.value.gender;
    this.user.question = this.signupForm.form.value.security;
    this.user.answer = this.signupForm.form.value.securityAnswer;
    this.signupForm.form.reset();
  }
}
