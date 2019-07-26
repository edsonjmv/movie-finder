import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainViewComponent } from './views/main-view/main-view.component';

import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { ItemsFinderComponent } from './components/items-finder/items-finder.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { SidebarListComponent } from './components/sidebar-list/sidebar-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    HeaderBarComponent,
    ItemsFinderComponent,
    InputSearchComponent,
    ItemsListComponent,
    ItemCardComponent,
    SidebarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
