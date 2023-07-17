import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path:"products", component: ProductsComponent
  },
  {
    path:"",component:LoginComponent
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
