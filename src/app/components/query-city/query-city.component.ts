import { Component, OnInit } from '@angular/core';
import {
   FormBuilder,
   FormControl,
   FormGroup,
   Validators,
} from '@angular/forms';
import { OpenWeatherService } from '../../services/open-weather.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
   selector: 'app-query-city',
   templateUrl: './query-city.component.html',
   styleUrls: ['./query-city.component.scss'],
})
export class QueryCityComponent implements OnInit {
   public location: FormGroup;

   constructor(
      private fb: FormBuilder,
      private weatherService: OpenWeatherService,
      private router: Router,
      private ActiveRoute: ActivatedRoute
   ) {}

   ngOnInit() {
      this.location = this.fb.group({
         city: new FormControl('', Validators.required),
         country: new FormControl('', Validators.required),
      });
   }
}
