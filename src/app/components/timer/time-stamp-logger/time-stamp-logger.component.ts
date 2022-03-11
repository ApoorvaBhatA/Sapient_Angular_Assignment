import { Component, Input, OnInit } from '@angular/core';
import { Timer } from '@utils/models/timer.model';

@Component({
  selector: 'time-stamp-logger',
  templateUrl: './time-stamp-logger.component.html',
  styleUrls: ['./time-stamp-logger.component.scss']
})
export class TimeStampLoggerComponent implements OnInit {

  @Input() timerDetails!: Timer;
  timers: Array<Timer> =[];
  
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
