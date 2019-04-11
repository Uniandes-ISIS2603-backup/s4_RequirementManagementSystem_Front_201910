import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';

import { Requisito } from './requisito';
const API_URL = '../assets/';
const reqsPath = 'requisitos.json';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class RequisitoService {
 
 
  constructor(
    private http: HttpClient
    ) { }
 
  /* GET Requisitos from the server */
  getRequisitos (): Observable<Requisito[]> {
    return this.http.get<Requisito[]>(API_URL + reqsPath);
  }
 
  // Get requisito by Id, returns undefined when not found.

  getRequisito(id: number): Observable<Requisito> {
    const url = `${reqsPath}/?id=${id}`;
    return this.http.get<Requisito>(API_URL + url);
  } 

 
}