import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Cambio} from './cambio';
import { CambioDetail } from './cambio-detail';

const API_URL = "../../assets/";
const data = 'cambio.json';
const cambios = '/cambio';

@Injectable()
export class CambioService {

constructor(private http: HttpClient) { }

  getCambios(): Observable<Cambio[]> {
      return this.http.get<Cambio[]>(API_URL + data);
  }

  getCambioDetail(cambioId:number): Observable<CambioDetail> {
    //console.log(cambioId+" "+API_URL + "cambio-" + cambioId+".json");
    return this.http.get<CambioDetail>(API_URL + "cambio-" + cambioId+".json");
  }

  createCambio(cambio): Observable<CambioDetail> {
    return this.http.post<CambioDetail>(API_URL + cambios, cambios);
}

}

