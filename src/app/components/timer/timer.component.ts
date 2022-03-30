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
  isTimerExpired!: boolean;

  constructor() { }

  getTimerDetails(event: any) {
    this.timerDetails = event;
    this.isTimerExpired = false;
  }

  countDownCompleted(event:any) {
    this.isTimerExpired = event.isTimerExpired;
  }

  getpausedTimeDetails(event: any) {
    this.pausedTimeDetails = event.pausedTimeTracker
  }

  ngOnInit(): void {
  }

}
