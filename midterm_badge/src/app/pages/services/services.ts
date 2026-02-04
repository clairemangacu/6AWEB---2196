import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// FIX: Use a relative path to reach the services folder
import { HelpDeskService } from '../../services/help-desk.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './services.html'
})
export class ServicesComponent {
  // Requirement: Use Observables to handle data
  services$!: Observable<any[]>;
  searchTerm = '';

  constructor(private helpDesk: HelpDeskService) {
    // Requirement: Fetch data using the Service
    this.services$ = this.helpDesk.getServices();
  }
}
