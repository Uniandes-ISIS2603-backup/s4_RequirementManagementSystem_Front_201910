import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Condicion } from './condicion';
import { Observable } from 'rxjs';
import { CondicionDetail } from './condicion-detail';
import { environment } from '../../environments/environment.prod';


/**
 * API_URL is the constant of the API in which the back runs.
 */
const API_URL = environment.apiURL;
/**
 * condiciones is the constant of the API in which the back runs.
 */
const condicionPath = '/condiciones/';
const proyectosPath = '/proyectos/';
const objetivosPath = '/objetivos/';
const reqsPath = '/requisitos/';
const casosPath = '/casosDeUso/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
  getCondiciones(proyectoId:number, objetivoId: number, requisitoId: number, casoId: number): Observable<Condicion[]> {
    return this.http.get<Condicion[]>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + casosPath + casoId + condicionPath);
  }

  /**
   * Returns the Observable object containing the condition, with its detail, retrieved from the API
   * @param conditionId id of the condition to be retrieved.
   * @returns the condition, with its detail.
   */
  getCondicionesDetail(proyectoId:number, objetivoId: number, requisitoId: number, casoId: number, condicionId:number): Observable<CondicionDetail> {
    return this.http.get<CondicionDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + casosPath + casoId +condicionPath +condicionId );
  }

  /**
    * Creates a condition
    * @param condicion The condicion that will be created.
    * @returns The confirmation of the condicion's creation
    */
  createCondicion(proyectoId:number, objetivoId: number, requisitoId: number, casoId: number, condicion): Observable<Condicion> {
    return this.http.post<Condicion>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + casosPath + casoId + condicionPath, condicion);
  }

  /**
    * Updates a condition
    * @param condicion The condition which will be updated
    * @returns The confirmation of the condition's update
    */
  updateCondicion(proyectoId:number, objetivoId: number, requisitoId: number, casoId: number, condicionId:number, condicion): Observable<Condicion> {
    return this.http.put<Condicion>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + casosPath + casoId + condicionPath +condicionId, condicion);
  }

  deleteCamino(proyectoId:number, objetivoId:number,requisitoId: number, casoDeUsoId:number, condicionId: number): Observable<{}> {
    return this.http.delete(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + casosPath + casoDeUsoId + condicionId);
  }

}
