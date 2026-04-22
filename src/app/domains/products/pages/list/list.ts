import { Component, signal } from '@angular/core';
import { Product } from './../../components/product/product';
import { Product as ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  imports: [Product],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  products = signal<ProductModel[]>([]);

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
    ]
    this.products.set(initProducts);
  } 



  fromChild(event:string) {
    console.log('estamos en el padre ');
    console.log(event);
  }

}
