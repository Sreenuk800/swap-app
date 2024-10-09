import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { flush } from '@angular/core/testing';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { map } from 'rxjs/operators';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 List :any=[
  {name:'Home',link:'/home'},
  {name:'Dashboard',link:'/dashboard'},
  {name:'Swap',link:'/swap'},
  {name:'Pracise',link:'/practice'},
  {name:'Switch',link:'/switch'},
  {name:'RXJs',link:'/rxjs'},
  {name:'Form',link:'/forms'},
  {name:'Methods',link:'/methods'}
 ]
 val:number =10009889
 isActive:boolean = false
  constructor(private router: Router,
    private datePipe: DatePipe,private ser:DataService,
    private store:Store<any>
  ) {
    sessionStorage.setItem('token','sreenuk9553538220')
   }


  ngOnInit() {
    this.store.subscribe(s=>{
      console.log(s)
    })
    this.ser.userAddedEvent.subscribe(data=> {
     console.log(data)
     this.isActive = data
    })
  }

  }
