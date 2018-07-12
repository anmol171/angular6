import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLqbYFl3GDk_FhsFWirc-G9qtS797FyWIzLEjdfSPjo_p8ipn'),
    new Recipe('A Test Recipe','This is simply a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLqbYFl3GDk_FhsFWirc-G9qtS797FyWIzLEjdfSPjo_p8ipn')

  ];

  constructor() { }

  ngOnInit() {
  }

}
