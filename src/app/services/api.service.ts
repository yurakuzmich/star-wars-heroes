import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SWAPIResponse } from '../models/api-response';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResources, URLOptions } from '../models/api-resources';
import { starWarsPeople } from './../mock-data/people.api';
import { starWarsPlanets } from '../mock-data/planets.api';

const BASE_URL = 'https://swapi.dev/api/';
const PEOPLE = starWarsPeople;
const PLANETS = starWarsPlanets;
const PAGE_SIZE = 3;

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

  //Methods for mock data
  getMockPeople(page = 0) {
    return of({results: PEOPLE.slice((page*PAGE_SIZE), (page*PAGE_SIZE + PAGE_SIZE)), count: PEOPLE.length});
  }

  getMockPlanets(page = 0) {
    return of({results: PLANETS.slice((page*PAGE_SIZE), (page*PAGE_SIZE + PAGE_SIZE)), count: PLANETS.length});
  }
}
