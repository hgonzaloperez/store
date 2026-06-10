import { Component, signal, inject, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { Product } from './../../components/product/product';
import { Product as ProductModel } from '@shared/models/product.model';
import { Header }  from '@shared/components/header/header';
import { CartService } from '@shared/services/cart';
import { ProductService } from '@shared/services/product';
import { CategoryService } from '@shared/services/category';
import { Category } from '@shared/models/category.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-list',
  imports: [Product, Header, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export default class List {

  products = signal<ProductModel[]>([]);
  categories = signal<Category[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input () categoryId?: string; 


  ngOnChanges(changes: SimpleChanges) {
      this.getProducts();
  }

 ngOnInit() {
    this.getCategories();
  }



  addToCart(product:ProductModel ) {
    this.cartService.addToCart(product);
  }

  private getProducts() {
     this.productService.getProducts(this.categoryId).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  private getCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });
  }
}

      

  


