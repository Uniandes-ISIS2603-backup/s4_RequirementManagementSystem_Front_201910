import {Injectable} from './stakeholder-edit/node_modules/@angular/core';
import {Observable} from './stakeholder-edit/node_modules/rxjs';
import {HttpClient} from '@angular/common/http';

import {Stakeholder} from './stakeholder';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const Stakeholders = '/Stakeholders';
const reviews = '/reviews';


/**
* The service provider for everything related to Stakeholders
*/
@Injectable()
export class StakeholderService {

    /**
    * Constructor del servicio
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Retorna obserbable que contiene lista de Stakeholders extraidos del API
    * @returns The list of Stakeholders in real time
    */
    getStakeholders(): Observable<Stakeholder[]> {
        return this.http.get<Stakeholder[]>(API_URL + Stakeholders);
    }

    /**
    * Crea un nuevo Stakeholder
    * @param Stakeholder
    * @returns El Stakeholder creado, null si no se creo exitosamente
    */
    createStakeholder(Stakeholder): Observable<Stakeholder> {
        return this.http.post<Stakeholder>(API_URL + Stakeholders, Stakeholder);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getStakeholder(StakeholderId): Observable<Stakeholder> {
        return this.http.get<Stakeholder>(API_URL + Stakeholders + '/' + StakeholderId);
    }

    /**
        * Updates a new Stakeholder
        * @param Stakeholder The updated Stakeholder
        * @returns The updated Stakeholder
        */
    updateStakeholder(Stakeholder): Observable<Stakeholder> {
        return this.http.put<Stakeholder>(API_URL + Stakeholders + '/' + Stakeholder.id, Stakeholder);
    }
    
    /**
    * Deletes a Stakeholder
    * @param StakeholderId The Stakeholder's id
    * @returns True if the Stakeholder was deleted, false otherwise
    */
    deleteStakeholder(StakeholderId): Observable<Stakeholder> {
        return this.http.delete<Stakeholder>(API_URL + Stakeholders + '/' + StakeholderId);
    }
}
