import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface productRespnseModel  extends ResponseModel{
    data:Product[];
    
}