import { Pipe, PipeTransform } from '@angular/core';
import { New } from './new';

@Pipe({
  name: 'filterNews'
})
export class FilterNewsPipe implements PipeTransform {

  transform(value: Array<New>, word: string): any {
    return value.filter(n=>n.title.includes(word));
  }

}
