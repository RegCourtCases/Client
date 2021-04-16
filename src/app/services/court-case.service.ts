import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CourtCase } from '../entities/court-case.entitie';

@Injectable()
export class CourtSaseService {
  constructor(private http: HttpClient) {}

  getCourtCases(): Observable<CourtCase[]> {
    return this.http.get<CourtCase[]>(
      environment.apiUrl + '/CourtCases/AllCourtCases'
    );
  }

  getCourtCase(courtCaseId: number): Observable<CourtCase> {
    return this.http.get<CourtCase>(
      environment.apiUrl + '/CourtCases/CourtCase?id=' + courtCaseId
    );
  }

  getCourtCasePlane(courtCaseId: number): Observable<CourtCase> {
    return this.http.get<CourtCase>(
      environment.apiUrl + '/CourtCases/CourtCase?id=' + courtCaseId
    );
  }

  createOrEdit(courtCase: CourtCase): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/CourtCases/CreateOrEdit',
      courtCase
    );
  }
}
