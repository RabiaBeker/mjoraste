import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  goToShoppingCart(){
    console.log('rabia')
  }

  deleteFromStorage(){
    console.log("rabia")
  }

  increaseProductAmount(){
    //stoktan düşülecek
    // request yapılacak shopping cart güncellenecek
  }
  reduceProductAmount(){
    //stokk artacak
    // request yapılacak shopping cart güncellenecek
  }
}
