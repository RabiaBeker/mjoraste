import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PaymentDetailService} from "./payment-detail.service";
import {OrdersInfoRequest} from "../../model/ordersRequest";

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent {
  constructor(private _formBuilder: FormBuilder, private router: Router, private paymentDetailService: PaymentDetailService) {}

  isEditable = false;
  paymentId = localStorage.getItem('paymentId')

  firstFormGroup = this._formBuilder.group({
    cardNumber: ['', Validators.required],
    cardOwner: ['', Validators.required],
    mm: ['', Validators.required],
    vv: ['', Validators.required],
    cvv: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    fullAddress: ['', Validators.required],
    town:  ['', Validators.required],
    city:  ['', Validators.required],
  });

  sendCardInfo(data: any){
    console.log(data)
  }
  sendAddressInfo() {
    const data = this.secondFormGroup.value
    const payload: OrdersInfoRequest = {
      city: data.city,
      fullAddress: data.fullAddress,
      paymentTypeId: 1,
      town: data.town
    }
    this.paymentDetailService.sendUserAddressInfo(payload).subscribe((response) => console.log(response))
  }
  createNewOrder(){
    alert("cerated your order, order id: 123456")
    this.router.navigateByUrl('account')
  }
}


