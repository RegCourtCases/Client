import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  public articles: any;
  public documentId!: number;

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService
  ) {
    this.route.params.pipe(take(1)).subscribe(({ documentId }) => {
      this.documentId = documentId;
    });
  }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.documentService
      .getDocument(this.documentId)
      .pipe(take(1))
      .subscribe((d) => {
        this.articles = d.articles;
      });
  }

  delete(articleId: number) {
    this.articles = this.articles.filter((a: any) => a.articleId !== articleId);
  }
}
