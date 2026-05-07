import { Injectable, signal, computed} from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root',
})
export class Cart {

  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.update(state => [...state, product]);
  } 
  
  total = computed(() => {
    return this.cart().reduce((total, product) => total + product.price, 0);
  });

  constructor() { }
  
}
