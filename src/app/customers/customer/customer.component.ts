import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerForm = new FormGroup({
    name: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    identificationNumber: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
  })

  @Output() cancelBtn = new EventEmitter<void>();
  @Output() onCreated = new EventEmitter<boolean>();
  constructor(private customersService:CustomersService) { }

  ngOnInit(): void {
  }

  cancel():void{
    this.cancelBtn.emit();
  }

  save():void{
    let customer =<Customer> this.customerForm.getRawValue()
    this.customersService.createCustomer(customer).subscribe({
      complete:()=>this.onCreated.emit(true),
      error:()=>this.onCreated.emit(false),
    })
  }

}
