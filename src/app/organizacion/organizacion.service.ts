import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Organizacion} from './organizacion';


const API_URL = '../../assets';
const Organizacions = '/organizacion.json';


/**
* The service provider for everything related to Organizacions
*/
@Injectable()
export class OrganizacionService {

    /**
    * Constructor del servicio
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Retorna obserbable que contiene lista de Organizacions extraidos del API
    * @returns The list of Organizacions in real time
    */
    getOrganizacions(): Observable<Organizacion[]> {
        return this.http.get<Organizacion[]>(API_URL + Organizacions);
    }

    /**
    * Crea un nuevo Organizacion
    * @param Organizacion
    * @returns El Organizacion creado, null si no se creo exitosamente
    */
    createOrganizacion(Organizacion): Observable<Organizacion> {
        return this.http.post<Organizacion>(API_URL + Organizacions, Organizacion);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getOrganizacion(OrganizacionId): Observable<Organizacion> {
        return this.http.get<Organizacion>(API_URL + Organizacions + '/' + OrganizacionId);
    }

    /**
        * Updates a new Organizacion
        * @param Organizacion The updated Organizacion
        * @returns The updated Organizacion
        */
    updateOrganizacion(Organizacion): Observable<Organizacion> {
        return this.http.put<Organizacion>(API_URL + Organizacions + '/' + Organizacion.id, Organizacion);
    }
    
    /**
    * Deletes a Organizacion
    * @param OrganizacionId The Organizacion's id
    * @returns True if the Organizacion was deleted, false otherwise
    */
    deleteOrganizacion(OrganizacionId): Observable<Organizacion> {
        return this.http.delete<Organizacion>(API_URL + Organizacions + '/' + OrganizacionId);
    }
}
