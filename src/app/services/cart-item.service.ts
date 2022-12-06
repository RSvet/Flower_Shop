import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from "../components/models/Cart";

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor(public httpClient: HttpClient) { }
  
  headers = new HttpHeaders().set('Content-Type', 'application/json');



  
  addCartItem(cart: Cart){
   
    return this.httpClient.post("api/cart", cart,{
      headers: this.headers
    })
  }

 
  }

 
  
    
