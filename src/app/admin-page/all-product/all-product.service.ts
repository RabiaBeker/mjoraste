import { Injectable } from '@angular/core';
import {env} from "../../../environments/env";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {GetAllProductResponse} from "../../model/getAllProductResponse";
import {ApiResponse} from "../../model/api-response";
import {CreatProductRequest} from "../../model/creatProductRequest";
import {Product} from "./product-dialog/product-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class AllProductService {
  baseUrl = env.getAllProduct
  sendUrl = env.sendProductData
  constructor(private http: HttpClient) { }

  getProducts(): Observable<GetAllProductResponse[]>{
    return this.http.get<ApiResponse<GetAllProductResponse[]>>(this.baseUrl)
      .pipe(map((response) => response.data))
  }

  sendProductData(data: Product){
    return this.http.post(this.sendUrl, data)
  }
  addProductFrom(){
  }
}
