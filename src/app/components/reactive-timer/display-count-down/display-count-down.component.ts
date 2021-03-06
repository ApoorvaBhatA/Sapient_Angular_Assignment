import { Component, OnInit } from '@angular/core';
import { ReactiveTimerService } from '@utils/services/reactive-timer.service';

@Component({
  selector: 'display-count-down',
  templateUrl: './display-count-down.component.html',
  styleUrls: ['./display-count-down.component.scss']
})
export class DisplayCountDownComponent implements OnInit {

  intervalTracker!: number;
  timer!: number;

  constructor(private reactiveTimerService: ReactiveTimerService) { }

  startTimer() {
    this.intervalTracker = window.setInterval(() => {
      if (this.timer)
        this.timer = this.timer - 1;
      if (this.timer == 0) {
        this.reactiveTimerService.setTimerStatus(true);
        clearInterval(this.intervalTracker);
      }
    }, 1000);
  }

  pauseTimer() {
    if (this.timer) {
      let pausedTimings: number[]=[];
      this.reactiveTimerService.getPausedTime().subscribe(data => {
        pausedTimings = [...data,this.timer]
      })
      this.reactiveTimerService.setPausedTime(pausedTimings)
    }
    clearInterval(this.intervalTracker);
  }

  ngOnInit(): void {
    this.reactiveTimerService.getTimerData().subscribe((data) => {
      if (!data.startFlag && !data.resetFlag) {
        this.pauseTimer();
      }
      else if (data.startFlag && !data.resetFlag) {
        this.timer = this.timer || data.timerLimit;
        this.startTimer();
      }
      else if (data.resetFlag) {
        this.timer = data.timerLimit;
        clearInterval(this.intervalTracker);
      }
    })
  }

}
