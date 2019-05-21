import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ProyectoDetail } from './proyecto-detail';
import { Observable } from 'rxjs';


/**
 * API_URL is the constant of the API in which the back runs.
 */
const API_URL = environment.apiURL;
/**
 * API_URL is the constant of the route proyectos to fetch the components of proyects.
 */
const proyectos = '/proyectos/';

/**
 * The service provider for everything related to project.
 */
@Injectable()
export class ProyectoService {

  /**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) { }

  /**
  * Returns the Observable object containing the list of projects retrieved from the API
  * @returns The list of projects in real time.
  */
 getProyectos(): Observable<ProyectoDetail[]> {
  return this.http.get<ProyectoDetail[]>(API_URL + proyectos);
}

/**
 * Returns the Observable object containing the projects, with its detail, retrieved from the API
 * @param proyectoId id of the project to be retrieved.
 * @returns the project, with its detail.
 */
getProyectoDetail(proyectoId): Observable<ProyectoDetail> {
  return this.http.get<ProyectoDetail>(API_URL+proyectos + proyectoId );

}

/**
* Creates a project
* @param proyecto The project that will be created.
* @returns The confirmation of the project's creation
*/
createProyecto(proyecto): Observable<ProyectoDetail>{
  return this.http.post<ProyectoDetail>(API_URL+proyectos,proyecto);
}

/**
* Updates a project
* @param proyecto The project which will be updated
* @returns The confirmation of the project's update
*/
updateProyecto(proyecto): Observable<ProyectoDetail> {
  return this.http.put<ProyectoDetail>(API_URL + proyectos + proyecto.id, proyecto);
}

/**
 * DELETE:
 * Borra el proyecto de la base de datos que tiene el mismo identificador pasado por parámetro.
 * @param id El identificador único del proyecto a borrar
 */
deleteProyecto(proyectoId): Observable<{}> {
  return this.http.delete(API_URL+proyectos+proyectoId);
}


}