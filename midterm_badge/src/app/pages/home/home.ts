import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Fixed relative path below
import { HelpDeskService } from '../../services/help-desk.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html'
})
export class HomeComponent {
  // Requirement: Use Observables to handle data
  services$!: Observable<any[]>;

  constructor(private helpDesk: HelpDeskService) {
    // Requirement: Fetch data using the Service
    this.services$ = this.helpDesk.getServices();
  }
}
