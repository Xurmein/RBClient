import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { Role } from './models/role.model';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  { path: 'admin', 
  component: AdminComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin]}
},
{
  path: 'login',
  component: LoginComponent
}

// otherwise redirect to home 
// { path: '**', redirectTo: '' }
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/
export const AppRoutingModule = RouterModule.forRoot(appRoutes);
