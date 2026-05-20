import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  private http = inject(HttpClient);

  getProducts(categoryid?: string) {
    const url = new URL('https://api.escuelajs.co/api/v1/products');

    if (categoryid) {
      url.searchParams.append('categoryId', categoryid);
    }

    return this.http.get<Product[]>(url.toString());
  } 

  getOneProduct(id: number) {
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
  } 
}
