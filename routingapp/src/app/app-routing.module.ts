import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';
import { DepartmentoverviewComponent } from './departmentdetail/departmentoverview/departmentoverview.component';
import { DepartmentcontactComponent } from './departmentdetail/departmentcontact/departmentcontact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/departments-list',
    pathMatch: 'full'
  },
  {
    path: 'departments-list',
    component: DepartmentlistComponent
  },
  {
    path: 'employees',
    component: EmployeelistComponent
  },
  {
    path: 'departments-list/:id',
    component: DepartmentdetailComponent,
    children: [
      { path: 'overview', component: DepartmentoverviewComponent },
      { path: 'contact', component: DepartmentcontactComponent }
    ]
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
export const routingComponents = [
  DepartmentlistComponent,
  EmployeelistComponent,
  DepartmentdetailComponent,
  PageNotFoundComponent,
  DepartmentcontactComponent,
  DepartmentoverviewComponent
]