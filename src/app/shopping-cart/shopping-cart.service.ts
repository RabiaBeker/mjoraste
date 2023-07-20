import { Injectable } from '@angular/core';
import { ApiResponse } from 'app/model/api-response';
import { Card } from 'app/model/card';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { env } from 'environments/env';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ShoppingCartService {

  private getCartsUrl = env.apiUrl +'/api/carts';;

  constructor(private http: HttpClient) {
  }

  public getCart(userId:number): Observable<ApiResponse<Card>> {
    return this.http.get<ApiResponse<Card>>(this.getCartsUrl+ `/${userId}`);
  }
}
