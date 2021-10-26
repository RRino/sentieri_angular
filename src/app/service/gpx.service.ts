
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { throwError,  Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { GPX } from '../model/gpx.module';


@Injectable({
  providedIn: 'root'
})
export class GpxService {

  private apiGetUrl = 'https://www.mappa.caibo.it/Rjsonn';
  //private apiGetUrl = 'http://localhost/caibo/Rjson';

 constructor(private http: HttpClient) {}

 getListaGpxObservable(tipo:string,ida: string,strx:string): Observable<GPX[]> {
    return this.http.get<GPX[]>(this.apiGetUrl+'?tipo='+tipo+'&id_cat='+ida+'&strx='+strx)
                    .pipe(
                      map(risposta => {
                       // console.log(risposta);
                      return risposta['dati']}),
                    //  tap(dati => console.log(dati)), // messaggio di verifica nella console
                      catchError(this.handleErrorObs)
                    );
 }



 private handleErrorObs(error: any) {
    console.error('Si è verificato un errore', error);
    return throwError(error.message || error);
 }


 
}