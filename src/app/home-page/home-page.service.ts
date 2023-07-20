import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {env} from "../../environments/env";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  getAboutTextUrl = env.getAboutText
  getAllCategoriesUrl = env.getAllCategoriesUrl;
  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Categories> {
    return this.http.get<Categories>(this.getAllCategoriesUrl)
  }
  getAboutText(): Observable<Text[]>{
    return this.http.get<Text[]>(this.getAboutTextUrl)
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

