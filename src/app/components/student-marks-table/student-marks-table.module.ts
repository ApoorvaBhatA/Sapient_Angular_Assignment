import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentMarksTableComponent } from '@student/student-marks-table.component';
import { StudentMarksTableRoutingModule } from '@student/student-marks-routing.module';
import { ValuesFromObjectPipe } from '@utils/pipes/values-from-object.pipe';

@NgModule({
  declarations: [
    StudentMarksTableComponent,
    ValuesFromObjectPipe,
  ],
  imports: [
    CommonModule,
    StudentMarksTableRoutingModule
  ]
})
export class StudentMarksTableModule { }
