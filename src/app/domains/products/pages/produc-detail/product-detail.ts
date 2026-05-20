import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { ProductService } from '@shared/services/product';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart';

@Component({
  selector: 'app-product-detail',
  imports: [UpperCasePipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {

  @Input() id!: number;
  product = signal<Product | null>(null);
  cover = signal('');
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  ngOnInit() {
    if (this.id) {
      this.productService.getOneProduct(this.id)
        .subscribe({
          next: (product: Product) => {
            this.product.set(product);
            if (product.images && product.images.length > 0) {
              this.cover.set(product.images[0]);
            } else {
              this.cover.set('https://via.placeholder.com/400x160?text=No+Image');
            } 
          }
        });
    }
  }

  changeCover(image: string) {
    this.cover.set(image);
  }

  addToCart() {
        const product = this.product();
      if (product) {
           this.cartService.addToCart(product);
      } 
}

}
