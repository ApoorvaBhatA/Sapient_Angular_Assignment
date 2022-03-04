import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceProductsComponent } from '@ecommerce-products/ecommerce-products.component';
import { EcommerceProductsRoutingModule } from '@ecommerce-products/ecommerce-products-routing.module';

@NgModule({
  declarations: [
    EcommerceProductsComponent
  ],
  imports: [
    EcommerceProductsRoutingModule,
    CommonModule
  ]
})
export class EcommerceProductsModule { }
