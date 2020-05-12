import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProfile'
})
export class FilterProfilePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value;
    const resultPost =  [];
    for( const profil of value ) {
      if( profil.email.toLowerCase().indexOf(arg.toLowerCase()) >-1){
          resultPost.push(profil);
      };
    };
    return resultPost;
  }

}
