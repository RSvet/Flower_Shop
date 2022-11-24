import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  
})
export class CategoryComponent implements OnInit {
 
  constructor(private productService: ProductService,private route: ActivatedRoute) { }

  currentProducts: {id:number, name:string, price: number, category: string, image: string, description: string}[]=[];

  ngOnInit(): void {
    this.routeChanged(this.route.snapshot.params['category']);
    this.route.params.subscribe(
      (params: Params) => {
        this.routeChanged(params['category']);
      }
    )
    // let category = this.route.snapshot.params['category'];
    // this.currentProducts = this.productService.getProductbyCategory(category)      
  }

  routeChanged(category:string){
    this.currentProducts = this.productService.getProductbyCategory(category);
  }
}
