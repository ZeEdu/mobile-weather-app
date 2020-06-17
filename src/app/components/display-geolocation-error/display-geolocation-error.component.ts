import { Component, OnInit, Input } from '@angular/core';
import { GeoError } from 'src/app/interfaces/geo-error';

@Component({
   selector: 'app-display-geolocation-error',
   templateUrl: './display-geolocation-error.component.html',
   styleUrls: ['./display-geolocation-error.component.scss'],
})
export class DisplayGeolocationErrorComponent implements OnInit {
   @Input()
   public geoError: GeoError;
   constructor() {}

   ngOnInit() {}
}
