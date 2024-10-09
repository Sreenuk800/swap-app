import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PractiseService } from '../practise.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  devForm:any=FormGroup;
  childsArr:any= FormArray<any>;

  constructor(private ser:PractiseService , private fb:FormBuilder) { }

  ngOnInit(): void {
   this.createForm()
  }  
  createForm(){
    this.devForm = new FormBuilder().group({
     name:[''],
     age:[''],
     child:this.fb.array([])
    })
  }
  addArr(){
    this.childsArr = this.devForm.get('child') as FormArray
    this.childsArr.push(this.createChildsInfo(document?document:''))
  }
  createChildsInfo(document:any){
    if(document){
      return this.fb.group({
        name:document.name,
        age:document.age
      })
    }else {
      return this.fb.group({
        name:'',
        age:''
      })
    }
  }
  deleteRow(i:any){
   let a = this.devForm.get('child') as FormArray
   a.removeAt(i)
  }
  save(){
    const form = this.devForm.value
    if(form.name == 'sreenu'){
      alert('userName matching ')
    }else {
      alert('userName not matching ')
    }
    console.log(this.devForm.value)
  }
}
