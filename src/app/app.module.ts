import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import { StoreModule } from '@ngrx/store';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCardModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatSortModule,
    NgSelectModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
