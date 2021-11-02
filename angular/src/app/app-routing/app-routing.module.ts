import { NgModule } from '@angular/core';

import {EmployeeComponent} from '../employee/employee.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path:'employee',component:EmployeeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
