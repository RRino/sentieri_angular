
import { Injectable } from '@angular/core';
import { Articolo } from '../model/articolo.model';
import { HttpClient } from '@angular/common/http';
import { throwError,  Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticoliService {
 
/*cc*/

  private apiGetUrl = 'https://www.mappa.caibo.it/Rjsonn';
  articoli: any;

 constructor(private http: HttpClient) {}

 getListaArticoloObservable(tipo:string,ida: string): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(this.apiGetUrl+'?tipo='+tipo+'&id_cat='+ida)
                    .pipe(
                      map(risposta => risposta['dati']),
                      tap(dati => console.log(dati)), // messaggio di verifica nella console
                      catchError(this.handleErrorObs)
                    );
 }


 private handleErrorObs(error: any) {
    console.error('Si è verificato un errore', error);
    return throwError(error.message || error);
 }


 
}