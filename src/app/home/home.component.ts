import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msgs:any= ''
  constructor() { }

  ngOnInit() {
  }
  receivedMessages(event:any){
    this.msgs =event
  } 
}
