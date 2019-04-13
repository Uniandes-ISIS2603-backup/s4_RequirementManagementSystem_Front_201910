import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camino } from './camino';
import { Observable } from 'rxjs';
import { CaminoDetail } from './camino-detail';
import { environment } from '../../environments/environment.prod';


/**
 * API_URL is the constant of the API in which the back runs.
 */
const API_URL = environment.apiURL;
/**
 * caminos is the constant that represents the route.
 */
const caminos = '/camino/';

/**
 * The service provider for everything related to camino.
 */
@Injectable()
export class CaminoService {

  /**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) { }

  /**
  * Returns the Observable object containing the list of caminos retrieved from the API
  * @returns The list of caminos in real time.
  */
  getCaminos(): Observable<Camino[]> {
    return this.http.get<Camino[]>(API_URL + caminos);
  }

  /**
   * Returns the Observable object containing the camino, with its detail, retrieved from the API
   * @param caminoId id of the camino to be retrieved.
   * @returns the camino, with its detail.
   */
  getCaminosDetail(caminoId): Observable<CaminoDetail> {
    return this.http.get<CaminoDetail>(API_URL + caminos + caminoId );
  }

  /**
    * Creates a camino
    * @param camino The camino that will be created.
    * @returns The confirmation of the camino's creation
    */
  createCamino(camino): Observable<Camino> {
    return this.http.post<Camino>(API_URL+caminos, camino);
  }

  /**
    * Updates a camino
    * @param camino The camino which will be updated
    * @returns The confirmation of the camino's update
    */
  updateCamino(camino): Observable<Camino> {
    return this.http.put<Camino>(API_URL + caminos + camino.idPaso, camino);
  }

}
