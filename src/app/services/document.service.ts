import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Document } from '../entities/document.entitie';

@Injectable()
export class DocumentService {
  constructor(private http: HttpClient) {}

  getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(
      environment.apiUrl + '/Documents/AllDocuments'
    );
  }

  getDocument(id: number): Observable<Document> {
    return this.http.get<Document>(
      environment.apiUrl + '/Documents/Document?id=' + id
    );
  }

  getDocumentPlain(id: number): Observable<Document> {
    return this.http.get<Document>(
      environment.apiUrl + '/Documents/PlainDocument?id=' + id
    );
  }

  createOrEditDocument(document: Document): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/Documents/CreateOrEdit',
      document
    );
  }
}
