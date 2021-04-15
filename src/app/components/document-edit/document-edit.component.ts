import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.scss'],
})
export class DocumentEditComponent implements OnInit {
  public loaded = false;
  public form: FormGroup = this.fb.group({
    documentId: [null],
    shortTitle: [''],
    fullTitle: ['', [Validators.required]],
    isCaseArticle: [false],
    isExpertise: [false],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private documentService: DocumentService
  ) {
    this.route.params.pipe(take(1)).subscribe(({ documentId }) => {
      this.form.controls.documentId.setValue(documentId);
    });
  }

  ngOnInit(): void {
    this.getDocument();
  }

  getDocument() {
    this.documentService
      .getDocumentPlain(this.form.value.documentId)
      .subscribe((d) => {
        this.form.patchValue(d);
        this.loaded = true;
      });
  }

  edit() {
    this.documentService.createOrEditDocument(this.form.value).subscribe(() => {
      this.router.navigate(['/documents']);
    });
  }
}
