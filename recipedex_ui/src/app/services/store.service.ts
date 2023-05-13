import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Store } from '../models/storeModel';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllStores(lat: number, long: number, distance: number): Observable<Store[]>{
   let url = environment.baseApiUrl + "?Lat="+ lat +"&Lon="+ long +"&distanceFrom=" + distance;
   return this.httpClient.get<Store[]>(url);
  }
}
