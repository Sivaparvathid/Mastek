import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TabletsComponent } from './tablets/tablets.component';
import { WatchesComponent } from './watches/watches.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {CartComponent} from './cart/cart.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule,Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    MobilesComponent,
    TabletsComponent,
    WatchesComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    HeaderComponent,
    CheckoutComponent,
    SignupComponent,
    DashboardComponent
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
