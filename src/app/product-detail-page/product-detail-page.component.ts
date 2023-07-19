import { Component } from '@angular/core';
import {CarouselImage} from "./carousel/carousel.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent {

  numberOfProduct : number = 1;

  constructor(private router: Router,private activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {
    const productId: number = Number(this.activatedRouter.snapshot.paramMap.get('id'))
    console.log(productId)
  }

  userId = localStorage.getItem("id");


  public slides: CarouselImage[] = [
    { src: "https://picsum.photos/id/237/200/300", alt: "nature1"},
    { src: "https://picsum.photos/seed/picsum/200/300", alt: "nature2"},
    { src: "https://picsum.photos/200/300?grayscale", alt: "nature3"}
  ]



  addToShoppingCart(){
    localStorage.setItem('image', this.slides[0].src)
    if(this.userId!=null){
      this.router.navigateByUrl('shoppingCart')
    }else{
      this.router.navigateByUrl("/login")
    }

  }

  reduceProductAmount(){
    if(this.numberOfProduct > 1){
      this.numberOfProduct = this.numberOfProduct -1;
    }

  }

  increaseProductAmount(){
    if(this.numberOfProduct < 3){
      this.numberOfProduct = this.numberOfProduct + 1;
    }else{
      alert("You can add maximum 3 products in one order");
    }

  }

}



