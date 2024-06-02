import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PipeViewComponent} from './pipe-view.component';

const routes: Routes = [
  {
    path: '',
    component: PipeViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeViewRoutingModule { }
