import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SWAPIResponse } from '../models/api-response';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResources, URLOptions } from '../models/api-resources';

const BASE_URL = 'https://swapi.dev/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getItems<T>(resource: ApiResources, options: URLOptions): Observable<SWAPIResponse<T>> {
    const params = new HttpParams()
    for (const [key, value] of Object.entries(options)) {
      params.set(key, value);
    }
    return this.http.get<SWAPIResponse<T>>(`${BASE_URL}${resource}`, { params });
  }
}
