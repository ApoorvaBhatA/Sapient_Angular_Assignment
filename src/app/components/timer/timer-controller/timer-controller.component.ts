import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'timer-controller',
  templateUrl: './timer-controller.component.html',
  styleUrls: ['./timer-controller.component.scss']
})
export class TimerControllerComponent implements OnInit {

  timerLimit!: number;
  startFlag: boolean = false;
  @Output() initiateTimer = new EventEmitter<{ timerLimit: number, startFlag: boolean, resetFlag:boolean}>();
  @Input() pausedTime: Array<number> = []


  constructor() { }

  onClickOfStartPauseButton() {
    this.startFlag = !this.startFlag;
    this.initiateTimer.emit({ timerLimit: this.timerLimit, startFlag: this.startFlag, resetFlag: false })
  }

  onClickOfResetButton() {
    this.startFlag = false;
    this.initiateTimer.emit({ timerLimit: this.timerLimit, startFlag: this.startFlag, resetFlag: true })
  }

  ngOnInit(): void {
  }
}
