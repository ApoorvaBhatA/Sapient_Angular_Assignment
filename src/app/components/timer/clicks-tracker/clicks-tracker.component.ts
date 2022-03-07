import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'clicks-tracker',
  templateUrl: './clicks-tracker.component.html',
  styleUrls: ['./clicks-tracker.component.scss']
})
export class ClicksTrackerComponent implements OnInit {

  @Input() timerDetails!: { timerLimit: number, startFlag: boolean, resetFlag: boolean, dateTime: Date };
  timers: Array<{ timerLimit: number, startFlag: boolean, resetFlag: boolean, dateTime: Date }> = [];
  startCount: number = 0;
  pausedCount: number = 0;

  constructor() { }

  ngOnChanges() {
    if (this.timerDetails)
      this.timers.push(this.timerDetails);

    this.startCount = 0;
    this.pausedCount = 0;

    for (let i = 0; i < this.timers.length; i++) {
      if (this.timers[i].startFlag == true) {
        this.startCount = this.startCount + 1;
      }
      else {
        this.pausedCount = this.pausedCount + 1
      }
    }
  }

  ngOnInit(): void {

  }

}
