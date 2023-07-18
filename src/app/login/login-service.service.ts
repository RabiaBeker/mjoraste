import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { LoginRequestModel } from 'app/model/login-request-model';
import {UserLogin} from "./login.component";

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class LoginServiceService {

  private loginUrl: string;


  constructor(private http: HttpClient) {
    this.loginUrl = 'http://localhost:1907/api/auth/login';

  }

  public login(loginRequestModel:LoginRequestModel): Observable<UserLogin> {
    return this.http.post<UserLogin>(this.loginUrl, loginRequestModel);
  }


}
