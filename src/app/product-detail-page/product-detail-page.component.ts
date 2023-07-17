import { Component } from '@angular/core';
import {CarouselImage} from "./carousel/carousel.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent {
  selectedSize: string = '';

  sizes: string[] = [
    "XS", "S", "M", "L"
  ]
  constructor(private router: Router) {
  }
  public slides: CarouselImage[] = [
    { src: "https://picsum.photos/id/237/200/300", alt: "nature1"},
    { src: "https://picsum.photos/seed/picsum/200/300", alt: "nature2"},
    { src: "https://picsum.photos/200/300?grayscale", alt: "nature3"}
  ]

  selectSize() {
    console.log(this.selectedSize)
  }

  addToShoppingCart(){
    localStorage.setItem('image', this.slides[0].src)
    this.router.navigateByUrl('shoppingCart')
  }

}



