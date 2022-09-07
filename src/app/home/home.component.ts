import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { products } from '../products';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  selected = ''; 

// This is for products lists
  products: any= products;
  necs: any = this.products.filter(
    (prod:any) => prod.id == '1' && prod.price 
  ); 
  Earrings: any = this.products.filter(
    (prod:any) => prod.id == '2' && prod.price 
  ); 
  Rings: any = this.products.filter(
    (prod:any) => prod.id == '3' && prod.price 
  ); 
  Bangles: any = this.products.filter(
    (prod:any) => prod.id == '4' && prod.price 
  ); 

   
  constructor() { }
  
  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
        
    navSpeed: 700,
    navText: ['&#8249', '&#8250;'],
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1000: {
        items: 1
      }
    },
    nav: true
  }
}
