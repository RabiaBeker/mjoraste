import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'app/model/card';
import { ApiResponse } from 'app/model/api-response';
import { SpecifyCartItemModel } from 'app/model/SpecifyCartItemModel';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  public totalPrice?:number=0;

  specifyCartModel : SpecifyCartItemModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoppingCardService : ShoppingCartService) {
      this.specifyCartModel = new SpecifyCartItemModel;
  }

  private userId:number=0;

  ngOnInit(){
    this.userId =Number(localStorage.getItem('id'));
    console.log(this.userId);

    this.shoppingCardService.getCart(this.userId).subscribe((data: ApiResponse<Card>) => {

      console.log(data);

      console.log(data.data.totalPrice);

      this.totalPrice = data.data.totalPrice;
    });
  }
  openPaymentDialog(){

  }

  deleteFromStorage(){

  }

  goToShoppingCart(){

  }
}
