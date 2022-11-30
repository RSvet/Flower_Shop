import { Cart } from "../components/models/Cart";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartItemService } from "./cart-item.service";

@Injectable({
  providedIn: 'root'
})

export class ShoppingService{
  constructor(
    private cartItemService: CartItemService
  ) { }
  


    cart: Cart[] = [

    ];    
    
    quantity : number = 0;  

    getCart(){
     return this.cartItemService.httpClient.get("api/cart",{
      headers: this.cartItemService.headers
      }); 
     
    }   

    add(selectProduct: {id: number, name:string, price: number, category: string, image: string, description: string}, quantity: number){
       
      let productInCartiD =this.cart.filter(function(item){return item.selectedProduct.id == selectProduct.id})
      
      if(productInCartiD.length){          
       
        productInCartiD[0].quantity+=quantity;
        
        this.editQuantity(productInCartiD[0]).subscribe({
          next: () => console.log("uspeh, editovan element u bazi sa id: "+productInCartiD[0].id+" "+productInCartiD[0].selectedProduct.name+" kolicina: "+productInCartiD[0].quantity),
          error:(err) => console.log(err)
        })   
               
      }
      else{    
        if(this.cart.length==0){
          let cartItem = new Cart(this.cart.length+1, selectProduct, quantity)
          this.cart.push(cartItem);
          this.cartItemService.addCartItem(cartItem).subscribe({
             next: (response)=>console.log(response),
             error: (error) => console.log(error)
           });
        }   
        else{
          let cartItem = new Cart(this.cart[this.cart.length-1].id+1, selectProduct, quantity)
          this.cart.push(cartItem);
          this.cartItemService.addCartItem(cartItem).subscribe({
             next: (response)=>console.log(response),
             error: (error) => console.log(error)
           });
        }  
            
    }  
    this.quantity += quantity;          
  }
   
   deleteCartItem(id:number, quantity:number){
    for(var i =0; i<this.cart.length; i++){
      if(this.cart[i].id == id){
          this.cart.splice(i, 1);
          this.quantity-=quantity;
        }
      }   
    return this.cartItemService.httpClient.delete("api/cart/"+ id, {
      headers: this.cartItemService.headers
    } )
  }
    //ukupna kolicina u korpi
    returnQuantity(qu: number){
       this.quantity = qu;
    }    
   
    //editovanje kolicine artikala
    editQuantity(cart: Cart){
      return this.cartItemService.httpClient.put('api/cart/' + cart.id, cart, {
        headers: this.cartItemService.headers
      })
    }

    emptyCart(){
      this.cart=[];
      this.quantity = 0;
    }



  

    
  


    
   
}

