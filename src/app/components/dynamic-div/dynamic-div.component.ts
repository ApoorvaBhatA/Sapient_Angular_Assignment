import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import itemList from '@json-data/items.json'

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit {

  items: string[] = []
  @ViewChild('endOfPage') endOfPage!: ElementRef;

  constructor() { }

  onClickOfButton(i: number) {
    window.alert(i)
  }

  ngOnInit(): void {
    this.getItems();
  }

  ngAfterViewInit() {
    const threshold = 0;
    const observer = new IntersectionObserver(
      () => {
        this.getItems()
      },
      { threshold }
    );
    observer.observe(this.endOfPage.nativeElement);
  }

  getItems() {
    itemList.forEach((element) => {
      this.items.push(element)
    })
  }

}
