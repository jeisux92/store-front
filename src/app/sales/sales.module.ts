import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SaleComponent } from './sale/sale.component';


@NgModule({
  declarations: [SalesComponent, SaleComponent],
  imports: [
    CommonModule,
    SharedModule,
    SalesRoutingModule,
    FlexLayoutModule
  ]
})
export class SalesModule { }
