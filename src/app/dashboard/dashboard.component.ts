import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2, ViewChildren } from '@angular/core';
import {
  interval, map, Observable, Subscription,
} from 'rxjs'
import { DataService } from '../data.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('childMethod')method!:HomeComponent
  style:boolean= true
  jjj='sreenu'
  ss:any='sreenu'

  style1:boolean = false
  constructor() { }
  ngOnInit(): void {
   
  }
  parentMethod(){
    this.method.childMethod()
  }
}


