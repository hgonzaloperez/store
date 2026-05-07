import { Component, signal, inject } from '@angular/core';
import { Product } from './../../components/product/product';
import { Product as ProductModel } from '../../../shared/models/product.model';
import { Header }  from '../../../shared/components/header/header';
import { Cart } from '../../../shared/services/cart';

@Component({
  selector: 'app-list',
  imports: [Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  products = signal<ProductModel[]>([]);
 private cartService = inject(Cart);

  constructor() {
    const initProducts: ProductModel[] = [
      {
        id: Date.now(),  
        title: 'Product 1',
        price: 10,
        image: 'https://picsum.photos/200/300?r=23'  
      },
       {
        id: Date.now(),  
        title: 'Product 2',
        price: 20,
        image: 'https://picsum.photos/200/300?r=12'  
      },
      {
        id: Date.now(),  
        title: 'Product 1',
        price: 10,
        image: 'https://picsum.photos/200/300?r=23'  
      },
       {
        id: Date.now(),  
        title: 'Product 2',
        price: 20,
        image: 'https://picsum.photos/200/300?r=12'  
      },
       {
        id: Date.now(),  
        title: 'Product 2',
        price: 20,
        image: 'https://picsum.photos/200/300?r=12'  
      },
      {
        id: Date.now(),  
        title: 'Product 1',
        price: 10,
        image: 'https://picsum.photos/200/300?r=23'  
      },
       {
        id: Date.now(),  
        title: 'Product 2',
        price: 20,
        image: 'https://picsum.photos/200/300?r=12'  
      },
       {
        id: Date.now(),  
        title: 'Product 2',
        price: 20,
        image: 'https://picsum.photos/200/300?r=12'  
      },
    ]
    this.products.set(initProducts);
  } 



  addToCart(product:ProductModel ) {
    this.cartService.addToCart(product);
  }

}
