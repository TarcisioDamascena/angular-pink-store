import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ProductsTableComponent } from "../../components/products-table/products-table.component";

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [ ProductsTableComponent],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css',
})
export class ManageComponent {

}
