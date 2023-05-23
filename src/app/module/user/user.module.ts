import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLeftPannelComponent } from 'src/app/components/user-left-pannel/user-left-pannel.component';
import { UserLayoutsComponent } from 'src/app/components/user-layouts/user-layouts.component';

import { ResetPasswordComponent } from 'src/app/components/reset-password/reset-password.component';
import { ExploreComponent } from 'src/app/components/explore/explore.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    UserLeftPannelComponent,
    UserLayoutsComponent,
   

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgImageSliderModule,
    SlickCarouselModule
  ]
})
export class UserModule { }
