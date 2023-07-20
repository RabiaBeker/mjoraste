import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {  OrderService } from './order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'app/model/api-response';
import { Order } from 'app/model/order';


export interface PeriodicElement {
  id: string;
  position: number;
  productAmount: number;
  totalPrice: number;
  createdDate?: string;
  action?: string;
}




@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']

})



export class OrderComponent {

  userId!:number;

  key : String = "online";

  orderList : Array<Order> = [];

  orderModel : OrderModel;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService : OrderService) {
      this.orderModel = new OrderModel;
  }

  displayedColumns:string[] = ['position','createdDate', 'id', 'productAmount', 'totalPrice', 'action'];

  dataSource!:PeriodicElement[];


  ngOnInıt(){
    this.orderService.getOrders(this.userId).subscribe((data: ApiResponse<Order>) => {

      console.log(data);



     // this.orderList.push(data.data);

    });
  }

  onlineOrders(){

    this.userId =Number(localStorage.getItem('id'));

    this.orderService.getOrders(this.userId).subscribe((data: any) => {

      // this.orderList.push(data.data);

      console.log(data.data);

      for(let val of this.orderList){
        console.log(val);
      }

      /*for(let i = 0 ; i<data.data.length; i++){
        const orderItem: Order = data.data[i];
        console.log(orderItem.orderCode);


        let myMap = new Map<string, object>();

        myMap.set('position',orderItem.id).set()

      }*/


      const list: Order[] = data.data;

      this.dataSource = list.map((order, index) => {
        //const amount = order.orderItems.
        return {
          position: index,
          createdDate: order.orderDate,
          id: ''+ order.id,
          productAmount: order.orderItems.length,
          totalPrice: order.totalPrice,
          action: 'cancel'
        }
      })




    });

    let datas2 : PeriodicElement[]=[
      {position: 1,createdDate:"11.22.70" ,id: 'Hydrogen', productAmount: 1, totalPrice: 1280, action:'cancel'},
      {position: 2,createdDate:"11.22.70" , id: 'Helium', productAmount: 4, totalPrice: 1375, action:'cancel'},
    ]

    this.key="online"

    //let dataSource:PeriodicElement[] = this.datas;
    this.dataSource = datas2;

  }

  canceledOrders(){
    this.key="canceled"

  }



  deleteItem(id: string): void {
    console.log(id);
  }

}

export class OrderModel{
      id!: number;
      orderCode!: string;
      orderDate!: string;
      totalPrice!: number;
      userId!: number;
}





