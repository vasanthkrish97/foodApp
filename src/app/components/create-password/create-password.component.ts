import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent {
  constructor(public routes:Router){
  
  }
  goToExplore(){
   this.routes.navigateByUrl('explore')
    
  }
}
