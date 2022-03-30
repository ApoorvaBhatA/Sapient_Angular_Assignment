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
  isTimerExpired!: boolean;
  pausedTime: number[]=[];

  constructor(private reactiveTimerService : ReactiveTimerService) { }

  onClickOfStartPauseButton() {
    this.startFlag = !this.startFlag;
    this.reactiveTimerService.setTimerData({ timerLimit: this.timerLimit, startFlag: this.startFlag, resetFlag: false, dateTime: new Date() });
    if(this.startFlag) {
      let startCount!:number;
      this.reactiveTimerService.getStartCount().subscribe(data=>{startCount = data+1})
      this.reactiveTimerService.setStartCount(startCount)
    }
    else {
      let pausedCount!:number;
      this.reactiveTimerService.getPausedCount().subscribe(data=>{pausedCount = data+1})
      this.reactiveTimerService.setPausedCount(pausedCount)
    }
  }

  onClickOfResetButton() {
    this.startFlag = false;
    this.isTimerExpired = false;
    this.reactiveTimerService.setTimerData({ timerLimit: this.timerLimit, startFlag: this.startFlag, resetFlag: true, dateTime: new Date() })
  }

  ngOnInit(): void {
    this.reactiveTimerService.getTimerStatus().subscribe(data=>{this.isTimerExpired = data})
    this.reactiveTimerService.getPausedTime().subscribe(data=>{
      this.pausedTime = data
    })
  }

}
