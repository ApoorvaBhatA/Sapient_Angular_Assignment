import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit {

  items: string[] = []
  tempItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];
  @ViewChild('yourElement') yourElement!: ElementRef;

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
    observer.observe(this.yourElement.nativeElement);
  }

  getItems() {
    this.tempItems.forEach((element) => {
      this.items.push(element)
    })
  }

}
