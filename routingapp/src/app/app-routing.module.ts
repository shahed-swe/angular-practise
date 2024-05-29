import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/departments',
    pathMatch: 'full'
  },
  {
    path: 'departments',
    component: DepartmentlistComponent
  },
  {
    path: 'employees',
    component: EmployeelistComponent
  },
  {
    path: 'departments/:id',
    component: DepartmentdetailComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentlistComponent, EmployeelistComponent, DepartmentdetailComponent,PageNotFoundComponent]