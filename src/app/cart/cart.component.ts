import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  imageSrc = 'assets/ecart.jpg'; 
  items = this.cartService.getItems();

  constructor(
            private cartService: CartService,
            private formBuilder:FormBuilder) { }

   checkoutForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
});

  ngOnInit(): void {
  }
  onSubmit() {
    //Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    window.alert("Your order has been submitted");   
  
  } 
  
}

