import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLqbYFl3GDk_FhsFWirc-G9qtS797FyWIzLEjdfSPjo_p8ipn'),
    new Recipe('A Chicken Recipe','This is simply a test','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/6/8/5/FNM_070110-Weekend-Dinners-026_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371593415273.jpeg')

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe);

  }


}