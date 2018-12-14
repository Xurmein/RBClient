import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { first } from 'rxjs/operators';

//import { AlertService } from '../services/alert.service';
import { UserService } from "../service/user.service";
import { AdminService } from "../service/admin.service";
import { AuthenticationService } from '../service/authentication.service';

//import { User } from "../models/user.model";
import { CreateAccountComponent } from '../create.account/create.account.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { User } from 'app/models';
//import { ProfileComponent } from '../profile/profile.component';


@Component({
    selector: 'admin-component',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    loginForm: FormGroup;
    returnUrl: string;
    username: string;
    password: string;
    typeOfAccount: string;
    user;
    dialogReturn: MatDialogRef<CreateAccountComponent>

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private AdminService: AdminService,
        private UserService: UserService,
        // private alertService: AlertService,
        public form: MatDialog,
        private router: Router,
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            name: [this.username, Validators.required],
            password: [this.password, Validators.required]
        });

        // reset login status
        // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    handleName(event: any) {
        this.username = event.target.value
    }

    handlePassword(event: any) {
        this.password = event.target.value
    }

    handleAccountType(event) {
        this.typeOfAccount = event.value
    }

    handleUser() {
        //if (this.name.includes("@")) {
        //this.user = { email: this.name, password: this.password }
        //} else {
        this.user = { name: this.username, password: this.password }
    }


    redirect() {
        if (sessionStorage.getItem("account") === "admin") {
            this.router.navigate(['/aprofile'])
        } else {
            this.router.navigate(["/uprofile"])
        }
    }

    onSubmit() {
        this.handleUser()
        if (this.typeOfAccount === "admin") {
            this.AdminService.login(this.user).subscribe(res => {
                console.log(res),
                    sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem(
                        "id", res.adminID), sessionStorage.setItem(
                            "account", this.typeOfAccount), this.redirect()
            })
        } else {
            this.UserService.login(this.user).subscribe(res => {
                console.log(res),
                    sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem(
                        "id", res.username), sessionStorage.setItem(
                            "account", this.typeOfAccount), this.redirect()
            })
        }

    }

    userRegister(user) {
        if (sessionStorage.getItem("account") === "admin") {
            this.AdminService.register(user).subscribe(res => {
                console.log(res), sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem(
                    "id", res.adminID), sessionStorage.setItem(
                        "account", this.typeOfAccount), this.redirect()
            })
        } else {
            this.UserService.register(user).subscribe(res => {
                console.log(res), sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem(
                    "id", res.username), sessionStorage.setItem(
                        "account", this.typeOfAccount),
                    this.redirect()
            })
        }
    }

    openForm() {
        this.dialogReturn = this.form.open(CreateAccountComponent);

        this.dialogReturn.afterClosed().subscribe(res => { console.log(res), this.userRegister(res) })
    }

}
