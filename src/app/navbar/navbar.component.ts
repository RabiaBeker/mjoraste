import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchInput:string="";

  key:string="";

  cartItemIdSize:number;

  ngOnInit(){
    if(localStorage.getItem('id')==null){
      this.key = "login";
      this.cartItemIdSize = 0;
    }else{
      this.key = "account";
    }
  }

  constructor(private router: Router) {
  }
  fromHomeToShoppingCard(){
    this.router.navigateByUrl("shoppingCart")
  }

  fromHomeToAccount(){
    this.router.navigateByUrl("account")
  }

  search(){
    this.router.navigate([`products/search/${this.searchInput}`]);
  }

  fromHomeToLogin(){
    this.router.navigateByUrl("login")
  }
}
