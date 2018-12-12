import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
//import { Role } from './models/role.model';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import { ApodComponent } from './apod/apod.component';
import { AuthGuardAdmin } from './service/auth-guard-admin.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'admin', 
  component: AdminComponent,
  canActivate: [AuthGuardAdmin]
},
{
  path: 'login',
  component: LoginComponent,
  
},
{
  path: 'mission',
  component: MissionComponent
},
{
  path: 'apod',
  component: ApodComponent
},

// otherwise redirect to home 
 { path: '**', redirectTo: '' }
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/
export const AppRoutingModule = RouterModule.forRoot(routes);
