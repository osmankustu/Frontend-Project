import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FormGroup , FormBuilder , FormControl , Validator, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm : FormGroup;
  trueMessage:string;
  constructor(
    private formBuilder:FormBuilder,
    private productService:ProductService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productName:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]
    });

    
  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value);
      this.productService.add(productModel).subscribe(Response =>{
        console.log(Response);
        this.toastrService.success(Response.message,"Başarılı");
      },responseError =>{
        if(responseError.error.Errors.length>0){
          
          for(let i= 0 ; i <responseError.error.Errors.length; i++){
            
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası !");  
          }
        }
      })      
    } 
    else{
      this.toastrService.error("Ürün Eklenemedi : Formunuz Hatalıdır.","Dikkat!!")
    }
    }
}
