import { Component } from '@angular/core';
import { Product } from './../../components/product/product';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';


@Component({
  selector: 'app-list',
  imports: [CommonModule, Product],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  fromChild(event:string) {
    console.log('estamos en el padre ');
    console.log(event);
  }

}
