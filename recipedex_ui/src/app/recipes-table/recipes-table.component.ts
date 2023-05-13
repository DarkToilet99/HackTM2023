import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.interface';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'recipes-table',
  templateUrl: './recipes-table.component.html',
  styleUrls: ['./recipes-table.component.scss']
})

export class RecipesTableComponent {
  @Input() public recipes: Recipe[] = [];

constructor(private storeService: StoreService){
  storeService.getAllRecipes().subscribe({
    next: (result: Recipe[]) =>{
        this.recipes = result;
    }
  })
}
}
