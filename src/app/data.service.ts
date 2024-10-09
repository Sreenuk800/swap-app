import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userAddedEvent = new EventEmitter<boolean>()
  api:any='gvhv'
  arr=[
   {name:'kare',age:'21'},
   {name:'Sym',age:'28'},  
   {name:'rr',age:'21'},
   {name:'krishba',age:'21'},
   {name:'sumant',age:'21'}
 ]
  constructor(private http:HttpClient) { }
  
getAllData(){
  return this.http.get(this.api)
}
getDummyData(){
  return this.arr
}
getObservbleData():Observable<any[]>{
return this.http.get<any[]>(this.api)
}
getPosts(): Observable<{ id: number; title: string }[]> {
  return this.http.get<{ id: number; title: string }[]>('http://localhost:3000/posts');
}
}

