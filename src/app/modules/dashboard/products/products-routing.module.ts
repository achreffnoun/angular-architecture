import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProductComponent } from './liste-product/liste-product.component';

const routes: Routes = [
  {
    path : 'liste',
    component : ListeProductComponent
  },
  {
    path : '',
    redirectTo : 'liste',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
