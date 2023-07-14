import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from 'app/service/login-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /*private sendUrl: string;

  constructor(private http: HttpClient) {
    this.sendUrl = 'http://localhost:8081/sendMail';
  }


  mail: string = '';
  submit(): void {
    console.log(this.mail);
    this.http.post<String>(this.sendUrl, this.mail);
  }*/

  mail!: String;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private loginService: LoginServiceService) {

  }

  onSubmit() {
    console.log(this.mail);
    this.loginService.submit(this.mail).subscribe(result => this.goToResult());
  }

  goToResult() {
    console.log("deneme başarılı");
  }




}
