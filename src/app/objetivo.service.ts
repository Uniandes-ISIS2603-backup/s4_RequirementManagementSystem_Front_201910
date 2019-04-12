import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';

import { Objetivo } from './mostrar-objetivo/objetivo';
const API_URL = '../assets/';
const objetivosPath = 'objetivos.json';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({ providedIn: 'root' })
export class ObjetivoService {
 
 
  constructor(
    private http: HttpClient
    ) { }
 
  /* GET objetivos from the server */
  getObjetivos (): Observable<Objetivo[]> {
    return this.http.get<Objetivo[]>(API_URL + objetivosPath);
  }
 
  /* /** GET hero by id. Return `undefined` when id not found 
  getHeroNo404<Data>(id: number): Observable<Objetivo> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Objetivo>(url);
  } */
 
 
  /* GET heroes whose name contains search term */
  /* searchHeroes(term: string): Observable<Objetivo[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Objetivo[]>(`${this.heroesUrl}/?name=${term}`);
  } */
 
  //////// Save methods //////////
 
}