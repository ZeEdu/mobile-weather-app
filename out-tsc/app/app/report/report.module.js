import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReportPageRoutingModule } from './report-routing.module';
import { ReportPage } from './report.page';
import { DisplayWeatherComponent } from '../components/display-weather/display-weather.component';
import { DisplayErrorComponent } from '../components/display-error/display-error.component';
let ReportPageModule = class ReportPageModule {
};
ReportPageModule = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule, FormsModule, IonicModule, ReportPageRoutingModule],
        declarations: [ReportPage, DisplayWeatherComponent, DisplayErrorComponent],
    })
], ReportPageModule);
export { ReportPageModule };
//# sourceMappingURL=report.module.js.map