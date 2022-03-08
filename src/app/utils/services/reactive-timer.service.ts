import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiveTimerService {

  timerData = new Subject<{timerLimit: number, startFlag: boolean, resetFlag: boolean, dateTime: Date}>();
  startButtonClickCount = new BehaviorSubject<number>(0);
  pauseButtonClickCount = new BehaviorSubject<number>(0)

}
