import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Categories, HomePageService} from "./home-page.service";
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

  public categoriesImageUrl  = []
    constructor(private router: Router, private homePageService: HomePageService) {
  }

  catOneImageUrl : string = "";

  ngOnInit(){

  this.homePageService.getAllCategories().subscribe((data:Categories) => {
    this.categoriesList = data.data;

   console.log(this.categoriesList);
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



