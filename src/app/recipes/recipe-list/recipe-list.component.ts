import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipeWasSelected = new EventEmitter<Recipe>();
 

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe);

  }


}