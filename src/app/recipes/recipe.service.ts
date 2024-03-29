import { Injectable } from '@angular/core';

import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  //  private recipes: Recipe[] = [
  //       new Recipe("a test recipe",
  //        "this is simply test",
  //         "https://www.tasteofhome.com/wp-content/uploads/2018/05/Baked-Mac-and-Cheese_EXPS_SDDJ17_25257_D08_04_4b.jpg",
  //         [
  //           new Ingredient('meat', 1),
  //           new Ingredient('French Fries', 20)
  //         ]
  //         ),
  //       new Recipe("another test recipe", 
  //       "this is simply test", 
  //       "https://www.tasteofhome.com/wp-content/uploads/2018/05/Baked-Mac-and-Cheese_EXPS_SDDJ17_25257_D08_04_4b.jpg", 
  //       [
  //           new Ingredient('Buns', 2),
  //           new Ingredient('Meat', 1)
  //       ]
  //       )
  //     ];

    private recipes: Recipe[] = [];

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes(){
        return this.recipes.slice()
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      constructor(private slService: ShoppingListService){}

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}