import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {env} from "../../environments/env";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  private baseUrl = env.apiUrl + '/api/products'
  private activatedRouter: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const productId: number = Number(this.activatedRouter.snapshot.paramMap.get('id'))
    console.log(productId)
  }
}


