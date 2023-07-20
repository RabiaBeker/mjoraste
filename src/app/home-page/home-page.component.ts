import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Categories, HomePageService} from "./home-page.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  public categoriesList?: any;
  public text: string;

  constructor(private router: Router, private homePageService: HomePageService) {
  }
  ngOnInit(){

    this.homePageService.getAllCategories().subscribe((data:Categories) => {
      this.categoriesList = data.data;

     console.log(this.categoriesList);
    })
    this.homePageService.getAboutText().subscribe((data) => {

      console.log(data[0])
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

export interface Text{
  id: string,
  aboutText: string;
}

