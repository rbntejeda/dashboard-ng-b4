import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './dashboard/line-chart/line-chart.component';
import { BarChartComponent } from './dashboard/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './dashboard/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './dashboard/radar-chart/radar-chart.component';
import { PieChartComponent } from './dashboard/pie-chart/pie-chart.component';

const routes: Routes = [
  {
    path:"bar",
    component:BarChartComponent
  },
  {
    path:"line",
    component:LineChartComponent
  },
  {
    path:"doughnut",
    component:DoughnutChartComponent
  },
  {
    path:"radar",
    component:RadarChartComponent
  },
  {
    path:"pie",
    component:PieChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
