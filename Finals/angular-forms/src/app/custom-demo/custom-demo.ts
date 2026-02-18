import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-custom-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './custom-demo.html',
  styleUrl: './custom-demo.css'
})
export class CustomDemo {
  customForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.customForm = this.fb.group({
      // We are adding our custom validator 'forbiddenNamesValidator' here
      codename: ['', [Validators.required, this.forbiddenNamesValidator]],
      planet: ['', Validators.required],
      missionType: ['Discovery'],
      notes: ['']
    });
  }

  // CUSTOM VALIDATOR: Prevents specific names from being used
  forbiddenNamesValidator(control: AbstractControl): ValidationErrors | null {
    const forbidden = ['admin', 'root', 'user', 'voldemort'];
    const isForbidden = forbidden.includes(control.value?.toLowerCase());
    return isForbidden ? { 'forbiddenName': { value: control.value } } : null;
  }

  onSubmit() {
    if (this.customForm.valid) {
      console.log("Custom Mission Data:", this.customForm.value);
      alert("🚀 Mission Launched Successfully!");
    }
  }
}
