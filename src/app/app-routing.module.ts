import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgxDatatableTestComponent} from "./ngx-datatable-test/ngx-datatable-test.component";
import {PrimeNgTestComponent} from "./prime-ng-test/prime-ng-test.component";


const routes: Routes = [
  {path: 'ngx-datatable', component: NgxDatatableTestComponent},
  {path: 'prime-ng', component: PrimeNgTestComponent},
  {path: '', redirectTo: "/ngx-datatable", pathMatch: 'full'},
  {path: 'index.html', redirectTo: "/ngx-datatable", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
