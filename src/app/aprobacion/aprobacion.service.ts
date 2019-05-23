import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aprobacion } from './aprobacion';
import { AprobacionDetail } from './aprobacion-detail';
import { environment } from '../../environments/environment.prod';

const API_URL = environment.apiURL;
const proyectosPath = '/proyectos/';
const objetivosPath = '/objetivos/';
const reqsPath = '/requisitos/';
/**
 * Route to post or put the results of the services.
 */
const aprobacionPath = '/aprobaciones/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
/**
 * The service provider for everything related to approbations.
 */
export class AprobacionService {
/**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) { }

  /**
    * Returns the Observable object containing the list of changes retrieved from the API
    * @returns The list of changes in real time.
    */
  getAprobaciones(proyectoId: number, objetivoId: number, requisitoId: number): Observable<Aprobacion[]> {
    if (requisitoId === null || requisitoId === 0)
      return this.http.get<Aprobacion[]>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + aprobacionPath);
    else
      return this.http.get<Aprobacion[]>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + aprobacionPath);

  }

  /**
   * Returns the Observable object containing the change, with its detail, retrieved from the API
   * @param aprobacionId id of the change to be retrieved.
   * @returns the change with its detail.
   */
  getAprobacionDetail(proyectoId: number, objetivoId: number, requisitoId: number, aprobacionId: number): Observable<AprobacionDetail> {
    //console.log(aprobacionId+" "+API_URL + "cambio-" + aprobacionId+".json");
    if (requisitoId === null || requisitoId === 0)
      return this.http.get<AprobacionDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + aprobacionPath + aprobacionId);
    else
      return this.http.get<AprobacionDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + aprobacionPath + aprobacionId);
  }

  /**
    * Creates a change.
    * @param cambio The change that will be created.
    * @returns The confirmation of the change's creation
    */
  createAprobacion(proyectoId: number, objetivoId: number, requisitoId: number, cambio): Observable<AprobacionDetail> {
    if (requisitoId === null || requisitoId === 0)
    return this.http.post<AprobacionDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + aprobacionPath, cambio, httpOptions);
    else
    return this.http.post<AprobacionDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + aprobacionPath, cambio, httpOptions);
  }

  /**
    * Updates a change.
    * @param cambio The change which will be updated
    * @returns The confirmation of the change's update
    */
  updateAprobacion(proyectoId: number, objetivoId: number, requisitoId: number, aprobacionId: number, cambio): Observable<AprobacionDetail> {
    if (requisitoId === null || requisitoId === 0)
    return this.http.put<AprobacionDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + aprobacionPath + aprobacionId, cambio, httpOptions);
    else
    return this.http.put<AprobacionDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + aprobacionPath + aprobacionId, cambio, httpOptions);
  }

  deleteAprobacion(proyectoId: number, objetivoId: number, requisitoId: number, aprobacionId: number): Observable<{}> {
    if (requisitoId === null || requisitoId === 0)
    return this.http.delete(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + aprobacionPath + aprobacionId);
    else
    return this.http.delete(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + aprobacionPath + aprobacionId);
  }
}
