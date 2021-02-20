import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  @Output() cancelBtn = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.cancelBtn.emit();
  }

}
