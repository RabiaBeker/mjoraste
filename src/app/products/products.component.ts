import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ByProductsId, HomePageService} from "../home-page/home-page.service";

@Component({
  selector: 'app-posts',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private activatedrouter: ActivatedRoute, private homePageService: HomePageService) {
    this.jsonObject = <JSON>this.posts;
  }
  ngOnInit() {
    const categoryid:number = Number(this.activatedrouter.snapshot.paramMap.get('id'))
    console.log(categoryid)
    this.homePageService.getProductId(categoryid).subscribe((data: ByProductsId) => console.log(data))
  }


  jsonObject!: JSON;

  posts: any = [
    {
      id: 1,
      name: "john",
      imageUrl: './assets/mjoraste-img-1.jpg',
      price:'1000'
    },
    {
      id: 2,
      name: "Franc",
      imageUrl: './assets/mjoraste-img-1.jpg',
      price:'1000'
    },
    {
      id: 3,
      name: "Andrew",
      imageUrl: './assets/mjoraste-img-1.jpg',
      price:'1000'
    },
    {
      id: 11,
      name: "Mark",
      imageUrl: './assets/mjoraste-img-1.jpg',
      price:'1000'
    },
    {
      id: 12,
      name: "Eric",
      imageUrl: './assets/mjoraste-img-1.jpg',
      price:'1000'
    },
    {
      id: 8,
      name: "Tony",
      imageUrl: './assets/mjoraste-img-1.jpg',
      price:'1000'
    },
    {
      id: 222,
      name: "Tony",
      imageUrl: './assets/mjoraste-img-1.jpg',
      price:'1000'
    },
    {
      id: 111,
      name: "Tony",
      imageUrl: './assets/mjoraste-img-1.jpg',
      price:'1000'
    },
    {
      id: 112,
      name: "Tony",
      imageUrl: './assets/mjoraste-img-1.jpg',
      price:'1000'
    },
    {
      id: 113,
      name: "Tony",
      imageUrl: './assets/mjoraste-img-1.jpg',
      price:'1000'
    },
    {
      id: 113,
      name: "Tony",
      imageUrl: './assets/mjoraste-img-1.jpg',
      price:'1000'
    },
    {
      id: 113,
      name: "Tony",
      imageUrl: './assets/mjoraste-img-1.jpg',
      price:'1000'
    },
    {
      id: 113,
      name: "Tony",
      imageUrl: './assets/mjoraste-img-1.jpg',
      price:'1000'
    }
  ]
  id: any;

}
