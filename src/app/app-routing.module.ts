import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { HeaderComponent } from './components/header/header.component';
import { DefaultComponent } from './layouts/default/default.component';
import { TableComponent } from './tables/table/table.component';

const routes: Routes = [
    { path: '', component: BarChartComponent },
    { path: 'charts/bar-chart', component: BarChartComponent}, 
  { path: 'tables/table', component: TableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
