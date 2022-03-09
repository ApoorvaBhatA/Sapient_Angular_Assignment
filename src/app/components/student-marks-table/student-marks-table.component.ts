import { Component, OnInit } from '@angular/core';
import studentsData from '@json-data/students.json'

@Component({
  selector: 'app-student-marks-table',
  templateUrl: './student-marks-table.component.html',
  styleUrls: ['./student-marks-table.component.scss']
})
export class StudentMarksTableComponent implements OnInit {
  students: {[key: string]: string | number }[] = [];
  headings: string[] = [];
  headerClickTrack : {[key: string]: number} = {}

  constructor() { }

  onClickOfHeader(header: string) {
    if (this.headerClickTrack.hasOwnProperty(header)) {
      this.headerClickTrack[header] = (this.headerClickTrack[header]>3 ? this.headerClickTrack[header]=0 : this.headerClickTrack[header]) + 1;
    }
    else {
      this.headerClickTrack[header] = 1
    }
    this.sort(header,this.headerClickTrack[header])
  }

  sort(key:string, sortOrder:number) {
    if(sortOrder == 1){
      this.students.sort((a,b)=> (a[key] > b[key]) ? 1 : -1);
    }
    else 

    switch(sortOrder) {
      case 1 :
        //ascending
        this.students.sort((a,b)=> (a[key] > b[key]) ? 1 : -1);
      break;
      case 2 : 
        //descending
        this.students.sort((a,b)=> (a[key] < b[key]) ? 1 : -1);
      break;
      default: 
        //reset
        this.students = JSON.parse(JSON.stringify(studentsData));
    }
  }

  ngOnInit(): void {
    this.students = JSON.parse(JSON.stringify(studentsData));
    this.headings = Object.keys(this.students[0]);
  }

}
