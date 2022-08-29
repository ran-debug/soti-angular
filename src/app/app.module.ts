import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component'
import { ProductComponent } from './pages/product/product.component';
import { ErrorComponent } from './error/error.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProductSubCategoryComponent} from './pages/product-sub-category/product-sub-category.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContentComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    ProductdetailComponent,
    ProductComponent,
    ErrorComponent,
    RegisterPageComponent,
    ProductSubCategoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
