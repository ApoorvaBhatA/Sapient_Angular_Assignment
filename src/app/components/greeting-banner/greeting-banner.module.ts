import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingBannerComponent } from '@greeting-banner/greeting-banner.component';
import { GreetingBannerRoutingModule } from '@greeting-banner/greeting-banner-routing.module';

@NgModule({
  declarations: [GreetingBannerComponent],
  imports: [
    GreetingBannerRoutingModule,
    CommonModule
  ]
})
export class GreetingBannerModule { }
