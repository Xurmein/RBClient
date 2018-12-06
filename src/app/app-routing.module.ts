import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { Role } from './models/role.model';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'admin', 
  component: AdminComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin]}
},
{
  path: 'login',
  component: LoginComponent
},

// otherwise redirect to home 
 { path: '**', redirectTo: '' }
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/
export const AppRoutingModule = RouterModule.forRoot(routes);
