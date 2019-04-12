import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Requisito } from './requisito';
import { environment } from '../../environments/environment.prod';
const API_URL = environment.apiURL;

const reqsPath = '/requisitos';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RequisitoService {


  constructor(
    private http: HttpClient
  ) { }

  /* GET Requisitos from the server */
  getRequisitos(): Observable<Requisito[]> {
    return this.http.get<Requisito[]>(API_URL + reqsPath);
  }

  // Get requisito by Id, returns undefined when not found.

  getRequisito(id: number): Observable<Requisito> {
    const url = `${API_URL}${reqsPath}${id}`;
    console.log(url);
    return this.http.get<Requisito>(API_URL + url);
  }

  /** DELETE: delete the requisito from the server */
  deleteRequisito(id: number): Observable<{}> {
    const url = `${API_URL}${reqsPath}${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions);
  }

  /** POST: add a new Requisito to the database */
  addHero(req: Requisito): Observable<Requisito> {
    return this.http.post<Requisito>(API_URL+reqsPath, req, httpOptions)
  }


}