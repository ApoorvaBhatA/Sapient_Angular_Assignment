import { Component, OnInit } from '@angular/core';
import { Timer } from '@utils/models/timer.model';
import { ReactiveTimerService } from '@utils/services/reactive-timer.service';

@Component({
  selector: 'time-stamp-logger',
  templateUrl: './time-stamp-logger.component.html',
  styleUrls: ['./time-stamp-logger.component.scss']
})
export class TimeStampLoggerComponent implements OnInit {

  timers: Array<Timer> = [];

  constructor(private reactiveTimerService: ReactiveTimerService) { }

  ngOnInit(): void {
    this.reactiveTimerService.timerData.subscribe((data) => {this.timers.push(data) })
  }

}
