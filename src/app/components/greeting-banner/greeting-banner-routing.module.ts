import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingBannerComponent } from '@greeting-banner/greeting-banner.component';

const routes: Routes = [
  {
    path: '',
    component: GreetingBannerComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreetingBannerRoutingModule {}