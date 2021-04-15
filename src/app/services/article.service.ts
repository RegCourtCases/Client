import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Article } from '../entities/article.entitie';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getActicle(articleId: number): Observable<Article> {
    return this.http.get<Article>(
      environment.apiUrl + '/Articles/Article?id=' + articleId
    );
  }

  createOrEdit(article: Article): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + '/Articles/CreateOrEdit',
      article
    );
  }
}
