import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReportPageRoutingModule } from './report-routing.module';
import { ReportPage } from './report.page';
let ReportPageModule = class ReportPageModule {
};
ReportPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ReportPageRoutingModule
        ],
        declarations: [ReportPage]
    })
], ReportPageModule);
export { ReportPageModule };
//# sourceMappingURL=report.module.js.map