import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuType: String = 'default'
  constructor(public routes:Router){
  
  }
  goToLogin(){
   this.routes.navigateByUrl('user-layouts')
    
  }

  

}
