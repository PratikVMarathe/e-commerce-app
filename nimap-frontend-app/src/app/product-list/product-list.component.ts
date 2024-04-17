import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  editedProduct: any = {};
  isEditing = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products.map(product => ({
        ...product,
        categoryName: product.category.name // Assuming category information is nested in product response
      }));
    });
  }

  editProduct(product: any): void {
    this.editedProduct = { ...product }; // Create a copy of the product to edit
    this.isEditing = true;
  }

  saveProductChanges(): void {
    this.productService.updateProduct(this.editedProduct.id, this.editedProduct).subscribe(() => {
      this.getProducts(); // Refresh product list after saving changes
      this.isEditing = false; // Exit edit mode
    });
  }

  cancelEdit(): void {
    this.isEditing = false; // Exit edit mode without saving changes
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.getProducts(); // Refresh product list after deletion
    });
  }
}
