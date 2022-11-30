import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Cart } from '../models/Cart';
import { Router } from '@angular/router';
import { __values } from 'tslib';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingService: ShoppingService,private router: Router) { }

  cartCurrent: Cart[] = [
 
  ];
  totalAmount: number =0;
  quantity: number = 0;
  

 
  ngOnInit(): void {
    
   
   this.getProducts(); 
   this.totalAmount = this.shoppingService.quantity;
  }

  getProducts(){
     this.shoppingService.getCart()
     .subscribe({
      next: (cart) => {
      this.cartCurrent = cart as Cart[];
      console.log(cart); 
       },
       error: (err) => console.log(err)
     })
     
  }
  
  goToCheckout(){ 
    
    this.router.navigate(['/productOrder']);   
  }

  onUpdatequantity(event: Event){
    let total = 0;
    //debugger;
    this.cartCurrent.forEach(element => {     
      if(element.selectedProduct.id==(+(<HTMLInputElement>event.target).id))       
     { element.quantity = (+(<HTMLInputElement>event.target).value); 
      this.shoppingService.editQuantity(element).subscribe({
        next: (response) => console.log("uspeh, editovan element u bazi"+element.selectedProduct.name+" nova kolicina: "+element.quantity),
        error:(err) => console.log(err)
      })   }
      total += element.quantity;
      this.shoppingService.returnQuantity(total);   
     });     
  }
  
  removeProduct(id: number, quantity:number){    
    this.shoppingService.deleteCartItem(id, quantity).subscribe({
      next: () => {        
        let index = this.cartCurrent.findIndex(function(c){return c.id == id});
        if(index != -1){
           this.getProducts();
        }
      },
      error: (error) => console.log(error)
    });    
  }  

  getsubTotal(){
    let total = 0;
    for (var i = 0; i < this.cartCurrent.length; i++) {
        
      total += this.cartCurrent[i].selectedProduct.price * this.cartCurrent[i].quantity;
      this.totalAmount = total;        
    }
    return total;
}

getGrandTotal(){
  let grandTotal=0;
  if(this.getsubTotal()==0){
    return grandTotal = this.getsubTotal();
  }
  else{
  return grandTotal = this.getsubTotal()+ 100;}  
  }
}
