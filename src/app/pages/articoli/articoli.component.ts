import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
//import { DataService } from 'src/app/service/data.service';
import { Articolo } from 'src/app/model/articolo.model';
import { ArticoliService } from 'src/app/service/articoli.service';




@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit{

  articoli: Articolo[] = [];
  breakpoint: number;
  brk: number = 0;
  htmlString= "";

   itemsPerRow = 3
   rows = Array.from(
    Array(Math.ceil(this.articoli.length / this.itemsPerRow)).keys()
  )
  arts: boolean = false;

  errormsg: any;
  idcategoria: any;
  listaarticoli: Articolo[];
  tipo: string;
  ida: string;



  constructor(private breakpointObserver: BreakpointObserver,
    private router: Router,private route: ActivatedRoute,private articoliService: ArticoliService

  ) {
    this.ida = this.route.snapshot.paramMap.get('id');
    this.tipo = this.route.snapshot.paramMap.get('tipo');
    console.log('idarticolo '+this.ida+' '+this.tipo);

   }



  ngOnInit() {

    this.getListaArticoloObservable(this.tipo,this.ida);

    console.log(this.articoli);


    this.breakpoint = (innerWidth <= 450) ? 1 : 4;

  this.breakpointObserver.observe([
    Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge
  ]).subscribe(result => {
    if (result.breakpoints[Breakpoints.XSmall]) {
      this.brk = 1
    }
    if (result.breakpoints[Breakpoints.Small]) {
      this.brk = 2
    }
    if (result.breakpoints[Breakpoints.Medium]) {

     this.brk = 3
    }
    if (result.breakpoints[Breakpoints.Large]) {
      this.brk = 4
    }
    if (result.breakpoints[Breakpoints.XLarge]) {
      this.brk = 5
    }
  });


   this.stripHtml(this.htmlString);


}

     // 2) Metodo che effettua il subscribe dell'Observable
 getListaArticoloObservable(tipo:string,ida: string ) {
      this.articoliService.getListaArticoloObservable(tipo,ida)
                       .subscribe(
                          p=> this.listaarticoli = p,
                          error=>this.errormsg = error
                       );
  }



 /**  // handle Medium breakpoint
   * Checks if the user is on a mobile device
   */
  get isMobile() {
    return this.breakpointObserver.isMatched('(max-width: 767px)');
  }
  /**
   * Gets the screen's width
   */
  get screenWidth() {
    return window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
  }
  /**
   * Gets the screen's height
   */
  get screenHeight() {
    return window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
  }

  onResize(event: { target: { innerWidth: number; }; }) {
    if(this.brk == 1){
      this.breakpoint = (event.target.innerWidth <= 450) ? 1 : 1;
    }else if(this.brk == 2){
      this.breakpoint = (event.target.innerWidth <= 650) ? 1 : 2;
    }else if(this.brk == 3){
      this.breakpoint = (event.target.innerWidth <= 850) ? 1 : 3;
    }else if(this.brk > 3){
       this.breakpoint = (event.target.innerWidth <= 1250) ? 1 : 4;
    }
     //  console.log('BRK '+this.breakpoint);
    //this.breakpoint = (event.target.innerWidth > 650) ? 1 : 3;
  }



    /**
 * Returns the text from a HTML string
 *
 * @param {html} String The html string
  */

 stripHtml(htmlString:any){
   var temporalDivElement = document.createElement("div");
   temporalDivElement.innerHTML = htmlString;
   let st = temporalDivElement.textContent || temporalDivElement.innerText || "";



   var firstImage = temporalDivElement.getElementsByTagName('img')[0]
   var imgSrc = firstImage ? firstImage.src : "";
   // or, if you want the unresolved src, as it appears in the original HTML:
   var rawImgSrc = firstImage ? firstImage.getAttribute("src") : "";
   //console.log('image '+rawImgSrc);

   return st.substr(0, 304)+' ...';
}

artsingolo(id:number){
  this.router.navigate(['singolo/3/', id]);
  console.log('xid '+id);
}

/*
goToLink(url: string){
  window.open(url, "_blank");
}
*/


}



function getListaArticoloObservable() {
  throw new Error('Function not implemented.');
}

function ida(ida: any, string: any) {
  throw new Error('Function not implemented.');
}

