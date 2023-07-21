import { Component } from '@angular/core';
import {AdminPageService} from "../admin-page.service";
import {GetAllProductResponse} from "../../model/getAllProductResponse";
import {AllProductService} from "./all-product.service";
import {MatDialog} from "@angular/material/dialog";
import {ProductDialogComponent} from "./product-dialog/product-dialog.component";

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent {

  allProduct?: GetAllProductResponse[];
  constructor(private adminPageService: AdminPageService,private allProductService: AllProductService, private dialogRef: MatDialog) {
  }

  ngOnInit(){
    this.allProductService.getProducts().subscribe((data) => {
      this.allProduct = data
      console.log('deneme')
      console.log(this.allProduct)
    })
  }

  openProductDialog(){
    this.dialogRef.open(ProductDialogComponent)
  }

  getAllProduct(){
    this.adminPageService.getProduct().subscribe((data) => {
      console.log(data);
      this.allProduct = data;
    })
  }
}
