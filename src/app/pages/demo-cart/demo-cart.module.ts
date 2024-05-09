import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoCartRoutingModule } from './demo-cart-routing.module';
import { DemoCartComponent } from './demo-cart.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {ProductCardModule} from '../../shared/components/product-card/product-card.module';


@NgModule({
  declarations: [
    DemoCartComponent
  ],
  imports: [
    CommonModule,
    DemoCartRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    ProductCardModule
  ]
})
export class DemoCartModule { }
