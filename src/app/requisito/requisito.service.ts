import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Requisito } from './requisito';
import { environment } from '../../environments/environment.prod';

/**
 * Constante que mantiene la URL a la base de datos a la cual se conecta la aplicación.
 */
const API_URL = environment.apiURL;

const proyectosPath = '/proyectos/';
const objetivosPath = '/objetivos/';
const reqsPath = '/requisitos/';
/**
 * Constante de clase para definir la lectura de objetos en formato json.
 */
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
/**
 * Clase que provee los servicios necesarios para responder a las peticiones que pueden hacerse sobre los requisitos de la aplicación.
 */
export class RequisitoService {


  /**
   * Constructor del servicio
   * @param http El cliente Http del servicio RequisitoService
   */
  constructor(
    private http: HttpClient
  ) { }

  /**
   * GET
   * Pide la lista de todos los requisitos desde la DB.
   */
  getRequisitos(proyectoId:number, objetivoId:number): Observable<Requisito[]> {
    return this.http.get<Requisito[]>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath);
  }

  /**
   * GET/:id
   * @param id El identificador único del requisito que se busca en la DB. 
   */
  getRequisito(proyectoId:number, objetivoId:number,requisitoId: number): Observable<Requisito> {
    return this.http.get<Requisito>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId);
  }

  /**
   * DELETE:
   * Borra el requisito de la base de datos que tiene el mismo identificador pasado por parámetro.
   * @param id El identificador único del requisito a borrar
   */
  deleteRequisito(proyectoId:number, objetivoId:number,requisitoId: number): Observable<{}> {
    return this.http.delete(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId);
  }

   /**
    * POST:
    * Agrega un requisito a la DB, a partir del Requisito req que llega por parámetro. 
    * @param req 
    */
   addRequisito(proyectoId:number, objetivoId:number, req): Observable<Requisito> {
    return this.http.post<Requisito>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath, req, httpOptions);
  }

  /**
   * UPDATE:
   * Actualiza una entrada de un Requisito existente dentro de la DB, identificada con el parámetro id, a partir de un nuevo Objeto. 
   * @param id 
   * @param nuevo 
   */
  updateRequisito(proyectoId:number, objetivoId:number,requisitoId: number, nuevo)
  {
   return this.http.put<Requisito>(API_URL + proyectosPath + proyectoId + objetivosPath + objetivoId + reqsPath + requisitoId, nuevo, httpOptions);
  }


}