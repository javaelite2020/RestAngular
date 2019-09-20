import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../Services/products.service';
import {MustMatch} from '../helpers/must-match.validator';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  userAddForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService) {
    this.userAddForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get addUserForm() {
    return this.userAddForm.controls;
  }

  addUser(FirstName, LastName, EmailAddress, UserID, Password, UserDescription) {
    this.productsService.addUser(FirstName, LastName, EmailAddress, UserID, Password, UserDescription);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userAddForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userAddForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.userAddForm.reset();
  }
}
