
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productRespnseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ApiUrl = "https://localhost:44353/api/products/getall";

  constructor(private HttpClient:HttpClient) { }

  getProducts():Observable<productRespnseModel> {
   
    return this.HttpClient.get<productRespnseModel>(this.ApiUrl);
    
  }
}
