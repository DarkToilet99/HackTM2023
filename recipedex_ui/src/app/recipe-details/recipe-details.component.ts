import { Component } from '@angular/core';

@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})

export class RecipeDetailsComponent {
  shoppingList = [
    { name: 'Milk', checked: false },
    { name: 'Bread', checked: false },
    { name: 'Eggs', checked: true },
    { name: 'Cheese', checked: false },
  ];

}
