import { Component } from '@angular/core';
import {AllOrdersService, PeriodicElement} from "./all-orders.service";
import {GetAllOrdersResponse} from "../../model/getAllOrdersResponse";

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent {

  allOrders: GetAllOrdersResponse[];
  displayedColumns:string[] = ['position','createdDate', 'id', 'productAmount', 'totalPrice', 'action'];
  dataSource!:OrderAdmin[];

  constructor(private allOrdersService: AllOrdersService) {
  }
  ngOnInit(){
    this.allOrdersService.getAllOrders().subscribe((data) => {
      this.allOrders = data;
      console.log(this.allOrders)
    })
    this.dataSource = this.allOrders.map((order) => {
      //const amount = order.orderItems.
      return {
        orderDate: order.orderDate,
        orderCode: ''+ order.orderCode,
        orderStatus: order.orderStatus
      }
    })
  };
}
export interface OrderAdmin{
  orderCode: string;
  orderStatus: boolean;
  orderDate: string;
}
