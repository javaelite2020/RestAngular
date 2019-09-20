import {Component, OnInit} from '@angular/core';
import {LoginService} from '../Services/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      emailAddress: ['', Validators.required, Validators.email, Validators.pattern("^[\\\\w!#$%&’*+/=?`{|}~^-]+(?:\\\\.[\\\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\\\.)+[a-zA-Z]{2,6}$")],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get userLoginForm() {
    return this.loginForm.controls;
  }

  validateRegistration(email, password) {
    this.loginService.validateRegistration(email, password);
  }

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }

}
