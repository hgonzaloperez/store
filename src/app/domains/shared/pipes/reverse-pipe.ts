import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {

  transform(value: string | null | undefined): string | null {
    if (!value) return null;
    return value.split('').reverse().join('');
  }

}
