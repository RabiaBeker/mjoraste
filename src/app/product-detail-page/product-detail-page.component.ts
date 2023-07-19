import { Component } from '@angular/core';
import {CarouselImage} from "./carousel/carousel.component";
<<<<<<< HEAD
import {ActivatedRoute, Router} from "@angular/router";
=======
import {Router} from "@angular/router";
import {ActivatedRoute} from '@angular/router';
>>>>>>> 1d5576432b82217e738577d607183fd06868c93a

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent {

  constructor(private router: Router,private activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {
    const productId: number = Number(this.activatedRouter.snapshot.paramMap.get('id'))
    console.log(productId)
  }

  email = localStorage.getItem("email")

  selectedSize: string = '';

<<<<<<< HEAD
=======
  sizes: string[] = [
    "XS", "S", "M", "L"
  ]

>>>>>>> 1d5576432b82217e738577d607183fd06868c93a
  public slides: CarouselImage[] = [
    { src: "https://picsum.photos/id/237/200/300", alt: "nature1"},
    { src: "https://picsum.photos/seed/picsum/200/300", alt: "nature2"},
    { src: "https://picsum.photos/200/300?grayscale", alt: "nature3"}
  ]

  sizes: string[] = [
    "XS", "S", "M", "L"
  ]
  constructor(private router: Router, private activedRouter: ActivatedRoute) {
  }

  ngOnInit(){
    const productId: number = Number (this.activedRouter.snapshot.paramMap.get("id"))
    console.log(productId)
  }
  selectSize() {
    console.log(this.selectedSize)
  }

  addToShoppingCart(){
    localStorage.setItem('image', this.slides[0].src)
    if(this.email){
      this.router.navigateByUrl('shoppingCart')
    }
    this.router.navigateByUrl("/login")
  }

}



