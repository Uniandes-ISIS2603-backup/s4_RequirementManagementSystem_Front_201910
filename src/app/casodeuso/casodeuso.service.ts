import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Casodeuso } from './casodeuso';
import { Observable } from 'rxjs';
import { CasodeusoDetail } from './casodeuso-detail';
import { environment } from '../../environments/environment.prod';


/**
 * API_URL is the constant of the API in which the back runs.
 */
const API_URL = environment.apiURL;
/**
 * API_URL is the constant of the route casos to fetch the components of case of use.
 */
const proyectosPath = '/proyectos/';
const objetivosPath = '/objetivos/';
const reqsPath = '/requisitos/';
const casosPath = '/casosDeUso/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
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
  getCasosdeuso(proyectoId:number, objetivoId:number,requisitoId: number): Observable<CasodeusoDetail[]> {
    return this.http.get<CasodeusoDetail[]>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + casosPath);
  }

  /**
   * Returns the Observable object containing the case of use, with its detail, retrieved from the API
   * @param casodeusoId id of the case of use to be retrieved.
   * @returns the case of use, with its detail.
   */
  getCasosdeusoDetail(proyectoId:number, objetivoId:number,requisitoId: number, casoDeUsoId:number): Observable<CasodeusoDetail> {
    return this.http.get<CasodeusoDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + casosPath + casoDeUsoId);
    /*return this.http.get<CasodeusoDetail>(API_URLP+"casodeuso-"+casodeusoId+".json");*/

  }

  /**
  * Creates a case of use
  * @param caso The case of use that will be created.
  * @returns The confirmation of the case's creation
  */
  createCasodeuso(proyectoId:number, objetivoId:number,requisitoId: number, casoDeUsoId:number, caso): Observable<CasodeusoDetail>{
    return this.http.post<CasodeusoDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + casosPath,caso, httpOptions);
  }

  /**
  * Updates a case of use
  * @param caso The case of use which will be updated
  * @returns The confirmation of the case's update
  */
  updateCasodeuso(proyectoId:number, objetivoId:number,requisitoId: number, casoDeUsoId:number, caso): Observable<CasodeusoDetail> {
    return this.http.put<CasodeusoDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + casosPath + casoDeUsoId, caso, httpOptions);
  }

  /**
   * DELETE:
   * Borra el requisito de la base de datos que tiene el mismo identificador pasado por parámetro.
   * @param id El identificador único del requisito a borrar
   */
  deleteCasodeuso(proyectoId:number, objetivoId:number,requisitoId: number, casoDeUsoId:number): Observable<{}> {
    return this.http.delete(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + casosPath + casoDeUsoId);
  }

}
