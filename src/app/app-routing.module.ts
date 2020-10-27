import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreFirstGaurd } from './store/storefirst.guard';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: 'store',
        component: StoreComponent,
        canActivate: [StoreFirstGaurd],
      },
      {
        path: 'cart',
        component: CartDetailsComponent,
        canActivate: [StoreFirstGaurd],
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [StoreFirstGaurd],
      },
      { path: '**', redirectTo: '/store' },
    ]),
  ],
  providers: [StoreFirstGaurd],
  exports: [RouterModule],
})
export class AppRoutingModule {}
