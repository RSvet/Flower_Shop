import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';




@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],  
  providers: [ProductService]
})
export class ShopComponent implements OnInit {
  
  constructor(private productService: ProductService) { }
  
  products: {id: number, name:string, price: number, category: string, image: string, description: string}[]=[];
  
  ngOnInit(): void {
    
    this.products = this.productService.products;
  } 

}
