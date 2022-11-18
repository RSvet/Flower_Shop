import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService, ShoppingService],
  
})
export class ProductComponent implements OnInit {
  productBy: {id:number, name:string, price: number, category: string, image: string, description: string}[]=[];  
  currentProd:{id:number, name:string, price: number, category: string, image: string, description: string}

  constructor(private route: ActivatedRoute, private productService: ProductService, private shoppingService: ShoppingService, private router: Router, ) 
  { }

  ngOnInit(): void {
    this.routeChanged(this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (params: Params) => {
        this.routeChanged(params['id']);
      }      
    )     
  }  
  routeChanged(id: number){
    this.productBy = this.productService.getProductbyId(id);   
  }

  LoadPrevious(id: number, category:string){    
    this.productBy = this.productService.getPrevProduct(id, category)
    let idpr= this.productBy[0].id;
    let name = this.productBy[0].name
    this.router.navigate(['/shop',category, idpr, name]);
  }
  LoadNext(id: number, category:string){
    this.productBy = this.productService.getNextProduct(id, category)
    let idnx= this.productBy[0].id;
    let name = this.productBy[0].name
    this.router.navigate(['/shop',category, idnx, name]);
  }

  addToCart(quantity: string, id:number){
    this.currentProd = this.productService.getProductbyId(id)[0];   
    this.shoppingService.add(this.currentProd, +quantity)
  }



  
  

 

  

}
