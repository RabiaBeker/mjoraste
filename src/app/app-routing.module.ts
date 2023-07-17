import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {RegisterComponent} from "./register/register.component";
import {ProductDetailPageComponent} from "./product-detail-page/product-detail-page.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  // {
  //   path: "login", component: LoginComponent
  // }
  {
    path: "detail", component: ProductDetailPageComponent
  },
  {
    path: "shoppingCart", component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
