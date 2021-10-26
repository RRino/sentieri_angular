
import { Injectable } from '@angular/core';
import { Evento } from '../model/evento.model';
import { HttpClient } from '@angular/common/http';
import { throwError,  Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventiService {

  private apiGetUrl = 'https://www.caibo.it/Rjson';
  articoli: any;

 constructor(private http: HttpClient) {}

 getListaMetroObservable(tipo:string,ida: string): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiGetUrl+'?tipo='+tipo+'&id_cat='+ida)
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
