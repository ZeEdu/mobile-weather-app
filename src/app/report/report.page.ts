import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenWeatherService } from '../services/open-weather.service';
import { Report } from '../interfaces/report';
import { ApiError } from '../interfaces/api-error';

@Component({
   selector: 'app-report',
   templateUrl: './report.page.html',
   styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
   report: Report;
   error: ApiError;
   constructor(
      private route: ActivatedRoute,
      private openWeather: OpenWeatherService
   ) {}

   ngOnInit() {
      this.openWeather
         .getForecast(
            this.route.snapshot.params.city,
            this.route.snapshot.params.country
         )
         .subscribe(
            (r: Report) => (this.report = r),
            (error: ApiError) => (this.error = error)
         );
   }
}
