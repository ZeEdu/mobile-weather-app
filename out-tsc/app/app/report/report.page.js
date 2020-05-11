import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenWeatherService } from '../services/open-weather.service';
let ReportPage = class ReportPage {
    constructor(route, openWeather) {
        this.route = route;
        this.openWeather = openWeather;
    }
    ngOnInit() {
        this.openWeather
            .getForecast(this.route.snapshot.params.city, this.route.snapshot.params.country)
            .subscribe((r) => (this.report = r), (error) => (this.error = error));
    }
};
ReportPage = tslib_1.__decorate([
    Component({
        selector: 'app-report',
        templateUrl: './report.page.html',
        styleUrls: ['./report.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        OpenWeatherService])
], ReportPage);
export { ReportPage };
//# sourceMappingURL=report.page.js.map