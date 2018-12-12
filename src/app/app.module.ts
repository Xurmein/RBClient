import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import { ApiComponent } from './api/api.component';
import { ApodComponent } from './apod/apod.component';
import { AuthGuard } from './guards';
import { AuthenticationService } from './service';
import { AuthGuardAdmin } from './service/auth-guard-admin.service';
import { AuthGuardLogin } from './service/auth-guard-login.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
    MissionComponent,
    ApiComponent,
    ApodComponent,
    ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [HttpClient, AuthGuard, AuthenticationService,
  AuthGuardAdmin,AuthGuardLogin, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

