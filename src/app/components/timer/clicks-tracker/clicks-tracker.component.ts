import { Component, Input, OnInit } from '@angular/core';
import { Timer } from '@utils/models/timer.model';

@Component({
  selector: 'clicks-tracker',
  templateUrl: './clicks-tracker.component.html',
  styleUrls: ['./clicks-tracker.component.scss']
})
export class ClicksTrackerComponent implements OnInit {

  @Input() timerDetails!: Timer;
  timers: Array<Timer> = [];
  startCount: number = 0;
  pausedCount: number = 0;

  constructor() { }

  ngOnChanges() {
    if (this.timerDetails)
      this.timers.push(this.timerDetails);

    this.startCount = 0;
    this.pausedCount = 0;

    for (let i = 0; i < this.timers.length; i++) {
      if (this.timers[i].startFlag === true) {
        this.startCount = this.startCount + 1;
      }
      else if(this.timers[i].startFlag === false && this.timers[i].resetFlag === false){
        this.pausedCount = this.pausedCount + 1
      }
    }
  }

  ngOnInit(): void {

  }

}
