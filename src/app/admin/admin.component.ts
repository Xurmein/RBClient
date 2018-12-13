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
//import { ProfileComponent } from '../profile/profile.component';
//import { TransferService } from '../services/transfer.service';

@Component({
    selector: 'admin-component',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    loginForm: FormGroup;
    returnUrl: string;
    name: string;
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
        //public transferService: TransferService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            name: [this.name, Validators.required],
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
        this.name = event.target.value
    }

    handlePassword(event: any) {
        this.password = event.target.value
    }

    handleAccountType(event) {
        this.typeOfAccount = event.value
    }

    handleUser() {
        //if (this.name.includes("@")) {
            this.user = { email: this.name, password: this.password }
        //} else {
            this.user = { name: this.name, password: this.password }
        }
    

    redirect() {
        if (sessionStorage.getItem("account") === "spacetravel") {
            this.router.navigate(['/aprofile'])
        } else {
            this.router.navigate(["/uprofile"])
        }
    }

    onSubmit() {
        this.handleUser()
        if (this.typeOfAccount === "spacetravel") {
            this.UserService.login(this.user).subscribe(res => {
                console.log(res),
                sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem(
                    "id", res.user.id), sessionStorage.setItem(
                        "account", this.typeOfAccount), this.redirect()
            })
        } else {
            this.AdminService.login(this.user).subscribe(res => { 
                console.log(res), 
                sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem(
                    "id", res.adminID), sessionStorage.setItem(
                        "account", this.typeOfAccount), this.redirect() })
        }

    }

    userRegister(user) {
        if (sessionStorage.getItem("account") === "spacetravel") {
            this.UserService.register(user).subscribe(res => { 
                console.log(res), sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem(
                    "id", res.username), this.redirect() })
        } else {
            this.AdminService.register(user).subscribe(res => { 
                console.log(res), sessionStorage.setItem("token", res.sessionToken), sessionStorage.setItem(
                    "id", res.adminID), this.redirect() })
        }
    }

    openForm() {
        this.dialogReturn = this.form.open(CreateAccountComponent);

        this.dialogReturn.afterClosed().subscribe(res => { console.log(res), this.userRegister(res) })
    }

}
