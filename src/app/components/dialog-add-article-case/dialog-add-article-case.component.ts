import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { Article } from 'src/app/entities/article.entitie';
import { Document } from 'src/app/entities/document.entitie';
import { CourtCaseService } from 'src/app/services/court-case.service';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-dialog-add-article-case',
  templateUrl: './dialog-add-article-case.component.html',
  styleUrls: ['./dialog-add-article-case.component.scss'],
})
export class DialogAddArticleCaseComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    courtCaseId: [null],
    articleId: [null, [Validators.required]],
  });

  public documents!: Document[];
  public articles!: Article[];
  public articlesFilter!: Observable<any[]>;
  public documentId!: number;

  constructor(
    public dialogRef: MatDialogRef<DialogAddArticleCaseComponent>,
    @Inject(MAT_DIALOG_DATA) public courtCaseId: number,
    private fb: FormBuilder,
    private documentService: DocumentService,
    private courtCaseService: CourtCaseService
  ) {
    this.form.controls.courtCaseId.setValue(+this.courtCaseId);
  }

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments() {
    this.documentService.getDocuments().subscribe((ds) => {
      this.documents = ds.filter((d) => d.isCaseArticle);
    });
  }

  getDocument(documentId: number) {
    this.documentService.getDocument(documentId).subscribe((d) => {
      this.articles = d.articles;
      this.articlesFilter = this.form.controls.articleId.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value))
      );
      this.form.markAsPristine();
    });
  }

  private _filter(value: string | number): Article[] {
    if (typeof value === 'string') {
      const filterValue = value?.toLowerCase();
      return this.articles.filter((article) =>
        article.title.toLowerCase().includes(filterValue)
      );
    } else {
      const article = this.articles.find((p) => p.articleId === value);
      return article ? [article] : [];
    }
  }

  displayFn(articleId: number): string {
    return this.articles?.find((p) => p.articleId === articleId)?.title || '';
  }

  create() {
    this.courtCaseService
      .createOrEditArticlesCases(this.form.value)
      .pipe(take(1))
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
