import { Component, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent {
    recipes: Recipes[] = [
        new Recipes('Test', 'Test Descr', 'https://p0.pikrepo.com/preview/101/421/grilled-pork-belly-with-green-salad.jpg')
    ];
    @Output() recipeWasSelected = new EventEmitter<Recipes>();
    constructor() { }

    onRecipeSelected(recipe: Recipes) {
        this.recipeWasSelected.emit(recipe);
    }
}