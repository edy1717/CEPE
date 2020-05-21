import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from '../shared/pipes/paginator-es';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    imports:[
        MatCardModule,
        MatPaginatorModule,
        MatDialogModule,
        MatFormFieldModule,


    ],
    exports:[
        MatCardModule,
        MatPaginatorModule,
        MatDialogModule,
        MatFormFieldModule,

    ],
    providers: [
        {
          provide: MatPaginatorIntl,
          useClass: CustomMatPaginatorIntl
        }
      ],
})

export class ThemeModule{
    NgModule: ThemeModule;
}
