import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { Product as ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrl: './product.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Product {

  product = input.required<ProductModel>();

  addToCart = output<string>();

  onAddToCart() {
    console.log('click from child');
    this.addToCart.emit('hola este es el producto ' + this.product().title + ' (desde el hijo)');
  }
  

    
  
}
