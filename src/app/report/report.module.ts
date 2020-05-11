import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportPageRoutingModule } from './report-routing.module';

import { ReportPage } from './report.page';
import { DisplayWeatherComponent } from '../components/display-weather/display-weather.component';
import { DisplayErrorComponent } from '../components/display-error/display-error.component';

@NgModule({
   imports: [CommonModule, FormsModule, IonicModule, ReportPageRoutingModule],
   declarations: [ReportPage, DisplayWeatherComponent, DisplayErrorComponent],
})
export class ReportPageModule {}
