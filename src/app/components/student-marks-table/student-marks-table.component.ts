import { Component, OnInit } from '@angular/core';
import studentsData from '@json-data/students.json'

@Component({
  selector: 'app-student-marks-table',
  templateUrl: './student-marks-table.component.html',
  styleUrls: ['./student-marks-table.component.scss']
})
export class StudentMarksTableComponent implements OnInit {
  students: { name: string; class: string; section: string; sub1: string; sub2: string; sub3: string; }[]=[];
  headings : string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.students = JSON.parse(JSON.stringify(studentsData));
    this.headings = Object.keys(this.students[0]);
  }

}
