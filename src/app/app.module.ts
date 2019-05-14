import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './dashboard/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './dashboard/bar-chart/bar-chart.component';
import { RadarChartComponent } from './dashboard/radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './dashboard/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './dashboard/pie-chart/pie-chart.component';
import { PolarChartComponent } from './dashboard/polar-chart/polar-chart.component';
import { MenuNavegationComponent } from './menu-navegation/menu-navegation.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,
    PieChartComponent,
    PolarChartComponent,
    MenuNavegationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
