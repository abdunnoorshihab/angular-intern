import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input({required: true}) data: any;

  @Output() onAdd = new EventEmitter();


  onAddToCart() {
    this.onAdd.emit(this.data);
  }
}
