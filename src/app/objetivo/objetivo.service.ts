import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';

import { Objetivo } from './objetivo';
const API_URL = '../../assets/';
const objetivosPath = 'objetivos.json';
const detailObjetivoPath = 'objetivo-'

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
    const url = `${detailObjetivoPath}${id}.json`;
    console.log(url);
    return this.http.get<Objetivo>(API_URL + url);
  }

  /** DELETE: delete the Objetivo from the server */
  deleteObjetivo(id: number): Observable<{}> {
    const url = `${API_URL}${detailObjetivoPath}${id}.json`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions);
  }

  /** POST: add a new Objetivo to the database */
  addObjetivo(req: Objetivo): Observable<Objetivo> {
    return this.http.post<Objetivo>(API_URL+objetivosPath, req, httpOptions)
  }
}