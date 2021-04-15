import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss'],
})
export class ArticleEditComponent implements OnInit {
  public documentId?: number;
  public articleId?: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.pipe(take(1)).subscribe(({ documentId, articleId }) => {
      this.documentId = documentId;
      this.articleId = articleId;
    });
  }

  ngOnInit(): void {}
}
