import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss'],
})
export class DocumentCreateComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    shortTitle: [''],
    fullTitle: ['', [Validators.required]],
    isCaseArticle: [false],
    isExpertise: [false],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private documentService: DocumentService
  ) {}

  ngOnInit(): void {}

  create() {
    this.documentService.createOrEditDocument(this.form.value).subscribe(() => {
      this.router.navigate(['/documents']);
    });
  }
}
