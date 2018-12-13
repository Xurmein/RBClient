import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { AdminService } from './service/admin.service';
import { AdminComponent } from './admin/admin.component';
//import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import { ApiComponent } from './api/api.component';
import { ApodComponent } from './apod/apod.component';
//import { AuthGuard } from './guards';
import { AuthenticationService } from './service';
//import { AuthGuardAdmin } from './service/auth-guard-admin.service';
//import { AuthGuardLogin } from './service/auth-guard-login.service';
import { CreateAccountComponent } from './create.account/create.account.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    //LoginComponent,
    HomeComponent,
    MissionComponent,
    ApiComponent,
    ApodComponent,
    CreateAccountComponent,
    NavbarComponent,
    ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    MatCardModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [HttpClient,  AuthenticationService,
   UserService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }

