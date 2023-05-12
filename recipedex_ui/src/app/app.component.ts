import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  zoom = 12;
  map: google.maps.Map | undefined;
  center: google.maps.LatLngLiteral= {} as google.maps.LatLngLiteral ;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  loader = new Loader({
    apiKey: "AIzaSyDCTRkOtQD9X-yPaJGXdPEgwc4Af1dokFQ",
    version: "weekly",
  });
  
  
  ngOnInit() {
    
    this.loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      this.map = new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 45.7552446, lng: 21.2127462 },
        zoom: 13,
      });
    });
  }

}
  
