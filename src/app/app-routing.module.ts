import { MapGoogleMultiComponent } from './mappe/map-google-multi/map-google-multi.component';
import { MapPointFormComponent } from './mappe/map-point-form/map-point-form.component';
import { MappaLeafletComponent } from './mappe/mappa-leaflet/mappa-leaflet.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LeaftletPathComponent } from './mappe/leaftlet-path/leaftlet-path.component';
import { ArticoliComponent} from './pages/articoli/articoli.component'
import { ArtsingoloComponent } from './pages/artsingolo/artsingolo.component';
import { EventiComponent } from './pages/eventi/eventi.component';
import { SentieriListComponent } from './pages/sentieri-list/sentieri-list.component';
import { MappaGoogleComponent } from './mappe/mappa-google/mappa-google.component';
import { MapComponent } from './mappe/map/map.component';

 

const routes: Routes = [
  { path: '', component: HomeComponent },
 // { path: '**', redirectTo: '/chisiamo' },
  { path: 'chisiamo', component: HomeComponent },
  { path: 'articoli/:tipo/:id', component: ArticoliComponent},
  { path: 'eventi/:tipo/:id', component: EventiComponent},
  { path: 'singolo/:tipo/:id', component: ArtsingoloComponent},
  { path: 'leaflet-path/:tipo/:id/:strx', component: LeaftletPathComponent },
  { path: 'sentieri-list/:tipo/:id/:strx', component: SentieriListComponent },
  { path: 'mappa-google/:tipo/:id/:strx', component: MappaGoogleComponent },
  { path: 'mappa-leaflet/:tipo/:id/:strx', component: MappaLeafletComponent },
  { path: 'map/:tipo/:id/:strx', component: MapComponent },
  { path: 'map-google-multi', component: MapGoogleMultiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*
<a [routerLink]="['/Product', ‘2’]">{{product.name}} </a>
*/
