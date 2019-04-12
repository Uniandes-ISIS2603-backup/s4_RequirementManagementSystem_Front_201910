import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Condicion } from './condicion';
import { Observable } from 'rxjs';
import { CondicionDetail } from './condicion-detail';

/**
 * API_URL is the constant of the API in which the back runs.
 */
const API_URL = 'https://fcd0e7c8.ngrok.io/s4_requirement-api/api/';
/**
 * condiciones is the constant of the API in which the back runs.
 */
const condiciones = 'condiciones/';

/**
 * The service provider for everything related to condition.
 */
@Injectable()
export class CondicionService {

  /**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) { }

  /**
  * Returns the Observable object containing the list of conditions retrieved from the API
  * @returns The list of conditions in real time.
  */
  getCondiciones(): Observable<Condicion[]> {
    return this.http.get<Condicion[]>(API_URL + condiciones);
  }

  /**
   * Returns the Observable object containing the condition, with its detail, retrieved from the API
   * @param conditionId id of the condition to be retrieved.
   * @returns the condition, with its detail.
   */
  getCondicionesDetail(condicionId): Observable<CondicionDetail> {
    return this.http.get<CondicionDetail>(API_URL + condiciones + condicionId );
  }

  /**
    * Creates a condition
    * @param condicion The condicion that will be created.
    * @returns The confirmation of the condicion's creation
    */
  createCondicion(condicion): Observable<Condicion> {
    return this.http.post<Condicion>(API_URL+condiciones, condicion);
  }

  /**
    * Updates a condition
    * @param condicion The condition which will be updated
    * @returns The confirmation of the condition's update
    */
  updateCondicion(condicion): Observable<Condicion> {
    return this.http.put<Condicion>(API_URL + condiciones + condicion.id, condicion);
  }

}
