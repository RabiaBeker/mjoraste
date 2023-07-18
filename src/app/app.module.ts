import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ProductDetailPageComponent} from "./product-detail-page/product-detail-page.component";
import { CarouselComponent } from './product-detail-page/carousel/carousel.component';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioButton, MatRadioModule} from "@angular/material/radio";
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { RegisterService } from './register/register.service';
import { AccountComponent } from './account/account.component';
import { MatButtonModule} from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";
import { OrderComponent } from './account/order/order.component';
import { UserComponent } from './account/user/user.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomePageComponent,
    ProductDetailPageComponent,
    CarouselComponent,
    NavbarComponent,
    ShoppingCartComponent,
    LoginComponent,
    ProductsComponent,
    AccountComponent,
    OrderComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

