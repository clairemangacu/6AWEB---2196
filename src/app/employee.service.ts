import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees() {
    return [
      { id: 101, firstname: 'Joseph', lastname: 'Dizon', email: 'jdizon@hau.edu.ph' },
      { id: 102, firstname: 'Claire', lastname: 'Mangacu', email: 'cgmangacu@student.hau.edu.ph' },
      { id: 103, firstname: 'John', lastname: 'Cena', email: 'jcena@hau.edu.ph' },
      { id: 104, firstname: 'Robert', lastname: 'Quintana', email: 'rquintana@hau.edu.ph' }
    ];
  }
}
