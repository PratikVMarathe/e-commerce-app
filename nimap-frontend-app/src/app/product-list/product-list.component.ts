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
        categoryName: product.category.name 
      }));
    });
  }

  editProduct(product: any): void {
    this.editedProduct = { ...product }; 
    this.isEditing = true;
  }

  saveProductChanges(): void {
    this.productService.updateProduct(this.editedProduct.id, this.editedProduct).subscribe(() => {
      this.getProducts(); 
      this.isEditing = false; 
    });
  }

  cancelEdit(): void {
    this.isEditing = false; 
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.getProducts(); 
    });
  }
}
