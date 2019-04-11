import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Aprobacion } from './aprobacion';
import { AprobacionDetail } from './aprobacion-detail';


const API_URL = "../../assets/";
const data = 'aprobacion.json';
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
      return this.http.get<Aprobacion[]>(API_URL + data);
  }

  /**
   * Returns the Observable object containing the approbation, with its detail, retrieved from the API
   * @param aprobacionId id of the approbation to be retrieved.
   * @returns the approbation.
   */
  getAprobacionDetail(aprobacionId:number): Observable<AprobacionDetail> {
    //console.log(cambioId+" "+API_URL + "cambio-" + cambioId+".json");
    return this.http.get<AprobacionDetail>(API_URL + "aprobacion-" + aprobacionId+".json");
  }

   /**
    * Creates an approbation
    * @param aprobacion The approbation that will be created.
    * @returns The confirmation of the approbation's creation
    */
  createAprobacion(aprobacion): Observable<AprobacionDetail> {
    return this.http.post<AprobacionDetail>(API_URL + aprobaciones, aprobaciones);
}

  /**
    * Updates an approbation
    * @param aprobacion The approbation which will be update
    * @returns The confirmation of the approbation's update
    */
  updateAprobacion(aprobacion): Observable<AprobacionDetail> {
  return this.http.put<AprobacionDetail>(API_URL + aprobaciones + '/' + aprobacion.id, aprobacion);
}
}
