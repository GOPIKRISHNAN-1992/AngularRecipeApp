import { Component } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Tomatoes',10)
    ];

    onIngredientAdded(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }
}