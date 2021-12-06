import { WelcomeComponent } from 'src/app/pages/welcome/welcome.component';
import { Routes } from '@angular/router';
import { LinkComponent } from 'src/app/pages/link/link.component';

export const ExternalLayoutRoutes: Routes = [
  { path: 'link/:domain', component: LinkComponent },
];
