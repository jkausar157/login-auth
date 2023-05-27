import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';


const declare:any = [
  MatSelectModule,
  MatRadioModule,
  MatPaginatorModule,
  MatInputModule,
  MatCheckboxModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatTableModule,
  MatDialogModule

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    declare
  ],
  exports:[
    declare
  ]
})
export class MaterialModule { }
