import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Cambio} from './cambio';
import { CambioDetail } from './cambio-detail';
import { environment } from '../../environments/environment.prod';


/**
 * API_URL is the constant of the API in which the back runs.
 */
const API_URL = environment.apiURL;
/**
 * JSONS to test the services.
 */
const data = 'cambio.json';
/**
 * Route to post or put the results of the services.
 */
const cambios = '/cambios';

/**
 * The service provider for everything related to changes.
 */
@Injectable()
export class CambioService {

  /**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */ 
  constructor(private http: HttpClient) { }

  /**
    * Returns the Observable object containing the list of changes retrieved from the API
    * @returns The list of changes in real time.
    */
  getCambios(): Observable<Cambio[]> {
      return this.http.get<Cambio[]>(API_URL + cambios);
  }

  /**
   * Returns the Observable object containing the change, with its detail, retrieved from the API
   * @param cambioId id of the change to be retrieved.
   * @returns the change with its detail.
   */
  getCambioDetail(cambioId:number): Observable<CambioDetail> {
    //console.log(cambioId+" "+API_URL + "cambio-" + cambioId+".json");
    return this.http.get<CambioDetail>(API_URL + cambios + "/" + cambioId);
  }

  /**
    * Creates a change.
    * @param cambio The change that will be created.
    * @returns The confirmation of the change's creation
    */
  createCambio(cambio): Observable<CambioDetail> {
    return this.http.post<CambioDetail>(API_URL + cambios, cambio);
}

/**
  * Updates a change.
  * @param cambio The change which will be updated
  * @returns The confirmation of the change's update
  */
updateCambio(cambio): Observable<CambioDetail> {
  return this.http.put<CambioDetail>(API_URL + cambios + '/' + cambio.id, cambio);
}

}

