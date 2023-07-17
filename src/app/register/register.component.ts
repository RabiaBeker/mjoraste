import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from 'app/service/login-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user : User;

  email: string = '';
  name: string = '';
  surName: string = '';
  password: string = '';
  passwordAgain: string='';
  phoneNumber: string = '';

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private registerService: RegisterService) {
          this.user = new User();
  }

  onRegister() {


    if(this.email!="" && this.password!=""   && this.phoneNumber!=""  && this.name!=""  && this.surName!="" ){

      if(this.password === this.passwordAgain){
          this.user.email = this.email.trim();
          this.user.password = this.password.trim();
          this.user.phoneNumber = this.phoneNumber.trim();
          this.user.name = this.name.trim();
          this.user.surName = this.surName.trim();

          console.log(this.user);
          this.registerService.save(this.user).subscribe(result => this.goToResult());
      }else{
        alert("Passwords do not match");
      }

    }else{
      alert("Required fields must be filled out");
    }


  }

  goToResult() {
    this.router.navigate(['/']);
  }
}
