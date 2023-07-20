import { Component } from '@angular/core';
import {CarouselImage} from "./carousel/carousel.component";
import {ActivatedRoute, Router} from "@angular/router";
import { ProductDetailService } from './product-detail.service';
import { CartItemModel } from 'app/model/cardItemModel';


@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent {

  cardItemModel : CartItemModel;

  productId:number=0;

  public description?:string="";
  public name?:string="";
  public price?:number=0;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private productDetailService: ProductDetailService

    ) {
      this.cardItemModel = new CartItemModel;
     }



  numberOfProduct : number = 1;

  userId = localStorage.getItem("id");

  public slides: CarouselImage[] = []

  ngOnInit() {
    this.productId = Number(this.activatedRouter.snapshot.paramMap.get('id'));


    this.productDetailService.getProductsByProductId(this.productId).subscribe((data) => {


        this.description = data.description;
        this.name = data.name;
        this.price = data.price;

        for(let i = 0; i < 2; i++){

          this.slides.push({src:"../../assets/images/"+data.images?.[i].imageUrl,alt:"nature"});
        }



    })
  }

  addToShoppingCart(){


    localStorage.setItem('image', this.slides[0].src)


    if(this.userId!=null){

      this.cardItemModel.productId = this.productId;
      this.cardItemModel.quantity = this.numberOfProduct;



      this.productDetailService.sendProductAndQuantity(this.cardItemModel).subscribe((data) => {

        this.router.navigateByUrl('shoppingCart')
      })

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



