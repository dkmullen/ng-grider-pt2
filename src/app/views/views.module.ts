import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views/views.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemlistComponent } from './itemlist/itemlist.component';

@NgModule({
  declarations: [ViewsComponent, StatisticsComponent, ItemlistComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
