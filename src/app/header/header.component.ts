import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imageSrc = 'assets/img.JPG';  
  imageAlt = 'Spree';
  panelOpenState = false;
  selected = '';  
  

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  itemsCount(){
    return this.cartService.itemsCount();
  }

}
