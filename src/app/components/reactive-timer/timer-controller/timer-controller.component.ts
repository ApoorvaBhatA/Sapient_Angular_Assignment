import { Component, OnInit } from '@angular/core';
import { ReactiveTimerService } from '@utils/services/reactive-timer.service';

@Component({
  selector: 'timer-controller',
  templateUrl: './timer-controller.component.html',
  styleUrls: ['./timer-controller.component.scss']
})
export class TimerControllerComponent implements OnInit {

  timerLimit!: number;
  startFlag: boolean | undefined;

  constructor(private reactiveTimerService : ReactiveTimerService) { }

  onClickOfStartPauseButton() {
    this.startFlag = !this.startFlag;
    this.reactiveTimerService.timerData.next({ timerLimit: this.timerLimit, startFlag: this.startFlag, resetFlag: false, dateTime: new Date() });
    if(this.startFlag) {
      let startCount!:number;
      this.reactiveTimerService.startButtonClickCount.subscribe(data=>{startCount = data+1})
      this.reactiveTimerService.startButtonClickCount.next(startCount)
    }
    else {
      let pausedCount!:number;
      this.reactiveTimerService.pauseButtonClickCount.subscribe(data=>{pausedCount = data+1})
      this.reactiveTimerService.pauseButtonClickCount.next(pausedCount)
    }
  }

  onClickOfResetButton() {
    this.startFlag = false;
    this.reactiveTimerService.timerData.next({ timerLimit: this.timerLimit, startFlag: this.startFlag, resetFlag: true, dateTime: new Date() })
  }

  ngOnInit(): void {
  }

}
