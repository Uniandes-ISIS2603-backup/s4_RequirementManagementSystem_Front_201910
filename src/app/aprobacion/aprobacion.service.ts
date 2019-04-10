import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Aprobacion } from './aprobacion';
import { AprobacionDetail } from './aprobacion-detail';


const API_URL = "../../assets/";
const data = 'aprobacion.json';
const aprobaciones = '/aprobaciones'
@Injectable()
export class AprobacionService {

  constructor(private http: HttpClient) { }

  getAprobaciones(): Observable<Aprobacion[]> {
      return this.http.get<Aprobacion[]>(API_URL + data);
  }

  getAprobacionDetail(aprobacionId:number): Observable<AprobacionDetail> {
    //console.log(cambioId+" "+API_URL + "cambio-" + cambioId+".json");
    return this.http.get<AprobacionDetail>(API_URL + "aprobacion-" + aprobacionId+".json");
  }

  createAprobacion(aprobacion): Observable<AprobacionDetail> {
    return this.http.post<AprobacionDetail>(API_URL + aprobaciones, aprobaciones);
}
}
