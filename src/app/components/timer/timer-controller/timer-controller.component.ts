import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Timer } from '@utils/models/timer.model';

@Component({
  selector: 'timer-controller',
  templateUrl: './timer-controller.component.html',
  styleUrls: ['./timer-controller.component.scss']
})
export class TimerControllerComponent implements OnInit {

  timerLimit!: number;
  startFlag: boolean | undefined;
  @Output() initiateTimer = new EventEmitter<Timer>();
  @Input() pausedTime: Array<number> = []
  @Input() isTimerExpired!: boolean;


  constructor() { }

  onClickOfStartPauseButton() {
    this.startFlag = !this.startFlag;
    this.initiateTimer.emit({ timerLimit: this.timerLimit, startFlag: this.startFlag, resetFlag: false, dateTime: new Date() })
  }

  onClickOfResetButton() {
    this.startFlag = false;
    this.isTimerExpired = false;
    this.initiateTimer.emit({ timerLimit: this.timerLimit, startFlag: this.startFlag, resetFlag: true, dateTime: new Date() })
  }

  ngOnInit(): void {
  }
}
