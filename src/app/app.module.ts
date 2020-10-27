import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [AppComponent, CartDetailsComponent, CheckoutComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
