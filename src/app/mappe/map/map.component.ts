import {Component, OnInit} from '@angular/core';
import {icon, latLng, LeafletMouseEvent, Map, MapOptions, marker, tileLayer} from 'leaflet';
import {DEFAULT_LATITUDE, DEFAULT_LONGITUDE} from '../../app.constants';
 import {MapPoint} from '../../model/map-point.model';
 import {NominatimResponse} from '../../model/nominatim-response.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: Map;
  mapPoint: MapPoint;
  options: MapOptions;
  lastLayer: any;

  results: NominatimResponse[];

  constructor () {
  }

  ngOnInit () {
    this.initializeDefaultMapPoint();
    this.initializeMapOptions();
  }

  initializeMap (map: Map) {
    this.map = map;
    this.createMarker();
  }

  getAddress (result: NominatimResponse) {
    this.updateMapPoint(result.latitude, result.longitude, result.displayName);
    this.createMarker();
  }

  refreshSearchList (results: NominatimResponse[]) {
    this.results = results;
  }

  onMapClick (e: LeafletMouseEvent) {
    this.clearMap();
    this.updateMapPoint(e.latlng.lat, e.latlng.lng);
    this.createMarker();
  }

  private initializeMapOptions () {
    this.options = {
      zoom: 12,
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
         {
           maxZoom: 18,
           attribution: 'OSM'
          })
      ]
    }
  }

  private initializeDefaultMapPoint () {
   // const DEFAULT_LATITUDE = 44;
    //const DEFAULT_LONGITUDE = 11;
    this.mapPoint = {
      name: 'Hello',
     
      latitude: DEFAULT_LATITUDE,
      longitude: DEFAULT_LONGITUDE
    };
  }

  private updateMapPoint (latitude: number, longitude: number, name?: string) {
    this.mapPoint = {
      latitude: latitude,
      longitude: longitude,
      name: name ? name : this.mapPoint.name
    };
  }

  private createMarker () {
    this.clearMap();
    const mapIcon = this.getDefaultIcon();
    
    const coordinates = latLng([this.mapPoint.latitude, this.mapPoint.longitude]);

    this.lastLayer = marker(coordinates).setIcon(mapIcon).addTo(this.map);

    this.map.setView(coordinates, this.map.getZoom());
  }

  private getDefaultIcon () {
    return icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/images/ICONE/freccia4.png'
    });
  }

  private clearMap () {
    if (this.map.hasLayer(this.lastLayer)) this.map.removeLayer(this.lastLayer);
  }

}
 