import { HomeComponent } from './../../pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';

export const AdminLayoutRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
];
