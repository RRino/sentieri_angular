import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Articolo } from 'src/app/model/articolo.model';
import { ArticoliService } from 'src/app/service/articoli.service';
//import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-artsingolo',
  templateUrl: './artsingolo.component.html',
  styleUrls: ['./artsingolo.component.css']
})
export class ArtsingoloComponent implements OnInit {
  @Input() singolo:number;
  @Input() testo2:string ='23w';
  id: any;
  sub: any;
  name: any;
  user: { id: any; name: any; };
  paramsSubscription: any;
  idarticolo: string;
  tipo: string;
  ida:string;
  listaarticoli: Articolo[];
  errormsg: any;


  constructor(private articoliService : ArticoliService,private route: ActivatedRoute) {
     this.ida = this.route.snapshot.paramMap.get('id');
     this.tipo = this.route.snapshot.paramMap.get('tipo');
      console.log('idsingolo '+this.ida+' '+this.tipo);
  }


  articoli: Articolo[] = [];

  ngOnInit(): void {
    this.getListaArticoloObservable(this.tipo,this.ida);
      this.testo(this.testo2);
  }


     // 2) Metodo che effettua il subscribe dell'Observable
     getListaArticoloObservable(tipo:string,ida: string ) {
      this.articoliService.getListaArticoloObservable(tipo,ida)
                       .subscribe(
                          p=> this.articoli = p,
                          error=>this.errormsg = error
                       );
  }

 stripHtml(htmlString:any){
  var temporalDivElement = document.createElement("div");
  temporalDivElement.innerHTML = htmlString;
  let st = temporalDivElement.textContent || temporalDivElement.innerText || "";

  var firstImage = temporalDivElement.getElementsByTagName('img')[0]
  var imgSrc = firstImage ? firstImage.src : "";
  // or, if you want the unresolved src, as it appears in the original HTML:
  var rawImgSrc = firstImage ? firstImage.getAttribute("src") : "";
  console.log('image singolo '+rawImgSrc);
  var res = htmlString.replace(rawImgSrc, 'http://caibo.it/'+rawImgSrc);
  return res;
}

testo(testo:any){
  console.log('testo '+testo)
}
}
