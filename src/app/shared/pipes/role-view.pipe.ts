import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'roleView',
  standalone: true
})
export class RoleViewPipe implements PipeTransform {

  transform(value: string, opt: number, io?: boolean): string {
    switch (value) {
      case '1':
        return 'Super Admin ' + opt ?? '';
      case '2':
        return 'Admin ' + opt ?? '';
      case '3':
        return 'Manager ' + opt ?? '';
      default:
        return '-'
    }
  }

}
