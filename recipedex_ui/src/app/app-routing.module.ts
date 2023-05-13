import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCardComponent } from './search-card/search-card.component';
import { AppMapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', component: SearchCardComponent, pathMatch: 'full' },
  { path: 'map', component: AppMapComponent, pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
