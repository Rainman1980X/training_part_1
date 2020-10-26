import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../../Model/product.repository';
import { Product } from '../../Model/product.model';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  constructor(private repository: ProductRepository) {}

  ngOnInit(): void {}
  get products(): Product[] {
    return this.repository.getProducts();
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }
}
