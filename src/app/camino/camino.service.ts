import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
const caminoPath = '/caminos/';
const proyectosPath = '/proyectos/';
const objetivosPath = '/objetivos/';
const reqsPath = '/requisitos/';
const casosPath = '/casosDeUso/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
  getCaminos(proyectoId: number, objetivoId: number, requisitoId: number, casoId: number): Observable<Camino[]> {
    return this.http.get<Camino[]>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + casosPath + casoId + caminoPath);
  }

  /**
   * Returns the Observable object containing the camino, with its detail, retrieved from the API
   * @param caminoId id of the camino to be retrieved.
   * @returns the camino, with its detail.
   */
  getCaminosDetail(proyectoId: number, objetivoId: number, requisitoId: number, casoId: number, caminoId: number): Observable<CaminoDetail> {
    return this.http.get<CaminoDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + casosPath + casoId + caminoPath + caminoId);
  }

  /**
    * Creates a camino
    * @param camino The camino that will be created.
    * @returns The confirmation of the camino's creation
    */
  createCamino(proyectoId: number, objetivoId: number, requisitoId: number, casoId: number, camino): Observable<Camino> {
    return this.http.post<Camino>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + casosPath + casoId + caminoPath, camino, httpOptions);
  }

  /**
    * Updates a camino
    * @param camino The camino which will be updated
    * @returns The confirmation of the camino's update
    */
  updateCamino(proyectoId: number, objetivoId: number, requisitoId: number, casoId: number, caminoId: number, camino): Observable<Camino> {
    return this.http.put<Camino>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + casosPath + casoId + caminoPath + caminoId, camino);
  }

  deleteCamino(proyectoId: number, objetivoId: number, requisitoId: number, casoDeUsoId: number, caminoId: number): Observable<{}> {
    return this.http.delete(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + casosPath + casoDeUsoId + caminoPath + caminoId);
  }

}
