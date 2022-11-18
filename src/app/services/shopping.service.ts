import { Cart } from "../components/models/Cart";

export class ShoppingService{
    cart: Cart[] = [ ];
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


}

