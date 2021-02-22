import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient ) { 
  }

  getCustomers():Observable<Customer[]>{
    return this.http.get(`${environment.apiUrl}/customer`).pipe(
      map((res:any)=>{
        if (!res) {
          throw new Error('Value expected!');
        }
        return res
      })
    )
  }

  createCustomer(customer: Customer){
    return this.http.post(`${environment.apiUrl}/customer`,customer);
  }

}
