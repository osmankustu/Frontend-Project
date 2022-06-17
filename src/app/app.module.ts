//declarations yazılır
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import yazılır
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './Components/navi/navi.component';
import { CategoryComponent } from './Components/category/category.component';
import { ProductComponent } from './Components/product/product.component';
import { VatAddedPipe } from './pipe/vat-added.pipe';
import { FilterPipePipe } from './pipe/filter-pipe.pipe';


import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './Components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './Components/product-add/product-add.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CategoryComponent,
    ProductComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: "toast-top-right" }),
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
