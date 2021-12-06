import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalLayoutComponent } from './external-layout.component';
import { LinkComponent } from 'src/app/pages/link/link.component';
import { ExternalLayoutRoutes } from './external-layout.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LinkComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ExternalLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [FormsModule, ReactiveFormsModule],
})
export class ExternalLayoutModule {}
