import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingBannerComponent } from './greeting-banner.component';

describe('GreetingBannerComponent', () => {
  let component: GreetingBannerComponent;
  let fixture: ComponentFixture<GreetingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
