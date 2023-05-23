import { Component } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild} from '@angular/core';
import {FormArray, FormControl, Validators} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.scss']
})
export class AddRecipesComponent {
  step: any
  idx: any

  stepsArray = new FormArray([
     new FormControl('',Validators.required)
  ])

 
  recipes: string | undefined;

  

  separatorKeysCodes: number[] = [ENTER, COMMA];
  recipeCtrl = new FormControl('');
  filteredrecipe: Observable<string[]>;
  recipe: string[] = ['Breakfast Burrito Recipes' ,'Breakfast Burrito Recipes','Breakfast Burrito Recipes'];
  allrecipes: string[] = ['reakfast Burrito Recipes', 'reakfast Burrito Recipes', 'reakfast Burrito Recipes', 'reakfast Burrito Recipes', 'reakfast Burrito Recipes'];

  @ViewChild('recipeInput')
  recipeInput!: ElementRef<HTMLInputElement>;
isLAst: any;
// step: FormControl<any>;

  constructor() {
    this.filteredrecipe = this.recipeCtrl.valueChanges.pipe(
      startWith(null),
      map((recipe: string | null) => (recipe ? this._filter(recipe) : this.allrecipes.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our recipe
    if (value) {
      this.recipe.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.recipeCtrl.setValue(null);
  }

  remove(recipe: string): void {
    const index = this.recipe.indexOf(recipe);

    if (index >= 0) {
      this.recipe.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.recipe.push(event.option.viewValue);
    this.recipeInput.nativeElement.value = '';
    this.recipeCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allrecipes.filter(recipe => recipe.toLowerCase().includes(filterValue));
  }



  AddRecipes(){

  }


  addInputControl(){
    this.stepsArray.push(new FormControl('',Validators.required));
  }

  removeInputControl(){
    this.stepsArray.removeAt(this.idx)
  }

}


  


  

