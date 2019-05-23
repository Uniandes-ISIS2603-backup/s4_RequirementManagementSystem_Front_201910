import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cambio } from './cambio';
import { CambioDetail } from './cambio-detail';
import { environment } from '../../environments/environment.prod';


/**
 * API_URL is the constant of the API in which the back runs.
 */
const API_URL = environment.apiURL;
const proyectosPath = '/proyectos/';
const objetivosPath = '/objetivos/';
const reqsPath = '/requisitos/';
/**
 * Route to post or put the results of the services.
 */
const cambiosPath = '/cambios/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
  getCambios(proyectoId: number, objetivoId: number, requisitoId: number): Observable<Cambio[]> {
    if (requisitoId === null || requisitoId === 0)
      return this.http.get<Cambio[]>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + cambiosPath);
    else
      return this.http.get<Cambio[]>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + cambiosPath);

  }

  /**
   * Returns the Observable object containing the change, with its detail, retrieved from the API
   * @param cambioId id of the change to be retrieved.
   * @returns the change with its detail.
   */
  getCambioDetail(proyectoId: number, objetivoId: number, requisitoId: number, cambioId: number): Observable<CambioDetail> {
    //console.log(cambioId+" "+API_URL + "cambio-" + cambioId+".json");
    if (requisitoId === null || requisitoId === 0)
      return this.http.get<CambioDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + cambiosPath + cambioId);
    else
      return this.http.get<CambioDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + cambiosPath + cambioId);
  }

  /**
    * Creates a change.
    * @param cambio The change that will be created.
    * @returns The confirmation of the change's creation
    */
  createCambio(proyectoId: number, objetivoId: number, requisitoId: number, cambio): Observable<CambioDetail> {
    if (requisitoId === null || requisitoId === 0)
    return this.http.post<CambioDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + cambiosPath, cambio, httpOptions);
    else
    return this.http.post<CambioDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + cambiosPath, cambio, httpOptions);
  }

  /**
    * Updates a change.
    * @param cambio The change which will be updated
    * @returns The confirmation of the change's update
    */
  updateCambio(proyectoId: number, objetivoId: number, requisitoId: number, cambioId: number, cambio): Observable<CambioDetail> {
    if (requisitoId === null || requisitoId === 0)
    return this.http.put<CambioDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + cambiosPath + cambioId, cambio, httpOptions);
    else
    return this.http.put<CambioDetail>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + cambiosPath + cambioId, cambio, httpOptions);
  }

  deleteCamino(proyectoId: number, objetivoId: number, requisitoId: number, cambioId: number): Observable<{}> {
    if (requisitoId === null || requisitoId === 0)
    return this.http.delete(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + cambiosPath + cambioId);
    else
    return this.http.delete(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId + cambiosPath + cambioId);
  }

}

