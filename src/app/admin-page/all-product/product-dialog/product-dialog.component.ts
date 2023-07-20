import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CreatProductRequest} from "../../../model/creatProductRequest";
import {AllProductService} from "../all-product.service";

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent {
  categoryId:string[] = ["bag", "jewelry", "glasses", "beauty"]
  selectedCategory: string;
  constructor(private formBuilder: FormBuilder, private allProductService: AllProductService) {
  }

  productFrm = this.formBuilder.group({
    color: ['', Validators.required],
    description: ['', Validators.required],
    name: ['', Validators.required],
    price: ['', Validators.required],
    size: ['', Validators.required],
    stock: ['', Validators.required]
  });

  sendProductInfo(){
    const data = this.productFrm.value
    const product: Product = {
      categoryId: this.selectedCategory,
      color: data.color,
      description: data.description,
      name: data.name,
      price: data.price,
      size: data.size,
      brandId: "1"
    }
    console.log(data);
    this.allProductService.sendProductData(product).subscribe((data)=> console.log(data))
  }
}
export interface Product {
  categoryId: string;
  color: string;
  description: string;
  name: string;
  price: string;
  size: string;
  brandId: string;
}
