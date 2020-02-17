import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views/views.component';
import { StatisticsComponent } from './statistics/statistics.component';
const routes: Routes = [
  { 
    path: '',
    component: ViewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
