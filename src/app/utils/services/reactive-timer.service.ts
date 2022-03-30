import { Injectable } from '@angular/core';
import { Timer } from '@utils/models/timer.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiveTimerService {

  timerData = new Subject<Timer>();
  startButtonClickCount = new BehaviorSubject<number>(0);
  pauseButtonClickCount = new BehaviorSubject<number>(0);
  isTimerExpired = new BehaviorSubject<boolean>(false)

}
