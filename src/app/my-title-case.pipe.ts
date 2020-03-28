import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe as AngularTitleCasePipe } from '@angular/common';

@Pipe({
  name: 'myTitleCase'
})
export class MyTitleCasePipe implements PipeTransform {
  angularTitleCase = new AngularTitleCasePipe();
  transform(value: any, ...args: any[]): any {
    const property = args[0];
    const isValidProperty = property && typeof property === 'string';
    if (typeof value === 'string') {
      return this.angularTitleCase.transform(value);
    } else if (Array.isArray(value)) {
      return value.map((item) => {
        if (typeof item === 'string') {
          return this.angularTitleCase.transform(item);
        } else if (isValidProperty && item[property]) {
          item[property] = this.angularTitleCase.transform(item[property]);
        }
        return item;
      });
    }
    return value;
  }

}
