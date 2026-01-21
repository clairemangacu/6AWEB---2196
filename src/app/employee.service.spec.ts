import { TestBed } from '@angular/core/testing';
import { Employee } from './employee.service';

describe('Employee Service', () => {
  let service: Employee;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Employee],  // Optional because of providedIn: 'root'
    });
    service = TestBed.inject(Employee);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of employees', () => {
    const employees = service.getEmployees();
    expect(employees.length).toBeGreaterThan(0);
    expect(employees[0].firstname).toBe('John');
  });
});
