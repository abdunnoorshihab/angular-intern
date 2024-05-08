import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'layout',
    loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'material',
    loadChildren: () => import('./pages/material/material.module').then(m => m.MaterialModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
