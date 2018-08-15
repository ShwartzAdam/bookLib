import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeNonEnglish'
})
export class RemoveNoneEngPipe implements PipeTransform {
  transform(value: string, args: any[]): string {
    if (value === null) return 'Not assigned';
    return value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ' ').trim();
  }
}
