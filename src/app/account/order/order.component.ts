import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  id: string;
  position: number;
  productAmount: number;
  totalPrice: number;
  createdDate?: string;
  action?: string;
}

let elementData: PeriodicElement[] = [
  {position: 1,createdDate:"11.22.63" ,id: 'Hydrogen', productAmount: 1, totalPrice: 1280, action:'cancel'},
  {position: 2,createdDate:"11.22.63" , id: 'Helium', productAmount: 4, totalPrice: 1375, action:'cancel'},

];


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']

})



export class OrderComponent {

  key : String = "online";

  displayedColumns:string[] = ['position','createdDate', 'id', 'productAmount', 'totalPrice', 'action'];

  datas:PeriodicElement[]=[

  {position: 1,createdDate:"11.22.63" ,id: 'Hydrogen', productAmount: 1, totalPrice: 1280, action:'cancel'},
  {position: 2,createdDate:"11.22.63" , id: 'Helium', productAmount: 4, totalPrice: 1375, action:'cancel'},

  ]
  dataSource = this.datas;



  onlineOrders(){
    this.key="online"


  }

  canceledOrders(){
    this.key="canceled"

  }



  deleteItem(id: string): void {
    console.log(id);
  }




}





