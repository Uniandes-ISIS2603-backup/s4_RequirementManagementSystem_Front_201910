import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Condicion } from './condicion';
import { Observable } from 'rxjs';
import { CondicionDetail } from './condicion-detail';

const API_URL = 'https://fcd0e7c8.ngrok.io/s4_requirement-api/api/';
const condiciones = 'condiciones/';

@Injectable()
export class CondicionService {

  constructor(private http: HttpClient) { }

  getCondiciones(): Observable<Condicion[]> {
    return this.http.get<Condicion[]>(API_URL + condiciones);
  }

  getCondicionesDetail(condicionId): Observable<CondicionDetail> {
    return this.http.get<CondicionDetail>(API_URL + condiciones + condicionId );
  }
}
