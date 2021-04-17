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
  selector: 'app-dialog-add-expertise',
  templateUrl: './dialog-add-expertise.component.html',
  styleUrls: ['./dialog-add-expertise.component.scss'],
})
export class DialogAddExpertiseComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    courtCaseId: [null],
    articleId: [null, [Validators.required]],
    question: [null, [Validators.required]],
    fileLink: [null, [Validators.required]],
    dateConclusion: [null, [Validators.required]],
    conclusionStatus: [null, [Validators.required]],
  });
  constructor(
    public dialogRef: MatDialogRef<DialogAddExpertiseComponent>,
    @Inject(MAT_DIALOG_DATA) public courtCaseId: number,
    private fb: FormBuilder,
    private documentService: DocumentService,
    private courtCaseService: CourtCaseService
  ) {
    this.form.controls.courtCaseId.setValue(+this.courtCaseId);
  }

  public documents!: Document[];
  public articles!: Article[];
  public articlesFilter!: Observable<any[]>;
  public documentId!: number;

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments() {
    this.documentService.getDocuments().subscribe((ds) => {
      this.documents = ds.filter((d) => d.isExpertise);
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
      .createOrEditExpertises(this.form.value)
      .pipe(take(1))
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
