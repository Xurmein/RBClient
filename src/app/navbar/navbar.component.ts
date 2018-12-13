import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  isLoggedIn = sessionStorage.getItem("account")

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    sessionStorage.clear()
    this.handleAccount()
  }

  handleAccount() {
    if (sessionStorage.getItem("account") === "spacetravel") {
      this.router.navigate(["/uprofile"])
    } else if (sessionStorage.getItem("account") === "admin") {
      this.router.navigate(["/aprofile"])
    } else {
      this.router.navigate(["/account"])
    }
  }

}
