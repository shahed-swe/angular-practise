import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../model/employee';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public employess: IEmployee[] = []

  constructor(private _employeeService: EmployeeService) {
    
   }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(res => this.employess = res)
  }

  

}
