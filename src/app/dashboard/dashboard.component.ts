import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output() receivedMessages = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  clickToSend() {
    this.receivedMessages.emit('Helo Sir angular guru')
  }

}
