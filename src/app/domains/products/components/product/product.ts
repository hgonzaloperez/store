import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Product as ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  imports: [NgOptimizedImage],
  styleUrl: './product.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Product {
  product = input.required<ProductModel>();
  addToCart = output<ProductModel>();

  onAddToCart() {
    this.addToCart.emit(this.product());
  }
}
