import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrimeNgTestComponent} from './prime-ng-test/prime-ng-test.component';
import {AgGridTestComponent} from './ag-grid-test/ag-grid-test.component';
import { DevextremeTestComponent } from './devextreme-test/devextreme-test.component';


const routes: Routes = [
  {path: 'prime-ng', component: PrimeNgTestComponent},
  {path: 'ag-grid', component: AgGridTestComponent},
  {path: 'devextreme', component: DevextremeTestComponent},
  {path: '', redirectTo: '/prime-ng', pathMatch: 'full'},
  {path: 'index.html', redirectTo: '/prime-ng', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
