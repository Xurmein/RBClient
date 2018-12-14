import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateAccountComponent } from './create.account/create.account.component';;

//import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import { ApodComponent } from './apod/apod.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'admin', 
  component: AdminComponent
},
{
  path: 'register',
  component: CreateAccountComponent,
  
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
