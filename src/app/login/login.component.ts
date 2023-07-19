import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from 'app/login/login-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequestModel } from 'app/model/login-request-model';
import {ApiResponse} from "../model/api-response";
import {LoginResponse} from "../model/loginResponse";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginRequestModel : LoginRequestModel;

  email: string = '';

  password: string = '';
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
      this.loginService.login(this.loginRequestModel).subscribe((data: ApiResponse<LoginResponse>) => {
        if(data.data === null){
          alert("your email or password is wrong")
          this.router.navigateByUrl("/login")
        } else {
          console.log(data)
          this.router.navigateByUrl("/");

          let id:any = data.data.id;

          localStorage.setItem("id",id);

          /*if (data.data.email && data.data.email !== "") {
            console.log(data.data)
            localStorage.setItem("email", data.data.email);
          } else if (data.data.id) {
            localStorage.setItem("id", data.data.id.toString())
          }*/
        }
      });
    }else{
      alert("Required fields must be filled out");
    }
  }
  goToRegister(){
    this.router.navigate(['/register']);
  }

}
