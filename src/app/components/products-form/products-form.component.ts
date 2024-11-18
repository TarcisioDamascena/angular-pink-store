import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.css',
})
export class ProductsFormComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      price: ['', [Validators.required, Validators.min(0)]],
      imageUrl: ['', [Validators.required]],
      available: [true],
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;

      this.productService.createProduct(product).subscribe({
        next: (createProduct) => {
          console.log('Produto cadastrado: ', createProduct);
          this.productForm.reset();
        },
        error: (err) => {
          console.error('Erro ao cadastrar o produto; ', err);
        },
      });
    } else {
      console.log('Formulario invalido.');
    }
  }
}
