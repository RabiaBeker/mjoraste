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

  public categoriesImageUrl  = [
    "./assets/mjoraste-img-1.jpg",
    "./assets/mjoraste-img-2.jpg",
    "./assets/mjoraste-img-3.jpg",
    "./assets/mjoraste-img-4.jpg"
  ]
    constructor(private router: Router, private homePageService: HomePageService) {
  }
  ngOnInit(){
  this.homePageService.getAllCategories().subscribe((data:Categories) => {
    this.categoriesList = data.data;
    console.log(this.categoriesList)
  })
  }

  fromCategoriesSectiontoProduct(id:number){
    this.homePageService.getProductId(id).subscribe((data) => console.log(data));
    this.router.navigateByUrl(`products/${id}`)
  }

}

export interface categoriesDetail{
  id:number,
  name:string
}



