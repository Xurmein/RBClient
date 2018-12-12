import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';
//import { Role } from './models/role.model';
//import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {


  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private changeDetector: ChangeDetectorRef

  ) {}
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
}
