import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './model/employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // getEmployees(){
  //   return [
  //     { "id": 1, "name": "Andrew", "age": 30 },
  //     { "id": 2, "name": "Mickle", "age": 35 },
  //     { "id": 3, "name": "John", "age": 20 },
  //     { "id": 4, "name": "Marry", "age": 25 }
  //   ]
  // }


  constructor(private http:HttpClient) { }

  private _url: string = "/assets/data/employess.json"

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
      .pipe(
        catchError(this.errorHandler)
      )
  } 


  errorHandler(error: HttpErrorResponse){
    console.log(error)

    return throwError(error.message || 'Server Error')
  }
}
