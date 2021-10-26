
import { Injectable } from '@angular/core';
import {Sentiero} from '../model/sentiero.model'
 // 1
import { HttpClient } from '@angular/common/http';
import { throwError,  Observable, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NomiService {
 
  private _title: BehaviorSubject<string> = new BehaviorSubject(null);

  item$ = this._title.asObservable();

  changeTitle(title: string) {
      this._title.next(title);
  }

  resetTitle() {
    //  this._title.next(_config.appTitle);
  }

  private apiGetUrl = 'https://mappa.caibo.it/Rjsonn';
  articoli: any;

 constructor(private http: HttpClient) {}

 getListaNomiObservable(tipo:string,ida: string,strx:string): Observable<any[]> {
  return this.http.get<any[]>(this.apiGetUrl+'?tipo='+tipo+'&id_cat='+ida+'&strx='+strx)
  .pipe(
    map(risposta => {
      console.log(risposta);
    
      return risposta['dati']}),
    tap(dati => console.log(dati)), // messaggio di verifica nella console
    catchError(this.handleErrorObs)
  );
                  
 }


 private handleErrorObs(error: any) {
    console.error('Si è verificato un errore', error);
    return throwError(error.message || error);
 }


 
}