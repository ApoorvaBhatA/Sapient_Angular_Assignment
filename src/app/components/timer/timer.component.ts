import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timerDetails!: { timerLimit: number; startFlag: boolean; resetFlag: boolean};

  constructor() { }

  getTimerDetails(event: any) {
    this.timerDetails = event;
    console.log(event);
  }

  ngOnInit(): void {
  }

}
