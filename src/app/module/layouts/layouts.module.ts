import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from 'src/app/components/layouts/layouts.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SlickCarouselModule } from 'ngx-slick-carousel';




@NgModule({
  declarations: [
    LayoutsComponent,
    HeaderComponent,
    FooterComponent,
    
   
   
 ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    NgImageSliderModule,
    SlickCarouselModule

  ]
})
export class LayoutsModule { }
