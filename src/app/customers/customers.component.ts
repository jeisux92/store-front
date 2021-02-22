import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../models/customer';
import { CustomersService } from '../services/customers.service';


@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent implements OnInit, AfterViewInit {


  constructor(private customersService:CustomersService){}
 
  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customersService.getCustomers().subscribe({
      next:(x:Customer[])=>{
       this.dataSource = new MatTableDataSource<Customer>(x);
      },
      error:(e)=>{}
    })
  }


  displayedColumns: string[] = ['identificationNumber', 'name', 'lastName','phone'];
  dataSource = new MatTableDataSource<Customer>([]);
  isModalActive = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  showAddModal = () => {
   this.isModalActive = true;
  }

  onCustomerCreated(result:boolean){
    this.isModalActive = false;
    if(result){
      this.getCustomers();
    }
    else{
      alert("Hubo un error creando el cliente")
    }
  }
}





