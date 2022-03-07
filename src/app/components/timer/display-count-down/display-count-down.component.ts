import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'display-count-down',
  templateUrl: './display-count-down.component.html',
  styleUrls: ['./display-count-down.component.scss']
})
export class DisplayCountDownComponent implements OnInit {

  intervalTracker!: number;
  @Input() timerDetails!: { timerLimit: number, startFlag: boolean, resetFlag: boolean, dateTime: Date };
  timer: number | undefined;
  pausedTimeTracker: Array<number> = []
  @Output() pausedTime = new EventEmitter<{ pausedTimeTracker: Array<number> }>()

  constructor() { }

  ngOnChanges() {
    if (!this.timerDetails?.startFlag && !this.timerDetails?.resetFlag) {
      this.pauseTimer();
    }
    else if (this.timerDetails?.startFlag && !this.timerDetails?.resetFlag) {
      this.timer = this.timer || this.timerDetails?.timerLimit;
      this.startTimer();
    }
    else if (this.timerDetails?.resetFlag) {
      this.timer = this.timerDetails?.timerLimit;
      clearInterval(this.intervalTracker);
    }
  }

  startTimer() {
    this.intervalTracker = window.setInterval(() => {
      if (this.timer)
        this.timer = this.timer - 1;
    }, 1000);
  }

  pauseTimer() {
    if (this.timer)
      this.pausedTimeTracker.push(this.timer);
    this.pausedTime.emit({ pausedTimeTracker: this.pausedTimeTracker })
    clearInterval(this.intervalTracker);

  }

  ngOnInit(): void {
  }

}
