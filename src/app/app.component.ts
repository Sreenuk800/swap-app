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
  displayedColumns: string[] = [
    'sNo', 'character', 'episode'
  ];
  title = 'swap';
  moviesList: any = ['Hello', 'How', 'kkk']
  speciesList: any = []
  vehiclesList: any = []
  shipList: any = []
  selectedItems: any = []
  selectedMovie:any=[]
  @ViewChild('pagiRef') pagiRef: MatPaginator | undefined;
  dropdownSettings = {
    singleSelection: false,
    idField: 'quarterId',
    textField: 'title',
    selectAllText: 'All',
    unSelectAllText: 'Clear selection',
    itemsShowLimit: 4,
    allowSearchFilter: false,
  };


  yearsData: any = []
  characterList: any = []
  tableData: any = [];
  bindData: any={}
  isShow: boolean=false
  constructor(private router:Router,
    private datePipe: DatePipe
  ) {}

  
  ngOnInit() {
    this.getData()
    this.getFilms()


  }
  getData() {
    let api = "http://swapi.dev/api/planets/1/"
    fetch(api).then(response => response.json()).then(data => {
    })
  }
  getFilms() {
    let api = "http://swapi.dev/api/films/"
    fetch(api).then(response => response.json()).then(data => {
      this.moviesList = data.results
      console.log(this.moviesList)
    })
    let spcies = "https://swapi.dev/api/species/"
    fetch(spcies).then(response => response.json()).then(data => {
      this.speciesList = data.results
      console.log(this.speciesList)

    })
    let vehicle = "https://swapi.dev/api/vehicles/"
    fetch(vehicle).then(response => response.json()).then(data => {
      this.vehiclesList = data.results
      console.log(this.vehiclesList)
    })
    let star = "https://swapi.dev/api/starships/"
    fetch(star).then(response => response.json()).then(data => {
      this.shipList = data.results
      console.log(this.shipList)
    })
    let people = "https://swapi.dev/api/people/"
    let arr: any = []
    fetch(people).then(response => response.json()).then(data => {
      this.characterList = data.results
      arr = data.results
      this.yearsData = arr.map((k: { birth_year: any; }) => k.birth_year);
      console.log(this.yearsData)
    })
  }
  onItemSelect(event: any) {
   
    
  }
  searchData(){
    this.tableData = []
    this.selectedItems.forEach((k: any) => {
      const a = this.characterList.find((m: any) => m.birth_year === k)
      if (a) {
        this.tableData.push(a)
      }
    })
  }
  navigationToCharater(val:any){
    this.bindData= val
    val.created = this.getDataFormate(val.created)
    val.edited = this.getDataFormate(val.edited) 
    this.isShow= true
  }
  getDataFormate(date:any){
    const originalDateString = date;
    const formattedDate =  this.datePipe.transform(originalDateString, 'yyyy/MM/dd HH:mm a');
    return formattedDate
  }
  close(){
    this.isShow= false
  }
}
