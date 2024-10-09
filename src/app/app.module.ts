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
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SwapComponent } from './swap/swap.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { counterReducer } from './userReducer';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PracticeComponent } from './practice/practice.component';
import { CustomePipe } from './custome.pipe';
import { SwitchComponent } from './switch/switch.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { FormsComponent } from './forms/forms.component';
import { MethodsComponent } from './methods/methods.component';
import { HighlightDirective } from './highlight.directive';
import { UserPipe } from './user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    SwapComponent,
    NgrxComponent,
    PracticeComponent,
    CustomePipe,
    SwitchComponent,
    RxjsComponent,
    FormsComponent,
    MethodsComponent,
    HighlightDirective,
    UserPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatSortModule,
    NgSelectModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count:counterReducer })
  ],
  providers: [DatePipe,CustomePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
