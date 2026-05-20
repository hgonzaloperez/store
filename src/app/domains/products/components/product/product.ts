import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { UpperCasePipe, CurrencyPipe} from '@angular/common';
import { Product as ProductModel } from '../../../shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse-pipe';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.html',
  styleUrl: './product.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UpperCasePipe, CurrencyPipe, ReversePipe, RouterLinkWithHref]
})
export class Product {
  product = input.required<ProductModel>();
  addToCart = output<ProductModel>();

  onAddToCart() {
    this.addToCart.emit(this.product());
  }
}
