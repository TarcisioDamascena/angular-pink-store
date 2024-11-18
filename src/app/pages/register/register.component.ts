import { Component } from '@angular/core';
import { ProductsFormComponent } from "../../components/products-form/products-form.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ProductsFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
