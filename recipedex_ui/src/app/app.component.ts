import { Component,OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  map: google.maps.Map | undefined;
  
  latitude: number = 0;
  longitude: number = 0;
  zoom: number = 0;

  center: google.maps.LatLngLiteral = {} as google.maps.LatLngLiteral;
  currentLocationMarker : google.maps.Marker | undefined;

  circle: google.maps.Circle = {} as google.maps.Circle;
  radius = 5000;
  
  address: string = "";
  private geoCoder : any;
  loader = new Loader({
    apiKey: environment.mapApiKey,
    version: "weekly",
  });
  
  
  constructor(){
  }
  
  ngOnInit() {
    this.loader.load().then(async () => {
      this.geoCoder = new google.maps.Geocoder;
      this.setCurrentLocation();
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.center = { lat: this.latitude, lng: this.longitude }
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
        
      });
    }
  }

  getAddress(latitude : any, longitude : any) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, async (results : any, status : any) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 13;
          this.address = results[0].formatted_address;
          const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
          this.map = new Map(document.getElementById("map") as HTMLElement, {
            center: this.center,
            zoom: this.zoom,
          });
          this.currentLocationMarker = new google.maps.Marker({
            position: new google.maps.LatLng(this.latitude, this.longitude),
            map: this.map!,
            title: 'current location'
        });

        this.drawPolygon();
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    
    });
  }

  async drawPolygon(){
    this.circle = new google.maps.Circle({
      center: this.center,
      radius: this.radius,
    })

    this.circle.setMap(this.map!)
  }

}
  
