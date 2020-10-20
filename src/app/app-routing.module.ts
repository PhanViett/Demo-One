import { EplUpdateComponent } from './epl-update/epl-update.component';
import { EplListComponent } from './epl-list/epl-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EplCreateComponent } from './epl-create/epl-create.component';
import { EplDetailsComponent } from './epl-details/epl-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EplListComponent },
  { path: 'add', component: EplCreateComponent },
  { path: 'update/:id', component: EplUpdateComponent },
  { path: 'details/:id', component: EplDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
