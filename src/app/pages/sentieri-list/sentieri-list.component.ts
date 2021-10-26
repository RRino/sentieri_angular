import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { GPX } from 'src/app/model/gpx.module';
import { Sentiero } from 'src/app/model/sentiero.model';
import { SentieriService } from 'src/app/service/sentieri.service';

@Component({
  selector: 'app-sentieri-list',
  templateUrl: './sentieri-list.component.html',
  styleUrls: ['./sentieri-list.component.css']
})
export class SentieriListComponent implements OnInit {

  displayedColumns: string[] = ['id','sigla', 'difficolta', 'lunghezza','nome_file_gpx','zone_id','colore', 'percorso'];
  listasentieri: Sentiero[];
  ida: string;
  tipo: string;
  idcategoria: any;
  errormsg: any;
  strx: string;
  //sentierinome = ['001BO','031BO','142BO','061BO','110BO','120BO','100BO','052BO','116BO','132BO','053BO','055BO','057BO','059BO','061BO','102BO','106BO','110BO','112BO','114BO','140BO','122BO'];
  sentierinomeb = ['011BO'];
  ns:number;
  sent: Sentiero[]=[] ;

  constructor(private eventiservice:SentieriService,private router: Router,private route: ActivatedRoute, ) {
    this.listasentieri = [];
  }

  ngOnInit(): void {
   // this.listaeventi = this.eventiservice.getListaEventi();
   this.ida = this.route.snapshot.paramMap.get('id');
   this.tipo = this.route.snapshot.paramMap.get('tipo');
   this.strx = this.route.snapshot.paramMap.get('strx');
   
  if(this.tipo == '9'){
    //Legge il contenuto dei file gpx "images/com_mappa/gpx/nome.gpx" e crea una tabella con tutte le coordinate lat lon ed ele
    for(this.ns = 0 ; this.ns < this.sentierinomeb.length; this.ns++){
     console.log('9-nome-sentiero '+this.sentierinomeb[this.ns]);
   // this.getListaSentieroObservable(this.tipo,this.ida,this.strx.toLowerCase( )+'.gpx');
    this.getListaSentieroObservable('9','0',this.sentierinomeb[this.ns].toLowerCase( ));
    }
  }

  if(this.tipo != '9'){
     console.log('!9--sentiero '+this.tipo+' '+this.ida+' '+this.strx);
     this.getListaSentieroObservable(this.tipo,this.ida,this.strx);
    console.log('nome-sent '+this.sent);
    }
 

  }



 // 2) Metodo che effettua il subscribe dell'Observable
     getListaSentieroObservable(tipo:string,ida: string,strx:string) {
      this.eventiservice.getListaSentieroObservable(tipo,ida,strx)
                       .subscribe(
                          p=> this.listasentieri = p,
                          error=>this.errormsg = error
                       );    
  }

/*
// GENERA COORDINATE GPX
click(ev:string){
  this.strx = ev;
  this.tipo= '9';
  this.ida = '1';
  console.log('passati '+this.tipo+ ' '+this.ida+' '+this.strx);
  this.getListaSentieroObservable(this.tipo,this.ida,this.strx.toLowerCase());
}*/
  
//VISULIZZA SENTIERO SU GOOGLE MAPS
click(nome:string){
  console.log('nome '+nome);
  this.router.navigate(['/mappa-google/5/1/'+nome]);
}
  }

