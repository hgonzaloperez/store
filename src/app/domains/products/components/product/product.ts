import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  @Input({required: true})  img: string = '';
  @Input() price: number = 0;
  @Input() title: string = '';

  @Output() addToCart = new EventEmitter;
  onAddToCart() {
    console.log('click  from child');
    this.addToCart.emit('hola este es el producto ' + this.title + ' (desde el hijo)');
  }
  

    
  
}
