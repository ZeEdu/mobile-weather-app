import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { QueryCityComponent } from '../components/query-city/query-city.component';
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            HomePageRoutingModule,
            ReactiveFormsModule,
        ],
        declarations: [HomePage, QueryCityComponent],
    })
], HomePageModule);
export { HomePageModule };
//# sourceMappingURL=home.module.js.map