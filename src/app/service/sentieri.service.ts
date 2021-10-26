
import { Injectable } from '@angular/core';
import {Sentiero} from '../model/sentiero.model'
 // 1
import { HttpClient } from '@angular/common/http';
import { throwError,  Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SentieriService {
 
/*cc*/

  private apiGetUrl = 'https://mappa.caibo.it/Rjsonn';
  articoli: any;

 constructor(private http: HttpClient) {}

 getListaSentieroObservable(tipo:string,ida: string,strx:string): Observable<Sentiero[]> {
    return this.http.get<Sentiero[]>(this.apiGetUrl+'?tipo='+tipo+'&id_cat='+ida+'&strx='+strx)
                    .pipe(
                      map(risposta => {
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