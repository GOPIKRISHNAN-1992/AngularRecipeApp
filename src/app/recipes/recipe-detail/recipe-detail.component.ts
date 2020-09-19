import { Component, Input } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent {
    @Input('recipe') recipe: Recipes;
}