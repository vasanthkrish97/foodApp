import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HomeComponent } from './components/home/home.component';
import { DownloadComponent } from './components/download/download.component';
import { ExploreComponent } from './components/explore/explore.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

import { CreatePasswordComponent } from './components/create-password/create-password.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatChipsModule} from '@angular/material/chips';
import { NgImageSliderModule } from 'ng-image-slider';
import { AddRecipesComponent } from './components/add-recipes/add-recipes.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    RecipesComponent,
    HomeComponent,
    DownloadComponent,
    ExploreComponent,
    
    SignInComponent,
         ForgotPasswordComponent,
         ResetPasswordComponent,
       
         CreatePasswordComponent,
                 AddRecipesComponent,
         
        
    
    
    
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    NgbModule,
    SlickCarouselModule,
    MatChipsModule,
    NgImageSliderModule,
    MatAutocompleteModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
 

    
    
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

