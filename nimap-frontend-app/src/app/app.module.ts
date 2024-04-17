import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';

// Import services
import { CategoryService } from './category.service';
import { ProductService } from './product.service';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Add HttpClientModule to imports
    FormsModule, // Add FormsModule for ngModel
    ReactiveFormsModule,
  ],
  providers: [
    CategoryService, // Provide CategoryService
    ProductService // Provide ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
