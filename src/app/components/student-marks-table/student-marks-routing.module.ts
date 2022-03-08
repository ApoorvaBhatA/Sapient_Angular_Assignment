import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentMarksTableComponent } from '@student/student-marks-table.component';

const routes: Routes = [
  {
    path: '',
    component: StudentMarksTableComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentMarksTableRoutingModule {}