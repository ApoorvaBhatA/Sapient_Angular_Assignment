import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveTimerComponent } from './reactive-timer.component';

describe('ReactiveTimerComponent', () => {
  let component: ReactiveTimerComponent;
  let fixture: ComponentFixture<ReactiveTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
