import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.css']
})
export class MethodsComponent implements OnInit {
  arr: any;

  constructor(private data:DataService) {
    this.arr = this.data.getDummyData()
   }

  ngOnInit(): void {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // join method -- user for joining of elements in array
    console.log('join Method')
 console.log(fruits.join('*'))
 console.log('Pop Method')
 // Pop method -- removes the last element of array
 console.log(fruits.pop())
 // push Method it adds the element to array
 console.log('Push Method')
 fruits.push('kiWi')
 console.log(fruits)
 // Shift Method -- It removes the first element of array
 console.log(fruits.shift())
 // Un Shift methods -- It adds the first element of array
 fruits.unshift('waterMilon')
 fruits.unshift('sapota')
 const arr1 = ["Cecilie", "Lone"];
 const arr2 = ["Emil", "Tobias", "Linus"];
 // concat method -- we can merge two arrays
 console.log(arr1.concat(arr2))
 console.log(fruits)
 console.log(fruits.splice(2,2))
 console.log(fruits)
 let a =[11,21,66,86,55,97]

 console.log(a.splice(2,1))
 console.log(a)
 // splice method -- removes elements in array based on certain conditions
 // splice(2,1) Here 2 represents index start positions , 1 represents removing elements from index
 console.log(fruits.splice(2,1,'sreenu','ram','dev'))
console.log(fruits)
//console.log(fruits.slice(2,5))
// slice method -- It creats array
// slice(2,5) here 2 represnts starting index, 5 represents last index in between elements will from a array
console.log(fruits.indexOf('sreenu'))
// indexOf method -- it is used to find the index of element
console.log(a)
let b = a.find(k=> k === 11)
console.log(b)
// sort method -- It arranges words in alphabats order
// reverse method -- It re-arrange the array
 console.log(fruits.sort());
console.log(fruits.reverse());
const numbers1 = [45, 4, 9, 16, 25];
console.log(numbers1.map(k=>k *k))
         
  }
  getData(){
    // this.data.getPosts().subscribe((posts) => {
    //   // we received our posts!
    //   console.log(posts);
  //})
  alert('saved Successfully')

}
}
