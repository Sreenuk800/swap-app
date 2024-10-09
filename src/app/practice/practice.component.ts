import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PractiseService } from '../practise.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  style1:boolean= true
  style2:boolean= false
  ss:any='sreenu'
  constructor(private fb:FormBuilder, private ser:PractiseService) {
   
   }

  ngOnInit(): void {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let a = fruits.join('*')
  console.log(a)
  }
}