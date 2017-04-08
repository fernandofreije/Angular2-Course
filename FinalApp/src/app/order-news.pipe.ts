import { Pipe, PipeTransform } from '@angular/core';
import { New } from './new';

@Pipe({
  name: 'orderNews'
})
export class OrderNewsPipe implements PipeTransform {

  transform(value: Array<New>, args?: any): any {
    return 
  }

}
