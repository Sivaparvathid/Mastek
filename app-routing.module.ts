import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MobilesComponent} from './mobiles/mobiles.component';
import {TabletsComponent} from './tablets/tablets.component';
import {WatchesComponent} from './watches/watches.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import{CartComponent} from './cart/cart.component';
import{SignupComponent} from './signup/signup.component';
import{DashboardComponent} from'./dashboard/dashboard.component';
import{CheckoutComponent} from './checkout/checkout.component';



const routes: Routes = [
  {path:"mobiles",component:MobilesComponent},
  {path:"tablets",component:TabletsComponent},
  {path:"watches",component:WatchesComponent},
  {path:"login",component:LoginComponent},
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "cart", component: CartComponent},
  {path:"signup",component:SignupComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"checkout",component:CheckoutComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
