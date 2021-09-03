import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';

import { HeaderModule } from 'src/app/components/header/header.module';
import { RouterModule } from '@angular/router';
import { DefaultService } from '../default.service';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarChartComponent } from 'src/app/charts/bar-chart/bar-chart.component';
import { TableComponent } from 'src/app/tables/table/table.component';
import {MatTableModule} from '@angular/material/table';

// import { MatDividerModule } from '@angular/material/divider';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatListModule } from '@angular/material/list';
// import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    DefaultComponent, 
    BarChartComponent, 
    TableComponent,
  ],
  imports: [
    CommonModule, 
    HeaderModule,
    ChartsModule, 
    RouterModule, 
    HttpClientModule, 
    FormsModule, 
    MatSelectModule, 
    MatTableModule,
    BrowserAnimationsModule, 

    // MatDividerModule, 
    // MatToolbarModule, 
    // MatIconModule, 
    // MatButtonModule, 
    // FlexLayoutModule, 
    // MatMenuModule, 
    // MatListModule, 
    // RouterModule,
    // MatSidenavModule, 
  ], 
  providers: [DefaultService]
})
export class DefaultModule { }
