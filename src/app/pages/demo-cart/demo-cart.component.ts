import { Component } from '@angular/core';
import {PRODUCTS} from '../../core/db/products.db';

@Component({
  selector: 'app-demo-cart',
  templateUrl: './demo-cart.component.html',
  styleUrl: './demo-cart.component.scss'
})
export class DemoCartComponent {
  readonly products: any[] = PRODUCTS;

  carts: any[] = [];


  onAddToCart(data: any) {
    this.carts.push(data);
    console.log('carts', this.carts)
  }

  get grandTotal(): number {
    return this.carts.map(m => m.price).reduce((acc, val) => acc + val, 0);
  }
}
