import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value;
    const resultPost =  [];
    for( const myproduct of value ) {
      if( myproduct.nombre.toLowerCase().indexOf(arg.toLowerCase()) >-1){
          resultPost.push(myproduct);
      };
    };
    return resultPost;
  }
}
