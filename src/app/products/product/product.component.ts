import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl('',Validators.required),
    unitValue: new FormControl('',Validators.required)
  })

  @Output() cancelOperation = new EventEmitter<void>();
  @Output() onCreated = new EventEmitter<void>();

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }
  cancel() {
    this.cancelOperation.emit();
  }

  save():void{
    let product =<Product> this.productForm.getRawValue()
    this.productsService.createCustomer(product).subscribe({
      complete:()=>this.onCreated.emit(),
      error:()=>this.onCreated.emit(),
    })
  }
}
