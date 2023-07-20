import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PaymentDialogComponent} from "./payment-dialog/payment-dialog.component";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  constructor(private dialogRef: MatDialog) {
  }
  goToShoppingCart(){
    console.log('rabia')
  }

  deleteFromStorage(){
    console.log("rabia")
  }

  openPaymentDialog(){
    this.dialogRef.open(PaymentDialogComponent)
  }
}
