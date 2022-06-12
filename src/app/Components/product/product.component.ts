
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http';
import { productRespnseModel } from 'src/app/models/productResponseModel';

//axios-fetch
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ApiUrl = "https://localhost:44353/api/products/getall";

  Products:Product[] = [];
  
  
  
  constructor(private HttpClient:HttpClient) { }

  ngOnInit(): void {
    
    this.getProducts();

  }
  
  getProducts() {
    this.HttpClient.get<productRespnseModel>(this.ApiUrl).subscribe((Response) => {
      this.Products = Response.data
    } );
  }
}
