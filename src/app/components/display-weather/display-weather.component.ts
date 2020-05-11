import { Component, Input, OnInit } from '@angular/core';
import { Report } from '../../interfaces/report';

@Component({
   selector: 'app-display-weather',
   templateUrl: './display-weather.component.html',
   styleUrls: ['./display-weather.component.scss'],
})
export class DisplayWeatherComponent {
   @Input()
   public report: Report;

   constructor() {}
}
