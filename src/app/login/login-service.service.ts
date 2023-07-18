import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { LoginRequestModel } from 'app/model/login-request-model';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class LoginServiceService {

  private loginUrl: string;



  constructor(private http: HttpClient) {
    this.loginUrl = 'http://localhost:1907/api/auth/login';

  }


  public login(loginRequestModel:LoginRequestModel): Observable<LoginRequestModel[]> {
    return this.http.post<LoginRequestModel[]>(this.loginUrl, loginRequestModel);
  }


}
