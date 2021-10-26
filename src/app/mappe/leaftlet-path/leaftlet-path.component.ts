import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as L from "leaflet";
import { LeafletMouseEvent } from "leaflet";
import { Sentiero } from "../../model/sentiero.model";
import { GpxService } from "../../service/gpx.service";
import { NomiService } from "../../service/nomi.service";
import { SentieriService } from "../../service/sentieri.service";

import { map } from 'rxjs/operators';
import {Breakpoints,  BreakpointObserver } from '@angular/cdk/layout';
import {featureGroup, latLng, tileLayer, polygon, marker, Icon, LatLngBounds} from 'leaflet';

@Component({
  selector: "app-leaftlet-path",
  templateUrl: "./leaftlet-path.component.html",
  styleUrls: ["./leaftlet-path.component.scss"],
})
export class LeaftletPathComponent implements OnInit, OnDestroy {




  loading: boolean = false;

  listasentieri: Sentiero[]=[];
  map: L.Map;
  greenIcon: L.Icon<L.IconOptions>;
  polylinePoints: any[][] = [];
  fileContent: any | ArrayBuffer;
  str: any[];
  latlon: string;
  lat: string[];
  lon: string[];
  i: number;
  lats: any;
  lons: any;
  color: any;
  origin: L.LatLng;
  dest: L.LatLng;
  listagpx: any[];
  ida: string;
  tipo: string;
  strx: string;
  errormsg: any;
  tr1: any;
  
  n:number;
  
  letti: number;
  ns: number;
 
  
  tipos: string;
  idas: string;
  strxs: string;
  sent: Sentiero[]=[] ;
  messages: any[];
  tipox: string;
  idax: string;
  strxx: string;
  listanomi2: any[]=[];
  nnomi2: number;
  nonep: string;
  nomep: string;
  listanomib: any[]=[];
  ns2: number;
  nlista: number;
  flat: number;
  flon: number;
  nome: any;
  sentieroDati: Sentiero[]=[] ;
  setColore:string;
  title: string;
  //breakpointObserver: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private nomiservice:NomiService,
    private gpxservice: GpxService,
    private sentierodati: SentieriService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.listasentieri = [];
    this.listagpx = [];
  
  }

  ngOnInit(): void {  
    this.nomiservice.item$.subscribe(title => this.title = title);
    
    this.map = L.map("map").setView([44.3210,11.20761], 11);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "edupala.com © Angular LeafLet",
    }).addTo(this.map);

    this.getNomiTracce();

  }



    getNomiTracce(){ 
      this.getListaNomiObservable('11','0','0');
    }
  
  
   //LEGGE COORDINATE GPX 
   creaTracce() {
    for(this.n =0; this.n < this.listanomi2.length; this.n++){
     // console.log("id-gpx " + this.tipo + " " + this.ida + " " + this.listanomi2[this.n].toLowerCase());   
      this.getListaGpxObservable('5', '1', this.listanomi2[this.n].toLowerCase(),'red');
   }
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
        
        // RCHIAMA CREA TRACCE
        this.creaTracce() ;

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
        // this.i++;
        this.dest = new L.LatLng(
          Number(p[this.i].lat),
          Number(p[this.i].lon)
        );
  

        }else{
// posizione cerchio
          if(this.i==3){
            this.flat = Number(p[this.i].lat);
            this.flon  = Number(p[this.i].lon);
            this.marker(this.flat,this.flon,strx);

          }

          this.origin = new L.LatLng(
            Number(p[this.i-1].lat),
            Number(p[this.i-1].lon)
          );
          // this.i++;
          this.dest = new L.LatLng(
            Number(p[this.i].lat),
            Number(p[this.i].lon)
          );
        }
        //console.log(this.dest+' '+this.i);
       const poly =   L.polyline([this.origin, this.dest], { color: colore }).addTo(this.map).on('click', function(ev) {

});
      
   this.letti++;
      }
      return (this.listagpx = p), (error: any) => (this.errormsg = error);
    });

    
  }

  
 // legge i dati singolo sentiero
 getListaSentieroObservable(tipo:string,ida: string,strx:string) {
  this.sentierodati.getListaSentieroObservable(tipo,ida,strx)
                   .subscribe(
                      p=> this.sentieroDati = p,
                      error=>this.errormsg = error
                   );    
}


 marker(flat:number,flon:number,nome:string){
   //console.log('mk '+flat+flon+nome);
  const circle = L.circleMarker([flat, flon]).addTo(this.map).bindTooltip(("<div>"+nome+"<br></div>"),
  { offset: L.point(+10, -10)}).on('click', () => { this.gerDatiSingolo(nome,'yellow') });
  circle.on('mouseover', function() {
      this.setStyle({
      color: 'yellow'   
    });
 });
    
     circle.on('mouseout', function() {
      this.setStyle({
     color: 'blue'  
  });
});
  }

  gerDatiSingolo(nome:string,colore:string){
    // alert(nome);
    if(this.setColore == 'yellow'){
      this.setColore = 'red';
    }else{
      this.setColore = 'yellow';
    }
     this.getListaSentieroObservable('12','0',nome.toUpperCase( ));
     this.gestSentieroColore(nome,this.setColore);
     this.loading = true;
    }

  gestSentieroColore(nome:string,colore:string){
    this.getListaGpxObservable('5', '1', nome.toLowerCase(),colore);
  }

  ngOnDestroy(): void {
    this.map.remove();
  }

  send(se:string){
    alert(se);
  }


  newTitle(nome: string) {
    this.nomiservice.changeTitle(nome);
    console.log('nome '+nome);
    this.router.navigate(['/mappa-google/5/1/'+nome]);
  }
  
}




