import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css'],
  
})
export class ProductOrderComponent implements OnInit {
  checkOutForm: FormGroup;
  constructor(private router: Router, private shoppingService:ShoppingService) { }
  onSubmit(){    
    this.checkOutForm.reset();
    this.router.navigate(['/']);
    
  }
  
  ngOnInit(): void {
    this.checkOutForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'phone' : new FormControl(null, Validators.required),
      'address' : new FormControl(null, Validators.required),
      'comment' : new FormControl(null),
      'payment' : new FormControl(null, Validators.required)
    })
  }

  
  emptyCart(){

      this.shoppingService.cart.length;
      this.shoppingService.emptyCart();
      this.shoppingService.cart.length;

  }


}
