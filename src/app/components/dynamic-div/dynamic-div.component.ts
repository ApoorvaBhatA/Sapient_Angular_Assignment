import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OrdinalSuffixPipe } from '@utils/pipes/ordinal-suffix.pipe';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit {

  items: string[] = []
  @ViewChild('endOfPage') endOfPage!: ElementRef;

  constructor(private httpClient: HttpClient) { }

  onClickOfButton(i: number) {
    const suffix = new OrdinalSuffixPipe()
    window.alert("Button in " + suffix.transform(i) + " div clicked")
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const threshold = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.getItems()
          }
          else {
            return
          }
        })
      },
      { threshold }
    );
    observer.observe(this.endOfPage.nativeElement);
  }

  getItems() {
    this.httpClient.get('data/items.json').subscribe((resp: any) => {
      console.log("kl");

      resp.forEach((element: any) => {

        this.items.push(element)
      })
    });
  }

}
