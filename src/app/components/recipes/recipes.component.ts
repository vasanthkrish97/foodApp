import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {

  currentRate: any;
  currentRating = 4;
 
  constructor(public routes:Router){
  
  }
  goRecipes(){
   this.routes.navigateByUrl('add-recipes')
    
  }
}
