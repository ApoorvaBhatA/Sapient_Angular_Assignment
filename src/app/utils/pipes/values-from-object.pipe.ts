import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'valuesFromObject'
})

export class ValuesFromObjectPipe implements PipeTransform {

  transform( value: any) : Array<string> {
    return Object.values(value);
  }
}
