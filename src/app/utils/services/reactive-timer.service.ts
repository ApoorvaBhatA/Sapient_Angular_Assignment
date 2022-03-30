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
  isTimerExpired = new BehaviorSubject<boolean>(false);
  pausedTimeTracker = new BehaviorSubject<Array<number>>([]);

  setTimerData(data: Timer) {
    this.timerData.next(data);
  }

  getTimerData() {
    return this.timerData.asObservable();
  }

  setPausedTime(time: Array<number>) {
    this.pausedTimeTracker.next(time);
  }

  getPausedTime() {
    return this.pausedTimeTracker.asObservable();
  }

  setStartCount(data: number) {
    this.startButtonClickCount.next(data);
  }

  getStartCount() {
    return this.startButtonClickCount.asObservable();
  }

  setPausedCount(data: number) {
    this.pauseButtonClickCount.next(data);
  }

  getPausedCount() {
    return this.pauseButtonClickCount.asObservable();
  }

  setTimerStatus(data: boolean) {
    this.isTimerExpired.next(data);
  }

  getTimerStatus() {
    return this.isTimerExpired.asObservable();
  }
}
