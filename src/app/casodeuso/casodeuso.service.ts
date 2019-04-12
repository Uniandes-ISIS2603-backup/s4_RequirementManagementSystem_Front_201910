import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Casodeuso } from './casodeuso';
import { Observable } from 'rxjs';
import { CasodeusoDetail } from './casodeuso-detail';


const API_URL = 'https://fcd0e7c8.ngrok.io/s4_requirement-api/api/';
//http://localhost:8080/s4_requirement-api/api/
const casos = 'casos/';
/*const API_URLP= '../../assets/';*/

@Injectable()
export class CasodeusoService {

  constructor(private http: HttpClient) { }

  getCasosdeuso(): Observable<CasodeusoDetail[]> {
    return this.http.get<CasodeusoDetail[]>(API_URL + casos);
  }

  getCasosdeusoDetail(casodeusoId): Observable<CasodeusoDetail> {
    return this.http.get<CasodeusoDetail>(API_URL+casos + casodeusoId );
    /*return this.http.get<CasodeusoDetail>(API_URLP+"casodeuso-"+casodeusoId+".json");*/

  }



  

  createCasodeuso(caso): Observable<CasodeusoDetail>{
    return this.http.post<CasodeusoDetail>(API_URL+casos,caso);
  }

  updateCasodeuso(caso): Observable<CasodeusoDetail> {
    return this.http.put<CasodeusoDetail>(API_URL + casos + caso.id, caso);
  }


}
