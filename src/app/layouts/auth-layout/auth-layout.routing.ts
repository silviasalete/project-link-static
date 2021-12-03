import { WelcomeComponent } from 'src/app/pages/welcome/welcome.component';
import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { LinkComponent } from 'src/app/pages/link/link.component';

export const AuthLayoutRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:email', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'link', component: LinkComponent },
];
