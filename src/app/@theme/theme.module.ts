import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from '../shared/pipes/paginator-es';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatFormFieldModule,  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports:[
        MatCardModule,
        MatPaginatorModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,

        
    ],
    exports:[
        MatCardModule,
        MatPaginatorModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        
        
    ],
    providers: [
        {
          provide: MatPaginatorIntl,
          useClass: CustomMatPaginatorIntl
        },
        { provide: MatDialogRef, useValue: {} },
	    { provide: MAT_DIALOG_DATA, useValue: [] },
      ]

      
})

export class ThemeModule{
    NgModule: ThemeModule;
}
