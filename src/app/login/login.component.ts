import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from 'app/service/login-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequestModel } from 'app/model/login-request-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginRequestModel : LoginRequestModel;

  email: string = '';

  password: string = '';

  /*private sendUrl: string;

  constructor(private http: HttpClient) {
    this.sendUrl = 'http://localhost:8081/sendMail';
  }


  mail: string = '';
  submit(): void {
    console.log(this.mail);
    this.http.post<String>(this.sendUrl, this.mail);
  }*/



  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private loginService: LoginServiceService) {

          this.loginRequestModel = new LoginRequestModel;

  }

  onSubmit() {

    if(this.email != null && this.email!="" && this.password != null && this.password != ""){
      this.loginRequestModel.email = this.email;
      this.loginRequestModel.password = this.password;

      console.log(this.loginRequestModel);
      this.loginService.login(this.loginRequestModel).subscribe(result => this.goToResult());
    }else{
      alert("Required fields must be filled out");
    }


  }

  goToResult() {
    console.log("deneme başarılı");
    this.router.navigate(['/products']);
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }




}
