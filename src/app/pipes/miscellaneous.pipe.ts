import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../shared/utils';

@Pipe({ name: 'formatDateES' })
export class FormatDateES implements PipeTransform {
  transform(value: Date): string {

    if( !value ) {
      return;
    }

    return `${Utils.convertDateToES(value)}`;
  }
}
