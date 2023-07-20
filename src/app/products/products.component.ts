import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from "./products.service";
import {GetAllProductByCategoryIdResponse} from "../model/getAllProductByCategoryIdResponse";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public productsByCategoryId?: GetAllProductByCategoryIdResponse[];
  public categoryName?: string;
  constructor(private router: Router,private route: ActivatedRoute,private activatedRouter: ActivatedRoute, private productsService: ProductsService) {
  }
  ngOnInit() {
    let key:String = "";

    this.route.params.subscribe({
      next: (param) => {
        key = param['searchInput'];
        if (key != undefined){
          console.log(param['searchInput']);
          //arama kelimesi ile backende sorgu gönder ve products component içinde döndür
        }else{
          const categoryId: number = Number(this.activatedRouter.snapshot.paramMap.get('id'))
          console.log("here")
          console.log(categoryId)
          this.productsService.getProductsByCategoryId(categoryId).subscribe((data) => {
            console.log(data);
            this.productsByCategoryId = data
            console.log(this.productsByCategoryId)
            if (data && data.length > 0) {
              this.categoryName = data[0].categoryName
            }
          })
        }
      }
    })
  }

  goToProductDetail(id:any){
    this.router.navigate([`products/detail/productId/${id}`]);
  }

}
