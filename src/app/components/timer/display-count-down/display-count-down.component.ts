import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'display-count-down',
  templateUrl: './display-count-down.component.html',
  styleUrls: ['./display-count-down.component.scss']
})
export class DisplayCountDownComponent implements OnInit {

  intervalTracker!: number;
  @Input() timerDetails!: { timerLimit: number; startFlag: boolean; resetFlag: boolean};
  timer: number = 0;


  constructor() { }

  ngOnChanges() {
    if (!this.timerDetails?.startFlag && !this.timerDetails?.resetFlag) {
      this.pauseTimer();
    }
    else if(this.timerDetails?.startFlag && !this.timerDetails?.resetFlag){
      this.timer = this.timer || this.timerDetails?.timerLimit;
      this.startTimer();
    }
    else if(this.timerDetails?.resetFlag) {
      this.timer = this.timerDetails?.timerLimit;
      console.log(this.timer)
    }
  }

  startTimer() {
    this.intervalTracker = window.setInterval(() => {
      this.timer = this.timer - 1;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.intervalTracker);
  }

  ngOnInit(): void {
  }

}
