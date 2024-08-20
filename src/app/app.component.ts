import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { flush } from '@angular/core/testing';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';

import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  array:any=['Home','Dashboard']
  

  
  constructor(private router:Router,
    private datePipe: DatePipe
  ) {}

  
  ngOnInit() {
  }
  
  navigationData(){
    this.router.navigateByUrl('/dashboard');  }
}
