import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerComponent } from './customer/customer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomersService } from '../services/customers.service';


@NgModule({
  declarations: [CustomersComponent, CustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
  providers:[
    CustomersService
  ]
})
export class CustomersModule { }
