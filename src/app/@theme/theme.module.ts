import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from '../shared/pipes/paginator-es';


@NgModule({
    imports:[
        MatCardModule,
        MatPaginatorModule,
    ],
    exports:[
        MatCardModule,
        MatPaginatorModule,
    ],
    providers: [
        {
          provide: MatPaginatorIntl, 
          useClass: CustomMatPaginatorIntl
        }
      ],
})

export class ThemeModule{
    NgModule : ThemeModule;
}