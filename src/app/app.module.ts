import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { GridAllModule, PageService, ColumnChooserService, ToolbarService, SortService } from '@syncfusion/ej2-angular-grids';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';

import { ConfigService } from './config/config.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CheckBoxModule,
    DropDownListAllModule,
    DatePickerAllModule,
    ToolbarModule,
    NumericTextBoxAllModule,
    DialogModule,
    GridAllModule,
    ContextMenuModule
  ],
  providers: [PageService, ToolbarService, ColumnChooserService, SortService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
