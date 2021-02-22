import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';






@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe({
      next: (x: Product[]) => {
        this.dataSource = new MatTableDataSource<Product>(x);
      },
      error: (e) => { }
    })
  }

  displayedColumns: string[] = ['name', 'unitValue'];
  dataSource = new MatTableDataSource<Product>([]);
  isModalActive: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  showAddModal = () => {
    this.isModalActive = true;
  }

  onProductCreated() {
    this.isModalActive = false;
    this.getProducts();
  }
}
