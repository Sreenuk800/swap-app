import { Component, OnInit, ViewChildren } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PractiseService } from '../practise.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
@ViewChildren('childMethod')method!:DashboardComponent
  moviesList =[
    {name:'Hi Nanna',duration:'110 Min',year:2024,isCheck:false},
    {name:'Arjun Reddy',duration:'140 Min',year:2016 ,isCheck:false},
    {name:'Kalki',duration:'150 Min',year:2024 ,isCheck:false},
    {name:'Premalu',duration:'160 Min',year:2023,isCheck:false},
    {name:'Druva',duration:'154 Min',year:2019,isCheck:false},
    {name:'Salar',duration:'145 Min',year:2022,isCheck:false},
    {name:'Veera Simha Reddy',duration:'145 Min',year:2023,isCheck:false},
    {name:'Devara',duration:'145 Min',year:2024,isCheck:false},
    {name:'kalki',duration:'145 Min',year:2024,isCheck:false},
    {name:'Waltair Veerayya',duration:'145 Min',year:2023,isCheck:false},
    {name:'HanuMan',duration:'145 Min',year:2024,isCheck:false},
    {name:'Guntur Kaaram',duration:'145 Min',year:2024,isCheck:false},
    {name:'Mr.Bachan',duration:'145 Min',year:2024,isCheck:false},
    {name:'DoubleIsmart',duration:'145 Min',year:2024,isCheck:false},
    {name:'Aye',duration:'145 Min',year:2024,isCheck:false},
    {name:'TilluSquare',duration:'145 Min',year:2024,isCheck:false}
  ]
  arr =[
    {'name':'sreenu',age:25},
    {'name':'ram',age:25},
    {'name':'hema',age:26},
    {'name':'suma',age:26},
  ]
  constructor(private service:PractiseService) { }

  ngOnInit(): void {
    let a =this.arr.find(k=>k.age == 26)
    console.log(a)
    let b =this.arr.filter(k=>k.age == 26)
    console.log(b)
    this.service.getDatsa().subscribe((data)=>{
      console.log(data)
    })
  }
  getCheck(i:any){
  this.moviesList[i].isCheck = !this.moviesList[i].isCheck
  }
  
}
