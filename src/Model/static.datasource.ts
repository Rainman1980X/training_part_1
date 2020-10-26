import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { Product } from './product.model';

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, 'Hose', 'Category 1', 'Blaue Hose', 15.5),
    new Product(2, 'Hose', 'Category 2', 'Blaue Hose', 15.5),
    new Product(3, 'Hose', 'Category 1', 'Blaue Hose', 15.5),
    new Product(5, 'Hose', 'Category 2', 'Blaue Hose', 15.5),
    new Product(6, 'Hose', 'Category 1', 'Blaue Hose', 15.5),
    new Product(7, 'Hose', 'Category 2', 'Blaue Hose', 15.5),
    new Product(8, 'Hose', 'Category 1', 'Blaue Hose', 15.5),
    new Product(9, 'Hose', 'Category 2', 'Blaue Hose', 15.5),
    new Product(10, 'Hose', 'Category 1', 'Blaue Hose', 15.5),
  ];

  public getProducts():Observable<Product[]>{
      return from([this.products]);
  }
}
