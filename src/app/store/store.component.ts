import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../../Model/product.repository';
import { Product } from '../../Model/product.model';
import { Cart } from './cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  public selectedCategory = null;

  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository, private cart: Cart, private router:Router) {}

  ngOnInit(): void {}

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }
  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    console.log(newPage);
    this.selectedPage = Number(newPage);
  }

  changePageSize(newSize: number) {
    console.log(newSize);
    this.productsPerPage = Number(newSize);
  }

  get pageNumbers(): number[] {
    return Array(
      Math.ceil(
        this.repository.getProducts(this.selectedCategory).length /
          this.productsPerPage
      )
    )
      .fill(0)
      .map((x, i) => i + 1);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }
}
