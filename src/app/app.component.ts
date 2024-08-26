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
  
  displayedColumns: string[] = ['sNo', 'character', 'spice', 'year'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) "paginator": MatPaginator;
  title = 'swap';
  moviesList: any = []
  speciesList: any = []
  vehiclesList: any = []
  shipList: any = []
  selectedItems: any = []
  selectedShip: any = []
  selectedMovie: any = []
  selectedVehicle: any = []
  selectedSpice: any = []
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
  bindData: any = {}
  isShow: boolean = false
  filterId: any;
  constructor(private router: Router,
    private datePipe: DatePipe
  ) { }


  ngOnInit() {
    this.getData()
    
  }

  getData() {
    let api = "http://swapi.dev/api/films/"
    fetch(api).then(response => response.json()).then(data => {
      this.moviesList = data.results.map((k: { title: any; }) => k.title);
    })
    let spcies = "https://swapi.dev/api/species/"
    fetch(spcies).then(response => response.json()).then(data => {
      this.speciesList = data.results.map((k: { name: any; }) => k.name);
    })
    let vehicle = "https://swapi.dev/api/vehicles/"
    fetch(vehicle).then(response => response.json()).then(data => {
      this.vehiclesList = data.results.map((k: { name: any; }) => k.name);
    })
    let star = "https://swapi.dev/api/starships/"
    fetch(star).then(response => response.json()).then(data => {
      this.shipList = data.results.map((k: { name: any; }) => k.name);
    })
    let people = "https://swapi.dev/api/people/"
    let arr: any = []
    fetch(people).then(response => response.json()).then(data => {
      this.characterList = data.results
      console.log(this.characterList)
      arr = data.results
      this.yearsData = arr.map((k: { birth_year: any; }) => k.birth_year);
      this.selectedItems = this.yearsData
      if(this.selectedItems && this.selectedItems.length > 0){
        this.searchData()
      }
    })
  }
  clearData(){
    this.selectedItems =[]
   this.selectedMovie =[]
   this.selectedShip=[]
   this.selectedSpice=[]
   this.selectedVehicle =[]
   this.tableData =[]
   this.dataSource = new MatTableDataSource(this.tableData);
   this.dataSource.paginator = this.paginator;
  }
  onItemSelect(event: any, val: any) {
    this.filterId = val
  }
  searchData() {
    this.tableData = []
    if (this.filterId == 'year' || (this.selectedItems && this.selectedItems.length > 0)) {
      this.selectedItems.forEach((k: any) => {
        const a = this.characterList.find((m: any) => m.birth_year === k)
        if (a.species && a.species.length > 0) {
          fetch(a.species[0]).then(response => response.json()).then(data => {
            a.species = data.name
            this.tableData.push(a)
          })
        } else {
          this.tableData.push(a)
        }
        this.dataSource = new MatTableDataSource(this.tableData);
        this.dataSource.paginator = this.paginator;
      })
    } else if (this.filterId == 'Movie') {
      let api = "http://swapi.dev/api/films/"
      fetch(api).then(response => response.json()).then(data => {
        const a = data.results.find((m: any) => m.title === this.selectedMovie)
        if (a.characters && a.characters.length > 0) {
          console.log(a.characters)
          a.characters.forEach((s: any) => {
            fetch(s).then(response => response.json()).then(data => {
              if (data.species && data.species.length > 0) {
                fetch(data.species[0]).then(response => response.json()).then(k => {
                  data.species = k.name
                  this.tableData.push(data)
                })
              } else {
                this.tableData.push(data)
              }
              this.dataSource = new MatTableDataSource(this.tableData);
              this.dataSource.paginator = this.paginator;
            })
          })
        }
      })
    } else if (this.filterId == 'Specie') {
      let api = "http://swapi.dev/api/species/"
      fetch(api).then(response => response.json()).then(data => {
        const a = data.results.find((m: any) => m.name === this.selectedSpice)
        if (a.films && a.films.length > 0) {
          fetch(a.films[0]).then(response => response.json()).then(m => {
            if (m.characters && m.characters.length > 0) {
              m.characters.forEach((s: any) => {
                fetch(s).then(response => response.json()).then(data => {
                  if (data.species && data.species.length > 0) {
                    fetch(data.species[0]).then(response => response.json()).then(k => {
                      data.species = k.name
                      this.tableData.push(data)
                    })
                  } else {
                    this.tableData.push(data)
                  }
                  this.dataSource = new MatTableDataSource(this.tableData);
                  this.dataSource.paginator = this.paginator;
                })
              })
            }
          })
        }
      })
    } else if (this.filterId == 'Vehicle') {
      let api = "http://swapi.dev/api/vehicles/"
      fetch(api).then(response => response.json()).then(data => {
        const a = data.results.find((m: any) => m.name === this.selectedVehicle)
        if (a.films && a.films.length > 0) {
          fetch(a.films[0]).then(response => response.json()).then(m => {
            if (m.characters && m.characters.length > 0) {
              m.characters.forEach((s: any) => {
                fetch(s).then(response => response.json()).then(data => {
                  if (data.species && data.species.length > 0) {
                    fetch(data.species[0]).then(response => response.json()).then(k => {
                      data.species = k.name
                      this.tableData.push(data)
                    })
                  } else {
                    this.tableData.push(data)
                  }
                  this.dataSource = new MatTableDataSource(this.tableData);
                  this.dataSource.paginator = this.paginator;
                })
              })
            }
          })
        }

      })
    } else if (this.filterId == 'Ship') {
      let api = "http://swapi.dev/api/starships/"
      fetch(api).then(response => response.json()).then(data => {
        const a = data.results.find((m: any) => m.name === this.selectedShip)
        if (a.films && a.films.length > 0) {
          fetch(a.films[0]).then(response => response.json()).then(m => {
            if (m.characters && m.characters.length > 0) {
              m.characters.forEach((s: any) => {
                fetch(s).then(response => response.json()).then(data => {
                  if (data.species && data.species.length > 0) {
                    fetch(data.species[0]).then(response => response.json()).then(k => {
                      data.species = k.name
                      this.tableData.push(data)
                    })
                  } else {
                    this.tableData.push(data)
                  }
                  this.dataSource = new MatTableDataSource(this.tableData);
                  this.dataSource.paginator = this.paginator;
                })
              })
            }
          })
        }
       
      })
    }
  }

  navigationToCharater(val: any) {
    let films: any = []
    let ships: any = []
    let vehicle: any = []
    if (val.films && val.films.length > 0) {
      val.films.forEach((k: any) => {
        fetch(k).then(response => response.json()).then(data => {
          films.push(data.title)
        })
      })
    }
    if (val.vehicles && val.vehicles.length > 0) {
      val.vehicles.forEach((k: any) => {
        fetch(k).then(response => response.json()).then(data => {
          vehicle.push(data.name)
        })
      })
    }
    if (val.starships && val.starships.length > 0) {
      val.starships.forEach((k: any) => {
        fetch(k).then(response => response.json()).then(data => {
          ships.push(data.name)
        })
      })
    }
    this.bindData = val
    val.films = films
    val.vehicles = vehicle
    val.starships = ships
    // val.created = this.getDataFormate(val.created)
    // val.edited = this.getDataFormate(val.edited)
    this.isShow = true
  }
  getDataFormate(date: any) {
    const originalDateString = date;
    const formattedDate = this.datePipe.transform(originalDateString, 'yyyy/MM/dd HH:mm a');
    return formattedDate
  }
  close() {
    this.isShow = false
  }

}
