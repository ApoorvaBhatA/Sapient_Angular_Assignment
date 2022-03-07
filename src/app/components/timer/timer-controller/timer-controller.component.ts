import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'timer-controller',
  templateUrl: './timer-controller.component.html',
  styleUrls: ['./timer-controller.component.scss']
})
export class TimerControllerComponent implements OnInit {

  timerLimit!: number;
  startFlag: boolean | undefined;
  @Output() initiateTimer = new EventEmitter<{ timerLimit: number, startFlag: boolean, resetFlag: boolean, dateTime: Date }>();
  @Input() pausedTime: Array<number> = []


  constructor() { }

  onClickOfStartPauseButton() {
    this.startFlag = !this.startFlag;
    this.initiateTimer.emit({ timerLimit: this.timerLimit, startFlag: this.startFlag, resetFlag: false, dateTime: new Date() })
  }

  onClickOfResetButton() {
    this.startFlag = false;
    this.initiateTimer.emit({ timerLimit: this.timerLimit, startFlag: this.startFlag, resetFlag: true, dateTime: new Date() })
  }

  ngOnInit(): void {
  }
}
