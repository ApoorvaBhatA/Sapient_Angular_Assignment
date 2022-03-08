import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveTimerComponent } from '@reactive-timer/reactive-timer.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveTimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveTimerRoutingModule {}