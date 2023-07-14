import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  fromHomePageToCard(){
    //apiye istek atılacak
    //1) mevcut shoppingcard çekilecek
  }

  fromHomePageToAccount(){
    //
  }
  fromCategoriesSectiontoProduct(){
    console.log("rabia")
  }
}
