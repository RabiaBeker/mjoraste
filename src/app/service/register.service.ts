import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class RegisterService {



  private userSaveUrl: string;

  constructor(private http: HttpClient) {

    "this.userSaveUrl = 'http://localhost:1907/api/auth';"
    this.userSaveUrl = 'http://localhost:8081/register';
  }




  public save(user: User) {
    return this.http.post<User>(this.userSaveUrl, user);
  }
}
