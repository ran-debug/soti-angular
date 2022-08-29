import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './guard/auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductSubCategoryComponent } from './pages/product-sub-category/product-sub-category.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {path : '' , redirectTo : 'home' , pathMatch : 'full'},
  {path : 'home' , component:HomeComponent, canActivate:[AuthGuard]},
  {path : 'about' , component:AboutComponent , canActivate:[AuthGuard]},
  {path : 'contact' , component:ContactComponent},
  {path : 'product/:catId' , component:ProductComponent, canActivate:[AuthGuard]},
  {path : 'productDetail/:_id' , component :ProductdetailComponent, canActivate:[AuthGuard] },
  {path : 'registerform' , component:RegisterPageComponent},
  {path : 'productSub/:subId' , component:ProductSubCategoryComponent},
  {path : 'login' , component:LoginComponent},
  {path : '**' , component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
