import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from '../app/store/cart.model';


@NgModule({
    providers: [ProductRepository, StaticDataSource, Cart],
})
export class ModelModule {
}
