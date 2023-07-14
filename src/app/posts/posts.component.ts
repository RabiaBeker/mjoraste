import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

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
    }
  ]

  constructor() {
    this.jsonObject = <JSON>this.posts;

  }

}
