import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  employees: any[] = [];
  products: any[] = [];   // ✅ DECLARED

  constructor(
    private employeeService: EmployeeService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
    this.products = this.productService.getProducts(); // ✅ LOADED
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
