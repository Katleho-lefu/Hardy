import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin/admin.component';
import { ForgotPasswordComponent } from '../admin/forgot-password/forgot-password.component';
import { LoginComponent } from '../admin/login/login.component';
import { RegisterComponent } from '../admin/register/register.component';
import { VerifyEmailComponent } from '../admin/verify-email/verify-email.component';
import { HomeComponent } from '../home/home.component';
import { LandingComponent } from '../landing/landing.component';


const routes: Routes = [

  {
    path:  'admin',
    component:  AdminComponent,
    
    children: [
        { path:  'login',component:  LoginComponent},
        { path:  'register', component:  RegisterComponent },
        { path:  'forgot-password', component:  ForgotPasswordComponent },
        { path:  'verify-email', component:  VerifyEmailComponent }
    ]
    },

  {
    path:'',
    redirectTo:'landing', 
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'landing',
    component: LandingComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

