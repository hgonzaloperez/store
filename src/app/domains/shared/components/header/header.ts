import { Component, signal, input, SimpleChange, SimpleChanges, inject } from '@angular/core';
import { CartService } from '../../services/cart';
import { RouterLinkWithHref, RouterLinkActive } from "@angular/router";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  hideSideMenu = signal(true);
 

 private cartService = inject(CartService);
 cart = this.cartService.cart;
 total = this.cartService.total;

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

 
}
