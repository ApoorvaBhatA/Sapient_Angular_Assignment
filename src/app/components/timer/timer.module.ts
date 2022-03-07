import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClicksTrackerComponent } from '@timer/clicks-tracker/clicks-tracker.component';
import { DisplayCountDownComponent } from '@timer/display-count-down/display-count-down.component';
import { TimeStampLoggerComponent } from '@timer/time-stamp-logger/time-stamp-logger.component';
import { TimerControllerComponent } from '@timer/timer-controller/timer-controller.component';
import { TimerComponent } from '@timer/timer.component';
import { TimerRoutingModule } from '@timer/timer-routing.module';



@NgModule({
  declarations: [
    ClicksTrackerComponent,
    DisplayCountDownComponent,
    TimeStampLoggerComponent,
    TimerControllerComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    TimerRoutingModule
  ]
})
export class TimerModule { }
