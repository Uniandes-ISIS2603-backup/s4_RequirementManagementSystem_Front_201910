import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Organizacion } from './organizacion';
import { OrganizacionDetail } from './organizacion.detail';

import { environment } from '../../environments/environment.prod';

//const API_URL = environment.apiURL+"/organizaciones";
const API_URL = 'http://5aedc837.ngrok.io/s4_requirement-api/api/organizaciones';


@Injectable()
export class OrganizacionService {

    /**
    * Constructor del servicio
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Retorna obserbable que contiene lista de Organizacions extraidos del API
    * @returns The list of Organizacions in real time
    */
    getOrganizaciones(): Observable<Organizacion[]> {
        return this.http.get<Organizacion[]>(API_URL);
    }

    /**
    * Crea una nueva Organizacion
    * @param Organizacion
    * @returns El Organizacion creado, null si no se creo exitosamente
    */
    createOrganizacion(Organizacion): Observable<Organizacion> {
        return this.http.post<Organizacion>(API_URL, Organizacion);
    }

    /**
* Crea una nueva Organizacion
* @param Organizacion
* @returns El Organizacion creado, null si no se creo exitosamente
*/
    ProyectoOrganizacion(Organizacion): Observable<Organizacion> {
        return this.http.post<Organizacion>(API_URL, Organizacion);
    }

    /**
    * Retorna organizacion con id dado por parametro extraido del api
    * @returns The author details
    */
    getOrganizacion(OrganizacionId): Observable<Organizacion> {
        return this.http.get<Organizacion>(API_URL + '/' + OrganizacionId);
    }

    /**
        * Actualiza una Organizacion
        * @param Organizacion The updated Organizacion
        * @returns The updated Organizacion
        */
    updateOrganizacion(Organizacion): Observable<Organizacion> {
        return this.http.put<Organizacion>(API_URL + '/' + Organizacion.id, Organizacion);
    }

    /**
    * Elimina una Organizacion
    * @param OrganizacionId The Organizacion's id
    * @returns True if the Organizacion was deleted, false otherwise
    */
    deleteOrganizacion(OrganizacionId): Observable<Organizacion> {
        return this.http.delete<Organizacion>(API_URL + '/' + OrganizacionId);
    }

    /**
 * Returns the Observable object containing the case of use, with its detail, retrieved from the API
 * @param casodeusoId id of the case of use to be retrieved.
 * @returns the case of use, with its detail.
 */
    getOrganizacionesDetail(orgId): Observable<OrganizacionDetail> {
        return this.http.get<OrganizacionDetail>(API_URL + '/' + orgId);
    }

    relacionOrganizacionProyecto(idO, idP, organizacion): Observable<Organizacion> {
        return this.http.post<Organizacion>(API_URL + '/' + idO + '/' + 'proyectos/' + idP, organizacion);
    
}
}
