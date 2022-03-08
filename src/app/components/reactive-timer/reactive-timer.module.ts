import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayCountDownComponent } from '@reactive-timer/display-count-down/display-count-down.component';
import { TimerControllerComponent } from '@reactive-timer/timer-controller/timer-controller.component';
import { TimeStampLoggerComponent } from '@reactive-timer/time-stamp-logger/time-stamp-logger.component';
import { ClicksTrackerComponent } from '@reactive-timer/clicks-tracker/clicks-tracker.component';
import { ReactiveTimerComponent } from '@reactive-timer/reactive-timer.component';
import { ReactiveTimerService } from '@utils/services/reactive-timer.service';
import { ReactiveTimerRoutingModule } from '@reactive-timer/reactive-timer-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DisplayCountDownComponent,
    TimerControllerComponent,
    TimeStampLoggerComponent,
    ClicksTrackerComponent,
    ReactiveTimerComponent
  ],
  providers: [
    ReactiveTimerService
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveTimerRoutingModule
  ]
})
export class ReactiveTimerModule { }
