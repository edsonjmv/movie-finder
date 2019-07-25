import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainViewComponent } from './views/main-view/main-view.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { ItemsSearchComponent } from './components/items-search/items-search.component';
import { InputSearchComponent } from './components/input-search/input-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    HeaderBarComponent,
    ItemsSearchComponent,
    InputSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
