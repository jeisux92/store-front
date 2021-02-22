import { Component, OnInit } from '@angular/core';
import { ISale } from '../models/sale';
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  showModal: boolean = false;
  sales: ISale[] = [];

  constructor(private salesService: SalesService) { }

  ngOnInit(): void {
    this.getSales();
  }

  getSales() {
    this.salesService.getSales().subscribe({
      next: (s) => this.sales = s
    })
  }
  onSaleCreated(state: boolean) {
    this.showModal = false;
  }
}
