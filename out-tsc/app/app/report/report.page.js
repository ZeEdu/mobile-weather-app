import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenWeatherService } from '../services/open-weather.service';
import { LoadingController } from '@ionic/angular';
let ReportPage = class ReportPage {
    constructor(loadingController, route, openWeather) {
        this.loadingController = loadingController;
        this.route = route;
        this.openWeather = openWeather;
    }
    presentLoading() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait...',
            });
            return yield this.loading.present();
        });
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.presentLoading();
            this.openWeather
                .getForecast(this.route.snapshot.params.city, this.route.snapshot.params.country)
                .subscribe((r) => (this.report = r), (error) => (this.error = error));
            yield this.loading.dismiss();
        });
    }
};
ReportPage = tslib_1.__decorate([
    Component({
        selector: 'app-report',
        templateUrl: './report.page.html',
        styleUrls: ['./report.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoadingController,
        ActivatedRoute,
        OpenWeatherService])
], ReportPage);
export { ReportPage };
//# sourceMappingURL=report.page.js.map