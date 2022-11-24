import { Cart } from "../components/models/Cart";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})

export class ShoppingService{
   

    cart: Cart[] = [       
   

    ];    
    
    quantity : number = 0;

    add(selectProduct: {id: number, name:string, price: number, category: string, image: string, description: string}, quantity: number){
   
        let productInCartiD =this.cart.filter(function(item){return item.selectedProduct.id == selectProduct.id})
        if(productInCartiD.length){           
          productInCartiD[0].quantity+=quantity;          
        }
        else{       
        this.cart.push(new Cart(selectProduct, quantity))
      }    
       this.quantity += quantity;       
    }


    remove(id: number, quantity:number){
      
      for(var i =0; i<this.cart.length; i++){
      if(this.cart[i].selectedProduct.id == id){
          this.cart.splice(i, 1);
          this.quantity-=quantity;
        }
      }     
    } 
    
    returnQuantity(qu: number){
       this.quantity = qu;
    }
    emptyCart(){
      this.cart=[];
      this.quantity = 0;
    }



  

    
  


    
   
}

