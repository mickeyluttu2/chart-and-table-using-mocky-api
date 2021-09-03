import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  constructor(private _http: HttpClient) { }

  getChartData() {
    return this._http.get("https://run.mocky.io/v3/c64d746d-89c8-4619-826e-5dc53313c609").pipe(map((result: any) => result));

  }

  public getTableData() {
    return this._http.get("https://run.mocky.io/v3/97b4a742-f660-45ca-ad16-227b1e10e520");
  }

}

