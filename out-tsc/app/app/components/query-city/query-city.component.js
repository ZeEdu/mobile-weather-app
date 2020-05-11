import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, } from '@angular/forms';
import { OpenWeatherService } from '../../services/open-weather.service';
import { ActivatedRoute, Router } from '@angular/router';
let QueryCityComponent = class QueryCityComponent {
    constructor(fb, weatherService, router, ActiveRoute) {
        this.fb = fb;
        this.weatherService = weatherService;
        this.router = router;
        this.ActiveRoute = ActiveRoute;
    }
    ngOnInit() {
        this.location = this.fb.group({
            city: new FormControl('', Validators.required),
            country: new FormControl('', Validators.required),
        });
    }
};
QueryCityComponent = tslib_1.__decorate([
    Component({
        selector: 'app-query-city',
        templateUrl: './query-city.component.html',
        styleUrls: ['./query-city.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        OpenWeatherService,
        Router,
        ActivatedRoute])
], QueryCityComponent);
export { QueryCityComponent };
//# sourceMappingURL=query-city.component.js.map