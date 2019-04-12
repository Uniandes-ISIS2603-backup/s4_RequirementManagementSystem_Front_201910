import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Casodeuso } from './casodeuso';
import { Observable } from 'rxjs';
import { CasodeusoDetail } from './casodeuso-detail';

/**
 * API_URL is the constant of the API in which the back runs.
 */
const API_URL = 'https://fcd0e7c8.ngrok.io/s4_requirement-api/api/';
/**
 * API_URL is the constant of the route casos to fetch the components of case of use.
 */
const casos = 'casos/';
/*const API_URLP= '../../assets/';*/

/**
 * The service provider for everything related to case of use.
 */
@Injectable()
export class CasodeusoService {

  /**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) { }

  /**
  * Returns the Observable object containing the list of cases of use retrieved from the API
  * @returns The list of cases of use in real time.
  */
  getCasosdeuso(): Observable<CasodeusoDetail[]> {
    return this.http.get<CasodeusoDetail[]>(API_URL + casos);
  }

  /**
   * Returns the Observable object containing the case of use, with its detail, retrieved from the API
   * @param casodeusoId id of the case of use to be retrieved.
   * @returns the case of use, with its detail.
   */
  getCasosdeusoDetail(casodeusoId): Observable<CasodeusoDetail> {
    return this.http.get<CasodeusoDetail>(API_URL+casos + casodeusoId );
    /*return this.http.get<CasodeusoDetail>(API_URLP+"casodeuso-"+casodeusoId+".json");*/

  }

  /**
  * Creates a case of use
  * @param caso The case of use that will be created.
  * @returns The confirmation of the case's creation
  */
  createCasodeuso(caso): Observable<CasodeusoDetail>{
    return this.http.post<CasodeusoDetail>(API_URL+casos,caso);
  }

  /**
  * Updates a case of use
  * @param caso The case of use which will be updated
  * @returns The confirmation of the case's update
  */
  updateCasodeuso(caso): Observable<CasodeusoDetail> {
    return this.http.put<CasodeusoDetail>(API_URL + casos + caso.id, caso);
  }


}
