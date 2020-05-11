import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenWeatherService } from '../services/open-weather.service';
import { Report } from '../interfaces/report';
import { ApiError } from '../interfaces/api-error';
import { LoadingController } from '@ionic/angular';

@Component({
   selector: 'app-report',
   templateUrl: './report.page.html',
   styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
   report: Report;
   error: ApiError;
   private loading: HTMLIonLoadingElement;

   constructor(
      private loadingController: LoadingController,
      private route: ActivatedRoute,
      private openWeather: OpenWeatherService
   ) {}

   async presentLoading() {
      this.loading = await this.loadingController.create({
         message: 'Please wait...',
      });
      return await this.loading.present();
   }

   async ngOnInit() {
      await this.presentLoading();
      this.openWeather
         .getForecast(
            this.route.snapshot.params.city,
            this.route.snapshot.params.country
         )
         .subscribe(
            (r: Report) => (this.report = r),
            (error: ApiError) => (this.error = error)
         );
      await this.loading.dismiss();
   }
}
