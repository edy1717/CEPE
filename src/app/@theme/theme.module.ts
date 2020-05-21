import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from '../shared/pipes/paginator-es';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule,  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
    imports:[
        MatCardModule,
        MatPaginatorModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    ],
    exports:[
        MatCardModule,
        MatPaginatorModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
        
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
