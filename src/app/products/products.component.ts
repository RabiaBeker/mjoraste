import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {



  jsonObject!: JSON;

  posts: any = [
    {
      id: 1,
      name: "john",
      imageUrl: './assets/image1.jpg',
      price:'1000'
    },
    {
      id: 2,
      name: "Franc",
      imageUrl: './assets/image1.jpg',
      price:'1000'
    },
    {
      id: 3,
      name: "Andrew",
      imageUrl: './assets/image1.jpg',
      price:'1000'
    },
    {
      id: 11,
      name: "Mark",
      imageUrl: './assets/image1.jpg',
      price:'1000'
    },
    {
      id: 12,
      name: "Eric",
      imageUrl: './assets/image1.jpg',
      price:'1000'
    },
    {
      id: 8,
      name: "Tony",
      imageUrl: './assets/image1.jpg',
      price:'1000'
    },
    {
      id: 222,
      name: "Tony",
      imageUrl: './assets/image1.jpg',
      price:'1000'
    },
    {
      id: 111,
      name: "Tony",
      imageUrl: './assets/image1.jpg',
      price:'1000'
    },
    {
      id: 112,
      name: "Tony",
      imageUrl: './assets/image1.jpg',
      price:'1000'
    },
    {
      id: 113,
      name: "Tony",
      imageUrl: './assets/image1.jpg',
      price:'1000'
    },
    {
      id: 113,
      name: "Tony",
      imageUrl: './assets/image1.jpg',
      price:'1000'
    },
    {
      id: 113,
      name: "Tony",
      imageUrl: './assets/image1.jpg',
      price:'1000'
    },
    {
      id: 113,
      name: "Tony",
      imageUrl: './assets/image1.jpg',
      price:'1000'
    }


  ]

  id: any;

  constructor() {
    this.jsonObject = <JSON>this.posts;



  }

}
