import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgTestComponent } from './prime-ng-test/prime-ng-test.component';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridTestComponent } from './ag-grid-test/ag-grid-test.component';
import { DevextremeTestComponent } from './devextreme-test/devextreme-test.component';
import { DxDataGridModule,
  DxBulletModule,
  DxTemplateModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    PrimeNgTestComponent,
    MenuComponent,
    AgGridTestComponent,
    DevextremeTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
