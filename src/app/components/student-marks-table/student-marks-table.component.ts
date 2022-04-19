import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-marks-table',
  templateUrl: './student-marks-table.component.html',
  styleUrls: ['./student-marks-table.component.scss']
})
export class StudentMarksTableComponent implements OnInit {
  students: {[key: string]: string | number }[] = [];
  studentsData: {[key: string]: string | number }[] = [];
  headings: string[] = [];
  headerClickTrack : {[key: string]: number} = {}

  constructor(private httpClient: HttpClient) { }

  onClickOfHeader(header: string) {
    //creating an object to keep track of number of clicks
    if (this.headerClickTrack.hasOwnProperty(header)) {
      this.headerClickTrack[header] = (this.headerClickTrack[header]>3 ? this.headerClickTrack[header]=0 : this.headerClickTrack[header]) + 1;
    }
    else {
      this.headerClickTrack[header] = 1
    }
    this.sort(header,this.headerClickTrack[header])
  }

  sort(key:string, sortOrder:number) {
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
        this.students = JSON.parse(JSON.stringify(this.studentsData));
    }
  }

  ngOnInit(): void {
    this.httpClient.get('data/students.json').subscribe((resp:any)=>{
      this.studentsData = JSON.parse(JSON.stringify(resp));
      this.students = JSON.parse(JSON.stringify(resp));
      this.headings = Object.keys(this.students[0]);
    });
  }

}
