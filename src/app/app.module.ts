import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDatatableTestComponent } from './ngx-datatable-test/ngx-datatable-test.component';
import { PrimeNgTestComponent } from './prime-ng-test/prime-ng-test.component';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { AgGridModule } from 'ag-grid-angular';
import { AgGridTestComponent } from './ag-grid-test/ag-grid-test.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxDatatableTestComponent,
    PrimeNgTestComponent,
    MenuComponent,
    AgGridTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
