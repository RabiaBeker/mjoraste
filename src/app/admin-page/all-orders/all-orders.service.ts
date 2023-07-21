import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from "../../../environments/env";
import {map, Observable} from "rxjs";
import {GetAllOrdersResponse} from "../../model/getAllOrdersResponse";
import {ApiResponse} from "../../model/api-response";

@Injectable({
  providedIn: 'root'
})
export class AllOrdersService {
  baseUrl = env.getAllOlders
  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<GetAllOrdersResponse[]>{
    return this.http.get<ApiResponse<GetAllOrdersResponse[]>>(this.baseUrl)
      .pipe(map((response) => response.data))
  }
}
export interface PeriodicElement {
  id: string;
  position: number;
  productAmount: number;
  totalPrice: number;
  createdDate?: string;
  action?: string;
}
