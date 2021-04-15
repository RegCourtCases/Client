import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
