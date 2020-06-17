import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from '../services/open-weather.service';
import { log } from 'util';

@Component({
   selector: 'app-home',
   templateUrl: 'home.page.html',
   styleUrls: ['home.page.scss'],
})
export class HomePage {
   constructor() {}
}
