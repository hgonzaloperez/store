import { Component, signal, input } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  hideSideMenu = signal(true);
 cart = input.required<Product[]>();
 
  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
