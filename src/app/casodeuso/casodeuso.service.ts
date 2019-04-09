import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Casodeuso } from './casodeuso';
import { Observable } from 'rxjs';
import { CasodeusoDetail } from './casodeuso-detail';


const API_URL = "../../assets/";
const casos = 'casodeuso.json';

@Injectable()
export class CasodeusoService {

  constructor(private http: HttpClient) { }

  getCasosdeuso(): Observable<Casodeuso[]> {
    return this.http.get<Casodeuso[]>(API_URL + casos);
  }

  getCasosdeusoDetail(casodeusoId): Observable<CasodeusoDetail> {
    return this.http.get<CasodeusoDetail>(API_URL + "casodeuso-" + casodeusoId + ".json");
  }
}
