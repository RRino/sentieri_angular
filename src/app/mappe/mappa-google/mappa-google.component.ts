import { GpxService } from '../../service/gpx.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { LatLngLiteral } from 'leaflet';
import { ActivatedRoute } from '@angular/router';
declare const google: any;

@Component({
  selector: 'app-mappa-google',
  templateUrl: './mappa-google.component.html',
  styleUrls: ['./mappa-google.component.css']
})
export class MappaGoogleComponent implements OnInit {
  title = 'app';
   @ViewChild('gmap') gmapElement: any;

    
 	map: google.maps.Map;
  flightPlanCoordinates = [];
  letti: number;
  i: number;
  la: any;
  lo: any;
  polyline: google.maps.LatLngLiteral[];
  poly: any;
  j: any;
  strx: string;
  lai: number;
  loi: string;

  constructor(private gpxservice: GpxService,private route: ActivatedRoute) { }


  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)
  }

  ngOnInit(): void {
    this.strx = this.route.snapshot.paramMap.get('strx');
    this.addPoint(this.strx);
  }

  addPoint(strx:string){
    this.getListaGpxObservable('5', '1', strx);
  }

// CREA TRACCE 
  getListaGpxObservable(tipo: string, ida: string, strx: string) {
  
    this.gpxservice.getListaGpxObservable(tipo, ida, strx).subscribe((p) => {

 
     this.letti =0;
     const result: LatLngLiteral[] = [];
      for (this.i = 0; this.i < p.length; this.i++) {
        if(this.i == 1){
          this.lai =  p[this.i].lat;
          this.loi = p[this.i].lon; 
        }
        this.la =  p[this.i].lat;
        this.lo = p[this.i].lon;
        result.push(new google.maps.Polyline({lat:parseFloat(this.la),lng:parseFloat(this.lo)}));
      }
      var mapProp = {
        center: new google.maps.LatLng(this.lai, this.loi),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.TERRAIN
      };
          this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
          var flightPath = new google.maps.Polyline({
              path: result,
              geodesic: true,
              strokeColor: 'red',
              strokeOpacity: 1.0,
              strokeWeight: 4
            });
            flightPath.setMap(this.map);
    });

   }
 }
    
 

    
