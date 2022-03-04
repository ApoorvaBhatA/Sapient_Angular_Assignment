import { Component, OnInit } from '@angular/core';
import routes from '@json-data/routes.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quickLinks: { displayName: string; url: string; }[]= [];

  constructor() { }

  ngOnInit(): void {
    this.quickLinks = routes;
  }

}
