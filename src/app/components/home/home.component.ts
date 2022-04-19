import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuickLink } from '@utils/models/quick-link.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quickLinks: QuickLink[]= [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('data/routes.json').subscribe((resp:any)=>{
      this.quickLinks = resp
    });
  }
}
