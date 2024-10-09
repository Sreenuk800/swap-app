import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';
import { DataService } from '../data.service';
import { from, map, Observable } from 'rxjs';
import { of } from 'rxjs';
import { PractiseService } from '../practise.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msg: any;
  constructor(private renderer:Renderer2,private ser:PractiseService) { }
  ngOnInit(): void {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.splice(2,0))
    console.log(fruits)
    this.ser.findAllByObserver().subscribe(data=> {
      console.log(data)
    })
  }
childMethod(){
  this.msg ='Hello Guru ,How is it going' 
}
}

