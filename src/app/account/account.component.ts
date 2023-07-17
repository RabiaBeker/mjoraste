import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  key : String = "orders";

  goToOrders(){
    this.key = "orders";
    console.log("orders")
  }

  goToUser(){
    this.key = "user";
    console.log("user");
  }
}
