import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Store } from '../models/storeModel';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { Recipe } from '../recipe.interface';

@Component({
  selector: 'search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})

export class SearchCardComponent {
  storeList: Store[] = [];
  recipes: Recipe[] = [];
  latitude: number = 0;
  longitude: number = 0;
  distance: number = 1000;
  model: string = "";
  formatter = (result: string) => result.toUpperCase();


  constructor(private storeService: StoreService){
    if ('geolocation' in navigator) {
      this.storeList.length
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;

		this.storeService.getAllStores(this.latitude,this.longitude,this.distance).subscribe({
			next: (res: Store[]) => {
			  this.storeList = res;
			}
		})

      });
    }
    
  }

  onKey(event: any) { // without type info
    this.storeService.getMatchingRecipes(event.target.value).pipe(debounceTime(200)).subscribe({
		next: (result: Recipe[]) =>{
			this.recipes = result;
		}
	})
  }
  
}
