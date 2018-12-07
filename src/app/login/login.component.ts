import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../models/user.model';
import { UserService } from '../service/user.service';

@Component({templateUrl: 'admin.component.html'})
export class AdminComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }
}


/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private authService: AuthenticationService) { }

    onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
        return;
      }
      if(this.loginForm.controls.email.value == 'dream.big@email.com' && this.loginForm.controls.password.value == 'password') 
      {this.router.navigate(['/']);}
       else {
        this.invalidLogin = true; 
      }
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}*/
