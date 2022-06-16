
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

//axios-fetch
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Products:Product[] = [];
  
  dataLoaded = false;
  filterText="";  
  
  constructor(
    private productService:ProductService, 
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService ) { }

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(params => {
      
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"]);
      }
      else{
        this.getProducts();
      } 
    
    });
    

  }
  
  getProducts() {
    this.productService.getProducts().subscribe(Response => {
      this.Products = Response.data;
      this.dataLoaded = true;
    });
    
  }
  getProductsByCategory(categoryId:number){
  this.productService.getProductsByCategory(categoryId).subscribe(Response => {
    this.Products = Response.data;
    this.dataLoaded = true;
  });
}

 addToChart(product:Product){

  if(product.unitsInStock != 1) {
  
    this.toastrService.success("Sepete Eklendi " + product.productName);
    this.cartService.addToCart(product);
    
    
  }
  else{
    this.toastrService.error("Ürün Stoku Kalmadığı İçin Sepete Eklenemedi ! " + product.unitsInStock );
    }
  
    
 }


}
