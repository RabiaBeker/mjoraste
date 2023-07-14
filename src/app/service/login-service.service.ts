import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class LoginServiceService {

  private mailUrl: string;

  constructor(private http: HttpClient) {
    this.mailUrl = 'http://localhost:8081/sendMail';
  }


  public submit(mail: String) {
    return this.http.post<String>(this.mailUrl, mail);
  }
}
