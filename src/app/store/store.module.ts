import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { ModelModule } from '../../Model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule,CommonModule, RouterModule],
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailsComponent,
    CheckoutComponent,

  ],
  exports: [CartDetailsComponent, CheckoutComponent, StoreComponent],
})
export class StoreModule {}
