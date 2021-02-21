import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Customer } from 'src/app/models/customer';
import { Product } from 'src/app/models/product';
import { CustomersService } from 'src/app/services/customers.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  filteredOptions!: Observable<Customer[]>;
  customers :Customer[]=[];
  productList: Product[]=[];
  total:string='';
  @Output() cancelOperation = new EventEmitter<void>();

  constructor(private customerService:CustomersService,private productService:ProductsService,private fb: FormBuilder){

  }
  
  saleForm = this.fb.group({
    customer:['',Validators.required],
    products:['',Validators.required]
  })

  onChangeProductList(){
this.total = this.saleForm.value.products.reduce((x:number,y:Product)=>x+y.unitValue,0)
console.log(this.total)
  }

  get products() {
    return this.saleForm.get('products') as FormArray;
  }

  addProduct() {
    this.products.push(this.fb.control('',Validators.required));
  }

  cancel() {
    this.cancelOperation.emit();
  }

  save(){
    console.log(this.saleForm.value)
  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe({
      next:(c)=>this.customers=c,
      error:(e)=>console.log(e)
    })

  this.productService.getProducts().subscribe({
    next:(p)=>this.productList=p,
    error:(e)=>console.log(e)
  })

  }
}
