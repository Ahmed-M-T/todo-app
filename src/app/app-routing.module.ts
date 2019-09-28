import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodocontainerComponent } from './todocontainer/todocontainer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [{
  path: '',
  redirectTo: 'todo',
  pathMatch: 'full'
},
{
  path: 'sign-in',
  component: LoginComponent
},
{
  path: 'todo',
  component: TodocontainerComponent,
  canActivate: [
    AuthGuard
  ]
},
{
  path: '**',
  component: PagenotfoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
