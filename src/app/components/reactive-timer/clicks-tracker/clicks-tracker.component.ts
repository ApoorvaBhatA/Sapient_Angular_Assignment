import { Component, OnInit } from '@angular/core';
import { ReactiveTimerService } from '@utils/services/reactive-timer.service';

@Component({
  selector: 'clicks-tracker',
  templateUrl: './clicks-tracker.component.html',
  styleUrls: ['./clicks-tracker.component.scss']
})
export class ClicksTrackerComponent implements OnInit {

  startCount!: number;
  pausedCount!: number;

  constructor(private reactiveTimerService: ReactiveTimerService) { }

  ngOnInit(): void {
    this.reactiveTimerService.getStartCount().subscribe((data)=>{
      this.startCount = data;
    })
    this.reactiveTimerService.getPausedCount().subscribe((data)=>{
      this.pausedCount = data;
    })
  }

}
