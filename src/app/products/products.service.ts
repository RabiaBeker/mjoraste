import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from "../../environments/env";
import {ApiResponse} from "../model/api-response";
import {GetAllProductByCategoryIdResponse} from "../model/getAllProductByCategoryIdResponse";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = env.apiUrl + '/api/products'

  constructor(private http: HttpClient) { }

  public getProductsByCategoryId(categoryId: number): Observable<GetAllProductByCategoryIdResponse[]>{
    return this.http.get<ApiResponse<GetAllProductByCategoryIdResponse[]>>(this.baseUrl + `/findByCategoryId/${categoryId}`)
      .pipe(map((response) => response.data))
  }
}



