import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipes } from '../../recipes.model';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html'
})

export class RecipeItemComponent {
    @Input('recipe') recipe: Recipes;
    @Output() recipeSelected = new EventEmitter<void>();

    onSelected() {
        this.recipeSelected.emit();
    }
}