import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceProductsComponent } from '@ecommerce-products/ecommerce-products.component';

const routes: Routes = [
  {
    path: '',
    component: EcommerceProductsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommerceProductsRoutingModule {}