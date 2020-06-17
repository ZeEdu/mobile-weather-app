import { Component, OnInit } from '@angular/core';
import {
   FormBuilder,
   FormControl,
   FormGroup,
   Validators,
} from '@angular/forms';

@Component({
   selector: 'app-query-city',
   templateUrl: './query-city.component.html',
   styleUrls: ['./query-city.component.scss'],
})
export class QueryCityComponent implements OnInit {
   public location: FormGroup;

   constructor(private fb: FormBuilder) {}

   ngOnInit() {
      this.location = this.fb.group({
         city: new FormControl('', Validators.required),
         country: new FormControl('', Validators.required),
      });
   }
}
