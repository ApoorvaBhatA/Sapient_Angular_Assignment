import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingBannerComponent } from '@greeting-banner/greeting-banner.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'route1',
    loadChildren: () => import('@greeting-banner/greeting-banner.module').then(m => m.GreetingBannerModule)
  },
  {
    path: 'route2',
    loadChildren: () => import('@ecommerce-products/ecommerce-products.module').then(m => m.EcommerceProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
