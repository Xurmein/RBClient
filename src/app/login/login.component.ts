import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//import { first } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username = new FormControl ('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(40)
  ]);
  password = new FormControl ('', [
    Validators.required,
    Validators.minLength(8)
  ]);
  //loading = false;
  submitted = false;
  //returnUrl: string;
 // error = '';*/

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}
  

  ngOnInit() {
      // redirect to home if already logged in
      if (this.authenticationService.loggedIn) {
        this.router.navigate(['/']);
      }
    this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password
    });
  }
   setClassUsername() {
      return { 'has-danger': !this.username.pristine && !this.username.valid };
    }
  
    setClassPassword() {
      return { 'has-danger': !this.password.pristine && !this.password.valid };
    }
  
    login() {
      this.authenticationService.login(this.loginForm.value).subscribe(
        res => this.router.navigate(['/'])
      );

    // get return url from route parameters or default to '/'
    /*this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true
  }
    // stop here if form is invalid
    /*if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });*/
  }
}
