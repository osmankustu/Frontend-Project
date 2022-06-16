
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';





@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  ApiUrl = "https://localhost:44353/api/Categories/getList";

  constructor(private HttpClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>> {
   
    return this.HttpClient.get<ListResponseModel<Category>>(this.ApiUrl);
    
  }
}
