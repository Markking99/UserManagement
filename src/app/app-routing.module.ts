import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
},
{
  path: 'register',
  component: RegisterComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
