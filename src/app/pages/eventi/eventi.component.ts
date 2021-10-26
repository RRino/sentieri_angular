import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/model/evento.model';
import { EventiService } from 'src/app/service/eventi.service';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css']
})
export class EventiComponent implements OnInit {
  listaeventi: Evento[];
  errormsg: any;
  ideventi ='2';
  idcategoria: any;
  tipo: any;
  ida: any;

  constructor(private eventiservice:EventiService,private router: Router,private route: ActivatedRoute, ) {
    this.listaeventi = [];
  }

  ngOnInit(): void {
   // this.listaeventi = this.eventiservice.getListaEventi();
   this.ida = this.route.snapshot.paramMap.get('id');
   this.tipo = this.route.snapshot.paramMap.get('tipo');
   console.log('idevento '+this.idcategoria+' '+this.tipo);
    this.getListaMetroObservable(this.tipo,this.ida);
  }



     // 2) Metodo che effettua il subscribe dell'Observable
     getListaMetroObservable(tipo:string,ida: string) {
      this.eventiservice.getListaMetroObservable(tipo,ida)
                       .subscribe(
                          p=> this.listaeventi = p,
                          error=>this.errormsg = error
                       );
  }


}
