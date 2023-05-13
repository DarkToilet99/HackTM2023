import { Component,OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class AppMapComponent implements OnInit {
  
  map: google.maps.Map | undefined;
  
  latitude: number = 0;
  longitude: number = 0;
  zoom: number = 0;

  center: google.maps.LatLng = {} as google.maps.LatLng;
  currentLocationMarker : google.maps.Marker | undefined;

  circle: google.maps.Circle = {} as google.maps.Circle;
  radius = 5000;
  
  address: string = "";
  private geoCoder : any;
  loader = new Loader({
    apiKey: environment.mapApiKey,
    version: "weekly",
  });

  directionsService: any;
  directionsRenderer: any;
  
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
        this.center = new google.maps.LatLng(this.latitude, this.longitude)
        this.zoom = 8;
        this.initMap(this.latitude, this.longitude);
      });
    }
  }

  initDirections() {
     this.directionsService = new google.maps.DirectionsService;
     this.directionsRenderer = new google.maps.DirectionsRenderer;

     this.directionsRenderer.setMap(this.map);
  }

  initMap(latitude : any, longitude : any) {
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
        
        this.initDirections();
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


  calcRoute(a: google.maps.LatLng,b: google.maps.LatLng) {
    var request = {
        origin: a,
        destination: b,
        // Note that JavaScript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode["DRIVING"]
    };
    this.directionsService.route(request, (response: any, status: any) => {
      if (status == 'OK') {
        this.directionsRenderer.setDirections(response);
      }
    });

  }

}
