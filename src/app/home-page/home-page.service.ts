import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {env} from "../../environments/env";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  getAllCategoriesUrl = env.getAllCategoriesUrl
  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Categories> {
    return this.http.get<Categories>(this.getAllCategoriesUrl)
  }
  getProductId(id:number): Observable<ByProductsId>{
    return this.http.get<ByProductsId>(`http://localhost:1907/api/products/findByCategoryId/${id}`)
  }
}
export interface Categories{
  data: [
      {
        id: number,
        name: string
      }
  ],
  message: string,
  success: boolean
}
export interface ByProductsId {
  success: boolean,
  message: string,
  data: [
    {
      id: number,
      name: string,
      price: number,
      images: [],
      categoryName: string,
      brandName: string
    }
  ]
}
