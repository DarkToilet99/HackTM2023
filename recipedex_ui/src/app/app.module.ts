import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCardComponent } from './search-card/search-card.component';
import { RecipesTableComponent } from './recipes-table/recipes-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCardComponent,
    RecipesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
