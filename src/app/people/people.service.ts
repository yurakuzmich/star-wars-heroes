import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SWPeople } from '../models/people.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople():Observable<SWPeople> {
    return this.http.get<SWPeople>('https://swapi.dev/api/people/');
  }
}
