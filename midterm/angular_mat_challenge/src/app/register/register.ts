import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

// All Material Imports
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule,
    MatFormFieldModule, MatRadioModule, MatCheckboxModule, MatSliderModule,
    MatDatepickerModule, MatNativeDateModule, MatCardModule, MatToolbarModule,
    MatSnackBarModule, MatIconModule, MatDividerModule, MatSlideToggleModule 
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  submitted = false;
  isDarkMode = false;
  hidePassword = true;
  maxDate: Date = new Date(2006, 11, 31);

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    // REMOVED: email field was causing form to always be invalid (no matching input in HTML)
    password: new FormControl('', [
      Validators.required, 
      Validators.pattern('^[a-zA-Z].*$') 
    ]),
    gender: new FormControl('', Validators.required),
    birthDate: new FormControl(null, Validators.required),
    innovatorLevel: new FormControl(1),
    agreeTerms: new FormControl(false, Validators.requiredTrue), 
  });

  constructor(private snackBar: MatSnackBar) {}

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  onClickSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.snackBar.open('✅ Membership Initialized Successfully!', 'Close', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    } else {
      this.snackBar.open('❌ Error: Ensure password starts with a letter and no fields are blank.', 'OK', {
        duration: 4000
      });
    }
  }
}