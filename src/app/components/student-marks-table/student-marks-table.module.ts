import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentMarksTableComponent } from '@student/student-marks-table.component';
import { StudentMarksTableRoutingModule } from '@student/student-marks-routing.module';

@NgModule({
  declarations: [
    StudentMarksTableComponent
  ],
  imports: [
    CommonModule,
    StudentMarksTableRoutingModule
  ]
})
export class StudentMarksTableModule { }
