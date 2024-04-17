import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any; 
  productForm: FormGroup;
  categories: any[] = [];
  isEditing = false;
  editedProductName = '';

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService
  ) { 
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  addProduct(): void {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe(() => {
       
        this.productForm.reset();
        
      });
    }
  }

  editProduct(): void {
    this.isEditing = true;
    this.editedProductName = this.product.name; 
  }

  saveProductChanges(): void {
    if (this.editedProductName.trim() && this.editedProductName !== this.product.name) {
      const updatedProductData = { name: this.editedProductName };
      this.productService.updateProduct(this.product.id, updatedProductData).subscribe(() => {
        this.product.name = this.editedProductName; 
        this.isEditing = false; 
      });
    } else {
      this.isEditing = false; 
    }
  }

  cancelEdit(): void {
    this.isEditing = false; 
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(() => {
    });
  }
}
