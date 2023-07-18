import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ProductDetailPageComponent} from "./product-detail-page/product-detail-page.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "detail", component: ProductDetailPageComponent
  },
  {
    path: "shoppingCart", component: ShoppingCartComponent
  },
  {
    path:"products/:id", component: ProductsComponent
  },
  {
    path:"login",component:LoginComponent
  },

  {
    path:"register", component:RegisterComponent
  },
  {
    path:"account", component:AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
