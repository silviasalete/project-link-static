import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/:email', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: "register/:admin", component: RegisterComponent },
];
