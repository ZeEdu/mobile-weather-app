import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OPEN_WEATHER_KEY } from 'src/environments/environment';
let OpenWeatherService = class OpenWeatherService {
    constructor(http) {
        this.http = http;
    }
    getForecast(city, country) {
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},,${country}&appid=${OPEN_WEATHER_KEY}&units=metric`);
    }
};
OpenWeatherService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], OpenWeatherService);
export { OpenWeatherService };
//# sourceMappingURL=open-weather.service.js.map