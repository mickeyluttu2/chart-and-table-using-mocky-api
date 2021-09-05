import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  constructor(private _http: HttpClient) { }

  // getChartData() {
  //   return this._http.get("https://run.mocky.io/v3/97b4a742-f660-45ca-ad16-227b1e10e520").pipe(map((result: any) => result));

  // }

  public getTableData(): Observable<any> {
    return this._http.get("https://run.mocky.io/v3/b3e52657-a200-4f98-a6d1-daa5cac07c37");
  }

}

