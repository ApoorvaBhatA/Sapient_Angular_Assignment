import { Component, OnInit } from '@angular/core';
import { Timer } from '@utils/models/timer.model';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timerDetails!: Timer;
  pausedTimeDetails: Array<number> = [];

  constructor() { }

  getTimerDetails(event: any) {
    this.timerDetails = event;
    console.log(event);
  }

  getpausedTimeDetails(event: any) {
    this.pausedTimeDetails = event.pausedTimeTracker
  }

  ngOnInit(): void {
  }

}
