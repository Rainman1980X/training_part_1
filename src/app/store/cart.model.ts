import { Injectable } from '@angular/core';
import { Product } from '../../Model/product.model';

@Injectable()
export class Cart {
  public lines: Cartline[] = [];
  public itemcount: number = 0;
  public cartPrice: number = 0;

  addLine(product: Product, quantity: number = 1) {
    let line = this.lines.find((line) => line.product.id == product.id);
    if (line != undefined) {
      line.quantity += quantity;
    } else {
      this.lines.push(new Cartline(product, quantity));
    }
    this.recalculate();
  }

  updateQuantity(product: Product, quantity: number) {
    let line = this.lines.find((line) => line.product.id == product.id);
    if (line != undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  removeLine(id: number) {
    let index = this.lines.findIndex((line) => line.product.id == id);
    this.lines.splice(index, 1);
    this.recalculate();
  }
  clear() {
    this.lines = [];
    this.itemcount = 0;
    this.cartPrice = 0;
  }

  private recalculate() {
    this.itemcount = 0;
    this.cartPrice = 0;
    this.lines.forEach((l) => {
      this.itemcount += l.quantity;
      this.cartPrice += l.quantity * l.product.price;
    });
  }
}

export class Cartline {
  constructor(public product: Product, public quantity: number) {}

  get lineTotal() {
    return this.quantity * this.product.price;
  }
}

// CRUD add, update, remove, clear, recalc
