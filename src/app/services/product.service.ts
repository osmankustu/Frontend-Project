
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ApiUrl = 'https://localhost:44353/api/';
  
  constructor(private HttpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
   
    let newpath = this.ApiUrl +"products/getall";
    return this.HttpClient.get<ListResponseModel<Product>>(newpath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newpath = this.ApiUrl +"products/getbycategory?categoryId="+categoryId;
    return this.HttpClient.get<ListResponseModel<Product>>(newpath);
    
  }

  add(product:Product):Observable<ResponseModel> {
    return this.HttpClient.post<ResponseModel>(this.ApiUrl+"products/add",product);
  }
}
