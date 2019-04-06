import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';

import { Requisito } from './requisito';
const API_URL = '../assets/';
const reqsPath = 'requisitos.json';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({ providedIn: 'root' })
export class RequisitoService {
 
 
  constructor(
    private http: HttpClient
    ) { }
 
  /* GET Requisitos from the server */
  getRequisitos (): Observable<Requisito[]> {
    return this.http.get<Requisito[]>(API_URL + reqsPath);
  }
 
  /* /** GET hero by id. Return `undefined` when id not found 
  getHeroNo404<Data>(id: number): Observable<Requisito> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Requisito>(url);
  } */
 
 
  /* GET heroes whose name contains search term */
  /* searchHeroes(term: string): Observable<Requisito[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Requisito[]>(`${this.heroesUrl}/?name=${term}`);
  } */
 
  //////// Save methods //////////
 
}