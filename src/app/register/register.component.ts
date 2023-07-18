import {Component, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from 'app/login/login-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { RegisterService } from './register.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // @ViewChild("frm", {static: true}) frm: NgForm;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private registerService: RegisterService) { }
  onRegister(data: UserInfo) {
    if(data.email!="" && data.password!=""   && data.phoneNumber!=""  && data.name!=""  && data.surName!="" ){

      if(data.password === data.passwordAgain){
          data.email = data.email.trim();
          data.password = data.password.trim();
          data.phoneNumber = data.phoneNumber.trim();
          data.name = data.name.trim();
          data.surName = data.surName.trim();
        this.registerService.sendUserInfo(data).subscribe((data) => {
            console.log(data);
            this.router.navigateByUrl("/login")
        })
      }else{
        alert("Passwords do not match");
      }
      }else{
        alert("Required fields must be filled out");
      }
  }
}
export interface UserInfo {
  email: string,
  name: string,
  surName: string,
  password: string,
  passwordAgain: string,
  phoneNumber: string,
}
