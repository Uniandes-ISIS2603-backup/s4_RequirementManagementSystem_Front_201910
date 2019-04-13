import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Aprobacion } from './aprobacion';
import { AprobacionDetail } from './aprobacion-detail';
import { environment } from '../../environments/environment.prod';

/**
 * API_URL is the constant of the API in which the back runs.
 */
const API_URL = environment.apiURL;
/**
 * JSONS to test the services.
 */
const data = 'aprobacion.json';
/**
 * Route to post or put the results of the services.
 */
const aprobaciones = '/aprobaciones'
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
    * Returns the Observable object containing the list of approbations retrieved from the API
    * @returns The list of approbations in real time.
    */
  getAprobaciones(): Observable<Aprobacion[]> {
      return this.http.get<Aprobacion[]>(API_URL + aprobaciones);
  }

  /**
   * Returns the Observable object containing the approbation, with its detail, retrieved from the API
   * @param aprobacionId id of the approbation to be retrieved.
   * @returns the approbation, with its detail.
   */
  getAprobacionDetail(aprobacionId:number): Observable<AprobacionDetail> {
    //console.log(cambioId+" "+API_URL + "cambio-" + cambioId+".json");
    return this.http.get<AprobacionDetail>(API_URL + aprobaciones + "/" + aprobacionId);
  }

   /**
    * Creates an approbation
    * @param aprobacion The approbation that will be created.
    * @returns The confirmation of the approbation's creation
    */
  createAprobacion(aprobacion): Observable<AprobacionDetail> {
    return this.http.post<AprobacionDetail>(API_URL + aprobaciones, aprobacion);
}

  /**
    * Updates an approbation
    * @param aprobacion The approbation which will be updated
    * @returns The confirmation of the approbation's update
    */
  updateAprobacion(aprobacion): Observable<AprobacionDetail> {
  return this.http.put<AprobacionDetail>(API_URL + aprobaciones + '/' + aprobacion.id, aprobacion);
}
}
