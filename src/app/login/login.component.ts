import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from 'app/login/login-service.service';
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
      this.loginService.login(this.loginRequestModel).subscribe((data: UserLogin) => {
        if(data.data === null){
          alert("your email or password is wrong")
          this.router.navigateByUrl("/login")
        } else {
          console.log(data)
          this.router.navigateByUrl("/");
          localStorage.setItem("email", data.data.email);
          localStorage.setItem("id", data.data.id.toString())
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
export interface UserLogin {
  data: {
    email: string,
    id: number,
    name: string,
    phoneNumber: string,
    surName: string
  },
  message: string,
  success: boolean
}
