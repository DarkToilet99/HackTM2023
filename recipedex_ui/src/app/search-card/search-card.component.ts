import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Store } from '../models/storeModel';

@Component({
  selector: 'search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent {
  storeList: Store[] = [];
  latitude: number = 0;
  longitude: number = 0;
  distance: number = 1000;

  constructor(private storeService: StoreService){
    if ('geolocation' in navigator) {
      this.storeList.length
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
    this.storeService.getAllStores(this.latitude,this.longitude,this.distance).subscribe({
        next: (res: Store[]) => {
          this.storeList = res;
        }
    })
  }

}
