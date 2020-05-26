import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeesComponent } from './employees/employees.component';


const routes: Routes = [

  {path:'departments',component:DepartmentComponent},
  {path:'employees',component:EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ DepartmentComponent,EmployeesComponent]
