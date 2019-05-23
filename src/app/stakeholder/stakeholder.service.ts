import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Stakeholder } from './stakeholder';

import { environment } from '../../environments/environment.prod';

//const API_URL = environment.apiURL+"/stakeholders";
const API_URL = 'http://5aedc837.ngrok.io/s4_requirement-api/api/stakeholders';


@Injectable()
export class StakeholderService {

    values;
    /**
    * Constructor del servicio
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Retorna obserbable que contiene lista de Stakeholders extraidos del API
    * @returns The list of Stakeholders in real time
    */
    getStakeholders(): Observable<Stakeholder[]> {
        return this.http.get<Stakeholder[]>(API_URL);
    }

    /**
    * Crea un nuevo Stakeholder
    * @param Stakeholder
    * @returns El Stakeholder creado, null si no se creo exitosamente
    */
    createStakeholder(stakeholder): Observable<Stakeholder> {
        return this.http.post<Stakeholder>(API_URL, stakeholder);
    }

    /**
    * Retorna stakeholder con id correspondiente extraido del api
    * @returns The author details
    */
    getStakeholder(StakeholderId): Observable<Stakeholder> {
        return this.http.get<Stakeholder>(API_URL + '/' + StakeholderId);
    }

    /**
        * Actualiza un Stakeholder
        * @param Stakeholder The updated Stakeholder
        * @returns The updated Stakeholder
        */
    updateStakeholder(Stakeholder): Observable<Stakeholder> {
        return this.http.put<Stakeholder>(API_URL + '/' + Stakeholder.id, Stakeholder);
    }

    /**
    * Elimina un Stakeholder
    * @param StakeholderId The Stakeholder's id
    * @returns True if the Stakeholder was deleted, false otherwise
    */
    deleteStakeholder(stakeholderId: number): Observable<Stakeholder> {
        console.log(API_URL + "/" + stakeholderId);
        return this.http.delete<Stakeholder>(API_URL + "/" + stakeholderId);
    }
}
