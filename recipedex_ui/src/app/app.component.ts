import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  map: google.maps.Map | undefined;
  loader = new Loader({
    apiKey: environment.mapApiKey,
    version: "weekly",
  });
  
  
  ngOnInit() {
  }

}
  
