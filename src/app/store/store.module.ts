import { NgModule } from '@angular/core';
import { ModelModule } from "../../Model/model.module";
import { BrowserModule } from '@angular/platform-browser';
import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [StoreComponent],
  exports: [StoreComponent],
})
export class StoreModule {}
