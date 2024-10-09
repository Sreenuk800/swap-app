import { Component, OnInit, ViewChild } from '@angular/core';
import { PractiseService } from '../practise.service';
import { from, of } from 'rxjs';
import { FormsComponent } from '../forms/forms.component';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  constructor(private service:PractiseService) { }

  ngOnInit(): void {
    let a = this.service.getData()
   let source = of(1,3,4,5,6)
   source.subscribe(val=> {
    console.log(val)
   })
   let arr = from([10,20,40,55,49])
   arr.subscribe(s=> {
    console.log(s)
   })
  }

}
