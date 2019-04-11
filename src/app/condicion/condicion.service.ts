import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Condicion } from './condicion';
import { Observable } from 'rxjs';
import { CondicionDetail } from './condicion-detail';

const API_URL = "../../assets/";
const condiciones = 'condicion.json';

@Injectable()
export class CondicionService {

  constructor(private http: HttpClient) { }

  getCondiciones(): Observable<Condicion[]> {
    return this.http.get<Condicion[]>(API_URL + condiciones);
  }

  getCondicionesDetail(condicionId): Observable<CondicionDetail> {
    return this.http.get<CondicionDetail>(API_URL + "condicion-" + condicionId + ".json");
  }
}
