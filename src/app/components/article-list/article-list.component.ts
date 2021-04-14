import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  public documentId?: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.pipe(take(1)).subscribe(({ documentId }) => {
      this.documentId = documentId;
    });
  }

  ngOnInit(): void {}
}
