import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';

import { Objetivo } from './objetivo';
import { environment } from '../../environments/environment';
//const API_URL = environment.apiURL;
const API_URL = environment.apiURL;
const objetivosPath = '/objetivos/';
const proyectosPath = '/proyectos/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class ObjetivoService {
 
 
  constructor(
    private http: HttpClient
    ) { }
 
    

  /* GET Objetivos from the server */
  getObjetivos(proyectoId: number): Observable<Objetivo[]> {
    return this.http.get<Objetivo[]>(API_URL + proyectosPath + proyectoId + objetivosPath);
  }


  getObjetivo(proyectoId:number ,objetivoId: number): Observable<Objetivo> {
    return this.http.get<Objetivo>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId);
  }

   /** DELETE: delete the Objetivo from the server */
  deleteObjetivo(proyectoId:number ,objetivoId: number): Observable<any> {
    return this.http.delete<any>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId);
  }

  /** POST: add a new Objetivo to the database */
  addObjetivo(proyectoId:number, req: Objetivo): Observable<Objetivo> {
    return this.http.post<Objetivo>(API_URL + proyectosPath + proyectoId + objetivosPath, req, httpOptions);
  }

  /** Update del objetivo dado por parametro */
  updateObjetivo(proyectoId: number, objetivoId:number, nuevo)
  {
   return this.http.put<Objetivo>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId, nuevo, httpOptions);
  }
}