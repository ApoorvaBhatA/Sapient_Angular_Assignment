import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'time-stamp-logger',
  templateUrl: './time-stamp-logger.component.html',
  styleUrls: ['./time-stamp-logger.component.scss']
})
export class TimeStampLoggerComponent implements OnInit {

  @Input() timerDetails!: { timerLimit: number, startFlag: boolean, resetFlag: boolean, dateTime: Date };
  timers: Array<{ timerLimit: number, startFlag: boolean, resetFlag: boolean, dateTime: Date }> =[];
  
  constructor() { 
    console.log(this.timers);
    
  }

  ngOnChanges() {
    if(this.timerDetails)
    this.timers.push(this.timerDetails);
  }

  ngOnInit(): void {
  }

}
