import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Person } from '../entities/person.entitie';

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(environment.apiUrl + '/Persons/AllPersons');
  }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(
      environment.apiUrl + '/Persons/Person?id=' + id
    );
  }

  getEmployees(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/Employees/GetAll');
  }

  createOrEditPerson(person: Person): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/Persons/CreateOrEdit',
      person
    );
  }
}
