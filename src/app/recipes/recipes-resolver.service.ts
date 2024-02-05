import { Injectable, inject } from '@angular/core';
import { Recipe } from './recipe.model';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({providedIn: 'root'})
export class RecipeResolverService{
    constructor(public dataStorageService: DataStorageService, public recipeService: RecipeService){}
}

export const solution: ResolveFn<Recipe[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const recipes = inject(RecipeResolverService).recipeService.getRecipes();

    if(recipes.length === 0){
        return inject(RecipeResolverService).dataStorageService.fetchRecipes();
    } else {
        return recipes;
    }
    
}