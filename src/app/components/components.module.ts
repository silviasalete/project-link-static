import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './section/hero/hero.component';
import { FeaturesComponent } from './section/features/features.component';
import { DetailsComponent } from './section/details/details.component';
import { GalleryComponent } from './section/gallery/gallery.component';
import { TestimonialsComponent } from './section/testimonials/testimonials.component';
import { PricingComponent } from './section/pricing/pricing.component';
import { FaqComponent } from './section/faq/faq.component';
import { ContactComponent } from './section/contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    DetailsComponent,
    GalleryComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    DetailsComponent,
    GalleryComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class ComponentsModule {}
