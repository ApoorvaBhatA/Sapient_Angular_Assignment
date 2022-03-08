import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCountDownComponent } from './display-count-down.component';

describe('DisplayCountDownComponent', () => {
  let component: DisplayCountDownComponent;
  let fixture: ComponentFixture<DisplayCountDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCountDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
