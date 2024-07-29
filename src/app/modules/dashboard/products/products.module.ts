import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListeProductComponent } from './liste-product/liste-product.component';
import { CreateProductComponent } from './create-product/create-product.component';


@NgModule({
  declarations: [
    ListeProductComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
