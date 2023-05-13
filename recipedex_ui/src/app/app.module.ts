import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCardComponent } from './search-card/search-card.component';
import { RecipesTableComponent } from './recipes-table/recipes-table.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AppMapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OrderListModule } from 'primeng/orderlist';
import { TagModule } from 'primeng/tag';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpinterceptInterceptor } from './services/httpintercept.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SearchCardComponent,
    RecipesTableComponent,
    RecipeDetailsComponent,
    AppMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule,
    OrderListModule,
    TagModule,
    DragDropModule,
    NgbTypeaheadModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpinterceptInterceptor,
    multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
