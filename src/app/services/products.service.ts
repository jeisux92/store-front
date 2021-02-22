import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(`${environment.apiUrl}/product`).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('Value expected!');
        }
        return res
      })
    )
  }

  createCustomer(product: Product) {
    return this.http.post(`${environment.apiUrl}/product`, product);
  }
}
