import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from "./products.service";
import {GetAllProductByCategoryIdResponse} from "../model/getAllProductByCategoryIdResponse";

@Component({
  selector: 'app-posts',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public productsByCategoryId?: GetAllProductByCategoryIdResponse[];
  public categoryName?: string;
  constructor(private activatedRouter: ActivatedRoute, private productsService: ProductsService) {
  }
  ngOnInit() {
    const categoryId: number = Number(this.activatedRouter.snapshot.paramMap.get('id'))
    console.log(categoryId)
    this.productsService.getProductsByCategoryId(categoryId).subscribe((data) => {
      console.log(data);
      this.productsByCategoryId = data
      if (data && data.length > 0) {
        this.categoryName = data[0].categoryName
      }
    })
  }

}
