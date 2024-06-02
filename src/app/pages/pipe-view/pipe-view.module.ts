import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeViewRoutingModule } from './pipe-view-routing.module';
import { PipeViewComponent } from './pipe-view.component';
import {RoleViewPipe} from '../../shared/pipes/role-view.pipe';


@NgModule({
  declarations: [
    PipeViewComponent
  ],
  imports: [
    CommonModule,
    PipeViewRoutingModule,
    RoleViewPipe
  ]
})
export class PipeViewModule { }
