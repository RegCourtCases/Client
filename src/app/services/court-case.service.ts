import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CourtCase } from '../entities/court-case.entitie';

@Injectable()
export class CourtCaseService {
  constructor(private http: HttpClient) {}

  getCourtCases(): Observable<CourtCase[]> {
    return this.http.get<CourtCase[]>(
      environment.apiUrl + '/CourtCases/AllCourtCases'
    );
  }

  getCourtCasesByPerson(personId: number): Observable<CourtCase[]> {
    return this.http.get<CourtCase[]>(
      environment.apiUrl + '/Persons/PersonCourtCases?id=' + personId
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

  createOrEditThirdParties(data: any): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/ThirdParties/CreateOrEdit',
      data
    );
  }

  createOrEditThingsCases(data: any): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/ThingsCases/CreateOrEdit',
      data
    );
  }

  createOrEditRespondents(data: any): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/Respondents/CreateOrEdit',
      data
    );
  }

  createOrEditProductions(data: any): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/Productions/CreateOrEdit',
      data
    );
  }

  createOrEditPlaintiffs(data: any): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/Plaintiffs/CreateOrEdit',
      data
    );
  }

  createOrEditInterestedParties(data: any): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/InterestedParties/CreateOrEdit',
      data
    );
  }

  createOrEditInspectorsCases(data: any): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/InspectorsCases/CreateOrEdit',
      data
    );
  }

  createOrEditExpertises(data: any): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/Expertises/CreateOrEdit',
      data
    );
  }

  createOrEditEpisodes(data: any): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/Episodes/CreateOrEdit',
      data
    );
  }

  createOrEditEmployeesCases(data: any): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/EmployeesCases/CreateOrEdit',
      data
    );
  }

  createOrEditCaseParticipants(data: any): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/CaseParticipants/CreateOrEdit',
      data
    );
  }

  createOrEditArticlesCases(data: any): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/ArticlesCases/CreateOrEdit',
      data
    );
  }

  getProduction(id: number): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/Productions/Get?id=' + id);
  }
}
