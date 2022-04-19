import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '@utils/models/product.model';

@Component({
  selector: 'app-ecommerce-products',
  templateUrl: './ecommerce-products.component.html',
  styleUrls: ['./ecommerce-products.component.scss']
})
export class EcommerceProductsComponent implements OnInit {
  products: Product[] = [];
  viewFlag: number = 0;
  
  constructor(private httpClient: HttpClient) { }

  onChangeView(flag: number) {
    this.viewFlag = flag;
  }

  sort(event: any) {
    this.sortProducts(event.target.value)
  }

  sortProducts(forOption: string) {
    switch (forOption) {
      case 'low':
        this.products = this.products.sort((low, high) => low.price - high.price);
        break;
      case 'high':
        this.products = this.products.sort((low, high) => high.price - low.price);
        break;
        default:
          this.products = this.products.sort((low, high) => high.rating - low.rating);
    }
  }
  ngOnInit(): void {
    this.httpClient.get('data/products.json').subscribe((resp:any)=>{
      this.products = resp
    });
    
    this.sortProducts('popularity')
  }

}
