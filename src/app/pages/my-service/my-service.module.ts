import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyServiceRoutingModule } from './my-service-routing.module';
import { MyServiceComponent } from './my-service.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    MyServiceComponent
  ],
  imports: [
    CommonModule,
    MyServiceRoutingModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class MyServiceModule { }
