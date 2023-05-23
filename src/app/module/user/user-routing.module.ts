import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipesComponent } from 'src/app/components/add-recipes/add-recipes.component';
import { CreatePasswordComponent } from 'src/app/components/create-password/create-password.component';
import { ExploreComponent } from 'src/app/components/explore/explore.component';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ResetPasswordComponent } from 'src/app/components/reset-password/reset-password.component';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { UserLayoutsComponent } from 'src/app/components/user-layouts/user-layouts.component';




const routes: Routes = [
  { path: 'user-layouts', component: UserLayoutsComponent,
  children:[
    {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'user-layouts', component: UserLayoutsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'create-password', component: CreatePasswordComponent },
  
  ]},
  { path: 'add-recipes', component: AddRecipesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
