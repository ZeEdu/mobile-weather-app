import { Component, Input, OnInit } from '@angular/core';
import { ApiError } from '../../interfaces/api-error';

@Component({
   selector: 'app-display-error',
   templateUrl: './display-error.component.html',
   styleUrls: ['./display-error.component.scss'],
})
export class DisplayErrorComponent implements OnInit {
   @Input()
   public error: ApiError;
   constructor() {}

   ngOnInit() {}
}
