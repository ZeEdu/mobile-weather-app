import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OPEN_WEATHER_KEY } from 'src/environments/environment';
import { Report } from '../interfaces/report';

@Injectable({
   providedIn: 'root',
})
export class OpenWeatherService {
   constructor(private http: HttpClient) {}

   public getForecastByCityName(city: string, country: string) {
      return this.http.get<Report>(
         `https://api.openweathermap.org/data/2.5/weather?q=${city},,${country}&appid=${OPEN_WEATHER_KEY}&units=metric`
      );
   }
   public getForecastByCoordinates(latitude: number, longitude: number) {
      return this.http.get<Report>(
         `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_KEY}&units=metric`
      );
   }
}
