import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module';

import { LayoutModule } from '@angular/cdk/layout';
import { ArticoliComponent } from './pages/articoli/articoli.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component'
import { HomeComponent } from './pages/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ArtsingoloComponent } from './pages/artsingolo/artsingolo.component';
import { EventiComponent } from './pages/eventi/eventi.component';
import { LeaftletPathComponent} from './mappe/leaftlet-path/leaftlet-path.component';
import { SentieriListComponent } from './pages/sentieri-list/sentieri-list.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MappaGoogleComponent } from './mappe/mappa-google/mappa-google.component';
import { MappaLeafletComponent } from './mappe/mappa-leaflet/mappa-leaflet.component';
import { MapComponent} from './mappe/map/map.component'
import { GeocodingComponent } from './mappe/geocoding/geocoding.component'
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ResultsListComponent } from './results-list/results-list.component';
import { MapPointFormComponent } from './mappe/map-point-form/map-point-form.component';
import { MapGoogleMultiComponent } from './mappe/map-google-multi/map-google-multi.component';
import { AgmCoreModule } from '@agm/core';
import { HelloComponent } from './hello.componet';
@NgModule({
  declarations: [
    AppComponent,
    ArticoliComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    ArtsingoloComponent,
    EventiComponent,
    LeaftletPathComponent,
   SentieriListComponent,
   MappaGoogleComponent,
   MappaLeafletComponent,
   MapComponent,
   GeocodingComponent,
   ResultsListComponent,
   MapPointFormComponent,
   MapGoogleMultiComponent,
   HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    FlexLayoutModule,
    GoogleMapsModule,
    BrowserModule, 
    GoogleMapsModule,
    LeafletModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    })
    ],
  //providers: [DataService],

  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }