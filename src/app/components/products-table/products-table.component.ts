import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css',
})
export class ProductsTableComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  editProduct(id: number): void {
    console.log(`Editar produto: ${id}`);
  }

  deleteProduct(id: number): void {
    if (confirm('Apagar este produto?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter((product) => product.id !== id);
      });
    }
  }
}
