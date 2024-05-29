import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../model/employee';

@Component({
  selector: '[app-test3]',
  templateUrl: './test3.component.html',
  styles: [`
    div{
      color: red;
    }
  `]
})
export class Test3Component implements OnInit {
  public employees: IEmployee[] = []

  // public employess = [
  //   { "id": 1, "name": "Andrew", "age": 30 },
  //   { "id": 2, "name": "Mickle", "age": 35 },
  //   { "id": 3, "name": "John", "age": 20 },
  //   { "id": 4, "name": "Marry", "age": 25 }
  // ] - it's already in service, so we won't repeart it here. instead we will use service

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(res => this.employees = res)
  }

}
