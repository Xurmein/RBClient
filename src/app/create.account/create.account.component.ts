import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective,
  NgForm
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, ErrorStateMatcher } from '@angular/material';
import { AdminService } from '../service/admin.service';
import { UserService } from '../service/user.service';
import { Admin } from '../models/admin.model';
import { User } from '../models/user.model';


@Component({
  selector: 'app-create.account',
  templateUrl: './create.account.component.html',
  styleUrls: ['./create.account.component.css']
})
export class CreateAccountComponent implements OnInit {
  typeOfAccount: string
  SpaceTravelRegForm: FormGroup
  UserCreateForm: FormGroup
  submitted: boolean = false
  user: object
  matcher = new MyErrorStateMatcher
  qualities = ["Intelligence", "Adaptability",
    "Physical Condition", "Mental Endurance",
    "Education"]

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private adminService: AdminService,
    private router: Router,
    private matDialogRef: MatDialogRef<CreateAccountComponent>
  ) { }

  ngOnInit() {
    this.SpaceTravelRegForm = this.formBuilder.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    });

    this.UserCreateForm = this.formBuilder.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      email: new FormControl("", Validators.required)
    })
  }
  st() {
    return this.SpaceTravelRegForm.controls
  }

  uc() {
    return this.UserCreateForm.controls
  }
  handleButton(event) {
    this.typeOfAccount = event.value
  }

  submit(Form) {
    sessionStorage.setItem("account", this.typeOfAccount)
    this.matDialogRef.close(Form.value)
  }

}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
