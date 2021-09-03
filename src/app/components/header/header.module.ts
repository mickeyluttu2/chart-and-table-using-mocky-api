
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    HeaderComponent, 

  ],
  imports: [
    CommonModule, 
    MatDividerModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    FlexLayoutModule, 
    MatMenuModule, 
    MatListModule, 
    RouterModule,
    MatSidenavModule, 
  ], 
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
