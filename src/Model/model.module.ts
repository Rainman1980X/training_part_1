import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from '../app/store/cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ProductRepository,
    StaticDataSource,
    Cart,
    Order,
    OrderRepository,
    { provide: StaticDataSource, useValue: RestDataSource, multi: false },
    RestDataSource,
    AuthService
  ],
})
export class ModelModule {}
