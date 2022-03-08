import { TestBed } from '@angular/core/testing';

import { ReactiveTimerService } from './reactive-timer.service';

describe('ReactiveTimerService', () => {
  let service: ReactiveTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
