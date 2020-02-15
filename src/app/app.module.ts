import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';
import { ModsModule } from './mods/mods.module';
import { ViewsModule } from './views/views.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ElementsModule,
    CollectionsModule,
    ModsModule,
    ViewsModule,
    AppRoutingModule // Keep this last so its wildcard route (**) is chosen last, after all other routes fail
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
