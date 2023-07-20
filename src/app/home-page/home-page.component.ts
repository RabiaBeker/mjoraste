import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Categories, HomePageService, Products} from "./home-page.service";
import {Observable} from "rxjs";
import {CarouselImage} from "../product-detail-page/carousel/carousel.component";

export const CATEGORIES = [
    {
      asset: './assets/mjoraste-img-4.jpg',
      name: 'Siyah Elbise'
    }
  ]

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  public categoriesList?: any;

  public productList?: any;

  public productList2: [] = [];

  public categoriesImageUrl: any  = []

    constructor(private router: Router, private homePageService: HomePageService) {
  }

  catOneImageUrl : string = "";

  ngOnInit(){

    this.homePageService.getAllCategories().subscribe((data:Categories) => {
      this.categoriesList = data.data;

    console.log(this.categoriesList);
    })

    this.homePageService.getTopProducts().subscribe((data:Products) => {

      this.productList = data.data.slice(0,6);

      console.log(this.productList);

    })


  }

  fromCategoriesSectiontoProduct(id:number){
    this.router.navigateByUrl(`products/categoryId/${id}`)
  }

  fromCategoriesSectiontoProductDetail(id:number){
    this.router.navigateByUrl(`products/detail/productId/${id}`)
  }

}

export interface categoriesDetail{
  id:number,
  name:string
}



