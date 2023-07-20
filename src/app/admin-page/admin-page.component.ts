import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  key: string;
  isAdmin = localStorage.getItem('isAdmin')
  constructor(private router:Router) {
  }
  ngOnInit(){
    if(this.isAdmin === 'false'){
      this.router.navigateByUrl('')
    }
  }
  logOutFromApplication(){
    this.router.navigateByUrl('login')
    localStorage.clear()
  }
  goToAllProduct(){
    this.key = "all-product"
  }
  getAllOrders(){
    this.key = "all-orders"
  }
}
