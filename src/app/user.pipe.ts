import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: any): any {
  //   if(value){
  //   value.length == 10
  //   }
  //   return value;
  // }
  if(value != String){
  return value * value
  }else {
    return value.toUppercase
  }
}
}
