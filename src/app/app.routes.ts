import { Routes } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: 'employees-component', component: EmployeesComponent },
  { path: 'shifts-component', component: ShiftsComponent },
  { path: '**', component: NotFoundComponent },
];
