import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Output() cancelBtn = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  cancel() {
    this.cancelBtn.emit();
  }
}
