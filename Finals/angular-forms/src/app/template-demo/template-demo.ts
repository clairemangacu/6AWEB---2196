import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css'
})
export class TemplateDemo {

  username = '';
  email = '';
  password = '';
  role = '';
  gender = '';
  status = '';
  comments = '';

  onSubmit() {
    console.log("Form Submitted!");
    console.log("Username:", this.username);
    console.log("Email:", this.email);
    console.log("Password:", this.password);
    console.log("Role:", this.role);
    console.log("Gender:", this.gender);
    console.log("Status:", this.status);
    console.log("Comments:", this.comments);

    alert("Form Submitted Successfully!");
  }
}
