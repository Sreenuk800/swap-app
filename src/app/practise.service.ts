import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PractiseService {
 api:any='gvhv'
 arr=[
  {name:'kare',age:'21'},
  {name:'Sym',age:'28'},  
  {name:'rr',age:'21'},
  {name:'krishba',age:'21'},
  {name:'sumant',age:'21'}
]

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
  constructor(private http:HttpClient) { }
  getData(){
    return this.moviesList
  }
  getAll(){
     return this.http.get('api')
  }
  //using Observable
  getAllUsers():Observable<any[]>{
 return this.http.get<any[]>(this.api)
  }
  getArr(){
    return this.arr
  }
  // getPosts(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
  getDatas(data:any){
    return this.http.post('api',data)
  }
 getElements():Observable<any[]>{
  return this.http.get<any[]>(this.api)
 }
 // for Example of Rx Js Observable in angular without API
 getDatsa():Observable<any[]> {
  const data =[1,3,4,5]
  return of(data)
}
findAll(){
  return this.http.get(this.api)
}
findAllByObserver():Observable<any[]>{
  return of(this.moviesList)
}
}
