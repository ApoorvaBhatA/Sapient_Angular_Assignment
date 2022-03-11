import { Component, OnInit } from '@angular/core';
import routes from '@json-data/routes.json'
import { QuickLink } from '@utils/models/quick-link.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quickLinks: QuickLink[]= [];

  constructor() { }

  ngOnInit(): void {
    this.quickLinks = routes;
  }

}
