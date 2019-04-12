import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';

import { Objetivo } from './objetivo';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const objetivosPath = '/objetivos';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class ObjetivoService {
 
 
  constructor(
    private http: HttpClient
    ) { }
 
  /* GET Objetivos from the server */
  getObjetivos(): Observable<Objetivo[]> {
    return this.http.get<Objetivo[]>(API_URL + objetivosPath);
  }

  // Get Objetivo by Id, returns undefined when not found.
  getObjetivo(id: number): Observable<Objetivo> {
    const url = objetivosPath + '/' + id;
    return this.http.get<Objetivo>(API_URL + url);
  }

   /** DELETE: delete the Objetivo from the server */
  deleteObjetivo(id: number): Observable<any> {
    const url = objetivosPath + '/' + id;
    //console.log(url);
    return this.http.delete<any>(API_URL + url);
  }

  /** POST: add a new Objetivo to the database */
  addObjetivo(req: Objetivo): Observable<Objetivo> {
    return this.http.post<Objetivo>(API_URL+objetivosPath, req, httpOptions);
  }

  /** Update del objetivo dado por parametro */
  updateObjetivo(id:number, nuevo)
  {
   return this.http.put<Objetivo>(API_URL + objetivosPath + '/' + id, nuevo, httpOptions);
  }
}