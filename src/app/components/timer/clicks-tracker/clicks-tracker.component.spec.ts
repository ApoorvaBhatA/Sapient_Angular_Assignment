import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicksTrackerComponent } from './clicks-tracker.component';

describe('ClicksTrackerComponent', () => {
  let component: ClicksTrackerComponent;
  let fixture: ComponentFixture<ClicksTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClicksTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClicksTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
