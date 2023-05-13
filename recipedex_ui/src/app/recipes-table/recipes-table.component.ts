import { Component } from '@angular/core';

@Component({
  selector: 'recipes-table',
  templateUrl: './recipes-table.component.html',
  styleUrls: ['./recipes-table.component.scss']
})
export class RecipesTableComponent {
  public recipesTitle = [
    { title: 'Recipe 1', checked: false },
    { title: 'Recipe 2', checked: false },
    { title: 'Recipe 3', checked: true },
    { title: 'Recipe 4', checked: false },
  ];
}
