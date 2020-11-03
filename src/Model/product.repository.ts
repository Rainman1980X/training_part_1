import { Injectable, OnInit } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { Product } from './product.model';

@Injectable()
export class ProductRepository implements OnInit {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private datasouce: StaticDataSource) {
    this.datasouce.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }
  ngOnInit(){
    
  }
  getProducts(category: string = null): Product[] {
    return this.products.filter(
      (p) => category == null || category == p.category
    );
  }
  getProduct(id: number): Product {
    return this.products.find((p) => id == p.id);
  }

  getCategories(): string[] {
    return this.categories;
  }
}
