import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Requisito } from './requisito';
const API_URL = '../../assets/';
const reqsPath = 'requisitos.json';
const specificReqPath = 'requisito-';

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
    const url = `${specificReqPath}${id}.json`;
    console.log(url);
    return this.http.get<Requisito>(API_URL + url);
  }

  /** DELETE: delete the requisito from the server */
  deleteRequisito(id: number): Observable<{}> {
    const url = `${API_URL}${specificReqPath}${id}.json`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions);
  }

  /** POST: add a new Requisito to the database */
  addHero(req: Requisito): Observable<Requisito> {
    return this.http.post<Requisito>(API_URL+reqsPath, req, httpOptions)
  }


}