import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  newCategoryName = '';

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  addCategory(): void {
    if (this.newCategoryName.trim()) {
      this.categoryService.addCategory({ name: this.newCategoryName }).subscribe(() => {
        this.newCategoryName = ''; 
        this.getCategories(); 
      });
    }
  }

  deleteCategory(categoryId: number): void {
    this.categoryService.deleteCategory(categoryId).subscribe(() => {
      this.getCategories(); 
    });
  }
}
