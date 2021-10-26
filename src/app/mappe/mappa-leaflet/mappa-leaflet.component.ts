import { GpxService } from '../../service/gpx.service';

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as L from "leaflet";
import { LayerGroup, tileLayer } from "leaflet";
import { Sentiero } from "../../model/sentiero.model";
import { NomiService } from "../../service/nomi.service";
import { SentieriService } from "../../service/sentieri.service";

@Component({
  selector: 'app-mappa-leaflet',
  templateUrl: './mappa-leaflet.component.html',
  styleUrls: ['./mappa-leaflet.component.css']
})
export class MappaLeafletComponent implements OnInit {
  options: L.MapOptions = {
    zoom: 10,
    center: L.latLng(44.8567, 11.9651),
    layers: [
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    ]
  };
  map: L.Map;
  markersLayer = new L.LayerGroup();
  sMarkersLayer: LayerGroup;
  zoomLevel = 9;
  iconUrl = "https://decisionfarm.ca/assets/images/marker-icon-2x.png";

  

  listasentieri: Sentiero[];
  errormsg: any;
  nlista: number;
  ns: number;
  messages: any[];
  listanomi2: any[]=[];
  listanomib: any[]=[];
  origin: any;
  n: number;
  stations2: any[] = [];
  coordinate: import("/home/rino/Angular/sito-f6/src/app/model/gpx.module").GPX[];
  letti: number;
  i: number;
  dest: any;
  flat: number;
  flon: number;
  listagpx: import("/home/rino/Angular/sito-f6/src/app/model/gpx.module").GPX[];

  createStations() {
    this.sMarkersLayer = new L.LayerGroup();

    for (const s of this.stations2) {
      let icon: L.DivIcon;
      icon = new L.DivIcon({
        html: `<img src='${this.iconUrl}'/> <span>${s.name}</span>`
      });
      const marker = L.marker([Number(s.lat), Number(s.lng)], { icon });
      this.sMarkersLayer.addLayer(marker);
    }
    this.markersLayer.addLayer(this.sMarkersLayer);
  }

  onMapReady(map: L.Map) {
    setTimeout(() => {
      map.invalidateSize();
      this.map = map;
      map.addLayer(this.markersLayer);
      //this.createStations();

    }, 200);
  }

  constructor(private eventiservice:SentieriService,private gpxservice: GpxService ,private nomiservice:NomiService, ) {
    this.listasentieri = [];
  }
  
  ngOnInit() {

    // Legge lista nomi dei sentieri dei quali è stat creata la tabella coordinate
    // this.listanomi2
    const tipo2 = '11'  ;
    const  ida2 = ''
    const strx2  =  '1';//zona
    this.getListaNomiObservable(tipo2,ida2,strx2) 

  }


   // Legge da Database con Rjsonn i nomi dei sentieri dei quali è stata creata la tabella coordinate  da file gpx
    getListaNomiObservable(tipox:string,idax: string,strxx:string) {
      this.nomiservice.getListaNomiObservable('11','1','0').subscribe(message => {
      if (message) {
        this.listanomib = message;
       this.nlista = message.length;
        for(this.ns =0; this.ns < this.nlista; this.ns++){
          this.listanomi2.push(message[this.ns].nome);

        } 

        
   //LEGGE COORDINATE GPX 
    for(this.n =0; this.n < this.listanomi2.length; this.n++){
     // console.log("id-gpx " + this.tipo + " " + this.ida + " " + this.listanomi2[this.n].toLowerCase());   
      this.getListaGpxObservable('5', '1', this.listanomi2[this.n].toLowerCase(),'red');
    } 

    

      } else {
        // clear messages when empty message received
        this.messages = [];
      } 
    });
  
  }


 // CREA TRACCE leaflet 
 getListaGpxObservable(tipo: string, ida: string, strx: string,colore:string) {
  //  console.log('Lista coordinate ');
    this.gpxservice.getListaGpxObservable(tipo, ida, strx).subscribe((p) => {
      this.letti =0;
      for (this.i = 0; this.i < p.length; this.i++) {
        if(this.i==0){
        this.origin = new L.LatLng(
          Number(p[this.i].lat),
          Number(p[this.i].lon),
        );
    
        this.stations2.push({
        //  id: "CAMBOT0548",
          name: strx,
          lat: this.origin.lat,
          lng: this.origin.lng,
       //   installed: 1,
        //  active: 1,
       //   province: "MB",
       //   type: "WIN"
         });

        }
}
this.createStations();
});

    }
  }
