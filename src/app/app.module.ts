import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/header/toolbar/toolbar.component';
import { ListComponent } from './components/main/elements/list/list.component';
import { DetailsComponent } from './components/main/elements/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
