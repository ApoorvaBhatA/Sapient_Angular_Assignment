import { Component, OnInit } from '@angular/core';
import studentsData from '@json-data/students.json'

@Component({
  selector: 'app-student-marks-table',
  templateUrl: './student-marks-table.component.html',
  styleUrls: ['./student-marks-table.component.scss']
})
export class StudentMarksTableComponent implements OnInit {
  students: { name: string; class: string; section: string; sub1: string; sub2: string; sub3: string; }[] = [];
  headings: string[] = [];
  headerClickTrack : {[key: string]: number} = {}

  constructor() { }

  onClickOfHeader(header: string) {
    if (this.headerClickTrack.hasOwnProperty(header)) {
      this.headerClickTrack[header] = this.headerClickTrack[header] + 1;
    }
    else {
      this.headerClickTrack[header] = 1
    }
    console.log(this.headerClickTrack);
  }

  ngOnInit(): void {
    this.students = JSON.parse(JSON.stringify(studentsData));
    this.headings = Object.keys(this.students[0]);
  }

}
