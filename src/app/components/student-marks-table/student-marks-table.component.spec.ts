import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMarksTableComponent } from './student-marks-table.component';

describe('StudentMarksTableComponent', () => {
  let component: StudentMarksTableComponent;
  let fixture: ComponentFixture<StudentMarksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMarksTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMarksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
